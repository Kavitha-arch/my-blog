"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import styles from "./BlogLayout.module.css";

type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Header / Navbar */}
      <header className={styles["container-header"]}>
        <h2
          className={styles["container-logo"]}
          style={{ color: "#c00f0f" }}
        >
          Arunachala Shiva
        </h2>


        <button
          className={styles["container-mobileMenuButton"]}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav
          className={`${styles["container-nav"]} ${menuOpen ? styles["container-navOpen"] : ""
            }`}
        >
          <ul>
            <li>
              <Link href="/blog/whispers" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Articles
              </Link>
            </li>
            <li>
              <Link href="/blog/reflections/verbal-excess" onClick={() => setMenuOpen(false)}>
                Reflections
              </Link>
            </li>
             <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
}
