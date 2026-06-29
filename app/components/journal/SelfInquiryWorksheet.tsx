"use client"
import React, { useState } from 'react';
import styles from './Worksheet.module.css';

interface WorksheetState {
  trigger: string;
  egoStory: string;
  witnessObservation: string;
}

export const SelfInquiryWorksheet: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [form, setForm] = useState<WorksheetState>({
    trigger: '',
    egoStory: '',
    witnessObservation: '',
  });
  const [isInquiring, setIsInquiring] = useState<boolean>(false);

  const handleInputChange = (field: keyof WorksheetState, value: string) => {
    setForm((prev) => ({ ...prev, [value ? field : field]: value }));
  };

  const resetWorksheet = () => {
    setForm({ trigger: '', egoStory: '', witnessObservation: '' });
    setStep(1);
    setIsInquiring(false);
  };

  return (
    <div className={styles.worksheetContainer}>
      <div className={styles.worksheetHeader}>
        <h3>Atma-Vichara Interactive Worksheet</h3>
        <p>Use this real-time tool to dismantle internal agitation when unfairness triggers you.</p>
      </div>

      {/* Step Progress Tracker */}
      <div className={styles.progressTracker}>
        {[1, 2, 3, 4].map((s) => (
          <div 
            key={s} 
            className={`${styles.progressStep} ${step >= s ? styles.activeStep : ''}`}
          >
            Step {s}
          </div>
        ))}
      </div>

      {/* Step 1: The Trigger */}
      {step === 1 && (
        <div className={styles.stepContent}>
          <label className={styles.stepLabel}>
            Step 1: What is the external situation causing your agitation?
          </label>
          <p className={styles.stepHint}>Example: "The building committee missed a payment line item" or "Parents allocated more property to my sibling."</p>
          <textarea
            className={styles.stepInput}
            value={form.trigger}
            onChange={(e) => handleInputChange('trigger', e.target.value)}
            placeholder="Describe the objective external event facts..."
            rows={4}
          />
          <button 
            className={styles.nextButton} 
            disabled={!form.trigger.trim()} 
            onClick={() => setStep(2)}
          >
            Analyze Mind's Reaction →
          </button>
        </div>
      )}

      {/* Step 2: The Ego Ownership */}
      {step === 2 && (
        <div className={styles.stepContent}>
          <label className={styles.stepLabel}>
            Step 2: What is the personal story your ego (<em>Ahamkara</em>) added to this?
          </label>
          <p className={styles.stepHint}>Example: "They are disrespecting me," "I am not valued by my family," or "They think I am foolish."</p>
          <textarea
            className={styles.stepInput}
            value={form.egoStory}
            onChange={(e) => handleInputChange('egoStory', e.target.value)}
            placeholder="What is the silent personal narrative or accusation running in your head?"
            rows={4}
          />
          <div className={styles.buttonGroup}>
            <button className={styles.backButton} onClick={() => setStep(1)}>← Back</button>
            <button 
              className={styles.nextButton} 
              disabled={!form.egoStory.trim()} 
              onClick={() => setStep(3)}
            >
              Shift to the Witness →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Strip the Identification */}
      {step === 3 && (
        <div className={styles.stepContent}>
          <label className={styles.stepLabel}>
            Step 3: Strip personal ownership. Rewrite the situation as a neutral observer.
          </label>
          <p className={styles.stepHint}>Example: "The ledger has a data clerical error." or "Two humans are displaying favoritism based on their own internal conditioning."</p>
          <textarea
            className={styles.stepInput}
            value={form.witnessObservation}
            onChange={(e) => handleInputChange('witnessObservation', e.target.value)}
            placeholder="State the facts clearly without using the words 'I', 'Me', or 'My'..."
            rows={4}
          />
          <div className={styles.buttonGroup}>
            <button className={styles.backButton} onClick={() => setStep(2)}>← Back</button>
            <button 
              className={styles.nextButton} 
              disabled={!form.witnessObservation.trim()} 
              onClick={() => {
                setStep(4);
                setIsInquiring(true);
              }}
            >
              Initiate Self-Inquiry (Atma-Vichara) →
            </button>
          </div>
        </div>
      )}

      {/* Step 4: The Ultimate Ramana Inquiry */}
      {step === 4 && (
        <div className={`${styles.stepContent} ${styles.meditativeState}`}>
          <h4 className={styles.inquiryQuestion}>"To whom does this agitation arise?"</h4>
          <p className={styles.inquiryAnswer}>The mind answers: <em>"To me."</em></p>
          
          <div className={styles.coreInquiryBox}>
            <h4>"Then, Who Am I?"</h4>
            <p>
              Do not look for a verbal answer. Turn your attention away from the ledger, away from the family property, and away from your thoughts. Turn your attention 180-degrees backward onto the one who is looking.
            </p>
            <p className={styles.silencePrompt}>
              Rest in that silent awareness. You are the unaffected space in which these temporary thoughts appear and disappear.
            </p>
          </div>

          <div className={styles.summaryReviewBox}>
            <h5>Your Inquiry Mapping Summary:</h5>
            <ul>
              <li><strong>The Material Trigger:</strong> {form.trigger}</li>
              <li><strong>The Ego Hook:</strong> {form.egoStory}</li>
              <li><strong>The Impersonal Reality:</strong> {form.witnessObservation}</li>
            </ul>
          </div>

          <button className={styles.resetButton} onClick={resetWorksheet}>
            Clear & Return to Stillness
          </button>
        </div>
      )}
    </div>
  );
};
