'use client';
import { verses } from "@/app/data/mahishasura";
import styles from './book.module.css';
import { VerseImage } from "@/app/components/katha/VerseImage";
import { BookBlock } from "@/app/components/katha/BookBlock";
import { ReflectionBlock } from "@/app/components/katha/ReflectionBlock";
import { useRouter } from "next/navigation";
import GlossaryTable from "@/app/components/katha/GlossoryTable";

export default function BookPage() {
    const router = useRouter();

    return (
        <article className={styles.printContainer}>


            <div className={styles.watermark}>
                © 2026 Katha Series. All Rights Reserved.
            </div>

            {/* ===== COVER PAGE ===== */}
            <section className={styles.imagePage}>
                <VerseImage
                    src="/images/maa/maadurgamantra.png"
                    alt="Om"
                    width={500}
                    height={600}
                />

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
                            <span>{index}</span>
                        </a>
                    ))}
                </div>
            </section>

            <>
                {Object.values(verses).map((verse, index) => {
                    if (index === 0) return null;

                    return (
                        <section
                            key={index}
                            className={styles.contentPage}
                        >
                            <div className={styles.contentInner}>
                                <div id={verse.slug} key={verse.slug}>
                                    <VerseImage
                                        src={verse.imagepnt}
                                        alt={verse.description}
                                        width={200}
                                        height={300}
                                        forPrint={true}
                                    />

                                    <BookBlock verse={verse} />

                                    {verse.philosophy && verse.philosophy.length > 0 && (
                                        <div className={styles.reflectionCard}>
                                            <ReflectionBlock
                                                text={verse.philosophy}
                                                forPrint={true}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className={styles.pageNumber}>
                                    {index}
                                </div>
                            </div>
                        </section>
                    );
                })}
                <section className={styles.contentPage}>
                    <h1 className={styles.printTitle}>मनोवैज्ञानिकशब्दकोश (Manovaijñānika-śabdakośa)</h1>
                    
                    <GlossaryTable/>
                </section>
            </>

            <div className={styles.buttonRow}>
                <button
                    onClick={() => window.location.href = "/blog"}
                    className={`${styles.backButton} ${styles.screenOnly}`}
                >
                    ← Back to Blog
                </button>
                <button
                    onClick={() => window.location.href = "/blog/maadurga/book"}
                    className={`${styles.backButton} ${styles.screenOnly}`}
                >
                    ← Home
                </button>
                <button
                    onClick={() => router.push("/blog/maadurga/print")}
                    className={`${styles.backButton} ${styles.screenOnly}`}
                >
                    ← Print
                </button>
            </div>
        </article>
    );
}