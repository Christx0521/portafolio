import styles from "./Navbar.module.css";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#inicio" className={styles.brand}>
        Mr.<span>C</span>
      </a>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
