import Link from "next/link";
import BlogLayout from "./BlogLayout";
import Image from "next/image";

export const metadata = {
  title: "Journal on Integrity, Emotional Mastery & Dharma",
  description:
    "Articles on transparency, emotional regulation, amygdala science, integrity, and self-leadership.",
};

export default function BlogPage() {
  return (
    <BlogLayout>
      <h1 className="text-3xl font-serif text-center mt-6">
        Journal Reflections
      </h1>

      <p className="text-center text-gray-600 mt-2">
        Exploring integrity, emotional mastery, and inner clarity.
      </p>

      <div className="flex justify-center my-8">
        <Image
          src="/images/brain/journal.png"
          alt="Whispers under the ancient tree – journal background"
          width={1200}
          height={800}
          className="w-full max-w-3xl h-auto rounded-lg shadow-md"
          priority
        />
      </div>

      <ul className="mt-6 space-y-3 text-lg text-center">
        <li>
          <Link href="/blog/transparency" className="text-blue-700 hover:underline">
            Transparency & Integrity
          </Link>
        </li>
        <li>
          <Link href="/blog/brain" className="text-blue-700 hover:underline">
            Amygdala
          </Link>
        </li>
        <li>
          <Link href="/blog/brain/rulebase" className="text-blue-700 hover:underline">
            Rulebase
          </Link>
        </li>
        <li>
          <Link href="/blog/reflections/verbal-excess/" className="text-blue-700 hover:underline">
            Reflections
          </Link>
        </li>
        <li>
          <Link href="/blog/dharma/integrity-alignment-energy-leak/" className="text-blue-700 hover:underline">
            Dharma
          </Link>
        </li>
      </ul>
    </BlogLayout>
  );
}
