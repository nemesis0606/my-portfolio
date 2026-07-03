import {
  PersonalInfo,
  Skill,
  Project,
  Experience,
  Certification,
  Achievement,
  Publication,
  Hobby,
} from "@/types";

// ==========================================
// CENTRAL PORTFOLIO DATA FOR ROHAN BHATTACHARJEE
// ==========================================

export const personalInfo: PersonalInfo = {
  name: "Rohan Bhattacharjee",
  title: "Databricks Data Engineer & Cloud Enthusiast",
  subtitle: "Specializing in Databricks, Apache Spark, Azure Cloud, and Generative AI integration.",
  location: "Kolkata, West Bengal, India (Open to Remote)",
  bio: "Software Engineer at TCS specializing in big data orchestration, pipeline engineering, and artificial intelligence.",
  detailedBio: "I am a Software Engineer at Tata Consultancy Services (TCS) focused on building enterprise-grade data pipelines. With a B.Tech in Artificial Intelligence from the Institute of Engineering & Management (IEM), I combine data engineering expertise (Databricks, Spark, SQL) with generative AI and cloud infrastructure. I also have academic research experience in AR/VR and hyper-parameter deep learning optimization.",
  email: "rohan.bhattacharjee.77@gmail.com",
  github: "https://github.com/nemesis0606",
  linkedin: "https://www.linkedin.com/in/rohan-bhattacharjee-838011202/",
  resumeUrl: "/resume/resume.pdf",
  avatarUrl: "",
  discord: "hi_im_nemesis",
};

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "Languages", iconName: "FileJson", colorClass: "accent-peach" },
  { name: "SQL", category: "Languages", iconName: "Database", colorClass: "accent-mint" },
  { name: "C#", category: "Languages", iconName: "Code2", colorClass: "accent-purple" },
  { name: "TypeScript", category: "Languages", iconName: "Code2", colorClass: "accent-blue" },
  { name: "JavaScript", category: "Languages", iconName: "FileCode", colorClass: "accent-blue" },

  // Backend & Data
  { name: "Databricks", category: "Backend & Data", iconName: "Box", colorClass: "accent-peach" },
  { name: "Apache Spark (PySpark)", category: "Backend & Data", iconName: "Zap", colorClass: "accent-peach" },
  { name: "Delta Lake", category: "Backend & Data", iconName: "Database", colorClass: "accent-blue" },
  { name: "PostgreSQL", category: "Backend & Data", iconName: "Database", colorClass: "accent-blue" },
  { name: "Generative AI", category: "Backend & Data", iconName: "BrainCircuit", colorClass: "accent-purple" },

  // Cloud & DevOps
  { name: "Microsoft Azure", category: "Cloud & DevOps", iconName: "Cloud", colorClass: "accent-blue" },
  { name: "CI/CD (GitHub Actions)", category: "Cloud & DevOps", iconName: "GitBranch", colorClass: "accent-purple" },
  { name: "Docker", category: "Cloud & DevOps", iconName: "Container", colorClass: "accent-blue" },

  // Tools
  { name: "Unity 3D", category: "Tools", iconName: "Layers", colorClass: "accent-pink" },
  { name: "Blender", category: "Tools", iconName: "Palette", colorClass: "accent-peach" },
  { name: "Vuforia AR SDK", category: "Tools", iconName: "Cpu", colorClass: "accent-purple" },
  { name: "Git / GitHub", category: "Tools", iconName: "Github", colorClass: "accent-purple" },
  { name: "VS Code", category: "Tools", iconName: "Laptop", colorClass: "accent-blue" },

  // Soft Skills
  { name: "Problem Solving", category: "Soft Skills", iconName: "BrainCircuit", colorClass: "accent-mint" },
  { name: "Creative Thinking", category: "Soft Skills", iconName: "Lightbulb", colorClass: "accent-peach" },
  { name: "Research & Writing", category: "Soft Skills", iconName: "FileText", colorClass: "accent-blue" },
  { name: "Collaboration", category: "Soft Skills", iconName: "Users", colorClass: "accent-purple" },
];

