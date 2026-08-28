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
  const scene = Math.floor(frame / SCENE_DURATION) + 12;import React from "react";
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

  // الجزء الأخير يبدأ من المشهد 16
  const scene = Math.floor(frame / SCENE_DURATION) + 16;

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
  // SCENE 16
  // =========================

  const Scene16 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      {/* العنوان */}
      <div
        style={{
          position: "absolute",
          top: 55,
          left: 90,
          right: 90,
          textAlign: "center",
          color: BLUE,
          fontSize: 52,
          fontWeight: 900,
          zIndex: 50,
        }}
      >
        وصلنا للنتيجة
      </div>

      <div
        style={{
          position: "absolute",
          top: 125,
          left: "50%",
          transform: "translateX(-50%)",
          width: 150,
          height: 6,
          borderRadius: 20,
          backgroundColor: CYAN,
        }}
      />

      {/* الشخصية - نجاح */}
      <Img
        src={staticFile("characters/IMG_0817.PNG")}
        style={{
          position: "absolute",
          left: 20,
          bottom: 58,
          width: 680,
          height: 780,
          objectFit: "contain",
          opacity,
          transform: `translateY(${moveUp}px)`,
          filter: "drop-shadow(0 18px 25px rgba(0,0,0,0.16))",
          zIndex: 20,
        }}
      />

      {/* بطاقة النتيجة */}
      <div
        style={{
          position: "absolute",
          right: 65,
          top: 185,
          width: 650,
          minHeight: 300,
          padding: "38px 40px",
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
            fontSize: 50,
            fontWeight: 900,
          }}
        >
          التقييم اكتمل ✓
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
          فهمنا المشكلة بشكل أوضح
          <br />
          وتحدد اتجاه الخطة العلاجية.
        </div>
      </div>

      {/* مؤشر النجاح */}
      <div
        style={{
          position: "absolute",
          right: 110,
          bottom: 105,
          padding: "14px 35px",
          backgroundColor: LIGHT,
          border: `3px solid ${CYAN}`,
          borderRadius: 20,
          color: BLUE,
          fontSize: 30,
          fontWeight: 900,
          zIndex: 50,
        }}
      >
        SUCCESS
      </div>

      <div
        style={{
          position: "absolute",
          left: 72,
          bottom: 40,
          color: BLUE,
          fontSize: 25,
          fontWeight: 900,
        }}
      >
        16
      </div>
    </AbsoluteFill>
  );

  // =========================
  // OUTRO
  // =========================

  const Outro = () => {
    const outroFrame = frame - SCENE_DURATION;

    const outroOpacity = interpolate(
      outroFrame,
      [0, 20, 110, 149],
      [0, 1, 1, 0],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }
    );

    const scale = interpolate(
      outroFrame,
      [0, 35, 120, 149],
      [0.85, 1, 1, 1.05],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }
    );

    const lineWidth = interpolate(
      outroFrame,
      [15, 55],
      [0, 240],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }
    );

    return (
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(135deg, #E5F6FA 0%, #FFFFFF 55%, #EEF9FB 100%)",
          opacity: outroOpacity,
          overflow: "hidden",
        }}
      >
        {/* شريط جانبي */}
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

        {/* دوائر متحركة */}
        <div
          style={{
            position: "absolute",
            right: 110,
            top: 90,
            width: 230,
            height: 230,
            borderRadius: "50%",
            border: `5px solid ${CYAN}`,
            opacity: 0.18,
            transform: `scale(${scale})`,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 170,
            bottom: 100,
            width: 90,
            height: 90,
            borderRadius: "50%",
            backgroundColor: CYAN,
            opacity: 0.08,
            transform: `scale(${scale})`,
          }}
        />

        {/* نبضة زخرفية */}
        <div
          style={{
            position: "absolute",
            top: 245,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 34,
            fontWeight: 900,
            color: CYAN,
            letterSpacing: 12,
          }}
        >
          • • •
        </div>

        {/* النص الرئيسي */}
        <div
          style={{
            position: "absolute",
            top: 340,
            left: 150,
            right: 150,
            textAlign: "center",
            color: BLUE,
            fontSize: 62,
            fontWeight: 900,
            transform: `scale(${scale})`,
          }}
        >
          ونلتقي في حلقة قادمة
        </div>

        {/* الخط المتحرك */}
        <div
          style={{
            position: "absolute",
            top: 440,
            left: "50%",
            transform: "translateX(-50%)",
            width: lineWidth,
            height: 7,
            borderRadius: 20,
            backgroundColor: CYAN,
          }}
        />

        {/* اسم البودكاست */}
        <div
          style={{
            position: "absolute",
            top: 500,
            left: 150,
            right: 150,
            textAlign: "center",
            color: DARK,
            fontSize: 42,
            fontWeight: 800,
          }}
        >
          من بودكاست نبض العلاج الطبيعي
        </div>

        {/* الاسم بالإنجليزي */}
        <div
          style={{
            position: "absolute",
            bottom: 165,
            left: 150,
            right: 150,
            textAlign: "center",
            color: BLUE,
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: 3,
          }}
        >
          NABD • PHYSIOTHERAPY PODCAST
        </div>
      </AbsoluteFill>
    );
  };

  // =========================
  // MAIN
  // =========================

  const isOutro = frame >= SCENE_DURATION;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        overflow: "hidden",
        fontFamily: "Arial, Tahoma, sans-serif",
      }}
    >
      {!isOutro && <Scene16 />}
      {isOutro && <Outro />}
    </AbsoluteFill>
  );
};
