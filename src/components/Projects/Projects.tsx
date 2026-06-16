import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="proyectos" className={styles.section}>
      <h2 className={styles.heading}>
        <span>02.</span>Proyectos
      </h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
