"use client";

import { useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  Smartphone, 
  Globe,
  GitBranch,
  Monitor
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TechCarousel } from '@/components/tech-carousel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && typeof window !== 'undefined') {
      gsap.fromTo('.tech-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  const techStack = [
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Golang (Fiber)', 'Python (FastAPI)', 'Node.js', 'REST APIs', 'GraphQL'],
      color: 'text-blue-500'
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
      color: 'text-green-500'
    },
    {
      category: 'Frontend',
      icon: Monitor,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
      color: 'text-purple-500'
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      color: 'text-pink-500'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'CI/CD'],
      color: 'text-orange-500'
    },
    {
      category: 'Tools & Others',
      icon: GitBranch,
      technologies: ['Git', 'Linux', 'Nginx', 'Apache', 'Microservices'],
      color: 'text-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techStack.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <Card key={index} className="tech-card hover-target group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-muted mr-3 group-hover:bg-primary/10 transition-colors`}>
                      <Icon className={`h-6 w-6 ${stack.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{stack.category}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full inline-block mr-2 mb-2"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tech Carousel */}
        <TechCarousel />
      </div>
    </section>
  );
}