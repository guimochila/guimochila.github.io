import styles from './Wrapper.module.css';

export const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
