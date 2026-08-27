import React from "react";
import { AbsoluteFill } from "remotion";

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
          background:
            "linear-gradient(180deg, #EAF7FC 0%, #FFFFFF 70%)",
        }}
      />

      {/* ديكور جانبي */}
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

      {/* لوحة اسم العيادة */}
      <div
        style={{
          position: "absolute",
          top: 70,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#FFFFFF",
          padding: "25px 65px",
          borderRadius: 22,
          border: "4px solid #087EA4",
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          color: "#087EA4",
          fontSize: 40,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        PHYSICAL THERAPY
        <div
          style={{
            marginTop: 8,
            fontSize: 25,
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
          boxShadow: "0 15px 35px rgba(0,0,0,0.18)",
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
              boxSizing: "border-box",
            }}
          >
            {/* انعكاس الزجاج */}
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

          {/* مقبض الباب */}
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

      {/* عنوان الحلقة */}
      <div
        style={{
          position: "absolute",
          left: 110,
          bottom: 75,
          color: "#087EA4",
          fontSize: 32,
          fontWeight: "bold",
        }}
      >
        EPISODE 03
      </div>

      {/* وصف المشهد */}
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
        }}
      >
        First Visit
      </div>
    </AbsoluteFill>
  );
};
