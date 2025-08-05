'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { MoonStarsIcon, TranslateIcon } from '@phosphor-icons/react';

import smoothScroll from '@/utils/smoothScroll';

import YeomLogo from '@/components/common/YeomLogo';

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'about-me', name: 'About me' },
  { id: 'work-experience', name: 'Work Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
  { id: 'blog', name: 'Blog', path: '/blog', isLink: true, isDisabled: true },
];

const activeClass = 'font-bold text-primary';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) setActiveSection(id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id, isLink }) => {
      if (isLink) return;
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    smoothScroll(id);
  };

  return (
    <nav className="sticky h-16 top-0 w-full mx-auto bg-background/80 backdrop-blur items-center">
      <div className="container h-full mx-auto mx-w-screen-xl px-6 py-4 flex justify-between items-center">
        <Link href={'/'} onClick={() => setActiveSection('home')}>
          <YeomLogo width={30} height={30} />
        </Link>

        <div className="flex items-center gap-6">
          <ul className="gap-6 text-sm font-regular items-center hidden lg:flex">
            {sections.map((sec) => {
              return (
                <li key={sec.id}>
                  {sec.isLink ? (
                    <Link
                      href={sec?.path}
                      className={
                        sec?.isDisabled
                          ? 'pointer-events-none text-gray-500'
                          : ''
                      }
                      aria-disabled={sec?.isDisabled}
                      tabIndex={sec?.isDisabled ? -1 : undefined}
                    >
                      {sec.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleScroll(sec.id)}
                      className={`${
                        sec.id === activeSection ? activeClass : ''
                      } ${
                        sec?.isDisabled ? 'text-gray-400' : ''
                      } hover:text-primary transition hover:cursor-pointer`}
                    >
                      {sec.name}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
          <button className="bg-primary text-white p-1 rounded-md hover:bg-primary/80 hover:cursor-pointer">
            <MoonStarsIcon size={20} />
          </button>
          <button className="p-1 hover:cursor-pointer hover:bg-gray-200 rounded-md">
            <TranslateIcon size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
