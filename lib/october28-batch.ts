import type { BlogPost, ResearchPost } from './types';

export const october28BlogPosts: BlogPost[] = [
  {
    "slug": "hcs-chat-transcript-risk-sampling-oct28",
    "title": "Risk-Based Chat Transcript Sampling",
    "description": "A sampling plan that reviews high-risk chats first without ignoring ordinary conversations.",
    "category": "Quality review",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-chat-transcript-risk-sampling-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Risk-Based Chat Transcript Sampling is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because the QA sample reviews only the easiest or shortest chats and misses payment, privacy, and escalation failures. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the transcript sample and reason codes. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the QA sample reviews only the easiest or shortest chats and misses payment, privacy, and escalation failures. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A refund chat and a password reset both close with a positive CSAT. The sample should weight the refund conversation for payment verification and the reset for identity checks. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns risk-based transcript sampling. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track review coverage by risk tier, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-bot-human-handoff-timing-oct28",
    "title": "Bot-to-Human Handoff Timing",
    "description": "A handoff control that measures how quickly a bot transfers a conversation and whether the customer has to repeat information.",
    "category": "Bot operations",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-bot-human-handoff-timing-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Bot-to-Human Handoff Timing is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because the bot collects the issue, transfers to a human, and the human asks the same questions again. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the handoff event and transcript. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the bot collects the issue, transfers to a human, and the human asks the same questions again. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A billing bot confirms the invoice number and then transfers. The human agent should see that value in the record before the first reply. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns bot-to-human handoff timing. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track handoff time and repeat-question rate, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-chat-sla-pause-rules-oct28",
    "title": "Chat SLA Pause Rules That Hold Up to Review",
    "description": "A pause-rule design that separates customer-caused waits from agent or system delays.",
    "category": "SLA operations",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-chat-sla-pause-rules-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Chat SLA Pause Rules That Hold Up to Review is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because every difficult chat is paused, so the SLA looks healthy while customers wait for an answer. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the SLA event log. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: every difficult chat is paused, so the SLA looks healthy while customers wait for an answer. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A customer says they need to find a receipt. The pause should stop only while the customer is away, with a timestamp and a maximum duration. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns chat SLA pause rules. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track paused time and resumed conversations, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-sensitive-data-redaction-qa-oct28",
    "title": "Sensitive-Data Redaction QA for Chat",
    "description": "A redaction check that samples transcripts, attachments, and bot logs for payment and identity data.",
    "category": "Privacy operations",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-sensitive-data-redaction-qa-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Sensitive-Data Redaction QA for Chat is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because a card number is removed from the text but remains visible in an attached screenshot. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the redaction sample and source settings. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: a card number is removed from the text but remains visible in an attached screenshot. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A customer uploads a receipt with the card number visible. The QA check should inspect the attachment, not only the text transcript. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns chat redaction QA. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track redaction defects by data type, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-concurrency-quality-drift-oct28",
    "title": "Concurrency and Chat Quality Drift",
    "description": "A drift review that compares concurrency changes with response gaps, resolution, and quality failures.",
    "category": "Capacity planning",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-concurrency-quality-drift-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Concurrency and Chat Quality Drift is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because the team raises concurrency, first response improves, and the middle of the conversation goes silent. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the capacity plan and QA results. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the team raises concurrency, first response improves, and the middle of the conversation goes silent. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "An agent handles five chats instead of three. The dashboard shows faster greetings, but the time between customer follow-up and agent reply doubles. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns concurrency quality drift. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track response gaps by concurrency band, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-chat-transfer-ownership-oct28",
    "title": "Chat Transfer Ownership",
    "description": "A transfer record that names the receiving owner, the context sent, and the acknowledgment required to close the handoff.",
    "category": "Routing",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-chat-transfer-ownership-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Chat Transfer Ownership is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because the chat is transferred to a team queue with no owner and the customer waits for a new greeting. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the transfer log and receiving queue. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the chat is transferred to a team queue with no owner and the customer waits for a new greeting. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A technical chat transfers to tier two. The record should carry the product, the error, the steps tried, and the named agent who accepted it. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns chat transfer ownership. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track transfer acceptance and reopen rate, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-csat-followup-segmentation-oct28",
    "title": "CSAT Follow-Up Segmentation",
    "description": "A follow-up design that separates low scores caused by the product, the wait, the agent, and the survey itself.",
    "category": "Customer feedback",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-csat-followup-segmentation-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "CSAT Follow-Up Segmentation is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because every low score gets the same apology and no one checks whether the customer ever received the fix. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the survey response and conversation record. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: every low score gets the same apology and no one checks whether the customer ever received the fix. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A one-star score follows a resolved billing issue. The follow-up should confirm the resolution before treating the score as an agent performance problem. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns CSAT follow-up segmentation. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track low-score follow-up completion, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-knowledge-gap-tagging-oct28",
    "title": "Knowledge-Gap Tagging in Chat",
    "description": "A tagging routine that turns repeated agent questions into knowledge-base fixes with an owner and a review date.",
    "category": "Knowledge management",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-knowledge-gap-tagging-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Knowledge-Gap Tagging in Chat is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because agents paste the same workaround into chat because no one owns the outdated help article. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the gap log and article version. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: agents paste the same workaround into chat because no one owns the outdated help article. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "Three agents answer the same warranty question differently. The gap log should name the article, the conflicting answers, and the owner who will update it. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns knowledge-gap tagging. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track repeat questions and article updates, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-chat-payment-link-verification-oct28",
    "title": "Chat Payment-Link Verification",
    "description": "A verification path for payment links sent in chat, covering identity, amount, and the approved domain.",
    "category": "Payment safety",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-chat-payment-link-verification-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Chat Payment-Link Verification is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because an agent sends a payment link from a lookalike domain and the customer cannot tell whether it is legitimate. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the payment request and verification log. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: an agent sends a payment link from a lookalike domain and the customer cannot tell whether it is legitimate. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A customer asks for a refund link. The agent confirms the account, the amount, and the approved payment domain before sending anything. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns chat payment-link verification. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track payment links sent and verification failures, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-peak-season-staffing-calibration-oct28",
    "title": "Peak-Season Chat Staffing Calibration",
    "description": "A calibration method that compares forecasted chat volume with actual arrivals, handle time, and quality during a surge.",
    "category": "Workforce planning",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-peak-season-staffing-calibration-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Peak-Season Chat Staffing Calibration is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because the roster is built on last year's average and the first surge hour is covered by two agents. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the forecast and intraday actuals. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the roster is built on last year's average and the first surge hour is covered by two agents. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A holiday promotion doubles chats between 10 a.m. and noon. The calibration should compare the forecast with the arrival curve before the next promotion. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns peak-season staffing calibration. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track forecast error and coverage gaps, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-repeat-contact-root-cause-oct28",
    "title": "Repeat-Contact Root Cause Review",
    "description": "A root-cause review that links repeat chats to the resolution, the knowledge used, and the customer's original issue.",
    "category": "Continuous improvement",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-repeat-contact-root-cause-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "Repeat-Contact Root Cause Review is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because the team counts repeat contacts but never checks whether the first agent closed the actual question. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the repeat-contact report and original transcript. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the team counts repeat contacts but never checks whether the first agent closed the actual question. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A customer returns three times about a missing order. The review should show whether the first answer addressed the tracking, the refund, or neither. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns repeat-contact root cause. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track repeat contacts within seven days, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "hcs-after-hours-escalation-script-oct28",
    "title": "After-Hours Chat Escalation Script",
    "description": "An escalation script for after-hours chat that names the trigger, the destination, and the message the customer receives.",
    "category": "After-hours operations",
    "publishedAt": "2026-10-28",
    "readTime": "8 min read",
    "image": "/october-28/hcs-after-hours-escalation-script-oct28.jpg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "After-Hours Chat Escalation Script is a record, not a reminder to be careful. It shows what the team checked, who owned the next step, and what remained open before the chat closed.",
          "The control matters because the chat says someone will call, but no one owns the callback and the customer waits until morning. A transcript can look complete while the evidence for the resolution lives in a message no reviewer can reconstruct."
        ]
      },
      {
        "heading": "Open the governing record",
        "paragraphs": [
          "Start with the escalation log and on-call roster. Record the source, the timestamp, the owner, and the field the evidence supports. Save the original rather than retyping it into a summary.",
          "The agent prepares and routes the record. The support lead keeps the decisions that change a refund, a customer commitment, access, or a public claim."
        ]
      },
      {
        "heading": "Where the handoff breaks",
        "paragraphs": [
          "The predictable failure is this: the chat says someone will call, but no one owns the callback and the customer waits until morning. It becomes expensive when the next agent cannot tell whether the item is a request, an approval, or a correction.",
          "Use one status set across the queue: ready, exception, approved, and closed. A status without an owner and a date is only a label."
        ]
      },
      {
        "heading": "A worked chat example",
        "paragraphs": [
          "A customer reports a locked account at 11 p.m. The script should distinguish a self-service reset from a security escalation and name the on-call owner. The point is not the specific number. It is that the record shows the original state, the change, the reviewer, and the confirmation in one place.",
          "Review the example with the person who owns after-hours chat escalation. If they cannot explain the close condition from the record alone, the control is not finished."
        ]
      },
      {
        "heading": "Weekly review and stop rule",
        "paragraphs": [
          "Sample one ordinary chat, one exception, and one recently corrected chat. Track after-hours escalations and callback completion, and report counts beside the age of what remains open.",
          "Count errors by rule rather than by person. When the same gap appears twice, fix the routing rule, the macro, or the source map before coaching the same agent again."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns this control?",
        "a": "One support lead approves the rule and exceptions; the agent prepares and checks the record."
      },
      {
        "q": "How often is it reviewed?",
        "a": "Review a small sample weekly and whenever volume, routing, or a platform setting changes."
      },
      {
        "q": "What is the limit?",
        "a": "The record shows what the team observed; it does not replace legal, privacy, or platform-specific advice."
      }
    ],
    "internalService": "/services/chat-support",
    "internalSibling": "/services/customer-escalation",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  }
];

