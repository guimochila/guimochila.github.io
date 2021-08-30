import styles from './Header.module.css';
import avatar from '../../public/static/img/avatar.jpeg';

const Header: React.FC = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <img className={styles.contentImg} src={avatar} alt="My avatar picture" />
      <h1 className={styles.title}>Guilherme Scaldelai</h1>
      <h2 className={styles.subtitle}>Fullstack engineer</h2>
      <h3 className={styles.text}>
        In <i className={`fas fa-heart ${styles.iconHeart}`} /> with
        <i className={`fab fa-js ${styles.iconJs}`} />
      </h3>
    </header>
  </section>
);

export default Header;
