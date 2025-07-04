import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Check } from "lucide-react";
import Prices from "@/shared/ui/Prices/Prices";

const plans = [
  { key: "free", featured: false, price: 3 },
  { key: "pro", featured: true, price: 4 },
  { key: "team", featured: false, price: 5 },
];

export default async function Pricing() {
  const t = await getTranslations("pricing");

  return (
    <section id="prices" aria-labelledby="pricing-heading">
      <div>
        <h2 id="pricing-heading">{t("title")}</h2>
        <p>{t("subtitle")}</p>

        <div>
          {plans.map(({ key, featured, price }) => (
            <div key={key} role="listitem">
              {featured && <span>{t("mostPopular")}</span>}

              <div>
                <h3>{t(`${key}.title`)}</h3>
                <p><Prices baseAmount={price} /></p>
                <ul>
                  {(t.raw(`${key}.features`) as string[]).map((f, i) => (
                    <li key={i}>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="pay">{t(`${key}.button`)}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
