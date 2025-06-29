"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function ContactHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo('.contact-hero-content', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="contact-hero-content">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss 
            how we can bring your ideas to life with modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
}