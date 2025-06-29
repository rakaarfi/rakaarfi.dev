"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function BlogHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo('.blog-hero-content', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="blog-hero-content">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Blog & Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on fullstack development, programming, 
            and the latest trends in technology.
          </p>
        </div>
      </div>
    </section>
  );
}