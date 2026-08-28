import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const Episode03: React.FC = () => {
  const frame = useCurrentFrame();

  // حركة الشخصية من اليسار إلى أمام الباب
  const characterLeft = interpolate(
    frame,
    [0, 60, 100],
    [-450, 180, 230],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // ظهور الشخصية تدريجيًا
  const opacity = interpolate(
    frame,
    [0, 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

export const Episode03: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F5FAFC",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* الحائط */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #EAF7FC 0%, #FFFFFF 70%)",
        }}
      />

      {/* الشريط الجانبي */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 70,
          height: "100%",
          backgroundColor: "#087EA4",
        }}
      />

      {/* الأرضية */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 210,
          backgroundColor: "#D8E4E8",
          borderTop: "6px solid #C1D2D8",
        }}
      />

      {/* لوحة العيادة */}
      <div
        style={{
          position: "absolute",
          top: 55,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#FFFFFF",
          padding: "22px 55px",
          borderRadius: 20,
          border: "4px solid #087EA4",
          color: "#087EA4",
          fontSize: 38,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        PHYSICAL THERAPY

        <div
          style={{
            marginTop: 8,
            fontSize: 24,
            color: "#4A6873",
            fontWeight: "normal",
          }}
        >
          CLINIC
        </div>
      </div>

      {/* إطار الباب */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 620,
          height: 690,
          backgroundColor: "#B7CBD2",
          padding: 18,
          borderRadius: "28px 28px 0 0",
          boxSizing: "border-box",
        }}
      >
        {/* الباب */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundColor: "#087EA4",
            borderRadius: "18px 18px 0 0",
          }}
        >
          {/* زجاج الباب */}
          <div
            style={{
              position: "absolute",
              top: 35,
              left: 45,
              right: 45,
              height: 300,
              backgroundColor: "#DDF4FA",
              border: "8px solid #FFFFFF",
              borderRadius: 14,
            }}
          />

          {/* لوحة الباب */}
          <div
            style={{
              position: "absolute",
              top: 365,
              left: 80,
              right: 80,
              padding: "18px 10px",
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              textAlign: "center",
              color: "#087EA4",
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            PHYSICAL THERAPY
          </div>

          {/* المقبض */}
          <div
            style={{
              position: "absolute",
              right: 35,
              top: "58%",
              width: 25,
              height: 25,
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
      </div>

      {/* الشخصية */}
      <Img
        src={staticFile("characters/IMG_0815.PNG")}
        style={{
          position: "absolute",
          left: 180,
          bottom: 60,
          width: 360,
          height: 500,
          objectFit: "contain",
        }}
      />

      {/* نص الترحيب */}
      <div
        style={{
          position: "absolute",
          left: 90,
          bottom: 35,
          backgroundColor: "#FFFFFF",
          padding: "14px 25px",
          borderRadius: 15,
          color: "#087EA4",
          fontSize: 26,
          fontWeight: "bold",
        }}
      >
        مرحبًا بك 👋
      </div>
    </AbsoluteFill>
  );
};
