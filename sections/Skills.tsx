import CategoryCard from '@/components/common/CategoryCard';
import Skill from '@/components/common/Skill';
import SectionLayout from '@/components/layouts/SectionLayout';
import { Section } from '@/types/Sections';
import skills from '@/data/skills.json';

const Skills = () => {
  return (
    <SectionLayout sectionId={Section.Skills} title="Skills">
      <div className="py-8 mb-20 grid gap-10 lg:grid-cols-2">
        {skills.map((skill) => (
          <CategoryCard key={skill.id} title={skill.title}>
            {skill.technologies?.map((tech) => (
              <Skill key={tech.id} name={tech.name} icon={tech.icon} />
            ))}
          </CategoryCard>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;
