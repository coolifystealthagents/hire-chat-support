import type { ResearchPost } from './types';

export const october22ResearchPosts: ResearchPost[] = [
  {
    "slug": "chat-first-response-time-definition",
    "title": "Defining Chat First-Response Time",
    "summary": "A source-bounded method for specifying the start event, stop event, waiting states, and exclusions in chat first-response measurement.",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-22",
    "image": "/october-22/chat-first-response-time-definition.webp",
    "finding": "First-response time is reproducible only when the start event, the qualifying response, the clock, and the exclusions are declared before the population is measured.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "chat-containment-escalation-measurement",
    "title": "Measuring Chat Containment and Escalation",
    "summary": "A method for separating resolved conversations, appropriate escalations, failed containment, and unresolved handoffs.",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-22",
    "image": "/october-22/chat-containment-escalation-measurement.webp",
    "finding": "Containment is not the same as resolution. A useful measure separates appropriate escalation, failed containment, customer abandonment, and unresolved handoff.",
    "methodology": [
      "Define the unit as a conversation with a declared start and end state. Record the channel, queue, customer eligibility, and observation window. Exclude conversations that were test messages or duplicates under a stated rule.",
      "Define containment as the conversation ending without a transfer to another owner. Define resolution as the customer's request being addressed under the approved outcome definition. A conversation can be contained but unresolved, or escalated and resolved.",
      "Classify escalations by reason: policy, authority, technical, safety, account access, or customer request. An appropriate escalation is not a failure. The measure should distinguish a correct handoff from an avoidable one.",
      "Record customer abandonment and no-response states. A conversation that ends because the customer left is not contained in a meaningful sense. Keep it visible rather than counting it as a success.",
      "Sample contained conversations and check the outcome against the approved source. Look for premature closure, an unsupported answer, or a customer who returned through another channel.",
      "Report counts by outcome, escalation reason, and queue. Pair the containment measure with resolution quality and customer follow-up. Do not use containment alone as a performance target."
    ],
    "findings": [
      "Containment and resolution are different outcomes.",
      "An appropriate escalation should not be scored as a failure.",
      "Customer abandonment belongs in the denominator, not in a success count.",
      "Premature closure can inflate containment.",
      "A returned conversation is evidence of an unresolved outcome.",
      "Containment targets can create pressure to avoid necessary handoffs."
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Data Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "chat-transcript-quality-sampling",
    "title": "Sampling Chat Transcripts for Quality Review",
    "summary": "A reproducible sampling and review design for transcript quality, escalation accuracy, and evidence completeness.",
    "cluster": "Quality review",
    "publishedAt": "2026-10-22",
    "image": "/october-22/chat-transcript-quality-sampling.webp",
    "finding": "Transcript quality review is useful when the sample, the checklist, the reviewer calibration, and the handling of sensitive data are defined before the review begins.",
    "methodology": [
      "Define the review question. A sample designed to test escalation accuracy needs a different population from one designed to test answer clarity. Record the question before selecting records.",
      "Build the sampling frame from a fixed export. Record the query date, filters, queue, channel, and count. Stratify by topic, outcome, shift, and escalation reason so the sample is not limited to easy conversations.",
      "Define the checklist with observable items: source use, required fields, identity verification, escalation trigger, customer update, and closure evidence. Separate objective items from judgment items that require a manager.",
      "Calibrate reviewers on a small set of records. Measure agreement on each item and revise unclear definitions before expanding the sample. Preserve disagreement rather than forcing consensus.",
      "Redact or limit sensitive content according to policy. Record who accessed the transcript, the purpose, and the retention period. Do not copy full transcripts into an unapproved review file.",
      "Report the sample size, exclusions, item-level results, and the limits of inference. A sample describes the reviewed records, not the entire queue. Follow-up actions should name an owner and a retest date."
    ],
    "findings": [
      "The review question determines the sampling frame.",
      "A sample limited to easy conversations hides escalation risk.",
      "Objective and judgment items should be separated.",
      "Reviewer calibration is part of the method, not an optional step.",
      "Sensitive transcript access needs a documented purpose and retention rule.",
      "A sample cannot certify the whole queue."
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Data Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "chat-knowledge-usage-evidence",
    "title": "Tracing Chat Knowledge Usage",
    "summary": "A method for linking chat answers to approved knowledge versions, review dates, and escalation when guidance is missing.",
    "cluster": "Knowledge operations",
    "publishedAt": "2026-10-22",
    "image": "/october-22/chat-knowledge-usage-evidence.webp",
    "finding": "Knowledge usage is reviewable when the answer, the article version, the review date, and the escalation for missing guidance are retained with the conversation.",
    "methodology": [
      "Define the knowledge population. It may include help center articles, macros, internal runbooks, or approved response templates. Record the owner, version, and review date for each source.",
      "For a sample of conversations, identify the source used for the answer. Record the article identifier, version, and the date it was consulted. If the agent used memory or an unapproved source, record that as a finding.",
      "Test whether the answer matches the current approved source. Distinguish a stale source, a misread source, an unsupported improvisation, and a question the source does not cover.",
      "Record the escalation path when the source is silent or conflicting. A missing answer should produce a content request or an owner decision, not a confident guess.",
      "Review article usage by topic and by gap. A high usage of an outdated article may indicate a search or navigation problem. A high volume of missing-answer escalations may indicate a content gap.",
      "Report the sample, the source versions, the match results, and the open content requests. Retain the review date and the owner for each corrective action."
    ],
    "findings": [
      "An answer without a source version cannot be reviewed later.",
      "A stale source and an unsupported answer are different findings.",
      "Missing guidance should create a content request, not an improvised answer.",
      "Search and navigation problems can look like agent errors.",
      "Article usage patterns can guide content investment.",
      "A knowledge review is not a substitute for policy ownership."
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Federal Plain Language Guidelines",
        "publisher": "PlainLanguage.gov",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "chat-customer-effort-signals",
    "title": "Reading Customer Effort Signals in Chat",
    "summary": "A cautious method for using repetition, transfers, and clarification requests as operational signals rather than satisfaction scores.",
    "cluster": "Quality review",
    "publishedAt": "2026-10-22",
    "image": "/october-22/chat-customer-effort-signals.webp",
    "finding": "Customer effort signals are useful for locating friction when they are defined from observable conversation events and not treated as a direct measure of satisfaction.",
    "methodology": [
      "Define the signals before reviewing conversations. Examples include repeated information requests, multiple transfers, a return within a short period, a clarification loop, or a customer request to start over. Each signal needs a precise definition.",
      "Build the population from a fixed conversation export. Record the channel, queue, topic, outcome, and observation window. Include conversations that ended without a resolution if the signal can be observed.",
      "Code the signals from the transcript and the case record, not from a satisfaction survey. A customer may be polite while repeating the same information. A signal is an event, not an emotion.",
      "Distinguish agent-caused friction from process-caused friction. A transfer may be required by policy, while a repeated question may indicate a missing field or a poor handoff. Record the likely cause and the evidence.",
      "Review a sample with the support owner and the knowledge owner. Look for patterns by topic, queue, and channel. Do not use the signals to rank individual agents without context.",
      "Report the signal counts, the sample, and the limits. A high signal count identifies where to inspect. It does not prove that the customer was dissatisfied or that the agent performed poorly."
    ],
    "findings": [
      "Observable events are more reliable than inferred emotion.",
      "A required transfer is not the same as avoidable friction.",
      "Repeated information requests may indicate a missing field or a handoff gap.",
      "A return conversation is a signal worth inspecting.",
      "Effort signals should guide review, not serve as a satisfaction score.",
      "Agent ranking without context can punish correct escalation."
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Federal Plain Language Guidelines",
        "publisher": "PlainLanguage.gov",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Data Security",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "hirechatsupport-intake-completeness-study",
    "title": "Chat Support Intake Completeness Study",
    "summary": "A reproducible review of which required fields and source artifacts are present at the point of assignment in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/hirechatsupport-intake-completeness-study.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which required fields and source artifacts are present at the point of assignment.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "hirechatsupport-handoff-latency-study",
    "title": "Chat Support Handoff Latency Study",
    "summary": "A reproducible review of how long each handoff takes and where acknowledgement or context is lost in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/hirechatsupport-handoff-latency-study.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for how long each handoff takes and where acknowledgement or context is lost.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "hirechatsupport-exception-pattern-audit",
    "title": "Chat Support Exception Pattern Audit",
    "summary": "A reproducible review of which exception reasons recur and whether they receive a consistent owner and disposition in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/hirechatsupport-exception-pattern-audit.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which exception reasons recur and whether they receive a consistent owner and disposition.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "hirechatsupport-evidence-reliability-study",
    "title": "Chat Support Evidence Reliability Study",
    "summary": "A reproducible review of whether the source is reconstructable and consistent with the recorded final state in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/hirechatsupport-evidence-reliability-study.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether the source is reconstructable and consistent with the recorded final state.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "hirechatsupport-access-recertification-study",
    "title": "Chat Support Access Recertification Study",
    "summary": "A reproducible review of whether current access matches the approved role and whether removals are evidenced in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-25",
    "image": "/october-22/hirechatsupport-access-recertification-study.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether current access matches the approved role and whether removals are evidenced.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ]
  },
  {
    "slug": "hirechatsupport-intake-completeness-study-2",
    "title": "Chat Support Intake Completeness Study",
    "summary": "A reproducible review of which required fields and source artifacts are present at the point of assignment in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/hirechatsupport-intake-completeness-study-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which required fields and source artifacts are present at the point of assignment.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines which required fields and source artifacts are present at the point of assignment across intake records for the defined service in Chat Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define intake records for the defined service from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for field completeness, missing evidence, owner assignment, exception state, and correction time. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for field completeness, missing evidence, owner assignment, exception state, and correction time. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot determine service quality, legal compliance, or the correctness of a professional decision. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for intake records for the defined service, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  },
  {
    "slug": "hirechatsupport-handoff-latency-study-2",
    "title": "Chat Support Handoff Latency Study",
    "summary": "A reproducible review of how long each handoff takes and where acknowledgement or context is lost in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/hirechatsupport-handoff-latency-study-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for how long each handoff takes and where acknowledgement or context is lost.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines how long each handoff takes and where acknowledgement or context is lost across records that move between two named owners in Chat Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define records that move between two named owners from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for handoff time, acknowledgement, missing context, rework, and unresolved records. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for handoff time, acknowledgement, missing context, rework, and unresolved records. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot establish causation or whether a shorter handoff produced a better outcome. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for records that move between two named owners, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  },
  {
    "slug": "hirechatsupport-exception-pattern-audit-2",
    "title": "Chat Support Exception Pattern Audit",
    "summary": "A reproducible review of which exception reasons recur and whether they receive a consistent owner and disposition in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/hirechatsupport-exception-pattern-audit-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which exception reasons recur and whether they receive a consistent owner and disposition.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines which exception reasons recur and whether they receive a consistent owner and disposition across exception records from the review window in Chat Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define exception records from the review window from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for reason mix, repeat rate, age, owner, resolution, and reopened exceptions. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for reason mix, repeat rate, age, owner, resolution, and reopened exceptions. Inspect case narratives behind important differences before assigning a cause.",
          "The audit describes documented exceptions and cannot infer undocumented causes. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for exception records from the review window, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  },
  {
    "slug": "hirechatsupport-evidence-reliability-study-2",
    "title": "Chat Support Evidence Reliability Study",
    "summary": "A reproducible review of whether the source is reconstructable and consistent with the recorded final state in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/hirechatsupport-evidence-reliability-study-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether the source is reconstructable and consistent with the recorded final state.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines whether the source is reconstructable and consistent with the recorded final state across records with a source artifact and a later outcome in Chat Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define records with a source artifact and a later outcome from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for source presence, match, missing state, correction, reviewer agreement, and time. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for source presence, match, missing state, correction, reviewer agreement, and time. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot prove that the source is truthful or that the final decision was correct. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for records with a source artifact and a later outcome, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  },
  {
    "slug": "hirechatsupport-access-recertification-study-2",
    "title": "Chat Support Access Recertification Study",
    "summary": "A reproducible review of whether current access matches the approved role and whether removals are evidenced in Chat Support operations.",
    "cluster": "Chat Support Research",
    "publishedAt": "2026-10-26",
    "image": "/october-22/hirechatsupport-access-recertification-study-2.svg",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether current access matches the approved role and whether removals are evidenced.",
    "methodology": [
      "Define the population as conversations that entered the queue during a declared period and met the channel and customer eligibility rules. Record the query, time zone, filters, exclusions, and count before inspecting the result.",
      "Specify the start event. It may be the customer's first message, the platform's queue assignment, or the first human review. Each produces a different measure. Do not mix events within one comparison.",
      "Specify what counts as a response. A human reply that addresses the customer is different from an automated acknowledgment, a routing notice, or an internal note. Record the qualifying response type and whether a template counts.",
      "Define pause and stop rules. If the clock pauses while waiting for customer information, record the request and response times. If it does not pause, state that choice. The stop event should be observable in the retained record.",
      "Handle business hours and holidays explicitly. A conversation that arrives outside the service window may start on the next business day. State the rule and keep the customer-facing expectation consistent with it.",
      "Report the number in scope, the number that met the definition, the number excluded, and the number still open at the observation boundary. Pair the measure with a sample review of response quality."
    ],
    "findings": [
      "A start event must be named and applied consistently.",
      "Automated acknowledgments should not be counted as human first responses unless the definition says so.",
      "Waiting states should be visible rather than silently excluded.",
      "Business-hours rules change the meaning of the number.",
      "Open conversations at the observation boundary are censored, not complete.",
      "A fast response without an owner does not demonstrate service quality."
    ],
    "sources": [
      {
        "label": "Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checkedAt": "2026-10-22"
      },
      {
        "label": "Records Management Policy and Guidance",
        "publisher": "National Archives and Records Administration",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "checkedAt": "2026-10-22"
      }
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines whether current access matches the approved role and whether removals are evidenced across role-based access records for the service in Chat Support operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define role-based access records for the service from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for role match, excess access, temporary access age, removal evidence, and reviewer sign-off. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for role match, excess access, temporary access age, removal evidence, and reviewer sign-off. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot determine legal sufficiency or whether a specific access decision was appropriate. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for role-based access records for the service, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
        ]
      }
    ]
  }
];
