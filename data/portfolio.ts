import type React from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";

export type NavItem = {
  id: "home" | "about" | "projects" | "skills" | "experience" | "contact";
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type CTA = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  featured?: boolean;
  orbit: { angle: number; radius: number; size: "lg" | "md" | "sm" };
  links: {
    github: string;
    demo?: string;
  };
  meta?: {
    eyebrow?: string;
    cardNote?: string;
    thumbnail?: {
      src: string;
      alt: string;
    };
  };
};

export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  dates: string;
  bullets: string[];
  teachBeat?: boolean;
};

export type EducationItem = {
  school: string;
  program: string;
  location: string;
  dates: string;
  note: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type PortfolioData = {
  person: {
    name: string;
    headline: string;
    subheadline: string;
    description: string;
    badge: string;
    locationLine: string;
  };
  uiText: {
    navbar: { mobileTitle: string };
    about: {
      focusTitle: string;
      focusBody: string;
    };
    projects: {
      heading: string;
      subheading: string;
      codeLabel: string;
      liveLabel: string;
      selectHint: string;
      featuredLabel: string;
    };
    skills: {
      heading: string;
      subheading: string;
    };
    experience: {
      heading: string;
      subheading: string;
      teachLabel: string;
    };
    contact: {
      emailLabel: string;
      formTitle: string;
      fieldLabels: { name: string; email: string; message: string };
      placeholders: { name: string; email: string; message: string };
      submitLabel: string;
      sendingLabel: string;
      status: { success: string; error: string };
    };
  };
  nav: NavItem[];
  social: SocialLink[];
  heroCtas: CTA[];
  about: {
    heading: string;
    body: string;
    highlights: string[];
  };
  projects: {
    items: Project[];
    cardLinks: {
      githubLabel: string;
      demoLabel: string;
      icons: {
        github: React.ComponentType<{ className?: string }>;
        demo: React.ComponentType<{ className?: string }>;
      };
    };
  };
  skills: { categories: SkillCategory[] };
  experience: { items: ExperienceItem[] };
  education: { heading: string; item: EducationItem };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    links: SocialLink[];
  };
  footer: { note: string };
};

