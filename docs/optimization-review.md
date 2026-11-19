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

Except for the licensed homepage photograph documented below, the raster editorial scenes were generated for this project with OpenAI's built-in image generation tool on 2026-11-12, then converted locally to quality-86 JPEG. The workflow diagrams added below are custom-authored vector illustrations using the site's own colors and service concepts. These assets do not depict Hire Chat Support staff, StealthAgents staff, clients, or customers. Prompts prohibited logos, readable screens, customer data, fake chat interfaces, fabricated metrics, and watermarks.

| Asset | Intrinsic size | Intended placement |
| --- | ---: | --- |
| `chat-support-home-hero.jpg` | 1536×1024 | Homepage hero |
| `chat-support-home-photo.jpg` | 1600×900 | Homepage hero; [Pexels photo 7709145](https://www.pexels.com/photo/a-woman-working-in-customer-support-7709145/) by MART PRODUCTION, used under the [Pexels license](https://www.pexels.com/license/), SHA-256 `9f94343f9edcd8f9f113019001c6e9081987890eb7d60233cdf7cac31e15e521` |
| `chat-support-services-hero.jpg` | 1536×1024 | Services index hero |
| `chat-support-contact.jpg` | 1536×1024 | Contact workflow section |
| `chat-support-blog-hero.jpg` | 1672×941 | Blog index hero |
| `chat-support-research-hero.jpg` | 1672×941 | Research index hero |
| `source-conversation-owner.svg` | 1200×1000 | Homepage Context Thread: approved source, conversation context, and next owner |
| `service-live-chat-support.svg` | 1600×1000 | Live chat: conversation, approved answer, and next owner |
| `service-helpdesk-triage.svg` | 1600×1000 | Helpdesk triage: intake, approved routing, and named queue |
| `service-knowledge-base-support.svg` | 1600×1000 | Knowledge base: approved source, draft comparison, and owner review |
| `service-qa-review-support.svg` | 1600×1000 | Quality review: selected transcript, approved rubric, and manager review |
| `service-customer-escalation.svg` | 1600×1000 | Escalation: trigger, context packet, and authorized owner |
| `service-multichannel-support.svg` | 1600×1000 | Multichannel: chat, email, and social joined to a shared record |
| `service-live-chat-support.jpg` through `service-multichannel-support.jpg` | 1536×1024 each | Previous detail artwork retained in the repository; no longer assigned to service detail pages |

Prominent image slots use Next.js responsive image delivery with explicit `sizes`; the source dimensions are approximately 1.5–2× their expected desktop display width.
