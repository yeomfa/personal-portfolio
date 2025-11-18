'use client';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';

export default function ThemeChanger() {
  const { resolvedTheme = 'dark', setTheme } = useTheme();
  const isLight = resolvedTheme === 'light';

  const toggleTheme = () => {
    const selectedTheme = isLight ? 'dark' : 'light';
    setTheme(selectedTheme);
  };

  return (
    <button
      onClick={() => toggleTheme()}
      className={`text-white p-1 rounded-md hover:cursor-pointer bg-primary hover:bg-primary/80`}
    >
      {resolvedTheme === 'light' ? (
        <MoonIcon size={20} weight="bold" />
      ) : (
        <SunIcon size={20} weight="bold" />
      )}
    </button>
  );
}
