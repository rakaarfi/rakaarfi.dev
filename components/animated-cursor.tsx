"use client";

import { useEffect, useRef, useCallback } from 'react';

export function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const rafRef = useRef<number>();

  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current) {
      const { x, y } = positionRef.current;
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    positionRef.current = { x: e.clientX, y: e.clientY };
    
    // Use requestAnimationFrame to throttle updates
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(updateCursorPosition);
  }, [updateCursorPosition]);

  const handleMouseEnter = useCallback(() => {
    if (!isHoveringRef.current) {
      isHoveringRef.current = true;
      cursorRef.current?.classList.add('hover');
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isHoveringRef.current) {
      isHoveringRef.current = false;
      cursorRef.current?.classList.remove('hover');
    }
  }, []);

  useEffect(() => {
    // Use passive listeners for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Add hover listeners to interactive elements
    const addHoverListeners = () => {
      const hoverTargets = document.querySelectorAll('.hover-target, a, button');
      hoverTargets.forEach((target) => {
        target.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        target.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      });
      return hoverTargets;
    };

    // Initial setup
    let hoverTargets = addHoverListeners();

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      // Remove old listeners
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
      // Add new listeners
      hoverTargets = addHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });

      observer.disconnect();
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <div
      ref={cursorRef}
      className="animated-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'hsl(var(--primary))',
        transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
        transform: 'translate3d(-50%, -50%, 0)',
        willChange: 'transform',
      }}
    />
  );
}