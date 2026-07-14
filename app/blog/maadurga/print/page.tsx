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
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function PrintPage() {
  const [accessCode, setAccessCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  // Insert inside your PrintPage component block:
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isAuthorized && e.ctrlKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        alert("Please unlock the document using your access code before printing.");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthorized]);

  // Define your secret code identifier string
  const SECRET_KEY = "KATHA2026";

  const handleVerify = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (accessCode.trim() === SECRET_KEY) {
      setIsAuthorized(true);
    } else {
      alert("Invalid Access Code. Please check your credentials.");
    }
  };

  // GATE LAYER: If unauthorized, browser only prints this minimal prompt page
  // If NOT authorized AND we are NOT on localhost, show the gate lock screen
  const isLocalhost = process.env.NODE_ENV === "development";

  if (!isAuthorized && !isLocalhost) {
    return (
      <div className={styles.gateWrapper}>
        <div className={styles.gateCard}>
          <h2>🔒 Protected Document Control</h2>
          <p>Please enter your access code to view and print this manuscript file.</p>
          <form onSubmit={handleVerify}>
            <input
              type="password"
              placeholder="Enter Code..."
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className={styles.gateInput}
            />
            <button type="submit" className={styles.gateButton}>
              Unlock Document
            </button>
          </form>
        </div>
      </div>
    );
  }

  // AUTHORIZED VIEW: Full content renders for viewing and printing
  let pageNumber = 1;
  return (

    <article className={styles.printContainer}>
      <div className={styles.watermark}>
        © 2026 Katha Series. All Rights Reserved.
      </div>

      {/* ===== COVER PAGE ===== */}
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

        <div id={verse.slug} key={verse.slug}>
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

          <section className={styles.contentPage}>

            <SanskritBlock
              text={verse.sanskrit}
              forPrint={true}
            />

            {/* First Spacer pushes the meaning section down to the middle */}
            <div className={styles.spacer} />

            <MeaningBlock
              items={verse.meaning}
              forPrint={true}
            />

            {/* Second Spacer pushes the reflection section down to the bottom */}
            <div className={styles.spacer} />


            {verse.philosophy && verse.philosophy.length > 0 && (
              <div className={styles.reflectionCard}>

                <ReflectionBlock
                  text={verse.philosophy}
                  forPrint={true}
                />
              </div>

            )}

            <div className={styles.pageNumber}>
              {5 + index * 2}
            </div>

          </section>

          <div className={styles.pageBreak} />

        </div>
      ))}
      <SourcesBlock />

      <div className={styles.buttonRow}>
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
        <button
          onClick={() => router.push("/blog/maadurga/book")}
          className={`${styles.backButton} ${styles.screenOnly}`}
        >
          ← Book
        </button>
      </div>
    </article>
  );
}