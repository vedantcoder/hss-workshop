export type Speaker = {
  name: string;
  designation: string;
  institution: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  profileUrl?: string;
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
    loadingFlyer: "Loading flyer…",
    loadingFlyerAria: "Loading event flyer",
    loadingMap: "Loading map…",
    loadingMapAria: "Loading map",

    footerContactTitle: "Contact",
    footerInstitutionTitle: "Institution",
    footerQuickLinksTitle: "Quick links",
    applicationEmailLabel: "Email:",
  },

  nav: {
    brand: "Research Workshop",
    brandSubtitle1: "Department of Humanities and Social Sciences",
    brandSubtitle2: "BITS Pilani, Hyderabad Campus",
    logo: {
      src: "/images/bits-logo.png",
      alt: "BITS Pilani, Hyderabad Campus logo",
    },
    items: [
      { label: "Symposium", href: "#symposium" },
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
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfjgxVQmeXg9SB_fKZXb-3DZ04dtgaF06YDIeWh96zHk5e8xA/viewform",
    },
  },

  hero: {
    kicker: "Research Workshop",
    primaryCta: {
      label: "Register for Workshop",
      ariaLabel: "Register for the Workshop",
    },
    secondaryCta: {
      label: "Register for Symposium",
      ariaLabel: "Register for the Symposium (opens in a new tab)",
    },
    symposiumNote:
      "Part of a three-day Symposium on Doing Research (26\u201328 February).",
    infoLabels: {
      date: "Date",
      venue: "Venue",
    },
    motifAlt: "Abstract academic motif",
  },

  event: {
    title: "Research Workshop: Mapping the Progressive Writers’ Movement",
    subtitle: "3-day Symposium on Doing Research",
    date: "Day 3: 28 February 2026",
    location: {
      line1: "BITS Pilani, Hyderabad Campus",
      line2: "",
    },
    shortDescription:
      "A focused workshop that aims to create a research cluster to map the Progressive Writers\u2019 Movement across languages, regions, and archives",
    detailedDescription:
      "A focused workshop aimed at creating a research cluster to map the Progressive Writers’ Movement will be held at the Department of Humanities and Social Sciences, BITS Pilani, Hyderabad Campus, on 28 February. The workshop seeks to bring together scholars from diverse linguistic and regional backgrounds across South Asia to foster long-term collaboration leading to sustained and varied research outputs. Participants will collectively explore methods, archival resources, and collaborative frameworks for studying the Progressive Writers’ Movement in their own regional milieu and across languages and regions.",
    ledBy:
      "The workshop will be led by Tony Sebastian (Assistant Professor, BITS Pilani, Hyderabad Campus) and Judhajit Sarkar (Assistant Professor, Heidelberg University).",
    partOfSymposiumNote:
      "This workshop forms part of a three-day Symposium on Doing Research.",
    symposiumDays: [
      { date: "26 February", label: "Symposium Day 1" },
      { date: "27 February", label: "Symposium Day 2" },
      { date: "28 February", label: "Workshop Day" },
    ],
  },

  symposium: {
    heading: "About the Symposium",
    body: [
      "The three-day Symposium on Doing Research (26\u201328 February 2026) brings together researchers and scholars to reflect on research methodologies, archival practices, and collaborative frameworks across disciplines.",
      "The symposium includes panel discussions, special lectures, and the Research Workshop on Day 3 (28 February), focused on mapping the Progressive Writers\u2019 Movement across South Asia.",
      "The Valedictory Address will be delivered by Ipshita Chanda (Professor, Comparative Literature and India Studies, EFLU Hyderabad). A plenary lecture will be delivered by P. P. Raveendran (Professor (Retd.), School of Letters, Mahatma Gandhi University).",
    ],
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfjgxVQmeXg9SB_fKZXb-3DZ04dtgaF06YDIeWh96zHk5e8xA/viewform",
    registerButtonLabel: "Register for Symposium",
    registerButtonAria: "Register for the Symposium (opens in a new tab)",
    flyerUrl: "/flyer.pdf",
    flyerEmbedTitle: "Symposium flyer / programme",
    flyerOpenLabel: "Open Flyer",
    flyerOpenAria: "Open symposium flyer in a new tab",
  },

  about: {
    heading: "About the workshop",
    body: [
      "This workshop aims to create a research cluster to map the Progressive Writers\u2019 Movement. It will be held at the Department of Humanities and Social Sciences, BITS Pilani, Hyderabad Campus, on 28 February 2026.",
      "The workshop seeks to bring together scholars from diverse linguistic and regional backgrounds across South Asia to foster long-term collaboration leading to sustained and varied research outputs.",
      "Participants will collectively explore methods, archival resources, and collaborative frameworks for studying the Progressive Writers\u2019 Movement in their own regional milieu and across languages and regions.",
      "The workshop will be led by Tony Sebastian (Assistant Professor, BITS Pilani, Hyderabad Campus) and Judhajit Sarkar (Assistant Professor, Heidelberg University).",
    ],
  },

  speakers: {
    heading: "Speakers",
    people: [
      {
        name: "Tony Sebastian",
        designation: "Assistant Professor",
        institution: "BITS Pilani, Hyderabad Campus",
        role: "Workshop lead",
        image: {
          src: "/images/speaker-2.jpeg",
          alt: "Portrait of Tony Sebastian",
        },
        profileUrl: "https://www.bits-pilani.ac.in/hyderabad/tony-sebastian/",
      },
      {
        name: "Judhajit Sarkar",
        designation: "Assistant Professor",
        institution: "Heidelberg University",
        role: "Speaker",
        image: {
          src: "/images/speaker-1.jpeg",
          alt: "Portrait of Judhajit Sarkar",
        },
        profileUrl:
          "https://www.sai.uni-heidelberg.de/en/departments-and-branches/modern-south-asian-languages-and-literatures/team/judhajit-sarkar-ma",
      },
      {
        name: "P. P. Raveendran",
        designation: "Professor (Retd.)",
        institution: "School of Letters, Mahatma Gandhi University",
        role: "Plenary lecture (post-workshop)",
        image: {
          src: "/images/speaker-3.jpeg",
          alt: "Portrait of P. P. Raveendran",
        },
        profileUrl: "https://sol.mgu.ac.in/dr-p-p-raveendran/",
      },
      {
        name: "Ipshita Chanda",
        designation: "Professor",
        institution: "Comparative Literature and India Studies, EFLU Hyderabad",
        role: "Valedictory address (symposium conclusion)",
        image: {
          src: "/images/speaker-4.jpeg",
          alt: "Portrait of Ipshita Chanda",
        },
        profileUrl: "https://www.efluniversity.ac.in/Prof.IpshitaChanda.php",
      },
    ] satisfies Speaker[],
  },

  schedule: {
    heading: "Workshop schedule",
    days: [
      {
        dayLabel: "Workshop",
        date: "28 February",
        title: "Research Workshop",
        highlight: "Workshop Day",
        items: [
          "Pre-workshop Plenary Lecture \u2014 Judhajit Sarkar (Assistant Professor, Heidelberg University)",
          "Workshop Session: Mapping the Progressive Writers\u2019 Movement \u2014 Methods and Resources",
          "Post-Workshop Plenary Lecture \u2014 P. P. Raveendran (Professor (Retd.), School of Letters, Mahatma Gandhi University)",
          "Valedictory Address concluding the three-day Symposium \u2014 Ipshita Chanda (Professor, Comparative Literature and India Studies, EFLU Hyderabad)",
        ],
      },
    ] satisfies ScheduleDay[],
  },

  participation: {
    heading: "Participation details",
    items: [
      "Registration is free of charge.",
      "The workshop follows a hybrid format — both in-person and online participation are available.",
      "Working lunches will be provided on all three days of the Symposium.",
      "Registration is mandatory for issue of participation certificates.",
    ],
  },

  application: {
    heading: "Application process",
    email: "progressivewriter26@gmail.com",
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
    heading: "Register for the Workshop",
    formUrl: "https://forms.gle/x9sNRUtWQfedyfGU9",
    workshopFormUrl: "https://forms.gle/x9sNRUtWQfedyfGU9",
    openButtonLabel: "Open Registration Form",
    embedTitle: "Workshop registration form",
    description:
      "Free registration. Please use the form below or open it in a new tab.",
    embedFallback:
      "If the embedded form does not load in your browser, use \u201cOpen Registration Form\u201d.",
    formWhatItAsks: {
      heading: "What the registration form asks for",
      formTitle: "State of Arts \u2014 Three-day symposium on doing research",
      items: [
        "Email address",
        "Name and affiliation",
        "Which day(s) you will attend (Day 1, Day 2, Day 3, combinations, or all three days)",
        "If attending Day 2, your preference for the parallel session",
        "Dietary preference",
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
        question: "Can I attend online?",
        answer:
          "Online participation is available for the workshop (Day 3) only. Selected virtual participants will be notified in advance with the Google Meet link.",
      },
      {
        question: "Will I get a certificate?",
        answer: "Certificates are issued only to registered participants.",
      },
      {
        question: "What is the registration deadline?",
        answer:
          "The deadline to register for the symposium (Days 1–3) is 22 February. Registration for the workshop (Day 3) is open until the day of the event.",
      },
      {
        question: "What is the aim of the workshop?",
        answer:
          "The workshop aims to build a multilingual research cluster to work on the Progressive Writers\u2019 Movement across languages, regions, and archives in South Asia.",
      },
    ] satisfies FaqItem[],
  },

  footer: {
    institution: "BITS Pilani, Hyderabad Campus",
    quickLinks: [
      { label: "Symposium", href: "#symposium" },
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
