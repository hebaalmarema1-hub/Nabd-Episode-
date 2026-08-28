import React from "react";
import { AbsoluteFill } from "remotion";

export const Episode03: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#087EA4",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 80,
          fontWeight: 900,
        }}
      >
        الحلقة الثالثة تعمل ✅
      </div>
    </AbsoluteFill>
  );
};
