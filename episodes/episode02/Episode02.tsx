import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  staticFile,
  interpolate,
  useCurrentFrame,
} from "remotion";

const NAVY = "#071A35";
const NAVY2 = "#0B2D5C";
const BLUE = "#1677FF";
const LIGHT_BLUE = "#EAF4FF";
const SKY = "#66A8FF";
const WHITE = "#FFFFFF";
const SOFT = "#A9C4E5";
const GREEN = "#20B26B";

const FONT = '"Tahoma", "Arial", sans-serif';

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

const Scene: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
}> = ({ children, dark = false }) => {
  const frame = useCurrentFrame();

  const glow = interpolate(
    Math.sin(frame / 35),
    [-1, 1],
    [0.35, 0.75]
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
          right: -390,
          top: -430,
          background: `rgba(22,119,255,${0.06 + glow * 0.035})`,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          left: -280,
          bottom: -300,
          background: dark
            ? "rgba(255,255,255,0.025)"
            : "rgba(22,119,255,0.035)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 260,
          height: 4,
          background: BLUE,
          left: 70,
          top: 80,
          opacity: 0.8,
        }}
      />

      {children}
    </AbsoluteFill>
  );
};

const Brand: React.FC<{ light?: boolean }> = ({
  light = false,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 45,
        right: 60,
        display: "flex",
        alignItems: "center",
        gap: 14,
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
            marginTop: 3,
            fontSize: 15,
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
            width: 18,
            height: 18,
            borderRadius: "50%",
            border: "4px solid white",
          }}
        />
      </div>
    </div>
  );
};

