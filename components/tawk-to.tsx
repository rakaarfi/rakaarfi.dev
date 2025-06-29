"use client";

import { useEffect } from 'react';

export function TawkTo() {
  useEffect(() => {
    // Note: To enable live chat, replace 'YOUR_TAWK_TO_ID' with your actual Tawk.to property ID
    // You can get this from https://tawk.to after creating an account
    
    const TAWK_TO_ID = process.env.NEXT_PUBLIC_TAWK_TO_ID;
    
    // Only load Tawk.to if the ID is provided
    if (!TAWK_TO_ID || TAWK_TO_ID === 'YOUR_TAWK_TO_ID') {
      console.log('Tawk.to ID not configured. Live chat is disabled.');
      return;
    }

    // Tawk.to integration
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_TO_ID}/default`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Custom styling for dark mode compatibility
    const style = document.createElement('style');
    style.textContent = `
      .tawk-min-container {
        z-index: 999 !important;
      }
      
      .tawk-chatinput-editor {
        background-color: hsl(var(--background)) !important;
        color: hsl(var(--foreground)) !important;
      }
      
      .tawk-button {
        background: hsl(var(--primary)) !important;
      }
      
      @media (prefers-color-scheme: dark) {
        .tawk-window {
          background-color: hsl(var(--background)) !important;
          color: hsl(var(--foreground)) !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup on unmount
      const tawkScript = document.querySelector(`script[src*="${TAWK_TO_ID}"]`);
      if (tawkScript) {
        tawkScript.remove();
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
}