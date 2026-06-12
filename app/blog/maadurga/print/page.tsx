'use client';

import BlogLayout from '../../BlogLayout';
import { verses } from "@/app/data/mahishasura";

import { MeaningBlock } from "@/app/components/katha/MeaningBlock";
import { ReflectionBlock } from "@/app/components/katha/ReflectionBlock";
import { SanskritBlock } from "@/app/components/katha/SanskritBlock";
import { VerseImage } from "@/app/components/katha/VerseImage";
import { VerseHero } from "@/app/components/katha/VerseHero";

import styles from './print.module.css';

export default function PrintPage() {
  return (
    <BlogLayout>
      <article className={styles.container}>

        {Object.values(verses).map((verse) => (

          <div key={verse.slug}>
            <div className={styles.header}>
              Mahishasura Mardini Stotram
            </div>
            {/* ===== IMAGE PAGE ===== */}
            <section className={styles.imagePage}>
              <VerseImage
                src={verse.imagepnt}
                alt={verse.description}
                width={500}
                height={600}
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
              <br />
              <MeaningBlock
                items={verse.meaning}
                forPrint={true}
              />

              {verse.philosophy && verse.philosophy.length > 0 && (
                <section>
                  <ReflectionBlock
                    text={verse.philosophy}
                    forPrint={true}
                  />
                </section>
              )}



            </section>

            <div className={styles.pageBreak} />

          </div>
        ))}

      </article>
    </BlogLayout>
  );
}