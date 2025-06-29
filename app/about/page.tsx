import { Metadata } from 'next';
import { AboutHero } from '@/components/about-hero';
import { TechStack } from '@/components/tech-stack';
import { Experience } from '@/components/experience';

export const metadata: Metadata = {
  title: 'About - Raka Arfi',
  description: 'Learn more about Raka Arfi, a fullstack developer specializing in backend architecture with Golang, Python, and JavaScript.',
};

export default function About() {
  return (
    <div className="pt-20">
      <AboutHero />
      <TechStack />
      <Experience />
    </div>
  );
}