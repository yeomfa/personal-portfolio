'use client';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme = 'dark', setTheme } = useTheme();
  const isLight = resolvedTheme === 'light';

  const toggleTheme = () => {
    const selectedTheme = isLight ? 'dark' : 'light';
    setTheme(selectedTheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => toggleTheme()}
      className={`text-white p-1 rounded-md hover:cursor-pointer bg-primary hover:bg-primary/80`}
    >
      {mounted &&
        (isLight ? (
          <MoonIcon size={20} weight="bold" />
        ) : (
          <SunIcon size={20} weight="bold" />
        ))}
    </button>
  );
}