const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  distance?: number;
}> = ({
  children,
  delay = 0,
  distance = 55,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [delay, delay + 18],
    [0, 1],
    clamp
  );

  const x = interpolate(
    frame,
    [delay, delay + 20],
    [distance, 0],
    clamp
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

type CharacterProps = {
  file: string;
  side?: "left" | "right";
  size?: number;
  bottom?: number;
  delay?: number;
  direction?: "from-left" | "from-right" | "from-bottom";
  float?: boolean;
};

const Character: React.FC<CharacterProps> = ({
  file,
  side = "right",
  size = 700,
  bottom = -120,
  delay = 0,
  direction = "from-right",
  float = true,
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - delay);

  let startX = 0;
  let startY = 0;

  if (direction === "from-right") startX = 330;
  if (direction === "from-left") startX = -330;
  if (direction === "from-bottom") startY = 250;

  const x = interpolate(
    localFrame,
    [0, 30],
    [startX, 0],
    clamp
  );

  const y = interpolate(
    localFrame,
    [0, 30],
    [startY, 0],
    clamp
  );

  const opacity = interpolate(
    localFrame,
    [0, 15],
    [0, 1],
    clamp
  );

  const scale = interpolate(
    localFrame,
    [0, 30],
    [0.86, 1],
    clamp
  );

  const floating = float
    ? Math.sin(localFrame / 12) * 5
    : 0;

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
          translateY(${y + floating}px)
          scale(${scale})
        `,
        zIndex: 30,
      }}
    />
  );
};

const Dots: React.FC<{
  light?: boolean;
  count?: number;
}> = ({ light = false, count = 6 }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        bottom: 70,
        display: "flex",
        gap: 10,
        zIndex: 5,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const opacity =
          0.35 + Math.sin(frame / 18 + i) * 0.2;

        return (
          <div
            key={i}
            style={{
              width: i === 0 ? 15 : 8,
              height: i === 0 ? 15 : 8,
              borderRadius: "50%",
              background: light ? SKY : BLUE,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};

const Opening02: React.FC = () => {
  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 220,
          width: 900,
          zIndex: 10,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 28,
              color: SOFT,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            بودكاست نبض العلاج الطبيعي
          </div>
        </Reveal>

        <Reveal delay={18}>
          <div
            style={{
              marginTop: 22,
              fontSize: 105,
              lineHeight: 1,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            متى نحتاج
          </div>
        </Reveal>

        <Reveal delay={35}>
          <div
            style={{
              fontSize: 105,
              lineHeight: 1,
              fontWeight: 900,
              color: SKY,
            }}
          >
            للعلاج الطبيعي؟
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div
            style={{
              marginTop: 35,
              fontSize: 35,
              fontWeight: 700,
              color: SOFT,
            }}
          >
            وهل هو فقط بعد الإصابة؟
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0738.PNG"
        side="right"
        size={790}
        bottom={-140}
        direction="from-right"
      />

      <Dots light />
    </Scene>
  );
};

const Question02: React.FC = () => {
  const frame = useCurrentFrame();

  const qScale = interpolate(
    frame,
    [0, 22],
    [0.3, 1],
    clamp
  );

  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 170,
          width: 950,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 180,
            fontWeight: 900,
            color: BLUE,
            transform: `scale(${qScale})`,
            transformOrigin: "left center",
          }}
        >
          ؟
        </div>

        <Reveal delay={20}>
          <div
            style={{
              marginTop: 20,
              fontSize: 70,
              lineHeight: 1.3,
              fontWeight: 900,
              color: NAVY,
            }}
          >
            هل نحتاج العلاج الطبيعي
            <br />
            <span style={{ color: BLUE }}>
              فقط بعد الإصابة؟
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

      <Dots />
    </Scene>
  );
};

const Thinking02: React.FC = () => {
  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 100,
          top: 200,
          width: 900,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 38,
              fontWeight: 800,
              color: SOFT,
            }}
          >
            فكّر فيها...
          </div>
        </Reveal>

        <Reveal delay={25}>
          <div
            style={{
              marginTop: 30,
              fontSize: 66,
              lineHeight: 1.35,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            هل لازم نستنى
            <br />
            المشكلة باش نتحركوا؟
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0816.PNG"
        side="right"
        size={750}
        bottom={-100}
        direction="from-right"
      />

      <div
        style={{
          position: "absolute",
          right: 490,
          top: 270,
          fontSize: 70,
          color: WHITE,
          opacity: 0.8,
        }}
      >
        ☁️
      </div>

      <Dots light />
    </Scene>
  );
};

const Idea02: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame,
    [0, 25],
    [0.3, 1],
    clamp
  );

  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 220,
          width: 900,
        }}
      >
        <div
          style={{
            fontSize: 145,
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
              fontSize: 55,
              lineHeight: 1.5,
              fontWeight: 900,
              color: NAVY,
            }}
          >
            العلاج الطبيعي أوسع
            <br />
            من مجرد علاج الإصابة.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0809.PNG"
        side="right"
        size={720}
        bottom={-120}
        direction="from-right"
      />

      <div
        style={{
          position: "absolute",
          right: 520,
          top: 220,
          fontSize: 100,
          transform: `scale(${scale})`,
        }}
      >
        💡
      </div>
    </Scene>
  );
};

const Pain02: React.FC = () => {
  const frame = useCurrentFrame();

  const pulse = 1 + Math.sin(frame / 5) * 0.08;

  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 90,
          top: 150,
          width: 950,
          zIndex: 10,
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
            متى نحتاج إليه؟
          </div>
        </Reveal>

        <Reveal delay={20}>
          <div
            style={{
              marginTop: 25,
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.3,
              color: NAVY,
            }}
          >
            عندما يكون الألم
            <br />
            مؤثرًا على حياتك.
          </div>
        </Reveal>

        <Reveal delay={55}>
          <div
            style={{
              marginTop: 35,
              fontSize: 36,
              fontWeight: 700,
              color: NAVY2,
            }}
          >
            خصوصًا إذا أثّر على الحركة
            <br />
            أو النشاط اليومي.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0806.PNG"
        side="right"
        size={760}
        bottom={-130}
        direction="from-right"
      />

      <div
        style={{
          position: "absolute",
          right: 470,
          top: 300,
          width: 90,
          height: 90,
          borderRadius: "50%",
          border: "6px solid #FF5C5C",
          transform: `scale(${pulse})`,
          opacity: 0.75,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 480,
          top: 240,
          fontSize: 55,
        }}
      >
        ⚡
      </div>
    </Scene>
  );
};

const Movement02: React.FC = () => {
  const frame = useCurrentFrame();

  const arrowX = interpolate(
    frame,
    [0, 45],
    [0, 120],
    clamp
  );

  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 100,
          top: 170,
          width: 850,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 65,
              fontWeight: 900,
              lineHeight: 1.35,
              color: WHITE,
            }}
          >
            أو عندما تكون هناك
            <br />
            صعوبة في الحركة...
          </div>
        </Reveal>

        <Reveal delay={30}>
          <div
            style={{
              marginTop: 30,
              fontSize: 35,
              color: SOFT,
              fontWeight: 700,
            }}
          >
            ضعف في العضلات، نقص في المرونة،
            <br />
            أو صعوبة في التوازن.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0807.PNG"
        side="right"
        size={750}
        bottom={-140}
        direction="from-right"
      />

      <div
        style={{
          position: "absolute",
          left: 650,
          bottom: 170,
          fontSize: 100,
          color: SKY,
          transform: `translateX(${arrowX}px)`,
        }}
      >
        →
      </div>
    </Scene>
  );
};

const Rehab02: React.FC = () => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [25, 120],
    [0, 1],
    clamp
  );

  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 100,
          top: 130,
          width: 1000,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 29,
              color: BLUE,
              fontWeight: 900,
            }}
          >
            بعد الإصابات والعمليات
          </div>
        </Reveal>

        <Reveal delay={20}>
          <div
            style={{
              marginTop: 25,
              fontSize: 58,
              lineHeight: 1.4,
              fontWeight: 900,
              color: NAVY,
            }}
          >
            يبدأ دور التأهيل
            <br />
            لاستعادة الحركة والوظيفة.
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 55,
            width: 650,
            height: 12,
            borderRadius: 20,
            background: "#D8E7F7",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              height: "100%",
              background: BLUE,
              borderRadius: 20,
            }}
          />
        </div>

        <div
          style={{
            marginTop: 15,
            fontSize: 23,
            fontWeight: 700,
            color: NAVY2,
          }}
        >
          خطوة بخطوة نحو استعادة الحركة
        </div>
      </div>

      <Character
        file="IMG_0808.PNG"
        side="right"
        size={720}
        bottom={-130}
        direction="from-right"
      />
    </Scene>
  );
};

const Exercise02: React.FC = () => {
  const frame = useCurrentFrame();

  const bounce = Math.abs(Math.sin(frame / 12)) * 10;

  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 80,
          top: 125,
          width: 1000,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 55,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            ومن أهم الأدوات...
          </div>
        </Reveal>

        <Reveal delay={25}>
          <div
            style={{
              marginTop: 20,
              fontSize: 86,
              fontWeight: 900,
              color: SKY,
            }}
          >
            التمارين العلاجية
          </div>
        </Reveal>

        <Reveal delay={55}>
          <div
            style={{
              marginTop: 30,
              fontSize: 33,
              lineHeight: 1.5,
              color: SOFT,
              fontWeight: 700,
            }}
          >
            لتطوير الحركة والقوة والمرونة
            <br />
            بحسب حالة كل شخص وهدفه.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0812.PNG"
        side="right"
        size={690}
        bottom={-110}
        direction="from-right"
      />

      <div
        style={{
          position: "absolute",
          left: 100,
          bottom: 130,
          fontSize: 45,
          transform: `translateY(${bounce}px)`,
        }}
      >
        🧘‍♀️
      </div>
    </Scene>
  );
};

const Science02: React.FC = () => {
  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 100,
          top: 155,
          width: 900,
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
            العلاج الطبيعي علم...
          </div>
        </Reveal>

        <Reveal delay={25}>
          <div
            style={{
              marginTop: 25,
              fontSize: 59,
              lineHeight: 1.4,
              fontWeight: 900,
              color: NAVY,
            }}
          >
            يبدأ بالتقييم
            <br />
            ثم اختيار ما يناسب الحالة.
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div
            style={{
              marginTop: 35,
              fontSize: 33,
              color: NAVY2,
              fontWeight: 700,
              lineHeight: 1.55,
            }}
          >
            مش كل شخص يحتاج نفس التمارين،
            <br />
            ونفس الطريقة مش مناسبة للجميع.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0811.PNG"
        side="right"
        size={730}
        bottom={-120}
        direction="from-right"
      />
    </Scene>
  );
};

const Listen02: React.FC = () => {
  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 130,
          top: 230,
          width: 850,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 33,
              color: SOFT,
              fontWeight: 800,
            }}
          >
            اسمعوا المعلومة هذي...
          </div>
        </Reveal>

        <Reveal delay={25}>
          <div
            style={{
              marginTop: 25,
              fontSize: 64,
              lineHeight: 1.4,
              color: WHITE,
              fontWeight: 900,
            }}
          >
            العلاج الطبيعي مش لازم
            <br />
            يبدأ بعد حدوث المشكلة فقط.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0810.PNG"
        side="right"
        size={730}
        bottom={-120}
        direction="from-right"
      />

      <div
        style={{
          position: "absolute",
          right: 475,
          top: 220,
          fontSize: 65,
        }}
      >
        👂
      </div>
    </Scene>
  );
};

const Prevention02: React.FC = () => {
  const frame = useCurrentFrame();

  const lineWidth = interpolate(
    frame,
    [0, 50],
    [0, 560],
    clamp
  );

  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 100,
          top: 150,
          width: 950,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 30,
              color: BLUE,
              fontWeight: 900,
            }}
          >
            الوقاية أيضًا
          </div>
        </Reveal>

        <Reveal delay={20}>
          <div
            style={{
              marginTop: 25,
              fontSize: 60,
              lineHeight: 1.4,
              fontWeight: 900,
              color: NAVY,
            }}
          >
            تحسين الحركة والقوة والمرونة
            <br />
            يمكن أن يساعد في الوقاية.
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 55,
            width: 600,
            height: 6,
            background: "#DCEBFA",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: lineWidth,
              height: 6,
              background: BLUE,
            }}
          />
        </div>
      </div>

      <Character
        file="IMG_0814.PNG"
        side="right"
        size={720}
        bottom={-120}
        direction="from-right"
      />
    </Scene>
  );
};

const Points02: React.FC = () => {
  const frame = useCurrentFrame();

  const items = [
    "ألم يؤثر على الحركة",
    "صعوبة في النشاط اليومي",
    "التأهيل بعد الإصابة أو العملية",
    "تحسين القوة والحركة",
  ];

  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 100,
          top: 115,
          width: 900,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            متى نفكر في العلاج الطبيعي؟
          </div>
        </Reveal>

        <div
          style={{
            marginTop: 35,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {items.map((item, index) => {
            const delay = 45 + index * 18;

            const opacity = interpolate(
              frame,
              [delay, delay + 15],
              [0, 1],
              clamp
            );

            const x = interpolate(
              frame,
              [delay, delay + 18],
              [80, 0],
              clamp
            );

            return (
              <div
                key={item}
                style={{
                  opacity,
                  transform: `translateX(${x}px)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                  fontSize: 29,
                  fontWeight: 800,
                  color: SOFT,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: SKY,
                  }}
                />
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <Character
        file="IMG_0815.PNG"
        side="right"
        size={680}
        bottom={-110}
        direction="from-right"
      />
    </Scene>
  );
};

