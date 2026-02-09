// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Great Blog</h1>
        <p className="text-lg text-gray-600">
          Explores articles, tips, and stories on my blog.
        </p>
      </header>

      {/* Links to Subpages */}
      <section className="flex flex-col sm:flex-row gap-6 mb-12">
        <Link
          href="/blog/transparency"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Visit Kavitha's Blog
        </Link>
       
      </section>

      {/* Short Intro */}
      <section className="max-w-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4">About This Blog</h2>
        <p className="text-gray-600">
          This blog shares insights, tutorials, and personal stories. Click on the pages above to dive into the content.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </footer>
    </main>
  );
}
