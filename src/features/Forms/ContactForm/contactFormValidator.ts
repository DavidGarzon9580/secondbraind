export const validateContactForm = (
  values: Record<string, any>,
  t: (key: string) => string
) => {
  const errors: Partial<Record<string, string>> = {};

  if (!values.fullname?.trim()) errors.fullname = t("errors.fullname");
  if (!values.email?.trim()) {
    errors.email = t("errors.email.required");
  } else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(values.email)) {
    errors.email = t("errors.email.invalid");
  }
  if (!values.reason) errors.reason = t("errors.reason");
  if (!values.message?.trim()) errors.message = t("errors.message");
  if (!values.terms) errors.terms = t("errors.terms");

  return errors;
};
