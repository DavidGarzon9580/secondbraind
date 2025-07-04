
type Props = {
  id: string;
  label: React.ReactNode;
  checked: boolean;
  required?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxField: React.FC<Props> = ({
  id,
  label,
  checked,
  required = false,
  error,
  onChange,
}) => (
  <div className="second-brain-contact-form__checkbox-group">
    <input
      id={id}
      type="checkbox"
      name={id}
      checked={checked}
      onChange={onChange}
      className="second-brain-contact-form__input"
      required={required}
      aria-required={required}
      aria-describedby={`${id}-error`}
    />
    <label htmlFor={id} className="second-brain-contact-form__label">
      {label}
    </label>
    {error && (
      <p id={`${id}-error`} className="second-brain-contact-form__error" role="alert">
        {error}
      </p>
    )}
  </div>
);

export default CheckboxField;
