import React from "react";
import {
  AbsoluteFill,
  Sequence,
  Img,
  staticFile,
  interpolate,
  useCurrentFrame,
} from "remotion";

const NAVY = "#071A35";
const NAVY2 = "#0B2D5C";
const BLUE = "#1677FF";
const LIGHT_BLUE = "#EAF4FF";
const WHITE = "#FFFFFF";
const SOFT = "#A9C4E5";

const FONT = '"Tahoma", "Arial", sans-serif';

/* =========================================================
   BACKGROUND
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
        fontFamily: FONT,
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
          right: -380,
          top: -420,
          background: dark
            ? `rgba(22,119,255,${0.07 + glow * 0.03})`
            : "rgba(22,119,255,0.07)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          left: -250,
          bottom: -280,
          background: dark
            ? "rgba(255,255,255,0.025)"
            : "rgba(22,119,255,0.035)",
        }}
      />

      {children}
    </AbsoluteFill>
  );
};

/* =========================================================
   BRAND
========================================================= */

const Brand: React.FC<{ light?: boolean }> = ({
  light = false,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 50,
        right: 65,
        display: "flex",
        alignItems: "center",
        gap: 15,
        zIndex: 100,
      }}
    >
      <div style={{ textAlign: "right" }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: light ? WHITE : NAVY,
          }}
        >
          نبض
        </div>

        <div
          style={{
            marginTop: 4,
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
          borderRadius: 15,
          backgroundColor: BLUE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 30px rgba(22,119,255,0.3)",
        }}
      >
        <div
          style={{
            width: 19,
            height: 19,
            borderRadius: "50%",
            border: "4px solid white",
          }}
        />
      </div>
    </div>
  );
};

/* =========================================================
   TEXT ANIMATION
========================================================= */

const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  distance?: number;
}> = ({
  children,
  delay = 0,
  distance = 60,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [delay, delay + 20],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const x = interpolate(
    frame,
    [delay, delay + 20],
    [distance, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
      }}
    >
      {children}
    </div>
  );
};

/* =========================================================
   CHARACTER
   Transparent PNG + Movement
========================================================= */

type CharacterProps = {
  file: string;
  side?: "left" | "right";
  size?: number;
  bottom?: number;
  delay?: number;
  direction?: "from-left" | "from-right" | "from-bottom";
};

