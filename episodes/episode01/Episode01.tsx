import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
  Img,
  staticFile,
} from "remotion";
const BLUE = "#1677FF";
const DARK = "#0B2D5C";
const MUTED = "#60748A";
const backgroundStyle = {
  background: "linear-gradient(135deg, #FFFFFF 0%, #EAF4FF 100%)",
  fontFamily: "Arial, sans-serif",
  overflow: "hidden" as const,
};
const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return <div style={{ opacity }}>{children}</div>;
};
const MovingCharacter: React.FC<{
  file: string;
  side?: "left" | "right";
  size?: number;
}> = ({ file, side = "right", size = 700 }) => {
  const frame = useCurrentFrame();
  const start = side === "right" ? 280 : -280;
  const x = interpolate(frame, [0, 30], [start, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const breathe = Math.sin(frame / 12) * 4;
  const scale = interpolate(frame, [0, 25], [0.82, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Img
      src={staticFile(`characters/${file}`)}
      style={{
        position: "absolute",
        [side]: 35,
        bottom: -100,
        width: size,
        height: size,
        objectFit: "contain",
        opacity,
        transform: `translateX(${x}px) translateY(${breathe}px) scale(${scale})`,
        zIndex: 20,
      }}
    />
  );
};
const FloatingWords: React.FC = () => {
  const frame = useCurrentFrame();
  const words = [
    { text: "حركة", x: 90, y: 150, delay: 0 },
    { text: "صحة", x: 1450, y: 180, delay: 15 },
    { text: "تأهيل", x: 1250, y: 760, delay: 30 },
  ];
  return (
    <>
      {words.map((word) => {
        const opacity = interpolate(
          frame,
          [word.delay, word.delay + 18],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        );
        const y = interpolate(
          frame,
          [word.delay, word.delay + 20],
          [30, 0],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        );
        return (
          <div
            key={word.text}
            style={{
              position: "absolute",
              left: word.x,
              top: word.y,
              opacity,
              transform: `translateY(${y}px)`,
              padding: "14px 25px",
              borderRadius: 30,
              background: "#FFFFFF",
              color: BLUE,
              fontSize: 28,
              fontWeight: 800,
              boxShadow: "0 10px 30px rgba(11,45,92,0.10)",
            }}
          >
            {word.text}
          </div>
        );
      })}
    </>
  );
};
const Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const logoScale = interpolate(frame, [0, 30], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [30, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={backgroundStyle}>
      <FloatingWords />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingRight: 430,
        }}
      >
        <div>
          <div
            style={{
              color: BLUE,
              fontSize: 52,
              fontWeight: 900,
              transform: `scale(${logoScale})`,
            }}
          >
            نبض
          </div>
          <div
            style={{
              marginTop: 5,
              fontSize: 34,
              fontWeight: 800,
              color: DARK,
              opacity: titleOpacity,
            }}
          >
            العلاج الطبيعي
          </div>
          <div
            style={{
              marginTop: 45,
              fontSize: 74,
              fontWeight: 900,
              color: DARK,
              opacity: titleOpacity,
              lineHeight: 1.2,
            }}
          >
            ما هو العلاج الطبيعي؟
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 48,
              fontWeight: 800,
              color: BLUE,
              opacity: titleOpacity,
            }}
          >
            وهل يقتصر على التدليك؟
          </div>
          <div
            style={{
              marginTop: 35,
              fontSize: 30,
              color: MUTED,
              fontWeight: 700,
              opacity: titleOpacity,
            }}
          >
            الحلقة الأولى
          </div>
        </div>
      </div>
      <MovingCharacter
        file="IMG_0714.PNG"
        side="right"
        size={690}
      />
    </AbsoluteFill>
  );
};
const Introduction: React.FC = () => {
  const frame = useCurrentFrame();
  const bubble = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bubbleScale = interpolate(frame, [30, 50], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={backgroundStyle}>
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 100,
          fontSize: 30,
          fontWeight: 800,
          color: BLUE,
        }}
      >
        نبض العلاج الطبيعي
      </div>
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 260,
          width: 850,
          opacity: bubble,
          transform: `scale(${bubbleScale})`,
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 35,
            padding: "45px 55px",
            boxShadow: "0 20px 50px rgba(11,45,92,0.12)",
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: DARK,
              lineHeight: 1.45,
            }}
          >
            السلام عليكم ورحمة الله وبركاته
          </div>
          <div
            style={{
              marginTop: 25,
              fontSize: 42,
              fontWeight: 700,
              color: BLUE,
              lineHeight: 1.45,
            }}
          >
            أهلًا بكم في أولى حلقات
            <br />
            نبض العلاج الطبيعي.
          </div>
        </div>
      </div>
      <MovingCharacter
        file="IMG_0715.PNG"
        side="right"
        size={720}
      />
    </AbsoluteFill>
  );
};
const BigQuestion: React.FC = () => {
  const frame = useCurrentFrame();
  const qScale = interpolate(frame, [0, 20], [0.3, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textX = interpolate(frame, [15, 40], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={backgroundStyle}>
      <div
        style={{
          position: "absolute",
          right: 120,
          top: 110,
          width: 950,
          textAlign: "right",
          transform: `translateX(${textX}px)`,
        }}
      >
        <div
          style={{
            fontSize: 150,
            fontWeight: 900,
            color: BLUE,
            transform: `scale(${qScale})`,
            transformOrigin: "right center",
          }}
        >
          ؟
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 64,
            fontWeight: 900,
            color: DARK,
            lineHeight: 1.35,
          }}
        >
          لما نقول
          <span style={{ color: BLUE }}> علاج طبيعي </span>
          ...
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 58,
            fontWeight: 800,
            color: MUTED,
          }}
        >
          شن أول حاجة تخطر في بالك؟
        </div>
        <div
          style={{
            marginTop: 35,
            display: "inline-block",
            padding: "15px 35px",
            borderRadius: 25,
            background: BLUE,
            color: "#FFFFFF",
            fontSize: 55,
            fontWeight: 900,
          }}
        >
          التدليك؟
        </div>
      </div>
      <MovingCharacter
        file="IMG_0714.PNG"
        side="left"
        size={690}
      />
    </AbsoluteFill>
  );
};
const BigAnswer: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 18], [0.25, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(frame, [0, 25], [200, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={backgroundStyle}>
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 220,
          width: 900,
          transform: `translateX(${x}px)`,
        }}
      >
        <div
          style={{
            fontSize: 190,
            fontWeight: 1000,
            color: BLUE,
            transform: `scale(${scale})`,
            transformOrigin: "left center",
          }}
        >
          لا!
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 55,
            fontWeight: 800,
            color: DARK,
            lineHeight: 1.4,
          }}
        >
          العلاج الطبيعي
          <span style={{ color: BLUE }}> أكبر بكثير </span>
          من التدليك.
        </div>
      </div>
      <MovingCharacter
        file="IMG_0715.PNG"
        side="right"
        size={700}
      />
    </AbsoluteFill>
  );
};
const Explanation: React.FC = () => {
  const frame = useCurrentFrame();
  const items = [
    "تحسين الحركة",
    "تقليل الألم",
    "استعادة الوظائف الجسدية",
    "التأهيل بعد الإصابات والعمليات والأمراض",
  ];
  return (
    <AbsoluteFill style={backgroundStyle}>
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 80,
          width: 1000,
        }}
      >
        <FadeIn>
          <div
            style={{
              fontSize: 42,
              color: BLUE,
              fontWeight: 900,
            }}
          >
            طيب… شن هو العلاج الطبيعي؟
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 56,
              fontWeight: 900,
              color: DARK,
              lineHeight: 1.3,
            }}
          >
            هو تخصص صحي يساعد الإنسان
            <br />
            على استعادة حركته ووظائفه.
          </div>
        </FadeIn>
        <div
          style={{
            marginTop: 45,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {items.map((item, index) => {
            const delay = 35 + index * 18;
            const opacity = interpolate(
              frame,
              [delay, delay + 15],
              [0, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );
            const x = interpolate(
              frame,
              [delay, delay + 18],
              [-80, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );
            return (
              <div
                key={item}
                style={{
                  opacity,
                  transform: `translateX(${x}px)`,
                  background: "#FFFFFF",
                  borderRadius: 22,
                  padding: "18px 28px",
                  fontSize: index === 3 ? 29 : 38,
                  fontWeight: 800,
                  color: DARK,
                  boxShadow: "0 10px 30px rgba(11,45,92,0.09)",
                }}
              >
                <span style={{ color: BLUE }}>✓</span>{" "}
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <MovingCharacter
        file="IMG_0717.PNG"
        side="right"
        size={650}
      />
    </AbsoluteFill>
  );
};
const Methods: React.FC = () => {
  const frame = useCurrentFrame();
  const cards = [
    "تمارين علاجية",
    "علاج يدوي",
    "أجهزة ووسائل علاجية",
  ];
  return (
    <AbsoluteFill style={backgroundStyle}>
      <div
        style={{
          position: "absolute",
          top: 75,
          left: 80,
          right: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 62,
            fontWeight: 900,
            color: DARK,
          }}
        >
          العلاج الطبيعي يستخدم وسائل مختلفة
        </div>
        <div
          style={{
            marginTop: 55,
            display: "flex",
            justifyContent: "center",
            gap: 25,
            marginRight: 420,
          }}
        >
          {cards.map((title, index) => {
            const delay = 20 + index * 18;
            const y = interpolate(
              frame,
              [delay, delay + 20],
              [100, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );
            const opacity = interpolate(
              frame,
              [delay, delay + 15],
              [0, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );
            return (
              <div
                key={title}
                style={{
                  opacity,
                  transform: `translateY(${y}px)`,
                  width: 300,
                  height: 280,
                  background: "#FFFFFF",
                  borderRadius: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 25,
                  boxShadow: "0 15px 35px rgba(11,45,92,0.10)",
                  fontSize: 36,
                  fontWeight: 900,
                  color: DARK,
                  textAlign: "center",
                }}
              >
                {title}
              </div>
            );
          })}
        </div>
        <div
          style={{
            marginTop: 55,
            marginRight: 420,
            fontSize: 48,
            fontWeight: 900,
            color: BLUE,
            lineHeight: 1.35,
          }}
        >
          التدليك جزء من العلاج…
          <br />
          وليس العلاج كله.
        </div>
      </div>
      <MovingCharacter
        file="IMG_0718.PNG"
        side="right"
        size={650}
      />
    </AbsoluteFill>
  );
};
const ClosingMessage: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, 30], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={backgroundStyle}>
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 180,
          width: 950,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            fontSize: 46,
            fontWeight: 800,
            color: MUTED,
          }}
        >
          لذلك…
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 58,
            fontWeight: 900,
            color: DARK,
            lineHeight: 1.4,
          }}
        >
          لما تسمع كلمة
          <span style={{ color: BLUE }}> علاج طبيعي </span>
          ...
        </div>
        <div
          style={{
            marginTop: 25,
            fontSize: 48,
            fontWeight: 800,
            color: DARK,
            lineHeight: 1.45,
          }}
        >
          لا تفكر في التدليك فقط.
        </div>
        <div
          style={{
            marginTop: 25,
            fontSize: 42,
            fontWeight: 700,
            color: BLUE,
            lineHeight: 1.45,
          }}
        >
          فكر في علم كامل يساعد الإنسان
          <br />
          على استعادة حركته والعودة إلى حياته الطبيعية.
        </div>
      </div>
      <MovingCharacter
        file="IMG_0717.PNG"
        side="right"
        size={690}
      />
    </AbsoluteFill>
  );
};
const Ending: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 30], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={backgroundStyle}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginRight: 430,
            opacity,
            transform: `translateY(${y}px)`,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: DARK,
            }}
          >
            شكرًا لاستماعكم
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 48,
              fontWeight: 900,
              color: BLUE,
            }}
          >
            بودكاست نبض العلاج الطبيعي
          </div>
          <div
            style={{
              marginTop: 25,
              fontSize: 40,
              fontWeight: 700,
              color: MUTED,
            }}
          >
            انتظروا الحلقة القادمة
          </div>
        </div>
        <Img
          src={staticFile("characters/IMG_0719.PNG")}
          style={{
            position: "absolute",
            right: 35,
            bottom: -110,
            width: 700,
            height: 700,
            objectFit: "contain",
            opacity,
            transform: `translateY(${y}px)`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
export const Episode01: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={300}>
        <Opening />
      </Sequence>
      <Sequence from={300} durationInFrames={540}>
        <Introduction />
      </Sequence>
      <Sequence from={840} durationInFrames={600}>
        <BigQuestion />
      </Sequence>
      <Sequence from={1440} durationInFrames={360}>
        <BigAnswer />
      </Sequence>
      <Sequence from={1800} durationInFrames={900}>
        <Explanation />
      </Sequence>
      <Sequence from={2700} durationInFrames={750}>
        <Methods />
      </Sequence>
      <Sequence from={3450} durationInFrames={510}>
        <ClosingMessage />
      </Sequence>
      <Sequence from={3960} durationInFrames={300}>
        <Ending />
      </Sequence>
    </AbsoluteFill>
  );
};
