import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const Episode03: React.FC = () => {
  const frame = useCurrentFrame();

  const BLUE = "#087EA4";
  const CYAN = "#35B6D6";
  const DARK = "#244B57";
  const BG = "#F4FBFD";
  const FLOOR = "#DCE9ED";
  const WHITE = "#FFFFFF";
  const LIGHT = "#E5F5F9";

  const SCENE_DURATION = 75;

  // الجزء الثاني يبدأ من المشهد 04
  const scene = Math.floor(frame / SCENE_DURATION) + 4;

  const localFrame = frame % SCENE_DURATION;

  const fadeIn = interpolate(localFrame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(localFrame, [63, 74], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = Math.min(fadeIn, fadeOut);

  const moveUp = interpolate(localFrame, [0, 18], [35, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================
  // BACKGROUND
  // =========================

  const Background = () => (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #E5F6FA 0%, #FFFFFF 58%, #EEF9FB 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 48,
          height: "100%",
          backgroundColor: BLUE,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 70,
          top: 55,
          width: 155,
          height: 155,
          borderRadius: "50%",
          border: `4px solid ${CYAN}`,
          opacity: 0.16,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 120,
          top: 105,
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: CYAN,
          opacity: 0.1,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 95,
          top: 165,
          width: 18,
          height: 18,
          borderRadius: "50%",
          backgroundColor: CYAN,
          opacity: 0.3,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 125,
          top: 195,
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: BLUE,
          opacity: 0.25,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 48,
          right: 0,
          bottom: 0,
          height: 95,
          backgroundColor: FLOOR,
          borderTop: "5px solid #C5D9DE",
        }}
      />
    </>
  );

  // =========================
  // HEADER
  // =========================

  const Header = ({
    title,
    number,
  }: {
    title: string;
    number: string;
  }) => (
    <>
      <div
        style={{
          position: "absolute",
          top: 38,
          left: 90,
          right: 90,
          textAlign: "center",
          color: BLUE,
          fontSize: 50,
          fontWeight: 900,
          lineHeight: 1.2,
          zIndex: 50,
        }}
      >
        {title}
      </div>

      <div
        style={{
          position: "absolute",
          top: 112,
          left: "50%",
          transform: "translateX(-50%)",
          width: 150,
          height: 6,
          borderRadius: 20,
          backgroundColor: CYAN,
          zIndex: 50,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 72,
          bottom: 40,
          color: BLUE,
          fontSize: 25,
          fontWeight: 900,
          zIndex: 50,
        }}
      >
        {number}
      </div>
    </>
  );

  // =========================
  // SCENE 04
  // =========================

  const Scene04 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="بعدها نبدأ القياس"
        number="04"
      />

      {/* الشخصية */}
      <div
        style={{
          position: "absolute",
          left: 90,
          bottom: 90,
          width: 480,
          height: 620,
          zIndex: 20,
          opacity,
          transform: `translateY(${moveUp}px)`,
        }}
      >
        {/* الرأس */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 145,
            width: 180,
            height: 180,
            borderRadius: "50%",
            backgroundColor: "#F2C6A0",
            border: `6px solid ${DARK}`,
          }}
        />

        {/* الشعر */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 140,
            width: 190,
            height: 80,
            borderRadius: "100px 100px 30px 30px",
            backgroundColor: DARK,
          }}
        />

        {/* الجسم */}
        <div
          style={{
            position: "absolute",
            top: 190,
            left: 85,
            width: 300,
            height: 300,
            borderRadius: "80px 80px 35px 35px",
            backgroundColor: BLUE,
            border: `6px solid ${DARK}`,
          }}
        />

        {/* الذراع */}
        <div
          style={{
            position: "absolute",
            top: 225,
            left: 350,
            width: 100,
            height: 235,
            borderRadius: 60,
            backgroundColor: "#F2C6A0",
            border: `6px solid ${DARK}`,
            transform: "rotate(-18deg)",
          }}
        />

        {/* الرجل الأولى */}
        <div
          style={{
            position: "absolute",
            top: 465,
            left: 120,
            width: 105,
            height: 150,
            borderRadius: 45,
            backgroundColor: "#F2C6A0",
            border: `6px solid ${DARK}`,
          }}
        />

        {/* الرجل الثانية */}
        <div
          style={{
            position: "absolute",
            top: 465,
            left: 255,
            width: 105,
            height: 150,
            borderRadius: 45,
            backgroundColor: "#F2C6A0",
            border: `6px solid ${DARK}`,
          }}
        />

        {/* ROM */}
        <div
          style={{
            position: "absolute",
            top: 325,
            left: 170,
            width: 130,
            height: 130,
            borderRadius: "50%",
            backgroundColor: WHITE,
            border: `7px solid ${CYAN}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: BLUE,
            fontSize: 38,
            fontWeight: 900,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        >
          ROM
        </div>
      </div>

      {/* بطاقة التقييم */}
      <div
        style={{
          position: "absolute",
          right: 65,
          top: 185,
          width: 650,
          minHeight: 300,
          padding: "35px 40px",
          boxSizing: "border-box",
          backgroundColor: WHITE,
          border: `4px solid ${CYAN}`,
          borderRadius: 32,
          boxShadow: "0 20px 45px rgba(0,70,90,0.16)",
          textAlign: "center",
          zIndex: 40,
        }}
      >
        <div
          style={{
            color: BLUE,
            fontSize: 48,
            fontWeight: 900,
          }}
        >
          التقييم الجسدي
        </div>

        <div
          style={{
            width: 110,
            height: 6,
            margin: "18px auto 22px",
            borderRadius: 20,
            backgroundColor: CYAN,
          }}
        />

        <div
          style={{
            color: DARK,
            fontSize: 32,
            fontWeight: 700,
            lineHeight: 1.55,
          }}
        >
          نقيس الحركة والقوة
          <br />
          ونلاحظ طريقة أداء الحركة
        </div>
      </div>

      {/* مؤشرات القياس */}
      <div
        style={{
          position: "absolute",
          right: 90,
          bottom: 105,
          display: "flex",
          gap: 12,
          zIndex: 50,
        }}
      >
        {["ROM", "القوة", "الحركة"].map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: LIGHT,
              border: `3px solid ${CYAN}`,
              borderRadius: 18,
              padding: "13px 23px",
              color: BLUE,
              fontSize: 25,
              fontWeight: 900,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          left: 105,
          bottom: 45,
          color: BLUE,
          fontSize: 27,
          fontWeight: 900,
          zIndex: 60,
        }}
      >
        PHYSICAL ASSESSMENT
      </div>
    </AbsoluteFill>
  );

  // =========================
  // MAIN
  // =========================

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        overflow: "hidden",
        fontFamily: "Arial, Tahoma, sans-serif",
      }}
    >
      {scene === 4 && <Scene04 />}
    </AbsoluteFill>
  );
};
