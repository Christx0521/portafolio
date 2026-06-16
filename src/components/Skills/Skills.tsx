import styles from "./Skills.module.css";

interface SkillGroup {
  title: string;
  items: string[];
}

const groups: SkillGroup[] = [
  { title: "Web", items: ["React", "TypeScript", "JavaScript", "PHP", "HTML", "CSS"] },
  { title: "Juegos", items: ["Unity", "C#", "New Input System"] },
  { title: "Sistemas", items: ["C++17", "Estructuras de datos", "RAII"] },
  { title: "IA & Tools", items: ["Python", "Ollama", "Git", "MySQL", "XAMPP"] },
];

function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.heading}>
        <span>03.</span>Skills & Stack
      </h2>
      <div className={styles.grid}>
        {groups.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
