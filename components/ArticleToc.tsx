'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

export function ArticleToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: '-110px 0px -65% 0px', threshold: [0, 1] });
    items.forEach(({ id }) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [items]);
  return <nav className="article-toc" aria-label="Table of contents"><strong>On this page</strong>{items.map((item) => <a key={item.id} className={activeId === item.id ? 'is-active' : undefined} aria-current={activeId === item.id ? 'location' : undefined} href={`#${item.id}`}>{item.label}</a>)}</nav>;
}
