import Image from 'next/image';
import styles from './TechStack.module.css';
import stylesAbout from '../AboutItem/AboutItem.module.css';
import imgProject from '../../public/static/icons/project.svg';

const TechStack: React.FC = () => {
  return (
    <li className={stylesAbout.itemContainer}>
      <div className={stylesAbout.itemHeader}>
        <Image src={imgProject} alt="Technologies that I work with (icon)" />
      </div>
      <div className={stylesAbout.itemDetails}>
        <h3 className={stylesAbout.itemTitle}>Technologies</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>HTML5 & CSS3</li>
          <li className={styles.listItem}>Javascript & ES6</li>
          <li className={styles.listItem}>React & Redux</li>
          <li className={styles.listItem}>Node.js</li>
          <li className={styles.listItem}>MongoDB</li>
          <li className={styles.listItem}>MySQL</li>
          <li className={styles.listItem}>GraphQL</li>
          <li className={styles.listItem}>Typescript</li>
        </ul>
      </div>
    </li>
  );
};

export default TechStack;
