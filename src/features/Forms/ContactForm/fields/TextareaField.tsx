
type Props = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  required?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextareaField: React.FC<Props> = ({
  id,
  label,
  placeholder,
  value,
  required = false,
  error,
  onChange,
}) => (
  <div className="second-brain-contact-form__group">
    <label htmlFor={id} className="second-brain-contact-form__label">
      {label} {required && "*"}
    </label>
    <textarea
      id={id}
      name={id}
      className="second-brain-contact-form__textarea"
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

export default TextareaField;
