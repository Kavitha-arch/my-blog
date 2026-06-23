import { Verse } from "@/app/data/mahishasura";
import styles from "./BookBlock.module.css";

type BookBlockProps = {
    verse: Verse;
};

export function BookBlock({ verse }: BookBlockProps) {
    const lines1 = verse.sanskrit.trim().split("\n");

    if (!verse.meaning || verse.meaning.length === 0) return null;

    const visibleItems = verse.meaning.filter(
        item => !item.trim().includes("Psychological:")
    );

    const maxLines = Math.max(lines1.length, visibleItems.length);


    return (
        <div>
         
            {Array.from({ length: maxLines }, (_, i) => (
                <div key={i} className={styles.verseBlock}>
                    {lines1[i] && (
                        <p className={styles.print1}>
                            {lines1[i].trim()}
                        </p>
                    )}

                    {visibleItems[i] && (
                        <p
                            className={styles.print2}
                            dangerouslySetInnerHTML={{
                                __html: visibleItems[i].trim(),
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}