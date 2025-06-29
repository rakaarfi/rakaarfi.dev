"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function ProjectsHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo('.projects-hero-content', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="projects-hero-content">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in fullstack development, 
            from backend architecture to user interface design.
          </p>
        </div>
      </div>
    </section>
  );
}