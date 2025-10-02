// src/data/projectsData.js
const projectsData = [
  {
    id: 1,
    title: "Visor (VS Code Extension)",
    description:
      "Generates interactive control flowcharts from code using a low-latency (~5ms) pipeline built with tree-sitter parsers and a language-agnostic IR, rendered with Mermaid.js. 350+ users, 60+ GitHub stars, 70k+ Reddit views.",
    image: "https://i.imgur.com/1m0XvKe.png",
    tags: ["VS Code", "tree-sitter", "Mermaid.js", "TypeScript"],
    categories: ["Developer Tools", "Visualization"],
    liveLink: "#",
    repoLink: "https://github.com/sidhant-sriv/visor",
  },
  {
    id: 2,
    title: "GDSC VIT Recruitment Portal",
    description:
      "End-to-end backend in Django + PostgreSQL to manage 4,000+ applicants. Added Redis caching and NGINX reverse proxy, reducing average latency by 25% and ensuring 99.9% uptime during peaks.",
    image: "https://i.imgur.com/iJwQxGR.png",
    tags: ["Django", "PostgreSQL", "Redis", "NGINX"],
    categories: ["Backend", "Web"],
    liveLink: "#",
    repoLink: "https://github.com/GDGVIT",
  },
  {
    id: 3,
    title: "Bureau-critic",
    description:
      "LangGraph-powered agentic SaaS to automate complex bureaucratic processes via tool-calling workflows. Secure multitenant architecture with LangSmith tracing improved debugging time by 40%.",
    image: "https://i.imgur.com/6TgQ9fF.png",
    tags: ["LangGraph", "Agentic AI", "LangSmith", "SaaS"],
    categories: ["AI", "SaaS"],
    liveLink: "#",
    repoLink: "https://github.com/sidhant-sriv/bureau-critic",
  },
  {
    id: 4,
    title: "Yantra Chatbot",
    description:
      "Scalable RAG chatbot using pgvector, handling large-scale ingestion and retrieval for 300+ concurrent users. Integrated open-source LLMs in Docker for dynamic, accurate answers.",
    image: "https://i.imgur.com/Ilj2LY9.jpeg",
    tags: ["RAG", "pgvector", "Docker", "LLMs"],
    categories: ["AI", "Chatbots"],
    liveLink: "#",
    repoLink: "https://github.com/sidhant-sriv/yantra-chatbot",
  },
];

export default projectsData;
