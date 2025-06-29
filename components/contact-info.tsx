import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@rakaarfi.dev',
      href: 'mailto:hello@rakaarfi.dev',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 812 3456 7890',
      href: 'tel:+6281234567890',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jakarta, Indonesia',
      href: 'https://maps.google.com/?q=Jakarta,Indonesia',
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      label: 'Timezone',
      value: 'GMT+7 (WIB)',
      color: 'text-purple-500'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="space-y-8">
      <Card className="hover-target">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          
          <div className="space-y-4">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`p-2 rounded-lg bg-muted ${detail.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{detail.label}</p>
                    <p className="text-muted-foreground">{detail.value}</p>
                  </div>
                </div>
              );

              return detail.href ? (
                <a
                  key={index}
                  href={detail.href}
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="hover-target block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="hover-target">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">Working Hours</h3>
          
          <div className="space-y-3">
            {workingHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-muted last:border-0">
                <span className="font-medium">{schedule.day}</span>
                <span className="text-muted-foreground">{schedule.hours}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center mb-2">
              <MessageCircle className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">Quick Response</span>
            </div>
            <p className="text-sm text-muted-foreground">
              I typically respond to messages within 24 hours during working days. 
              For urgent matters, please mention it in your subject line.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="hover-target">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Prefer Direct Contact?</h3>
          <p className="text-muted-foreground mb-4">
            For the fastest response, please use the contact form above or send 
            me an email directly. I check my messages regularly throughout the day.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>📧 Email: Best for detailed inquiries</p>
            <p>📱 Phone: Available during working hours</p>
            <p>💬 Contact Form: Quick and easy messaging</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}