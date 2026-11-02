import type { ResearchPost } from './types';

export const november02ResearchPosts: ResearchPost[] = [
  {
    "slug": "hcs02-lag",
    "title": "Chat First Response Lag",
    "summary": "A bounded record review for how long do chats wait for a human reply?",
    "cluster": "Chat Operations Research",
    "publishedAt": "2026-11-02",
    "image": "/november-02/hcs02-lag.jpg",
    "finding": "How long do chats wait for a human reply? The result is operational, not an industry rate.",
    "methodology": [
      "A frozen population, defined measures, a small sample, and a limitations section."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How long do chats wait for a human reply? The scope is the documented chat record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Chats in a month. The unit is one chat, handoff, callback, or escalation."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "First response and unresolved. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Lag clusters in billing chats. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A sample shows where the wait belongs; the numbers are illustrative."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ]
  },
  {
    "slug": "hcs02-drop",
    "title": "Chat Handoff Drop Rate",
    "summary": "A bounded record review for how often does a handoff lose the owner?",
    "cluster": "Chat Operations Research",
    "publishedAt": "2026-11-02",
    "image": "/november-02/hcs02-drop.jpg",
    "finding": "How often does a handoff lose the owner? The result is operational, not an industry rate.",
    "methodology": [
      "A frozen population, defined measures, a small sample, and a limitations section."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How often does a handoff lose the owner? The scope is the documented chat record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Handoffs in a quarter. The unit is one chat, handoff, callback, or escalation."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Owner, promise, completion. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Drops cluster without a named receiver. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A sample shows where the wait belongs; the numbers are illustrative."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ]
  },
  {
    "slug": "hcs02-defects",
    "title": "Chat Quality Defects",
    "summary": "A bounded record review for which defects appear in a sample?",
    "cluster": "Chat Operations Research",
    "publishedAt": "2026-11-02",
    "image": "/november-02/hcs02-defects.jpg",
    "finding": "Which defects appear in a sample? The result is operational, not an industry rate.",
    "methodology": [
      "A frozen population, defined measures, a small sample, and a limitations section."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Which defects appear in a sample? The scope is the documented chat record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Chats in a month. The unit is one chat, handoff, callback, or escalation."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Pass rule, defect, correction. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Samples select only short chats. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A sample shows where the wait belongs; the numbers are illustrative."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ]
  },
  {
    "slug": "hcs02-callback-rate",
    "title": "Chat Callback Completion",
    "summary": "A bounded record review for how many callbacks are completed?",
    "cluster": "Chat Operations Research",
    "publishedAt": "2026-11-02",
    "image": "/november-02/hcs02-callback-rate.jpg",
    "finding": "How many callbacks are completed? The result is operational, not an industry rate.",
    "methodology": [
      "A frozen population, defined measures, a small sample, and a limitations section."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How many callbacks are completed? The scope is the documented chat record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Callbacks in a month. The unit is one chat, handoff, callback, or escalation."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Promise, attempt, completion. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Callbacks fail when the promise is not stored. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A sample shows where the wait belongs; the numbers are illustrative."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ]
  },
  {
    "slug": "hcs02-escalation-facts",
    "title": "Escalation Completeness",
    "summary": "A bounded record review for which facts are missing in escalations?",
    "cluster": "Chat Operations Research",
    "publishedAt": "2026-11-02",
    "image": "/november-02/hcs02-escalation-facts.jpg",
    "finding": "Which facts are missing in escalations? The result is operational, not an industry rate.",
    "methodology": [
      "A frozen population, defined measures, a small sample, and a limitations section."
    ],
    "sources": [
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Federal Trade Commission",
        "url": "https://www.ftc.gov/"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Which facts are missing in escalations? The scope is the documented chat record in a defined window."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Escalations in a quarter. The unit is one chat, handoff, callback, or escalation."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Transcript, order, promise, owner. Freeze the window and evidence standard before sampling."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Missing order context is common. Record the reason, owner, and recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A sample shows where the wait belongs; the numbers are illustrative."
        ]
      },
      {
        "heading": "Operational use and limits",
        "paragraphs": [
          "Report unresolved items and limitations beside the finding."
        ]
      }
    ]
  }
];