const Progress02: React.FC = () => {
  return (
    <Scene>
      <Brand />

      <div
        style={{
          position: "absolute",
          left: 90,
          top: 150,
          width: 1000,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 31,
              color: BLUE,
              fontWeight: 900,
            }}
          >
            الهدف
          </div>
        </Reveal>

        <Reveal delay={20}>
          <div
            style={{
              marginTop: 25,
              fontSize: 65,
              lineHeight: 1.35,
              fontWeight: 900,
              color: NAVY,
            }}
          >
            مش مجرد التخلص من الألم...
          </div>
        </Reveal>

        <Reveal delay={55}>
          <div
            style={{
              marginTop: 25,
              fontSize: 48,
              lineHeight: 1.5,
              fontWeight: 800,
              color: NAVY2,
            }}
          >
            بل استعادة الحركة
            <br />
            والعودة للنشاط والحياة اليومية.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0813.PNG"
        side="right"
        size={750}
        bottom={-130}
        direction="from-right"
      />
    </Scene>
  );
};

const Success02: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame,
    [0, 35],
    [0.6, 1],
    clamp
  );

  const rotate = interpolate(
    frame,
    [0, 35],
    [-8, 0],
    clamp
  );

  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 100,
          top: 200,
          width: 900,
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontSize: 31,
            color: SKY,
            fontWeight: 900,
          }}
        >
          والنتيجة؟
        </div>

        <div
          style={{
            marginTop: 25,
            fontSize: 100,
            color: WHITE,
            fontWeight: 900,
            transform: `scale(${scale}) rotate(${rotate}deg)`,
            transformOrigin: "left center",
          }}
        >
          تقدّم. ✅
        </div>

        <Reveal delay={55}>
          <div
            style={{
              marginTop: 30,
              fontSize: 36,
              color: SOFT,
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            خطوة وراء خطوة...
            <br />
            حتى نرجعوا للنشاط.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0817.PNG"
        side="right"
        size={780}
        bottom={-120}
        direction="from-right"
      />

      {["✨", "🎉", "⭐", "✨", "🎊"].map(
        (emoji, i) => {
          const y = Math.sin(frame / 10 + i) * 25;
          const x = Math.cos(frame / 15 + i) * 20;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                right: 180 + i * 100,
                top: 160 + (i % 2) * 130,
                fontSize: 40 + (i % 2) * 15,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {emoji}
            </div>
          );
        }
      )}
    </Scene>
  );
};

