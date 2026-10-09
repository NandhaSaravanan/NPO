import type { FieldDef, FormDef } from "@content/types";

export type FieldErrors = Record<string, string>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validUrl(value: string) {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function checkField(field: FieldDef, raw: string): string | null {
  const value = raw.trim();
  if (!value) return field.required ? `${field.label.replace(" (optional)", "")} is required.` : null;
  if (field.maxLength && value.length > field.maxLength) {
    return `Please keep this under ${field.maxLength} characters.`;
  }
  if (field.type === "email" && !EMAIL.test(value)) return "Enter a valid email address.";
  if (field.type === "url" && !validUrl(value)) return "Enter a full web address starting with http:// or https://.";
  if (field.type === "tel" && !/^[\d\s().+-]{7,}$/.test(value)) return "Enter a valid phone number.";
  if (field.type === "select" && field.options && !field.options.includes(value)) {
    return "Choose one of the options.";
  }
  return null;
}

/** Shared by the browser (instant feedback) and the server action (the real check). */
export function validate(form: FormDef, data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  for (const field of form.fields) {
    const message = checkField(field, data[field.name] ?? "");
    if (message) errors[field.name] = message;
  }
  return errors;
}
