import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const Episode03: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const door = interpolate(frame, [120, 180], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#EAF7FC",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Wall */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(#EAF7FC, #FFFFFF)",
        }}
      />

      {/* Floor */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 230,
          background: "#DDE8EC",
        }}
      />

      {/* Clinic sign */}
      <div
        style={{
          position: "absolute",
          top: 70,
          left: "50%",
          transform: "translateX(-50%)",
          padding: "18px 45px",
          background: "#FFFFFF",
          borderRadius: 18,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          color: "#087EA4",
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        عيادة العلاج الطبيعي
      </div>

      {/* Door frame */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 70,
          transform: "translateX(-50%)",
          width: 500,
          height: 700,
          background: "#C9DDE4",
          borderRadius: "22px 22px 0 0",
          padding: 18,
          boxSizing: "border-box",
        }}
      >
        {/* Door opening */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            background: "#FFFFFF",
          }}
        >
          {/* Inside clinic */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #DDF6FA, #FFFFFF)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 100,
                left: "50%",
                transform: "translateX(-50%)",
                color: "#087EA4",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              أهلاً بك
            </div>
          </div>

          {/* Door */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${100 - door}%`,
              height: "100%",
              background: "#087EA4",
              boxShadow: "8px 0 25px rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 100,
                left: 25,
                right: 25,
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              العلاج الطبيعي
            </div>

            {/* Door handle */}
            <div
              style={{
                position: "absolute",
                right: 30,
                top: "50%",
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "#FFFFFF",
              }}
            />
          </div>
        </div>
      </div>

      {/* Opening text */}
      <div
        style={{
          position: "absolute",
          left: 100,
          bottom: 100,
          width: 650,
          opacity,
        }}
      >
        <div
          style={{
            color: "#087EA4",
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 15,
          }}
        >
          الحلقة الثالثة
        </div>

        <div
          style={{
            color: "#163B4A",
            fontSize: 42,
            fontWeight: 700,
            lineHeight: 1.4,
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
