import React from "react";
import { AbsoluteFill, Img, useCurrentFrame, interpolate, staticFile } from "remotion";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const logoOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const characterOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const characterY = interpolate(frame, [20, 50], [80, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0B1020",
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: logoOpacity,
            fontSize: 100,
            fontWeight: 800,
            letterSpacing: 8,
            color: "#5EEAD4",
          }}
        >
          نبض
        </div>

        <div
          style={{
            opacity: logoOpacity,
            marginTop: 18,
            fontSize: 32,
            color: "#FFFFFF",
          }}
        >
          الحلقة الأولى
        </div>

        <Img
         src={staticFile("characters/nabd-host.jpeg")}
          style={{
            position: "absolute",
            bottom: -40,
            right: 180,
            width: 430,
            height: 430,
            objectFit: "contain",
            opacity: characterOpacity,
            transform: `translateY(${characterY}px)`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
