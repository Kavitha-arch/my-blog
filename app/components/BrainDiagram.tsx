"use client";

import React from "react";

export default function BrainDiagram() {
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
        Observer network: medial PFC, PCC, Insula <br />
        Notices thoughts, emotions, and desires without attachment
      </div>

      {/* Arrow down */}
      <div style={{ margin: "1em 0" }}>⬇ observes ⬇</div>

      {/* PFC and Amygdala Row */}
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
          <strong>Prefrontal Cortex</strong> <br />
          Storyteller / Narrative Self <br />
          Generates identity narratives: <br />
          “I am successful / I am a failure / I am spiritual”
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
          Adds urgency, fear, craving, emotional tone <br />
          Intensifies PFC narratives
        </div>
      </div>

      {/* Interaction arrow */}
      <div style={{ marginTop: "1em", textAlign: "center" }}>
        PFC & Amygdala influence each other while Awareness observes
      </div>
    </div>
  );
}
