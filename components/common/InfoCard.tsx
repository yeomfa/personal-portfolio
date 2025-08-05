'use client';

import Image from 'next/image';
import { MapPinIcon } from '@phosphor-icons/react';

type Props = {
  logoPathName?: string;
  title?: string;
  alias?: string;
  subtitle?: string;
  location?: string;
  text?: string;
};

const InfoCard = ({
  logoPathName = '',
  title = '',
  alias = '',
  subtitle = '',
  location = '',
  text = '',
}: Props) => {
  return (
    <article className="flex flex-col py-4 px-4">
      {logoPathName && (
        <Image src={logoPathName} width={60} height={60} alt={title} />
      )}
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-medium">{title}</h3>{' '}
        <span className="text-xs">{alias}</span>
      </div>
      <h4 className="text-md">{subtitle}</h4>

      {location && (
        <div className="pt-4 flex gap-2">
          <MapPinIcon />
          <span className="text-xs">{location}</span>
        </div>
      )}

      <p className="text-sm pt-4">{text}</p>
    </article>
  );
};

export default InfoCard;
