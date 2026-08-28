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

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #E5F6FA 0%, #FFFFFF 60%, #EEF9FB 100%)",
        fontFamily: "Arial, Tahoma, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* الشريط الأزرق */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 48,
          backgroundColor: "#087EA4",
        }}
      />

      {/* عنوان العيادة */}
      <div
        style={{
          position: "absolute",
          top: 45,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#FFFFFF",
          border: "4px solid #087EA4",
          borderRadius: 22,
          padding: "18px 55px",
          textAlign: "center",
          color: "#087EA4",
          fontSize: 38,
          fontWeight: 900,
          opacity,
          zIndex: 50,
        }}
      >
        PHYSICAL THERAPY

        <div
          style={{
            marginTop: 5,
            color: "#244B57",
            fontSize: 22,
            letterSpacing: 3,
          }}
        >
          CLINIC
        </div>
      </div>

      {/* باب العيادة */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 560,
          height: 650,
          backgroundColor: "#B8CDD4",
          padding: 16,
          borderRadius: "28px 28px 0 0",
          boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
          zIndex: 5,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#087EA4",
            borderRadius: "20px 20px 0 0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 55,
              left: 55,
              width: 450,
              height: 280,
              backgroundColor: "#DDF4FA",
              border: "8px solid white",
              borderRadius: 15,
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 380,
              left: 70,
              width: 420,
              backgroundColor: "white",
              borderRadius: 14,
              padding: "18px 8px",
              textAlign: "center",
              color: "#087EA4",
              fontSize: 25,
              fontWeight: 900,
            }}
          >
            PHYSICAL THERAPY
          </div>
        </div>
      </div>

      {/* ================= الشخصية ================= */}

      <Img
        src={staticFile("characters/IMG_0815.PNG")}
        style={{
          position: "absolute",
          left: 20,
          bottom: 45,
          width: 680,
          height: 800,
          objectFit: "contain",
          opacity,
          filter: "drop-shadow(0 18px 25px rgba(0,0,0,0.16))",
          zIndex: 30,
        }}
      />

      {/* الترحيب */}
      <div
        style={{
          position: "absolute",
          right: 100,
          bottom: 160,
          padding: "24px 55px",
          backgroundColor: "#FFFFFF",
          border: "4px solid #35B6D6",
          borderRadius: 28,
          color: "#087EA4",
          fontSize: 48,
          fontWeight: 900,
          boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
          opacity,
          zIndex: 60,
        }}
      >
        مرحبًا بك
      </div>

      {/* رقم المشهد */}
      <div
        style={{
          position: "absolute",
          left: 72,
          bottom: 40,
          color: "#087EA4",
          fontSize: 25,
          fontWeight: 900,
          zIndex: 60,
        }}
      >
        00
      </div>
    </AbsoluteFill>
  );
};
