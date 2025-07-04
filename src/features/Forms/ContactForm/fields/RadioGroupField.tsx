
type Props = {
  name: string;
  legend: string;
  options: string[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  translateOption: (option: string) => string;
};

const RadioGroupField: React.FC<Props> = ({
  name,
  legend,
  options,
  selectedValue,
  onChange,
  translateOption,
}) => (
  <fieldset className="second-brain-contact-form__fieldset">
    <legend className="second-brain-contact-form__legend">{legend}</legend>
    {options.map((opt) => (
      <div key={opt} className="second-brain-contact-form__radio-group">
        <input
          id={`${name}-${opt}`}
          type="radio"
          name={name}
          value={opt}
          checked={selectedValue === opt}
          onChange={onChange}
          className="second-brain-contact-form__input"
        />
        <label htmlFor={`${name}-${opt}`} className="second-brain-contact-form__label">
          {translateOption(opt)}
        </label>
      </div>
    ))}
  </fieldset>
);

export default RadioGroupField;
