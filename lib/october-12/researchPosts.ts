import type { ResearchPost } from '../types';
export const october12ResearchPosts: ResearchPost[] = [
  {
    "slug": "chat-escalation-reproducibility-study",
    "title": "Reproducibility of High-Consequence Chat Escalations",
    "summary": "A source-bounded Hire Chat Support study of high-consequence chat escalation, adverse controls, and accountable decisions.",
    "cluster": "Escalation quality",
    "publishedAt": "2026-10-12",
    "image": "/october-12/chat-escalation-reproducibility-study.webp",
    "finding": "Study design uses one bounded observation unit, ten evidence fields, seven adverse states, and one authority map; these are protocol counts, not performance claims.",
    "methodology": [
      "Define the observation unit: use one escalation from first signal through owner acknowledgement and verified endpoint. The protocol question is whether two reviewers reconstruct the same customer state, authority boundary, and next action from the retained transcript and system evidence. Record the entry and exit events before sampling begins.",
      "Declare the sample and exclusions: publish the cohort dates, channels, inclusion rule, and exclusions for one escalation from first signal through owner acknowledgement and verified endpoint. Keep ordinary, incomplete, corrected, urgent, inaccessible, and reopened cases visible as separate strata.",
      "Preserve the evidence hierarchy: retain original wording, actor, channel, local timestamp, case identity, system event, controlling answer or policy version, permission state, correction history, and consequence. Label observation, named report, inference, and decision separately.",
      "Reconstruct the chronology: order every event in one escalation from first signal through owner acknowledgement and verified endpoint without filling gaps from memory. Preserve original local values beside normalized values and flag conflicts instead of choosing the convenient record.",
      "Design adverse controls: test missing identity, stale guidance, contradictory state, inaccessible evidence, late correction, privacy-sensitive content, and failed acknowledgement. Record which control caught each seeded condition.",
      "Code authority transitions: mark the moment work passes between coordinator and decision owner. Support manager and specialist decision owner retain consequential authority; preparation or routing permission does not expand that authority.",
      "Measure customer acknowledgement: distinguish message delivery from customer receipt and from resolution. Record the approved message, channel result, acknowledgement evidence, open questions, and residual work.",
      "Audit privacy and minimization: collect only fields needed to answer HCS-R-1. Restrict reviewer access, redact exported examples, document retention, and log any exception to the minimum-necessary rule.",
      "Run independent review: give a second reviewer the retained record without private context. Compare chronology, evidence classification, authority boundary, and next action; preserve disagreements for owner resolution.",
      "State limitations and refresh triggers: report counts with denominators, exclusions, unresolved records, and gap concentration rather than outcome claims. Refresh after a system, role, policy, channel, or risk change and require owner acceptance before reuse."
    ],
    "findings": [
      "For high-consequence chat escalation, a closed ticket is weaker than a linked chain containing original wording, versioned evidence, authority decision, delivered message, acknowledgement, and residual work.",
      "Missing evidence in one escalation from first signal through owner acknowledgement and verified endpoint must not be replaced by habit, a likely explanation, or a favorable outcome; doing so hides the process weakness the review should expose.",
      "Permission to coordinate does not imply permission to disclose, diagnose, credit, restrict, or make regulated judgments. The authority map must name support manager and specialist decision owner.",
      "Adverse review should include wrong identity, stale answer, contradictory state, inaccessible source, late correction, privacy-sensitive content, and failed acknowledgement.",
      "A reproducible HCS-R-1 record retains original local time and field values beside normalized values so boundary cases remain reviewable.",
      "Pilot high-consequence chat escalation in a declared cohort, repair gaps, secure owner acceptance, test rollback, and refresh after any system, role, policy, or risk change."
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
    "finding": "Study design uses one bounded observation unit, ten evidence fields, seven adverse states, and one authority map; these are protocol counts, not performance claims.",
    "methodology": [
      "Define the observation unit: use one knowledge answer across approval, publication, use, revision, withdrawal, and correction. The protocol question is whether agents can identify which approved answer controlled at the time of a customer reply and subsequent correction. Record the entry and exit events before sampling begins.",
      "Declare the sample and exclusions: publish the cohort dates, channels, inclusion rule, and exclusions for one knowledge answer across approval, publication, use, revision, withdrawal, and correction. Keep ordinary, incomplete, corrected, urgent, inaccessible, and reopened cases visible as separate strata.",
      "Preserve the evidence hierarchy: retain original wording, actor, channel, local timestamp, case identity, system event, controlling answer or policy version, permission state, correction history, and consequence. Label observation, named report, inference, and decision separately.",
      "Reconstruct the chronology: order every event in one knowledge answer across approval, publication, use, revision, withdrawal, and correction without filling gaps from memory. Preserve original local values beside normalized values and flag conflicts instead of choosing the convenient record.",
      "Design adverse controls: test missing identity, stale guidance, contradictory state, inaccessible evidence, late correction, privacy-sensitive content, and failed acknowledgement. Record which control caught each seeded condition.",
      "Code authority transitions: mark the moment work passes between coordinator and decision owner. Knowledge owner and policy author retain consequential authority; preparation or routing permission does not expand that authority.",
      "Measure customer acknowledgement: distinguish message delivery from customer receipt and from resolution. Record the approved message, channel result, acknowledgement evidence, open questions, and residual work.",
      "Audit privacy and minimization: collect only fields needed to answer HCS-R-2. Restrict reviewer access, redact exported examples, document retention, and log any exception to the minimum-necessary rule.",
      "Run independent review: give a second reviewer the retained record without private context. Compare chronology, evidence classification, authority boundary, and next action; preserve disagreements for owner resolution.",
      "State limitations and refresh triggers: report counts with denominators, exclusions, unresolved records, and gap concentration rather than outcome claims. Refresh after a system, role, policy, channel, or risk change and require owner acceptance before reuse."
    ],
    "findings": [
      "For knowledge answer version drift, a closed ticket is weaker than a linked chain containing original wording, versioned evidence, authority decision, delivered message, acknowledgement, and residual work.",
      "Missing evidence in one knowledge answer across approval, publication, use, revision, withdrawal, and correction must not be replaced by habit, a likely explanation, or a favorable outcome; doing so hides the process weakness the review should expose.",
      "Permission to coordinate does not imply permission to disclose, diagnose, credit, restrict, or make regulated judgments. The authority map must name knowledge owner and policy author.",
      "Adverse review should include wrong identity, stale answer, contradictory state, inaccessible source, late correction, privacy-sensitive content, and failed acknowledgement.",
      "A reproducible HCS-R-2 record retains original local time and field values beside normalized values so boundary cases remain reviewable.",
      "Pilot knowledge answer version drift in a declared cohort, repair gaps, secure owner acceptance, test rollback, and refresh after any system, role, policy, or risk change."
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
    "finding": "Study design uses one bounded observation unit, ten evidence fields, seven adverse states, and one authority map; these are protocol counts, not performance claims.",
    "methodology": [
      "Define the observation unit: use one verification attempt through fallback, owner decision, customer communication, and recovery. The protocol question is whether verification failures and accessibility barriers are measured without weakening account-protection controls. Record the entry and exit events before sampling begins.",
      "Declare the sample and exclusions: publish the cohort dates, channels, inclusion rule, and exclusions for one verification attempt through fallback, owner decision, customer communication, and recovery. Keep ordinary, incomplete, corrected, urgent, inaccessible, and reopened cases visible as separate strata.",
      "Preserve the evidence hierarchy: retain original wording, actor, channel, local timestamp, case identity, system event, controlling answer or policy version, permission state, correction history, and consequence. Label observation, named report, inference, and decision separately.",
      "Reconstruct the chronology: order every event in one verification attempt through fallback, owner decision, customer communication, and recovery without filling gaps from memory. Preserve original local values beside normalized values and flag conflicts instead of choosing the convenient record.",
      "Design adverse controls: test missing identity, stale guidance, contradictory state, inaccessible evidence, late correction, privacy-sensitive content, and failed acknowledgement. Record which control caught each seeded condition.",
      "Code authority transitions: mark the moment work passes between coordinator and decision owner. Identity owner, security lead, and accessibility owner retain consequential authority; preparation or routing permission does not expand that authority.",
      "Measure customer acknowledgement: distinguish message delivery from customer receipt and from resolution. Record the approved message, channel result, acknowledgement evidence, open questions, and residual work.",
      "Audit privacy and minimization: collect only fields needed to answer HCS-R-3. Restrict reviewer access, redact exported examples, document retention, and log any exception to the minimum-necessary rule.",
      "Run independent review: give a second reviewer the retained record without private context. Compare chronology, evidence classification, authority boundary, and next action; preserve disagreements for owner resolution.",
      "State limitations and refresh triggers: report counts with denominators, exclusions, unresolved records, and gap concentration rather than outcome claims. Refresh after a system, role, policy, channel, or risk change and require owner acceptance before reuse."
    ],
    "findings": [
      "For chat identity verification, a closed ticket is weaker than a linked chain containing original wording, versioned evidence, authority decision, delivered message, acknowledgement, and residual work.",
      "Missing evidence in one verification attempt through fallback, owner decision, customer communication, and recovery must not be replaced by habit, a likely explanation, or a favorable outcome; doing so hides the process weakness the review should expose.",
      "Permission to coordinate does not imply permission to disclose, diagnose, credit, restrict, or make regulated judgments. The authority map must name identity owner, security lead, and accessibility owner.",
      "Adverse review should include wrong identity, stale answer, contradictory state, inaccessible source, late correction, privacy-sensitive content, and failed acknowledgement.",
      "A reproducible HCS-R-3 record retains original local time and field values beside normalized values so boundary cases remain reviewable.",
      "Pilot chat identity verification in a declared cohort, repair gaps, secure owner acceptance, test rollback, and refresh after any system, role, policy, or risk change."
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
    "finding": "Study design uses one bounded observation unit, ten evidence fields, seven adverse states, and one authority map; these are protocol counts, not performance claims.",
    "methodology": [
      "Define the observation unit: use one outage message version from approval through delivery, correction, and retirement. The protocol question is whether customer-facing statements remain aligned with the current incident scope, approved language, and next-update commitment. Record the entry and exit events before sampling begins.",
      "Declare the sample and exclusions: publish the cohort dates, channels, inclusion rule, and exclusions for one outage message version from approval through delivery, correction, and retirement. Keep ordinary, incomplete, corrected, urgent, inaccessible, and reopened cases visible as separate strata.",
      "Preserve the evidence hierarchy: retain original wording, actor, channel, local timestamp, case identity, system event, controlling answer or policy version, permission state, correction history, and consequence. Label observation, named report, inference, and decision separately.",
      "Reconstruct the chronology: order every event in one outage message version from approval through delivery, correction, and retirement without filling gaps from memory. Preserve original local values beside normalized values and flag conflicts instead of choosing the convenient record.",
      "Design adverse controls: test missing identity, stale guidance, contradictory state, inaccessible evidence, late correction, privacy-sensitive content, and failed acknowledgement. Record which control caught each seeded condition.",
      "Code authority transitions: mark the moment work passes between coordinator and decision owner. Incident commander and communications owner retain consequential authority; preparation or routing permission does not expand that authority.",
      "Measure customer acknowledgement: distinguish message delivery from customer receipt and from resolution. Record the approved message, channel result, acknowledgement evidence, open questions, and residual work.",
      "Audit privacy and minimization: collect only fields needed to answer HCS-R-4. Restrict reviewer access, redact exported examples, document retention, and log any exception to the minimum-necessary rule.",
      "Run independent review: give a second reviewer the retained record without private context. Compare chronology, evidence classification, authority boundary, and next action; preserve disagreements for owner resolution.",
      "State limitations and refresh triggers: report counts with denominators, exclusions, unresolved records, and gap concentration rather than outcome claims. Refresh after a system, role, policy, channel, or risk change and require owner acceptance before reuse."
    ],
    "findings": [
      "For outage message freshness, a closed ticket is weaker than a linked chain containing original wording, versioned evidence, authority decision, delivered message, acknowledgement, and residual work.",
      "Missing evidence in one outage message version from approval through delivery, correction, and retirement must not be replaced by habit, a likely explanation, or a favorable outcome; doing so hides the process weakness the review should expose.",
      "Permission to coordinate does not imply permission to disclose, diagnose, credit, restrict, or make regulated judgments. The authority map must name incident commander and communications owner.",
      "Adverse review should include wrong identity, stale answer, contradictory state, inaccessible source, late correction, privacy-sensitive content, and failed acknowledgement.",
      "A reproducible HCS-R-4 record retains original local time and field values beside normalized values so boundary cases remain reviewable.",
      "Pilot outage message freshness in a declared cohort, repair gaps, secure owner acceptance, test rollback, and refresh after any system, role, policy, or risk change."
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
    "finding": "Study design uses one bounded observation unit, ten evidence fields, seven adverse states, and one authority map; these are protocol counts, not performance claims.",
    "methodology": [
      "Define the observation unit: use one refund request from customer wording through approval, processor event, notice, and reconciliation. The protocol question is whether purchase identity, policy version, exception rationale, authority, and settlement state remain linked without asking chat agents to approve refunds. Record the entry and exit events before sampling begins.",
      "Declare the sample and exclusions: publish the cohort dates, channels, inclusion rule, and exclusions for one refund request from customer wording through approval, processor event, notice, and reconciliation. Keep ordinary, incomplete, corrected, urgent, inaccessible, and reopened cases visible as separate strata.",
      "Preserve the evidence hierarchy: retain original wording, actor, channel, local timestamp, case identity, system event, controlling answer or policy version, permission state, correction history, and consequence. Label observation, named report, inference, and decision separately.",
      "Reconstruct the chronology: order every event in one refund request from customer wording through approval, processor event, notice, and reconciliation without filling gaps from memory. Preserve original local values beside normalized values and flag conflicts instead of choosing the convenient record.",
      "Design adverse controls: test missing identity, stale guidance, contradictory state, inaccessible evidence, late correction, privacy-sensitive content, and failed acknowledgement. Record which control caught each seeded condition.",
      "Code authority transitions: mark the moment work passes between coordinator and decision owner. Finance approver and support policy owner retain consequential authority; preparation or routing permission does not expand that authority.",
      "Measure customer acknowledgement: distinguish message delivery from customer receipt and from resolution. Record the approved message, channel result, acknowledgement evidence, open questions, and residual work.",
      "Audit privacy and minimization: collect only fields needed to answer HCS-R-5. Restrict reviewer access, redact exported examples, document retention, and log any exception to the minimum-necessary rule.",
      "Run independent review: give a second reviewer the retained record without private context. Compare chronology, evidence classification, authority boundary, and next action; preserve disagreements for owner resolution.",
      "State limitations and refresh triggers: report counts with denominators, exclusions, unresolved records, and gap concentration rather than outcome claims. Refresh after a system, role, policy, channel, or risk change and require owner acceptance before reuse."
    ],
    "findings": [
      "For refund chat evidence, a closed ticket is weaker than a linked chain containing original wording, versioned evidence, authority decision, delivered message, acknowledgement, and residual work.",
      "Missing evidence in one refund request from customer wording through approval, processor event, notice, and reconciliation must not be replaced by habit, a likely explanation, or a favorable outcome; doing so hides the process weakness the review should expose.",
      "Permission to coordinate does not imply permission to disclose, diagnose, credit, restrict, or make regulated judgments. The authority map must name finance approver and support policy owner.",
      "Adverse review should include wrong identity, stale answer, contradictory state, inaccessible source, late correction, privacy-sensitive content, and failed acknowledgement.",
      "A reproducible HCS-R-5 record retains original local time and field values beside normalized values so boundary cases remain reviewable.",
      "Pilot refund chat evidence in a declared cohort, repair gaps, secure owner acceptance, test rollback, and refresh after any system, role, policy, or risk change."
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
