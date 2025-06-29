"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

export function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo('.about-content', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      )
      .fromTo('.about-image', 
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
        '-=0.7'
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Me
            </h1>
            
            <div className="flex items-center mb-6 text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2" />
              Jakarta, Indonesia
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                I'm a passionate fullstack developer with a strong focus on backend architecture. 
                With over 5 years of experience in the industry, I specialize in building scalable, 
                high-performance applications using modern technologies.
              </p>
              
              <p>
                My expertise lies in <strong className="text-foreground">Golang</strong> and <strong className="text-foreground">Python</strong> 
                for backend development, combined with <strong className="text-foreground">React</strong> and <strong className="text-foreground">Next.js</strong> 
                for creating engaging user interfaces. I'm passionate about clean code, system design, 
                and creating meaningful digital experiences.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>

            <Button size="lg" className="hover-target group">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              Download Resume
            </Button>
          </div>

          <div className="about-image">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <Image
                  src="/rakaarfi2.JPG"
                  alt="Raka Arfi"
                  width={500}
                  height={500}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
