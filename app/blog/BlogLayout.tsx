"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import styles from "./BlogLayout.module.css";

type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [textsOpen, setTextsOpen] = useState(false); // submenu state

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
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
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
              <Link
                href="/blog/reflections/verbal-excess"
                onClick={() => setMenuOpen(false)}
              >
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

            {/* Texts with horizontal submenu */}
            <li style={{ position: "relative" }}>
              <button
                onClick={() => setTextsOpen(!textsOpen)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: "#007bff" ,
                  font: "inherit",
                }}
              >
                Awareness {textsOpen ? "▲" : "▼"}
              </button>

              {textsOpen && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    display: "flex",
                    gap: "1em",
                    backgroundColor: "#fff", // or any blue shade you like
                    color: "#007bff" ,// optional, to make text white for contrast
                    padding: "0.5em 1em",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <li>
                    <Link
                      href="/blog/ashtavakra"
                      onClick={() => setMenuOpen(false)}
                    >
                      Ashtavakra
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/brain/hijack"
                      onClick={() => setMenuOpen(false)}
                    >
                      Hijack
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/brain/story"
                      onClick={() => setMenuOpen(false)}
                    >
                      Story Telling
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Journal
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
        <hr className="my-8" />

        <p className="text-sm text-gray-500">
          This article is based on personal reflection and conversations supported by AI.
        </p>

        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Anamika's Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
