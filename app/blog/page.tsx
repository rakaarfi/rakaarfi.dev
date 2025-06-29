import { Metadata } from 'next';
import { BlogHero } from '@/components/blog-hero';
import { BlogGrid } from '@/components/blog-grid';

export const metadata: Metadata = {
  title: 'Blog - Raka Arfi',
  description: 'Read the latest articles and insights from Raka Arfi on fullstack development, programming, and technology.',
};

export default function Blog() {
  return (
    <div className="pt-20">
      <BlogHero />
      <BlogGrid />
    </div>
  );
}