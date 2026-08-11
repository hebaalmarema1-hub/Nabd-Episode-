import React from "react";
import {
  AbsoluteFill,
  Sequence,
  Img,
  staticFile,
  interpolate,
  useCurrentFrame,
} from "remotion";

/* =========================================================
   NABD — PHYSIOTHERAPY PODCAST
   Episode 01
   Clean / Premium / Arabic Visual Style
========================================================= */

const NAVY = "#071A35";
const NAVY2 = "#0B2D5C";
const BLUE = "#1677FF";
const LIGHT_BLUE = "#EAF4FF";
const WHITE = "#FFFFFF";
const SOFT = "#A9C4E5";

const font =
  '"Tahoma", "Arial", "Segoe UI", sans-serif';

/* =========================================================
   GLOBAL BACKGROUND
========================================================= */

const Scene: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
}> = ({ children, dark = false }) => {
  const frame = useCurrentFrame();

  const glow = interpolate(
    Math.sin(frame / 45),
    [-1, 1],
    [0.35, 0.7]
  );

  return (
    <AbsoluteFill
      style={{
        fontFamily: font,
        overflow: "hidden",
        background: dark
          ? `linear-gradient(135deg, ${NAVY} 0%, ${NAVY2} 100%)`
          : `linear-gradient(135deg, #FFFFFF 0%, ${LIGHT_BLUE} 100%)`,
        color: dark ? WHITE : NAVY,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 850,
          height: 850,
          borderRadius: "50%",
          background: dark
            ? `rgba(22,119,255,${0.07 + glow * 0.03})`
            : "rgba(22,119,255,0.07)",
          right: -380,
          top: -420,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: dark
            ? "rgba(255,255,255,0.025)"
            : "rgba(22,119,255,0.035)",
          left: -250,
          bottom: -280,
        }}
      />

      {children}
    </AbsoluteFill>
  );
};

/* =========================================================
   TOP BRAND
========================================================= */

const Brand: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 55,
        right: 75,
        display: "flex",
        alignItems: "center",
        gap: 16,
        zIndex: 50,
      }}
    >
      <div
        style={{
          textAlign: "right",
        }}
      >
        <div
          style={{
            fontSize: 27,
            fontWeight: 900,
            color: light ? WHITE : NAVY,
            lineHeight: 1,
          }}
        >
          نبض
        </div>

        <div
          style={{
            marginTop: 5,
            fontSize: 16,
            fontWeight: 700,
            color: light ? SOFT : BLUE,
          }}
        >
          العلاج الطبيعي
        </div>
      </div>

      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 16,
          background: BLUE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 25px rgba(22,119,255,0.25)",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            border: "4px solid white",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};

/* =========================================================
   ANIMATED CHARACTER
========================================================= */

