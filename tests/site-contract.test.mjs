import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');

const chrome = read('components/SiteChrome.tsx');
const layout = read('app/layout.tsx');
const contact = read('app/contact-us/page.tsx');
const contactCss = read('app/contact-us/contact.css');
const reviewRail = read('components/ReviewRail.tsx');
const globals = read('app/globals.css');
const services = read('app/services/[slug]/page.tsx');
const site = read('lib/site.ts');
const nextConfig = read('next.config.mjs');

const visibleSources = [
  chrome,
  contact,
  services,
  read('components/Marketing.tsx'),
  read('app/blog/[slug]/page.tsx'),
  read('app/research/[slug]/page.tsx'),
];

test('primary chrome follows the three-link and parent-attribution contract', () => {
  assert.match(chrome, /Home/);
  assert.match(chrome, /Services/);
  assert.match(chrome, /Contact Us/);
  assert.match(chrome, /item\.href === '\/' \? pathname === '\/' : pathname === item\.href \|\| pathname\.startsWith\(`\$\{item\.href\}\/`\)/);
  assert.match(chrome, /aria-current=\{isActive\(item\) \? 'page'/);
  assert.match(chrome, /window\.innerWidth > 900/);
  assert.match(chrome, /removeEventListener\('resize', closeAtDesktop\)/);
  assert.match(chrome, /Powered by StealthAgents/g);
  assert.doesNotMatch(chrome, /TimedLeadModal/);
});

test('contact uses ten unique approved reviews and the required parent-brand evidence', () => {
  const reviewPath = new URL('lib/stealthAgentsReviews.json', root);
  assert.ok(existsSync(reviewPath), 'approved review data is missing');
  const reviews = JSON.parse(read('lib/stealthAgentsReviews.json'));
  assert.ok(reviews.length >= 10);
  assert.equal(new Set(reviews.map((review) => review.evidenceId)).size, reviews.length);
  assert.ok(reviews.every((review) => review.sourceUrl === 'https://stealthagents.com'));
  assert.match(reviewRail, /StealthAgents reviews/);
  assert.match(contact, /stealth-agents-team\.webp[\s\S]*?loading="eager"/);
  assert.match(contact, /Official team, Bacolod/);
  assert.match(contact, /stealth-agents-team\.webp/);
  assert.match(contact, /stealth-agents-logo-black\.png/);
  assert.doesNotMatch(contact, /<iframe/);
});

test('the conversion path keeps scheduling on thank-you only', () => {
  assert.match(read('app/thank-you/page.tsx'), /go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(read('components/LeadForm.tsx'), /router\.push\('\/thank-you'\)/);
  assert.ok(existsSync(new URL('app/thanks-whats-next/page.tsx', root)));
  assert.match(read('app/confirmation/page.tsx'), /thank-you\/page/);
});

test('review marquee and responsive conversion controls follow the brief', () => {
  assert.match(reviewRail, /window\.setInterval\(tick, 50\)/);
  assert.match(reviewRail, /staticMode\.matches \|\| pausedRef\.current\) return/);
  assert.match(reviewRail, /stage\.scrollLeft = offset/);
  assert.match(reviewRail, /track\.appendChild\(first\)/);
  assert.match(reviewRail, /max-width: 600px.*prefers-reduced-motion: reduce/);
  assert.doesNotMatch(reviewRail, /cloneNode|Pause reviews|Play reviews|aria-pressed/);
  assert.doesNotMatch(contactCss, /@keyframes review-flow|translateY|nth-child\(n\+6\)/);
  assert.match(contactCss, /prefers-reduced-motion:reduce[\s\S]*?transform:none!important/);
  assert.match(contactCss, /\.contact-fold>\*\{min-width:0\}/);
  assert.match(globals, /\.service-row-image\{position:relative;aspect-ratio:auto;min-height:300px/);
  assert.match(contact, /href="#consultation-form"/);
  assert.match(globals, /@media\(max-width:900px\).*?menu-toggle\{display:inline-flex.*?\.site-header \.primary-nav\{display:none/s);
});

test('role visuals and research presentation do not mislabel evidence', () => {
  const serviceIndex = read('app/services/page.tsx');
  const about = read('app/about/page.tsx');
  const research = read('app/research/[slug]/page.tsx');
  assert.match(serviceIndex, /ServiceVisual/);
  assert.match(services, /ServiceVisual/);
  assert.doesNotMatch(services, /service\.image/);
  assert.match(about, /src=\{site\.heroImage\}/);
  assert.match(research, /No original results are claimed/);
  assert.match(research, /Proposed protocol/);
  assert.doesNotMatch(research, /<h2>Findings/);
  assert.match(read('components/ArticleLayout.tsx'), /editorial-\$\{kind\.toLowerCase\(\)\}/);
  assert.match(globals, /\.editorial-research \.article-hero-image img\{object-fit:contain\}/);
});

test('all six service records expose the long-form content contract', () => {
  for (const key of ['image', 'audience', 'problem', 'inputs', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faq', 'related']) {
    const matches = site.match(new RegExp(`"?${key}"?\\s*:`, 'g')) || [];
    assert.ok(matches.length >= 6, `${key} must exist for all six services`);
  }
  for (const heading of ['Who this role is for', 'Inputs and approved sources', 'Workflow and deliverables', 'Quality controls', 'Decision boundaries', 'Frequently asked questions']) {
    assert.match(services, new RegExp(heading));
  }
});

test('editorial routes use the shared article system with TOC and supporting sidebar', () => {
  assert.match(read('app/blog/[slug]/page.tsx'), /ArticleLayout/);
  assert.match(read('app/research/[slug]/page.tsx'), /ArticleLayout/);
  assert.ok(existsSync(new URL('components/ArticleLayout.tsx', root)));
});

test('forbidden decorative labels and visible dash punctuation are absent from commercial templates', () => {
  for (const source of visibleSources) {
    assert.doesNotMatch(source, /0\{index\s*\+\s*1\}|>0[1-9]</);
    assert.doesNotMatch(source, /[—–]/);
  }
});

test('contact has an intentional FAQ treatment and compact desktop full-form layout', () => {
  assert.match(contactCss, /\.contact-faq\{/);
  assert.match(contactCss, /\.contact-form-card \.lead-form/);
  assert.match(contactCss, /@media\(min-width:1051px\)/);
  assert.match(contactCss, /grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(globals, /\.lead-form label\{display:block/);
});

test('public endpoints enforce bounded input, content type, timeouts, and basic abuse protection', () => {
  const leadRoute = read('app/api/submit-lead/handler.ts');
  const contactLeadRoute = read('app/api/submit-lead/contact/route.ts');
  const leadForm = read('components/LeadForm.tsx');
  const trackingRoute = read('app/ingest/track/route.ts');
  assert.match(contactLeadRoute, /handleLead\(request, true\)/);
  assert.match(leadForm, /submit-lead\/contact/);
  for (const source of [leadRoute, trackingRoute]) {
    assert.match(source, /readBoundedBody/);
    assert.match(source, /content-type/i);
    assert.match(source, /\.allow\(/);
    assert.match(source, /AbortSignal\.timeout/);
    assert.match(source, /catch/);
  }
});

test('editorial source avoids the rejected template paragraphs', () => {
  const blog = read('lib/content.ts');
  const research = read('lib/october-12/researchPosts.ts');
  assert.doesNotMatch(blog, /Recurring work becomes fragile when status lives in inboxes/);
  assert.doesNotMatch(blog, /Use the first review to narrow the role before you expand it/);
  assert.doesNotMatch(research, /research question HCS-R-\d+-\d+ asks whether[^\n]+Reviewers retain original customer wording[^\n]+Report numerators with denominators/);
});

test('official assets, subsidiary icon, and security headers are configured', () => {
  for (const asset of ['public/stealth-agents-team.webp', 'public/stealth-agents-logo-black.png', 'app/icon.svg']) {
    assert.ok(existsSync(new URL(asset, root)), `${asset} missing`);
  }
  for (const header of ['Strict-Transport-Security', 'Content-Security-Policy', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
    assert.match(nextConfig, new RegExp(header));
  }
  assert.doesNotMatch(layout, /TimedLeadModal/);
});
