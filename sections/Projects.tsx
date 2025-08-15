import ProjectCard from '@/components/common/ProjectCard';
import SectionLayout from '@/components/Layouts/SectionLayout';
import { Section } from '@/types/Sections';

import projects from '@/data/projects.json';

const Projects = () => {
  return (
    <SectionLayout sectionId={Section.Projects} title="Projects">
      <div className="my-20 mb-100 grid gap-30 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imagePath={project.imagePath}
            description={project.description}
            technologies={project.technologies}
            liveSitePath={project.liveSitePath}
            repositoryPath={project.repositoryPath}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Projects;
