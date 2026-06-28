import { references, ReferenceEntry } from "@/app/data/mahishasura/references";
import styles from "./ReferenceBlock.module.css";


export default function ReferencesBlock() {
    console.log(
        [...references]
            .sort((a, b) => a.text.trim().toLowerCase().localeCompare(b.text.trim().toLowerCase()))
            .map(r => r.text)
    );
    return (
        <div>
            {[...references]
                .sort((a, b) => a.text.trim().toLowerCase().localeCompare(b.text.trim().toLowerCase()))
                .map((entry: ReferenceEntry) => (
                    <section key={entry.text}>
                        <div
                            className={styles.pageTitle}>
                            {entry.text.trim()}
                        </div>

                        <div className={styles.referenceBlock}>
                            {entry.description && (
                                <blockquote className={styles.description}>
                                    {entry.description.map((item, i) => (
                                        <p key={i}>
                                            <span dangerouslySetInnerHTML={{ __html: item }} />
                                        </p>
                                    ))}
                                </blockquote>
                            )}
                            {entry.website.map((item, i) => (
                                <p key={i}>
                                    <a
                                        href={item.trim()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.trim()}
                                    </a>
                                </p>
                            ))}

                        </div>
                    </section>

                ))}

        </div>
    );
}