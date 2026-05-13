'use client';

import { useEffect } from 'react';

export default function ScrollAnimationInit() {
  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll('.section-reveal, .stagger-child');
      elements?.forEach((el) => {
        const rect = el?.getBoundingClientRect();
        if (rect?.top < window.innerHeight * 0.92) {
          el?.classList?.add('revealed');
        }
      });
    };

    // Skill bars
    const animateSkillBars = () => {
      const bars = document.querySelectorAll('.skill-bar-fill');
      bars?.forEach((bar) => {
        const rect = bar?.getBoundingClientRect();
        if (rect?.top < window.innerHeight * 0.95) {
          bar?.classList?.add('animated');
        }
      });
    };

    const onScroll = () => {
      revealElements();
      animateSkillBars();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial run
    setTimeout(() => {
      revealElements();
      animateSkillBars();
    }, 100);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
