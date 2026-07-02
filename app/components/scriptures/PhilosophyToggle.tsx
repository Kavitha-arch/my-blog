import React, { useState } from 'react';
import styles from './PhilosophyToggle.module.css';
import stylesWorksheet from './Worksheet.module.css';
import stylesSummary from '@/app/blog/vasanas/freedom/Summary.module.css'

type ActiveTab = 'ramana' | 'patanjali';

export const PhilosophyToggle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('ramana');

  return (
    <div className={stylesSummary.summaryContainer}>
      <h3 className={stylesSummary.summaryTitle}>Dismantling the Loop: Two Pathways</h3>
      <p className={styles.summaryIntro}>
        Both sages agree that passivity is a trap. However, they provide different tactical toolkits to protect your spiritual home while handling active real-world responsibilities.
      </p>

      {/* Dynamic Tab Toggle Buttons */}
      <div className={styles.tabButtonGroup}>
        <button
          onClick={() => setActiveTab('ramana')}
          className={`${styles.tabButton} ${activeTab === 'ramana' ? styles.tabActive : ''}`}
        >
          Ramana's Direct Path (Inquiry)
        </button>
        <button
          onClick={() => setActiveTab('patanjali')}
          className={`${styles.tabButton} ${activeTab === 'patanjali' ? styles.tabActive : ''}`}
        >
          Patanjali's Step-by-Step Path (Yoga Sutras)
        </button>
      </div>

      {/* Tab content conditional rendering wrapper */}
      <div className={styles.tabContentArea}>
        {activeTab === 'ramana' ? (
          <div className={stylesSummary.summaryGrid}>
            <div className={stylesSummary.summaryColumn}>
              <h3>1. Intercept at the Thought Wave (Vritti)</h3>
              <p>
                An accounting error is just objective data. The loop locks when the ego (<em>Ahamkara</em>) claims ownership: <em>"They are disrespecting MY need for order."</em> By refusing to attach personal identity to the event, you stop the thought from hardening into a craving (<em>Kama</em>).
              </p>
            </div>

            <h3>2. Apply Self-Inquiry (Atma-Vichara)</h3>
            <div>
              <h4 className={stylesWorksheet.inquiryQuestion}>"To whom does this agitation arise?"</h4>
              <p className={stylesWorksheet.inquiryAnswer}>The mind answers: <em>"To me."</em></p>

              <div className={stylesWorksheet.coreInquiryBox}>
                <h4>"Then, Who Am I?"</h4>
                <p>
                  Do not look for a verbal answer. Turn your attention away from the errors, away from the relationships, and away from your thoughts. Turn your attention 180-degrees backward onto the one who is looking.
                </p>
                <p className={stylesWorksheet.silencePrompt}>
                  Rest in that silent awareness. You are the unaffected space in which these temporary thoughts appear and disappear.
                </p>
                <p>This anchor dissolves the psychic thirst for validation.</p>
              </div>
            </div>

            <div className={stylesSummary.summaryColumn}>
              <h3>3. Shift to Nishkama Karma</h3>
              <p>
                By neutralizing internal friction, you transition from reaction to purposeful, inspired action. You can still calmly present an data at the meeting, but you do it as a clean duty, completely unbothered by whether they validate or thank you.
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.summaryGrid}>
            <div className={styles.summaryColumn}>
              <h3>1. Practice Upekṣā (Equanimity)</h3>
              <p>
                In Yoga Sutra 1.33, Patanjali advises cultivating <strong>Upekṣā (neutral indifference)</strong> toward careless or unjust behaviors (<em>Apunye</em>). You see their flaws clearly as a fact of nature, but you refuse to let their dynamic conditioning disrupt the lake of your mind.
              </p>
            </div>

            <div className={styles.summaryColumn}>
              <h3>2. Pratipaksha Bhavanam (Mental Reset)</h3>
              <p>
                Yoga Sutra 2.33 states: <em>"Vitarka-badhane pratipaksha-bhavanam." —"When disturbed by negative thoughts, cultivate their opposite."</em> When a vasana triggers rumination,, intentionally choose to pivot the mind. Starve the active <em>vasana</em> by consciously cultivating its opposite. This weakens the habitual tendency by refusing to reinforce it..
              </p>
              <p>The "opposite" doesn't mean replacing a negative thought with an unrealistic positive one. It means consciously cultivating a wholesome attitude—such as compassion instead of hatred, patience instead of anger, or confidence instead of fear—that directly counteracts the mental disturbance. This is exactly what pratipakṣa-bhāvanam teaches.</p>

            </div>


            <div className={styles.summaryColumn}>
              <h3>3. Kriya Yoga & Surrender</h3>
              <p>
                Practice <strong>Tapas</strong> (mental self-discipline to not over-analyze things) and <strong>Ishvara Pranidhana</strong> (surrender). You perform your absolute best—you take the beat possible action—and then you completely surrender the final outcome to the universe.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Sanskrit Verse Visual Anchor Box Shared Bottom Callout */}
      <div className={stylesWorksheet.coreInquiryBox}>
        <ul>
          <li><strong>Habitual thought (vasana):</strong> "He insulted me. I'll never forgive him."</li>
          <li><strong><em>Pratipakṣa-bhāvanam</em> (opposite):</strong> "Holding on to anger only disturbs my own mind. I can respond with understanding or simply let this pass."</li>
        </ul>
        <span className={styles.sanskritScript}>
          <strong>यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्। <br />
            ततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥</strong>
        </span>
        <br />
        <span className={stylesWorksheet.silencePrompt}>
          "Wherever the restless and unsteady mind wanders, let one bring it back and place it under the control of the Self alone." — Bhagavad Gita 6.26 (Each time a <em>vasana</em> pulls the mind into rumination, gently return it to the witnessing Self.)
        </span>
      </div>
    </div>
  );
};
