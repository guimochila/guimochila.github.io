import { getAllArticles } from '../../utils/articles';
import styles from '../../styles/shared.module.css';
import { TPost } from '../../components/Blog/Post';
import PostList from '../../components/Blog/PostList';

export default function Blog({ articles }: { articles: TPost[] }) {
  if (!articles) {
    return <section></section>;
  }
  return (
    <section className={styles.sectionContainer}>
      <PostList posts={articles} />
    </section>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();

  return { props: { articles } };
}
