import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en-US', 'es-ES', 'es-MX', 'fr-FR', 'de-DE', 'ru-RU', 'es-CO'],
 
  defaultLocale: 'en-US'
});