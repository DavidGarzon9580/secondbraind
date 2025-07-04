'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // No renderizar el botón en el servidor para evitar desajustes
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 font-semibold rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-200"
    >
      Cambiar a {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}