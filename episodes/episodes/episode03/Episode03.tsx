import React from "react";
import { AbsoluteFill } from "remotion";

export const Episode03: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#EAF7FC",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 500,
          height: 650,
          backgroundColor: "#087EA4",
          borderRadius: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontSize: 45,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        EPISODE 03
      </div>
    </AbsoluteFill>
  );
};
