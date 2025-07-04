
type Props = {
  id: string;
  label: string;
  options: string[];
  placeholder: string;
  value: string;
  required?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  translateOption: (option: string) => string;
};

const SelectField: React.FC<Props> = ({
  id,
  label,
  options,
  placeholder,
  value,
  required = false,
  error,
  onChange,
  translateOption,
}) => (
  <div className="second-brain-contact-form__group">
    <label htmlFor={id} className="second-brain-contact-form__label">
      {label} {required && "*"}
    </label>
    <select
      id={id}
      name={id}
      className="second-brain-contact-form__select"
      value={value}
      onChange={onChange}
      required={required}
      aria-required={required}
      aria-describedby={`${id}-error`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {translateOption(opt)}
        </option>
      ))}
    </select>
    {error && (
      <p id={`${id}-error`} className="second-brain-contact-form__error" role="alert">
        {error}
      </p>
    )}
  </div>
);

export default SelectField;
