import styles from './Header.module.css';
import avatar from '../../public/static/img/avatar.jpeg';
import tsIcon from '../../public/static/icons/typescript.svg';

const Header: React.FC = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <img className={styles.contentImg} src={avatar} alt="My avatar picture" />
      <h1 className={styles.title}>Guilherme Scaldelai</h1>
      <h2 className={styles.subtitle}>Software Engineer @TomTom</h2>
      <h3 className={styles.text}>
        In <i className={`fas fa-heart ${styles.iconHeart}`} /> with
        <i className={`fab fa-js ${styles.iconJs}`} />
        <img src={tsIcon} alt="Typescript" width={22} height={22} />
      </h3>
    </header>
  </section>
);

export default Header;
