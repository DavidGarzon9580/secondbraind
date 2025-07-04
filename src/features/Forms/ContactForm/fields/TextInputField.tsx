import React from "react";

type Props = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInputField: React.FC<Props> = ({
  id,
  label,
  placeholder,
  value,
  type = "text",
  required = false,
  error,
  onChange,
}) => (
  <div className="second-brain-contact-form__group">
    <label htmlFor={id} className="second-brain-contact-form__label">
      {label} {required && "*"}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      className="second-brain-contact-form__input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      aria-required={required}
      aria-describedby={`${id}-error`}
    />
    {error && (
      <p id={`${id}-error`} className="second-brain-contact-form__error" role="alert">
        {error}
      </p>
    )}
  </div>
);

export default TextInputField;
