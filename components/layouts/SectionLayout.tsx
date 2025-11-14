import Image from 'next/image';
import React from 'react';

type Props = {
  sectionId: string;
  children: React.ReactNode;
  title: string;
  height?: string;
  iconPath?: string;
  iconSize?: number;
};

export default function SectionLayout({
  sectionId,
  children,
  title,
  height = 'auto',
  iconPath,
  iconSize = 24,
}: Props) {
  return (
    <section
      id={sectionId}
      className={`relative h-${height} px-4 py-10 scroll-mt-24`}
    >
      {/* Header container */}
      <div className="inline-flex flex-col">
        {/* Title row */}
        <h2 className="font-medium text-xl flex items-center gap-2">
          {title}
          {iconPath && (
            <Image
              src={iconPath}
              height={iconSize}
              width={iconSize}
              alt="Section icon"
            />
          )}
        </h2>

        {/* Extended underline */}
        <div className="mt-2 -ml-2 -mr-40">
          <div className="h-[3px] bg-gradient-to-r from-primary to-transparent" />
        </div>
      </div>

      {/* Section content */}
      <div className="pt-8">{children}</div>
    </section>
  );
}
