import CategoryCard from '@/components/common/CategoryCard';
import SectionLayout from '@/components/Layouts/SectionLayout';
import { Section } from '@/types/Sections';

export const softSkills = [
  {
    id: 1,
    title: 'Problem solving',
  },
  {
    id: 2,
    title: 'Effective communication',
  },
  {
    id: 3,
    title: 'Team collaboration',
  },
  {
    id: 4,
    title: 'Time management',
  },
  {
    id: 5,
    title: 'Adaptability to change',
  },
];

const SoftSkills = () => {
  return (
    <SectionLayout sectionId={Section.SoftSkills} title="Soft Skills">
      <div className="py-8 mb-20 grid gap-10 lg:grid-cols-2">
        {softSkills.map((skill) => (
          <CategoryCard key={skill.id} title={skill.title}></CategoryCard>
        ))}
      </div>
    </SectionLayout>
  );
};

export default SoftSkills;
