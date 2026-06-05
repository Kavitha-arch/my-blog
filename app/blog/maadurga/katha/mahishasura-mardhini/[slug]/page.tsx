import BlogLayout from "@/app/blog/BlogLayout";
import { MeaningBlock } from "@/app/components/katha/MeaningBlock";
import { ReflectionBlock } from "@/app/components/katha/ReflectionBlock";
import { SanskritBlock } from "@/app/components/katha/SanskritBlock";
import { SymbolsBlock } from "@/app/components/katha/SymbolsBlock";
import { VerseImage } from "@/app/components/katha/VerseImage";
import { verseOrder, verses, type VerseSlug } from "@/app/data/mahishasura";
import styles from "@/app/blog/maadurga/styles/VersePage.module.css";
import Link from "next/link";
import { VerseHero } from "@/app/components/katha/VerseHero";
import { ChevronRight } from "lucide-react";

export function generateStaticParams() {
    return Object.keys(verses).map((slug) => ({
        slug,
    }));
}

export default async function VersePage({
    params,
}: {
    params: Promise<{ slug: VerseSlug }>;
}) {
    const { slug } = await params;

    console.log("RAW SLUG:", slug);
    console.log("TYPE:", typeof slug);
    console.log("KEYS:", Object.keys(verses));
    console.log("SLUG FROM URL:", slug);
    console.log("AVAILABLE KEYS:", Object.keys(verses));

    const verse = verses[slug];

    if (!verse) {
        return <div>NOT FOUND</div>;
    }

    const currentIndex = verseOrder.indexOf(slug);

    const previousSlug =
        currentIndex > 0
            ? verseOrder[currentIndex - 1]
            : null;

    const nextSlug =
        currentIndex < verseOrder.length - 1
            ? verseOrder[currentIndex + 1]
            : null;


    return (
        <BlogLayout>
            <article className={styles.versePage}>


                <section>
                    <h1>Mahishasura Mardhini</h1>
                    <h2 className={styles.om}>ॐ</h2>
                </section>

                <h1>{verse.title}</h1>
                <VerseImage
                    src={verse.image1}
                    alt={verse.title}
                />
                <br />

                <VerseHero text={verse.description} />

                <SanskritBlock text={verse.sanskrit} />

                <section>
                    <MeaningBlock items={verse.meaning} />
                </section>

                <section>
                    {verse.symbology ? (
                        <Link
                            href={verse.symbology}
                            className={styles.symbolsLink}
                        >
                            <SymbolsBlock items={verse.symbols} />
                        </Link>
                    ) : (
                        <SymbolsBlock items={verse.symbols} />
                    )}
                </section>

                <section className={styles.reflectionSection}>
                    {verse.scenario ? (
                        <Link href={verse.scenario} className={styles.symbolsLink}>
                            <div className={styles.linkWrapper}>
                                <ReflectionBlock text={verse.reflection} />
                                <span className={styles.linkIndicator}>
                                    Read Reflection <ChevronRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <ReflectionBlock text={verse.reflection} />
                    )}
                </section>

                <br />
                <h1>Meaning</h1>
                <VerseImage
                    src={verse.image2}
                    alt={verse.title}
                />
                <br />
                <nav className={styles.verseNavigation}>
                    <div>
                        {previousSlug && (
                            <Link
                                href={`/blog/maadurga/katha/mahishasura-mardhini/${previousSlug}`}
                                className={styles.navLink}
                            >
                                ← {verses[previousSlug].title}
                            </Link>
                        )}
                    </div>

                    <div>
                        {nextSlug && (
                            <Link
                                href={`/blog/maadurga/katha/mahishasura-mardhini/${nextSlug}`}
                                className={styles.navLink}
                            >
                                {verses[nextSlug].title} →
                            </Link>
                        )}
                    </div>
                </nav>
            </article>
        </BlogLayout>
    );
}