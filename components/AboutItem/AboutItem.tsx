import Image from 'next/image';
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
        <Image src={image} alt={title} width={70} height={70} />
      </div>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemDesc}>{description}</p>
      </div>
    </li>
  );
};

export default AboutItem;
