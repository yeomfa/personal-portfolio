import Footer from '@/components/ui/Footer';
import AboutMe from '@/sections/AboutMe';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import SoftSkills from '@/sections/SoftSkills';
import WorkExperience from '@/sections/WorkExperience';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Skills />
      <SoftSkills />
      <Footer />
    </main>
  );
}
