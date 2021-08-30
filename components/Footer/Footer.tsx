import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <p className="text">
        &copy; Copyright {new Date().getFullYear()} - Guilherme Scaldelai
      </p>
      <br />
    </div>
  </footer>
);

export default Footer;
