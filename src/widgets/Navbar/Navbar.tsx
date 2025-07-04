"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import Logo_Second_Brain from "@/shared/ui/Logo_Second_Brain/Logo_Second_Brain";
import LanguageSelector from "@/shared/ui/LanguageSelector/LanguageSelector";
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";

export default function Navbar() {
  const t = useTranslations("navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-gray-200 z-50" role="banner">
      <Logo_Second_Brain />
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <nav className="hidden md:flex md:items-center md:space-x-8" role="navigation">
        <Link href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium">
          {t("linkhome")}
        </Link>
        <Link href="#about-us" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium">
          {t("linkaboutus")}
        </Link>
        <Link href="#prices" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium">
          {t("linkplans")}
        </Link>
        <Link href="#contact-us" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium">
          {t("linkcontactus")}
        </Link>
        <LanguageSelector />
        <ThemeSwitcher />
        

      </nav>

      {isMenuOpen && (
        <nav
          className="absolute top-full left-0 w-full bg-white border-t border-gray-200 md:hidden flex flex-col items-center space-y-4 py-8"
          onClick={closeMenu}
        >
          <Link href="#home" className="text-lg text-gray-700 hover:text-indigo-600">
            {t("linkhome")}
          </Link>
          <Link href="#about-us" className="text-lg text-gray-700 hover:text-indigo-600">
            {t("linkaboutus")}
          </Link>
          <Link href="#prices" className="text-lg text-gray-700 hover:text-indigo-600">
            {t("linkplans")}
          </Link>
          <Link href="#contact-us" className="">
            {t("linkcontactus")}
          </Link>

        </nav>
      )}
    </header>
  );
}