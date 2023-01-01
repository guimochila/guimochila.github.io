import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

const articlesPath = path.join(process.cwd(), 'articles');

export async function getSlugs(): Promise<string[]> {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((file) => path.parse(file).name);
}

export async function getArticleFromSlug(slug: string) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const rawContent = fs.readFileSync(articleDir, 'utf-8');
  const { content, data } = matter(rawContent);
  const source = await serialize(content, {
    parseFrontmatter: false,
    mdxOptions: {
      development: false,
      remarkPlugins: [[remarkGfm]],
      rehypePlugins: [[rehypePrism]],
    },
  });

  const { compiledSource } = source;

  return {
    frontMatter: {
      ...data,
      slug,
      title: data.title,
      date: data.publishedAt,
    },
    source: compiledSource,
  };
}

export async function getAllArticles() {
  const files = fs.readdirSync(articlesPath);

  const articles = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const rawContent = fs.readFileSync(path.join(articlesPath, file), 'utf8');

      // Extract content with gray-matter
      const { data, content } = matter(rawContent);

      return { data, content };
    });

  return articles;
}
