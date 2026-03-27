import type React from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";

export type NavItem = {
  id:
    | "home"
    | "about"
    | "projects"
    | "skills"
    | "experience"
    | "leadership"
    | "education"
    | "contact";
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
};

export type LeadershipItem = {
  title: string;
  organization: string;
  dates: string;
  bullets: string[];
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
    navbar: {
      mobileTitle: string;
    };
    about: {
      overviewTitle: string;
      profileTitle: string;
      focusTitle: string;
      focusBody: string;
    };
    projects: {
      flagshipLabel: string;
      selectedLabel: string;
      hoverHint: string;
      codeLabel: string;
      liveLabel: string;
    };
    contact: {
      linksTitle: string;
      emailLabel: string;
      formTitle: string;
      fieldLabels: {
        name: string;
        email: string;
        message: string;
      };
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
      submitLabel: string;
      sendingLabel: string;
      status: {
        success: string;
        error: string;
      };
    };
  };
  nav: NavItem[];
  social: SocialLink[];
  heroCtas: CTA[];
  about: {
    heading: string;
    body: string;
    highlights: string[];
    avatar: { title: string; subtitle: string };
  };
  projects: {
    heading: string;
    subheading: string;
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
  skills: { heading: string; subheading: string; categories: SkillCategory[] };
  experience: { heading: string; subheading: string; items: ExperienceItem[] };
  leadership: { heading: string; subheading: string; items: LeadershipItem[] };
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
    subheadline:
      "Computer Science student building practical AI, data, and software systems",
    description:
      "I’m a Computer Science student at McMaster University. I build end-to-end software—often where AI, data, and cloud workflows meet real product constraints. I like turning messy problems into clear systems people can rely on.",
    badge: "Computer Science @ McMaster",
    locationLine: "Hamilton, ON • Open to opportunities",
  },

  uiText: {
    navbar: {
      mobileTitle: "Navigate",
    },
    about: {
      overviewTitle: "Overview",
      profileTitle: "Profile",
      focusTitle: "Quick focus",
      focusBody: "AI apps, data workflows, cloud tooling, and full-stack systems.",
    },
    projects: {
      flagshipLabel: "Flagship build",
      selectedLabel: "Selected work",
      hoverHint: "Hover for details",
      codeLabel: "Code",
      liveLabel: "Live",
    },
    contact: {
      linksTitle: "Links",
      emailLabel: "Email",
      formTitle: "Send a message",
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        message: "What would you like to talk about?",
      },
      submitLabel: "Send Message",
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
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "leadership", label: "Leadership" },
    { id: "education", label: "Education" },
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
    { label: "View Projects", href: "#projects", variant: "default" },
    { label: "Contact Me", href: "#contact", variant: "secondary" },
    { label: "GitHub", href: "https://github.com/angxd1", icon: Github, variant: "outline" },
    { label: "Resume", href: "/resume.pdf", icon: FileText, variant: "outline" },
  ],

  about: {
    heading: "About",
    body: "I’m a Computer Science student at McMaster University focused on building useful, well-structured software. My work spans AI-assisted products, data tooling, and cloud-backed systems. I’m most interested in projects where the “hard part” is turning an idea into a workflow that’s reliable, understandable, and easy to use.",
    highlights: [
      "Build end-to-end: UI → APIs → data/storage → deployment",
      "Prefer simple designs with sharp UX and strong defaults",
      "Care about system behavior: latency, failure modes, and observability",
      "Lead and teach through tutoring, workshops, and student communities",
    ],
    avatar: {
      title: "Angad Singh",
      subtitle: "CS @ McMaster University",
    },
  },

  projects: {
    heading: "Featured Projects",
    subheading:
      "A few systems I’ve built end-to-end. Each one is designed around a real workflow—not a demo for demo’s sake.",
    items: [
      {
        title: "MemoLens",
        tagline: "Real-time assistive system for dementia care",
        description:
          "A real-time assistive system that supports dementia patients and caregivers with live context, reminders, and item tracking. I built a full-stack pipeline from camera input → backend event processing → memory-style queries → real-time WebSocket updates for moment-to-moment support.",
        stack: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "WebSockets", "Python", "Docker"],
        highlights: [
          "Designed patient + caregiver flows around real-time context",
          "Implemented item-state tracking and reminder logic",
          "Built deployment checks, smoke tests, and demo-rehearsal tooling",
        ],
        meta: {
          eyebrow: "Real-time assistive care system",
          cardNote: "Real-time • event-driven",
          thumbnail: {
            src: "/projects/memolens.png",
            alt: "MemoLens thumbnail — real-time assistive care system",
          },
        },
        links: {
          github: "https://github.com/athravseruwam07/memolens",
        },
      },
      {
        title: "Doceo — AI-Powered STEM Tutoring",
        tagline:
          "Interactive AI tutor with voice-guided lessons and animated whiteboard teaching",
        description:
          "An AI tutoring product that generates step-by-step STEM lessons, plays voice narration, and animates a whiteboard-style explanation in sync. Built the full-stack flow for lesson generation, streaming delivery, audio playback, and live follow-up Q&A during a lesson.",
        stack: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "FastAPI",
          "Python",
          "Google Gemini API",
          "SSE",
        ],
        highlights: [
          "Built Gemini-based prompt pipelines for structured lesson generation",
          "Synced narration with animated “whiteboard” playback",
          "Handled contextual questions while a lesson is in progress",
        ],
        meta: {
          eyebrow: "AI tutoring product",
          cardNote: "Streaming • interactive",
          thumbnail: {
            src: "/projects/doceo.png",
            alt: "Doceo thumbnail — AI-powered STEM tutoring",
          },
        },
        links: {
          github: "https://github.com/athravseruwam07/doceo",
        },
      },
      {
        title: "Data Health Console",
        tagline: "Lightweight dataset triage and validation workflow for tabular data",
        description:
          "A lightweight data quality tool for quickly profiling CSVs, applying cleaning steps, and generating readable validation reports. Built as a modular workflow with rule-based checks, persistence, and tests—aimed at making early datasets trustworthy enough to work with.",
        stack: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib", "SQLite", "Pytest"],
        highlights: [
          "Modular pipeline: cleaning → validation → scoring → reporting",
          "Heuristic checks for IDs, duplicates, date-like fields, and categories",
          "SQLite persistence with automated test coverage",
        ],
        meta: {
          eyebrow: "Data quality & validation tool",
          cardNote: "Rules • reporting",
          thumbnail: {
            src: "/projects/data-health-console.png",
            alt: "Data Health Console thumbnail — dataset triage and validation",
          },
        },
        links: {
          github: "https://github.com/angxd1/Data-Analyzer",
        },
      },
      {
        title: "OpenClaw Workshop on AWS",
        tagline: "Hands-on cloud workshop for AI note-taking and agent deployment",
        description:
          "A hands-on cloud workshop where students build a local AI note-taking app and deploy an OpenClaw agent on AWS. I designed the workshop around real infrastructure steps and clear model tradeoffs—no black-box “click to deploy” shortcuts.",
        stack: [
          "AWS EC2",
          "OpenAI API",
          "Discord",
          "FastAPI",
          "Python",
          "Whisper",
          "Local LLMs",
          "S3",
        ],
        highlights: [
          "Connected local AI app development to real deployment workflows",
          "Guided students through EC2 setup, API integration, and Discord connectivity",
          "Kept the setup reproducible and easy to follow",
        ],
        meta: {
          eyebrow: "Cloud education & deployment workshop",
          cardNote: "Infra • teaching",
          thumbnail: {
            src: "/projects/openclaw.png",
            alt: "OpenClaw Workshop thumbnail — AWS workshop and agent deployment",
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
    heading: "Skills",
    subheading: "Tools and technologies I’ve used to build and ship projects.",
    categories: [
      {
        title: "Languages",
        items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL", "HTML", "CSS"],
      },
      {
        title: "Frameworks & Libraries",
        items: [
          "Next.js",
          "React",
          "FastAPI",
          "Streamlit",
          "Tailwind CSS",
          "Framer Motion",
          "Pandas",
          "NumPy",
          "Matplotlib",
        ],
      },
      {
        title: "Tools & Platforms",
        items: ["Git", "GitHub", "VS Code", "SQLite", "Docker", "PostgreSQL", "Redis"],
      },
      {
        title: "Cloud / AI / Data",
        items: [
          "AWS",
          "Google Gemini API",
          "OpenAI API",
          "SSE",
          "WebSockets",
          "Data Validation",
          "Prompt Design",
        ],
      },
    ],
  },

  experience: {
    heading: "Experience",
    subheading: "Roles that improved how I build, communicate, and follow through.",
    items: [
      {
        role: "Cloud Engineer",
        organization: "AWS Cloud Club, McMaster University",
        location: "Hamilton, ON",
        dates: "Nov 2025 – Present",
        bullets: [
          "Core team member helping grow a student cloud community focused on hands-on engineering",
          "Co-design workshops, labs, and project nights with a cross-functional leadership team",
          "Support applied learning events (cloud challenges, certification prep, project showcases)",
          "Contribute to student-led builds using modern collaboration and delivery workflows",
        ],
      },
      {
        role: "Mathematics Tutor",
        organization: "Garth Webb Secondary School",
        location: "Oakville, ON",
        dates: "Sep 2024 – Feb 2025",
        bullets: [
          "Tutored grades 9–12 with a focus on clear reasoning and problem-solving habits",
          "Adapted explanations to different learning styles and course levels",
          "Helped students build confidence through structured practice and feedback",
        ],
      },
      {
        role: "Founder & Operator",
        organization: "Entrepreneurial Startup Barber Business",
        location: "Oakville, ON",
        dates: "June 2023 – June 2025",
        bullets: [
          "Founded and ran a recurring client-based service business end-to-end",
          "Owned scheduling, client communication, service quality, and retention",
          "Built discipline around reliability, throughput, and customer experience",
        ],
      },
    ],
  },

  leadership: {
    heading: "Leadership & Extracurriculars",
    subheading: "Teams and programs where I mentored, organized, and shipped.",
    items: [
      {
        title: "DECA Club",
        organization: "Garth Webb Secondary School",
        dates: "Sept 2024 – June 2025",
        bullets: [
          "Led and mentored 30+ students on case analysis and presentation delivery",
          "Ran training sessions and mock competitions with clear feedback loops",
          "Built team habits around preparation, structure, and communication",
        ],
      },
      {
        title: "Workshops & Technical Community",
        organization: "AWS Cloud Club, McMaster University",
        dates: "2025 – Present",
        bullets: [
          "Help plan hands-on cloud events and lab-style build sessions",
          "Support students in practical environments: setup, debugging, and demos",
        ],
      },
    ],
  },

  education: {
    heading: "Education",
    item: {
      school: "McMaster University",
      program: "Candidate for BASc, Computer Science",
      location: "Hamilton, ON, Canada",
      dates: "Sept 2025 – Apr 2030 (Expected)",
      note: "Interests: AI, data tools, cloud systems, and software development.",
    },
  },

  contact: {
    heading: "Let’s Connect",
    subheading:
      "If you’re hiring for internships/co-ops, building something interesting, or want to talk systems and product work, feel free to reach out.",
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
    note: "Built with Next.js, TypeScript, and Tailwind CSS",
  },
};

