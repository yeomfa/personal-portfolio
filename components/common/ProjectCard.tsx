import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
} from '@phosphor-icons/react/dist/ssr';

type Props = {
  title: string;
  description?: string;
  repositoryPath?: string;
  liveSitePath?: string;
  imagePath?: string;
  technologies?: string[];
};

const ProjectCard = ({
  title,
  description = '',
  repositoryPath = '',
  liveSitePath = '',
  imagePath = '',
  technologies = [],
}: Props) => {
  return (
    <article>
      {imagePath && (
        <div className="relative w-full h-auto aspect-video overflow-hidden mb-4 border-2 shadow border-primary rounded-md">
          <Image
            src={imagePath}
            fill
            alt={title}
            className="object-cover"
          ></Image>
        </div>
      )}
      <div className="flex flex-col gap-5">
        <h3 className="font-medium text-2xl">{title}</h3>

        {technologies.length > 0 && (
          <ul className="flex gap-3">
            {technologies.map((tech) => (
              <li key={tech}>
                <Image
                  src={`/icons/technologies/${tech}.svg`}
                  width={20}
                  height={20}
                  alt={tech}
                />
              </li>
            ))}
          </ul>
        )}

        <p>{description}</p>

        <div className="flex gap-4 text-2xl">
          {repositoryPath && (
            <Link href={repositoryPath} className="text-primary" target="blank">
              <GithubLogoIcon weight="bold" />
            </Link>
          )}

          {liveSitePath && (
            <Link href={liveSitePath} className="text-primary" target="blank">
              <ArrowSquareOutIcon weight="bold" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
