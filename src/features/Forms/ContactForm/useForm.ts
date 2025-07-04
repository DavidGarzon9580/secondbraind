import { useState, useCallback } from "react";
import type { ChangeEvent, FormEvent } from "react";


function normalizeValue(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) {
  const { type, checked, value } = e.target as HTMLInputElement;
  return type === "checkbox" ? checked : value;
}


function updateFormData<T>(prev: T, name: string, value: any): T {
  return { ...prev, [name]: value };
}


function runValidation<T>(
  data: T,
  validateFn: (values: T) => Partial<Record<keyof T, string>>
) {
  return validateFn(data);
}


export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validateFn: (values: T) => Partial<Record<keyof T, string>>,
  onSubmitFn?: (values: T) => void
) {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});


  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name } = e.target;
      const value = normalizeValue(e);

      setFormData((prev) => updateFormData(prev, name, value));

      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    },
    []
  );


  const validate = useCallback(() => {
    const validationErrors = runValidation(formData, validateFn);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [formData, validateFn]);


  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!validate()) return;
      onSubmitFn?.(formData);
    },
    [formData, validate, onSubmitFn]
  );


  const resetForm = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
  }, [initialValues]);


  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    setFormData,
  };
}
