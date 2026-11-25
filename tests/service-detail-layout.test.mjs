import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const css = read('app/globals.css');
const servicePage = read('app/services/[slug]/page.tsx');

const normalizeSelector = (value) => value
  .replace(/\s+/g, ' ')
  .replace(/\s*,\s*/g, ',')
  .replace(/\s*([>+~])\s*/g, '$1')
  .trim();
const normalizeDeclarations = (value) => value.replace(/\s+/g, '');
const rulesIn = (source) => [...source.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((match) => ({
  selector: normalizeSelector(match[1]),
  declarations: normalizeDeclarations(match[2]),
}));
const hasRule = (source, selector, declarations) => rulesIn(source).some((rule) => (
  rule.selector === normalizeSelector(selector)
  && rule.declarations.includes(normalizeDeclarations(declarations))
));
const atRuleBody = (source, atRule) => {
  const start = source.lastIndexOf(`${atRule}{`);
  assert.notEqual(start, -1, `${atRule} must exist`);
  const bodyStart = start + atRule.length + 1;
  let depth = 1;
  for (let index = bodyStart; index < source.length; index += 1) {
    if (source[index] === '{') depth += 1;
    if (source[index] === '}') depth -= 1;
    if (depth === 0) return source.slice(bodyStart, index);
  }
  assert.fail(`${atRule} must have a closing brace`);
};

test('all service detail routes share centered constrained blocks with readable internal alignment', () => {
  assert.match(servicePage, /<section className="service-related"><h2>Related support roles<\/h2>/);
  assert.match(css, /--service-content-max:\s*1120px/);
  assert.ok(
    hasRule(css, '.service-hero,.service-manual', 'width:min(calc(100% - 10vw),var(--service-content-max));margin-inline:auto;padding-inline:0'),
    'hero and manual must share one centered content edge',
  );
  assert.ok(
    hasRule(css, '.service-prose', 'width:100%;margin-inline:auto;text-align:left'),
    'service prose must fill and center inside the shared content block',
  );
  assert.ok(
    hasRule(css, '.service-section-intro', 'max-width:760px;margin-inline:auto;text-align:center'),
    'workflow introduction must be a centered standalone block',
  );
  assert.ok(
    hasRule(css, '.service-prose .service-section-intro>.eyebrow,.service-prose .service-section-intro>h2', 'text-align:center'),
    'workflow label and heading must be explicitly centered over the left-aligned description',
  );
  assert.ok(
    hasRule(css, '.service-section-intro>p:not(.eyebrow)', 'max-width:65ch;margin-inline:auto;text-align:left'),
    'long workflow copy must remain left aligned',
  );
  assert.ok(
    hasRule(css, '.service-prose .service-scenarios>.eyebrow,.service-prose .service-scenarios>h2,.service-prose .service-faq>.eyebrow,.service-prose .service-faq>h2,.service-prose .service-related>h2', 'text-align:center'),
    'standalone section headings must be centered',
  );
  assert.ok(
    hasRule(css, '.service-prose :is(p,ul,ol,details)', 'text-align:left'),
    'paragraphs and lists must retain readable left alignment',
  );
  assert.ok(
    hasRule(css, '.service-final', 'text-align:center') && hasRule(css, '.service-prose .service-final :is(h2,p)', 'text-align:center'),
    'the final standalone CTA block must be centered',
  );
  const mobileCss = atRuleBody(css, '@media(max-width:700px)');
  assert.ok(
    hasRule(mobileCss, '.service-hero,.service-manual', 'width:min(calc(100% - 10vw),var(--service-content-max));padding-inline:0')
      && hasRule(mobileCss, '.service-hero', 'align-items:stretch'),
    'mobile hero and manual must remain centered with balanced outer gutters',
  );
});
