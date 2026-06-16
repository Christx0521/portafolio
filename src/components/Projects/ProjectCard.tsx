import type { Project } from "../../data/projects";
import styles from "./Projects.module.css";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <span className={styles.badge}>{project.category}</span>
      </div>
      <p className={styles.desc}>{project.description}</p>
      <ul className={styles.tags}>
        {project.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
      {project.repoUrl && (
        <a
          className={styles.link}
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en GitHub →
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
