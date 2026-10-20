import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleLayout, cleanText } from '@/components/ArticleLayout';
import { researchPosts, researchBySlug } from '@/lib/content';

function protocolText(value: string) { return value.replace(/\bstudy\b/gi, 'protocol').replace(/\baudit\b/gi, 'review').replace(/\breport\b/gi, 'brief'); }

export function generateStaticParams() { return researchPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = researchBySlug(slug); return post ? { title: cleanText(protocolText(post.title)), description: cleanText(protocolText(post.summary)), alternates: { canonical: `/research/${post.slug}` }, openGraph: { images: [post.image || '/hero.png'] } } : {}; }

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();
  const related = researchPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const hasStudySections = Boolean(post.methodology?.length);
  const toc = [{ id: 'key-finding', label: 'Control proposition' }, { id: 'method', label: hasStudySections ? 'Proposed protocol' : 'What this brief examines' }, { id: 'implications', label: hasStudySections ? 'Protocol interpretation' : 'Practical interpretation' }, { id: 'sources', label: 'Sources' }, { id: 'next-step', label: 'Apply the brief' }];
  return <ArticleLayout kind="Research" title={protocolText(post.title)} summary={protocolText(post.summary)} category={post.cluster} publishedAt={post.publishedAt} image={post.image || '/hero.png'} toc={toc} sourceLabel={post.sources[0]?.label} statusNote="Source-led protocol or operating brief. No original results are claimed." related={related.map((item) => ({ href: `/research/${item.slug}`, title: protocolText(item.title) }))}>
    <section id="key-finding"><h2>Control proposition</h2><p className="research-finding">{cleanText(protocolText(post.finding))}</p></section>
    {hasStudySections ? <><section id="method"><h2>Proposed protocol</h2>{post.methodology?.map((item) => <p key={item}>{cleanText(protocolText(item))}</p>)}</section><section id="implications"><h2>Protocol interpretation</h2><p>The following statements explain what the proposed controls are designed to preserve. They are not measured outcomes.</p>{post.findings?.map((item) => <p key={item}>{cleanText(protocolText(item))}</p>)}</section></> : <><section id="method"><h2>What this brief examines</h2><p>This brief connects public guidance with the operating questions leaders face when they divide work across an internal team and remote support. It does not replace professional advice. It provides a structured starting point for role design and review.</p></section><section id="implications"><h2>Practical interpretation</h2><p>A useful support role is defined by the boundary between repeatable preparation and accountable judgment. Every status should point to its source, current owner, and next review condition.</p></section></>}
    <section id="sources" className="sources"><h2>Sources</h2><ol>{post.sources.map((source, index) => <li key={`${source.url}-${index}`}><a href={source.url} rel="noopener noreferrer">{cleanText(source.label)}</a>{source.publisher && <>; {cleanText(source.publisher)}</>}</li>)}</ol></section>
    <section id="next-step"><h2>Apply the brief to one real workflow</h2><p>Use the cited guidance to clarify an input, boundary, review point, or escalation path before expanding the role.</p><Link id="cta-research-final-bookcall" className="button primary" href="/contact-us">Discuss your workflow in a free call</Link></section>
  </ArticleLayout>;
}
