import styles from './Container.module.css';

type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
