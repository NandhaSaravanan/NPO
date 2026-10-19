"use client";

import Link from "next/link";
import { useActionState, useRef, useState } from "react";
import type { FieldDef, FormDef } from "@content/types";
import { site } from "@content/site";
import { submitForm, type FormState } from "@/app/actions";
import { validate, type FieldErrors } from "@/lib/validation";

const inputCls =
  "mt-1.5 block w-full field rounded-ui border bg-white px-4 py-3 text-base text-pine placeholder:text-[#66736c] aria-[invalid=true]:border-[#b42318] aria-[invalid=true]:bg-[#fff6f5]";

function Field({ field, error, value, formId }: { field: FieldDef; error?: string; value: string; formId: string }) {
  const id = `${formId}-${field.name}`;
  const describedBy = [field.help ? `${id}-help` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;
  const common = {
    id,
    name: field.name,
    required: field.required,
    defaultValue: value,
    placeholder: field.placeholder,
    autoComplete: field.autoComplete,
    maxLength: field.maxLength,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    className: inputCls,
  } as const;

  return (
    <div>
      <label htmlFor={id} className="block font-semibold">
        {field.label}
        {field.required && <span className="text-[#b42318]" aria-hidden="true"> *</span>}
      </label>
      {field.help && <p id={`${id}-help`} className="text-sm text-muted">{field.help}</p>}
      {field.type === "textarea" ? (
        <textarea {...common} rows={5} />
      ) : field.type === "select" ? (
        <select {...common} defaultValue={value}>
          <option value="">Choose one</option>
          {field.options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input {...common} type={field.type} />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-[#b42318]">{error}</p>
      )}
    </div>
  );
}

export function Form({ form }: { form: FormDef }) {
  const [state, action, pending] = useActionState<FormState, FormData>(submitForm, { status: "idle" });
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const ref = useRef<HTMLFormElement>(null);

  if (state.status === "success") {
    return (
      <div role="status" className="card p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-granite text-cobalt">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h3 className="mt-4 text-xl">{form.successTitle}</h3>
        <p className="mt-2 text-muted">{form.successBody}</p>
      </div>
    );
  }

  const values = "values" in state ? state.values : {};
  const errors: FieldErrors = Object.keys(clientErrors).length ? clientErrors : state.status === "invalid" ? state.errors : {};
  const errorCount = Object.keys(errors).length;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const data: Record<string, string> = {};
    const fd = new FormData(e.currentTarget);
    for (const f of form.fields) data[f.name] = String(fd.get(f.name) ?? "");
    const found = validate(form, data);
    setClientErrors(found);
    if (Object.keys(found).length) {
      e.preventDefault();
      const first = form.fields.find((f) => found[f.name]);
      if (first) ref.current?.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus();
    }
  }

  return (
    <form ref={ref} action={action} onSubmit={onSubmit} noValidate className="card space-y-5 p-6 md:p-8">
      <input type="hidden" name="formId" value={form.id} />
      {/* Honeypot, hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>Leave this field empty<input type="text" name="website_url" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {errorCount > 0 && (
        <div role="alert" className="rounded-ui border border-[#b42318] bg-[#fff6f5] p-4 font-semibold text-[#8a1c12]">
          Please fix {errorCount === 1 ? "1 field" : `${errorCount} fields`} below and try again.
        </div>
      )}
      {(state.status === "fallback" || state.status === "error") && (
        <div role="alert" className="rounded-ui border border-cobalt bg-granite p-4">
          <p className="font-semibold">
            {state.status === "error"
              ? "We could not send your message automatically."
              : "Online sending is not connected on this site yet."}
          </p>
          <p className="mt-1 text-muted">
            Nothing has been sent. Your answers are kept below. Use the button to send them from your own email app, or write to{" "}
            <a className="link font-semibold" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <a href={state.mailto} className="btn btn-secondary mt-3 !min-h-10 !py-2">Open email with my answers</a>
        </div>
      )}

      {form.fields.map((f) => (
        <Field key={f.name} field={f} error={errors[f.name]} value={values[f.name] ?? ""} formId={form.id} />
      ))}

      <button type="submit" disabled={pending} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
        {pending ? "Sending…" : form.submitLabel}
      </button>
      <p className="text-sm text-muted">
        We only use what you send to reply and run our programs. See our <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </form>
  );
}
