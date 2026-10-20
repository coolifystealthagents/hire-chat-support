import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { ServiceVisual } from '@/components/ServiceVisual';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const service = serviceBySlug(slug); return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${service.slug}` } } : {}; }

function ListSection({ title, items }: { title: string; items: string[] }) {
  return <section><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = service.related.map((item) => serviceBySlug(item)).filter(Boolean);
  return <main className="service-detail">
    <header className="page-hero service-hero"><div><p className="eyebrow">Specialist chat support role</p><h1>{service.name}</h1><p>{service.short}</p><Link id={`cta-services-${service.slug}-bookcall`} className="button primary" href="/contact-us">Discuss this role in a free call</Link></div><div className="page-hero-media"><ServiceVisual service={service} /></div></header>
    <div className="service-manual">
      <aside className="service-summary"><p className="eyebrow">Role at a glance</p><p>{service.problem}</p><a href="#inputs">Review the inputs</a><a href="#workflow">See the workflow</a><a href="#boundaries">Check the boundaries</a><a href="#faq">Read common questions</a></aside>
      <article className="prose service-prose">
        <section><h2>Who this role is for</h2><p>{service.audience}</p><h3>The operating problem</h3><p>{service.problem}</p><p>This role adds capacity by making repeatable preparation and coordination explicit. Your team still owns policy, material account actions, security decisions, and every exception that requires accountable judgment.</p></section>
        <section id="inputs"><h2>Inputs and approved sources</h2><p>A dependable role begins with named sources. The assistant should know which system controls the record, how freshness is checked, and when incomplete information must be returned rather than guessed.</p><ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section id="workflow"><h2>Workflow and deliverables</h2><p>The exact tools can vary, but the handoff should always show what entered the workflow, what was checked, what changed, and who owns the next decision.</p><h3>A practical operating flow</h3><ol>{service.workflow.map((item) => <li key={item}>{item}</li>)}</ol><h3>Review ready outputs</h3><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <ListSection title="Quality controls" items={service.qualityControls} />
        <section id="boundaries"><h2>Decision boundaries</h2><p>Escalation is part of the role, not a failure of it. These boundaries protect the customer, the assistant, and the accountable owner.</p><ul>{service.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h2>Common starting scenarios</h2>{service.scenarios.map((scenario) => <div key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.description}</p></div>)}</section>
        <section id="faq"><h2>Frequently asked questions</h2>{service.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
        <section><h2>Related support roles</h2><div className="related-links">{related.map((item) => item && <Link href={`/services/${item.slug}`} key={item.slug}><strong>{item.name}</strong><span>{item.short}</span></Link>)}</div></section>
        <section className="service-final"><h2>Turn the first workflow into a role your team can inspect.</h2><p>Bring a recurring queue, its current source material, and the moments that still need human judgment. We will help define a controlled place to start.</p><Link id={`cta-services-${service.slug}-consultation`} className="button primary" href="/contact-us">Plan a free consultation</Link></section>
      </article>
    </div>
  </main>;
}