export const october28ResearchPosts: ResearchPost[] = [
  {
    "slug": "hcs-first-response-resolution-gap-oct28-study",
    "title": "First-Response Speed and Resolution Quality",
    "summary": "Does a faster first chat response predict a better resolution, or does it hide longer silent gaps later?",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-28",
    "image": "/october-28/hcs-first-response-resolution-gap-oct28-study.jpg",
    "finding": "A queue can improve first response by 20 percent and still increase repeat contacts if agents copy a greeting and delay the actual answer.",
    "methodology": [
      "Chats handled in a defined month, sampled across queues, shifts, and concurrency bands.",
      "The unit is one chat or handoff event; linked events are recorded separately."
    ],
    "findings": [
      "First-response time, median gap after the customer's follow-up, resolution without repeat contact, and QA failure rate.",
      "Teams often optimize the greeting while the middle of the conversation stalls. The useful measure pairs speed with resolution."
    ],
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "publisher": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "FTC Protecting Personal Information",
        "publisher": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Health and Human Services",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "PCI Security Standards Council",
        "publisher": "PCI Security Standards Council",
        "url": "https://www.pcisecuritystandards.org/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "publisher": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Labor",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "National Institute of Standards and Technology",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Federal Communications Commission",
        "publisher": "Federal Communications Commission",
        "url": "https://www.fcc.gov/",
        "checkedAt": "2026-10-28"
      }
    ]
  },
  {
    "slug": "hcs-bot-handoff-abandonment-oct28-study",
    "title": "Bot Handoff and Chat Abandonment",
    "summary": "How often do customers leave after a bot transfers them, and what predicts the drop?",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-28",
    "image": "/october-28/hcs-bot-handoff-abandonment-oct28-study.jpg",
    "finding": "A handoff that transfers the transcript but not the verified account is still a restart. Measure the repeat questions, not only the wait.",
    "methodology": [
      "Bot-originated chats in a defined quarter, grouped by intent, handoff timing, and human queue.",
      "The unit is one chat or handoff event; linked events are recorded separately."
    ],
    "findings": [
      "Abandonment after handoff, time to first human reply, repeat-question rate, and the share that returned within a week.",
      "Handoffs fail when the bot does not pass context, when the human queue is understaffed, or when the customer is asked to start over."
    ],
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "publisher": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "FTC Protecting Personal Information",
        "publisher": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Health and Human Services",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "PCI Security Standards Council",
        "publisher": "PCI Security Standards Council",
        "url": "https://www.pcisecuritystandards.org/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "publisher": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Labor",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "National Institute of Standards and Technology",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Federal Communications Commission",
        "publisher": "Federal Communications Commission",
        "url": "https://www.fcc.gov/",
        "checkedAt": "2026-10-28"
      }
    ]
  },
  {
    "slug": "hcs-redaction-defect-rate-oct28-study",
    "title": "Sensitive-Data Redaction Defects in Chat",
    "summary": "Which sensitive data survives redaction in chat transcripts, attachments, and bot logs?",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-28",
    "image": "/october-28/hcs-redaction-defect-rate-oct28-study.jpg",
    "finding": "A card number removed from the chat text can remain visible in a receipt image. Sample the attachment separately.",
    "methodology": [
      "Redacted chats sampled in a defined month, including text, attachments, and bot event logs.",
      "The unit is one chat or handoff event; linked events are recorded separately."
    ],
    "findings": [
      "Defect rate by data type, location, and redaction method; time to correction; and the share of defects visible to a customer-facing export.",
      "Text filters miss screenshots, pasted receipts, and values split across messages. The defect is often in the attachment or the bot log, not the transcript."
    ],
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "publisher": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "FTC Protecting Personal Information",
        "publisher": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Health and Human Services",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "PCI Security Standards Council",
        "publisher": "PCI Security Standards Council",
        "url": "https://www.pcisecuritystandards.org/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "publisher": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Labor",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "National Institute of Standards and Technology",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Federal Communications Commission",
        "publisher": "Federal Communications Commission",
        "url": "https://www.fcc.gov/",
        "checkedAt": "2026-10-28"
      }
    ]
  },
  {
    "slug": "hcs-concurrency-quality-tradeoff-oct28-study",
    "title": "Concurrency and Resolution Quality",
    "summary": "What happens to resolution and quality when chat concurrency increases?",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-28",
    "image": "/october-28/hcs-concurrency-quality-tradeoff-oct28-study.jpg",
    "finding": "A pilot that compares volunteers with non-volunteers is not a fair test. Match the groups by queue and experience.",
    "methodology": [
      "Agents assigned to a controlled concurrency pilot, compared with a matched group on the same shift and channel.",
      "The unit is one chat or handoff event; linked events are recorded separately."
    ],
    "findings": [
      "Handle time, response gaps, resolution without follow-up, QA failures, and agent-reported context switches.",
      "The first response often improves while the middle of the conversation slows. Quality failures cluster in multi-step and payment conversations."
    ],
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "publisher": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "FTC Protecting Personal Information",
        "publisher": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Health and Human Services",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "PCI Security Standards Council",
        "publisher": "PCI Security Standards Council",
        "url": "https://www.pcisecuritystandards.org/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "publisher": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Labor",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "National Institute of Standards and Technology",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Federal Communications Commission",
        "publisher": "Federal Communications Commission",
        "url": "https://www.fcc.gov/",
        "checkedAt": "2026-10-28"
      }
    ]
  },
  {
    "slug": "hcs-repeat-contact-lead-time-oct28-study",
    "title": "Repeat-Contact Lead Time",
    "summary": "How quickly do customers return after a chat, and which closures predict the return?",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-28",
    "image": "/october-28/hcs-repeat-contact-lead-time-oct28-study.jpg",
    "finding": "A fast close with no confirmation is a likely repeat. Measure the closure evidence, not only the handle time.",
    "methodology": [
      "Chats with a repeat contact within seven days, compared with a sample of chats with no repeat.",
      "The unit is one chat or handoff event; linked events are recorded separately."
    ],
    "findings": [
      "Days to repeat, original disposition, knowledge article used, and the share where the first answer missed the actual question.",
      "Repeat contacts often follow a closure that marked the ticket complete before the customer confirmed the result."
    ],
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "publisher": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "FTC Protecting Personal Information",
        "publisher": "FTC Protecting Personal Information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "publisher": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Cybersecurity and Infrastructure Security Agency",
        "publisher": "Cybersecurity and Infrastructure Security Agency",
        "url": "https://www.cisa.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Health and Human Services",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "PCI Security Standards Council",
        "publisher": "PCI Security Standards Council",
        "url": "https://www.pcisecuritystandards.org/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "publisher": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "U.S. Department of Labor",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "National Institute of Standards and Technology",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/",
        "checkedAt": "2026-10-28"
      },
      {
        "label": "Federal Communications Commission",
        "publisher": "Federal Communications Commission",
        "url": "https://www.fcc.gov/",
        "checkedAt": "2026-10-28"
      }
    ]
  }
];
