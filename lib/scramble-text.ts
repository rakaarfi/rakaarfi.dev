import gsap from 'gsap';

// Custom ScrambleText implementation since GSAP's ScrambleText is premium
export class ScrambleText {
  private element: HTMLElement;
  private originalText: string;
  private chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  private isAnimating: boolean = false;

  constructor(element: HTMLElement) {
    this.element = element;
    this.originalText = element.textContent || '';
  }

  scramble(options: {
    duration?: number;
    delay?: number;
    chars?: string;
    onComplete?: () => void;
  } = {}) {
    if (this.isAnimating) return;
    
    const {
      duration = 1,
      delay = 0,
      chars = this.chars,
      onComplete
    } = options;

    this.isAnimating = true;
    const textLength = this.originalText.length;
    let currentText = this.originalText;
    
    // Create timeline
    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        this.isAnimating = false;
        onComplete?.();
      }
    });

    // Scramble phase
    tl.to({}, {
      duration: duration * 0.7,
      ease: 'none',
      onUpdate: () => {
        let scrambledText = '';
        for (let i = 0; i < textLength; i++) {
          if (this.originalText[i] === ' ') {
            scrambledText += ' ';
          } else {
            scrambledText += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        this.element.textContent = scrambledText;
      }
    });

    // Reveal phase
    tl.to({}, {
      duration: duration * 0.3,
      ease: 'power2.out',
      onUpdate: () => {
        const progress = tl.progress();
        const revealLength = Math.floor(textLength * progress);
        let revealedText = '';
        
        for (let i = 0; i < textLength; i++) {
          if (i < revealLength) {
            revealedText += currentText[i];
          } else if (currentText[i] === ' ') {
            revealedText += ' ';
          } else {
            revealedText += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        
        this.element.textContent = revealedText;
      }
    });

    return tl;
  }

  setText(newText: string, options?: Parameters<ScrambleText['scramble']>[0]) {
    this.originalText = newText;
    return this.scramble(options);
  }
}

export function createScrambleText(element: HTMLElement) {
  return new ScrambleText(element);
}