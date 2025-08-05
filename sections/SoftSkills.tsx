import CategoryCard from '@/components/common/CategoryCard';
import SectionLayout from '@/components/Layouts/SectionLayout';
import { Section } from '@/types/Sections';

export const softSkills = [
  {
    id: 1,
    title: 'Resolución de problemas',
  },
  {
    id: 2,
    title: 'Comunicación efectiva',
  },
  {
    id: 3,
    title: 'Colaboración en equipo',
  },
  {
    id: 4,
    title: 'Gestión del tiempo',
  },
  {
    id: 5,
    title: 'Adaptabilidad al cambio',
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
