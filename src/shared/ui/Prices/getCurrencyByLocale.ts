export const getCurrencyByLocale = (locale: string): string => {
  const map: Record<string, string> = {
    'en-us': 'USD',
    'es-mx': 'MXN',
    'es-co': 'COP',
    'es-es': 'EUR',
    'fr-fr': 'EUR',
    'de-de': 'EUR',
    'ru-ru': 'RUB',
    "ja-ja": "YEN",
  }

  return map[locale.toLowerCase()] || 'USD'
}
