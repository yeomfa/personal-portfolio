import SectionLayout from '@/components/Layouts/SectionLayout';
import { Section } from '@/types/Sections';

import PersonalPhoto from '@/assets/images/Omar_Fandiño_pp.webp';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <SectionLayout sectionId={Section.AboutMe} title="About me">
      <Image src={PersonalPhoto} alt="Omar Fandiño" />
    </SectionLayout>
  );
};

export default AboutMe;
