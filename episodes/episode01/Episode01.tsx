import React from "react";
import { AbsoluteFill } from "remotion";
import { Character } from "../../components/Character";
export const Episode01: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0B1020",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Character />
    </AbsoluteFill>
  );
};
