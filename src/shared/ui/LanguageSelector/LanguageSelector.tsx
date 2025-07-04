"use client";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSelector() {
    const locale = useLocale();

    const router = useRouter();
    const pathname = usePathname();

    const [isPending, startTransition] = useTransition();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <div className="relative">
            <select
                id="language-select"
                onChange={handleChange}
                defaultValue={locale}
                disabled={isPending}
                aria-label="Select language"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base text-gray-800 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
                <option value="en-US">🇺🇸 ENG</option>
                <option value="es-ES">🇪🇸 ESP</option>
                <option value="es-MX">🇲🇽 ESP</option>
                <option value="es-CO">🇨🇴 ESP</option>
                <option value="de-DE">🇩🇪 DEU</option>
                <option value="fr-FR">🇫🇷 FRA</option>
                <option value="ru-RU">🇷🇺 РУС</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </div>
        </div>
    );
}