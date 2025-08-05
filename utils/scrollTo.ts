import { Section } from '@/types/Sections';

const scrollTo = (id: Section) => {
  const el = document.getElementById(id);

  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default scrollTo;
