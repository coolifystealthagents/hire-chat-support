import Image from 'next/image';
import Link from 'next/link';
import { ArticleToc, type TocItem } from './ArticleToc';

export function textId(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
export function cleanText(value: string) { return value.replace(/[—–]/g, ',').replace(/--/g, ','); }

type RelatedItem = { href: string; title: string };
type ArticleLayoutProps = {
  kind: 'Blog' | 'Research';
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readTime?: string;
  image: string;
  toc: TocItem[];
  related: RelatedItem[];
  sourceLabel?: string;
  statusNote?: string;
  children: React.ReactNode;
};

export function ArticleLayout({ kind, title, summary, category, publishedAt, readTime, image, toc, related, sourceLabel, statusNote, children }: ArticleLayoutProps) {
  const safeTitle = cleanText(title);
  return <main className={`editorial-page editorial-${kind.toLowerCase()}`}>
    <header className="article-hero"><div className="article-hero-copy"><p className="eyebrow">{kind} / {cleanText(category)}</p><h1>{safeTitle}</h1><p>{cleanText(summary)}</p>{statusNote && <p className="evidence-status"><strong>Evidence status:</strong> {cleanText(statusNote)}</p>}<p className="meta">Hire Chat Support Editorial Team · Published {publishedAt}{readTime ? ` · ${readTime}` : ''}</p></div><div className="article-hero-image"><Image src={image} alt={`Editorial visual for ${safeTitle}`} fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div></header>
    <div className="article-shell">
      <aside className="article-sidebar" aria-label={`${kind} supporting information`}>
        <ArticleToc items={toc} />
        <div className="article-support"><p className="eyebrow">Reading context</p><p><strong>Published by:</strong> Hire Chat Support Editorial Team</p><p><strong>Topic:</strong> {cleanText(category)}</p>{sourceLabel && <p><strong>Primary source:</strong> {cleanText(sourceLabel)}</p>}<h2>Related reading</h2><ul>{related.map((item) => <li key={item.href}><Link href={item.href}>{cleanText(item.title)}</Link></li>)}</ul><Link className="button primary" href="/contact-us">Discuss a workflow</Link></div>
      </aside>
      <article className="article-body prose">{children}</article>
    </div>
  </main>;
}
