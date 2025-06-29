import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Raka Arfi',
  description: 'Privacy policy for Raka Arfi\'s personal portfolio website.',
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>Information We Collect</h2>
          <p>
            This website may collect information you provide through contact forms,
            including your name, email address, and any messages you send.
          </p>

          <h2>How We Use Information</h2>
          <p>
            Information collected is used solely to respond to your inquiries and
            provide requested services. We do not sell, trade, or share your
            personal information with third parties.
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            This website may use cookies and analytics tools to improve user
            experience and understand website usage patterns. You can disable
            cookies in your browser settings.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This website uses Tawk.to for live chat functionality. Please refer
            to their privacy policy for information about data handling.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us through the contact form on this website.
          </p>
        </div>
      </div>
    </div>
  );
}