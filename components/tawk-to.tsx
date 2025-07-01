'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';


export function TawkTo() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const TAWK_TO_ID = process.env.NEXT_PUBLIC_TAWK_TO_ID;
    if (!TAWK_TO_ID) {
      console.warn('Tawk.to ID not configured.');
      return;
    }

    // Remove existing Tawk.to if any
    const oldScript = document.querySelector(`script[src*="tawk.to"]`);
    if (oldScript) oldScript.remove();

    // Inject script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_TO_ID}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    // Theme detection (iframe customization)
    const tryApplyTheme = () => {
      if (window.Tawk_API && typeof window.Tawk_API.setAttributes === 'function') {
        window.Tawk_API.setAttributes(
          {
            'colorTheme': resolvedTheme === 'dark' ? 'dark' : 'light',
          },
          (error: any) => {
            if (error) console.error('Tawk theme error:', error);
          }
        );
      } else {
        setTimeout(tryApplyTheme, 500); // Retry until ready
      }
    };

    tryApplyTheme();

    return () => {
      // Clean up script
      const iframe = document.querySelector('iframe[src*="tawk.to"]');
      if (iframe && iframe.parentNode) iframe.parentNode.removeChild(iframe);
    };
  }, [resolvedTheme]);

  return null;
}
