import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';
import { ServiceVisual } from '@/components/ServiceVisual';

export const metadata: Metadata = { title: 'Chat support services', description: `Explore remote support roles shaped for ${site.audience}.`, alternates: { canonical: '/services' } };

export default function ServicesPage() {
  return <main>
    <header className="page-hero service-index-hero"><div><p className="eyebrow">Services</p><h1>Give each conversation a clear path.</h1><p>Choose a focused support lane, then define the approved sources, completion standard, accountable owner, and escalation conditions that make it reliable.</p><Link className="button primary" href="/contact-us">Plan a free consultation <ArrowIcon /></Link></div><div className="page-hero-media"><ServiceVisual service={site.services[0]} /></div></header>
    <section className="service-directory"><div className="section-heading"><p className="eyebrow">Six focused roles</p><h2>Start where context breaks down most often.</h2><p>Each role can begin with one queue or recurring workflow. Scope expands only after the first handoff is visible, reviewable, and useful to your team.</p></div>{site.services.map((service) => <article className="service-row" key={service.slug}><div className="service-row-image"><ServiceVisual service={service} compact /></div><div><h3>{service.name}</h3><p>{service.short}</p><p>{service.problem}</p><Link className="text-link" href={`/services/${service.slug}`}>Read the full role guide <ArrowIcon /></Link></div></article>)}</section>
    <section className="service-decisions"><div><p className="eyebrow">A practical selection lens</p><h2>Choose by the work product, not by a broad title.</h2></div><div><h3>Choose live coverage when response continuity is the gap.</h3><p>Live chat and multichannel support keep approved conversations moving while preserving customer context.</p><h3>Choose operations support when the handoff is the gap.</h3><p>Triage and escalation coordination create reliable routing, ownership, and evidence for the people who make decisions.</p><h3>Choose knowledge or quality support when consistency is the gap.</h3><p>Knowledge maintenance and review preparation help managers improve the sources and controls behind frontline work.</p></div></section>
    <section className="closing"><p className="eyebrow">Shape a controlled first workflow</p><h2>Bring one queue and leave with a clearer role brief.</h2><p>We will discuss inputs, permissions, output standards, review ownership, and the exceptions that must remain with your team.</p><Link className="button primary" href="/contact-us">Book a free consultation</Link></section>
  </main>;
}
