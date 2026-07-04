import BlogLayout from "@/app/blog/BlogLayout";
import { withBasePath } from "@/lib/path";
import Link from "next/link";
import styles from "@/app/blog/maadurga/styles/VersePage.module.css";
import { VerseImage } from "@/app/components/katha/VerseImage";
import { verses } from "@/app/data/mahishasura";

//STEP1: Add the verse link here
//STEP2: Add versen.ts to  app\data\mahishasura and mention it in index.ts
export default function MainDurgaPage() {
  return (
    <BlogLayout>
      <article className={styles.versePage}>

        <h1>Mahishasura Mardhini Stotram</h1>
        <div>
          <h3>ॐ Raksha Raksha Jagan Matha Sarva Shakthi Jaya Durga ॐ</h3>
          <VerseImage src="/images/maa/maadurga.png"
            alt="Maa Durga" width={300} height={100} ></VerseImage>
          <section
            className={styles.storyCard}
            style={{
              backgroundImage: `url(${withBasePath("/images/maa/parchment.png")})`,
            }}
          >

            <strong>Maa Durga</strong>
            <p>
              The story of Durga is not merely a mythological battle narrative.
              It is a symbolic map of psychological struggle, attachment,
              ego, and transformation.
            </p>
            <p>
              Durga's power is directed toward protecting what is sacred, establishing healthy boundaries,
              and restoring balance in the mind. Her fierce energy serves as a bridge between strength and compassion,
              reminding us that true courage is not the absence of anger, but the ability to channel it in
              service of peace, protection, and transformation of oneself from being driven by the senses to
              being more one's natural self, for me that natural pure self is Lord Shiva and the Intelligence
              is Maa Durga.
            </p>
            <strong>Asuras and Devas</strong>
            <p>
              There is mention of Asuras and Devas. an intro is provided below based on information from various  sources.
            </p>
            <p>
              Danavas and Daityas are the two main clans of Asuras. Both are matrilineally named; Danavas are the children of the goddess Danu, and Daityas are the children of the goddess Diti. Danu and Diti are sisters. A third sister, Aditi, is the mother of the Adityas or Devas. All three of them are wives of the primal divine progenitor Prajapati Kashyapa, father of many races of beings.

              Rakshasas are a separate race.
            </p>
            <ul>
              <li>Asuras are a far greater and more powerful race.</li>
              <li>Devas are generally speaking deities of cosmic order and the shining light of truth</li>

              <li>Asuras are deity-like, powerful spirits of chaos and illusion.</li>
              <li>The Devas naturally seek <strong>order and balance rather than unlimited domination</strong></li>
              <li>Most Asuras dwell in the Patalas or Underworld realms, which contrary to common misconception are not “hells” or hellish, but are actually described in the Hindu scriptures as beautiful paradises surpassing the Devas’ Heaven in their exquisite pleasures. </li>
            </ul>

          
          </section>
          <h3>Verses Explained with the Scenario of {" "}
             <Link href="/blog/vasanas/kleshas">
              Anamika
            </Link>
          </h3>
          <ul>
            {Object.values(verses).map((verse: any, index: number) => {
              const isVerse2 = verse.slug === "verse2" || index === 3;

              return (
                <li key={verse.slug || index}>
                  <Link href={`/blog/maadurga/katha/mahishasura-mardhini/${verse.slug}`}>
                    {verse.title}
                  </Link>
                  <p> {verse.description}</p>
                  {/* Verse2: Child links conditional rendering */}
                  {isVerse2 && (
                    <ul className="ml-8 mt-2 list-disc">
                      <li>
                        <Link href="/blog/maadurga/katha/symbology/verse2">
                          SYMBOLOGY: Danavas & Daityas
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </BlogLayout >
  );
}