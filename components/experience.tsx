"use client";

import { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && typeof window !== 'undefined') {
      gsap.fromTo('.experience-card',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
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

  const experiences = [
    {
      title: 'Senior Fullstack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using Golang, Python, and React. Architected microservices handling 1M+ daily requests.',
      achievements: [
        'Reduced API response time by 40% through optimization',
        'Mentored junior developers and established coding standards',
        'Implemented CI/CD pipelines increasing deployment frequency by 300%'
      ]
    },
    {
      title: 'Fullstack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using various technologies. Specialized in building RESTful APIs and responsive web interfaces.',
      achievements: [
        'Built 15+ production applications serving 100K+ users',
        'Improved application performance by 60% through code optimization',
        'Collaborated with cross-functional teams to deliver projects on time'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Started my professional journey building web applications with modern JavaScript frameworks and learning backend development.',
      achievements: [
        'Developed responsive web applications using React and Node.js',
        'Participated in agile development processes',
        'Contributed to open-source projects and company tech blog'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-card relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:-ml-3 w-6 h-6 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="hover-target hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Briefcase className="h-5 w-5 text-primary mr-2" />
                        <span className="text-sm text-muted-foreground font-medium">
                          {exp.company}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center mb-4 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}