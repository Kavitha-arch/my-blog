'use client';


import { verses } from "@/app/data/mahishasura";

import { MeaningBlock } from "@/app/components/katha/MeaningBlock";
import { ReflectionBlock } from "@/app/components/katha/ReflectionBlock";
import { SanskritBlock } from "@/app/components/katha/SanskritBlock";
import { VerseImage } from "@/app/components/katha/VerseImage";
import { VerseHero } from "@/app/components/katha/VerseHero";

import styles from './print.module.css';
import { AboutBlock } from "@/app/components/katha/AboutBlock";
import { SourcesBlock } from "@/app/components/katha/SourcesBlock";

export default function PrintPage() {
  let pageNumber = 1;
  return (

    <article className={styles.printContainer}>
      {/* ===== COBER PAGE ===== */}
      <section className={styles.imagePage}>
        <VerseImage
          src="/images/maa/maadurgacoverpnt.png"
          alt="Om"
          width={500}
          height={600}
        />

      </section>
      <section className={styles.contentPage}>

        <h1 className={styles.printBookTitle}>महिषासुरमर्दिनी स्तोत्रम्</h1>
        <div className={styles.spacer} />
        <VerseImage
          src="/images/maa/maadurgabook.png"
          alt="Om"
          width={500}
          height={600}
        />
        <div className={styles.spacer} />

        <div className="text-sm">
          <AboutBlock />
          Any errors or feedback  email me directly at{" "}
          <a href="mailto:pappik.3@gmail.com">
            pappik.3@gmail.com
          </a>
        </div>

      </section>

      <section className={styles.contentPage}>
        <h1 className={styles.printTitle}>अनुक्रमणिका</h1>

        <div className={styles.toc}>
          {Object.values(verses).map((verse, index) => (
            <a
              key={verse.slug}
              href={`#${verse.slug}`}
              className={styles.tocRow}
            >
              <span>{verse.title}</span>
              <span className={styles.tocDots}></span>
              <span>{(index + 1) * 2}</span>
            </a>
          ))}
        </div>
      </section>

      <div className={styles.pageBreak} />

      {Object.values(verses).map((verse, index) => (

        <div  id={verse.slug}  key={verse.slug}>
          <div className={styles.header}>
            ॐ महिषासुरमर्दिनी स्तोत्रम्  ॐ
          </div>
          {/* ===== IMAGE PAGE ===== */}
          <section className={styles.imagePage}>
            <VerseImage
              src={verse.imagepnt}
              alt={verse.description}
              width={500}
              height={600}
              forPrint={true}
            />

          </section>




          {/* ===== CONTENT PAGE ===== */}
          <div className={styles.header}>
            {verse.title}
          </div>
          <section className={styles.contentPage}>

            <SanskritBlock
              text={verse.sanskrit}
              forPrint={true}
            />
            <div className={styles.spacer} />
            <MeaningBlock
              items={verse.meaning}
              forPrint={true}
            />
            <div className={styles.spacer} />
            {verse.philosophy && verse.philosophy.length > 0 && (
              <section>
                <h1 className={styles.printTitle}>
                  रक्ष रक्ष जगन्माते सर्वशक्ते जय दुर्गे।
                </h1>
                <ReflectionBlock
                  text={verse.philosophy}
                  forPrint={true}
                />
              </section>
            )}

            <div className={styles.pageNumber}>
              {5 + index * 2}
            </div>

          </section>

          <div className={styles.pageBreak} />

        </div>
      ))}
      <SourcesBlock />
       
      <button
        onClick={() => window.location.href = "/blog"}
        className={`${styles.backButton} ${styles.screenOnly}`}
      >
        ← Back to Blog
      </button>
      <button
        onClick={() => window.location.href = "/blog/maadurga/print"}
        className={`${styles.backButton} ${styles.screenOnly}`}
      >
        ← Home
      </button>
    </article>
  );
}