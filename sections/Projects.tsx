'use client';

import SectionLayout from '@/components/Layouts/SectionLayout';
import { Section } from '@/types/Sections';
import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

const project = {
  image: 'https://yeomfa.github.io/vesto/public/vesto-favicon.png',
  title: 'Vesto',
  technologies: ['html', 'css', 'javascript'],
  description: 'Vesto is an application to solve optimization problems',
  respository: 'https://github.com/yeomfa/vesto',
  liveSite: 'https://yeomfa.github.io/vesto',
};

const Projects = () => {
  return (
    <SectionLayout sectionId={Section.Projects} title="Projects">
      <div className="my-20 mb-100 grid gap-30 lg:grid-cols-2">
        <article>
          <div className="relative w-full h-50 aspect-video overflow-hidden mb-4">
            <Image
              src={project.image}
              fill
              alt={project.title}
              className="object-cover"
            ></Image>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-2xl">{project.title}</h3>
            <ul className="flex gap-3">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Image
                    src={`/icons/${tech}.svg`}
                    width={20}
                    height={20}
                    alt={tech}
                  />
                </li>
              ))}
            </ul>

            <p>
              {project.description}
              {project.description}
              {project.description}
            </p>

            <div className="flex gap-4 text-2xl">
              <Link
                href={project.respository}
                className="text-primary"
                target="blank"
              >
                <GithubLogoIcon weight="bold" />
              </Link>
              <Link
                href={project.liveSite}
                className="text-primary"
                target="blank"
              >
                <ArrowSquareOutIcon weight="bold" />
              </Link>
            </div>
          </div>
        </article>
        <article>
          <div className="relative w-full h-50 aspect-video overflow-hidden mb-4">
            <Image
              src={project.image}
              fill
              alt={project.title}
              className="object-cover"
            ></Image>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-2xl">{project.title}</h3>
            <ul className="flex gap-3">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Image
                    src={`/icons/${tech}.svg`}
                    width={20}
                    height={20}
                    alt={tech}
                  />
                </li>
              ))}
            </ul>

            <p>
              {project.description}
              {project.description}
              {project.description}
            </p>

            <div className="flex gap-4 text-2xl">
              <Link
                href={project.respository}
                className="text-primary"
                target="blank"
              >
                <GithubLogoIcon weight="bold" />
              </Link>
              <Link
                href={project.liveSite}
                className="text-primary"
                target="blank"
              >
                <ArrowSquareOutIcon weight="bold" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </SectionLayout>
  );
};

export default Projects;
