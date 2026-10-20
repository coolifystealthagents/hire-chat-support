import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { ReviewRail } from '@/components/ReviewRail';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us | Chat Support Staffing Consultation',
  description: 'Talk with Hire Chat Support about a focused remote chat support role, its approved sources, and its decision boundaries.',
  alternates: { canonical: '/contact-us' }
};

const faqs = [
  ['What can remote chat support staff handle?', 'Remote staff can answer routine questions from approved guidance, document context, categorize conversations, coordinate handoffs, and flag sensitive or urgent requests.'],
  ['Can we begin with one queue or shift?', 'Yes. A narrow first queue makes coverage, knowledge, quality review, access, and escalation easier to test before the role expands.'],
  ['How do you approach customer data?', 'The consultation covers least privilege access, approved systems, authentication boundaries, redaction, retention, and escalation. Your organization remains responsible for privacy and security obligations.']
];

export default function ContactPage() {
  return <main className="contact-page">
    <section className="contact-fold" aria-labelledby="contact-title">
      <div className="contact-intro">
        <p className="eyebrow">Contact Us</p>
        <h1 id="contact-title">Start with the conversation that needs more care.</h1>
        <p className="contact-lede">Tell us where context gets lost, queues build up, or ownership becomes unclear. We will help map a focused role with approved sources and practical escalation rules.</p>
        <a className="button primary contact-jump" href="#consultation-form">Start the consultation form</a>
        <div className="scope-chips" aria-label="Consultation scope"><span>One clear workflow</span><span>Human approval stays visible</span><span>No sensitive records needed</span></div>
        <ReviewRail />
      </div>
      <div className="contact-form-card" id="consultation-form"><p className="eyebrow">Free consultation</p><h2>Give us the working context.</h2><p>Complete the form without sharing customer credentials, payment details, health information, or private account records.</p><LeadForm source="contact-page-consultation" /></div>
    </section>

    <section className="parent-evidence">
      <div className="team-photo"><Image src="/stealth-agents-team.webp" alt="Official StealthAgents operations team in Bacolod" fill loading="eager" sizes="(max-width: 900px) 100vw, 54vw" /></div>
      <div className="parent-copy"><p className="eyebrow">The operating team behind the service</p><h2>Staffing support grounded in a documented handoff.</h2><p>StealthAgents supports recruitment, matching, and managed operations for Hire Chat Support. Your role begins with documented work, approved access, clear review ownership, and a practical escalation path. Hire Chat Support remains focused on customer conversation workflows while StealthAgents provides staffing and operating support.</p><div className="official-plate"><Image src="/stealth-agents-logo-black.png" alt="StealthAgents official logo" width={180} height={48} /><strong>Official team, Bacolod</strong></div></div>
    </section>

    <section className="contact-depth"><div><p className="eyebrow">Prepare a useful brief</p><h2>Bring the workflow, not a polished job description.</h2></div><div><p>Useful starting material includes the queue, its current owner, the approved knowledge source, the expected response or record, and the moment a decision must change hands. We use that context to keep the role specific.</p><p>Access, authentication, refunds, policy exceptions, security events, and binding customer promises remain with owners you authorize. The consultation makes those boundaries explicit before candidate matching begins.</p></div></section>
    <section className="contact-faq"><p className="eyebrow">Questions before you reach out</p><h2>Practical answers for a controlled start.</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}<Link className="button primary" href="/services">Explore all service roles</Link></section>
  </main>;
}
