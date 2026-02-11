import Link from "next/link";
import BlogLayout from "./BlogLayout";
import Image from "next/image";
import { blogPosts } from "./blogData";
import styles from "./BlogLayout.module.css";

//Blog TOC - refer blogData
export const metadata = {
  title: "Journal on Integrity, Emotional Mastery & Dharma",
  description:
    "Articles on transparency, emotional regulation, amygdala science, integrity, and self-leadership.",
};

export default function BlogPage() {
  return (
    <BlogLayout>
      <h1 className={styles.pageTitle}>
        Journal Reflections
      </h1>

      <p className={styles.subtitle}>
        Explorations on integrity, emotional clarity, and inner leadership.
      </p>

      <div className="flex justify-center my-8">
        <Image
          src="/images/brain/journal.png"
          alt="Whispers under the ancient tree – journal background"
          width={300}
          height={400}
          priority
        />
      </div>



      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <Link key={post.href} href={post.href} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>
                {post.title}
              </h2>

              <p className={styles.excerpt}>
                {post.excerpt}
              </p>

              <p className={styles.readTime}>
                {post.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </BlogLayout>
  );
}
