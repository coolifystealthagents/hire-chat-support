import type { ResearchPost } from '../types';
export const october12ResearchPosts: ResearchPost[] = [
  {
    "slug": "chat-escalation-reproducibility-study",
    "title": "Reproducibility of High-Consequence Chat Escalations",
    "summary": "A source-bounded Hire Chat Support study of high-consequence chat escalation, adverse controls, and accountable decisions.",
    "cluster": "Escalation quality",
    "publishedAt": "2026-10-12",
    "image": "/october-12/chat-escalation-reproducibility-study.webp",
    "finding": "This proposed protocol tests whether independent reviewers can reconstruct the same escalation path from retained evidence. It reports no observed agreement or service result.",
    "methodology": [
      "Select completed high-consequence escalations from declared dates and channels. Define qualifying triggers before sampling, such as account security, safety, legal notice, financial loss, or widespread service impact.",
      "Create a sealed packet with original customer wording, identity state, timestamps, consulted source versions, actions, transfers, customer updates, owner acknowledgement, and endpoint. Exclude commentary unavailable during handling.",
      "Give each packet independently to two reviewers. Ask them to identify the trigger, severity, missing evidence, permitted immediate action, required owner, and next customer commitment without consulting one another.",
      "Compare outputs field by field. Code differences as missing evidence, ambiguous matrix language, chronology conflict, authority confusion, or reviewer error. Preserve unresolved disagreement rather than forcing consensus.",
      "Seed test packets with a stale runbook, unavailable owner, conflicting state, unverified identity, and failed acknowledgement. Record which prescribed control catches each condition and which unsafe action remains possible.",
      "Report cohort sizes, exclusions, complete reconstructions, disagreement categories, and missing packets. Owners approve any matrix repair before the blinded exercise is repeated on a new cohort."
    ],
    "findings": [
      "A reconstructable escalation links its trigger, source version, authority decision, owner acceptance, customer update, and endpoint.",
      "Reviewer disagreement should be classified by cause.",
      "An unavailable owner requires a tested fallback, not borrowed authority.",
      "Seeded cases test design without inventing live failures.",
      "Missing packets and exclusions belong beside reviewed counts.",
      "Any later improvement claim requires a separate completed analysis."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Digital Identity Guidelines",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://pages.nist.gov/800-63-4/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Incident Response Plan Basics",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/resources-tools/resources/incident-response-plan-basics",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Data Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Effective Communication",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.ada.gov/resources/effective-communication/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Federal Plain Language Guidelines",
        "publisher": "PlainLanguage.gov",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Consumer Complaint Database",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/data-research/consumer-complaints/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Limited English Proficiency",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.lep.gov/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-12"
      }
    ]
  },
  {
    "slug": "knowledge-answer-version-drift-study",
    "title": "Version Drift in Customer Support Knowledge Answers",
    "summary": "A source-bounded Hire Chat Support study of knowledge answer version drift, adverse controls, and accountable decisions.",
    "cluster": "Knowledge governance",
    "publishedAt": "2026-10-12",
    "image": "/october-12/knowledge-answer-version-drift-study.webp",
    "finding": "This proposed protocol traces whether a customer answer can be tied to the policy and publication version that controlled when it was used. It reports no measured drift rate.",
    "methodology": [
      "Build an answer registry for one product area with governing source, content owner, approval event, publication identifier, effective time, retirement state, and channels.",
      "Choose a cohort by answer family and usage period. Include active, revised, withdrawn, duplicated, and corrected articles, and state how drafts or inaccessible records are handled.",
      "Join each sampled customer response timestamp to the answer version available then. Retain the exact answer and source reference instead of substituting the newest wording.",
      "Test lineage both ways: each answer points to a source, and each material source change identifies affected answers. Log broken links, absent approvers, overlapping dates, and uncontrolled copies.",
      "Compare eligibility, price, identity steps, deadlines, limitations, triggers, and commitments rather than relying on version labels. Track correction delivery when outdated wording reached a customer.",
      "Report confirmed outdated use, uncertain lineage, and unclear current guidance separately, with denominators. The policy owner approves repairs and the lineage check repeats after publication."
    ],
    "findings": [
      "Effective times and channel copies are needed to establish which answer governed.",
      "Copied text outside the registry creates another drift surface.",
      "The policy owner decides the controlling statement.",
      "Corrections need delivery and affected-case records.",
      "Uncertain lineage is not confirmed drift.",
      "This protocol tests accountability rather than current accuracy."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Digital Identity Guidelines",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://pages.nist.gov/800-63-4/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Incident Response Plan Basics",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/resources-tools/resources/incident-response-plan-basics",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Data Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Effective Communication",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.ada.gov/resources/effective-communication/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Federal Plain Language Guidelines",
        "publisher": "PlainLanguage.gov",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Consumer Complaint Database",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/data-research/consumer-complaints/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Limited English Proficiency",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.lep.gov/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-12"
      }
    ]
  },
  {
    "slug": "chat-identity-verification-friction-study",
    "title": "Identity Verification Friction in Live Chat Handoffs",
    "summary": "A source-bounded Hire Chat Support study of chat identity verification, adverse controls, and accountable decisions.",
    "cluster": "Identity operations",
    "publishedAt": "2026-10-12",
    "image": "/october-12/chat-identity-verification-friction-study.webp",
    "finding": "This proposed protocol maps where legitimate customers cannot complete an approved verification path while preserving account controls. It reports no friction rate or accessibility outcome.",
    "methodology": [
      "Have identity and security owners define approved paths, prohibited disclosures, retry limits, lock conditions, and fallback authorities before case collection.",
      "Sample attempts by path and outcome, including completion, abandonment, timeout, lock, fallback request, and owner exception. Preserve each path denominator and declare attack-traffic exclusions.",
      "Build an event sequence from prompts, customer responses, system outcomes, elapsed intervals, channel changes, and accessibility requests. Do not copy secret answers or identity documents into the extract.",
      "Code friction as instruction comprehension, unavailable factor, delivery failure, inaccessible interaction, data mismatch, rate limit, agent routing, or unresolved system state.",
      "Test alternatives with accessibility and security owners. The question is whether an alternative reaches the approved assurance boundary, not whether controls can be relaxed.",
      "Report counts by path with missing events and privacy redactions. Owners choose wording, interface, channel, or fallback changes; repeat the protocol and watch lockouts as a guardrail."
    ],
    "findings": [
      "Different friction locations require different owners.",
      "Fallbacks require an approved assurance boundary.",
      "The extract should minimize identity data.",
      "Accessibility barriers remain a distinct analysis group.",
      "Convenience cannot justify premature disclosure.",
      "Conclusions require denominators and guardrail outcomes."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Digital Identity Guidelines",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://pages.nist.gov/800-63-4/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Incident Response Plan Basics",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/resources-tools/resources/incident-response-plan-basics",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Data Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Effective Communication",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.ada.gov/resources/effective-communication/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Federal Plain Language Guidelines",
        "publisher": "PlainLanguage.gov",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Consumer Complaint Database",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/data-research/consumer-complaints/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Limited English Proficiency",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.lep.gov/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-12"
      }
    ]
  },
  {
    "slug": "outage-message-freshness-study",
    "title": "Freshness of Customer Chat Messages During Service Outages",
    "summary": "A source-bounded Hire Chat Support study of outage message freshness, adverse controls, and accountable decisions.",
    "cluster": "Incident communication",
    "publishedAt": "2026-10-12",
    "image": "/october-12/outage-message-freshness-study.webp",
    "finding": "This proposed protocol evaluates outage-message lifecycle controls against incident updates and promised refresh times. It does not claim that current messages are timely.",
    "methodology": [
      "Define a message lifecycle from incident-owner approval through publication, replacement, and retirement. Capture incident ID, scope, wording, approver, channels, publish time, next update, and successor version.",
      "Select declared incidents across severity and duration, including false starts, scope changes, partial recovery, and corrections rather than only clean outages.",
      "Build an authoritative incident timeline. Place every customer-message version on it and compare stated scope, workaround, certainty, and next update with what was approved then.",
      "Measure freshness against each message own update commitment and the communication rule. Mark overdue active messages, conflicting channel copies, reachable retired text, and unapproved updates.",
      "Check propagation across every included channel. A successful publish in one tool does not establish that chat macros, status pages, email drafts, or agent notices changed.",
      "Report messages superseded on time, overdue commitments, conflicting versions, and unverified delivery with denominators. Test repairs in a tabletop scope expansion before adoption."
    ],
    "findings": [
      "Freshness depends on approved state and the stated update commitment.",
      "Each channel needs delivery evidence.",
      "Reachable retired text can conflict with a new message.",
      "Restoration estimates stay with incident authority.",
      "A tabletop can expose propagation gaps.",
      "Customer outcomes require evidence beyond lifecycle controls."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Digital Identity Guidelines",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://pages.nist.gov/800-63-4/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Incident Response Plan Basics",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/resources-tools/resources/incident-response-plan-basics",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Data Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Effective Communication",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.ada.gov/resources/effective-communication/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Federal Plain Language Guidelines",
        "publisher": "PlainLanguage.gov",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Consumer Complaint Database",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/data-research/consumer-complaints/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Limited English Proficiency",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.lep.gov/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-12"
      }
    ]
  },
  {
    "slug": "refund-chat-evidence-completeness-study",
    "title": "Evidence Completeness in Refund-Related Chat Cases",
    "summary": "A source-bounded Hire Chat Support study of refund chat evidence, adverse controls, and accountable decisions.",
    "cluster": "Financial support",
    "publishedAt": "2026-10-12",
    "image": "/october-12/refund-chat-evidence-completeness-study.webp",
    "finding": "This proposed protocol tests whether refund cases preserve evidence for an authorized decision and later reconciliation. It reports no approval rate or financial outcome.",
    "methodology": [
      "Define required evidence with finance and policy owners: purchase ID, request, identity state, policy version, eligibility facts, exception request, approver, processor reference, notice, and reconciliation state.",
      "Select chat refund requests including approved, denied, pending, partial, duplicate, reversed, and exception cases. Declare exclusions for tests, fraud investigations, and unavailable records.",
      "Check evidence available when the decision was made, not fields completed later. Record missing, conflicting, inaccessible, and not-applicable items separately.",
      "Trace authority from request to decision. Chat staff may collect permitted facts and relay approved status, but only designated owners approve exceptions or characterize settlement.",
      "Join the decision to the processor event using permitted references. Compare amount, currency, destination, event time, failure, reversal, and duplicate protection without copying payment credentials.",
      "Compare the customer notice with the decision and processor state, then reconcile pending and reversed items. Report field completeness and unresolved joins with denominators."
    ],
    "findings": [
      "Decision-time evidence prevents later repair from masking an original gap.",
      "Approval and settlement are separate records.",
      "Preparation does not grant refund authority.",
      "A notice should not outrun authorization or processor state.",
      "Pending and reversed events need explicit states.",
      "Outcome claims are outside this protocol unless separately measured."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Digital Identity Guidelines",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://pages.nist.gov/800-63-4/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Incident Response Plan Basics",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/resources-tools/resources/incident-response-plan-basics",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Data Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Effective Communication",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.ada.gov/resources/effective-communication/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Federal Plain Language Guidelines",
        "publisher": "PlainLanguage.gov",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Consumer Complaint Database",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/data-research/consumer-complaints/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Limited English Proficiency",
        "publisher": "U.S. Department of Justice",
        "url": "https://www.lep.gov/",
        "checkedAt": "2026-10-12"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-12"
      }
    ]
  }
];
