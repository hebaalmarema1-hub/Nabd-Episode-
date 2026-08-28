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

  // كل مشهد = 75 فريم
  const SCENE_DURATION = 75;

  // الجزء الرابع يبدأ من المشهد 12
  const scene = Math.floor(frame / SCENE_DURATION) + 12;

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
    children,
  }: {
    title: string;
    children: React.ReactNode;
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
        {children}
      </div>
    </div>
  );

  // =========================
  // SCENE 12
  // =========================

  const Scene12 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نشوف الحركة"
        number="12"
      />

      <Character
        file="IMG_0875.PNG"
        left={10}
        width={675}
        height={780}
      />

      <Card title="نلاحظ الحركة">
        <>
          نشوف طريقة أداء الحركة
          <br />
          وهل في حركة تسبب ألم أو صعوبة.
        </>
      </Card>
    </AbsoluteFill>
  );

  // =========================
  // SCENE 13
  // =========================

  const Scene13 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نقيم التوازن"
        number="13"
      />

      <Character
        file="IMG_0876.PNG"
        left={10}
        width={675}
        height={780}
      />

      <Card title="التوازن مهم">
        <>
          نلاحظ قدرة الجسم على التوازن
          <br />
          أثناء الوقوف والحركة.
        </>
      </Card>
    </AbsoluteFill>
  );

  // =========================
  // SCENE 14
  // =========================

  const Scene14 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="معلومة مهمة"
        number="14"
      />

      <Character
        file="IMG_0732.PNG"
        left={10}
        width={675}
        height={780}
      />

      <Card title="مش كل ألم يعني ضرر">
        <>
          الألم وحده مش كافي للتشخيص
          <br />
          لذلك نربطه بباقي نتائج التقييم.
        </>
      </Card>
    </AbsoluteFill>
  );

  // =========================
  // SCENE 15
  // =========================

  const Scene15 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نرتب النتائج"
        number="15"
      />

      <Character
        file="IMG_0877.PNG"
        left={10}
        width={675}
        height={780}
      />

      <Card title="الصورة تبدأ توضح">
        <>
          بعد ما نجمع المعلومات
          <br />
          نقدر نحدد احتياجات الحالة.
        </>
      </Card>
    </AbsoluteFill>
  );

  // =========================
  // SCENE 16
  // =========================

  const Scene16 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="وصلنا للنتيجة"
        number="16"
      />

      <Character
        file="IMG_0817.PNG"
        left={10}
        width={675}
        height={780}
      />

      <Card title="الخطوة الجاية">
        <>
          بعد التقييم نبدأ نحدد
          <br />
          الخطة المناسبة للعلاج.
        </>
      </Card>

      <div
        style={{
          position: "absolute",
          right: 90,
          bottom: 105,
          padding: "14px 30px",
          backgroundColor: LIGHT,
          border: `3px solid ${CYAN}`,
          borderRadius: 18,
          color: BLUE,
          fontSize: 27,
          fontWeight: 900,
          zIndex: 50,
        }}
      >
        RESULT ✓
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
      {scene === 12 && <Scene12 />}
      {scene === 13 && <Scene13 />}
      {scene === 14 && <Scene14 />}
      {scene === 15 && <Scene15 />}
      {scene === 16 && <Scene16 />}
    </AbsoluteFill>
  );
};
