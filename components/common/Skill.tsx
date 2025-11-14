import Image from 'next/image';

type Props = {
  name: string;
  icon: string;
};

const Skill = ({ name, icon }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-center p-2">
      {icon && (
        <Image
          src={icon}
          alt={name}
          width="0"
          height="0"
          style={{ width: 20, height: 20 }}
        />
      )}
      <span className="text-md text-center">{name}</span>
    </div>
  );
};

export default Skill;
