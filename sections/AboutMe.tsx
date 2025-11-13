'use client';

import SectionLayout from '@/components/layouts/SectionLayout';
import { Section } from '@/types/Sections';

import PersonalPhoto from '@/assets/images/Omar_Fandiño_pp.webp';
import Image from 'next/image';
import smoothScroll from '@/utils/smoothScroll';

const AboutMe = () => {
  return (
    <SectionLayout sectionId={Section.AboutMe} title="About me">
      <div className="grid grid-rows-[1fr, auto] py-8 mb-20 place-items-center lg:grid-cols-2 lg:grid-rows-1 lg:py-10">
        <Image
          src={PersonalPhoto}
          alt="Omar Fandiño"
          className="w-full pb-8 md:w-70 lg:w-90 lg:pb-0"
        />
        <p>
          Hello,
          <br />
          <br />
          I&#39;m <span className="font-semibold">Omar Fandiño</span> and, as
          you may have read, I am an engineer, developer, and designer. The
          purpose of this website is to tell you more about me and what I do and
          will do in the future.
          <br />
          <br />I have always loved creating and learning new things. That
          curiosity led me to study{' '}
          <span className="font-semibold">engineering</span>. Computers were
          love at first sight: discovering that you can build amazing things
          with numbers and letters made me want to become a{' '}
          <span className="font-semibold">developer</span>. And since I also
          like everything I do to look incredible, I ended up becoming a{' '}
          <span className="font-semibold">designer</span>.
          <br />
          <br />
          If you like what you see on this website, please don&#39;t hesitate to{' '}
          <span
            className="text-primary font-semibold cursor-pointer"
            onClick={() => smoothScroll('contact')}
          >
            contact me
          </span>
          . I&#39;d love to hear your ideas.
        </p>
      </div>
    </SectionLayout>
  );
};

export default AboutMe;
