"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'id' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Fullstack Developer',
    'hero.description': 'I specialize in building scalable applications using Golang, Python, and JavaScript. Passionate about clean code and modern web technologies.',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get In Touch',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Fullstack developer with strong focus on backend architecture',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.viewAll': 'View All Projects',
    
    // Blog
    'blog.title': 'Latest Posts',
    'blog.viewAll': 'View All Posts',
    
    // Contact
    'contact.title': 'Let\'s Work Together',
    'contact.description': 'Have a project in mind? Let\'s discuss how we can bring your ideas to life.',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.projects': 'Proyek',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontak',
    
    // Hero
    'hero.greeting': 'Halo, saya',
    'hero.title': 'Fullstack Developer',
    'hero.description': 'Saya mengkhususkan diri dalam membangun aplikasi yang dapat diskalakan menggunakan Golang, Python, dan JavaScript. Passionate tentang kode yang bersih dan teknologi web modern.',
    'hero.cta': 'Lihat Karya Saya',
    'hero.contact': 'Hubungi Saya',
    
    // About
    'about.title': 'Tentang Saya',
    'about.description': 'Fullstack developer dengan fokus kuat pada arsitektur backend',
    
    // Projects
    'projects.title': 'Proyek Unggulan',
    'projects.viewAll': 'Lihat Semua Proyek',
    
    // Blog
    'blog.title': 'Postingan Terbaru',
    'blog.viewAll': 'Lihat Semua Postingan',
    
    // Contact
    'contact.title': 'Mari Bekerja Sama',
    'contact.description': 'Punya proyek dalam pikiran? Mari diskusikan bagaimana kita bisa mewujudkan ide Anda.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.greeting': 'Hallo, ich bin',
    'hero.title': 'Fullstack-Entwickler',
    'hero.description': 'Ich spezialisiere mich auf die Entwicklung skalierbarer Anwendungen mit Golang, Python und JavaScript. Leidenschaftlich für sauberen Code und moderne Web-Technologien.',
    'hero.cta': 'Meine Arbeit ansehen',
    'hero.contact': 'Kontakt aufnehmen',
    
    // About
    'about.title': 'Über mich',
    'about.description': 'Fullstack-Entwickler mit starkem Fokus auf Backend-Architektur',
    
    // Projects
    'projects.title': 'Ausgewählte Projekte',
    'projects.viewAll': 'Alle Projekte ansehen',
    
    // Blog
    'blog.title': 'Neueste Beiträge',
    'blog.viewAll': 'Alle Beiträge ansehen',
    
    // Contact
    'contact.title': 'Lass uns zusammenarbeiten',
    'contact.description': 'Haben Sie ein Projekt im Kopf? Lassen Sie uns besprechen, wie wir Ihre Ideen zum Leben erwecken können.',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'id', 'de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}