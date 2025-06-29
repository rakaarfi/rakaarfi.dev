import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { RiTwitterXLine, RiInstagramLine } from 'react-icons/ri';
import { SiUpwork } from 'react-icons/si';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rakaarfi',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rakaarfi',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'X',
      href: 'https://x.com/rakaarfi',
      icon: RiTwitterXLine,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/rakaarfi',
      icon: RiInstagramLine,
      color: 'hover:text-pink-500',
    },
    {
      name: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~01234567890abcdef',
      icon: SiUpwork,
      color: 'hover:text-green-600',
    },
    {
      name: 'Email',
      href: 'mailto:hello@rakaarfi.dev',
      icon: Mail,
      color: 'hover:text-red-500',
    },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Raka Arfi</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Fullstack developer specializing in building scalable applications 
              with modern web technologies. Always learning and exploring new 
              technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover-target text-muted-foreground transition-colors ${social.color}`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover-target text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover-target text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover-target text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover-target text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover-target text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover-target text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Raka Arfi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}