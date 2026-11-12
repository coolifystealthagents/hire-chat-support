'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionEnhancements() {
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.utils.toArray<HTMLElement>('.motion-image').forEach((element) => {
      gsap.fromTo(element, { scale: 0.94, opacity: 0.78 }, {
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: { trigger: element, start: 'top 92%', end: 'top 48%', scrub: 0.7 }
      });
    });

    gsap.utils.toArray<HTMLElement>('.motion-copy').forEach((element) => {
      const children = Array.from(element.children);
      if (!children.length) return;
      gsap.fromTo(children, { opacity: 0.3, y: 18 }, {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        ease: 'none',
        scrollTrigger: { trigger: element, start: 'top 88%', end: 'top 55%', scrub: 0.6 }
      });
    });
  });

  return null;
}
