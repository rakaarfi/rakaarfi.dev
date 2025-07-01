import { Metadata } from 'next';
import { ContactHero } from '@/components/contact-hero';
import { ContactForm } from '@/components/contact-form';
import { ContactInfo } from '@/components/contact-info';
import { TawkTo } from '@/components/tawk-to';

export const metadata: Metadata = {
  title: 'Contact - Raka Arfi',
  description: 'Get in touch with Raka Arfi for collaboration opportunities, project inquiries, or just to say hello.',
};

export default function Contact() {
  return (
    <div className="pt-20">
      <ContactHero />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <TawkTo />
    </div>
  );
}