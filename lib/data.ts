export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "frontend" | "fullstack" | "backend" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "design";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: "Alex Rivera",
  title: "Full-Stack Developer",
  tagline: "I craft beautiful, performant web experiences that users love.",
  bio: "I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Next.js, and Node.js, with a strong eye for design and user experience. When I'm not coding, you'll find me contributing to open source, writing technical articles, or exploring the latest in AI and web technologies.",
  location: "San Francisco, CA",
  email: "alex@example.com",
  availableForWork: true,
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "40+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Open Source Stars", value: "1.2k" },
  ],
};

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard for SaaS businesses with live charts, user segmentation, and revenue tracking.",
    longDescription:
      "Nexus Dashboard is a comprehensive analytics platform built for modern SaaS companies. It provides real-time insights into user behavior, revenue metrics, and product performance. The dashboard features interactive charts powered by Recharts, WebSocket-based live updates, and a flexible widget system that lets teams customize their view. Built with Next.js 14, TypeScript, and a PostgreSQL backend, it handles millions of events per day with sub-second query times thanks to strategic indexing and Redis caching.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSockets", "Recharts"],
    category: "fullstack",
    liveUrl: "https://nexus-demo.example.com",
    githubUrl: "https://github.com/alexrivera/nexus-dashboard",
    image: "/images/projects/nexus.jpg",
    featured: true,
  },
  {
    slug: "artisan-marketplace",
    title: "Artisan Marketplace",
    description:
      "An e-commerce platform connecting independent artists with buyers, featuring Stripe payments and real-time inventory.",
    longDescription:
      "Artisan Marketplace is a full-featured e-commerce platform that empowers independent artists to sell their work online. The platform includes a custom storefront builder, Stripe Connect for split payments, real-time inventory management, and an AI-powered recommendation engine. Sellers get a rich dashboard with sales analytics, while buyers enjoy a curated discovery experience with advanced filtering and wishlists.",
    tags: ["React", "Node.js", "Stripe", "MongoDB", "Tailwind CSS", "AWS S3"],
    category: "fullstack",
    liveUrl: "https://artisan.example.com",
    githubUrl: "https://github.com/alexrivera/artisan-marketplace",
    image: "/images/projects/artisan.jpg",
    featured: true,
  },
  {
    slug: "codeflow-editor",
    title: "CodeFlow Editor",
    description:
      "A collaborative browser-based code editor with real-time multiplayer, syntax highlighting, and AI code completion.",
    longDescription:
      "CodeFlow Editor brings the power of VS Code to the browser with real-time collaboration built in. Multiple developers can edit the same file simultaneously with conflict-free merging via CRDTs. The editor supports 50+ languages with Tree-sitter syntax highlighting, integrated terminal via xterm.js, and AI-powered completions using the OpenAI API. It's built on a WebRTC mesh network for low-latency peer-to-peer collaboration.",
    tags: ["TypeScript", "WebRTC", "CRDTs", "Monaco Editor", "OpenAI", "WebSockets"],
    category: "frontend",
    liveUrl: "https://codeflow.example.com",
    githubUrl: "https://github.com/alexrivera/codeflow-editor",
    image: "/images/projects/codeflow.jpg",
    featured: true,
  },
  {
    slug: "pulse-api",
    title: "Pulse API Gateway",
    description:
      "A high-performance API gateway with rate limiting, authentication, request transformation, and observability.",
    longDescription:
      "Pulse is a production-grade API gateway built with Fastify and deployed on Kubernetes. It handles authentication via JWT and API keys, enforces rate limits per tenant, transforms requests and responses, and provides detailed observability through OpenTelemetry traces exported to Grafana. The gateway processes over 10 million requests per day with p99 latency under 5ms.",
    tags: ["Node.js", "Fastify", "Kubernetes", "Redis", "OpenTelemetry", "Docker"],
    category: "backend",
    liveUrl: undefined,
    githubUrl: "https://github.com/alexrivera/pulse-api",
    image: "/images/projects/pulse.jpg",
    featured: false,
  },
  {
    slug: "mindful-app",
    title: "Mindful — Wellness App",
    description:
      "A cross-platform mobile app for guided meditation, mood tracking, and personalized wellness journeys.",
    longDescription:
      "Mindful is a React Native wellness application that helps users build sustainable mental health habits. It features guided meditation sessions with spatial audio, daily mood tracking with trend visualization, personalized habit recommendations powered by a lightweight ML model, and Apple Health / Google Fit integration. The app has a 4.8-star rating with over 50,000 active users.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "TensorFlow Lite"],
    category: "mobile",
    liveUrl: "https://mindful.example.com",
    githubUrl: "https://github.com/alexrivera/mindful-app",
    image: "/images/projects/mindful.jpg",
    featured: false,
  },
  {
    slug: "devlog-platform",
    title: "DevLog Platform",
    description:
      "A developer-focused blogging platform with MDX support, code playgrounds, and a built-in newsletter system.",
    longDescription:
      "DevLog is a modern publishing platform built specifically for developers. Authors write in MDX with full component support, embed live code playgrounds powered by Sandpack, and publish to a global CDN. The platform includes a built-in newsletter system, RSS feeds, reading time estimates, and a powerful search powered by Algolia. It's built on Next.js with ISR for blazing-fast page loads.",
    tags: ["Next.js", "MDX", "Algolia", "Sandpack", "Resend", "Vercel"],
    category: "fullstack",
    liveUrl: "https://devlog.example.com",
    githubUrl: "https://github.com/alexrivera/devlog-platform",
    image: "/images/projects/devlog.jpg",
    featured: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "TypeScript", icon: "🔷", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Framer Motion", icon: "🎭", category: "frontend" },
  { name: "Vue.js", icon: "💚", category: "frontend" },
  { name: "React Native", icon: "📱", category: "frontend" },
  { name: "GraphQL", icon: "🔗", category: "frontend" },
  // Backend
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "PostgreSQL", icon: "🐘", category: "backend" },
  { name: "MongoDB", icon: "🍃", category: "backend" },
  { name: "Redis", icon: "🔴", category: "backend" },
  { name: "Prisma", icon: "◆", category: "backend" },
  { name: "REST APIs", icon: "🌐", category: "backend" },
  { name: "tRPC", icon: "🔌", category: "backend" },
  // Tools
  { name: "Git", icon: "🌿", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "Kubernetes", icon: "☸️", category: "tools" },
  { name: "AWS", icon: "☁️", category: "tools" },
  { name: "Vercel", icon: "▲", category: "tools" },
  { name: "GitHub Actions", icon: "⚙️", category: "tools" },
  // Design
  { name: "Figma", icon: "🎯", category: "design" },
  { name: "Storybook", icon: "📖", category: "design" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/alexrivera", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/alexrivera", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/alexrivera", icon: "twitter" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
