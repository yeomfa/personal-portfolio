'use client';

type Props = {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const CategoryCard = ({ title, icon, children }: Props) => {
  return (
    <article
      className={`
        group relative flex flex-col p-6 rounded-md border border-primary/30 
        transition-all duration-300 
        hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5
        animate-fade-in
        dark:bg-gradient-to-l from-transparent to-primary/10
      `}
    >
      {/* Title */}
      <div className="flex items-center gap-2">
        {icon && <span className="text-primary text-xl">{icon}</span>}
        <h3 className="font-semibold text-lg tracking-tight">{title}</h3>
      </div>

      {/* Skills */}
      {children && (
        <div className="mt-4 flex flex-wrap gap-2 items-center">{children}</div>
      )}
    </article>
  );
};

export default CategoryCard;
