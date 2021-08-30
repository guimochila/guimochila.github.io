import styles from './AboutItem.module.css';
export interface Item {
  image: string;
  title: string;
  description: string;
}
interface Props {
  item: Item;
}

const AboutItem: React.FC<Props> = ({
  item: { title, image, description },
}) => {
  return (
    <li className={styles.itemContainer}>
      <div className={styles.itemHeader}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemDesc}>{description}</p>
      </div>
    </li>
  );
};

export default AboutItem;
