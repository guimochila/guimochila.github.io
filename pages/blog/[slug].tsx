import { MDXRemote } from 'next-mdx-remote';
import { getArticleFromSlug, getSlugs } from '../../utils/articles';

export default function Article({ article }) {
  if (!article) {
    return <section></section>;
  }
  return (
    <section>
      <MDXRemote
        compiledSource={article.source}
        frontmatter={article.frontmatter}
      />
    </section>
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
