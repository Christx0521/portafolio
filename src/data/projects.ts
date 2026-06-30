export type ProjectCategory = "Web" | "Juegos" | "Sistemas" | "IA";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  repoUrl?: string;
}

export const GITHUB_USER = "Christx0521";
export const GITHUB_PROFILE = `https://github.com/${GITHUB_USER}`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/christian-xavier-nieto/";
export const CONTACT_EMAIL = "christianxnietog@gmail.com";

const repo = (name: string): string => `${GITHUB_PROFILE}/${name}`;

export const projects: Project[] = [
  {
    id: "neo",
    title: "NEO - Asistente de IA por voz",
    description:
      "Asistente de IA por voz 100% local para Windows: escucha continua, wake word, STT con faster-whisper (GPU), cerebro con Ollama y voz Piper offline.",
    tags: ["Python", "Whisper", "Ollama", "Piper", "Offline-first"],
    category: "IA",
    repoUrl: repo("neo"),
  },
  {
    id: "cross-games",
    title: "Cross-Games",
    description:
      "Red social y de chat en tiempo real para gamers: DMs, grupos, foros estilo Reddit, feed, stories, presencia en vivo y moderacion.",
    tags: ["React", "Node.js", "TypeScript", "Socket.io", "PostgreSQL"],
    category: "Web",
    repoUrl: repo("cross-games"),
  },
  {
    id: "pov-parkour",
    title: "POV Parkour Game",
    description:
      "Speedrunner de parkour en primera persona inspirado en Wipeout: recorre un circuito lleno de trampas buscando el mejor tiempo.",
    tags: ["Unity", "C#", "Game Dev"],
    category: "Juegos",
    repoUrl: repo("pov-parkour-game"),
  },
  {
    id: "t-rex-clone",
    title: "T-Rex Clone (Unity)",
    description:
      "Recreacion del juego del dinosaurio offline de Chrome, construido en Unity con C#.",
    tags: ["Unity", "C#", "Game Dev"],
    category: "Juegos",
    repoUrl: repo("t-rex-clone-unity"),
  },
  {
    id: "bst-ds",
    title: "Torre de Hanoi / BST-DS",
    description:
      "Visualizador interactivo de estructuras de datos y algoritmos, incluyendo la Torre de Hanoi, desarrollado en Unity.",
    tags: ["Unity", "C#", "Algoritmos"],
    category: "Sistemas",
    repoUrl: repo("BST-DS"),
  },
  {
    id: "mini-twitter-php",
    title: "Mini Twitter (PHP)",
    description:
      "App minimalista de microblogging tipo Twitter en PHP (PDO) + MySQL: autenticacion, posts de 140 caracteres y feeds global y propio.",
    tags: ["PHP", "MySQL", "PDO"],
    category: "Web",
    repoUrl: repo("mini-twitter-php"),
  },
];
