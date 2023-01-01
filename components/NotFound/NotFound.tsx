import Head from 'next/head';
import Image from 'next/image';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Guilherme Scaldelai | 404 - Not found.</title>
      </Head>
      <div className={styles.notFound}>
        <Image
          className={styles.contentImage}
          src="https://media.giphy.com/media/tvGOBZKNEX0ac/giphy.gif"
          alt="Not found."
          width={480}
          height={204}
        />
        <h1 className={styles.text}>Oops! Page not found! 😱</h1>
        <p className={styles.subText}>Please check if the URL is correct.</p>
      </div>
    </>
  );
};

export default NotFound;
