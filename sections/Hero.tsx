'use client';

import { Section } from '@/types/Sections';

import SonarEffect from '@/components/effects/SonarEffect';
import HeroButtons from '@/components/common/HeroButtons';

export default function Hero() {
  return (
    <section
      id={Section.Hero}
      className="h-[calc(100vh-theme(spacing.16))] scroll-mt-16"
    >
      <div className="flex justify-center items-center h-full">
        {/* Effect */}
        <SonarEffect />

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center space-y-6 pb-15">
          {/* Intro */}
          <p className="text-3xl lg:text-4xl text-primary">
            Hey, I’m <span className="font-semibold">Omar</span>
          </p>

          {/* Roles */}
          <h1 className="text-4xl lg:text-5xl font-medium text-gray-900">
            Engineer. Developer. Designer.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600">
            I create digital experiences with clean code, thoughtful design, and
            a focus on performance.
          </p>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
