// app/blog/page.tsx
import Link from "next/link";
import BlogLayout from "./BlogLayout";


export default function BlogPage() {
  return (
    <BlogLayout>
      <h1>Articles</h1>
      <p>Explores articles about honesty, integrity, and managing conflicts.</p>
      <ul>
        <li>
          <Link href="/blog/transparency" className="text-blue-600 hover:underline">
            Transparency &amp; Integrity
          </Link>
        </li>
        <li>
          <Link href="/blog/brain" className="text-blue-600 hover:underline">
            Amygdala
          </Link>
        </li>
         <li>
          <Link href="/blog/brain/rulebase" className="text-blue-600 hover:underline">
            Rulebase
          </Link>
        </li>

      </ul>
    </BlogLayout>
  );
}
