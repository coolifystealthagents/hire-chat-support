import type { ResearchPost } from './types';

export const october27ResearchPosts: ResearchPost[] = [
  {
    "slug": "hirechatsupport-concurrency-capacity-study-3",
    "title": "Chat Concurrency and Response Quality: A Pilot Protocol",
    "summary": "A repeatable design for testing whether a higher concurrent-chat cap improves throughput without degrading replies.",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-27",
    "finding": "Throughput gains from higher concurrency are only meaningful when paired with response-gap, repeat-contact, and quality-sample evidence from a comparable control group.",
    "image": "/october-27/hirechatsupport-concurrency-capacity-study-3.svg",
    "methodology": [
      "Select one channel, one queue, and one shift with stable volume. Split agents into a pilot group and a comparison group matched on tenure, skill, and schedule.",
      "Record a two-week baseline of arrivals, handle time, concurrent chats, first response, agent response gaps, transfers, and quality-sample results for both groups.",
      "Change only the concurrency cap for the pilot group. Keep routing, macros, staffing, and quality criteria unchanged during the test window.",
      "Pull conversation-level timestamps, not only queue averages. Calculate the time between a customer follow-up and the next agent message for chats above and below the old cap.",
      "Sample transcripts from the highest-concurrency hour and score source accuracy, answer completeness, and escalation timing using the existing QA rubric.",
      "Compare the groups over at least two full weekly cycles, then decide whether to keep, adjust, or roll back the cap. Document the decision and the observed trade-offs."
    ],
    "findings": [
      "A faster first response can coexist with longer silent gaps later in the conversation.",
      "Repeat contacts within seventy-two hours are a useful check on whether speed reduced resolution quality.",
      "Volunteer pilot groups overstate the benefit because they are usually more experienced and more motivated.",
      "Queue-level averages can hide a severe tail in complex or sensitive conversations.",
      "The safe cap differs by skill and intent, so one number for the whole team is rarely justified.",
      "A rollback rule written before the test prevents a failed change from becoming permanent."
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor work hours",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "GOV.UK Service Manual: helping people to use your service",
        "publisher": "UK Government Digital Service",
        "url": "https://www.gov.uk/service-manual/helping-people-to-use-your-service",
        "checkedAt": "2026-10-27"
      }
    ]
  },
  {
    "slug": "hirechatsupport-macro-drift-brief-3",
    "title": "Macro Drift: A Review Protocol for Canned Chat Answers",
    "summary": "A source-comparison method for finding canned responses that no longer match policy, price, or product behavior.",
    "cluster": "Knowledge systems",
    "publishedAt": "2026-10-27",
    "finding": "Macro drift is best detected by comparing the live snippet with the current governing source and with real correction behavior, not by counting how often the macro is used.",
    "image": "/october-27/hirechatsupport-macro-drift-brief-3.svg",
    "methodology": [
      "Export the active macro library with owner, last approval date, linked source, channels, and current usage count.",
      "Stratify by risk: money, access, safety, eligibility, and navigation. Sample all high-risk macros and a random subset of the rest.",
      "Open the governing policy or product page as of the review date and compare amounts, dates, eligibility language, links, and process names line by line.",
      "Review conversations where each sampled macro was used and count corrections, follow-up questions, and transfers within the same contact.",
      "Classify each finding as content outdated, policy changed, product behavior changed, or tool rendering broken, and assign the matching owner.",
      "Retest the repaired macro with two agents in a sandbox, then verify the live version on each shift before closing the finding."
    ],
    "findings": [
      "A current-looking macro can still be wrong because the linked policy changed underneath it.",
      "Usage frequency measures demand, not correctness; a popular macro can be the largest source of repeated errors.",
      "Correction and follow-up rates are stronger drift signals than a general satisfaction score.",
      "Link rot is a macro defect even when the surrounding text remains accurate.",
      "Multiple copies of the same macro across tools create version ambiguity that training cannot resolve.",
      "The repair owner differs for content, policy, product behavior, and rendering failures."
    ],
    "sources": [
      {
        "label": "ISO 30401 knowledge management systems",
        "publisher": "International Organization for Standardization",
        "url": "https://www.iso.org/standard/68683.html",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "GOV.UK Service Manual: helping people to use your service",
        "publisher": "UK Government Digital Service",
        "url": "https://www.gov.uk/service-manual/helping-people-to-use-your-service",
        "checkedAt": "2026-10-27"
      }
    ]
  },
  {
    "slug": "hirechatsupport-redaction-spot-check-review-3",
    "title": "Transcript Redaction: A Spot-Check Review Protocol",
    "summary": "A sampling method for verifying that card data, account numbers, and other sensitive details are actually removed.",
    "cluster": "Knowledge systems",
    "publishedAt": "2026-10-27",
    "finding": "Redaction settings are not evidence; a transcript-level check across text, attachments, and unredacted copies is required to show that sensitive data was removed.",
    "image": "/october-27/hirechatsupport-redaction-spot-check-review-3.svg",
    "methodology": [
      "List the sensitive data classes and their patterns, including payment cards, bank accounts, government identifiers, health data, and authentication secrets.",
      "Draw a sample across channels, queues, shifts, attachments, transfers, and bot sessions. Record the query date, filters, and exclusions.",
      "Open each record and search for the patterns in the text, metadata, and attachments. Check the original copy as well as the redacted view when both exist.",
      "Record the data class, location, source, and whether the exposure was agent-supplied, customer-supplied, or tool-generated.",
      "Confirm who can access unredacted records and whether access is time-bound to the investigation or role.",
      "Group findings by cause and assign a source fix, then retest the same sample frame after the repair."
    ],
    "findings": [
      "Attachment and screenshot paths often bypass text-only redaction rules.",
      "Pasted customer text can carry formatting that defeats a simple pattern match.",
      "An enabled setting does not prove that a specific record was cleaned.",
      "Access to the original record is part of the exposure even when the redacted view is correct.",
      "Recurring leaks from one macro or integration need a source repair rather than repeated training.",
      "A post-repair sample must use the same frame to show whether the exposure rate actually changed."
    ],
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "PCI Security Standards Council",
        "publisher": "PCI SSC",
        "url": "https://www.pcisecuritystandards.org/standards/pci-dss/",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "FTC data security guidance",
        "publisher": "Federal Trade Commission",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security",
        "checkedAt": "2026-10-27"
      }
    ]
  },
  {
    "slug": "hirechatsupport-csat-nonresponse-study-3",
    "title": "CSAT Nonresponse in Chat: A Reporting Protocol",
    "summary": "A method for describing satisfaction results when most customers do not answer the survey.",
    "cluster": "Role design",
    "publishedAt": "2026-10-27",
    "finding": "A chat satisfaction average without its response rate and eligible population is a directional anecdote, especially when respondents differ systematically from the customers who never answered.",
    "image": "/october-27/hirechatsupport-csat-nonresponse-study-3.svg",
    "methodology": [
      "Define the eligible population as customers who received an invitation after a qualifying chat, not all chats in the period.",
      "Record invitations sent, responses received, question wording, scale, channel, and the date range. Calculate the response rate before reporting any average.",
      "Compare respondents with the eligible population on issue type, channel, shift, resolution status, and repeat contact.",
      "Report the distribution and the count, not only the mean. Use a range or a directional label for small groups.",
      "Pair the survey result with operational signals such as reopen rate, transfers, and time to resolution.",
      "Tag open-text comments by cause and route each theme to an owner with a follow-up date."
    ],
    "findings": [
      "Response rate is part of the result, not a footnote.",
      "Customers with simple, resolved chats are more likely to answer than customers who left frustrated.",
      "Small agent-level samples swing widely and should not determine a ranking.",
      "A stable average can hide a rising repeat-contact problem in a low-response queue.",
      "Changing the question or the scale mid-period breaks comparability.",
      "Open-text themes are often more actionable than a fractional change in the average."
    ],
    "sources": [
      {
        "label": "AAPOR standards and ethics",
        "publisher": "American Association for Public Opinion Research",
        "url": "https://aapor.org/standards-and-ethics/",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "GOV.UK Service Manual: helping people to use your service",
        "publisher": "UK Government Digital Service",
        "url": "https://www.gov.uk/service-manual/helping-people-to-use-your-service",
        "checkedAt": "2026-10-27"
      }
    ]
  },
  {
    "slug": "hirechatsupport-surge-roster-brief-3",
    "title": "Peak-Season Chat Staffing: A Surge Roster Protocol",
    "summary": "A planning method that compares hourly demand with productive capacity, training depth, and rest requirements.",
    "cluster": "Chat operations",
    "publishedAt": "2026-10-27",
    "finding": "Surge coverage fails most often at the hourly peak and at the skill bottleneck, not in the weekly headcount total.",
    "image": "/october-27/hirechatsupport-surge-roster-brief-3.svg",
    "methodology": [
      "Export prior-season arrivals by hour and contact type, then adjust for known promotions, launches, and shipping cut-offs.",
      "Estimate the share handled by self-service and bots using last season's observed containment, and label the estimate as uncertain.",
      "Convert remaining contacts into productive agent hours using handle time by skill, then subtract breaks, meals, handovers, and training.",
      "Map qualified depth for the three most constrained skills and identify queues with a single trained owner.",
      "Check local rest rules and contract terms before scheduling overtime, and record volunteer approvals.",
      "Compare forecast with actual by hour after the season, and update the model with the observed gaps."
    ],
    "findings": [
      "A daily or weekly headcount total can look adequate while the hourly peak is understaffed.",
      "Self-service containment reduces volume only for the intents it actually covers.",
      "Skill depth matters more than seat count when one queue has a single qualified owner.",
      "Breaks and handovers are capacity reductions and should be modeled explicitly.",
      "Temporary agents need scoped access and inclusion in quality sampling from the first week.",
      "The after-action comparison is the input that improves the next season's forecast."
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor work hours",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "GOV.UK Service Manual: helping people to use your service",
        "publisher": "UK Government Digital Service",
        "url": "https://www.gov.uk/service-manual/helping-people-to-use-your-service",
        "checkedAt": "2026-10-27"
      },
      {
        "label": "NIST Privacy Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework",
        "checkedAt": "2026-10-27"
      }
    ]
  }
];
