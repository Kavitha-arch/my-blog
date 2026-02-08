// app/blog/page.tsx
import Link from "next/link";
import BlogLayout from "./BlogLayout";
 

export default function BlogPage() {
  return (
    <BlogLayout>
      <h1>Blog</h1>
      <p>Exploresu articles about honesty, integrity, and managing conflicts.</p>
      <ul>
        <li>
          <Link href="/blog/transparency" className="text-blue-600 hover:underline">
            Transparency &amp; Integrity
          </Link>
        </li>
       
      </ul>
    </BlogLayout>
  );
}
