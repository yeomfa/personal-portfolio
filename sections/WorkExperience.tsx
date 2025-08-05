import InfoCard from '@/components/common/InfoCard';
import SectionLayout from '@/components/Layouts/SectionLayout';
import { Section } from '@/types/Sections';

const workExperience = [
  {
    id: 1,
    logoPathName: '/crear-colombia-logo.svg',
    title: 'Crear Colombia',
    alias: '(Mar 24 - Present)',
    subtitle: 'Software Developer',
    location: 'Santa Marta, Colombia (Remote)',
    text: `At Crear Colombia, I am responsible for the development, testing, and maintenance of new features for the company's SaaS, as well as customized applications for different clients.`,
  },
  {
    id: 2,
    logoPathName: '/daabon-logo.svg',
    title: 'DAABON',
    alias: '(Aug 23 - Mar 24)',
    subtitle: 'Software Developer',
    location: 'Santa Marta, Colombia',
    text: `At DAABON, my duties consisted of improving the existing application for managing imports and exports, which included creating new modules, fixing bugs, and improving system performance.`,
  },
];

const academicInformation = [
  {
    id: 1,
    logoPathName: '/unimag-logo.svg',
    title: 'Universidad del Magadalena',
    alias: '(Jan 18 - Dec 23)',
    subtitle: 'Ingeniería de Sistemas',
    location: 'Santa Marta, Colombia',
    text: `I studied engineering at the University of Magdalena, where I acquired a solid foundation in systems, technology and software development.`,
  },
];

const WorkExperience = () => {
  return (
    <div className="grid lg:grid-cols-2 pb-20">
      <SectionLayout sectionId={Section.WorkExperience} title="Work Experience">
        <div className="flex flex-col gap-6 py-8 px-2">
          {workExperience.map((academic) => (
            <InfoCard
              key={academic.id}
              logoPathName={academic.logoPathName}
              title={academic.title}
              alias={academic.alias}
              location={academic.location}
              text={academic.text}
            />
          ))}
        </div>
      </SectionLayout>
      <SectionLayout sectionId={Section.Education} title="Education">
        <div className="py-8 px-2">
          {academicInformation.map((academic) => (
            <InfoCard
              key={academic.id}
              logoPathName={academic.logoPathName}
              title={academic.title}
              alias={academic.alias}
              location={academic.location}
              text={academic.text}
            />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default WorkExperience;
