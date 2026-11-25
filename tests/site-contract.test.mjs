import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
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
const home = read('components/Marketing.tsx');
const servicesIndex = read('app/services/page.tsx');
const blogIndex = read('app/blog/page.tsx');
const researchIndex = read('app/research/page.tsx');
const categoryFilter = read('components/CategoryFilter.tsx');
const icons = read('components/Icons.tsx');
const site = read('lib/site.ts');
const nextConfig = read('next.config.mjs');
const imageCredits = read('app/image-credits/page.tsx');
const sitemap = read('app/sitemap.ts');

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
  assert.match(chrome, /href="\/research" aria-label="Research library">Research/);
});

test('the CC BY-SA support photo has a public and discoverable attribution notice', () => {
  assert.match(chrome, /<Link href="\/image-credits">Image credits<\/Link>/);
  assert.match(sitemap, /'\/image-credits'/);
  assert.match(imageCredits, /Call center PV/);
  assert.match(imageCredits, /Kellie Walenciak/);
  assert.match(imageCredits, /https:\/\/commons\.wikimedia\.org\/wiki\/File:Call_center_PV\.jpg/);
  assert.match(imageCredits, /https:\/\/creativecommons\.org\/licenses\/by-sa\/4\.0\//);
  assert.match(imageCredits, /Converted from JPEG to WebP/);
});

test('contact uses ten unique approved reviews, relevant imagery, and parent-brand evidence', () => {
  const reviewPath = new URL('lib/stealthAgentsReviews.json', root);
  assert.ok(existsSync(reviewPath), 'approved review data is missing');
  const reviews = JSON.parse(read('lib/stealthAgentsReviews.json'));
  assert.ok(reviews.length >= 10);
  assert.equal(new Set(reviews.map((review) => review.evidenceId)).size, reviews.length);
  assert.ok(reviews.every((review) => review.sourceUrl === 'https://stealthagents.com'));
  assert.match(reviewRail, /StealthAgents reviews/);
  assert.match(contact, /chat-support-contact\.jpg/);
  assert.doesNotMatch(contact, /illustrative consultation workflow (?:scene|access)/i);
  assert.doesNotMatch(contact, /<figcaption>/);
  assert.match(contact, /Staffing and managed operations partner/);
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
  for (const slug of ['live-chat-support', 'helpdesk-triage', 'knowledge-base-support', 'qa-review-support', 'customer-escalation', 'multichannel-support']) {
    assert.match(serviceIndex, new RegExp(`/editorial/services-index/${slug}\\.webp`));
  }
  assert.doesNotMatch(serviceIndex, /ServiceVisual/);
  assert.match(services, /src=\{service\.image\}/);
  assert.match(services, /alt=\{service\.imageAlt\}/);
  assert.match(about, /src=\{site\.heroImage\}/);
  assert.match(research, /No original results are claimed/);
  assert.match(research, /Proposed protocol/);
  assert.doesNotMatch(research, /<h2>Findings/);
  assert.match(read('components/ArticleLayout.tsx'), /editorial-\$\{kind\.toLowerCase\(\)\}/);
  assert.match(globals, /\.editorial-research \.article-hero-image img\{object-fit:contain\}/);
});

test('services index hero keeps readable copy and media tracks across breakpoints', () => {
  assert.match(globals, /\.service-index-hero\{width:min\(calc\(100% - 10vw\),var\(--content-max\)\);padding-inline:0;grid-template-columns:minmax\(0,1\.1fr\) minmax\(360px,\.9fr\)/);
  assert.match(globals, /\.service-index-hero h1\{max-width:11ch;font-size:clamp\(3\.1rem,4\.8vw,5\.35rem\)\}/);
  assert.match(globals, /@media\(max-width:1050px\)\{\.service-index-hero\{grid-template-columns:1fr\}/);
  assert.match(globals, /@media\(max-width:700px\)\{\.service-index-hero\{width:100%;padding-inline:5vw\}/);
});

test('all six service records expose the long-form content contract', () => {
  for (const key of ['image', 'audience', 'problem', 'inputs', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faq', 'related']) {
    const matches = site.match(new RegExp(`"?${key}"?\\s*:`, 'g')) || [];
    assert.ok(matches.length >= 6, `${key} must exist for all six services`);
  }
  for (const heading of ['Who this role is for', 'Inputs and approved sources', 'Workflow and deliverables', 'Quality checks', 'Decision boundaries', 'Frequently asked questions']) {
    assert.match(services, new RegExp(heading));
  }
});

test('homepage hero and service detail layouts follow the scoped review contract', () => {
  const homePhoto = new URL('public/editorial/chat-support-home-photo.jpg', root);
  assert.ok(existsSync(homePhoto));
  assert.equal(createHash('sha256').update(readFileSync(homePhoto)).digest('hex'), '9f94343f9edcd8f9f113019001c6e9081987890eb7d60233cdf7cac31e15e521');
  assert.match(site, /chat-support-home-photo\.jpg/);
  assert.match(layout, /chat-support-home-photo\.jpg/);
  assert.doesNotMatch(layout, /chat-support-home-hero-v2\.jpg/);
  assert.match(site, /Customer support professional wearing a headset while working at a laptop/);
  assert.doesNotMatch(home, /Illustrative chat support workflow scene|<figcaption>/);
  assert.doesNotMatch(services, /service-summary|Role at a glance|Review the inputs/);
  assert.match(services, /className="service-hero-copy"/);
  assert.match(globals, /\.service-hero\{grid-template-columns:minmax\(0,1\.02fr\) minmax\(380px,\.98fr\)/);
  assert.match(globals, /@media\(max-width:1100px\)\{\.service-hero\{grid-template-columns:1fr/);
  assert.match(globals, /@media\(max-width:700px\).*?\.service-hero-copy h1\{max-width:none/s);
});

test('Context Thread and service pages use distinct route-appropriate hero media', () => {
  assert.match(home, /src="\/editorial\/source-conversation-owner\.svg"/);
  assert.match(home, /workflow-image/);
  const serviceImages = [...site.matchAll(/image: '(\/editorial\/services-detail\/[^']+\.webp)'/g)].map((match) => match[1]);
  assert.equal(serviceImages.length, 6);
  assert.equal(new Set(serviceImages).size, 6);
  for (const image of serviceImages) {
    assert.ok(existsSync(new URL(`public${image}`, root)), `${image} must exist`);
  }
  const serviceImageHashes = serviceImages.map((image) => createHash('sha256').update(readFileSync(new URL(`public${image}`, root))).digest('hex'));
  assert.equal(new Set(serviceImageHashes).size, 6);
  assert.equal((site.match(/imagePosition:/g) || []).length, 6);
  assert.doesNotMatch(site, /image: '\/editorial\/service-[^']+\.svg'/);
  assert.match(globals, /\.workflow-image img\{object-fit:contain\}/);
  assert.match(globals, /\.service-detail-photo img\{object-fit:cover\}/);
  assert.match(globals, /\.service-hero--escalation \.service-detail-photo img\{object-fit:cover;object-position:center\}/);
});

test('Escalation coordination alone uses the verified photo in a breadcrumb led responsive split hero', () => {
  const hero = new URL('public/editorial/services-detail/customer-escalation.webp', root);
  const indexThumbnail = new URL('public/editorial/services-index/customer-escalation.webp', root);
  assert.ok(existsSync(hero));
  assert.equal(createHash('sha256').update(readFileSync(indexThumbnail)).digest('hex'), 'f46ba7b3dfe5fff5fb3ab67105c9f0292b737b3de19dcebc233be6bd3380931b');
  assert.match(site, /slug: 'customer-escalation', name: 'Escalation coordination', short: 'Keep high context issues visible until the accountable owner resolves them\.'/);
  assert.match(site, /imageAlt: 'Two colleagues coordinating a handoff over a shared tablet'/);
  assert.match(servicesIndex, /'customer-escalation':[\s\S]*?src: '\/editorial\/services-index\/customer-escalation\.webp'/);
  assert.match(services, /service\.slug === 'customer-escalation'/);
  assert.match(services, /className=\{`service-detail\$\{isEscalationCoordination \? ' service-detail--escalation' : ''\}`\}/);
  assert.match(services, /isEscalationCoordination && <nav className="service-breadcrumb" aria-label="Breadcrumb">/);
  assert.match(services, /<Link href="\/services">Services<\/Link><span aria-hidden="true">\/</);
  assert.match(services, /<span aria-current="page">\{service\.name\}<\/span>/);
  assert.match(services, /className=\{`page-hero service-hero\$\{isEscalationCoordination \? ' service-hero--escalation' : ''\}`\}/);
  assert.match(services, /style=\{\{ objectPosition: service\.imagePosition \}\}/);
  assert.match(services, /sizes=\{isEscalationCoordination \? '\(max-width: 700px\) 90vw, \(max-width: 1100px\) 95vw, 48vw' : '\(max-width: 1100px\) 90vw, 43vw'\}/);
  assert.match(services, /Discuss this role in a free call/);
  assert.match(services, /href="\/contact-us"/);
  assert.match(globals, /\.service-breadcrumb,\.service-hero--escalation\{width:min\(calc\(100% - 4\.8vw\),var\(--content-max\)\);margin-inline:auto\}/);
  assert.match(globals, /\.service-hero--escalation\{grid-template-columns:minmax\(0,\.905fr\) minmax\(0,1fr\);gap:clamp\(2rem,4\.8vw,3\.45rem\);align-items:center/);
  assert.match(globals, /\.service-hero--escalation \.service-hero-copy\{[^}]*align-items:flex-start;[^}]*text-align:left\}/);
  assert.match(globals, /@media\(max-width:1100px\)\{\.service-hero--escalation\{grid-template-columns:minmax\(0,1fr\)/);
  assert.match(globals, /@media\(max-width:700px\)\{\.service-breadcrumb,\.service-hero--escalation\{width:100%/);
  assert.doesNotMatch(services, /service-hero--stacked/);
  assert.doesNotMatch(globals, /\.service-hero--stacked/);
  assert.match(globals, /\.service-detail--escalation \.service-manual\{display:block;width:min\(calc\(100% - 10vw\),1120px\)\}/);
  assert.match(globals, /\.service-detail--escalation \.service-prose\{margin-inline:auto\}/);
});

test('all service workflows use complete route-matched icon tuples while preserving ordered-list semantics', () => {
  const expectedIconMap = {
    'live-chat-support': ['ClipboardCheckIcon', 'UserCheckIcon', 'DocumentTextIcon', 'AlertCircleIcon'],
    'helpdesk-triage': ['DocumentTextIcon', 'ClipboardCheckIcon', 'AlertCircleIcon', 'UserCheckIcon'],
    'knowledge-base-support': ['ClipboardCheckIcon', 'AlertCircleIcon', 'DocumentTextIcon', 'UserCheckIcon'],
    'qa-review-support': ['ClipboardCheckIcon', 'AlertCircleIcon', 'DocumentTextIcon', 'UserCheckIcon'],
    'customer-escalation': ['AlertCircleIcon', 'DocumentTextIcon', 'UserCheckIcon', 'ClipboardCheckIcon'],
    'multichannel-support': ['AlertCircleIcon', 'UserCheckIcon', 'DocumentTextIcon', 'ClipboardCheckIcon'],
  };
  for (const [slug, iconNames] of Object.entries(expectedIconMap)) {
    assert.match(services, new RegExp(`'${slug}': \\[${iconNames.join(', ')}\\]`));
  }
  assert.match(services, /const workflowIcons = serviceWorkflowIcons\[service\.slug as ServiceWorkflowSlug\]/);
  assert.match(services, /if \(!workflowIcons \|\| workflowIcons\.length !== service\.workflow\.length\) throw new Error\(`Workflow icon count mismatch for \$\{service\.slug\}`\)/);
  assert.match(services, /<ol className="service-workflow-list">/);
  assert.match(services, /<li key=\{item\}><span className="service-workflow-icon" aria-hidden="true"><WorkflowIcon \/><\/span><p>\{item\}<\/p><\/li>/);
  assert.doesNotMatch(services, /role="(?:none|presentation)"/);
  assert.doesNotMatch(services, /String\(index \+ 1\)\.padStart/);
  for (const name of ['AlertCircleIcon', 'DocumentTextIcon', 'UserCheckIcon', 'ClipboardCheckIcon']) {
    assert.match(icons, new RegExp(`export function ${name}\\(\\)`));
  }
  assert.equal((icons.match(/focusable="false"/g) || []).length >= 4, true);
  assert.match(globals, /\.service-workflow-list\{list-style:none/);
  assert.match(globals, /\.service-workflow-icon\{[^}]*width:2\.5rem;height:2\.5rem;[^}]*color:var\(--primary\)/);
  assert.match(globals, /\.service-workflow-icon svg\{[^}]*width:1\.5rem;height:1\.5rem;[^}]*fill:none;stroke:currentColor/);
  assert.match(globals, /\.service-workflow-list li\{display:grid;grid-template-columns:2\.5rem 1fr/);
  assert.doesNotMatch(servicesIndex, /service-workflow-icon|serviceWorkflowIcons/);
});

test('wide service and editorial heroes retain useful tracks without nested viewport padding', () => {
  assert.doesNotMatch(servicesIndex, /<figcaption>|Illustrative support operations scene/);
  assert.doesNotMatch(services, /<figcaption>|Illustrative .* workflow scene/);
  assert.doesNotMatch(blogIndex, /<figcaption>|Editorial illustration/);
  assert.doesNotMatch(researchIndex, /<figcaption>|Editorial illustration/);
  assert.match(globals, /\.service-hero,\.editorial-index-hero\{width:min\(calc\(100% - 10vw\),var\(--content-max\)\);padding-inline:0/);
  assert.match(globals, /\.service-hero-copy h1\{[^}]*overflow-wrap:normal;word-break:normal;hyphens:none/);
  assert.match(globals, /@media\(max-width:1100px\)\{\.service-hero,\.editorial-index-hero\{grid-template-columns:1fr/);
});

test('service detail chapters share the hero gutter and stay left aligned at every breakpoint', () => {
  assert.match(globals, /\.service-manual\{width:min\(calc\(100% - 10vw\),var\(--content-max\)\);margin-inline:auto;padding-inline:0;text-align:left\}/);
  assert.match(globals, /\.service-prose\{width:min\(100%,1020px\);margin:0;text-align:left\}/);
  assert.match(globals, /\.service-prose :is\(h2,h3,p,ul,ol,details,\.button\)\{text-align:left\}/);
  assert.match(globals, /@media\(max-width:700px\)\{\.service-manual\{width:100%;padding-inline:5vw\}\}/);
});

test('blog and research category controls filter published cards with history and reset support', () => {
  for (const source of [blogIndex, researchIndex]) {
    assert.match(source, /CategoryFilter/);
    assert.match(source, /data-editorial-card data-category=/);
    assert.match(source, /editorial-empty/);
  }
  assert.match(categoryFilter, /aria-pressed=\{active === option\.name\}/);
  assert.match(categoryFilter, /window\.history\.pushState/);
  assert.match(categoryFilter, /addEventListener\('popstate'/);
  assert.match(categoryFilter, /category === 'All'.*searchParams\.delete\('category'\)/s);
  assert.match(categoryFilter, /card\.hidden = !matchesCategory/);
  assert.match(globals, /\.category-button\{min-height:44px/);
  assert.match(globals, /\.editorial-card-grid \[data-editorial-card\]\[hidden\]\{display:none!important\}/);
});

test('footer exposes grouped navigation and a readable mobile flow', () => {
  assert.match(chrome, /className="site-footer"/);
  assert.match(chrome, /aria-label="Explore"/);
  assert.match(chrome, /aria-label="Support services"/);
  assert.match(chrome, /site\.services\.map/);
  assert.match(chrome, /href="\/contact-us">Discuss a support role/);
  assert.match(globals, /\.footer-main\{[^}]*grid-template-columns:minmax\(260px,1\.15fr\) minmax\(150px,\.55fr\) minmax\(300px,1fr\)/);
  assert.match(globals, /@media\(max-width:700px\).*?\.footer-main\{grid-template-columns:1fr/s);
});

test('buyer journey pages expose distinct decision support and verified conversion guidance', () => {
  for (const requirement of ['Who this works for', 'Common chat workflows', 'Onboarding and escalation', 'Buyer decision support']) assert.match(home, new RegExp(requirement));
  assert.match(home, /chat-support-home-photo|site\.heroImage/);
  for (const requirement of ['What it covers', 'When you need it', 'See scope, workflow, and controls']) assert.match(servicesIndex, new RegExp(requirement));
  assert.match(contact, /When you submit, your request is sent for review/);
  assert.match(contact, /Validation messages stay beside the form/);
  assert.match(contact, /thank you page, where the existing scheduling flow is available/);
  assert.match(contact, /contact-form-card[\s\S]*<ReviewRail/);
  assert.match(read('app/contact-us/contact.css'), /\.contact-intro,\.contact-form-card,\.contact-fold>\.reviews-block\{grid-column:1;grid-row:auto\}/);
});

test('editorial indexes frame published content by practical use without changing filtering', () => {
  assert.match(blogIndex, /Practical takeaway/);
  assert.match(blogIndex, /Move from a support problem to a practical next step/);
  assert.match(researchIndex, /Operational question/);
  assert.match(researchIndex, /They do not present original measured results/);
  assert.match(read('components/ArticleLayout.tsx'), /Operational question and proposed evidence path/);
  assert.match(globals, /aspect-ratio:16\/9;object-fit:cover/);
  assert.match(globals, /max-width:68ch/);
});

test('footer includes core journeys plus grouped company and legal destinations', () => {
  for (const href of ['/services', '/blog', '/research', '/contact-us', '/about', '/privacy', '/terms']) assert.match(chrome, new RegExp(`href="\\${href}"`));
  assert.match(chrome, /aria-label="Company and legal"/);
  assert.match(globals, /footer-main\{grid-template-columns:minmax\(230px,1\.1fr\)/);
});

test('editorial routes use the shared article system with TOC and supporting sidebar', () => {
  assert.match(read('app/blog/[slug]/page.tsx'), /ArticleLayout/);
  assert.match(read('app/research/[slug]/page.tsx'), /ArticleLayout/);
  assert.ok(existsSync(new URL('components/ArticleLayout.tsx', root)));
  assert.match(globals, /\.article-body>section>div\[id\]\{scroll-margin-top:calc\(var\(--header-height\) \+ 2rem\)\}/);
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
  assert.match(leadRoute, /new Set\(keys\)\.size !== keys\.length/);
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
