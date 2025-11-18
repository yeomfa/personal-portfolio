'use client';
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

export default function ProjectCard({
  title,
  description = '',
  repositoryPath = '',
  liveSitePath = '',
  imagePath = '',
  technologies = [],
}: Props) {
  return (
    <article
      className={`
        group
        rounded-xl border border-primary/20
        p-5 transition-all duration-300
        hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5
        animate-fade-in

        dark:bg-gradient-to-l from-transparent to-primary/10
      `}
    >
      {/* Imagen */}
      {imagePath && (
        <div className="relative w-full aspect-video overflow-hidden mb-4 rounded-lg border border-primary/20">
          <Image
            src={imagePath}
            fill
            alt={title}
            className="
              object-cover transition-transform duration-300
              group-hover:scale-105
            "
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1280px) 90vw,
                   1200px"
            priority
          />
        </div>
      )}

      <div className="flex flex-col gap-4">
        {/* Title */}
        <h3 className="font-semibold text-xl tracking-tight">{title}</h3>

        {/* Technologies */}
        {technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="px-2 py-1 rounded-md text-xs font-medium text-primary/90 flex gap-1 justify-center items-center"
              >
                <Image
                  src={`/icons/technologies/${tech}.svg`}
                  width={15}
                  height={15}
                  alt={tech}
                />
                {tech}
              </li>
            ))}
          </ul>
        )}

        {/* Description */}
        <p className="text-sm leading-relaxed opacity-90">{description}</p>

        {/* Links */}
        <div className="flex gap-4 text-2xl mt-1">
          {repositoryPath && (
            <Link
              href={repositoryPath}
              className="text-primary transition-opacity hover:opacity-70"
              target="_blank"
            >
              <GithubLogoIcon />
            </Link>
          )}

          {liveSitePath && (
            <Link
              href={liveSitePath}
              className="text-primary transition-opacity hover:opacity-70"
              target="_blank"
            >
              <ArrowSquareOutIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