const DidYouKnow02: React.FC = () => {
  const frame = useCurrentFrame();

  const circleScale = interpolate(
    frame,
    [0, 25],
    [0.5, 1],
    clamp
  );

  return (
    <Scene>
      <Brand />

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
            width: 1250,
            minHeight: 500,
            borderRadius: 40,
            background: WHITE,
            boxShadow:
              "0 25px 80px rgba(7,26,53,0.12)",
            display: "flex",
            alignItems: "center",
            padding: "55px 70px",
            gap: 70,
          }}
        >
          <div
            style={{
              width: 210,
              height: 210,
              borderRadius: "50%",
              background: BLUE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 100,
              transform: `scale(${circleScale})`,
              flexShrink: 0,
            }}
          >
            💡
          </div>

          <div>
            <div
              style={{
                fontSize: 35,
                color: BLUE,
                fontWeight: 900,
              }}
            >
              هل تعلم؟
            </div>

            <div
              style={{
                marginTop: 25,
                fontSize: 39,
                lineHeight: 1.55,
                fontWeight: 800,
                color: NAVY,
              }}
            >
              أخصائي العلاج الطبيعي
              <br />
              لا ينظر إلى الألم وحده،
              <br />
              بل يقيّم الحركة والقوة والمرونة
              <br />
              والوظيفة ليحدد الخطة المناسبة.
            </div>
          </div>
        </div>
      </div>

      <Character
        file="IMG_0733.PNG"
        side="right"
        size={420}
        bottom={-100}
        direction="from-bottom"
      />
    </Scene>
  );
};

