"use client";

import React, { useState } from "react";

export default function Collapsible({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ margin: "1em 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          background: "none",
          border: "none",
          padding: 0,
        }}
      >
        {open ? "▼ " : "▶ "} {title}
      </button>
      {open && (
        <div
          style={{
            marginTop: "0.5em",
            marginLeft: "0.5em",
            padding: "1em",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
