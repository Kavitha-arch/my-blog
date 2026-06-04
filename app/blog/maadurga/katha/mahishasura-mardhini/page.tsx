import BlogLayout from "@/app/blog/BlogLayout";
import { withBasePath } from "@/lib/path";
import Link from "next/link";
import styles from "@/app/blog/maadurga/styles/VersePage.module.css";

export default function MainDurgaPage() {
  return (
    <BlogLayout>
      <article  className={styles.versePage}>

        <section>
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
              <Link
                href="/blog/maadurga/katha/mahishasura-mardhini/verse-1"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Verse 1: Maa Durga - The Daughter of the Mountain and Joy of the World
              </Link>
            </li>

            <li>
              <Link
                href="/blog/maadurga/katha/mahishasura-mardhini/verse-2"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Verse 2: Maa Durga - Destroys Danavas & Daityas and Nourishes the Three Worlds
              </Link>

              {/* Child links */}
              <ul className="ml-8 mt-2 list-disc">
                <li>
                  <Link
                    href="/blog/maadurga/katha/symbology/verse2"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    SYMBOLOGY: Danavas & Daityas
                  </Link>
                </li>
              </ul>
            </li>
               <li>
              <Link
                href="/blog/maadurga/katha/mahishasura-mardhini/verse-2"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Verse 17: Maa Durga - Who is Pleased with Devotional Contemplation of both: like Suratha as well as Samadhi
              </Link>

              {/* Child links */}
              <ul className="ml-8 mt-2 list-disc">
                <li>
                  <Link
                    href="/blog/maadurga/katha/symbology/verse17"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    SYMBOLOGY: Suratha and Samadhi
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
    </BlogLayout>
  );
}