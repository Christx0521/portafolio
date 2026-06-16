import styles from "./Hero.module.css";

function Hero() {
  return (
    <header id="inicio" className={styles.hero}>
      <p className={styles.eyebrow}>Hola, soy</p>
      <h1 className={styles.title}>
        Christian Xavier Nieto <span className={styles.accent}>· Mr. C</span>
      </h1>
      <p className={styles.tagline}>
        Desarrollador junior full-stack y game dev. Construyo aplicaciones web
        con React y PHP, juegos en Unity y proyectos de sistemas en C++ e IA.
      </p>
      <div className={styles.actions}>
        <a href="#proyectos" className={styles.primary}>
          Ver proyectos
        </a>
        <a href="#contacto" className={styles.secondary}>
          Contacto
        </a>
      </div>
    </header>
  );
}

export default Hero;
