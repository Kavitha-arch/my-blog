"use client";

import React, { useState } from "react"; 
import BlogLayout from "../../BlogLayout";
import HijackDiagram from "@/app/components/HijackDiagram";

export default function HijackPage() {
  const [showDiagram, setShowDiagram] = useState(false);

  return (
    <BlogLayout>
      <div>
        <h2>The Hijacking Mechanism</h2>
        <p>
          When you try to remain in pure awareness:
        </p>
        <p>
          <strong>1. Prefrontal Cortex (PFC)</strong> wants to make sense of experience. It automatically <em>constructs stories</em> to organize perception. Even neutral sensations get labeled: “I feel restless,” “I am not meditating correctly.” This creates a subtle narrative that pulls you out of pure observing.
        </p>
        <p>
          <strong>2. Amygdala activation</strong> detects <em>threat, reward, or novelty</em> in experience. It amplifies emotional signals: fear, anxiety, craving, irritation. Once triggered, your body and mind feel urgent signals — heart rate up, tension, restlessness. Your PFC interprets these feelings as meaningful, generating new stories: “Something is wrong!” or “I must fix this.”
        </p>
        <p>
          <strong>3. Default Mode Network (DMN)</strong> (PCC, medial PFC) automatically drifts into self-referential thought. Memories of past mistakes, future worries, or comparisons pop up. Even subtle thoughts hijack your attention away from raw sensory awareness.
        </p>

        <h2>Why Awareness Feels Hard</h2>
        <p>
          <strong>Evolutionary design:</strong> Your brain evolved for survival, not mindfulness. PFC + Amygdala loops detect danger, plan, and motivate action. Being “just aware” is neutral, low-threat, and low-priority — the brain defaults to story + emotion.
        </p>
        <p>
          <strong>Attention is limited:</strong> Awareness requires sustained top-down regulation from the PFC. But emotional hijacks from the amygdala shrink PFC resources, making it easier to slip back into narrative and reactivity.
        </p>
        <p>
          <strong>Habitual patterns:</strong> Years of reacting to desire, fear, and craving create strong neural loops. The moment you try to observe, old loops fire automatically: “I need this,” “I am missing that,” “I am failing.” Awareness must compete with deeply ingrained neural habits.
        </p>

        <h2>How the Hijack Looks in Real-Time</h2>
        <p>
          You sit to meditate and focus on your breath.
        </p>
        <p>
          <strong>Step 1:</strong> You notice a sensation — the PFC labels it: “I am distracted.”
        </p>
        <p>
          <strong>Step 2:</strong> Amygdala amplifies subtle anxiety about distraction: “I must focus better!”
        </p>
        <p>
          <strong>Step 3:</strong> PFC reacts to this emotional signal: “I am failing at meditation.”
        </p>
        <p>
          Result: You are pulled completely into the story — awareness slips away.  
          Notice that it’s not a failure of awareness — it’s how the PFC + amygdala system is wired to constantly generate meaning and urgency. Awareness is always there; you just lose access temporarily while the hijack loop runs.
        </p>

        <h2>How Awareness Can Persist</h2>
        <p>
          Awareness isn’t about stopping thoughts — it’s about not identifying with them. Each time you notice the story or emotional spike, you “label and release”:
        </p>
        <ul>
          <li><strong>Notice:</strong> “There’s a thought about failure.”</li>
          <li><strong>Observe:</strong> “Ah, this is PFC storytelling and amygdala alarm.”</li>
          <li><strong>Return:</strong> To breath, sensation, or raw awareness.</li>
        </ul>
        <p>
          Over time, this weakens the PFC–amygdala hijack loop: less emotional reactivity, less identification with narratives, and easier access to pure observation.
        </p>

        <h2>Key Insight</h2>
        <p>
          Hijacking is normal and inevitable because your brain is designed to react and make sense of everything. Awareness is always present, but your attention can shift toward narrative and emotion. Mindfulness practice trains the PFC to recognize the hijack and allow awareness to step back, strengthening over time.
        </p>

        {/* Hijack Button */}
        <div style={{ margin: "2em 0", textAlign: "center" }}>
          <button
            onClick={() => setShowDiagram(!showDiagram)}
            style={{
              padding: "0.5em 1.2em",
              fontSize: "1em",
              borderRadius: "8px",
              border: "1px solid #555",
              backgroundColor: "#f0f0f0",
              cursor: "pointer",
            }}
          >
            {showDiagram ? "Hide Hijack Diagram" : "Show Hijack Diagram"}
          </button>
        </div>

        {showDiagram && <HijackDiagram />}
      </div>
    </BlogLayout>
  );
}
