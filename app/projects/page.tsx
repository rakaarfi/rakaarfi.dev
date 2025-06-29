import { Metadata } from 'next';
import { ProjectsHero } from '@/components/projects-hero';
import { ProjectsGrid } from '@/components/projects-grid';

export const metadata: Metadata = {
  title: 'Projects - Raka Arfi',
  description: 'Explore the portfolio of projects built by Raka Arfi, showcasing expertise in fullstack development.',
};

export default function Projects() {
  return (
    <div className="pt-20">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  );
}