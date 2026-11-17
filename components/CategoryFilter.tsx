'use client';

import { useEffect, useMemo, useState } from 'react';
import { matchesCategory, type CategoryOption } from '@/lib/category-filter.mjs';

type CategoryFilterProps = {
  collectionId: string;
  itemLabel: string;
  options: CategoryOption[];
  total: number;
};

const queryCategory = () => new URLSearchParams(window.location.search).get('category') || 'All';

export function CategoryFilter({ collectionId, itemLabel, options, total }: CategoryFilterProps) {
  const [active, setActive] = useState('All');
  const featured = options.slice(0, 8);
  const remaining = options.slice(8);
  const knownCategories = useMemo(() => new Set(options.map(({ name }) => name)), [options]);
  const visibleCount = active === 'All' ? total : (options.find(({ name }) => name === active)?.count || 0);

  useEffect(() => {
    const syncFromUrl = () => setActive(queryCategory());
    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  useEffect(() => {
    const collection = document.getElementById(collectionId);
    if (!collection) return;
    collection.querySelectorAll<HTMLElement>('[data-editorial-card]').forEach((card) => {
      card.hidden = !matchesCategory(card.dataset.category || '', active);
    });
    const empty = document.getElementById(`${collectionId}-empty`);
    if (empty) empty.hidden = visibleCount > 0;
  }, [active, collectionId, visibleCount]);

  const selectCategory = (category: string) => {
    if (category === active) return;
    setActive(category);
    const url = new URL(window.location.href);
    if (category === 'All') url.searchParams.delete('category');
    else url.searchParams.set('category', category);
    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  const button = (option: CategoryOption | { name: 'All'; count: number }) => <button
    className="category-button"
    type="button"
    key={option.name}
    aria-pressed={active === option.name}
    onClick={() => selectCategory(option.name)}
  ><span>{option.name}</span><span aria-label={`${option.count} ${itemLabel}`}>{option.count}</span></button>;

  return <div className="category-filter" aria-label={`Filter ${itemLabel} by category`}>
    <div className="category-filter-heading"><div><p className="eyebrow">Browse by topic</p><h2>Find the operating question you need.</h2></div><p className="editorial-filter-status" aria-live="polite">Showing {visibleCount} of {total} {itemLabel}</p></div>
    <div className="category-primary">{button({ name: 'All', count: total })}{featured.map(button)}</div>
    {remaining.length > 0 && <details className="category-more" open={knownCategories.has(active) && !featured.some(({ name }) => name === active) ? true : undefined}>
      <summary>More categories <span>{remaining.length}</span></summary>
      <div className="category-more-list">{remaining.map(button)}</div>
    </details>}
  </div>;
}
