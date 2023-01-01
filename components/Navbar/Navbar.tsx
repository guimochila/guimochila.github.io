import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <nav className={styles.navBar}>
      {isHome ? (
        <Link className={`${styles.link} ${styles.blog}`} href="/blog">
          Blog
        </Link>
      ) : (
        <Link className={`${styles.link} ${styles.blog}`} href="/">
          Home
        </Link>
      )}
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
};

export default Navbar;
