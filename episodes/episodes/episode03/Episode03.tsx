import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

export const Episode03: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#E5F6FA",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img
        src={staticFile("characters/IMG_0815.PNG")}
        style={{
          width: 700,
          height: 800,
          objectFit: "contain",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 30,
          color: "#087EA4",
          fontSize: 35,
          fontWeight: 900,
        }}
      >
        اختبار الشخصية
      </div>
    </AbsoluteFill>
  );
};
