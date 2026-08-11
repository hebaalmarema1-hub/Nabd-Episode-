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
const MUTED = "#5B6B82";

const BlueBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill
    style={{
      background: "linear-gradient(135deg, #FFFFFF 0%, #EAF4FF 100%)",
      fontFamily: "Arial, sans-serif",
      color: DARK,
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        width: 650,
        height: 650,
        borderRadius: "50%",
        backgroundColor: "rgba(22,119,255,0.07)",
        top: -300,
        right: -180,
      }}
    />

    <div
      style={{
        position: "absolute",
        width: 450,
        height: 450,
        borderRadius: "50%",
        backgroundColor: "rgba(22,119,255,0.06)",
        bottom: -220,
        left: -140,
      }}
    />

    {children}
  </AbsoluteFill>
);

/* =========================
   شخصية متحركة
========================= */

const Character: React.FC<{
  file: string;
  side?: "left" | "right";
  size?: number;
  bottom?: number;
}> = ({ file, side = "right", size = 560, bottom = -70 }) => {
  const frame = useCurrentFrame();

  const x = interpolate(
    frame,
    [0, 25],
    [side === "right" ? 250 : -250, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 25], [0.82, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const left = side === "left" ? 70 : undefined;
  const right = side === "right" ? 55 : undefined;

  return (
    <Img
      src={staticFile(`characters/${file}`)}
      style={{
        position: "absolute",
        left,
        right,
        bottom,
        width: size,
        height: size,
        objectFit: "contain",
        opacity,
        transform: `translateX(${x}px) scale(${scale})`,
        zIndex: 10,
      }}
    />
  );
};

/* =========================
   عنوان الحلقة
========================= */

const EpisodeTitle: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 25], [0.85, 1], {
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
            width: "75%",
            marginRight: 350,
          }}
        >
          <div
            style={{
              color: BLUE,
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: 4,
              marginBottom: 30,
            }}
          >
            بودكاست نبض العلاج الطبيعي
          </div>

          <div
            style={{
              fontSize: 82,
              fontWeight: 900,
              lineHeight: 1.2,
              color: DARK,
            }}
          >
            ما هو العلاج الطبيعي؟
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 58,
              fontWeight: 800,
              color: BLUE,
            }}
          >
            وهل يقتصر على التدليك؟
          </div>

          <div
            style={{
              marginTop: 45,
              fontSize: 34,
              fontWeight: 700,
              color: MUTED,
            }}
          >
            الحلقة الأولى
          </div>
        </div>

        <Character
          file="IMG_0714.PNG"
          side="right"
          size={610}
          bottom={-70}
        />
      </div>
    </BlueBackground>
  );
};

/* =========================
   السؤال
========================= */

const QuestionSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 18], [0.7, 1], {
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
        }}
      >
        <div
          style={{
            width: "58%",
            marginLeft: 420,
            textAlign: "center",
            opacity,
            transform: `scale(${scale})`,
          }}
        >
          <div
            style={{
              fontSize: 190,
              fontWeight: 900,
              color: BLUE,
              lineHeight: 0.9,
            }}
          >
            ؟
          </div>

          <div
            style={{
              marginTop: 30,
              fontSize: 72,
              fontWeight: 900,
              color: DARK,
            }}
          >
            هل العلاج الطبيعي
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: BLUE,
            }}
          >
            مجرد تدليك؟
          </div>
        </div>

        <Character
          file="IMG_0714.PNG"
          side="left"
          size={650}
          bottom={-90}
        />
      </div>
    </BlueBackground>
  );
};

/* =========================
   الإجابة
========================= */

const AnswerSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 18], [0.35, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 12], [0, 1], {
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
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginRight: 420,
            opacity,
            transform: `scale(${scale})`,
          }}
        >
          <div
            style={{
              fontSize: 180,
              fontWeight: 900,
              color: BLUE,
              lineHeight: 1,
            }}
          >
            لا!
          </div>

          <div
            style={{
              marginTop: 30,
              fontSize: 42,
              fontWeight: 800,
              color: MUTED,
            }}
          >
            العلاج الطبيعي أكبر بكثير من التدليك.
          </div>
        </div>

        <Character
          file="IMG_0715.PNG"
          side="right"
          size={650}
          bottom={-80}
        />
      </div>
    </BlueBackground>
  );
};

/* =========================
   تعريف العلاج الطبيعي
========================= */

const DefinitionSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const slide = interpolate(frame, [0, 25], [120, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <BlueBackground>
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "80px 90px",
          opacity,
          transform: `translateX(${slide}px)`,
        }}
      >
        <div
          style={{
            width: "60%",
          }}
        >
          <div
            style={{
              color: BLUE,
              fontSize: 38,
              fontWeight: 800,
              marginBottom: 25,
            }}
          >
            ما هو العلاج الطبيعي؟
          </div>

          <div
            style={{
              fontSize: 62,
              fontWeight: 900,
              lineHeight: 1.25,
            }}
          >
            تخصص صحي يهدف إلى
            <span style={{ color: BLUE }}> تحسين حركة الإنسان </span>
            واستعادة وظائفه.
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 25,
              marginTop: 55,
            }}
          >
            {[
              "تحسين الحركة",
              "تقليل الألم",
              "استعادة الوظائف الجسدية",
              "التأهيل بعد الإصابات والعمليات والأمراض",
            ].map((item, index) => {
              const itemY = interpolate(
                frame,
                [25 + index * 8, 45 + index * 8],
                [50, 0],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }
              );

              return (
                <div
                  key={item}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 24,
                    padding: "30px 28px",
                    boxShadow: "0 12px 35px rgba(11,45,92,0.10)",
                    fontSize: index === 3 ? 29 : 38,
                    fontWeight: 800,
                    color: DARK,
                    transform: `translateY(${itemY}px)`,
                  }}
                >
                  <span
                    style={{
                      color: BLUE,
                      marginRight: 12,
                    }}
                  >
                    ✓
                  </span>

                  {item}
                </div>
              );
            })}
          </div>
        </div>

        <Character
          file="IMG_0717.PNG"
          side="right"
          size={600}
          bottom={-80}
        />
      </div>
    </BlueBackground>
  );
};

/* =========================
   وسائل العلاج الطبيعي
========================= */

const MethodsSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 25], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <BlueBackground>
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "70px 70px",
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: 62,
            fontWeight: 900,
            color: DARK,
          }}
        >
          كيف نستخدم العلاج الطبيعي؟
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 75,
            marginRight: 400,
          }}
        >
          {[
            { icon: "🏃", title: "تمارين علاجية" },
            { icon: "🤲", title: "علاج يدوي" },
            { icon: "⚙️", title: "أجهزة ووسائل علاجية" },
          ].map((item, index) => {
            const y = interpolate(
              frame,
              [25 + index * 10, 50 + index * 10],
              [80, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );

            return (
              <div
                key={item.title}
                style={{
                  width: 300,
                  height: 300,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 30,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 15px 35px rgba(11,45,92,0.10)",
                  transform: `translateY(${y}px)`,
                }}
              >
                <div style={{ fontSize: 82 }}>{item.icon}</div>

                <div
                  style={{
                    marginTop: 25,
                    fontSize: 34,
                    fontWeight: 800,
                    color: DARK,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 65,
            marginRight: 400,
            textAlign: "center",
            fontSize: 42,
            fontWeight: 900,
            color: BLUE,
          }}
        >
          التدليك جزء من العلاج…
          <br />
          وليس العلاج كله.
        </div>

        <Character
          file="IMG_0718.PNG"
          side="right"
          size={620}
          bottom={-90}
        />
      </div>
    </BlueBackground>
  );
};

/* =========================
   النهاية
========================= */

const EndingSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const characterX = interpolate(frame, [0, 35], [180, 0], {
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
            width: "60%",
            marginRight: 300,
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: DARK,
            }}
          >
            شكرًا لاستماعكم 🌿
          </div>

          <div
            style={{
              marginTop: 30,
              fontSize: 46,
              color: BLUE,
              fontWeight: 900,
            }}
          >
            بودكاست نبض العلاج الطبيعي
          </div>

          <div
            style={{
              marginTop: 22,
              fontSize: 38,
              color: MUTED,
              fontWeight: 700,
            }}
          >
            انتظروا الحلقة القادمة
          </div>
        </div>

        <Img
          src={staticFile("characters/IMG_0719.PNG")}
          style={{
            position: "absolute",
            right: 40,
            bottom: -80,
            width: 650,
            height: 650,
            objectFit: "contain",
            transform: `translateX(${characterX}px)`,
            zIndex: 5,
          }}
        />
      </div>
    </BlueBackground>
  );
};

/* =========================
   الحلقة كاملة
========================= */

export const Episode01: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={450}>
        <EpisodeTitle />
      </Sequence>

      <Sequence from={450} durationInFrames={600}>
        <QuestionSlide />
      </Sequence>

      <Sequence from={1050} durationInFrames={300}>
        <AnswerSlide />
      </Sequence>

      <Sequence from={1350} durationInFrames={1050}>
        <DefinitionSlide />
      </Sequence>

      <Sequence from={2400} durationInFrames={1050}>
        <MethodsSlide />
      </Sequence>

      <Sequence from={3450} durationInFrames={600}>
        <EndingSlide />
      </Sequence>
    </AbsoluteFill>
  );
};
