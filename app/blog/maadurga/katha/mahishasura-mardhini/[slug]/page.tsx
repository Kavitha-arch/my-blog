import BlogLayout from "@/app/blog/BlogLayout";
import { MeaningBlock } from "@/app/components/katha/MeaningBlock";
import { ReflectionBlock } from "@/app/components/katha/ReflectionBlock";
import { SanskritBlock } from "@/app/components/katha/SanskritBlock";
import { SymbolsBlock } from "@/app/components/katha/SymbolsBlock";
import { VerseImage } from "@/app/components/katha/VerseImage";
import { verses, type VerseSlug } from "@/app/data/mahishasura";
import "../../../../../katha.css";
import { VerseHero } from "@/app/components/katha/VerseHero";

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

    return (
        <BlogLayout>
            <article  className="verse-page">
                <section>
                    <h1>Mahishasura Mardhini</h1>
                    <h2 className="om">ॐ</h2> 
                </section>

                <h1>{verse.title}</h1>
                <VerseImage
                    src={verse.image}
                    alt={verse.title}
                />
                <br/>

                <VerseHero text={verse.description}/>
                
                <SanskritBlock text={verse.sanskrit} />

                <section>
                    <MeaningBlock items={verse.meaning} />
                </section>

                <section>
                    <SymbolsBlock items={verse.symbols} />
                </section>

                <section>
                     <ReflectionBlock text={verse.reflection} /> 
                </section>
            </article>
        </BlogLayout>
    );
}