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
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
          <li className="hidden">
              <Link href="/blog/transparency" onClick={() => setMenuOpen(false)}>
                Transparency
              </Link>
            </li>
            <li className="hidden">
              <Link href="/blog/reflections/verbal-excess" onClick={() => setMenuOpen(false)}>
                Reflections
              </Link>
            </li>
             <li className="hidden">
              <Link href="/blog/dharma" onClick={() => setMenuOpen(false)}>
                Dharma
              </Link>
            </li>
            <li className="hidden">
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
               <li>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Whispers
              </Link>
            </li>
            <li>
              <Link href="/feedback" onClick={() => setMenuOpen(false)}>
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page content */}
      <main>{children}</main>

          {/* Footer */}
      <footer className="mt-14 bg-gray-100 py-6 text-center">
        {/* Journal Link in Footer */}
    
        <hr className="my-8" />

        <p className="text-sm text-gray-500">
          This article is based on personal reflection and conversations supported by AI.
        </p>


        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Anamika's Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
