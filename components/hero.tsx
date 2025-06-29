"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';
import { createScrambleText } from '@/lib/scramble-text';
import gsap from 'gsap';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      
      // Initial text styles
      if (nameRef.current) nameRef.current.style.opacity = '0';
      if (titleRef.current) titleRef.current.style.opacity = '0';
      if (subtitleRef.current) subtitleRef.current.style.opacity = '0';

      tl.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
      .fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .call(() => {
        // Scramble "Raka Arfi"
        if (nameRef.current) {
          nameRef.current.style.opacity = '1';
          const nameScrambler = createScrambleText(nameRef.current);
          nameScrambler.scramble({
            duration: 1.2,
            delay: 0.3
          });
        }
        
        // Scramble "Fullstack Developer"
        if (titleRef.current) {
          titleRef.current.style.opacity = '1';
          const titleScrambler = createScrambleText(titleRef.current);
          titleScrambler.scramble({
            duration: 1.5,
            delay: 0.8
          });
        }
        
        // Scramble "Backend Architecture Specialist"
        if (subtitleRef.current) {
          subtitleRef.current.style.opacity = '1';
          const subtitleScrambler = createScrambleText(subtitleRef.current);
          subtitleScrambler.scramble({
            duration: 1.8,
            delay: 1.5
          });
        }
      }, [], '+=0.2')
      .fromTo('.hero-description', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '+=1.8'
      )
      .fromTo('.hero-buttons', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="hero-title mb-6">
          <p className="text-lg sm:text-xl text-muted-foreground mb-2">
            {t('hero.greeting')}
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span ref={nameRef} className="block">Raka Arfi</span>
            <span className="block hero-text mt-2">
              <span ref={titleRef}>{t('hero.title')}</span>
            </span>
          </h1>
        </div>
        
        <div className="hero-subtitle mb-8">
          <p ref={subtitleRef} className="text-xl sm:text-2xl text-muted-foreground font-light">
            Backend Architecture Specialist
          </p>
        </div>

        <div className="hero-description mb-12">
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
        </div>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="hover-target group">
            <Link href="/projects">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="hover-target group">
            <Link href="/contact">
              {t('hero.contact')}
              <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
