
import { Verse } from "@/app/data/mahishasura";
import styles from "./BookBlock.module.css";
type BookBlockProps = {
    verse: Verse;
};

type MeaningPart = {
    sanskrit: string;
    meaning: string;
};

export function BookBlock({ verse }: BookBlockProps) {
    const sanskritLines = verse.sanskrit
        .trim()
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

    if (!verse.meaning || verse.meaning.length === 0) return null;

    const meaningLines: MeaningPart[][] = verse.meaning
        .filter(item => !item.trim().includes("Psychological:"))
        .map(item => {
            const matches = [
                ...item.matchAll(
                    /<span\s+class=["']highlight["'][^>]*data-sanskrit=["']([^"']+)["'][^>]*>(.*?)<\/span>/gi
                ),
            ];

            return matches.map(match => ({
                sanskrit: match[1].trim(),
                meaning: match[2].trim(),
            }));
        });

    const getColumnSpan = (count: number, index: number) => {
        if (count === 1) return 4;
        if (count === 2) return 2;
        if (count === 3) return index === 2 ? 2 : 1;
        return 1;
    };


    return (
        <div className={styles.bookBlock}>
            {sanskritLines.map((sanskritLine, lineIndex) => {
                const meanings = meaningLines[lineIndex] || [];

                return (
                    <div key={lineIndex} className={styles.verseBlock}>
                        {/* Complete Sanskrit line 
                        <div className={styles.sanskritWord}>
                            {sanskritLine}
                        </div>
                        */}
                        {/* Meanings */}
                        {lineIndex !== 3 && meanings.length > 0 && (
                            <div className={styles.meaningLine}>
                                {meanings.map((item, index) => (
                                    <div
                                        key={index}
                                        className={styles.meaningItem}
                                        style={{
                                            gridColumn: `span ${getColumnSpan(
                                                meanings.length,
                                                index
                                            )}`,
                                        }}
                                    >
                                        <div className={styles.sanskritWord}>
                                            {item.sanskrit}
                                        </div>

                                        <div className={styles.meaning}>
                                            {item.meaning}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
            {/* Closing refrain */}
            <div className={styles.closingRefrain}>
                जय जय हे महिषासुरमर्दिनि रम्यकपर्दिनि शैलसुते
            </div>
        </div>
    );

}
