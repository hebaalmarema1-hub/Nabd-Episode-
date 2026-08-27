import React from "react";
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
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #EAF7FC 0%, #FFFFFF 70%)",
        }}
      />

      {/* Left decoration */}
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

      {/* Right decoration */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 25,
          height: "100%",
          backgroundColor: "#087EA4",
        }}
      />

      {/* Floor */}
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

      {/* Clinic sign */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#FFFFFF",
          padding: "22px 55px",
          borderRadius: 20,
          border: "4px solid #087EA4",
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          color: "#087EA4",
          fontSize: 38,
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 5,
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

      {/* Door frame */}
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
          boxShadow: "0 15px 35px rgba(0,0,0,0.18)",
        }}
      >
        {/* Door */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundColor: "#087EA4",
            borderRadius: "18px 18px 0 0",
          }}
        >
          {/* Glass */}
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
              boxSizing: "border-box",
            }}
          >
            {/* Glass reflection */}
            <div
              style={{
                position: "absolute",
                left: 25,
                top: 20,
                width: 80,
                height: 240,
                backgroundColor: "rgba(255,255,255,0.35)",
                transform: "skewX(-15deg)",
              }}
            />
          </div>

          {/* Door sign */}
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

          {/* Door handle */}
          <div
            style={{
              position: "absolute",
              right: 35,
              top: "58%",
              width: 25,
              height: 25,
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </div>

      {/* Episode number */}
      <div
        style={{
          position: "absolute",
          left: 110,
          bottom: 75,
          color: "#087EA4",
          fontSize: 32,
          fontWeight: "bold",
          zIndex: 20,
        }}
      >
        EPISODE 03
      </div>

      {/* Scene title */}
      <div
        style={{
          position: "absolute",
          right: 110,
          bottom: 70,
          backgroundColor: "#FFFFFF",
          padding: "18px 30px",
          borderRadius: 15,
          color: "#31515C",
          fontSize: 25,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          zIndex: 20,
        }}
      >
        First Visit
      </div>

      {/* Nabd character */}
      <Img
        src={staticFile("characters/nabd-host.jpeg")}
        style={{
          position: "absolute",
          bottom: 0,
          left: 170,
          width: 430,
          height: 560,
          objectFit: "contain",
          zIndex: 15,
        }}
      />
    </AbsoluteFill>
  );
};
