import BlogLayout from "@/app/blog/BlogLayout";
import { withBasePath } from "@/lib/path";
import Link from "next/link";

export default function MainDurgaPage() {
  return (
    <BlogLayout>
      <article className="verse-page">
        
        <section className="hero_section">
          <h1>Mahishasura Mardhini</h1>
                       
          <p>
            The story of Durga is not merely a mythological battle narrative.
            It is a symbolic map of psychological struggle, attachment,
            ego, and transformation.<br /><br />
            <strong>ॐ Raksha Raksha Jagan Matha Sarva Shakthi Jaya Durga ॐ</strong>
          </p>
        </section>
        <div>
          <h2>Stotram</h2>

          <ul>
            <li>
              <Link href="/blog/maadurga/katha/mahishasura-mardhini/verse-1"
                className="text-blue-600 underline hover:text-blue-800">
                Verse 1: Maa Durga - The Daughter of the Mountain and Joy of the World
              </Link>
            </li>

            <li>
              <Link href="/blog/maadurga/katha/mahishasura-mardhini/verse-2"
                className="text-blue-600 underline hover:text-blue-800">
                Verse 2: Maa Durga - Destroys Danavas&Daityas and Nourishes the Three Worlds
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </BlogLayout>
  );
}