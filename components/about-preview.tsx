"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TechCarousel } from '@/components/tech-carousel';
import { useLanguage } from '@/components/language-provider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (sectionRef.current && typeof window !== 'undefined') {
      gsap.fromTo('.about-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  const skills = [
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Golang (Fiber), Python (FastAPI), Node.js',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'PostgreSQL, MySQL, Redis, MongoDB',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="about-card hover-target group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tech Carousel */}
        <TechCarousel />

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="hover-target group">
            <Link href="/about">
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}