export const projects: Project[] = [
  {
    id: "pet-companion",
    title: "NekoCompanion: Desktop Virtual Pet",
    description: "An always-on-top, animated virtual pet desktop application designed for Windows 11.",
    longDescription: "Built a virtual pet desktop overlay using Electron, React, and HTML5 Canvas. The pet is governed by a Finite State Machine (FSM) that dictates natural-feeling behaviors (Idle, Walk, Sleep, Think, Follow, Happy). Includes transparent window overlays, click-through, custom window dragging physics, and a settings panel.",
    image: "/images/project_neko.png",
    tags: ["Electron", "React 19", "TypeScript", "Vite", "Zustand", "Canvas", "Framer Motion"],
    githubUrl: "", // Local project - no code repo
    liveUrl: "",   // Local project - no live demo
    role: "Creator & Developer",
    features: [
      "Dynamic Finite State Machine for smart animal behavioral cycles",
      "Organic animations (procedural breathing, bounce walking, sleep particle glows)",
      "Secure preloading and ContextBridge IPC window communications",
      "Always-on-top transparent GUI layers with desktop click-through support",
    ],
    accentColor: "purple",
  },
  {
    id: "pipo-ai",
    title: "Pipo AI: Local OS Voice Agent",
    description: "A local-first, voice-enabled assistant leveraging Ollama models to automate OS shell controls.",
    longDescription: "Developed a Python assistant that runs entirely offline. The agent uses a local LLM via Ollama (Llama 3 / Mistral) to interpret voice/text commands, map them to actions, interact with the system shell, launch desktop software, write text dynamically via PyAutoGUI, and generate local text-to-speech voice feedback.",
    image: "/images/project_pipo.png",
    tags: ["Python", "Ollama", "Llama 3", "PyAutoGUI", "Voice I/O", "Speech-to-Text", "REST API"],
    githubUrl: "", // Local project - no code repo
    liveUrl: "",   // Local project - no live demo
    role: "Creator & Developer",
    features: [
      "Offline inference leveraging local Ollama LLMs and structured system prompts",
      "Dynamic GUI automation (launching Notepad, typing text, simulating keystrokes)",
      "Speech-to-text input captures paired with local text-to-speech voice outputs",
      "Extensible Python tools system wrapper",
    ],
    accentColor: "pink",
  },
  {
    id: "immersive-education",
    title: "Prototype on Immersive Education",
    description: "An interactive educational application combining Augmented Reality (AR) and Virtual Reality (VR) simulations.",
    longDescription: "A published research prototype showing the advantages of immersive tech in schooling. Built using Unity, Blender, and Vuforia AR SDK, allowing students to visualize complex mathematical and biological models dynamically in 3D.",
    image: "/images/project_immersive.png",
    tags: ["Unity", "Blender", "Vuforia SDK", "AR/VR", "C#"],
    githubUrl: "", // No code repo
    liveUrl: "https://ajac.smartsociety.org/volume-2/",
    role: "AR-VR Research Intern",
    features: [
      "Augmented reality 3D visual card recognition using Vuforia",
      "Custom 3D meshes modeled and textured in Blender",
      "Interactive physics simulations inside Unity",
      "Academic paper published in the American Journal of Advanced Computing (AJAC)",
    ],
    accentColor: "blue",
  },
];