const Character: React.FC<CharacterProps> = ({
  file,
  side = "right",
  size = 700,
  bottom = -100,
  delay = 0,
  direction = "from-right",
}) => {
  const frame = useCurrentFrame();

  const localFrame = Math.max(0, frame - delay);

  let startX = 0;
  let startY = 0;

  if (direction === "from-right") {
    startX = 320;
  }

  if (direction === "from-left") {
    startX = -320;
  }

  if (direction === "from-bottom") {
    startY = 250;
  }

  const x = interpolate(
    localFrame,
    [0, 30],
    [startX, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const y = interpolate(
    localFrame,
    [0, 30],
    [startY, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const opacity = interpolate(
    localFrame,
    [0, 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    localFrame,
    [0, 30],
    [0.86, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  /*
    حركة خفيفة مستمرة للشخصية
    تعطي إحساس أنها حية وليست صورة ثابتة.
  */
  const float = Math.sin(localFrame / 12) * 5;

  return (
    <Img
      src={staticFile(`characters/${file}`)}
      style={{
        position: "absolute",
        [side]: 20,
        bottom,
        width: size,
        height: size,
        objectFit: "contain",
        opacity,
        transform: `
          translateX(${x}px)
          translateY(${y + float}px)
          scale(${scale})
        `,
        zIndex: 30,
      }}
    />
  );
};

/* =========================================================
   01 — OPENING
========================================================= */

const Opening: React.FC = () => {
  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 235,
          width: 900,
          zIndex: 10,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 26,
              color: SOFT,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            بودكاست
          </div>
        </Reveal>

        <Reveal delay={15}>
          <div
            style={{
              marginTop: 15,
              fontSize: 125,
              lineHeight: 0.95,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            نبض
          </div>
        </Reveal>

        <Reveal delay={30}>
          <div
            style={{
              marginTop: 15,
              fontSize: 55,
              fontWeight: 800,
              color: "#66A8FF",
            }}
          >
            العلاج الطبيعي
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 45,
            width: 430,
            height: 5,
            backgroundColor: BLUE,
          }}
        />

        <Reveal delay={55}>
          <div
            style={{
              marginTop: 28,
              fontSize: 29,
              color: SOFT,
              fontWeight: 700,
            }}
          >
            الحلقة الأولى
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0738.PNG"
        side="right"
        size={800}
        bottom={-130}
        direction="from-right"
      />
    </Scene>
  );
};

/* =========================================================
   02 — EPISODE TITLE
========================================================= */

const EpisodeTitle: React.FC = () => {
  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 100,
          top: 185,
          width: 1000,
          textAlign: "right",
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 28,
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
              lineHeight: 1.2,
              color: NAVY,
            }}
          >
            ما هو
            <br />
            <span style={{ color: BLUE }}>
              العلاج الطبيعي؟
            </span>
          </div>
        </Reveal>

        <Reveal delay={55}>
          <div
            style={{
              marginTop: 25,
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
        file="IMG_0738.PNG"
        side="left"
        size={730}
        bottom={-120}
        direction="from-left"
      />
    </Scene>
  );
};

/* =========================================================
   03 — QUESTION
========================================================= */

const Question: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame,
    [0, 28],
    [0.35, 1],
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
          top: 210,
          width: 950,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 175,
              lineHeight: 0.8,
              fontWeight: 900,
              color: BLUE,
              transform: `scale(${scale})`,
              transformOrigin: "left center",
            }}
          >
            ؟
          </div>
        </Reveal>

        <Reveal delay={25}>
          <div
            style={{
              marginTop: 45,
              fontSize: 70,
              lineHeight: 1.3,
              fontWeight: 900,
              color: WHITE,
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
        file="IMG_0737.PNG"
        side="right"
        size={780}
        bottom={-130}
        direction="from-right"
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
    [0.3, 1],
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
          top: 230,
          width: 950,
        }}
      >
        <div
          style={{
            fontSize: 180,
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
              marginTop: 25,
              fontSize: 53,
              lineHeight: 1.5,
              fontWeight: 800,
              color: NAVY,
            }}
          >
            التدليك وسيلة واحدة فقط
            <br />
            من وسائل العلاج الطبيعي.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0732.PNG"
        side="right"
        size={750}
        bottom={-130}
        direction="from-right"
      />
    </Scene>
  );
};

/* =========================================================
   05 — DEFINITION
========================================================= */

const Definition: React.FC = () => {
  const frame = useCurrentFrame();

  const items = [
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
          left: 90,
          top: 115,
          width: 1050,
          zIndex: 10,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 29,
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
              fontSize: 57,
              lineHeight: 1.35,
              fontWeight: 900,
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
            marginTop: 42,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {items.map((item, index) => {
            const delay = 55 + index * 18;

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
                key={item}
                style={{
                  opacity,
                  transform: `translateX(${x}px)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  fontSize: index === 3 ? 28 : 37,
                  fontWeight: 800,
                  color: NAVY2,
                }}
              >
                <div
                  style={{
                    width: 13,
                    height: 13,
                    borderRadius: "50%",
                    backgroundColor: BLUE,
                    flexShrink: 0,
                  }}
                />

                {item}
              </div>
            );
          })}
        </div>
      </div>

      <Character
        file="IMG_0733.PNG"
        side="right"
        size={720}
        bottom={-120}
        direction="from-right"
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
      text: "لتطوير الحركة والقوة والمرونة",
    },
    {
      title: "العلاج اليدوي",
      text: "لتخفيف الألم وتحسين الحركة",
    },
    {
      title: "الأجهزة والوسائل العلاجية",
      text: "بحسب الحالة والهدف العلاجي",
    },
  ];

  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 70,
          right: 70,
          top: 120,
          textAlign: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 57,
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
            marginTop: 55,
            display: "flex",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {cards.map((card, index) => {
            const delay = 30 + index * 18;

            const y = interpolate(
              frame,
              [delay, delay + 20],
              [80, 0],
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
                  minHeight: 260,
                  borderRadius: 28,
                  padding: "35px 25px",
                  background:
                    "rgba(255,255,255,0.08)",
                  border:
                    "1px solid rgba(255,255,255,0.14)",
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
                    fontSize: 37,
                    lineHeight: 1.35,
                    fontWeight: 900,
                    color: WHITE,
                  }}
                >
                  {card.title}
                </div>

                <div
                  style={{
                    marginTop: 22,
                    fontSize: 23,
                    lineHeight: 1.5,
                    fontWeight: 600,
                    color: SOFT,
                  }}
                >
                  {card.text}
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div
            style={{
              marginTop: 48,
              fontSize: 40,
              fontWeight: 900,
              color: "#66A8FF",
            }}
          >
            التدليك جزء من العلاج… وليس العلاج كله.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0734.PNG"
        side="right"
        size={650}
        bottom={-180}
        direction="from-right"
      />
    </Scene>
  );
};

/* =========================================================
   07 — SUMMARY
========================================================= */

const Summary: React.FC = () => {
  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 110,
          top: 165,
          width: 1050,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 30,
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
              fontSize: 66,
              lineHeight: 1.3,
              fontWeight: 900,
              color: NAVY,
            }}
          >
            العلاج الطبيعي
            <br />
            <span style={{ color: BLUE }}>
              علم كامل لاستعادة الحركة.
            </span>
          </div>
        </Reveal>

        <Reveal delay={55}>
          <div
            style={{
              marginTop: 38,
              fontSize: 38,
              lineHeight: 1.55,
              fontWeight: 700,
              color: NAVY2,
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
        file="IMG_0733.PNG"
        side="right"
        size={720}
        bottom={-130}
        direction="from-right"
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
        }}
      >
        <div
          style={{
            width: 950,
            marginRight: 470,
            textAlign: "center",
            opacity,
            transform: `translateY(${y}px)`,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            شكرًا لاستماعكم
          </div>

          <div
            style={{
              marginTop: 25,
              fontSize: 47,
              fontWeight: 900,
              color: "#66A8FF",
            }}
          >
            بودكاست نبض العلاج الطبيعي
          </div>

          <div
            style={{
              marginTop: 22,
              fontSize: 33,
              fontWeight: 700,
              color: SOFT,
            }}
          >
            انتظروا الحلقة القادمة
          </div>

          <div
            style={{
              width: 260,
              height: 5,
              backgroundColor: BLUE,
              margin: "42px auto 0",
            }}
          />
        </div>

        <Img
          src={staticFile(
            "characters/IMG_0735.PNG"
          )}
          style={{
            position: "absolute",
            right: 0,
            bottom: -140,
            width: 800,
            height: 800,
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
   EPISODE 01
========================================================= */

export const Episode01: React.FC = () => {
  return (
    <AbsoluteFill>

      <Sequence
        from={0}
        durationInFrames={300}
      >
        <Opening />
      </Sequence>

      <Sequence
        from={300}
        durationInFrames={360}
      >
        <EpisodeTitle />
      </Sequence>

      <Sequence
        from={660}
        durationInFrames={450}
      >
        <Question />
      </Sequence>

      <Sequence
        from={1110}
        durationInFrames={300}
      >
        <Answer />
      </Sequence>

      <Sequence
        from={1410}
        durationInFrames={900}
      >
        <Definition />
      </Sequence>

      <Sequence
        from={2310}
        durationInFrames={900}
      >
        <Methods />
      </Sequence>

      <Sequence
        from={3210}
        durationInFrames={510}
      >
        <Summary />
      </Sequence>

      <Sequence
        from={3720}
        durationInFrames={540}
      >
        <Ending />
      </Sequence>

    </AbsoluteFill>
  );
};
