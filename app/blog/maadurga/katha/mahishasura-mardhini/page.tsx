import BlogLayout from "@/app/blog/BlogLayout";
import { withBasePath } from "@/lib/path";
import Link from "next/link";
import styles from "@/app/blog/maadurga/styles/VersePage.module.css";
import { VerseImage } from "@/app/components/katha/VerseImage";

//STEP1: Add the verse link here
//STEP2: Add versen.ts to  app\data\mahishasura and mention it in index.ts
export default function MainDurgaPage() {
  return (
    <BlogLayout>
      <article className={styles.versePage}>

        <section>
          <h1>Mahishasura Mardhini Stotram</h1>
          <p>
            The story of Durga is not merely a mythological battle narrative.
            It is a symbolic map of psychological struggle, attachment,
            ego, and transformation.
          </p>
        </section>
        <div>
          <h3>ॐ Raksha Raksha Jagan Matha Sarva Shakthi Jaya Durga ॐ</h3>
          <VerseImage src="/images/maa/maadurga.png"
            alt="Maa Durga" width={300} height={100} ></VerseImage>

          <ul>
            {/* Verse1: Main link */}
            <li>
              <Link
                href="/blog/maadurga/katha/mahishasura-mardhini/verse-1">
                Verse 1
              </Link>
              <p>Maa Durga - The Daughter of the Mountain and Joy of the World</p>
            </li>

            {/* Verse2: Main link */}
            <li>
              <Link
                href="/blog/maadurga/katha/mahishasura-mardhini/verse-2">
                Verse 2
              </Link>
              <p>Maa Durga - Destroys Danavas & Daityas and Nourishes the Three Worlds</p>

              {/* Verse2: Child links */}
              <ul className="ml-8 mt-2 list-disc">
                <li>
                  <Link
                    href="/blog/maadurga/katha/symbology/verse2">
                    SYMBOLOGY: Danavas & Daityas
                  </Link>
                </li>
              </ul>
            </li>

            {/* Verse3: Main link */}
            <li>
              <Link
                href="/blog/maadurga/katha/mahishasura-mardhini/verse-3">
                Verse 3
              </Link>
              <p>Destroyer of the Demons Madhu [Attachment to worldly pleasures] and Kaitabha [Aversion to unpleasant things.]</p>
            </li>
          </ul>
        </div>
      </article>
    </BlogLayout >
  );
}