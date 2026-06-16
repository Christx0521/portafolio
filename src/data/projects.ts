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

export const projects: Project[] = [
  {
    id: "neo",
    title: "NEO — Asistente IA por voz",
    description:
      "Asistente de IA offline en Python: reconocimiento de voz con faster-whisper en GPU, cerebro con Ollama (qwen2.5), voz con Piper, visión con moondream y control del PC. Incluye memoria, plan confirmado y capa de seguridad por niveles.",
    tags: ["Python", "Ollama", "faster-whisper", "Piper", "IA"],
    category: "IA",
    repoUrl: GITHUB_PROFILE,
  },
  {
    id: "pacman",
    title: "Pac-Man",
    description:
      "Clon completo del clásico arcade en Unity con C#. Movimiento por grilla, IA de fantasmas y manejo de entrada con el New Input System.",
    tags: ["Unity", "C#", "New Input System"],
    category: "Juegos",
    repoUrl: GITHUB_PROFILE,
  },
  {
    id: "bananamovement",
    title: "BananaMovement",
    description:
      "Proyecto de juego en Unity centrado en mecánicas de movimiento del personaje. En desarrollo activo, iterando físicas y controles.",
    tags: ["Unity", "C#", "Gameplay"],
    category: "Juegos",
    repoUrl: GITHUB_PROFILE,
  },
  {
    id: "hanoi",
    title: "Torre de Hanói",
    description:
      "Resolución de la Torre de Hanói en C++17 aplicando recursividad y RAII. Uso de contenedores estándar y gestión de recursos sin punteros crudos.",
    tags: ["C++17", "Recursividad", "RAII"],
    category: "Sistemas",
    repoUrl: GITHUB_PROFILE,
  },
  {
    id: "php-jugadores",
    title: "Gestión de jugadores (PHP)",
    description:
      "Aplicación web CRUD con PHP y PDO sobre MySQL en XAMPP. Consultas preparadas, patrón POST-Redirect-GET y renderizado de listados. Desarrollada en el curso COMP3015.",
    tags: ["PHP", "PDO", "MySQL", "XAMPP"],
    category: "Web",
    repoUrl: GITHUB_PROFILE,
  },
];
