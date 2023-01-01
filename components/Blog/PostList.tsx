import Link from 'next/link';
import { TPost } from './Post';
import styles from './PostList.module.css';

const transformDate = (date: string) =>
  new Date(date).toLocaleString('default', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

const PostList = ({ posts }: { posts: TPost[] }) => {
  return (
    <ul className={styles.postList}>
      {posts
        .sort(
          (a, b) =>
            new Date(b.data.publishedAt).getTime() -
            new Date(a.data.publishedAt).getTime(),
        )
        .map(({ data: post }) => (
          <li key={post.slug} className={styles.list}>
            <Link href={`/blog/${post.slug}`}>
              <span>{post.title}</span>
              <aside className={styles.dates}>
                {transformDate(post.publishedAt)}
              </aside>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default PostList;
