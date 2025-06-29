"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Digital Parenting App',
      description: 'A comprehensive parenting platform with user management, content delivery, and analytics dashboard built with modern technologies.',
      image: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Golang', 'Fiber', 'PostgreSQL', 'React', 'Docker'],
      category: 'fullstack',
      githubUrl: 'https://github.com/rakaarfi',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      title: 'Employee Attendance System',
      description: 'Real-time attendance tracking system with geolocation, facial recognition, and comprehensive reporting capabilities.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'FastAPI', 'SQLModel', 'PostgreSQL', 'Redis'],
      category: 'backend',
      githubUrl: 'https://github.com/rakaarfi',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      title: 'Regulatory Compliance Platform',
      description: 'Automated compliance monitoring system with tree diagram visualizations and real-time alerts for regulatory changes.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['FastAPI', 'SQLModel', 'PostgreSQL', 'Vue.js', 'D3.js'],
      category: 'fullstack',
      githubUrl: 'https://github.com/rakaarfi',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      title: 'E-commerce API Gateway',
      description: 'High-performance API gateway handling millions of requests with rate limiting, authentication, and monitoring.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Golang', 'Gin', 'Redis', 'Docker', 'Kubernetes'],
      category: 'backend',
      githubUrl: 'https://github.com/rakaarfi',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with file sharing, emoji reactions, and user presence indicators.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'AWS'],
      category: 'fullstack',
      githubUrl: 'https://github.com/rakaarfi',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio website built with Next.js, featuring animations, blog integration, and multilingual support.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      category: 'frontend',
      githubUrl: 'https://github.com/rakaarfi',
      liveUrl: 'https://example.com',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Fullstack' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    if (sectionRef.current && typeof window !== 'undefined') {
      gsap.fromTo('.project-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, [filteredProjects]);

  return (
    <section ref={sectionRef} className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              onClick={() => setFilter(category.id)}
              className="hover-target"
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="project-item hover-target group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button asChild variant="outline" size="sm" className="hover-target flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm" className="hover-target flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}