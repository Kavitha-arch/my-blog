import Link from "next/link";
import { dharmaArticles } from "./articles";
import BlogLayout from "../BlogLayout";

export default function DharmaPage() {
  const sortedArticles = [...dharmaArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <BlogLayout>
    <div className="container">
      <h1>Dharma</h1>
      <p>
        Articles exploring integrity, alignment, and conscious living.
      </p>

      <ol>
        {sortedArticles.map((article) => (
          <li key={article.slug}>
            <Link href={`/blog/dharma/${article.slug}`} className="text-blue-600 hover:underline">
              {article.title}
            </Link>
            <div style={{ fontSize: "0.9rem", color: "#666" }}>
              {new Date(article.date).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ol>
    </div>
    </BlogLayout>
  );
}
