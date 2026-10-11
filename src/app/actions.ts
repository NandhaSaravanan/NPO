"use server";

import { site } from "@content/site";
import { forms } from "@/lib/forms";
import { validate, type FieldErrors } from "@/lib/validation";
import { buildMailto } from "@/lib/mailto";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "invalid"; errors: FieldErrors; values: Record<string, string> }
  | { status: "fallback"; mailto: string; values: Record<string, string> }
  | { status: "error"; mailto: string; values: Record<string, string> };

const TABLES: Record<keyof typeof forms, { table: string; columns: Record<string, string> }> = {
  nonprofit: {
    table: "nonprofit_applications",
    columns: {
      orgName: "org_name", contactName: "contact_name", email: "email", phone: "phone",
      location: "location", orgType: "org_type", currentSite: "current_site", needs: "needs",
    },
  },
  volunteer: {
    table: "volunteer_signups",
    columns: { name: "name", email: "email", school: "school", grade: "grade", role: "role", portfolio: "portfolio", about: "about" },
  },
  contact: {
    table: "contact_messages",
    columns: { name: "name", email: "email", topic: "topic", message: "message" },
  },
};

export async function submitForm(_prev: FormState, formData: FormData): Promise<FormState> {
  const id = String(formData.get("formId") ?? "") as keyof typeof forms;
  const form = forms[id];
  if (!form) return { status: "error", mailto: `mailto:${site.email}`, values: {} };

  const values: Record<string, string> = {};
  for (const field of form.fields) values[field.name] = String(formData.get(field.name) ?? "");

  // Honeypot: real people never fill this in. Pretend it worked.
  if (String(formData.get("website_url") ?? "").trim()) return { status: "success" };

  const errors = validate(form, values);
  if (Object.keys(errors).length) return { status: "invalid", errors, values };

  const labels = Object.fromEntries(form.fields.map((f) => [f.name, f.label.replace(" (optional)", "")]));
  const mailto = buildMailto(form.subject, labels, values);

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { table, columns } = TABLES[id];
    const row = Object.fromEntries(
      Object.entries(columns).map(([field, column]) => [column, values[field].trim() || null]),
    );
    try {
      const { error } = await supabase.from(table).insert(row);
      if (error) {
        console.error(`Supabase insert into ${table} failed:`, error.message);
        return { status: "error", mailto, values };
      }
      return { status: "success" };
    } catch (err) {
      console.error(`Supabase insert into ${table} threw:`, err);
      return { status: "error", mailto, values };
    }
  }

  const endpoint = process.env.FORM_ENDPOINT?.trim();
  if (!endpoint) return { status: "fallback", mailto, values };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ form: form.id, subject: `${site.name}: ${form.subject}`, ...values }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return { status: "error", mailto, values };
    return { status: "success" };
  } catch {
    return { status: "error", mailto, values };
  }
}
