import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleLayout, cleanText, textId } from '@/components/ArticleLayout';
import { blogPosts, blogBySlug } from '@/lib/content';

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = blogBySlug(slug); return post ? { title: cleanText(post.title), description: cleanText(post.description), alternates: { canonical: `/blog/${post.slug}` }, openGraph: { images: [post.image || '/hero.png'] } } : {}; }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const toc = [...post.sections.map((section) => ({ id: textId(section.heading), label: cleanText(section.heading) })), { id: 'common-questions', label: 'Common questions' }, ...post.faq.map((item) => ({ id: textId(item.q), label: cleanText(item.q) })), { id: 'next-step', label: 'Plan the next step' }];
  const fallbackImage = post.internalService.includes('knowledge') ? '/october-12/chat-knowledge-answer-expiry.webp' : post.internalService.includes('triage') ? '/october-12/service-outage-chat-status-board.webp' : '/october-12/chat-queue-ownership-at-shift-change.webp';
  return <ArticleLayout kind="Blog" title={post.title} summary={post.description} category={post.category} publishedAt={post.publishedAt} readTime={post.readTime} image={post.image || fallbackImage} toc={toc} sourceLabel={post.source.label} related={related.map((item) => ({ href: `/blog/${item.slug}`, title: item.title }))}>
    {post.sections.map((section, index) => <section key={section.heading} id={textId(section.heading)}><h2>{cleanText(section.heading)}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{cleanText(paragraph)}</p>)}{index === 2 && <p>Use the <Link href={post.internalService}>specialist service role</Link> as a starting point for scope, sources, and evidence.</p>}{index === 4 && <p><a href={post.source.url} rel="noopener noreferrer">{cleanText(post.source.label)}</a> provides public guidance that can help your team test workflow assumptions.</p>}{index === 6 && <p>Compare this approach with <Link href={post.internalSibling}>the next related workflow guide</Link>.</p>}</section>)}
    <section id="common-questions"><h2>Common questions</h2>{post.faq.map((item) => <div key={item.q} id={textId(item.q)}><h3>{cleanText(item.q)}</h3><p>{cleanText(item.a)}</p></div>)}</section>
    <section id="next-step"><h2>Ready to create a clearer support role?</h2><p>Bring the workflow that consumes the most attention. We will help shape the role, handoff, and review points.</p><Link id="cta-blog-final-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link></section>
  </ArticleLayout>;
}
