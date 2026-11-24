'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';

const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeAtDesktop = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener('resize', closeAtDesktop);
    return () => window.removeEventListener('resize', closeAtDesktop);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a, button');
    focusable?.[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('menu-open');
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.classList.remove('menu-open'); };
  }, [open]);

  const isActive = (item: (typeof primaryNav)[number]) => item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`);

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${site.name} home`}><Image src="/logo.svg" alt="" width={42} height={42} priority /><span>{site.name}</span></Link>
      <nav ref={panelRef} id="primary-navigation" className={open ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
        {primaryNav.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item) ? 'page' : undefined}>{item.label}</Link>)}
      </nav>
      <a className="parent-mark header-parent" href="https://stealthagents.com" rel="noopener noreferrer"><span>Powered by StealthAgents</span><Image src="/stealth-agents-logo-black.png" alt="StealthAgents" width={104} height={28} /></a>
      <button ref={buttonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}><span className="sr-only">{open ? 'Close' : 'Open'} menu</span><span aria-hidden="true">{open ? 'Close' : 'Menu'}</span></button>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-intro"><Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link><p>Context aware chat support built around approved knowledge and clear ownership.</p><Link className="button footer-cta" href="/contact-us">Discuss a support role</Link></div>
      <nav className="footer-group" aria-label="Explore"><p>Explore</p><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/research" aria-label="Research library">Research</Link><Link href="/contact-us">Contact Us</Link></nav>
      <nav className="footer-group footer-company" aria-label="Company and legal"><p>Company and legal</p><Link href="/about">About</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav>
      <nav className="footer-group footer-services" aria-label="Support services"><p>Support services</p>{site.services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}</nav>
    </div>
    <div className="footer-closing"><div className="footer-legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><span>© {new Date().getFullYear()} {site.name}</span></div><a className="parent-mark" href="https://stealthagents.com" rel="noopener noreferrer"><span>Powered by StealthAgents</span><Image src="/stealth-agents-logo-black.png" alt="StealthAgents" width={124} height={34} /></a></div>
  </footer>;
}
