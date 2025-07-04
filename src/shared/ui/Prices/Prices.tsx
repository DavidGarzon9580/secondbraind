"use client";

import { useTranslations, useLocale } from "next-intl";
import { getCurrencyByLocale } from "./getCurrencyByLocale";

type Props = {
  baseAmount: number;
};

const conversionRates: Record<string, number> = {
  USD: 1,
  EUR: 0.93,
  MXN: 17,
  COP: 3900,
  RUB: 91,
};

export default function PriceComponent({ baseAmount }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const currency = getCurrencyByLocale(locale);

  const rate = conversionRates[currency] ?? 1;
  const convertedAmount = baseAmount * rate;

  const formattedNumber = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(convertedAmount);

  return (
    <span>
      {formattedNumber} / {t("pricing.perMonth")}
    </span>
  );
}
