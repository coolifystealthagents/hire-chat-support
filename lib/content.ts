import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october-12/blogPosts';
import { october12ResearchPosts } from './october-12/researchPosts';
import { october22BlogPosts } from './october22-blog';
import { october22ResearchPosts } from './october22-research';
import { october27BlogPosts } from './october27-blog';
import { october27ResearchPosts } from './october27-research';
import { october28BlogPosts, october28ResearchPosts } from './october28-batch';

export const blogPosts: BlogPost[] = [
  ...october28BlogPosts,
  ...october27BlogPosts,
  ...october22BlogPosts,
  ...october12BlogPosts,
  {
    "slug": "customer-support-manager-vs-chat-support-va",
    "title": "Customer support manager vs chat support VA",
    "description": "A practical comparison of management accountability and delegated chat support work.",
    "category": "Role design",
    "publishedAt": "2026-10-04",
    "readTime": "9 min read",
    "sections": [
      {
        "heading": "Two roles with different obligations",
        "paragraphs": [
          "A customer support manager owns service policy, staffing choices, coaching, exception decisions, and performance interpretation. A chat support VA works inside that operating design by handling approved conversations, updating records, and preparing escalations. Treating the titles as interchangeable creates hidden authority and weakens review.",
          "The useful comparison is not senior versus junior. It is decision owner versus workflow operator. Write down which person may change an answer, promise an exception, approve a credit, or close a sensitive complaint before assigning queue access."
        ]
      },
      {
        "heading": "Place work on the right side of the boundary",
        "paragraphs": [
          "A chat support VA can classify intent, locate an approved article, draft or send responses allowed by that article, capture customer context, and route the case. The manager should retain policy interpretation, staffing judgment, complaint ownership, discretionary remedies, and any response where the approved source is silent.",
          "Use three labels in the queue guide: proceed, request review, and transfer now. Each label needs an example, the evidence required, and the person expected to respond."
        ]
      },
      {
        "heading": "Design the manager handoff",
        "paragraphs": [
          "A useful handoff states what the customer asked, what identity checks were completed, which answer version was consulted, what was already communicated, and what decision remains. A transcript link without this summary forces the manager to reconstruct routine context under pressure.",
          "Set an acknowledgement target for the manager and a customer update rule for the VA. If ownership changes, the case record should show the new owner and next promised update rather than relying on private chat."
        ]
      },
      {
        "heading": "Coach the role without transferring authority",
        "paragraphs": [
          "Review a mix of ordinary conversations, escalations, and reopened cases. Coach source selection, concise writing, record quality, and trigger recognition separately so a strong writing score cannot hide a missed escalation.",
          "When the VA repeatedly encounters an undocumented case, the manager should repair the guide or add an example. The answer is not to let the VA infer policy from whichever resolution happened last time."
        ]
      },
      {
        "heading": "Choose the staffing pattern",
        "paragraphs": [
          "Use a VA when the queue contains stable, repeatable work and an accountable manager is available for exceptions. Add or strengthen management capacity when policies change frequently, complaints lack owners, or supervisors cannot respond to transfers.",
          "Begin with one queue and one shift. Expansion should follow evidence that response paths, manager coverage, and records remain clear during both routine demand and exceptions."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a chat support VA supervise the queue?",
        "a": "A VA can monitor volume and prepare status information, but staffing decisions, policy changes, and consequential exceptions need the designated manager."
      },
      {
        "q": "Who owns a difficult customer complaint?",
        "a": "The named support manager or specialist owner should accept it. The VA can preserve context and coordinate the transfer."
      },
      {
        "q": "What should the first week measure?",
        "a": "Check source use, record completeness, transfer accuracy, and owner acknowledgement before using speed or volume as the main signal."
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
    "description": "A field guide for turning risk signals into clear chat routing decisions.",
    "category": "Escalations",
    "publishedAt": "2026-10-05",
    "readTime": "10 min read",
    "sections": [
      {
        "heading": "Start with triggers, not department names",
        "paragraphs": [
          "An escalation matrix should help an agent recognize a condition while the conversation is open. Begin with observable triggers such as account takeover signals, threats of harm, payment disputes, legal notices, widespread outages, or a request for an exception. A list of departments alone does not tell the agent when to stop.",
          "For every trigger, identify the evidence to retain and the actions that are prohibited before transfer. This prevents a rushed acknowledgement from becoming an unauthorized promise."
        ]
      },
      {
        "heading": "Separate urgency, impact, and authority",
        "paragraphs": [
          "Urgency describes how quickly an owner must respond. Impact describes who or what may be affected. Authority identifies who may decide. Keep these fields separate because a highly emotional conversation may need quick acknowledgement without granting the agent power to issue a remedy.",
          "Use a small severity scale with written examples. Record the reason for the selected level so reviewers can distinguish a sound judgment from a convenient label."
        ]
      },
      {
        "heading": "Build each route as a complete row",
        "paragraphs": [
          "A usable row includes the trigger, initial owner, backup owner, required context, acknowledgement target, customer update language, and closure evidence. Add an unavailable-owner path instead of assuming the primary person always responds.",
          "Link the row to the current runbook or policy version. If two sources conflict, the agent should pause the affected action and send the conflict to the content owner."
        ]
      },
      {
        "heading": "Rehearse cases that strain the matrix",
        "paragraphs": [
          "Tabletop exercises should include combined triggers, missing identity, an unavailable specialist, a customer who changes channels, and an incident that becomes broader after the first reply. Record where the route fails or the wording invites guesswork.",
          "A rehearsal tests the path, not the employee. Repair unclear thresholds, dead contacts, and missing fallback language before increasing queue coverage."
        ]
      },
      {
        "heading": "Maintain the matrix as an operating control",
        "paragraphs": [
          "Assign one owner to review routing changes after policy updates, system changes, incidents, and staffing changes. Retire obsolete contact paths rather than leaving agents to choose between versions.",
          "Audit transferred cases for correct trigger, sufficient context, timely acknowledgement, and verified ownership. Report uncaught conditions separately from slow but correct transfers because the remedies differ."
        ]
      }
    ],
    "faq": [
      {
        "q": "How many severity levels are useful?",
        "a": "Use the fewest levels that produce different actions, owners, or response targets. Each level needs concrete examples."
      },
      {
        "q": "Should agents decide the final remedy?",
        "a": "Only when an approved rule explicitly grants that authority. Otherwise the matrix should route the decision to its owner."
      },
      {
        "q": "What if nobody acknowledges an escalation?",
        "a": "The row needs a timed backup path and a rule for keeping the customer informed while ownership is unresolved."
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
    "description": "A practical maintenance cycle for customer support answers and their source records.",
    "category": "Knowledge systems",
    "publishedAt": "2026-10-06",
    "readTime": "11 min read",
    "sections": [
      {
        "heading": "Inventory answers by risk and use",
        "paragraphs": [
          "Build an inventory that connects each customer answer to its owner, governing source, approval date, review date, and channels. Add usage signals so a frequently used billing answer receives different attention from a rarely opened navigation tip.",
          "Risk rises when an article affects money, privacy, access, safety, eligibility, or binding commitments. Review frequency should follow that risk and change history rather than one calendar interval for every page."
        ]
      },
      {
        "heading": "Detect drift before rewriting prose",
        "paragraphs": [
          "Compare the published answer with the current policy, product state, interface, and escalation path. Flag broken links, screenshots that no longer match, terms that changed meaning, and steps that agents routinely bypass.",
          "A low feedback count is not proof that an answer is correct. Search conversation notes, escalations, repeated clarifications, and corrections for signs that the article does not resolve the real question."
        ]
      },
      {
        "heading": "Control edits and publication",
        "paragraphs": [
          "The reviewer can collect evidence and draft a correction, but the named content or policy owner should approve consequential changes. Preserve the previous version, rationale, approver, and effective time so old conversations remain interpretable.",
          "Use staged status values such as draft, under review, approved, published, and retired. Agents should see which version is active and what to do when a draft conflicts with the published answer."
        ]
      },
      {
        "heading": "Test the answer in the conversation",
        "paragraphs": [
          "Read the article from the viewpoint of an agent who has only the customer message and permitted account context. Verify that the opening identifies the situation, steps are ordered, limits are explicit, and the escalation point appears before a risky action.",
          "Test common wording variations and accessibility needs. If the answer depends on an image, color, hover state, or unexplained internal term, add a text path that works without those cues."
        ]
      },
      {
        "heading": "Close the review loop",
        "paragraphs": [
          "After publication, sample real use for misapplication, repeated followups, and new exceptions. Send policy questions back to the owner instead of silently broadening the article.",
          "Retire duplicate answers and redirect links to one controlled source. A smaller inventory with visible ownership is safer than many polished pages that disagree."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who should approve a knowledge article?",
        "a": "The owner of the governing policy or product behavior should approve material changes; a support editor can prepare and test the draft."
      },
      {
        "q": "When should an article be retired?",
        "a": "Retire it when the workflow or source no longer applies, then preserve its version history and redirect active references."
      },
      {
        "q": "What should reviewers sample after a change?",
        "a": "Review conversations that used the new answer, including followups, transfers, and corrections, to see whether it works as written."
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
    "description": "A practical approach to representative chat quality review without hiding rare risks.",
    "category": "Chat operations",
    "publishedAt": "2026-10-07",
    "readTime": "12 min read",
    "sections": [
      {
        "heading": "Define what the sample must reveal",
        "paragraphs": [
          "Start with the decisions the review should support: coaching, source repair, routing reliability, accessibility, or risk control. A sample designed only to produce one average score will miss the cases that require a different response.",
          "Define the eligible conversation population and time window before selecting records. Exclude tests and spam with explicit rules, then preserve the counts so the denominator remains understandable."
        ]
      },
      {
        "heading": "Combine random and targeted selection",
        "paragraphs": [
          "Use a random portion to represent ordinary queue work. Add targeted strata for escalations, low ratings, reopened cases, sensitive topics, new agents, changed guidance, and channels with known handoff problems.",
          "Keep targeted results separate from the random estimate. Combining them without labels can make performance look better or worse while hiding why those records were selected."
        ]
      },
      {
        "heading": "Create a scorecard tied to observable evidence",
        "paragraphs": [
          "Score source accuracy, identity handling, communication clarity, record completeness, escalation behavior, and closure only where the transcript or system record supports the judgment. Include not applicable and insufficient evidence options.",
          "Write anchors for acceptable and unacceptable examples. If reviewers cannot point to the same evidence, pause scoring and calibrate the item rather than averaging incompatible interpretations."
        ]
      },
      {
        "heading": "Calibrate reviewers and resolve disagreement",
        "paragraphs": [
          "Have reviewers independently score the same small set, compare item-level differences, and document the agreed interpretation. Repeat calibration after material policy or scorecard changes.",
          "Managers should decide unresolved policy questions. Quality reviewers can identify ambiguity, but they should not create a new service rule merely to make scoring easier."
        ]
      },
      {
        "heading": "Turn findings into bounded actions",
        "paragraphs": [
          "Route individual coaching, knowledge defects, system defects, and policy gaps to different owners. A missed field may need interface repair while an unauthorized remedy requires authority coaching.",
          "Track whether the assigned action changed later samples. Report counts and denominators, preserve uncertainty, and avoid claiming broad improvement from a small or targeted cohort."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is a random sample enough?",
        "a": "It helps represent ordinary work, but targeted strata are needed to inspect rare, sensitive, or newly changed workflows."
      },
      {
        "q": "Should every item affect one total score?",
        "a": "No. Critical control failures may need separate treatment, and not applicable items should not distort the denominator."
      },
      {
        "q": "How often should reviewers calibrate?",
        "a": "Calibrate at launch, after policy or scorecard changes, and whenever item-level disagreement shows the anchors are unclear."
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
    "description": "A practical handoff model for conversations that move between chat, email, phone, and social channels.",
    "category": "Chat operations",
    "publishedAt": "2026-10-08",
    "readTime": "13 min read",
    "sections": [
      {
        "heading": "Choose one case identity across channels",
        "paragraphs": [
          "A customer may begin in chat, reply by email, and call before either thread is updated. Assign one case identity and link every channel event to it so agents do not treat the same problem as separate requests.",
          "Keep the original channel timestamps and message wording. Normalized summaries help scanning, but they should not replace the source events when sequence or consent matters."
        ]
      },
      {
        "heading": "Capture state, not an entire transcript dump",
        "paragraphs": [
          "The receiving agent needs the customer goal, completed verification, actions taken, active commitments, unresolved questions, current owner, and next update time. A transcript link belongs beside that summary, not in place of it.",
          "Record which details may be repeated on the destination channel. A public social message and an authenticated support channel have different disclosure limits."
        ]
      },
      {
        "heading": "Make the transfer visible to the customer",
        "paragraphs": [
          "Tell the customer why the conversation is moving, which channel will be used, what they need to do, and when to expect the next contact. Do not claim a specialist has accepted the case until acknowledgement is recorded.",
          "If the customer cannot use the preferred destination, offer an approved accessible alternative or ask the owner to choose one. Channel convenience should not override accessibility or identity controls."
        ]
      },
      {
        "heading": "Use ownership states that prevent abandonment",
        "paragraphs": [
          "Distinguish transfer requested, accepted, active, waiting on customer, and closed. The sender retains responsibility until the receiver accepts unless the operating policy explicitly defines another safe state.",
          "Set alerts for unacknowledged transfers and conflicting updates. When two agents respond, the case owner should reconcile commitments and provide one corrected next step."
        ]
      },
      {
        "heading": "Replay failed handoffs",
        "paragraphs": [
          "Review cases with duplicate replies, missing context, repeated verification, broken attachments, or long ownership gaps. Reconstruct the channel sequence and locate the exact field, notification, or authority rule that failed.",
          "Pilot improvements on one channel pair before extending them. Verify that links, permissions, update targets, and closure evidence work from both sides of the transfer."
        ]
      }
    ],
    "faq": [
      {
        "q": "Should customers repeat verification after a channel change?",
        "a": "Follow the approved identity policy for the destination channel and retain only permitted verification state; do not promise that every check transfers."
      },
      {
        "q": "Who owns a transfer before acceptance?",
        "a": "The sending owner should retain responsibility until the receiving owner acknowledges it, unless a documented rule assigns a different safe owner."
      },
      {
        "q": "What belongs in a handoff summary?",
        "a": "Include the goal, verified state, actions, commitments, unresolved questions, owner, and next update, with links to source records."
      }
    ],
    "internalService": "/services/customer-escalation",
    "internalSibling": "/blog/customer-support-manager-vs-chat-support-va",
    "source": {
      "label": "National Institute of Standards and Technology",
      "url": "https://www.nist.gov/privacy-framework"
    }
  }
].sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt)));
export const researchPosts: ResearchPost[] = [
  ...october28ResearchPosts,
  ...october27ResearchPosts,
  ...october22ResearchPosts,
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
].sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt)));

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' }
];

export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
