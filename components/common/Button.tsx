import Link from 'next/link';
import React, { JSX } from 'react';

type Props = {
  text?: string;
  logo?: JSX.Element;
  width?: string;
  height?: string;
  href?: string;
  outlined?: boolean;
  onClick?: () => void;
};

const Button = ({
  text = '',
  logo = <></>,
  width = 'auto',
  height = 'auto',
  href = '',
  outlined = false,
  onClick = () => {},
}: Props) => {
  const styles = `${
    outlined
      ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
      : 'bg-primary text-white hover:bg-primary/80'
  } hover:cursor-pointer  p-4 w-${width} h-${height} flex items-center justify-center gap-2`;

  if (href)
    return (
      <Link href={href} target="blank">
        <div className={styles}>
          {logo}
          {text}
        </div>
      </Link>
    );

  return (
    <button className={styles} onClick={onClick}>
      {logo}
      {text}
    </button>
  );
};

export default Button;
