'use client';

import Button from '@/components/common/Button';
import { Section, Profile } from '@/types/Sections';
import {
  CaretDoubleDownIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react';

import scrollTo from '@/utils/scrollTo';

const Hero = () => {
  return (
    <section
      id={Section.Hero}
      className="h-[calc(100vh-theme(spacing.16))] scroll-mt-16"
    >
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-[1fr_1fr_auto] grid-rows-1 gap-4">
          <div className="col-span-2 bg-primary flex flex-col justify-center items-center px-8 py-9 gap-2 lg:px-14 lg:py-16 lg:gap-6 select-none">
            <span className="text-white text-3xl font-bold lg:text-5xl">
              Omar Fandiño
            </span>
            <p className="text-white text-md text-sm md:text-md lg:text-2xl">
              Engineering. Software. Design.
            </p>
          </div>

          <div className="grid grid-cols-1 grid-rows-4 gap-3">
            <Button
              height="10"
              width="10"
              logo={<GithubLogoIcon weight="fill" size={20} />}
              href={Profile.GitHub}
            />

            <Button
              height="10"
              width="10"
              logo={<LinkedinLogoIcon weight="fill" size={20} />}
              href={Profile.LinkedIn}
            />

            <div className="row-span-2">
              <Button
                outlined
                height="full"
                logo={<CaretDoubleDownIcon size={20} />}
                onClick={() => scrollTo(Section.AboutMe)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
