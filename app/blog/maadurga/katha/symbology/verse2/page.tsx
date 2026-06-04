
"use client";

import React, { useState } from "react";
import BlogLayout from "@/app/blog/BlogLayout";
import styles from "../MythologySymbolism.module.css";

import {
  Shield,
  Brain,
  Heart,
  Star,
  ChevronRight,
  Swords,
  Sparkles,
} from "lucide-react";
import { VerseImage } from "@/app/components/katha/VerseImage";

export default function MythologySymbolism() {
  const [activeTab, setActiveTab] = useState("demons");

  const individualDemons = [
    {
      name: "Durdhara",
      translation: "The Unrestrainable / Irresistible",
      symbolism: "Blind, unbridled desire (Kama)",
      icon: <Heart size={24} color="#e11d48" />,
      description:
        "Human desires are insatiable and easily run wild if not governed by intellect and spiritual discipline. Like an uncapturable warrior, wild desire resists restraint.",
    },
    {
      name: "Durmukha",
      translation: "The Hideous / Foul-Mouthed",
      symbolism: "Corrosive anger (Krodha) and abuse",
      icon: <Brain size={24} color="#d97706" />,
      description:
        "Anger deforms a person's expression, making the face look hideous. It prompts abusive and destructive speech. When a desire is blocked, it often mutates into rage.",
    },
  ];

  const lineages = [
    {
      name: "Daityas",
      origin: "Sons of Diti ('divided' or 'bound')",
      symbolism: "Dualism, Separation, and Ego",
      details:
        "They symbolize a fragmented mindset that views the self as separate from the Divine. They represent physical strength, rigid ambition, and the primal instinct to conquer and possess.",
    },
    {
      name: "Danavas",
      origin: "Sons of Danu ('primordial waters')",
      symbolism: "Cosmic Inertia, Delusion, and Chaos",
      details:
        "They symbolize the primal darkness and ignorance (Tamas) that cloud human judgment. They represent the opposing forces of nature that resist spiritual awakening and harmony.",
    },
  ];

  return (
    <BlogLayout>
      <div className={styles.page}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>Devi Mahatmya Philosophical Study</span>
          </div>

          <h1 className={styles.title}>
            VERSE 2: The Symbolism of Cosmic Shadows
          </h1>

          <p className={styles.subtitle}>
            In Hindu mythology, demons are external personifications of
            internal human vices. The cosmic battle is a mirror of the
            psychological warfare within human consciousness.
          </p>
        </header>

        <VerseImage src= "/images/maa/symbolsverse2.png" 
        alt="Danavas"></VerseImage>

        {/* Main Content */}
        <main className={styles.container}>
          {/* Tabs */}
          <div className={styles.tabs}>
            <div className={styles.tabGroup}>
              <button
                onClick={() => setActiveTab("demons")}
                className={`${styles.tab} ${
                  activeTab === "demons" ? styles.activeTab : ""
                }`}
              >
                <Swords size={16} />
                <span>Individual Vices</span>
              </button>

              <button
                onClick={() => setActiveTab("lineages")}
                className={`${styles.tab} ${
                  activeTab === "lineages" ? styles.activeTab : ""
                }`}
              >
                <Shield size={16} />
                <span>Cosmic Lineages</span>
              </button>
            </div>
          </div>

          {/* Individual Demons */}
          {activeTab === "demons" && (
            <>
              <div>
                <h2 className={styles.sectionTitle}>
                  The Generals of Mahishasura
                </h2>

                <p className={styles.sectionText}>
                  Representing immediate psychological pitfalls that disrupt
                  human intellect.
                </p>
              </div>

              <div className={styles.cardGrid}>
                {individualDemons.map((demon) => (
                  <div key={demon.name} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconBox}>{demon.icon}</div>

                      <div>
                        <h3 className={styles.cardTitle}>{demon.name}</h3>

                        <p className={styles.translation}>
                          {demon.translation}
                        </p>
                      </div>
                    </div>

                    <div className={styles.symbolism}>
                      <strong>Symbolizes:</strong> {demon.symbolism}
                    </div>

                    <p className={styles.description}>
                      {demon.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className={styles.note}>
                <h4>
                  <ChevronRight size={16} />
                  The Psychological Mutation
                </h4>

                <p>
                  In Hindu psychology, desire and anger form a recurring cycle.
                  When an unbridled desire <strong>(Durdhara)</strong> faces a
                  barrier, it often transforms into explosive rage{" "}
                  <strong>(Durmukha)</strong>. Goddess Durga overcoming them
                  symbolizes mastery over reactive emotions and impulsive
                  behavior.
                </p>
              </div>
            </>
          )}

          {/* Lineages */}
          {activeTab === "lineages" && (
            <>
              <div>
                <h2 className={styles.sectionTitle}>
                  Daityas & Danavas
                </h2>

                <p className={styles.sectionText}>
                  The grand forces of nature that resist cosmic harmony and
                  spiritual clarity.
                </p>
              </div>

              <div className={styles.cardGrid}>
                {lineages.map((lineage) => (
                  <div
                    key={lineage.name}
                    className={styles.lineageCard}
                  >
                    <div className={styles.lineageOrigin}>
                      {lineage.origin}
                    </div>

                    <h3 className={styles.lineageTitle}>
                      {lineage.name}
                    </h3>

                    <div className={styles.lineageConcept}>
                      <strong>Core Concept:</strong>{" "}
                      {lineage.symbolism}
                    </div>

                    <p className={styles.lineageText}>
                      {lineage.details}
                    </p>

                    <div style={{ marginTop: "1rem" }}>
                      <Star size={20} color="#d97706" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Conclusion */}
          <section className={styles.conclusion}>
            <h3 className={styles.conclusionTitle}>
              The Internal Battleground
            </h3>

            <p className={styles.conclusionText}>
              The legendary war between <strong>Devas</strong> (forces of
              light, order, and unity) and <strong>Asuras</strong> (forces of
              darkness, chaos, and separation) is an active reality within our
              own consciousness. Divine intelligence, represented by Goddess
              Durga, continually rises to transform inner disorder into harmony,
              wisdom, and spiritual growth.
            </p>
          </section>
        </main>
      </div>
    </BlogLayout>
  );
} 
