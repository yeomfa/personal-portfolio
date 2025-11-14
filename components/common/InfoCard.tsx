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
        <Image
          src={logoPathName}
          style={{ height: 60, width: 60 }}
          width="0"
          height="0"
          alt={title}
        />
      )}
      <div className="flex items-center gap-2 pt-2">
        <h3 className="text-xl font-medium">{title}</h3>{' '}
        <span className="text-sm">{alias}</span>
      </div>
      <h4 className="text-md">{subtitle}</h4>

      {location && (
        <div className="pt-4 flex gap-2">
          <MapPinIcon />
          <span className="text-sm">{location}</span>
        </div>
      )}

      <p className="pt-4 text-gray-700">{text}</p>
    </article>
  );
};

export default InfoCard;
