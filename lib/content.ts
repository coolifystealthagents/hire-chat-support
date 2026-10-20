import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october-12/blogPosts';
import { october12ResearchPosts } from './october-12/researchPosts';

export const blogPosts: BlogPost[] = [
  ...october12BlogPosts,
  {
    "slug": "customer-support-manager-vs-chat-support-va",
    "title": "Customer support manager vs chat support VA",
    "description": "A practical guide to customer support manager vs chat support va for support leaders and customer experience teams.",
    "category": "Role design",
    "publishedAt": "2026-10-04",
    "readTime": "9 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Customer support manager vs chat support VA starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For support leaders and customer experience teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "The role boundary brief should name the working queue, the approved source, the expected record, the review owner, and the exact triggers that transfer control from the manager and chat support VA. Keep it beside the work rather than in a detached policy file."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Queue ownership becomes unreliable when it is split across inboxes, private notes, and unlinked tools. The team then spends review time rebuilding context instead of resolving the next decision.",
          "The operating aim is a visible queue ownership, not automation for its own sake. Routine preparation should expose the evidence the accountable owner needs while leaving consequential judgment with that owner."
        ]
      },
      {
        "heading": "What live chat support can handle",
        "paragraphs": [
          "Handle routine conversations from approved guidance and clear escalation rules. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The manager and chat support VA may follow approved paths but must not invent policy or conceal uncertainty. Any request outside the documented boundary moves to the named owner with the missing evidence identified."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Begin with the system that controls queue ownership. Specify required fields, valid sources, version markers, and the condition that makes a record incomplete enough to return rather than advance.",
          "The handoff output should be a review-ready queue ownership record: checked sources, current status, unresolved conflict, next owner, and due action. That structure lets a reviewer verify preparation without repeating it."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Separate preparation, communication, approval rights, and closure in the responsibility map. This keeps a capable manager and chat support VA from acquiring authority merely because volume or urgency rises.",
          "For each common case, label the path as proceed under rule, pause for approval rights, or escalate now. Pair every label with a real example and the evidence required to choose it."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review coach and audit on a declared cadence. Sample normal work and exceptions separately, then record missed fields, source-version errors, routing errors, and unclear ownership.",
          "When the review exposes a recurring pattern, revise the role boundary checklist, source note, or escalation example. Coaching should leave the next record easier to prepare and inspect."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Do not expand beyond one queue until its acceptance rule and owner response work consistently. A narrow pilot reveals whether failure comes from access, training, source quality, or role design.",
          "Do not use task count as the quality signal. Inspect whether queue ownership is complete, whether the decision owner is explicit, and whether the retained evidence supports the recorded state."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "A useful role boundary reduces decision latency while preserving human control. The coordinator can recognize complete work, an exception, and a required transfer without guessing.",
          "The accountable owner should be able to inspect staffing scope, source versions, exceptions, and open decisions without requesting a separate status reconstruction."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Start with one queue, a named owner, and records already available in a system of record. Run a small batch against the acceptance checklist and retain every exception.",
          "Use the pilot review to tighten fields, examples, access, and approval rights before adding volume. Expansion follows demonstrated clarity, not an arbitrary task target."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/live-chat-support",
    "internalSibling": "/blog/chat-support-escalation-matrix",
    "source": {
      "label": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "chat-support-escalation-matrix",
    "title": "How to build a chat support escalation matrix",
    "description": "A practical guide to how to build a chat support escalation matrix for support leaders and customer experience teams.",
    "category": "Escalations",
    "publishedAt": "2026-10-05",
    "readTime": "10 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "How to build a chat support escalation matrix starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For support leaders and customer experience teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "The escalation matrix brief should name the working queue, the approved source, the expected record, the review owner, and the exact triggers that transfer control from the triage coordinator and incident owner. Keep it beside the work rather than in a detached policy file."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Severity and impact becomes unreliable when it is split across inboxes, private notes, and unlinked tools. The team then spends review time rebuilding context instead of resolving the next decision.",
          "The operating aim is a visible severity and impact, not automation for its own sake. Routine preparation should expose the evidence the accountable owner needs while leaving consequential judgment with that owner."
        ]
      },
      {
        "heading": "What helpdesk triage can handle",
        "paragraphs": [
          "Sort incoming conversations by intent, urgency, and owner. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The triage coordinator and incident owner may follow approved paths but must not invent policy or conceal uncertainty. Any request outside the documented boundary moves to the named owner with the missing evidence identified."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Begin with the system that controls severity and impact. Specify required fields, valid sources, version markers, and the condition that makes a record incomplete enough to return rather than advance.",
          "The handoff output should be a review-ready severity and impact record: checked sources, current status, unresolved conflict, next owner, and due action. That structure lets a reviewer verify preparation without repeating it."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Separate preparation, communication, response authority, and closure in the responsibility map. This keeps a capable triage coordinator and incident owner from acquiring authority merely because volume or urgency rises.",
          "For each common case, label the path as proceed under rule, pause for response authority, or escalate now. Pair every label with a real example and the evidence required to choose it."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review rehearse edge cases on a declared cadence. Sample normal work and exceptions separately, then record missed fields, source-version errors, routing errors, and unclear ownership.",
          "When the review exposes a recurring pattern, revise the escalation matrix checklist, source note, or escalation example. Coaching should leave the next record easier to prepare and inspect."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Do not expand beyond one escalation class until its acceptance rule and owner response work consistently. A narrow pilot reveals whether failure comes from access, training, source quality, or role design.",
          "Do not use task count as the quality signal. Inspect whether severity and impact is complete, whether the decision owner is explicit, and whether the retained evidence supports the recorded state."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "A useful escalation matrix reduces acknowledgement time while preserving human control. The coordinator can recognize complete work, an exception, and a required transfer without guessing.",
          "The accountable owner should be able to inspect routing coverage, source versions, exceptions, and open decisions without requesting a separate status reconstruction."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Start with one escalation class, a named owner, and records already available in a system of record. Run a small batch against the acceptance checklist and retain every exception.",
          "Use the pilot review to tighten fields, examples, access, and response authority before adding volume. Expansion follows demonstrated clarity, not an arbitrary task target."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/helpdesk-triage",
    "internalSibling": "/blog/chat-knowledge-base-review",
    "source": {
      "label": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "chat-knowledge-base-review",
    "title": "A useful chat knowledge base review rhythm",
    "description": "A practical guide to a useful chat knowledge base review rhythm for support leaders and customer experience teams.",
    "category": "Knowledge systems",
    "publishedAt": "2026-10-06",
    "readTime": "11 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "A useful chat knowledge base review rhythm starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For support leaders and customer experience teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "The knowledge review brief should name the working queue, the approved source, the expected record, the review owner, and the exact triggers that transfer control from the knowledge assistant and content owner. Keep it beside the work rather than in a detached policy file."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Answer version becomes unreliable when it is split across inboxes, private notes, and unlinked tools. The team then spends review time rebuilding context instead of resolving the next decision.",
          "The operating aim is a visible answer version, not automation for its own sake. Routine preparation should expose the evidence the accountable owner needs while leaving consequential judgment with that owner."
        ]
      },
      {
        "heading": "What knowledge base support can handle",
        "paragraphs": [
          "Keep support guidance organized, current, and easy to use. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The knowledge assistant and content owner may follow approved paths but must not invent policy or conceal uncertainty. Any request outside the documented boundary moves to the named owner with the missing evidence identified."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Begin with the system that controls answer version. Specify required fields, valid sources, version markers, and the condition that makes a record incomplete enough to return rather than advance.",
          "The handoff output should be a review-ready answer version record: checked sources, current status, unresolved conflict, next owner, and due action. That structure lets a reviewer verify preparation without repeating it."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Separate preparation, communication, publication authority, and closure in the responsibility map. This keeps a capable knowledge assistant and content owner from acquiring authority merely because volume or urgency rises.",
          "For each common case, label the path as proceed under rule, pause for publication authority, or escalate now. Pair every label with a real example and the evidence required to choose it."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review sample used answers on a declared cadence. Sample normal work and exceptions separately, then record missed fields, source-version errors, routing errors, and unclear ownership.",
          "When the review exposes a recurring pattern, revise the knowledge review checklist, source note, or escalation example. Coaching should leave the next record easier to prepare and inspect."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Do not expand beyond one answer family until its acceptance rule and owner response work consistently. A narrow pilot reveals whether failure comes from access, training, source quality, or role design.",
          "Do not use task count as the quality signal. Inspect whether answer version is complete, whether the decision owner is explicit, and whether the retained evidence supports the recorded state."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "A useful knowledge review reduces stale-answer exposure while preserving human control. The coordinator can recognize complete work, an exception, and a required transfer without guessing.",
          "The accountable owner should be able to inspect article inventory, source versions, exceptions, and open decisions without requesting a separate status reconstruction."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Start with one answer family, a named owner, and records already available in a system of record. Run a small batch against the acceptance checklist and retain every exception.",
          "Use the pilot review to tighten fields, examples, access, and publication authority before adding volume. Expansion follows demonstrated clarity, not an arbitrary task target."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/knowledge-base-support",
    "internalSibling": "/blog/chat-qa-sampling-plan",
    "source": {
      "label": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "chat-qa-sampling-plan",
    "title": "Create a focused chat QA sampling plan",
    "description": "A practical guide to create a focused chat qa sampling plan for support leaders and customer experience teams.",
    "category": "Chat operations",
    "publishedAt": "2026-10-07",
    "readTime": "12 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Create a focused chat QA sampling plan starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For support leaders and customer experience teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "The QA sampling plan brief should name the working queue, the approved source, the expected record, the review owner, and the exact triggers that transfer control from the QA assistant and support manager. Keep it beside the work rather than in a detached policy file."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Conversation sample becomes unreliable when it is split across inboxes, private notes, and unlinked tools. The team then spends review time rebuilding context instead of resolving the next decision.",
          "The operating aim is a visible conversation sample, not automation for its own sake. Routine preparation should expose the evidence the accountable owner needs while leaving consequential judgment with that owner."
        ]
      },
      {
        "heading": "What quality review support can handle",
        "paragraphs": [
          "Prepare focused conversation samples for manager review. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The QA assistant and support manager may follow approved paths but must not invent policy or conceal uncertainty. Any request outside the documented boundary moves to the named owner with the missing evidence identified."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Begin with the system that controls conversation sample. Specify required fields, valid sources, version markers, and the condition that makes a record incomplete enough to return rather than advance.",
          "The handoff output should be a review-ready conversation sample record: checked sources, current status, unresolved conflict, next owner, and due action. That structure lets a reviewer verify preparation without repeating it."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Separate preparation, communication, scoring authority, and closure in the responsibility map. This keeps a capable QA assistant and support manager from acquiring authority merely because volume or urgency rises.",
          "For each common case, label the path as proceed under rule, pause for scoring authority, or escalate now. Pair every label with a real example and the evidence required to choose it."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review calibrate reviewers on a declared cadence. Sample normal work and exceptions separately, then record missed fields, source-version errors, routing errors, and unclear ownership.",
          "When the review exposes a recurring pattern, revise the QA sampling plan checklist, source note, or escalation example. Coaching should leave the next record easier to prepare and inspect."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Do not expand beyond one queue and week until its acceptance rule and owner response work consistently. A narrow pilot reveals whether failure comes from access, training, source quality, or role design.",
          "Do not use task count as the quality signal. Inspect whether conversation sample is complete, whether the decision owner is explicit, and whether the retained evidence supports the recorded state."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "A useful QA sampling plan reduces error-pattern coverage while preserving human control. The coordinator can recognize complete work, an exception, and a required transfer without guessing.",
          "The accountable owner should be able to inspect sampling frame, source versions, exceptions, and open decisions without requesting a separate status reconstruction."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Start with one queue and week, a named owner, and records already available in a system of record. Run a small batch against the acceptance checklist and retain every exception.",
          "Use the pilot review to tighten fields, examples, access, and scoring authority before adding volume. Expansion follows demonstrated clarity, not an arbitrary task target."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/qa-review-support",
    "internalSibling": "/blog/multichannel-chat-handoff",
    "source": {
      "label": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "multichannel-chat-handoff",
    "title": "How to design a multichannel chat handoff",
    "description": "A practical guide to how to design a multichannel chat handoff for support leaders and customer experience teams.",
    "category": "Chat operations",
    "publishedAt": "2026-10-08",
    "readTime": "13 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "How to design a multichannel chat handoff starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For support leaders and customer experience teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "The channel handoff brief should name the working queue, the approved source, the expected record, the review owner, and the exact triggers that transfer control from the channel coordinator and case owner. Keep it beside the work rather than in a detached policy file."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Cross-channel case state becomes unreliable when it is split across inboxes, private notes, and unlinked tools. The team then spends review time rebuilding context instead of resolving the next decision.",
          "The operating aim is a visible cross-channel case state, not automation for its own sake. Routine preparation should expose the evidence the accountable owner needs while leaving consequential judgment with that owner."
        ]
      },
      {
        "heading": "What escalation coordination can handle",
        "paragraphs": [
          "Keep high-context issues visible until the accountable owner resolves them. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The channel coordinator and case owner may follow approved paths but must not invent policy or conceal uncertainty. Any request outside the documented boundary moves to the named owner with the missing evidence identified."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Begin with the system that controls cross-channel case state. Specify required fields, valid sources, version markers, and the condition that makes a record incomplete enough to return rather than advance.",
          "The handoff output should be a review-ready cross-channel case state record: checked sources, current status, unresolved conflict, next owner, and due action. That structure lets a reviewer verify preparation without repeating it."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Separate preparation, communication, closure authority, and closure in the responsibility map. This keeps a capable channel coordinator and case owner from acquiring authority merely because volume or urgency rises.",
          "For each common case, label the path as proceed under rule, pause for closure authority, or escalate now. Pair every label with a real example and the evidence required to choose it."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review replay transfers on a declared cadence. Sample normal work and exceptions separately, then record missed fields, source-version errors, routing errors, and unclear ownership.",
          "When the review exposes a recurring pattern, revise the channel handoff checklist, source note, or escalation example. Coaching should leave the next record easier to prepare and inspect."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Do not expand beyond one channel pair until its acceptance rule and owner response work consistently. A narrow pilot reveals whether failure comes from access, training, source quality, or role design.",
          "Do not use task count as the quality signal. Inspect whether cross-channel case state is complete, whether the decision owner is explicit, and whether the retained evidence supports the recorded state."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "A useful channel handoff reduces context-loss points while preserving human control. The coordinator can recognize complete work, an exception, and a required transfer without guessing.",
          "The accountable owner should be able to inspect channel map, source versions, exceptions, and open decisions without requesting a separate status reconstruction."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Start with one channel pair, a named owner, and records already available in a system of record. Run a small batch against the acceptance checklist and retain every exception.",
          "Use the pilot review to tighten fields, examples, access, and closure authority before adding volume. Expansion follows demonstrated clarity, not an arbitrary task target."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/customer-escalation",
    "internalSibling": "/blog/customer-support-manager-vs-chat-support-va",
    "source": {
      "label": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/privacy-framework"
    }
  }
];
export const researchPosts: ResearchPost[] = [
  ...october12ResearchPosts,
  {
    "slug": "live-chat-support-workflow-boundary-review-1",
    "title": "Live chat support: workflow boundary review",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve live chat support workflows.",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "helpdesk-triage-source-quality-audit-2",
    "title": "Helpdesk triage: source quality audit",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve helpdesk triage workflows.",
    "cluster": "Knowledge systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "knowledge-base-support-exception-pattern-study-3",
    "title": "Knowledge base support: exception pattern study",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve knowledge base support workflows.",
    "cluster": "Escalations",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "qa-review-support-handoff-reliability-brief-4",
    "title": "Quality review support: handoff reliability brief",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve quality review support workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "customer-escalation-review-consistency-report-5",
    "title": "Escalation coordination: review consistency report",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve escalation coordination workflows.",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "multichannel-support-workflow-boundary-review-6",
    "title": "Multichannel support operations: workflow boundary review",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve multichannel support operations workflows.",
    "cluster": "Knowledge systems",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "live-chat-support-source-quality-audit-7",
    "title": "Live chat support: source quality audit",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve live chat support workflows.",
    "cluster": "Escalations",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "helpdesk-triage-exception-pattern-study-8",
    "title": "Helpdesk triage: exception pattern study",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve helpdesk triage workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "knowledge-base-support-handoff-reliability-brief-9",
    "title": "Knowledge base support: handoff reliability brief",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve knowledge base support workflows.",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "qa-review-support-review-consistency-report-10",
    "title": "Quality review support: review consistency report",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve quality review support workflows.",
    "cluster": "Knowledge systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "customer-escalation-workflow-boundary-review-11",
    "title": "Escalation coordination: workflow boundary review",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve escalation coordination workflows.",
    "cluster": "Escalations",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "multichannel-support-source-quality-audit-12",
    "title": "Multichannel support operations: source quality audit",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve multichannel support operations workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "live-chat-support-exception-pattern-study-13",
    "title": "Live chat support: exception pattern study",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve live chat support workflows.",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "helpdesk-triage-handoff-reliability-brief-14",
    "title": "Helpdesk triage: handoff reliability brief",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve helpdesk triage workflows.",
    "cluster": "Knowledge systems",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "knowledge-base-support-review-consistency-report-15",
    "title": "Knowledge base support: review consistency report",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve knowledge base support workflows.",
    "cluster": "Escalations",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "qa-review-support-workflow-boundary-review-16",
    "title": "Quality review support: workflow boundary review",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve quality review support workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "customer-escalation-source-quality-audit-17",
    "title": "Escalation coordination: source quality audit",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve escalation coordination workflows.",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "multichannel-support-exception-pattern-study-18",
    "title": "Multichannel support operations: exception pattern study",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve multichannel support operations workflows.",
    "cluster": "Knowledge systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "live-chat-support-handoff-reliability-brief-19",
    "title": "Live chat support: handoff reliability brief",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve live chat support workflows.",
    "cluster": "Escalations",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "helpdesk-triage-review-consistency-report-20",
    "title": "Helpdesk triage: review consistency report",
    "summary": "A source-led brief on how support leaders and customer experience teams can define, inspect, and improve helpdesk triage workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  }
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' }
];

export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
