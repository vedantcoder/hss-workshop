export type Speaker = {
  name: string;
  designation: string;
  institution: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
};

export type ScheduleDay = {
  dayLabel: string;
  date: string;
  title: string;
  highlight?: string;
  items: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const content = {
  seo: {
    title: "Research Workshop: Mapping the Progressive Writers’ Movement",
    description:
      "A focused workshop aimed at creating a research cluster to map the Progressive Writers’ Movement. Part of a 3-day symposium on doing research (26–28 February) at BITS Pilani, Hyderabad Campus.",
    openGraph: {
      type: "website" as const,
      title: "Research Workshop: Mapping the Progressive Writers’ Movement",
      description:
        "Workshop on 28 February at BITS Pilani, Hyderabad Campus. Part of a 3-day symposium on doing research.",
    },
  },

  ui: {
    skipToContent: "Skip to content",
    primaryNavAria: "Primary navigation",
    mobileNavAria: "Mobile navigation",
    scrollToTopAria: "Scroll to top",
    openMenuAria: "Open menu",
    closeMenuAria: "Close menu",
    registerNewTabAria: "Register (opens in a new tab)",

    loadingForm: "Loading form…",
    loadingFormAria: "Loading registration form",
    loadingMap: "Loading map…",
    loadingMapAria: "Loading map",

    footerContactTitle: "Contact",
    footerInstitutionTitle: "Institution",
    footerQuickLinksTitle: "Quick links",
    applicationEmailLabel: "Email:",
  },

  nav: {
    brand: "Research Workshop",
    logo: {
      src: "/images/bits-logo.png",
      alt: "BITS Pilani, Hyderabad Campus logo",
    },
    items: [
      { label: "About", href: "#about" },
      { label: "Speakers", href: "#speakers" },
      { label: "Schedule", href: "#schedule" },
      { label: "Participation", href: "#participation" },
      { label: "Venue", href: "#venue" },
      { label: "FAQ", href: "#faq" },
      { label: "Register", href: "#register" },
    ],
    registerButton: {
      label: "Register",
      href: "https://forms.gle/W8xs2FeUwd8x8o1h8",
    },
  },

  hero: {
    kicker: "Research Workshop",
    primaryCta: {
      label: "Register Now",
      ariaLabel: "Register now (opens in a new tab)",
    },
    secondaryCta: {
      label: "View Details",
      ariaLabel: "View details",
    },
    symposiumNote:
      "Part of a three-day symposium on doing research (26–28 February).",
    infoLabels: {
      date: "Date",
      venue: "Venue",
    },
    motifAlt: "Abstract academic motif",
  },

  event: {
    title: "Research Workshop: Mapping the Progressive Writers’ Movement",
    subtitle: "3-day Symposium on Doing Research",
    date: "28 February",
    location: {
      line1: "BITS Pilani, Hyderabad Campus",
      line2: "",
    },
    shortDescription:
      "A focused workshop aimed at creating a research cluster to map the Progressive Writers’ Movement across languages, regions, and archives.",
    detailedDescription:
      "A focused workshop aimed at creating a research cluster to map the Progressive Writers’ Movement will be held at the Department of Humanities and Social Sciences, BITS Pilani, Hyderabad Campus, on 28 February. The workshop seeks to bring together scholars from diverse linguistic and regional backgrounds across South Asia to foster long-term collaboration leading to sustained and varied research outputs. Participants will collectively explore methods, archival resources, and collaborative frameworks for studying the Progressive Writers’ Movement in their own regional milieu and across languages and regions.",
    ledBy:
      "The workshop will be led by Judhajit Sarkar (Assistant Professor, Heidelberg University) and Tony Sebastian, PhD (Assistant Professor, BITS Pilani, Hyderabad Campus).",
    partOfSymposiumNote:
      "This workshop forms part of a three-day Symposium on Doing Research.",
    symposiumDays: [
      { date: "26 February", label: "Symposium Day 1" },
      { date: "27 February", label: "Symposium Day 2" },
      { date: "28 February", label: "Workshop Day" },
    ],
  },

  about: {
    heading: "About the workshop",
    body: [
      "A focused workshop aimed at creating a research cluster to map the Progressive Writers’ Movement will be held at the Department of Humanities and Social Sciences, BITS Pilani, Hyderabad Campus, on 28 February.",
      "The workshop seeks to bring together scholars from diverse linguistic and regional backgrounds across South Asia to foster long-term collaboration leading to sustained and varied research outputs.",
      "Participants will collectively explore methods, archival resources, and collaborative frameworks for studying the Progressive Writers’ Movement in their own regional milieu and across languages and regions.",
      "The workshop will be led by Judhajit Sarkar (Assistant Professor, Heidelberg University) and Tony Sebastian, PhD (Assistant Professor, BITS Pilani, Hyderabad Campus).",
      "This workshop forms part of a three-day Symposium on Doing Research (26–28 February).",
    ],
  },

  speakers: {
    heading: "Speakers",
    people: [
      {
        name: "Judhajit Sarkar",
        designation: "Assistant Professor",
        institution: "Heidelberg University",
        role: "Speaker",
        image: {
          src: "/images/speaker-placeholder.svg",
          alt: "Portrait placeholder for Judhajit Sarkar",
        },
      },
      {
        name: "Tony Sebastian, PhD",
        designation: "Assistant Professor",
        institution: "BITS Pilani, Hyderabad Campus",
        role: "Workshop lead",
        image: {
          src: "/images/speaker-placeholder.svg",
          alt: "Portrait placeholder for Tony Sebastian",
        },
      },
      {
        name: "P. P. Raveendran",
        designation: "Professor (Retd.)",
        institution: "School of Letters, Mahatma Gandhi University",
        role: "Plenary lecture (post-workshop)",
        image: {
          src: "/images/speaker-placeholder.svg",
          alt: "Portrait placeholder for P. P. Raveendran",
        },
      },
      {
        name: "Ipshita Chanda",
        designation: "Professor",
        institution: "Comparative Literature and India Studies, EFLU Hyderabad",
        role: "Valedictory address (symposium conclusion)",
        image: {
          src: "/images/speaker-placeholder.svg",
          alt: "Portrait placeholder for Ipshita Chanda",
        },
      },
    ] satisfies Speaker[],
  },

  schedule: {
    heading: "Workshop schedule / agenda",
    subheading: "Programme highlights for the workshop on 28 February.",
    note: "A detailed programme will be shared with registered participants.",
    days: [
      {
        dayLabel: "Workshop",
        date: "28 February",
        title: "Research Workshop",
        highlight: "Workshop Day",
        items: [
          "Mapping the Progressive Writers’ Movement: methods and resources",
          "Collaborative frameworks for longer-term research outputs",
          "Online participation (for the workshop only, not the full symposium) may be considered based on the expression of interest",
          "The workshop will be followed by a plenary lecture by P. P. Raveendran (Professor (Retd.), School of Letters, Mahatma Gandhi University)",
          "The Valedictory Address concluding the three-day Symposium will be delivered by Ipshita Chanda (Professor, Comparative Literature and India Studies, EFLU Hyderabad)",
        ],
      },
    ] satisfies ScheduleDay[],
  },

  participation: {
    heading: "Participation details",
    items: [
      "Registration is free of charge.",
      "Hospitality: Limited accommodation (first-come, first-served) for participants travelling from outside Hyderabad.",
      "Working lunches will be provided on all three days of the Symposium.",
      "Online participation (for the workshop only, not the full symposium) may be considered based on the expression of interest.",
      "Registration is mandatory for issue of participation certificates.",
    ],
  },

  application: {
    heading: "Application process",
    email: "tony.sebastian@hyderabad.bits-pilani.ac.in",
    steps: [
      {
        title: "Step 1 — Register using the form",
        description:
          "Complete the registration using the form linked on this page.",
      },
      {
        title: "Step 2 — Email two short notes",
        description: "Once registered, please email the following items:",
        bullets: [
          "A 150-word bio",
          "A 150-word note outlining the strengths you will bring to the research cluster (for example: familiarity with specific corpora, archival access, linguistic expertise, or other relevant information)",
        ],
      },
    ],
  },

  registration: {
    heading: "Register",
    formUrl: "https://forms.gle/W8xs2FeUwd8x8o1h8",
    openButtonLabel: "Open Registration Form",
    embedTitle: "Registration form",
    description:
      "Free registration. Please use the form below or open it in a new tab.",
    embedFallback:
      "If the embedded form does not load in your browser, use “Open Registration Form”.",
    formWhatItAsks: {
      heading: "What the registration form asks for",
      formTitle: "State of Arts — Three-day symposium on doing research",
      items: [
        "Email address",
        "Name and affiliation",
        "Which day(s) you will attend (Day 1, Day 2, Day 3, combinations, or all three days)",
        "If attending Day 2, your preference for the parallel session",
        "Dietary preference",
        "If you are an outstation PhD scholar and require accommodation, the dates you require accommodation",
      ],
    },
  },

  venue: {
    heading: "Venue",
    venueName: "BITS Pilani, Hyderabad Campus",
    venueUnit: "",
    mapQuery: "BITS Pilani Hyderabad Campus",
    openMapsLabel: "Open in Google Maps",
    openMapsAria: "Open venue location in Google Maps (new tab)",
    mapTitle: "Venue map",
  },

  faq: {
    heading: "FAQ",
    items: [
      {
        question: "Who can apply?",
        answer:
          "The symposium and workshop are open to interested researchers and scholars. Registration is required.",
      },
      {
        question: "Is there a fee?",
        answer: "No. Registration is free.",
      },
      {
        question: "Is accommodation available?",
        answer:
          "Limited accommodation is available for outstation PhD scholars on a first-come, first-served basis.",
      },
      {
        question: "Can I attend online?",
        answer:
          "Online participation is possible for the workshop (Day 3), based on an expression of interest.",
      },
      {
        question: "Will I get a certificate?",
        answer: "Certificates are issued only to registered participants.",
      },
    ] satisfies FaqItem[],
  },

  footer: {
    institution: "BITS Pilani, Hyderabad Campus",
    quickLinks: [
      { label: "About", href: "#about" },
      { label: "Speakers", href: "#speakers" },
      { label: "Schedule", href: "#schedule" },
      { label: "Participation", href: "#participation" },
      { label: "Venue", href: "#venue" },
      { label: "FAQ", href: "#faq" },
      { label: "Register", href: "#register" },
    ],
  },
} as const;
