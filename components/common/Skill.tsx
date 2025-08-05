import Image from 'next/image';

type Props = {
  name: string;
  icon: string;
};

const Skill = ({ name, icon }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-center p-2">
      {icon && <Image src={icon} alt={name} width={12} height={12} />}
      <span className="text-xs text-center">{name}</span>
    </div>
  );
};

export default Skill;
