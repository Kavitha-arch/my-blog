import Link from 'next/link';
import BlogLayout from '../blog/BlogLayout';

export default function AboutPage() {
  return (
    <BlogLayout>
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-serif text-center mt-6">Anamika's Blog</h1> 
      </header>

      {/* Featured Journal Section */}
      <section className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Journey into the depths of me..to discover who am I</h2>
        <p className="mb-6 text-gray-700 max-w-xl mx-auto">
          Here I share thoughts, updates, and stories about my experiences.
          I am walking alone in a beautiful forest, the sound of the leaves as I walk on them
          and then I see a huge tree, the warm breeze and the shade of the tree is inviting , I lay my journal down and 
          and sit aginst the tree and slowly I am lie down and go into deep sleep...wake up to see a beautiful radiant being
          in the Tree
          to whom I whisper - It answers and helps me reflect
          And with an example scenario shows my Dharma and all of it goes into my Journal
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
