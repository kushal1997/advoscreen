export const tabs = [
  { id: "caseDesc", label: "Case Desc" },
  { id: "actsLaws", label: "Acts & Laws" },
  { id: "judgement", label: "Judgement" },
  { id: "templates", label: "Templates" },
  { id: "questions", label: "Questions" },
  { id: "support", label: "Support" },
];

export const questions = [
  {
    id: 1,
    tab: "questions",
    type: "petitioner",
    question:
      "Was the dog on a leash or under the control of the owner at the time of the incident?",
    reason:
      "This question aims to establish whether the owner was negligent in controlling the dog, which is crucial for proving liability.",
  },
  {
    id: 2,
    tab: "questions",
    type: "petitioner",
    question:
      "Did the dog show any signs of aggression or previous violent behaviour before the incident",
    reason:
      "This question is important to demonstrate the owner's knowledge of the dog's aggressive tendencies, which can support the claim of negligence",
  },
  {
    id: 3,
    tab: "questions",
    type: "petitioner",
    question:
      "Were there any warning signs or notices indicating the presence of a dangerous dog on the owner's property?",
    reason:
      "This question seeks to determine if the owner took reasonable precautions to warn others about the potential danger posed by the dog",
  },
  {
    id: 4,
    tab: "questions",
    type: "petitioner",
    question:
      "Has the dog been involved in similar incidents of biting or aggression in the past?",
    reason:
      "This question is relevant to establish a pattern of behaviour and the owner's awareness of the dog's propensity for aggression",
  },
  {
    id: 5,
    tab: "questions",
    type: "petitioner",
    question:
      "Did the owner take immediate steps to assist or provide medical aid to the victim after the dog bite incident?",
    reason:
      "This question addresses the owner's duty of care and responsibility towards the victim following the incident",
  },
  {
    id: 6,
    tab: "questions",
    type: "petitioner",
    question:
      "Can you provide any evidence of communication or interaction with the owner regarding the dog's behaviour prior to the incident?",
    reason: "",
  },
];

export const sections = [
  {
    title: "Pre litigation",
    items: [
      {
        label: "Legal Notice",
        description:
          "Notifies the opposing party of the dispute and demands resolution.",
        checked: true,
      },
      {
        label: "Reply to Legal Notice",
        description:
          "A response to a legal notice received from the opposing party.",
        checked: true,
      },
    ],
  },
  {
    title: "Litigation",
    items: [
      {
        label: "Plaint/Complaint",
        description: "Initiates the lawsuit, detailing the plaintiff's claims.",
        checked: false,
      },
      {
        label: "Vakalatnama",
        description: "Authorizes a lawyer to represent the client in court.",
        checked: false,
      },
      {
        label: "Written Statement/Answer",
        description: "The defendant's formal response to the plaint.",
        checked: false,
      },
      {
        label: "Reply to Written Statement",
        description:
          "Addresses points raised in the defendant's written statement.",
        checked: false,
      },
    ],
  },
  {
    title: "Interlocutory Applications",
    items: [
      {
        label: "Application for Temporary Injunction",
        description:
          "Seeks immediate court intervention to preserve status quo.",
        checked: false,
      },
      {
        label: "Counter-Affidavit to Opposition's Application",
        description:
          "Responds to interlocutory applications from the opposing party.",
        checked: false,
      },
    ],
  },
];

export const steps = [
  { label: "Start", checked: true },
  { label: "Continue", checked: true },
  { label: "Analysis", checked: true },
  { label: "Additional Documents", checked: false },
  { label: "Relief", checked: false },
  { label: "Suggestions", checked: false },
  { label: "First Draft", checked: false },
  { label: "Q&A", checked: false },
  { label: "Final Draft", checked: false },
];
