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

const SectionLayout = ({
  sectionId,
  children,
  title,
  height = 'auto',
  iconPath,
  iconSize,
}: Props) => {
  return (
    <section id={sectionId} className={`h-${height} p-4 scroll-mt-16`}>
      <div className="border-b-2 border-primary">
        <h2 className="font-medium text-xl flex items-center gap-2">
          {title}{' '}
          {iconPath && (
            <Image
              src={iconPath}
              height={iconSize}
              width={iconSize}
              alt="Section icon"
            />
          )}
        </h2>
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
