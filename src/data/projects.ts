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
export const CONTACT_EMAIL = "christianxnietog@gmail.com";

const repo = (name: string): string => `${GITHUB_PROFILE}/${name}`;

export const projects: Project[] = [
  {
    id: "neo",
    title: "NEO — Asistente IA por voz",
    description:
      "Asistente de IA offline en español: reconocimiento de voz con faster-whisper en GPU, cerebro con Ollama, voz con Piper, visión y control del PC. Incluye memoria, plan confirmado y una capa de seguridad por niveles.",
    tags: ["Python", "Ollama", "faster-whisper", "Piper", "IA"],
    category: "IA",
    repoUrl: repo("neo"),
  },
  {
    id: "interarcade",
    title: "InterArcade",
    description:
      "Colección de juegos arcade desarrollados en Unity con C#, proyecto realizado entre estudiantes de la Inter.",
    tags: ["Unity", "C#", "Arcade"],
    category: "Juegos",
    repoUrl: repo("InterArcade"),
  },
  {
    id: "pov-parkour",
    title: "POV Parkour",
    description:
      "Speedrunner de parkour en primera persona inspirado en Wipeout: recorre un circuito lleno de trampas buscando el mejor tiempo. Proyecto semestral de Videojuegos 1.",
    tags: ["Unity", "C#", "FPS"],
    category: "Juegos",
    repoUrl: repo("pov-parkour-game"),
  },
  {
    id: "t-rex-clone",
    title: "T-Rex Runner",
    description:
      "Recreación del dinosaurio offline de Chrome, hecha en Unity con C#.",
    tags: ["Unity", "C#"],
    category: "Juegos",
    repoUrl: repo("t-rex-clone-unity"),
  },
  {
    id: "hanoi",
    title: "Torre de Hanói",
    description:
      "Resolución de la Torre de Hanói en C++17 aplicando recursividad y RAII. Uso de contenedores estándar y gestión de recursos sin punteros crudos.",
    tags: ["C++17", "Recursividad", "RAII"],
    category: "Sistemas",
  },
  {
    id: "mini-twitter",
    title: "mini-twitter (PHP)",
    description:
      "Mini red social tipo Twitter en PHP (PDO) + MySQL: autenticación, posts de 140 caracteres y feeds global y propio.",
    tags: ["PHP", "PDO", "MySQL"],
    category: "Web",
    repoUrl: repo("mini-twitter-php"),
  },
];
