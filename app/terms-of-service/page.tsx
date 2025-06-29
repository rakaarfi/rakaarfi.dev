import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Raka Arfi',
  description: 'Terms of service for Raka Arfi\'s personal portfolio website.',
};

export default function TermsOfService() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound
            by the terms and provision of this agreement.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily view and download one copy of
            the materials on this website for personal, non-commercial transitory
            viewing only.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on this website are provided on an 'as is' basis.
            Raka Arfi makes no warranties, expressed or implied, and hereby
            disclaims all other warranties including any implied warranties of
            merchantability, fitness for a particular purpose, or non-infringement
            of intellectual property.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall Raka Arfi or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on this website.
          </p>

          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on this website could include technical,
            typographical, or photographic errors. Raka Arfi does not warrant
            that any of the materials on its website are accurate, complete, or current.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please contact
            us through the contact form on this website.
          </p>
        </div>
      </div>
    </div>
  );
}