// src/data/projectsData.js
const projectsData = [
  {
    id: 1,
    title: "Document RAG using LangChain and CUDA",
    description:
      "Local RAG system for enhanced information retrieval & generation (20s inference). Integrated Mistral 7b & Palm 2 LLMs for efficient document processing. GPU-accelerated for significant performance gains.",
    image: "https://i.imgur.com/vJDBVny.jpeg",
    tags: ["LangChain", "CUDA", "Machine Learning"],
    categories: ["AI", "Information Retrieval"],
    liveLink: "#",
    repoLink: "https://github.com/sidhant-sriv/lerbut",
  },
  {
    id: 2,
    title: "Reelgen",
    description:
      "AI powered reel generator. Backend API built using Node.js and utilizes ffmpeg. Uses LLM API to generate content for video based on user prompts. Generates video content (in ~30s) using stable diffusion models hosted on AWS Sagemaker. Deployed on AWS EC2.",
    image:
      "https://framerusercontent.com/images/JlJspIC5h4WaEwg8DsSDfPfX5yQ.png",
    tags: ["Node.js", "Stable Diffusion", "AWS Sagemaker"],
    categories: ["AI", "Video Generation"],
    liveLink: "#",
    repoLink: "https://github.com/sidhant-sriv/reelgen",
  },
  {
    id: 3,
    title: "GDSC VIT Recruitments Portal Backend",
    description:
      "Built on Django REST framework with PostgreSQL. Redis cache database and NGINX reverse proxy for improved latency and throughput. Hosted serving to 4000+ users.",
    image: "https://i.imgur.com/iJwQxGR.png",
    tags: ["Django", "PostgreSQL", "Redis"],
    categories: ["Web Development", "Backend"],
    liveLink: "#",
    repoLink: "https://github.com/GDGVIT",
  },
  {
    id: 4,
    title: "Research Consultancy for CMC Vellore",
    description:
      "Applied machine learning algorithms to analyze patient data for cervical cancer prediction, achieving an accuracy of 98% with a realistic F1 score, significantly improving diagnostic capabilities and potential patient outcomes.",
    image:
      "https://riseapps.co/wp-content/uploads/2021/08/Machine-Learning-in-Healthcare-Industry.png",
    tags: ["Machine Learning", "Healthcare", "Prediction"],
    categories: ["AI", "Healthcare"],
    liveLink: "#",
    repoLink: "https://github.com/sidhant-sriv/Medical-ML",
  },
  {
    id: 5,
    title: "Zitch",
    description:
      "Zitch (inspired by the game Zitch dog from HIMYM) is an app that you can use to log the location of a stray dog. Once enough people have logged the locations of dogs, it will start giving alerts about whether there could be a dog in your area.",
    image: "https://i.imgur.com/d5hn8nl.jpeg",
    tags: ["Mobile App", "Location Tracking", "Alerts"],
    categories: ["Mobile Development", "Social Impact"],
    liveLink: "#",
    repoLink: "https://github.com/sidhant-sriv/zitch",
  },
  {
    id: 6,
    title: "Geloy Art",
    description:
      "To recreate the art style of @geloyconcepcion on Instagram using Mask RCNN.",
    image: "https://i.imgur.com/LH8KU54.png",
    tags: ["Mask RCNN", "Art Style Transfer", "Machine Learning"],
    categories: ["AI", "Creative Arts"],
    liveLink: "#",
    repoLink: "https://www.kaggle.com/code/sidhantssrivastava/geloy-artstyle",
  },
  {
    id: 7,
    title: "Ultrachat",
    description:
      "A Discord bot to summarize, query, and save your messages with RAG (Retrieval Augmented Generation) and llamaindex.",
    image: "https://i.imgur.com/Ilj2LY9.jpeg",
    tags: ["Discord Bot", "RAG", "LlamaIndex"],
    categories: ["AI", "Chatbots"],
    liveLink: "#",
    repoLink: "https://github.com/sidhant-sriv/ultrachat",
  },
];

export default projectsData;
