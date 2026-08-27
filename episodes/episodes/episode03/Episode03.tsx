import React from "react";
import { AbsoluteFill, Img } from "remotion";

export const Episode03: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#EAF7FC",
        overflow: "hidden",
      }}
    >
      {/* خلفية */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(#EAF7FC, #FFFFFF)",
        }}
      />

      {/* عنوان */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#087EA4",
          fontFamily: "Arial, sans-serif",
          fontSize: 42,
          fontWeight: "bold",
          zIndex: 5,
        }}
      >
        الحلقة الثالثة
      </div>

      {/* الشخصية */}
      <Img
        src="/characters/nabd-host.jpeg"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 500,
          objectFit: "contain",
          zIndex: 3,
        }}
      />

      {/* بطاقة تعريف */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 100,
          backgroundColor: "#FFFFFF",
          padding: "20px 30px",
          borderRadius: 18,
          boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
          color: "#163B4A",
          fontFamily: "Arial, sans-serif",
          fontSize: 28,
          fontWeight: "bold",
          zIndex: 5,
        }}
      >
        أول زيارة للعلاج الطبيعي
      </div>
    </AbsoluteFill>
  );
};
