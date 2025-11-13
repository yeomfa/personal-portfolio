type Props = {
  title: string;
  children?: React.ReactNode;
};

const CategoryCard = ({ title, children = <></> }: Props) => {
  return (
    <article className="border border-primary p-4">
      <h3 className="font-medium text-lg">{title}</h3>
      {children && (
        <div className="mt-2 flex flex-wrap gap-2 items-center">{children}</div>
      )}
    </article>
  );
};

export default CategoryCard;
