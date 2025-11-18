'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  href?: string; // Internal or external link
  onClick?: () => void; // Handler for button mode
  children: ReactNode; // Content (icons, text)
  circle?: boolean; // Circle mode for icons
  className?: string; // Extra classes
  external?: boolean; // Force external <a> type
};

export default function Button({
  href,
  onClick,
  children,
  circle = false,
  className = '',
  external,
}: Props) {
  const base =
    'flex items-center justify-center transition rounded-full font-medium cursor-pointer';
  const size = circle ? 'w-11 h-11' : 'h-11 px-4';
  const styles =
    'border border-border-grey hover:border-primary hover:text-primary';

  const combined = `${base} ${size} ${styles} ${className}`;

  // Case 1: Internal or external link
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  // Case 2: Button mode
  return (
    <button onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
