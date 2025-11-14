'use client';

import SectionLayout from '@/components/layouts/SectionLayout';
import { Section } from '@/types/Sections';
import {
  FilePdfIcon,
  CopyIcon,
  MapPinIcon,
  EnvelopeSimpleIcon,
} from '@phosphor-icons/react';

// Animation (sound-pulse style)
const pulseClasses =
  'transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]';

export default function Contact() {
  // Copy to clipboard helper
  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <SectionLayout
      sectionId={Section.Contact}
      title="Contact"
      iconPath="/icons/custom/letter-heart.svg"
      iconSize={30}
    >
      <div className="pt-15 pb-60 flex flex-col justify-center items-center">
        {/* Headline */}
        <h2 className="text-3xl font-medium text-center leading-tight">
          Let’s build something <span className="text-primary">remarkable</span>{' '}
          together.
        </h2>

        <div className="mt-20 font-medium grid grid-cols-1 w-5xl place-content-center  gap-y-20 lg:grid-cols-2 lg:grid-rows-2">
          {/* Email (mailto)  */}
          <div className="flex items-center justify-center">
            <a
              href="mailto:yeomfa@gmail.com"
              className={`flex items-center gap-3 cursor-pointer group ${pulseClasses}`}
            >
              {/* Email icon */}
              <EnvelopeSimpleIcon
                size={28}
                className="text-primary group-hover:text-primary/80 transition-colors"
              />

              {/* Email text */}
              <span className="text-2xl underline underline-offset-4 decoration-primary/40 group-hover:decoration-primary transition-all">
                yeomfa@gmail.com
              </span>
            </a>
          </div>

          {/* Cellphone (copy)            */}
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center lg:items-start gap-1">
              {/* Phone row */}
              <button
                onClick={() => copyText('+57 302 268 8904')}
                className={`flex items-center gap-2 cursor-pointer ${pulseClasses}`}
              >
                <span className="text-2xl">+57 302 268 8904</span>
                <CopyIcon
                  size={24}
                  className="text-primary hover:text-primary/80 transition-colors"
                />
              </button>

              {/* Location */}
              <div className="flex items-center gap-1 text-xl">
                <MapPinIcon size={24} className="text-primary" />
                <span className="text-gray-500">Colombia</span>
              </div>
            </div>
          </div>

          {/* Resume / CV (download)         */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-base lg:text-xl text-foreground/80">
            <p className="tracking-tight">Do you need my resume?</p>

            <button
              onClick={() => {
                // Redirect to CV file
                window.location.href = '/resources/omar-fandino-cv.pdf';
              }}
              className={`inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer ${pulseClasses}`}
            >
              <span>Download here</span>
              <FilePdfIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
