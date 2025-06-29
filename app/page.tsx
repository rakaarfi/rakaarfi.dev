import { Hero } from '@/components/hero';
import { FeaturedProjects } from '@/components/featured-projects';
import { AboutPreview } from '@/components/about-preview';
import { BlogPreview } from '@/components/blog-preview';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <BlogPreview />
    </div>
  );
}