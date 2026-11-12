# Hire Chat Support optimization review

Prepared for review only. Production deployment remains intentionally blocked until the user authorizes the exact release commit.

## Nine implementation work items

1. **Homepage hero image**
   - Replace the abstract hero with a realistic editorial chat-support scene.
   - Keep the subject relevant, the crop responsive, the alt text descriptive, and the image clearly illustrative rather than staff evidence.
2. **First-fold consultation CTA**
   - Keep `cta-home-hero-bookcall` linked to `/contact-us` and visible below the headline and offer at representative desktop and mobile viewport heights.
   - Preserve the existing tracking ID and route contract.
3. **Homepage rhythm**
   - Reduce excessive hero, chapter, card, and closing-section height without removing the service explanation, workflow boundaries, guidance, or final CTA.
4. **Services index hero and directory**
   - Replace the operating diagram in the hero with a relevant support-operations photograph.
   - Keep all six distinct service destinations and retain role-specific operating diagrams within the directory.
5. **Service-detail system**
   - Replace article-cover heroes with six service-specific editorial photographs.
   - Present audience/problem, inputs, workflow, outputs, boundaries, checks, scenarios, FAQs, related services, and final action in a varied service-page layout.
6. **Contact imagery and form preservation**
   - Replace the unrelated official team photograph with a realistic illustrative consultation scene.
   - Keep the official StealthAgents logo and parent-company explanation while preserving every form field, validation rule, endpoint, redirect, and tracker.
7. **Footer Research link**
   - Keep a clearly labeled, keyboard-accessible `Research` link to `/research` in the shared footer on every route.
8. **Editorial title scale**
   - Scope smaller responsive H1/H2 rules to blog/research indexes and shared article/detail templates while retaining one semantic H1 per page.
9. **Blog and research landing heroes**
   - Add distinct editorial photographs with useful context, responsive crops, descriptive alt text, and priority loading without changing article thumbnails.

## Image provenance

All new files under `public/editorial/` were generated for this project with OpenAI's built-in image generation tool on 2026-11-12, then converted locally to quality-86 JPEG. They are illustrative editorial scenes, not photographs of Hire Chat Support staff, StealthAgents staff, clients, or customers. Prompts prohibited logos, readable screens, customer data, fake chat interfaces, fabricated metrics, and watermarks.

| Asset | Intrinsic size | Intended placement |
| --- | ---: | --- |
| `chat-support-home-hero.jpg` | 1536×1024 | Homepage hero |
| `chat-support-services-hero.jpg` | 1536×1024 | Services index hero |
| `chat-support-contact.jpg` | 1536×1024 | Contact workflow section |
| `chat-support-blog-hero.jpg` | 1672×941 | Blog index hero |
| `chat-support-research-hero.jpg` | 1672×941 | Research index hero |
| `service-live-chat-support.jpg` | 1536×1024 | Live chat detail hero |
| `service-helpdesk-triage.jpg` | 1536×1024 | Helpdesk triage detail hero |
| `service-knowledge-base-support.jpg` | 1536×1024 | Knowledge base detail hero |
| `service-qa-review-support.jpg` | 1536×1024 | Quality review detail hero |
| `service-customer-escalation.jpg` | 1536×1024 | Escalation detail hero |
| `service-multichannel-support.jpg` | 1536×1024 | Multichannel detail hero |

Prominent image slots use Next.js responsive image delivery with explicit `sizes`; the source dimensions are approximately 1.5–2× their expected desktop display width.
