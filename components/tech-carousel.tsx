"use client";

import { useEffect, useRef } from 'react';
import * as SiIcons from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import gsap from 'gsap';

export function TechCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: 'React', icon: SiIcons.SiReact, color: '#61DAFB', darkColor: '#61DAFB' },
    { name: 'Next.js', icon: SiIcons.SiNextdotjs, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'TypeScript', icon: SiIcons.SiTypescript, color: '#3178C6', darkColor: '#3178C6' },
    { name: 'JavaScript', icon: SiIcons.SiJavascript, color: '#F7DF1E', darkColor: '#F7DF1E' },
    { name: 'Golang', icon: SiIcons.SiGo, color: '#00ADD8', darkColor: '#00ADD8' },
    { name: 'Python', icon: SiIcons.SiPython, color: '#3776AB', darkColor: '#3776AB' },
    { name: 'Node.js', icon: SiIcons.SiNodedotjs, color: '#339933', darkColor: '#339933' },
    { name: 'PostgreSQL', icon: SiIcons.SiPostgresql, color: '#336791', darkColor: '#336791' },
    { name: 'MySQL', icon: SiIcons.SiMysql, color: '#4479A1', darkColor: '#4479A1' },
    { name: 'MongoDB', icon: SiIcons.SiMongodb, color: '#47A248', darkColor: '#47A248' },
    { name: 'Redis', icon: SiIcons.SiRedis, color: '#DC382D', darkColor: '#DC382D' },
    { name: 'SQLite', icon: SiIcons.SiSqlite, color: '#003B57', darkColor: '#4A90E2' },
    { name: 'Docker', icon: SiIcons.SiDocker, color: '#2496ED', darkColor: '#2496ED' },
    { name: 'Kubernetes', icon: SiIcons.SiKubernetes, color: '#326CE5', darkColor: '#326CE5' },
    { name: 'AWS', icon: SiIcons.SiAmazonwebservices, color: '#FF9900', darkColor: '#FF9900' },
    { name: 'Google Cloud', icon: SiIcons.SiGooglecloud, color: '#4285F4', darkColor: '#4285F4' },
    { name: 'Git', icon: SiIcons.SiGit, color: '#F05032', darkColor: '#F05032' },
    { name: 'Linux', icon: SiIcons.SiLinux, color: '#FCC624', darkColor: '#FCC624' },
    { name: 'Nginx', icon: SiIcons.SiNginx, color: '#009639', darkColor: '#009639' },
    { name: 'Tailwind CSS', icon: SiIcons.SiTailwindcss, color: '#06B6D4', darkColor: '#06B6D4' },
    { name: 'Vue.js', icon: SiIcons.SiVuedotjs, color: '#4FC08D', darkColor: '#4FC08D' },
    { name: 'FastAPI', icon: SiIcons.SiFastapi, color: '#009688', darkColor: '#009688' },
    { name: 'Flask', icon: SiIcons.SiFlask, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'Express', icon: SiIcons.SiExpress, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'GraphQL', icon: SiIcons.SiGraphql, color: '#E10098', darkColor: '#E10098' },
    { name: 'Socket.io', icon: SiIcons.SiSocketdotio, color: '#010101', darkColor: '#FFFFFF' },
    { name: 'Jest', icon: SiIcons.SiJest, color: '#C21325', darkColor: '#C21325' },
    { name: 'Cypress', icon: SiIcons.SiCypress, color: '#17202C', darkColor: '#69D3A7' },
    { name: 'Vercel', icon: SiIcons.SiVercel, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'Netlify', icon: SiIcons.SiNetlify, color: '#00C7B7', darkColor: '#00C7B7' },
    { name: 'Figma', icon: SiIcons.SiFigma, color: '#F24E1E', darkColor: '#F24E1E' },
    { name: 'VS Code', icon: VscVscode, color: '#007ACC', darkColor: '#007ACC' },
    { name: 'Postman', icon: SiIcons.SiPostman, color: '#FF6C37', darkColor: '#FF6C37' },
    { name: 'Slack', icon: SiIcons.SiSlack, color: '#4A154B', darkColor: '#4A154B' },
    { name: 'Notion', icon: SiIcons.SiNotion, color: '#000000', darkColor: '#FFFFFF' }
  ];

  useEffect(() => {
    if (!carouselRef.current || !containerRef.current) return;

    const carousel = carouselRef.current;
    const container = containerRef.current;
    
    // Clone the carousel content for seamless loop
    const carouselClone = carousel.cloneNode(true) as HTMLElement;
    container.appendChild(carouselClone);

    // Calculate the width of one carousel
    const carouselWidth = carousel.scrollWidth;

    // Set up the infinite scroll animation
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.set([carousel, carouselClone], { x: 0 })
      .to([carousel, carouselClone], {
        x: -carouselWidth,
        duration: 40,
        ease: "none"
      })
      .set([carousel, carouselClone], { x: 0 });

    // Pause on hover
    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.resume();

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tl.kill();
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (carouselClone.parentNode) {
        carouselClone.parentNode.removeChild(carouselClone);
      }
    };
  }, []);

  return (
    <div className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">Technologies I Work With</h3>
          <p className="text-muted-foreground">
            A comprehensive toolkit for building modern applications
          </p>
        </div>
      </div>
      
      {/* Carousel Container with proper overflow handling and increased height */}
      <div className="relative overflow-hidden py-8">
        <div 
          ref={containerRef}
          className="flex"
        >
          <div 
            ref={carouselRef}
            className="flex items-center gap-4 whitespace-nowrap"
            style={{ 
              paddingLeft: '2rem',
              paddingRight: '2rem'
            }}
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-md hover:shadow-lg dark:shadow-none dark:hover:shadow-primary/10 tech-icon-container"
                  style={{
                    '--light-color': tech.color,
                    '--dark-color': tech.darkColor,
                    width: '120px',
                    height: '100px',
                    flexShrink: 0,
                    padding: '16px'
                  } as React.CSSProperties}
                >
                  <Icon 
                    className="w-8 h-8 mb-2 transition-all duration-300 group-hover:scale-110 tech-icon" 
                  />
                  <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Hover to pause • Continuously learning new technologies
        </p>
      </div>

      <style jsx>{`
        .tech-icon {
          color: var(--light-color);
        }
        
        :global(.dark) .tech-icon {
          color: var(--dark-color) !important;
        }
      `}</style>
    </div>
  );
}