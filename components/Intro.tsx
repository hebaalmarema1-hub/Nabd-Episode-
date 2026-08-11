import React from "react";
import {
  AbsoluteFill,
  Img,
  useCurrentFrame,
  interpolate,
  staticFile,
} from "remotion";
export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const podcastOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logoOpacity = interpolate(frame, [10, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logoScale = interpolate(frame, [10, 35], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const characterOpacity = interpolate(frame, [25, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const characterX = interpolate(frame, [25, 60], [220, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const episodeOpacity = interpolate(frame, [55, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#EAF4FF",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #EEF7FF 48%, #D9ECFF 100%)",
        }}
      />
      {/* Decorative blue circles */}
      <div
        style={{
          position: "absolute",
          width: 650,
          height: 650,
          borderRadius: "50%",
          backgroundColor: "rgba(22,119,255,0.07)",
          top: -280,
          right: -160,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          backgroundColor: "rgba(22,119,255,0.06)",
          bottom: -180,
          left: -140,
        }}
      />
      {/* Main content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left side */}
        <div
          style={{
            width: "54%",
            marginLeft: 85,
            zIndex: 4,
          }}
        >
          {/* Podcast */}
          <div
            style={{
              opacity: podcastOpacity,
              color: "#1677FF",
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: 7,
              marginBottom: 25,
            }}
          >
            PODCAST
          </div>
          {/* Large logo */}
          <div
            style={{
              opacity: logoOpacity,
              transform: `scale(${logoScale})`,
              transformOrigin: "left center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
              }}
            >
              {/* Large pulse icon */}
              <div
                style={{
                  width: 125,
                  height: 125,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(145deg, #1677FF, #0B5FCC)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 18px 40px rgba(22,119,255,0.30)",
                }}
              >
                <div
                  style={{
                    width: 92,
                    height: 55,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontSize: 70,
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  ∿
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 76,
                    fontWeight: 800,
                    lineHeight: 0.95,
                    color: "#0B2D5C",
                  }}
                >
                  نبض
                </div>
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 34,
                    fontWeight: 600,
                    color: "#1677FF",
                  }}
                >
                  العلاج الطبيعي
                </div>
              </div>
            </div>
          </div>
          {/* Episode */}
          <div
            style={{
              opacity: episodeOpacity,
              marginTop: 60,
              paddingLeft: 18,
              borderLeft: "6px solid #1677FF",
            }}
          >
            <div
              style={{
                fontSize: 26,
                color: "#61738B",
                marginBottom: 8,
              }}
            >
              بودكاست نبض العلاج الطبيعي
            </div>
            <div
              style={{
                fontSize: 50,
                fontWeight: 800,
                color: "#0B2D5C",
              }}
            >
              الحلقة الأولى
            </div>
          </div>
        </div>
        {/* Large character */}
        <Img
          src={staticFile("characters/nabd-host.jpeg")}
          style={{
            position: "absolute",
            right: 25,
            bottom: -70,
            width: 610,
            height: 610,
            objectFit: "contain",
            opacity: characterOpacity,
            transform: `translateX(${characterX}px)`,
            zIndex: 3,
          }}
        />
      </div>
      {/* Bottom line */}
      <div
        style={{
          position: "absolute",
          left: 85,
          right: 85,
          bottom: 38,
          height: 2,
          backgroundColor: "rgba(22,119,255,0.16)",
        }}
      />
    </AbsoluteFill>
  );
};