const Summary02: React.FC = () => {
  return (
    <Scene dark>
      <Brand light />

      <div
        style={{
          position: "absolute",
          left: 110,
          top: 155,
          width: 1050,
        }}
      >
        <Reveal>
          <div
            style={{
              fontSize: 31,
              color: SKY,
              fontWeight: 900,
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
              lineHeight: 1.35,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            العلاج الطبيعي
            <br />
            <span style={{ color: SKY }}>
              مش فقط بعد الإصابة.
            </span>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div
            style={{
              marginTop: 35,
              fontSize: 35,
              lineHeight: 1.6,
              color: SOFT,
              fontWeight: 700,
            }}
          >
            هو رحلة لاستعادة الحركة،
            <br />
            تحسين الوظيفة،
            <br />
            والعودة للنشاط.
          </div>
        </Reveal>
      </div>

      <Character
        file="IMG_0733.PNG"
        side="right"
        size={700}
        bottom={-130}
        direction="from-right"
      />
    </Scene>
  );
};

const Ending02: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 30],
    [0, 1],
    clamp
  );

  const y = interpolate(
    frame,
    [0, 35],
    [70, 0],
    clamp
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
            width: 900,
            marginRight: 470,
            textAlign: "center",
            opacity,
            transform: `translateY(${y}px)`,
          }}
        >
          <div
            style={{
              fontSize: 65,
              fontWeight: 900,
              color: WHITE,
            }}
          >
            شكرًا لاستماعكم
          </div>

          <div
            style={{
              marginTop: 25,
              fontSize: 43,
              fontWeight: 900,
              color: SKY,
            }}
          >
            بودكاست نبض العلاج الطبيعي
          </div>

          <div
            style={{
              marginTop: 22,
              fontSize: 31,
              fontWeight: 700,
              color: SOFT,
              lineHeight: 1.5,
            }}
          >
            وفي الحلقة القادمة...
            <br />
            شن يصير في أول زيارة لأخصائي العلاج الطبيعي؟
          </div>

          <div
            style={{
              width: 270,
              height: 5,
              background: BLUE,
              margin: "40px auto 0",
            }}
          />
        </div>

        <Img
          src={staticFile("characters/IMG_0735.PNG")}
          style={{
            position: "absolute",
            right: 0,
            bottom: -140,
            width: 790,
            height: 790,
            objectFit: "contain",
            opacity,
            transform: `translateY(${y}px)`,
          }}
        />
      </div>
    </Scene>
  );
};

