"use client";

import { useTranslations } from "next-intl";

import { useForm } from "./useForm";
import { validateContactForm } from "./contactFormValidator";
import { textFields, reasonOptions, sourceOptions } from "./contactFormFields";

import TextInputField from "./fields/TextInputField";
import SelectField from "./fields/SelectField";
import RadioGroupField from "./fields/RadioGroupField";
import CheckboxField from "./fields/CheckboxField";
import TextareaField from "./fields/TextareaField";
import Link from "next/link";

const initialData = {
    fullname: "",
    company: "",
    email: "",
    phone: "",
    reason: "",
    source: "",
    terms: false,
    message: "",
};

const ContactForm: React.FC = () => {
    const t = useTranslations("contactForm");

    const onSubmit = (data: typeof initialData) => {
        console.log("Form submitted:", data);
        alert(t("errors.message.success"));
        resetForm();
    };

    const { formData, errors, handleChange, handleSubmit, resetForm } = useForm(
        initialData,
        (values) => validateContactForm(values, t),
        onSubmit
    );

    return (
        <form
            className="second-brain-contact-form"
            onSubmit={handleSubmit}
            aria-labelledby="contact-form-title"
            noValidate
        >
            <h2 id="contact-form-title" className="second-brain-contact-form__title">
                {t("title")}
            </h2>

            <div className="second-brain-contact-form__row">
                {textFields.slice(0, 2).map(({ key, type, required }) => (
                    <TextInputField
                        key={key}
                        id={key}
                        type={type}
                        label={t(`fields.${key}`)}
                        placeholder={t(`placeholders.${key}`)}
                        value={formData[key as keyof typeof formData] as string}
                        required={required}
                        error={errors[key as keyof typeof errors]}
                        onChange={handleChange}
                    />
                ))}
            </div>

            <div className="second-brain-contact-form__row">
                {textFields.slice(2).map(({ key, type, required }) => (
                    <TextInputField
                        key={key}
                        id={key}
                        type={type}
                        label={t(`fields.${key}`)}
                        placeholder={t(`placeholders.${key}`)}
                        value={formData[key as keyof typeof formData] as string}
                        required={required}
                        error={errors[key as keyof typeof errors]}
                        onChange={handleChange}
                    />
                ))}
            </div>

            <SelectField
                id="reason"
                label={t("fields.reason")}
                options={reasonOptions}
                placeholder={t("placeholders.selectReason")}
                value={formData.reason}
                required
                error={errors.reason}
                onChange={handleChange}
                translateOption={(opt) => t(`reasons.${opt}`)}
            />

            <RadioGroupField
                name="source"
                legend={t("sourceLegend")}
                options={sourceOptions}
                selectedValue={formData.source}
                onChange={handleChange}
                translateOption={(opt) => t(`sources.${opt}`)}
            />

            <CheckboxField
                id="terms"
                label={<Link href="#">{t("fields.terms")}</Link>}
                checked={formData.terms}
                required
                error={errors.terms}
                onChange={handleChange}
            />

            <TextareaField
                id="message"
                label={t("fields.message")}
                placeholder={t("placeholders.message")}
                value={formData.message}
                required
                error={errors.message}
                onChange={handleChange}
            />

            <button type="submit" className="second-brain-contact-form__button">
                {t("send")}
            </button>
        </form>
    );
};

export default ContactForm;
