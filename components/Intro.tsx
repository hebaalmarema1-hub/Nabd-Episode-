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
  const podcastOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [15, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const characterOpacity = interpolate(frame, [35, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const characterX = interpolate(frame, [35, 65], [180, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const episodeOpacity = interpolate(frame, [60, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logoScale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#EAF4FF",
        color: "#0B2D5C",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Soft blue background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #EAF4FF 55%, #D7EBFF 100%)",
        }}
      />
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          backgroundColor: "rgba(22,119,255,0.07)",
          top: -180,
          right: -120,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          backgroundColor: "rgba(22,119,255,0.06)",
          bottom: -140,
          left: -120,
        }}
      />
      {/* Main content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left content */}
        <div
          style={{
            width: "55%",
            marginLeft: 80,
            zIndex: 2,
          }}
        >
          {/* Podcast label */}
          <div
            style={{
              opacity: podcastOpacity,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#1677FF",
              marginBottom: 20,
            }}
          >
            PODCAST
          </div>
          {/* Logo */}
          <div
            style={{
              opacity: titleOpacity,
              transform: `scale(${logoScale})`,
              transformOrigin: "left center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              {/* Pulse logo */}
              <div
                style={{
                  width: 86,
                  height: 86,
                  borderRadius: "50%",
                  backgroundColor: "#1677FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 30px rgba(22,119,255,0.25)",
                }}
              >
                <div
                  style={{
                    color: "#FFFFFF",
                    fontSize: 34,
                    fontWeight: 800,
                  }}
                >
                  ∿
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 58,
                    fontWeight: 800,
                    color: "#0B2D5C",
                    lineHeight: 1,
                  }}
                >
                  نبض
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#1677FF",
                  }}
                >
                  العلاج الطبيعي
                </div>
              </div>
            </div>
          </div>
          {/* Episode title */}
          <div
            style={{
              opacity: episodeOpacity,
              marginTop: 55,
              paddingLeft: 8,
              borderLeft: "5px solid #1677FF",
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: "#5B6B82",
                marginBottom: 8,
              }}
            >
              نبض العلاج الطبيعي
            </div>
            <div
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: "#0B2D5C",
              }}
            >
              الحلقة الأولى
            </div>
          </div>
        </div>
        {/* Character */}
        <Img
          src={staticFile("characters/nabd-host.jpeg")}
          style={{
            position: "absolute",
            right: 70,
            bottom: -25,
            width: 500,
            height: 500,
            objectFit: "contain",
            opacity: characterOpacity,
            transform: `translateX(${characterX}px)`,
            zIndex: 3,
          }}
        />
      </div>
      {/* Bottom branding line */}
      <div
        style={{
          position: "absolute",
          bottom: 35,
          left: 80,
          right: 80,
          height: 2,
          backgroundColor: "rgba(22,119,255,0.15)",
        }}
      />
    </AbsoluteFill>
  );
};
