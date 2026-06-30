import { CONTACT_EMAIL, GITHUB_PROFILE, LINKEDIN_URL } from "../../data/projects";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <section id="contacto" className={styles.section}>
        <h2 className={styles.heading}>
          <span>04.</span>Contacto
        </h2>
        <p className={styles.text}>
          ¿Tienes un proyecto, una idea o una oportunidad? Escríbeme y conversamos.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <a
            className={styles.secondary}
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className={styles.secondary}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Christian Xavier Nieto · Hecho con React + Vite
      </footer>
    </>
  );
}

export default Contact;
