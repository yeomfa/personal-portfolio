import React from 'react';

type Props = {
  sectionId: string;
  children: React.ReactNode;
  title: string;
};

const SectionLayout = ({ sectionId, children, title }: Props) => {
  return (
    <section id={sectionId} className="h-auto p-4">
      <div className="border-b-2 border-primary">
        <h2 className="font-medium text-xl">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
