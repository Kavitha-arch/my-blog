"use client"
import React, { useState } from 'react';
import styles from './AnamikaScenario.module.css';

type InnerState = 'reactive_ego' | 'unconditioned_self';

export const AnamikaScenarioSandbox: React.FC = () => {
  const [internalState, setInternalState] = useState<InnerState>('reactive_ego');

  return (
    <div className={styles.sandboxWrapper}>
      <div className={styles.sandboxHeader}>
        <span className={styles.protagonistBadge}>Active Case Study</span>
        <h4>The Shared Kitchen: Anamika & Mauna</h4>
        <p>Observe how Anamika's internal reality completely alters her external environment.</p>
      </div>

      {/* State Selection Toggle controls */}
      <div className={styles.stateToggleGroup}>
        <button 
          onClick={() => setInternalState('reactive_ego')}
          className={`${styles.sandboxStateBtn} ${internalState === 'reactive_ego' ? styles.btnAlertActive : ''}`}
        >
          1. Reactive Ego (The Blind Spot)
        </button>
        <button 
          onClick={() => setInternalState('unconditioned_self')}
          className={`${styles.sandboxStateBtn} ${internalState === 'unconditioned_self' ? styles.btnBlissActive : ''}`}
        >
          2. Unconditioned Self (Verse 13)
        </button>
      </div>

      {/* Dynamic Conditional Rendering Area based on active state state */}
      <div className={styles.sandboxDisplayPanel}>
        {internalState === 'reactive_ego' ? (
          <div className={styles.panelEgoState}>
            <h5>The Mechanics of Spiritual Narcissism (Klesha Node):</h5>
            <ul>
              <li><strong>Anamika's Mental State:</strong> Cold, silent, judgmental rudeness. Her energy tightens defensively.</li>
              <li><strong>The Egoic Justification:</strong> <em>"I am a seeker living purely; Mauna's behavior is incorrect and toxic."</em></li>
              <li><strong>Patanjali's Diagnostic (Sutra 2.34):</strong> This justified mental violence breeds infinite ignorance and traps Anamika in deep emotional pain.</li>
            </ul>
          </div>
        ) : (
          <div className={styles.panelBlissState}>
            <h5>The Overflowing Source of Bliss (Verse 13 Realization):</h5>
            <ul>
              <li><strong>Anamika's Mental State:</strong> Expansive, neutral, witnessing presence. Her posture relaxes fully.</li>
              <li><strong>The Pure Realization:</strong> She invokes the Sovereign Elephant (13.1) and Ocean of Beauty (13.2). Mauna's quirks cannot touch her vastness.</li>
              <li><strong>The Energetic Shift:</strong> She stops trying to "attain" peace. Her pure, non-judgmental presence radiates out, becoming the dominant frequency in the room.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
