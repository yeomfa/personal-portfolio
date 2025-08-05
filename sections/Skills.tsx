import CategoryCard from '@/components/common/CategoryCard';
import Skill from '@/components/common/Skill';
import SectionLayout from '@/components/Layouts/SectionLayout';
import { Section } from '@/types/Sections';

export const skills = [
  {
    id: 'web-dev',
    title: 'Web Development',
    technologies: [
      { id: 'html', name: 'HTML', icon: '/icons/html.svg' },
      { id: 'css', name: 'CSS', icon: '/icons/css.svg' },
      { id: 'javascript', name: 'JavaScript', icon: '/icons/javascript.svg' },
      { id: 'typescript', name: 'TypeScript', icon: '/icons/typescript.svg' },
      { id: 'php', name: 'PHP', icon: '/icons/php.svg' },
      { id: 'laravel', name: 'Laravel', icon: '/icons/laravel.svg' },
    ],
  },
  {
    id: 'frontend-frameworks',
    title: 'Frontend Javascript Frameworks',
    technologies: [
      { id: 'react', name: 'React', icon: '/icons/react.svg' },
      { id: 'nextjs', name: 'Next.js', icon: '/icons/nextjs.svg' },
    ],
  },
  {
    id: 'backend-frameworks',
    title: 'Backend Javascript Frameworks',
    technologies: [
      { id: 'nodejs', name: 'Node.js', icon: '/icons/nodejs.svg' },
      { id: 'express', name: 'Express', icon: '/icons/express.svg' },
    ],
  },
  {
    id: 'database-management',
    title: 'Database Management',
    technologies: [
      { id: 'mongodb', name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { id: 'mysql', name: 'MySQL', icon: '/icons/mysql.svg' },
      { id: 'supabase', name: 'Supabase', icon: '/icons/supabase.svg' },
    ],
  },
  {
    id: 'devops',
    title: 'Development and Operations',
    technologies: [
      { id: 'git', name: 'GIT', icon: '/icons/git.svg' },
      { id: 'docker', name: 'Docker', icon: '/icons/docker.svg' },
      { id: 'azure', name: 'Azure', icon: '/icons/azure.svg' },
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
