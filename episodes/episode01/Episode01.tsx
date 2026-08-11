import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
  Img,
  staticFile,
} from "remotion";
const BlueBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill
    style={{
      background: "linear-gradient(135deg, #FFFFFF 0%, #EAF4FF 100%)",
      fontFamily: "Arial, sans-serif",
      color: "#0B2D5C",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        backgroundColor: "rgba(22,119,255,0.07)",
        top: -220,
        right: -120,
      }}
    />
    <div
      style={{
        position: "absolute",
        width: 350,
        height: 350,
        borderRadius: "50%",
        backgroundColor: "rgba(22,119,255,0.06)",
        bottom: -170,
        left: -100,
      }}
    />
    {children}
  </AbsoluteFill>
);
const EpisodeTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, 20], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <BlueBackground>
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
            opacity,
            transform: `scale(${scale})`,
            width: "80%",
          }}
        >
          <div
            style={{
              color: "#1677FF",
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: 5,
              marginBottom: 25,
            }}
          >
            نبض العلاج الطبيعي
          </div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.25,
              color: "#0B2D5C",
            }}
          >
            ما هو العلاج الطبيعي؟
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 42,
              fontWeight: 600,
              color: "#1677FF",
            }}
          >
            وهل يقتصر على التدليك؟
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 24,
              color: "#66788F",
            }}
          >
            الحلقة الأولى
          </div>
        </div>
      </div>
    </BlueBackground>
  );
};
const QuestionSlide: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const questionScale = interpolate(frame, [0, 18], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <BlueBackground>
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
            opacity,
            transform: `scale(${questionScale})`,
          }}
        >
          <div
            style={{
              fontSize: 150,
              fontWeight: 800,
              color: "#1677FF",
              lineHeight: 1,
            }}
          >
            ؟
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 55,
              fontWeight: 800,
              color: "#0B2D5C",
            }}
          >
            هل العلاج الطبيعي
          </div>
          <div
            style={{
              fontSize: 55,
              fontWeight: 800,
              color: "#1677FF",
            }}
          >
            مجرد تدليك؟
          </div>
        </div>
      </div>
    </BlueBackground>
  );
};
const AnswerSlide: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, 15], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <BlueBackground>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            opacity,
            transform: `scale(${scale})`,
            fontSize: 120,
            fontWeight: 900,
            color: "#1677FF",
          }}
        >
          لا.
        </div>
        <div
          style={{
            opacity,
            marginTop: 25,
            fontSize: 30,
            color: "#5B6B82",
          }}
        >
          العلاج الطبيعي أكبر بكثير من التدليك.
        </div>
      </div>
    </BlueBackground>
  );
};
const DefinitionSlide: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <BlueBackground>
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "90px 100px",
          opacity,
        }}
      >
        <div
          style={{
            color: "#1677FF",
            fontSize: 25,
            fontWeight: 700,
            marginBottom: 25,
          }}
        >
          ما هو العلاج الطبيعي؟
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            lineHeight: 1.35,
            maxWidth: 1050,
          }}
        >
          تخصص صحي يهدف إلى:
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            marginTop: 55,
          }}
        >
          {[
            "تحسين الحركة",
            "تقليل الألم",
            "استعادة الوظائف الجسدية",
            "التأهيل بعد الإصابات والعمليات والأمراض",
          ].map((item, index) => (
            <div
              key={item}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 22,
                padding: "28px 30px",
                boxShadow: "0 12px 35px rgba(11,45,92,0.08)",
                fontSize: index === 3 ? 27 : 32,
                fontWeight: 700,
                color: "#0B2D5C",
              }}
            >
              <span style={{ color: "#1677FF", marginRight: 12 }}>✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </BlueBackground>
  );
};
const MethodsSlide: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <BlueBackground>
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "75px 80px",
          opacity,
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: 45,
            fontWeight: 800,
            color: "#0B2D5C",
          }}
        >
          كيف نستخدم العلاج الطبيعي؟
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 70,
          }}
        >
          {[
            { icon: "🏃", title: "تمارين علاجية" },
            { icon: "🤲", title: "علاج يدوي" },
            { icon: "⚙️", title: "أجهزة ووسائل علاجية" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                width: 310,
                height: 270,
                backgroundColor: "#FFFFFF",
                borderRadius: 28,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 15px 35px rgba(11,45,92,0.09)",
              }}
            >
              <div style={{ fontSize: 70 }}>{item.icon}</div>
              <div
                style={{
                  marginTop: 25,
                  fontSize: 27,
                  fontWeight: 700,
                  color: "#0B2D5C",
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 60,
            textAlign: "center",
            fontSize: 31,
            fontWeight: 700,
            color: "#1677FF",
          }}
        >
          التدليك جزء من العلاج… وليس العلاج كله.
        </div>
      </div>
    </BlueBackground>
  );
};
const EndingSlide: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const characterY = interpolate(frame, [0, 30], [80, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <BlueBackground>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity,
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: "65%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "#0B2D5C",
            }}
          >
            شكرًا لاستماعكم 🌿
          </div>
          <div
            style={{
              marginTop: 25,
              fontSize: 34,
              color: "#1677FF",
              fontWeight: 700,
            }}
          >
            بودكاست نبض العلاج الطبيعي
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 28,
              color: "#66788F",
            }}
          >
            انتظروا الحلقة القادمة
          </div>
        </div>
        <Img
          src={staticFile("characters/nabd-host.jpeg")}
          style={{
            position: "absolute",
            right: 40,
            bottom: -55,
            width: 390,
            height: 390,
            objectFit: "contain",
            transform: `translateY(${characterY}px)`,
          }}
        />
      </div>
    </BlueBackground>
  );
};
export const Episode01: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* 15 seconds */}
      <Sequence from={0} durationInFrames={450}>
        <EpisodeTitle />
      </Sequence>
      {/* 20 seconds */}
      <Sequence from={450} durationInFrames={600}>
        <QuestionSlide />
      </Sequence>
      {/* 10 seconds */}
      <Sequence from={1050} durationInFrames={300}>
        <AnswerSlide />
      </Sequence>
      {/* 35 seconds */}
      <Sequence from={1350} durationInFrames={1050}>
        <DefinitionSlide />
      </Sequence>
      {/* 35 seconds */}
      <Sequence from={2400} durationInFrames={1050}>
        <MethodsSlide />
      </Sequence>
      {/* 20 seconds */}
      <Sequence from={3450} durationInFrames={600}>
        <EndingSlide />
      </Sequence>
    </AbsoluteFill>
  );
};