export const portfolio: PortfolioData = {
  person: {
    name: "Angad Singh",
    headline: "Angad Singh",
    subheadline: "Building systems that move—from smart gloves to AI products.",
    description:
      "Computer Science @ McMaster. I ship end-to-end software where hardware, real-time data, and AI meet real product constraints.",
    badge: "CS @ McMaster",
    locationLine: "Hamilton, ON · Open to internships",
  },

  uiText: {
    navbar: { mobileTitle: "Navigate" },
    about: {
      focusTitle: "Focus",
      focusBody: "AI apps, data workflows, cloud tooling, and full-stack systems.",
    },
    projects: {
      heading: "Selected work",
      subheading:
        "Tap a node in the constellation. Dextera sits at the center—everything else orbits the same builder instinct.",
      codeLabel: "Code",
      liveLabel: "Live",
      selectHint: "Select a project",
      featuredLabel: "Flagship",
    },
    skills: {
      heading: "Skills",
      subheading: "Tools I use to build and ship.",
    },
    experience: {
      heading: "Experience",
      subheading: "Roles where I shipped, led, and taught what I build.",
      teachLabel: "I teach what I build",
    },
    contact: {
      emailLabel: "Email",
      formTitle: "Send a message",
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        message: "Internship, collab, or something you’re building?",
      },
      submitLabel: "Send message",
      sendingLabel: "Sending…",
      status: {
        success: "Thanks — I’ll get back to you soon.",
        error: "Something went wrong. Please try again in a moment.",
      },
      fieldLabels: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
    },
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "projects", label: "Work" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],

  social: [
    { label: "GitHub", href: "https://github.com/angxd1", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/angad-singh23/",
      icon: Linkedin,
    },
    { label: "Email", href: "mailto:Singa401@mcmaster.ca", icon: Mail },
  ],

  heroCtas: [
    { label: "View work", href: "#projects", variant: "default" },
    { label: "Resume", href: "/resume.pdf", icon: FileText, variant: "outline" },
    {
      label: "GitHub",
      href: "https://github.com/angxd1",
      icon: Github,
      variant: "ghost",
    },
  ],

  about: {
    heading: "About",
    body: "I’m a Computer Science student at McMaster focused on useful, well-structured software. My work spans AI-assisted products, data tooling, hardware-backed systems, and cloud. I’m most interested when the hard part is turning an idea into a workflow that’s reliable and easy to use.",
    highlights: [
      "Build end-to-end: UI → APIs → data/storage → deployment",
      "Prefer simple designs with sharp UX and strong defaults",
      "Care about latency, failure modes, and observability",
      "Lead and teach through workshops, tutoring, and student communities",
    ],
  },

  projects: {
    items: [
      {
        title: "Dextera",
        tagline:
          "Real-time smart-glove platform for game-based stroke and hand-trauma rehab",
        description:
          "Streams live finger-motion data from an ESP32 smart glove into a clinician dashboard over WebSockets—turning post-stroke hand therapy into measurable, game-based recovery. Full stack from serial signal processing to rehab games and progress tracking.",
        stack: [
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "WebSockets",
          "ESP32",
          "MediaPipe",
          "R3F",
        ],
        highlights: [
          "Serial bridge: ESP32 ADC → calibrated bend percentages",
          "Live clinician dashboard with gesture classification",
          "R3F + MediaPipe games with Gemini patient summaries",
        ],
        featured: true,
        orbit: { angle: -90, radius: 0, size: "lg" },
        meta: {
          eyebrow: "Smart-glove rehabilitation",
          cardNote: "Real-time · hardware",
          thumbnail: {
            src: "/projects/dextera.png",
            alt: "Dextera — smart-glove rehabilitation platform",
          },
        },
        links: {
          github: "https://github.com/athravseruwam07/dextera",
        },
      },
      {
        title: "MemoLens",
        tagline: "Real-time assistive system for dementia care",
        description:
          "Supports patients and caregivers with live context, reminders, and item tracking. Full-stack pipeline from camera input → backend event processing → memory-style queries → WebSocket updates.",
        stack: [
          "FastAPI",
          "Next.js",
          "PostgreSQL",
          "Redis",
          "WebSockets",
          "Python",
          "Docker",
        ],
        highlights: [
          "Patient + caregiver flows around real-time context",
          "Item-state tracking and reminder logic",
          "Deployment checks, smoke tests, demo-rehearsal tooling",
        ],
        orbit: { angle: -20, radius: 1, size: "md" },
        meta: {
          eyebrow: "Assistive care system",
          cardNote: "Real-time · event-driven",
          thumbnail: {
            src: "/projects/memolens.png",
            alt: "MemoLens — real-time assistive care system",
          },
        },
        links: {
          github: "https://github.com/athravseruwam07/memolens",
        },
      },
      {
        title: "Doceo",
        tagline:
          "AI tutor with voice-guided lessons and animated whiteboard teaching",
        description:
          "Generates step-by-step STEM lessons, plays voice narration, and animates a whiteboard-style explanation in sync. Full-stack lesson generation, streaming delivery, audio, and live follow-up Q&A.",
        stack: [
          "Next.js",
          "TypeScript",
          "FastAPI",
          "Gemini",
          "SSE",
          "Framer Motion",
        ],
        highlights: [
          "Gemini prompt pipelines for structured lessons",
          "Narration synced with animated whiteboard playback",
          "Contextual questions while a lesson is in progress",
        ],
        orbit: { angle: 55, radius: 1, size: "md" },
        meta: {
          eyebrow: "AI tutoring product",
          cardNote: "Streaming · interactive",
          thumbnail: {
            src: "/projects/doceo.png",
            alt: "Doceo — AI-powered STEM tutoring",
          },
        },
        links: {
          github: "https://github.com/athravseruwam07/doceo",
        },
      },
      {
        title: "Data Health Console",
        tagline: "Dataset triage and validation for tabular data",
        description:
          "Lightweight tool for profiling CSVs, applying cleaning steps, and generating readable validation reports—so early datasets are trustworthy enough to work with.",
        stack: ["Python", "Streamlit", "Pandas", "NumPy", "SQLite", "Pytest"],
        highlights: [
          "Modular pipeline: clean → validate → score → report",
          "Heuristic checks for IDs, duplicates, dates, categories",
          "SQLite persistence with automated tests",
        ],
        orbit: { angle: 140, radius: 1.05, size: "sm" },
        meta: {
          eyebrow: "Data quality tooling",
          cardNote: "Rules · reporting",
          thumbnail: {
            src: "/projects/data-health-console.png",
            alt: "Data Health Console — dataset triage",
          },
        },
        links: {
          github: "https://github.com/angxd1/Data-Analyzer",
        },
      },
      {
        title: "OpenClaw on AWS",
        tagline: "Hands-on workshop: local AI → agent deploy on AWS",
        description:
          "Students build a local AI note-taking app and deploy an OpenClaw agent on AWS. Designed around real infrastructure steps and clear model tradeoffs—no black-box deploy shortcuts.",
        stack: ["AWS EC2", "OpenAI API", "FastAPI", "Whisper", "Discord", "S3"],
        highlights: [
          "Connected local AI apps to real deployment workflows",
          "EC2 setup, API integration, Discord connectivity",
          "Reproducible labs students can follow end-to-end",
        ],
        orbit: { angle: 210, radius: 1.05, size: "sm" },
        meta: {
          eyebrow: "Cloud education workshop",
          cardNote: "Infra · teaching",
          thumbnail: {
            src: "/projects/openclaw.png",
            alt: "OpenClaw Workshop — AWS agent deployment",
          },
        },
        links: {
          github: "https://github.com/Jasiri-w/aws-cc-mac-openclaw-workshop",
        },
      },
    ],
    cardLinks: {
      githubLabel: "Code",
      demoLabel: "Live",
      icons: { github: Github, demo: ExternalLink },
    },
  },

  skills: {
    categories: [
      {
        title: "Languages",
        items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"],
      },
      {
        title: "Frameworks",
        items: [
          "Next.js",
          "React",
          "FastAPI",
          "Streamlit",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        title: "Data & Cloud",
        items: [
          "PostgreSQL",
          "Redis",
          "Pandas",
          "AWS EC2 / S3",
          "Docker",
          "Pytest",
        ],
      },
      {
        title: "AI & Realtime",
        items: [
          "Gemini API",
          "OpenAI API",
          "WebSockets",
          "SSE",
          "MediaPipe",
          "Prompt design",
        ],
      },
    ],
  },

  experience: {
    items: [
      {
        role: "Software Engineer Intern",
        organization: "CloudSynApps",
        location: "Mississauga, ON",
        dates: "June 2026 – August 2026",
        bullets: [
          "Contribute to client-facing software and cloud solutions across research, development, and technical documentation",
          "Build enablement material on cloud and AI tooling for the consulting delivery team",
        ],
      },
      {
        role: "Software Developer",
        organization: "Blueprint McMaster",
        location: "Hamilton, ON",
        dates: "October 2026 – Present",
        bullets: [
          "Build free software for nonprofit partners with student developers, designers, and PMs",
          "Ship production-ready tools from discovery through handoff",
        ],
      },
      {
        role: "President",
        organization: "AWS Student Builder Group, McMaster",
        location: "Hamilton, ON",
        dates: "May 2026 – Present",
        teachBeat: true,
        bullets: [
          "Lead a cross-functional executive team across Technical, Events, Finance, Socials, and 1st-Year Rep",
          "Deliver hands-on cloud & AI workshops, labs, and project nights with real AWS services",
        ],
      },
      {
        role: "Cloud Engineer",
        organization: "AWS Cloud Club, McMaster",
        location: "Hamilton, ON",
        dates: "Nov 2025 – May 2026",
        bullets: [
          "Co-designed workshops, labs, and project nights for an applied student cloud community",
          "Supported cloud challenges, certification prep, and project showcases",
        ],
      },
      {
        role: "Mathematics Tutor",
        organization: "Garth Webb Secondary School",
        location: "Oakville, ON",
        dates: "Sep 2024 – Feb 2025",
        bullets: [
          "Tutored grades 9–12 with a focus on clear reasoning and problem-solving habits",
        ],
      },
      {
        role: "Founder & Operator",
        organization: "Barber business",
        location: "Oakville, ON",
        dates: "June 2023 – June 2025",
        bullets: [
          "Ran a recurring client service business end-to-end—scheduling, quality, and retention",
        ],
      },
    ],
  },

  education: {
    heading: "Education",
    item: {
      school: "McMaster University",
      program: "Candidate for BASc, Computer Science",
      location: "Hamilton, ON",
      dates: "Sept 2025 – Apr 2029",
      note: "Interests: AI, data tools, cloud systems, and software development.",
    },
  },

  contact: {
    heading: "Let’s connect",
    subheading:
      "Hiring for internships/co-ops, building something interesting, or want to talk systems? Reach out.",
    email: "Singa401@mcmaster.ca",
    links: [
      { label: "Email", href: "mailto:Singa401@mcmaster.ca", icon: Mail },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/angad-singh23/",
        icon: Linkedin,
      },
      { label: "GitHub", href: "https://github.com/angxd1", icon: Github },
      { label: "Resume", href: "/resume.pdf", icon: FileText },
    ],
  },

  footer: {
    note: "Built with Next.js · React Three Fiber",
  },
};
