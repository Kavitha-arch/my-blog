import { redirect } from "next/navigation";
import BlogLayout from "./blog/BlogLayout";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <BlogLayout>
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-serif text-center mt-6">Whispers under the ancient Tree</h1>
      </header>
     
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Image
          src="/images/brain/whispers_sage.png" // adjust extension if .jpg or .svg
          alt="Whisers under the ancient Tree diagram"
          width={800} // desired width
          height={400} // desired height
          priority // optional: loads image faster
        />
      </div>
      {/* Featured Journal Section */}
      <section className="my-12 text-center">
        <h2 className="text-2xl font-semibold mb-2 tracking-wide italic">
          A Journey Inward
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed italic">
          Into the depths of self, to discover who I truly am
        </p>

       

        <p className="mb-8 text-gray-600 max-w-xl mx-auto leading-relaxed italic">

          I wander alone through an ancient forest, where the earth breathes and the leaves murmur secrets beneath my steps. Time feels suspended. From the hush emerges a colossal tree, its presence magnetic, its shade alive with a warm, unseen wind.

          I lay my journal at its roots and rest against its trunk. The world softens. My breath slows. Sleep takes me gently.

          When I awaken, the tree is no longer empty — a radiant being dwells within it, luminous and watching. I whisper, not with my voice but with my soul. It responds without words, guiding me inward. Through living visions and quiet revelations, it shows me my Dharma.

          What is revealed dissolves into ink, flowing naturally into the pages of my journal.
        </p>
        <br></br>
        <Link
          href="/blog"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-lg"
        >
          Read the Journal
        </Link>
      </section>

      {/* Short Intro */}
      <section className="max-w-2xl text-center my-12">
        <h2 className="text-3xl font-semibold mb-4">About This Blog</h2>
        <p className="text-gray-600">
          This blog weaves personal self-reflection into stories.
        </p>
      </section>


    </BlogLayout>
  );
} 
