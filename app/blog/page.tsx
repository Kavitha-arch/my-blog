// app/blog/page.tsx
import Link from "next/link";
import BlogLayout from "./BlogLayout";


export default function BlogPage() {
  return (
    <BlogLayout>

      <p>Explores articles about honesty, integrity, and managing conflicts.</p>
      <ul>
        <li>
          <Link href="/blog/whispers" className="text-blue-600 hover:underline">
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
        <li>
          <Link href="/blog/reflections/verbal-excess/" className="text-blue-600 hover:underline">
            Reflections
          </Link>
        </li>
         <li>
          <Link href="/blog/dharma/integrity-alignment-energy-leak/" className="text-blue-600 hover:underline">
            Dharma
          </Link>
        </li>

      </ul>
    </BlogLayout>
  );
}
