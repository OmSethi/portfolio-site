export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  details: string[];
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  blurb: string;
  details: string[];
  stack: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  path: string;
}

export const profile = {
  heading: "Hello, I'm Om Sethi",
  bio: "Previous Data Engineer Intern @ IBM, Director of Events and Programming @ UB Forge, Senior studying computer science at University at Buffalo with a focus in full stack and AI development",
  aside:
    "When I'm not coding, you can usually find me playing volleyball, watching F1 every weekend, or listening to music.",
  email: "omsethi205@gmail.com",
  contactCopy:
    "Whether you'd like to talk about projects, opportunities, or just chat, don't hesitate to reach out. I enjoy meeting new people and exploring new ideas.",
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/omsethi-dev/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "GitHub",
    href: "https://github.com/OmSethi",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    label: "X",
    href: "https://x.com/omsethii",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

export const experiences: Experience[] = [
  {
    id: "ibm",
    role: "Data Engineer Intern",
    company: "IBM",
    period: "May 2026 - August 2026",
    details: [
      "Re-engineered a proof-of-concept into a React and Node.js MVP using IBM Consulting Advantage to generate synthetic PDFs, emails, and spreadsheets for model training",
      "Evaluated and benchmarked an AI content-generation platform against reference documents, systematically testing single and multi-reference model configurations to surface accuracy, formatting, and hallucination failure modes",
      "Debugged and root-caused recurring defects in a document-generation pipeline, including mapping errors, hierarchy loss, and missing sections, then fed findings back into template and mapping configuration to improve output reliability",
    ],
    stack: ["React", "Node.js", "IBM Consulting Advantage", "AI/ML", "Python"],
  },
  {
    id: "oneauris",
    role: "Founding Engineer",
    company: "OneAuris",
    period: "May 2026 - Present",
    current: true,
    details: [
      "Architected an LLM document pipeline on AWS Bedrock using a three-tier model dispatcher that routes 95% of calls to Haiku, escalates to Sonnet on low confidence, and applies Claude vision OCR with per-citation source verification",
      "Built a HIPAA and SOC 2-oriented Next.js and React monorepo on AWS ECS Fargate with blue/green CI/CD, Aurora Postgres Serverless v2 row-level security, and in-house argon2id authentication",
      "Shipped to production at a paying law firm, powering AI splitting of 1,000+ page discovery PDFs, automated medical index generation, and citation-backed Statement of Facts drafting for attorney review",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "AWS Bedrock",
      "AWS ECS Fargate",
      "Aurora Postgres",
      "Claude",
    ],
  },
  {
    id: "ub",
    role: "Software Engineer Intern",
    company: "University at Buffalo",
    period: "February 2026 - Present",
    current: true,
    details: [
      "Maintaining and scaling an academic TraceTool used in CSE 115 and 116, enabling students to trace code execution and visualize memory state, supporting 500+ students annually and 5,000+ submissions per semester",
      "Onboarding into a large existing codebase while contributing to system scalability efforts focused on multi-institution deployment, higher concurrency, and reliable handling of peak submission loads",
      "Working with course staff to ensure correct and consistent memory modeling and tracing behavior, improving reliability and clarity of the tool as student usage continues to grow",
    ],
    stack: ["TypeScript", "React", "tRPC", "Next.js"],
  },
  {
    id: "xircls",
    role: "Software Engineer Intern - AI",
    company: "Xircls",
    period: "June 2025 - Sept 2025",
    details: [
      "Built scalable backend systems with FastAPI and Docker for AI-powered applications",
      "Optimized machine learning workflows using LangChain and Ollama for efficient model deployment",
      "Developed secure, reliable multi-agent routing systems for complex AI task execution",
      "Implemented prompt-based task execution frameworks for enhanced AI interaction capabilities",
    ],
    stack: ["Python", "FastAPI", "Docker", "LangChain", "Ollama", "AI/ML"],
  },
];

export const projects: Project[] = [
  {
    id: "aircommand",
    name: "AirCommand",
    blurb:
      "A real-time hand gesture control system that enables volume control, play-pause, app switching with 95% gesture recognition accuracy and under 200ms response time.",
    details: [
      "Currently developing a real-time hand gesture control system using Python, MediaPipe, and OpenCV with 95% gesture recognition accuracy and under 200ms response time",
      "Building a modular gesture recognition architecture currently supporting 4+ gesture types (thumbs up/down, fist, palm) using object-oriented design patterns achieving 25-30 FPS real time processing",
      "Implementing a computer vision pipeline that processes live video streaming with 21-point hand landmark detection, featuring two-phase execution system (200ms activation delay + 600ms cooldown) to prevent false triggers",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Real-time Processing"],
  },
  {
    id: "sonata",
    name: "Sonata",
    blurb:
      "A Discord music bot that streams high-quality audio, supports playlists and queue management and offers interactive commands for seamless group listening.",
    details: [
      "Built high-quality audio streaming with support for YouTube",
      "Implemented playlist management with load functionality and queue persistence",
      "Created interactive commands for play, pause, and skip",
      "Developed user-friendly interface with real-time status updates",
      "Added support for multiple voice channels and server-specific configurations",
    ],
    stack: ["Python", "Discord.py", "FFmpeg", "YouTube-DL", "AsyncIO"],
  },
];

export const skills: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    items: [
      "Git",
      "AWS (ECS, Bedrock, Aurora, S3)",
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Vercel",
      "Docker",
      "FastAPI",
    ],
  },
  {
    id: "core",
    label: "Core Skills",
    items: [
      "AI/ML Engineering",
      "Full-Stack Development",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
    ],
  },
];
