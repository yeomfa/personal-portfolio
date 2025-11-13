'use client';
import SectionLayout from '@/components/layouts/SectionLayout';
import { Section } from '@/types/Sections';
import { FilePdfIcon, CopyIcon, MapPinIcon } from '@phosphor-icons/react';

export default function Contact() {
  return (
    <SectionLayout
      sectionId={Section.Contact}
      title="Contact"
      iconPath="/icons/custom/letter-heart.svg"
      iconSize={30}
    >
      <div className="pt-8 pb-96">
        <h2 className="text-2xl font-medium">
          Do you want to do amazing things together?
        </h2>

        <div className="mt-40 font-medium grid grid-cols-1 place-content-center gap-y-30 lg:grid-cols-2 lg:grid-rows-2">
          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <span className="text-2xl">yeomfa@gmail.com</span>
              <CopyIcon weight="bold" className="text-primary" size={25} />
            </div>
          </div>

          {/* Cellphone */}
          <div className="flex justify-center items-center">
            <div className="cursor-pointer flex flex-col items-center lg:items-start">
              <span className="text-2xl">+57 302 268 8904</span>
              <div className="flex items-center gap-1 text-xl">
                <MapPinIcon weight="bold" className="text-primary" />
                <span className="text-gray-500">Colombia</span>
              </div>
            </div>
          </div>

          {/* CV */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-base lg:text-xl text-foreground/80">
            <p className="tracking-tight">Do you need my resume?</p>
            <button
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer"
              onClick={() => console.log('Download CV')}
            >
              <span>Download here</span>
              <FilePdfIcon size={20} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
