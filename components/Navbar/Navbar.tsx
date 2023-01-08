import styles from './Navbar.module.css';

const Navbar: React.FC = () => (
  <nav className={styles.navBar}>
    <a
      className={`${styles.link} ${styles.blog}`}
      href="https://dev.to/guimochila"
      target="_blank"
      rel="noreferrer"
    >
      Blog
    </a>
    <a
      className={styles.link}
      href="https://twitter.com/guiscaldelai"
      target="_blank"
      rel="noreferrer"
    >
      Twitter
    </a>
    <a
      className={styles.link}
      href="https://www.facebook.com/guilherme.scaldelai"
      target="_blank"
      rel="noreferrer"
    >
      Facebook
    </a>
    <a
      className={styles.link}
      href="https://www.linkedin.com/in/guilhermescaldelai/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
    <a
      className={styles.link}
      href="https://github.com/guimochila"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </nav>
);

export default Navbar;
