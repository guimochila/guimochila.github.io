import styles from './Container.module.css';

export const Container: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
