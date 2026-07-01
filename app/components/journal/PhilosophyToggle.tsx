import React, { useState } from 'react';
import styles from './PhilosophyToggle.module.css';

type ActiveTab = 'ramana' | 'patanjali';

export const PhilosophyToggle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('ramana');

  return (
    <div className={styles.summaryContainer}>
      <h3 className={styles.summaryTitle}>Dismantling the Loop: Two Pathways</h3>
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
          <div className={styles.summaryGrid}>
            <div className={styles.summaryColumn}>
              <h4>1. Intercept at the Thought Wave (Vritti)</h4>
              <p>
                An accounting error is just objective data. The loop locks when the ego (<em>Ahamkara</em>) claims ownership: <em>"They are disrespecting MY need for order."</em> By refusing to attach personal identity to the event, you stop the thought from hardening into a craving (<em>Kama</em>).
              </p>
            </div>

            <div className={styles.summaryColumn}>
              <h4>2. Apply Self-Inquiry (Atma-Vichara)</h4>
              <p>
                When internal agitation spikes, turn the spotlight inward: <strong>"To whom is this agitation happening?"</strong> Instead of obsessing over the inaccuracies or family dynamics, track the origin of the "I" that feels hurt. This anchor dissolves the psychic thirst for validation.
              </p>
            </div>

            <div className={styles.summaryColumn}>
              <h4>3. Shift to Nishkama Karma</h4>
              <p>
                By neutralizing internal friction, you transition from reaction to purposeful, inspired action. You can still calmly present an data at the meeting, but you do it as a clean duty, completely unbothered by whether they validate or thank you.
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.summaryGrid}>
            <div className={styles.summaryColumn}>
              <h4>1. Practice Upekṣā (Equanimity)</h4>
              <p>
                In Yoga Sutra 1.33, Patanjali advises cultivating <strong>Upekṣā (neutral indifference)</strong> toward careless or unjust behaviors (<em>Apunye</em>). You see their flaws clearly as a fact of nature, but you refuse to let their dynamic conditioning disrupt the lake of your mind.
              </p>
            </div>

            <div className={styles.summaryColumn}>
              <h4>2. Pratipaksha Bhavanam (Mental Reset)</h4>
              <p>
                Yoga Sutra 2.33 states: <em>"Vitarka-badhane pratipaksha-bhavanam."</em> When triggered into a 3-month rumination loop, intentionally choose to pivot the mind. Starve the active <em>vasana</em> by consciously substituting a calm, witness-based alternative thought immediately.
              </p>
            </div>

            <div className={styles.summaryColumn}>
              <h4>3. Kriya Yoga & Surrender</h4>
              <p>
                Practice <strong>Tapas</strong> (mental self-discipline to not over-analyze things) and <strong>Ishvara Pranidhana</strong> (surrender). You perform your absolute best—you type the clear data email, you attend the AGM—and then you completely surrender the final outcome to the universe.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Sanskrit Verse Visual Anchor Box Shared Bottom Callout */}
      <div className={styles.gitaQuoteBox}>
        <span className={styles.sanskritScript}>
          <strong>तस्मात् सर्वेषु कालेषु मामनुस्मर युध्य च।</strong>
        </span>
        <span className={styles.sanskritTranslation}>
          — "Therefore, at all times, remember Me (the Self) and fight." — Bhagavad Gita 8.7 (Protect your spiritual home first, then execute your outer duties).
        </span>
      </div>
    </div>
  );
};