export const experience: Experience[] = [
  {
    id: "exp-tcs",
    company: "Tata Consultancy Services",
    position: "Software Engineer (Databricks Data Engineer)",
    duration: "Jul 2024 - Present",
    location: "Kolkata, India",
    description: "Developing scalable big data ETL pipelines and lakehouse solutions for enterprise clients.",
    bulletPoints: [
      "Orchestrating end-to-end PySpark ETL processes on Azure Databricks to handle large-scale datasets.",
      "Tuning Delta Lake tables (compaction, Z-Ordering) to optimize query performance and lower cloud compute costs.",
      "Collaborating with AI teams to integrate machine learning and generative AI workflows into data processing pipelines.",
    ],
  },
  {
    id: "exp-iemlabs",
    company: "IEMLabs",
    position: "AR-VR Intern",
    duration: "Apr 2022 - Jul 2024",
    location: "Kolkata, India",
    description: "Designed virtual reality modules and augmented reality assets for training and academic projects.",
    bulletPoints: [
      "Developed high-fidelity AR markers and interactive tracking tools using Vuforia SDK and Unity.",
      "Created optimized low-poly 3D models and character assets using Blender.",
      "Constructed a prototype for immersive educational tools, resulting in a published journal article.",
    ],
  },
  {
    id: "exp-iitkgp",
    company: "IEEE EMBS IIT KGP",
    position: "Research Intern",
    duration: "Jun 2023 - Jul 2023",
    location: "IIT Kharagpur, India (Remote)",
    description: "Conducted virtual simulation research for healthcare and biological instrumentation analysis.",
    bulletPoints: [
      "Built interactive 3D simulation interfaces in Unity to visualize biomedical signals.",
      "Researched virtual reality applications for remote medical monitoring and simulation labs.",
      "Collaborated with researchers to draft experimental documentation and software controls.",
    ],
  },
  {
    id: "exp-mealdeals",
    company: "The Meal Deals",
    position: "Web Content Writer",
    duration: "Nov 2020 - Dec 2020",
    location: "Remote",
    description: "Created optimized web contents and article copywriting to improve platform search metrics.",
    bulletPoints: [
      "Researched and authored high-engagement web content, increasing organic landing traffic.",
      "Applied Search Engine Optimization (SEO) techniques, targeting core keywords and improving search rankings.",
      "Worked closely with digital marketing leads to align content styles with platform branding.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-db-de",
    title: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    date: "2025",
    credentialUrl: "https://credentials.databricks.com",
    image: "",
  },
  {
    id: "cert-db-ai",
    title: "Databricks Certified Generative AI Associate",
    issuer: "Databricks",
    date: "2026",
    credentialUrl: "https://credentials.databricks.com",
    image: "",
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    number: 2,
    suffix: "",
    label: "Academic Publications",
    description: "Research papers published in JMSCM (deep learning) and AJAC (AR/VR immersive education).",
    iconName: "FileText",
  },
  {
    id: "ach-2",
    number: 4,
    suffix: "",
    label: "Professional Internships",
    description: "Hands-on experience in software engineering, AR/VR systems, research simulation, and web writing.",
    iconName: "Rocket",
  },
  {
    id: "ach-3",
    number: 2,
    suffix: "",
    label: "Databricks Credentials",
    description: "Data Engineer Associate and Generative AI Associate certified.",
    iconName: "Award",
  },
  {
    id: "ach-4",
    number: 4,
    suffix: "yrs+",
    label: "Tech Exploration",
    description: "Continuous learning in Artificial Intelligence, Big Data, and Cloud architectures.",
    iconName: "Zap",
  },
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "A Review on Hyper-Parameter Optimization by Deep Learning Experiments",
    journal: "Journal of Mathematical Sciences & Computational Mathematics (JMSCM)",
    url: "https://jmscm.smartsociety.org/volume2_issue4/Paper7.pdf",
    year: "2023",
  },
  {
    id: "pub-2",
    title: "A Prototype on Immersive Education",
    journal: "American Journal of Advanced Computing (AJAC)",
    url: "https://ajac.smartsociety.org/volume-2/",
    year: "2022",
  },
];

export const hobbies: Hobby[] = [
  {
    id: "hobby-gym",
    name: "Fitness & Gymming",
    description: "Strength training and physical wellness.",
    iconName: "Flame",
    colorClass: "accent-pink",
    details: ["Progressive overload weightlifting", "Focus on physical discipline and stamina", "Continuous athletic goals"],
  },
  {
    id: "hobby-gaming",
    name: "Competitive Gaming",
    description: "Fast-paced tactical and sports gaming.",
    iconName: "Gamepad2",
    colorClass: "accent-blue",
    details: ["Valorant (FPS coordination & tactical play)", "Rocket League (physics-based aerial soccer)", "EA FC (football dynamics & strategy)"],
  },
  {
    id: "hobby-movies",
    name: "Cinema & Movies",
    description: "Exploring storytelling and narrative visual media.",
    iconName: "Film",
    colorClass: "accent-purple",
    details: ["Sci-Fi, mystery, and thriller movies", "Appreciation of screenplays & motion visual details", "Diverse storytelling genres"],
  },
  {
    id: "hobby-exploring",
    name: "Travel & Cafe Hopping",
    description: "Discovering coffee spots and exploring urban layouts.",
    iconName: "Compass",
    colorClass: "accent-mint",
    details: ["Exploring new cityscapes and architecture", "Seeking out aesthetic local coffee shops", "Appreciating culinary and cafe layouts"],
  },
];
