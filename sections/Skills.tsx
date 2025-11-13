import CategoryCard from '@/components/common/CategoryCard';
import Skill from '@/components/common/Skill';
import SectionLayout from '@/components/layouts/SectionLayout';
import { Section } from '@/types/Sections';

export const skills = [
  {
    id: 'web-dev',
    title: 'Web Development',
    technologies: [
      { id: 'html', name: 'HTML', icon: '/icons/technologies/html.svg' },
      { id: 'css', name: 'CSS', icon: '/icons/technologies/css.svg' },
      {
        id: 'javascript',
        name: 'JavaScript',
        icon: '/icons/technologies/javascript.svg',
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        icon: '/icons/technologies/typescript.svg',
      },
      { id: 'php', name: 'PHP', icon: '/icons/technologies/php.svg' },
      {
        id: 'laravel',
        name: 'Laravel',
        icon: '/icons/technologies/laravel.svg',
      },
    ],
  },
  {
    id: 'frontend-frameworks',
    title: 'Frontend Javascript Frameworks',
    technologies: [
      { id: 'react', name: 'React', icon: '/icons/technologies/react.svg' },
      { id: 'nextjs', name: 'Next.js', icon: '/icons/technologies/nextjs.svg' },
    ],
  },
  {
    id: 'backend-frameworks',
    title: 'Backend Javascript Frameworks',
    technologies: [
      { id: 'nodejs', name: 'Node.js', icon: '/icons/technologies/nodejs.svg' },
      {
        id: 'express',
        name: 'Express',
        icon: '/icons/technologies/express.svg',
      },
    ],
  },
  {
    id: 'database-management',
    title: 'Database Management',
    technologies: [
      {
        id: 'mongodb',
        name: 'MongoDB',
        icon: '/icons/technologies/mongodb.svg',
      },
      { id: 'mysql', name: 'MySQL', icon: '/icons/technologies/mysql.svg' },
      {
        id: 'supabase',
        name: 'Supabase',
        icon: '/icons/technologies/supabase.svg',
      },
    ],
  },
  {
    id: 'devops',
    title: 'Development and Operations',
    technologies: [
      { id: 'git', name: 'GIT', icon: '/icons/technologies/git.svg' },
      { id: 'docker', name: 'Docker', icon: '/icons/technologies/docker.svg' },
      { id: 'azure', name: 'Azure', icon: '/icons/technologies/azure.svg' },
    ],
  },
];

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
