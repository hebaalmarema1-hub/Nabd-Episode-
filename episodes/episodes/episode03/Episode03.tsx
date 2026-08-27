import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Episode03: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const doorOpen = interpolate(frame, [90, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F4FAFD",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* خلفية العيادة */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, #EAF7FC 0%, #FFFFFF 100%)",
        }}
      />

      {/* الأرضية */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 220,
          background: "#E7EEF2",
          borderTop: "4px solid #D2E3EA",
        }}
      />

      {/* لوحة اسم العيادة */}
      <div
        style={{
          position: "absolute",
          top: 70,
          left: "50%",
          transform: "translateX(-50%)",
          background: "#FFFFFF",
          padding: "18px 45px",
          borderRadius: 18,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          color: "#087EA4",
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        عيادة العلاج الطبيعي
      </div>

      {/* الباب */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 100,
          transform: "translateX(-50%)",
          width: 430,
          height: 650,
          background: "#DCE9EE",
          borderRadius: "18px 18px 0 0",
          padding: 18,
          boxSizing: "border-box",
          boxShadow: "0 18px 45px rgba(0,0,0,0.15)",
        }}
      >
        {/* إطار الباب */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "10px 10px 0 0",
            background: "#FFFFFF",
          }}
        >
          {/* داخل العيادة */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, #DFF5FA 0%, #FFFFFF 100%)",
            }}
          />

          {/* لوحة صغيرة داخل العيادة */}
          <div
            style={{
              position: "absolute",
              top: 100,
              left: "50%",
              transform: "translateX(-50%)",
              width: 210,
              height: 80,
              borderRadius: 12,
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#087EA4",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            أهلاً بك 👋
          </div>

          {/* ورقة الباب */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${100 - doorOpen * 100}%`,
              height: "100%",
              background:
                "linear-gradient(135deg, #087EA4 0%, #0B6685 100%)",
              transformOrigin: "left center",
              boxShadow: "8px 0 25px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: 35,
                top: "50%",
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#FFFFFF",
              }}
            />
          </div>
        </div>
      </div>

      {/* النص الافتتاحي */}
      <div
        style={{
          position: "absolute",
          left: 120,
          bottom: 120,
          width: 650,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            color: "#087EA4",
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          الحلقة الثالثة
        </div>

        <div
          style={{
            color: "#163B4A",
            fontSize: 46,
            fontWeight: 700,
            lineHeight: 1.35,
          }}
        >
          تخيل إن اليوم أول مرة
          <br />
          تدخل فيها لعيادة العلاج الطبيعي...
        </div>
      </div>
    </AbsoluteFill>
  );
};