const Character: React.FC<{
  file: string;
  side?: "left" | "right";
  size?: number;
  bottom?: number;
}> = ({
  file,
  side = "right",
  size = 720,
  bottom = -100,
}) => {
  const frame = useCurrentFrame();

  const startX = side === "right" ? 300 : -300;

  const x = interpolate(
    frame,
    [0, 35],
    [startX, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const opacity = interpolate(
    frame,
    [0, 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const float = Math.sin(frame / 13) * 5;

  const scale = interpolate(
    frame,
    [0, 35],
    [0.88, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <Img
      src={staticFile(`characters/${file}`)}
      style={{
        position: "absolute",
        [side]: 10,
        bottom,
        width: size,
        height: size,
        objectFit: "contain",
        opacity,
        transform: `
          translateX(${x}px)
          translateY(${float}px)
          scale(${scale})
        `,
        zIndex: 20,
      }}
    />
  );
};

/* =========================================================
   REVEAL TEXT
========================================================= */

const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  x?: number;
}> = ({ children, delay = 0, x = 60 }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [delay, delay + 22],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const translate = interpolate(
    frame,
    [delay, delay + 22],
    [x, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${translate}px)`,
      }}
    >
      {children}
    </div>
  );
};

/* =========================================================
   01 — CINEMATIC OPENING
========================================================= */

const Opening: React.FC = () => {
  const frame = useCurrentFrame();

  const line = interpolate(
    frame,
    [0, 45],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const titleScale = interpolate(
    frame,
    [15, 50],
    [0.8, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 240,
          width: 900,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 25,
              color: SOFT,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            بودكاست
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 20,
            transform: `scale(${titleScale})`,
            transformOrigin: "right center",
          }}
        >
          <div
            style={{
              fontSize: 125,
              fontWeight: 900,
              color: WHITE,
              lineHeight: 0.95,
            }}
          >
            نبض
          </div>

          <div
            style={{
              marginTop: 15,
              fontSize: 55,
              fontWeight: 800,
              color: BLUE,
            }}
          >
            العلاج الطبيعي
          </div>
        </div>

        <div
          style={{
            marginTop: 55,
            width: 430,
            height: 5,
            background: BLUE,
            transformOrigin: "right",
            transform: `scaleX(${line})`,
          }}
        />

        <Reveal delay={45}>
          <div
            style={{
              marginTop: 30,
              fontSize: 28,
              color: SOFT,
              fontWeight: 700,
            }}
          >
            الحلقة الأولى
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0715.PNG"
        side="right"
        size={800}
        bottom={-130}
      />
    </Scene>
  );
};

/* =========================================================
   02 — TITLE
========================================================= */

const EpisodeTitle: React.FC = () => {
  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 110,
          right: 110,
          top: 190,
          textAlign: "right",
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 27,
              color: BLUE,
              fontWeight: 900,
            }}
          >
            الحلقة الأولى
          </div>
        </Reveal>

        <Reveal delay={20}>
          <div
            style={{
              marginTop: 30,
              fontSize: 78,
              fontWeight: 900,
              color: NAVY,
              lineHeight: 1.2,
            }}
          >
            ما هو
            <br />
            <span style={{ color: BLUE }}>
              العلاج الطبيعي؟
            </span>
          </div>
        </Reveal>

        <Reveal delay={50}>
          <div
            style={{
              marginTop: 30,
              fontSize: 45,
              fontWeight: 700,
              color: NAVY2,
            }}
          >
            وهل يقتصر على التدليك؟
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0714.PNG"
        side="left"
        size={730}
        bottom={-110}
      />
    </Scene>
  );
};

/* =========================================================
   03 — QUESTION
========================================================= */

const Question: React.FC = () => {
  const frame = useCurrentFrame();

  const questionScale = interpolate(
    frame,
    [0, 30],
    [0.4, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 150,
          top: 220,
          width: 900,
        }}
      >
        <div
          style={{
            fontSize: 180,
            fontWeight: 900,
            color: BLUE,
            lineHeight: 0.8,
            transform: `scale(${questionScale})`,
            transformOrigin: "left center",
          }}
        >
          ؟
        </div>

        <Reveal delay={25}>
          <div
            style={{
              marginTop: 45,
              fontSize: 70,
              fontWeight: 900,
              color: WHITE,
              lineHeight: 1.3,
            }}
          >
            هل العلاج الطبيعي
            <br />
            <span style={{ color: "#66A8FF" }}>
              مجرد تدليك؟
            </span>
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0714.PNG"
        side="right"
        size={760}
        bottom={-120}
      />
    </Scene>
  );
};

/* =========================================================
   04 — ANSWER
========================================================= */

const Answer: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame,
    [0, 25],
    [0.4, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 130,
          top: 250,
          width: 900,
        }}
      >
        <div
          style={{
            fontSize: 190,
            fontWeight: 900,
            color: BLUE,
            transform: `scale(${scale})`,
            transformOrigin: "left center",
          }}
        >
          لا.
        </div>

        <Reveal delay={25}>
          <div
            style={{
              marginTop: 20,
              fontSize: 54,
              fontWeight: 800,
              color: NAVY,
              lineHeight: 1.45,
            }}
          >
            التدليك وسيلة واحدة فقط
            <br />
            من وسائل العلاج الطبيعي.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0715.PNG"
        side="right"
        size={750}
        bottom={-130}
      />
    </Scene>
  );
};

/* =========================================================
   05 — DEFINITION
========================================================= */

const Definition: React.FC = () => {
  const frame = useCurrentFrame();

  const points = [
    "تحسين الحركة",
    "تقليل الألم",
    "استعادة الوظائف الجسدية",
    "التأهيل بعد الإصابات والعمليات وبعض الأمراض",
  ];

  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 100,
          top: 110,
          width: 1080,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: BLUE,
            }}
          >
            ما هو العلاج الطبيعي؟
          </div>
        </Reveal>

        <Reveal delay={20}>
          <div
            style={{
              marginTop: 25,
              fontSize: 58,
              fontWeight: 900,
              lineHeight: 1.35,
              color: NAVY,
            }}
          >
            تخصص صحي يهدف إلى
            <br />
            تحسين حركة الإنسان ووظائفه.
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 45,
            display: "flex",
            flexDirection: "column",
            gap: 15,
          }}
        >
          {points.map((point, index) => {
            const delay = 55 + index * 20;

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
              [70, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            );

            return (
              <div
                key={point}
                style={{
                  opacity,
                  transform: `translateX(${x}px)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  fontSize: index === 3 ? 29 : 37,
                  fontWeight: 800,
                  color: NAVY2,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: BLUE,
                    flexShrink: 0,
                  }}
                />

                {point}
              </div>
            );
          })}
        </div>
      </div>

      <Character
        file="IMG_0717.PNG"
        side="right"
        size={680}
        bottom={-120}
      />
    </Scene>
  );
};

/* =========================================================
   06 — METHODS
========================================================= */

