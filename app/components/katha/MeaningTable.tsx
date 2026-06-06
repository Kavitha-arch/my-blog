"use client"
import styles from "./MeaningTable.module.css";
import { useState } from "react";  

type TableItem = {
  sanskrit: string;
  meaning: string;
};

type MeaningTableProps = {
  items: TableItem[];
};

export function MeaningTable({ items }: MeaningTableProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Safety guard: renders absolutely nothing if data is empty or missing
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.collapsibleWrapper}>
      {/* Trigger Button */}
      <button 
        className={`${styles.toggleButton} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.buttonText}>
          📚 View Wordwise Meaning ({items.length} words)
        </span>
        <span className={styles.arrowIcon}>{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Renders the table content area ONLY when isOpen is true */}
      {isOpen && (
        <div className={styles.meaningTableContainer}>
          <table className={styles.meaningTable}>
            <thead>
              <tr>
                <th>Sanskrit Word</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td dangerouslySetInnerHTML={{ __html: item.sanskrit }} />
                  <td dangerouslySetInnerHTML={{ __html: item.meaning }} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
