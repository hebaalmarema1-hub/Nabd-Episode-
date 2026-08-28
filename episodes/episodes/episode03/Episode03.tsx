import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
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

  // الجزء الثالث يبدأ من المشهد 08
  const scene = Math.floor(frame / SCENE_DURATION) + 8;

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
  // CHARACTER
  // =========================

  const Character = ({
    file,
    left = 10,
    width = 680,
    height = 780,
  }: {
    file: string;
    left?: number;
    width?: number;
    height?: number;
  }) => (
    <Img
      src={staticFile(`characters/${file}`)}
      style={{
        position: "absolute",
        left,
        bottom: 58,
        width,
        height,
        objectFit: "contain",
        opacity,
        transform: `translateY(${moveUp}px)`,
        filter: "drop-shadow(0 18px 25px rgba(0,0,0,0.16))",
        zIndex: 20,
      }}
    />
  );

  // =========================
  // CARD
  // =========================

  const Card = ({
    title,
    text,
  }: {
    title: string;
    text: React.ReactNode;
  }) => (
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
          lineHeight: 1.25,
        }}
      >
        {title}
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
        {text}
      </div>
    </div>
  );

  // =========================
  // SCENE 08
  // =========================

  const Scene08 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نحلل المعلومات"
        number="08"
      />

      <Character
        file="IMG_0816.PNG"
        left={20}
        width={660}
        height={770}
      />

      <Card
        title="الأخصائي يحلل"
        text={
          <>
            نجمع كل المعلومات
            <br />
            باش نفهم سبب المشكلة بشكل أفضل.
          </>
        }
      />
    </AbsoluteFill>
  );

  // =========================
  // SCENE 09
  // =========================

  const Scene09 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نراجع الملف"
        number="09"
      />

      <Character
        file="IMG_0811.PNG"
        left={15}
        width={670}
        height={780}
      />

      <Card
        title="مراجعة التاريخ المرضي"
        text={
          <>
            نرجع للمعلومات السابقة
            <br />
            ونربطها بنتائج التقييم.
          </>
        }
      />
    </AbsoluteFill>
  );

  // =========================
  // SCENE 10
  // =========================

  const Scene10 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نسأل ونستوضح"
        number="10"
      />

      <Character
        file="IMG_0737.PNG"
        left={20}
        width={660}
        height={770}
      />

      <Card
        title="عندنا سؤال مهم"
        text={
          <>
            أحيانًا نحتاج نسأل أكثر
            <br />
            باش نفهم الحالة بشكل أوضح.
          </>
        }
      />
    </AbsoluteFill>
  );

  // =========================
  // SCENE 11
  // =========================

  const Scene11 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نتأكد من الحركة"
        number="11"
      />

      <Character
        file="IMG_0874.PNG"
        left={10}
        width={680}
        height={780}
      />

      <Card
        title="نقيس مرة ثانية"
        text={
          <>
            نتأكد من مدى الحركة والقوة
            <br />
            ونقارن النتائج.
          </>
        }
      />

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
      {scene === 8 && <Scene08 />}
      {scene === 9 && <Scene09 />}
      {scene === 10 && <Scene10 />}
      {scene === 11 && <Scene11 />}
    </AbsoluteFill>
  );
};