const Methods: React.FC = () => {
  const frame = useCurrentFrame();

  const cards = [
    {
      title: "التمارين العلاجية",
      subtitle: "لتطوير الحركة والقوة والمرونة",
    },
    {
      title: "العلاج اليدوي",
      subtitle: "لتخفيف الألم وتحسين الحركة",
    },
    {
      title: "الأجهزة والوسائل العلاجية",
      subtitle: "بحسب الحالة والهدف العلاجي",
    },
  ];

  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          top: 125,
          left: 80,
          right: 80,
          textAlign: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 58,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            العلاج الطبيعي
            <span style={{ color: "#66A8FF" }}>
              {" "}ليس طريقة واحدة
            </span>
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 65,
            display: "flex",
            justifyContent: "center",
            gap: 22,
          }}
        >
          {cards.map((card, index) => {
            const delay = 30 + index * 20;

            const y = interpolate(
              frame,
              [delay, delay + 20],
              [90, 0],
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
                key={card.title}
                style={{
                  width: 330,
                  minHeight: 275,
                  borderRadius: 30,
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                  padding: "35px 25px",
                  opacity,
                  transform: `translateY(${y}px)`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 39,
                    fontWeight: 900,
                    color: WHITE,
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </div>

                <div
                  style={{
                    marginTop: 25,
                    fontSize: 24,
                    fontWeight: 600,
                    color: SOFT,
                    lineHeight: 1.5,
                  }}
                >
                  {card.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div
            style={{
              marginTop: 55,
              fontSize: 42,
              fontWeight: 900,
              color: "#66A8FF",
            }}
          >
            التدليك جزء من العلاج… وليس العلاج كله.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0718.PNG"
        side="right"
        size={610}
        bottom={-170}
      />
    </Scene>
  );
};

/* =========================================================
   07 — FINAL MESSAGE
========================================================= */

const FinalMessage: React.FC = () => {
  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 170,
          width: 1000,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 31,
              fontWeight: 900,
              color: BLUE,
            }}
          >
            الخلاصة
          </div>
        </Reveal>

        <Reveal delay={20}>
          <div
            style={{
              marginTop: 25,
              fontSize: 67,
              fontWeight: 900,
              color: NAVY,
              lineHeight: 1.3,
            }}
          >
            العلاج الطبيعي
            <br />
            <span style={{ color: BLUE }}>
              علمٌ كامل لاستعادة الحركة.
            </span>
          </div>
        </Reveal>

        <Reveal delay={55}>
          <div
            style={{
              marginTop: 40,
              fontSize: 39,
              fontWeight: 700,
              color: NAVY2,
              lineHeight: 1.55,
            }}
          >
            لذلك عندما تسمع كلمة
            <br />
            علاج طبيعي…
            <br />
            لا تفكر في التدليك فقط.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0717.PNG"
        side="right"
        size={720}
        bottom={-130}
      />
    </Scene>
  );
};

/* =========================================================
   08 — ENDING
========================================================= */

const Ending: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 30],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const y = interpolate(
    frame,
    [0, 35],
    [70, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <Scene dark>
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
            transform: `translateY(${y}px)`,
            width: 1050,
            marginRight: 420,
          }}
        >
          <div
            style={{
              fontSize: 74,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            شكرًا لاستماعكم
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 48,
              fontWeight: 900,
              color: "#66A8FF",
            }}
          >
            بودكاست نبض العلاج الطبيعي
          </div>

          <div
            style={{
              marginTop: 25,
              fontSize: 34,
              fontWeight: 700,
              color: SOFT,
            }}
          >
            انتظروا الحلقة القادمة
          </div>

          <div
            style={{
              margin: "45px auto 0",
              width: 260,
              height: 5,
              background: BLUE,
            }}
          />
        </div>

        <Img
          src={staticFile("characters/IMG_0719.PNG")}
          style={{
            position: "absolute",
            right: 10,
            bottom: -130,
            width: 760,
            height: 760,
            objectFit: "contain",
            opacity,
            transform: `translateY(${y}px)`,
          }}
        />
      </div>
    </Scene>
  );
};

/* =========================================================
   EPISODE
========================================================= */

export const Episode01: React.FC = () => {
  return (
    <AbsoluteFill>

      {/* 10 seconds */}
      <Sequence from={0} durationInFrames={300}>
        <Opening />
      </Sequence>

      {/* 12 seconds */}
      <Sequence from={300} durationInFrames={360}>
        <EpisodeTitle />
      </Sequence>

      {/* 15 seconds */}
      <Sequence from={660} durationInFrames={450}>
        <Question />
      </Sequence>

      {/* 10 seconds */}
      <Sequence from={1110} durationInFrames={300}>
        <Answer />
      </Sequence>

      {/* 30 seconds */}
      <Sequence from={1410} durationInFrames={900}>
        <Definition />
      </Sequence>

      {/* 30 seconds */}
      <Sequence from={2310} durationInFrames={900}>
        <Methods />
      </Sequence>

      {/* 17 seconds */}
      <Sequence from={3210} durationInFrames={510}>
        <FinalMessage />
      </Sequence>

      {/* 18 seconds */}
      <Sequence from={3720} durationInFrames={540}>
        <Ending />
      </Sequence>

    </AbsoluteFill>
  );
};
