
import { NextIntlClientProvider, useMessages } from 'next-intl';

import Navbar from '@/widgets/Navbar/Navbar'; 

export default function MarketingLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      
      <div className="flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>
        
        
      </div>
    </NextIntlClientProvider>
  );
}