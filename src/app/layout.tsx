// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "next-themes"; // or the correct path if you use a custom ThemeProvider
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Second Brain",
//   description: "A personal knowledge management system",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body >       
//         <ThemeProvider>
//          {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import { Inter } from 'next/font/google';
import { Providers } from './providers'; // Importamos el proveedor
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Prueba Modo Oscuro',
  description: 'Test de Tailwind v4 y Next.js',
};

import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // ¡OJO! suppressHydrationWarning es importante
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers> {/* Envolvemos la app */}
      </body>
    </html>
  );
}
