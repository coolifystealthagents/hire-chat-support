'use client';

import { useEffect, useRef } from 'react';
import reviews from '@/lib/stealthAgentsReviews.json';

export function ReviewRail() {
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;
    const staticMode = window.matchMedia('(max-width: 600px), (prefers-reduced-motion: reduce)');
    let offset = 0;

    const tick = () => {
      if (staticMode.matches || pausedRef.current) return;
      offset += 2;
      const first = track.firstElementChild as HTMLElement | null;
      if (first) {
        const gap = parseFloat(getComputedStyle(track).columnGap || '0');
        const step = first.getBoundingClientRect().width + gap;
        if (offset >= step) {
          offset -= step;
          track.appendChild(first);
        }
      }
      stage.scrollLeft = offset;
    };

    const timer = window.setInterval(tick, 50);
    return () => window.clearInterval(timer);
  }, []);

  return <section className="reviews-block" aria-labelledby="reviews-title">
    <div className="reviews-heading">
      <strong id="reviews-title">StealthAgents reviews</strong>
      <span>Published on StealthAgents.com</span>
    </div>
    <div
      ref={stageRef}
      className="review-stage"
      tabIndex={0}
      aria-label="StealthAgents client reviews. Focus or hover to pause movement."
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onFocus={() => { pausedRef.current = true; }}
      onBlur={() => { pausedRef.current = false; }}
    >
      <div className="review-track" ref={trackRef}>
        {reviews.map((review) => <blockquote className="review-card" key={review.evidenceId}>
          <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p>{review.quote}</p>
          <footer><strong>{review.name}</strong><span>{review.role}</span></footer>
        </blockquote>)}
      </div>
    </div>
  </section>;
}
