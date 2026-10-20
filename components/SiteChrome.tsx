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
  return <footer>
    <div><Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link><p>Context aware chat support built around approved knowledge and clear ownership.</p></div>
    <div className="footer-links"><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
    <div className="footer-parent"><a className="parent-mark" href="https://stealthagents.com" rel="noopener noreferrer"><span>Powered by StealthAgents</span><Image src="/stealth-agents-logo-black.png" alt="StealthAgents" width={124} height={34} /></a><p className="copyright">© {new Date().getFullYear()} {site.name}</p></div>
  </footer>;
}
