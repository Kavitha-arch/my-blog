"use client";

import React, { useState } from "react";
import HijackDiagram from "../components/HijackDiagram";

export default function ShowHijackButton() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ margin: "2em 0", textAlign: "center" }}>
      <button
        onClick={() => setShow(!show)}
        style={{
          padding: "0.5em 1.2em",
          fontSize: "1em",
          borderRadius: "8px",
          border: "1px solid #555",
          backgroundColor: "#f0f0f0",
          cursor: "pointer",
        }}
      >
        {show ? "Hide Hijack Diagram" : "Show Hijack Diagram"}
      </button>

      {show && <HijackDiagram />}
    </div>
  );
}
