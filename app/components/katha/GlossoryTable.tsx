
import styles from "./MeaningTable.module.css";
import { glossary, GlossaryEntry } from "@/app/data/mahishasura/glossory";
 

export default function GlossaryTable() {
    return (
        <div className={styles.meaningTableContainer}>
            <table className={styles.meaningTable}>
                <thead>
                    <tr>
                        <th>Sanskrit Word</th>
                        <th>Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    {glossary.map((entry: GlossaryEntry) => (
                        <tr key={entry.sanskrit}>
                            <td dangerouslySetInnerHTML={{ __html: entry.sanskrit }} />
                            <td dangerouslySetInnerHTML={{ __html: entry.psychologicalMeaning }} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}