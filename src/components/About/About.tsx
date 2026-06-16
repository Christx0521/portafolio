import styles from "./About.module.css";

interface Fact {
  label: string;
  value: string;
}

const facts: Fact[] = [
  { label: "Ubicación", value: "Panamá" },
  { label: "Estudios", value: "Desarrollo de Videojuegos · UIPR" },
  { label: "Rol", value: "Desarrollador junior" },
  { label: "Enfoque", value: "Web · Juegos · Sistemas · IA" },
];

function About() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <h2 className={styles.heading}>
        <span>01.</span>Sobre mí
      </h2>
      <div className={styles.body}>
        <div>
          <p>
            Soy estudiante de Desarrollo de Videojuegos en la UIPR y desarrollador
            junior. Me muevo cómodo en todo el stack: desde interfaces en React y
            TypeScript hasta back-end en PHP con PDO, pasando por juegos en Unity
            con C# y proyectos de sistemas en C++.
          </p>
          <p>
            Me interesa especialmente la IA aplicada: mi proyecto NEO es un
            asistente por voz que corre totalmente offline. Disfruto entender las
            herramientas a fondo y exprimir lo que ya tengo antes de añadir capas
            extra.
          </p>
        </div>
        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;
