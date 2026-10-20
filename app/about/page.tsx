import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'About', description: `How ${site.name} builds focused, accountable remote chat support roles.`, alternates: { canonical: '/about' } };

export default function AboutPage() {
  return <main>
    <header className="page-hero about-hero"><div><p className="eyebrow">About {site.name}</p><h1>Support should carry context forward.</h1><p>We help support leaders shape focused remote roles around real conversation queues, approved knowledge, explicit decision boundaries, and reviewable handoffs.</p></div><div className="page-hero-media"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 44vw" /></div></header>
    <section className="about-story"><div><p className="eyebrow">Why this model exists</p><h2>Customer care becomes fragile when context has no owner.</h2></div><div><p>Many support problems are not caused by a lack of effort. They begin when guidance is hard to find, queue ownership is implicit, or the next person must reconstruct the conversation before acting.</p><p>Hire Chat Support defines the role around those operating conditions. We identify the source an assistant may use, the records they maintain, the completion standard, and the situations that require an authorized owner.</p></div></section>
    <section className="about-responsibility"><div><h2>What the support role owns</h2><ul><li>Routine replies from current approved knowledge</li><li>Complete conversation and handoff records</li><li>Queue coordination and visible status updates</li><li>Prompt escalation when a boundary is reached</li></ul></div><div><h2>What your team owns</h2><ul><li>Policy and service standards</li><li>Authentication, security, and account authority</li><li>Refunds, exceptions, and binding commitments</li><li>Coaching, supervision, and final quality judgment</li></ul></div></section>
    <section className="about-method"><div className="about-method-image"><Image src="/stealth-agents-team.webp" alt="Official StealthAgents team in Bacolod" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div><p className="eyebrow">A managed operating relationship</p><h2>Specialist positioning with experienced staffing support.</h2><p>Hire Chat Support is powered by StealthAgents. The parent team supports recruitment, matching, and managed operations while this site stays focused on the workflows and boundaries of customer conversation work.</p><p>A successful start is intentionally narrow. We choose one recurring workflow, document acceptance criteria, observe real exceptions, and improve the operating guide before expanding scope.</p><Link id="cta-about-story-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link></div></section>
  </main>;
}
