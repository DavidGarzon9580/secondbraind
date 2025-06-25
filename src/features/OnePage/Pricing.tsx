import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Check } from 'lucide-react'; 

const pricingPlans = [
  {
    key: 'free',
    isFeatured: false,
    cardClassName: 'bg-white',
    buttonClassName: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  },
  {
    key: 'pro',
    isFeatured: true, 
    cardClassName: 'bg-gray-900 text-white border-2 border-indigo-500',
    buttonClassName: 'bg-indigo-600 text-white hover:bg-indigo-700',
  },
  {
    key: 'team',
    isFeatured: false,
    cardClassName: 'bg-white',
    buttonClassName: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  },
];

export default async function Pricing() {
  const t = await getTranslations("pricing");

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="prices" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900" id="pricing-heading">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          {t("subtitle")}
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.key}
              className={`rounded-2xl p-8 shadow-lg flex flex-col transition-transform duration-300 hover:-translate-y-2 ${plan.cardClassName} ${plan.isFeatured ? 'relative' : ''}`}
              role="listitem"
            >
              {plan.isFeatured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    {t('mostPopular')}
                  </span>
                </div>
              )}

              <div className="flex-grow">
                <h3 className="text-2xl font-semibold">{t(`${plan.key}.title`)}</h3>
                <p className="mt-4 text-4xl font-bold">
                  {/* Aquí podrías poner tu componente de precio */}
                  {t(`${plan.key}.price`)}
                  <span className="text-base font-medium text-gray-400">{t('priceSuffix')}</span>
                </p>
                <ul className="mt-8 space-y-4 text-left">
                  {/* Mapeamos las features dinámicamente también */}
                  {(t.raw(`${plan.key}.features`) as string[]).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="pay"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-colors duration-200 ${plan.buttonClassName}`}
                >
                  {t(`${plan.key}.button`)}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}