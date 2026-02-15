"use client";

import React from "react";

export default function HijackDiagram() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2em 0" }}>
      {/* Awareness Box */}
      <div
        style={{
          backgroundColor: "#a0e7a0", // green
          padding: "1em 2em",
          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        <strong>Awareness</strong> <br />
        Observes thoughts and emotions without attachment. Always present but can be overridden temporarily.
      </div>

      {/* Arrow down */}
      <div style={{ margin: "1em 0", fontSize: "1.2em" }}>⬇ Attention drifts ⬇</div>

      {/* PFC and Amygdala Loop */}
      <div style={{ display: "flex", gap: "2em", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Prefrontal Cortex */}
        <div
          style={{
            backgroundColor: "#a0c4ff", // blue
            padding: "1em",
            borderRadius: "10px",
            minWidth: "200px",
            textAlign: "center",
          }}
        >
          <strong>Prefrontal Cortex (PFC)</strong> <br />
          Storyteller / Narrative self <br />
          Labels sensations, creates meaning: “I am distracted,” “I am failing”
        </div>

        {/* Amygdala */}
        <div
          style={{
            backgroundColor: "#ff9f9f", // red
            padding: "1em",
            borderRadius: "10px",
            minWidth: "200px",
            textAlign: "center",
          }}
        >
          <strong>Amygdala</strong> <br />
          Emotional amplifier <br />
          Adds urgency, anxiety, fear, craving <br />
          Amplifies PFC story, hijacks attention
        </div>
      </div>

      {/* Hijack Loop Arrow */}
      <div style={{ marginTop: "1em", textAlign: "center", fontStyle: "italic" }}>
        PFC ↔ Amygdala loop creates distraction and emotional hijack <br />
        Awareness temporarily loses access to the present moment
      </div>

      {/* Return Arrow */}
      <div style={{ marginTop: "1em", fontSize: "1.2em" }}>⬆ Step back and observe ⬆</div>

      {/* Awareness reminder */}
      <div
        style={{
          backgroundColor: "#a0e7a0", // green
          padding: "1em 2em",
          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        <strong>Awareness</strong> <br />
        Labels the loop: “Ah, this is PFC storytelling and Amygdala alarm.” <br />
        Attention returns to present moment, weakening the hijack over time
      </div>
    </div>
  );
}
