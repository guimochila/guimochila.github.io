import { MDXRemote } from 'next-mdx-remote';
import { getArticleFromSlug, getSlugs } from '../../utils/articles';
import styles from '../../styles/shared.module.css';

export default function Article({ article }) {
  if (!article) {
    return;
  }

  return (
    <article className={styles.sectionContainer}>
      <MDXRemote
        compiledSource={article.source}
        frontmatter={article.frontmatter}
      />
    </article>
  );
}

export async function getStaticPaths() {
  const paths = (await getSlugs()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const article = await getArticleFromSlug(slug);

  return { props: { article } };
}
