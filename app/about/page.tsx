import Link from 'next/link';
import BlogLayout from '../blog/BlogLayout';

export default function AboutPage() {
  return (
    <BlogLayout>
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Anamika's Blog</h1>
        <p className="text-lg text-gray-600">
          Explores articles, tips, and stories on my blog.
        </p>
      </header>

      {/* Featured Journal Section */}
      <section className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to My Journal Blog</h2>
        <p className="mb-6 text-gray-700 max-w-xl mx-auto">
          Here I share thoughts, updates, and stories about my projects and experiences.
          Feel free to explore and follow along!
        </p>
        <Link
          href="/blog/whispers"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-lg"
        >
          Read the Journal
        </Link>
      </section>

      {/* Short Intro */}
      <section className="max-w-2xl text-center my-12">
        <h2 className="text-3xl font-semibold mb-4">About This Blog</h2>
        <p className="text-gray-600">
          This blog shares insights, tutorials, and personal stories. Click on the pages above to dive into the content.
        </p>
      </section>

  
    </BlogLayout>
  );
}