export const Episode02: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={270}>
        <Opening02 />
      </Sequence>

      <Sequence from={270} durationInFrames={330}>
        <Question02 />
      </Sequence>

      <Sequence from={600} durationInFrames={330}>
        <Thinking02 />
      </Sequence>

      <Sequence from={930} durationInFrames={330}>
        <Idea02 />
      </Sequence>

      <Sequence from={1260} durationInFrames={420}>
        <Pain02 />
      </Sequence>

      <Sequence from={1680} durationInFrames={420}>
        <Movement02 />
      </Sequence>

      <Sequence from={2100} durationInFrames={450}>
        <Rehab02 />
      </Sequence>

      <Sequence from={2550} durationInFrames={420}>
        <Exercise02 />
      </Sequence>

      <Sequence from={2970} durationInFrames={420}>
        <Science02 />
      </Sequence>

      <Sequence from={3390} durationInFrames={360}>
        <Listen02 />
      </Sequence>

      <Sequence from={3750} durationInFrames={420}>
        <Prevention02 />
      </Sequence>

      <Sequence from={4170} durationInFrames={450}>
        <Points02 />
      </Sequence>

      <Sequence from={4620} durationInFrames={420}>
        <Progress02 />
      </Sequence>

      <Sequence from={5040} durationInFrames={450}>
        <Success02 />
      </Sequence>

      <Sequence from={5490} durationInFrames={540}>
        <DidYouKnow02 />
      </Sequence>

      <Sequence from={6030} durationInFrames={450}>
        <Summary02 />
      </Sequence>

      <Sequence from={6480} durationInFrames={450}>
        <Ending02 />
      </Sequence>
    </AbsoluteFill>
  );
};
