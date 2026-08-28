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
  // CHARACTER IMAGE
  // =========================

  const Character = ({
    file,
    left = 20,
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
  // SCENE 04
  // =========================

  const Scene04 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="بعدها نبدأ القياس"
        number="04"
      />

      <Character
        file="IMG_0874.PNG"
        left={15}
        width={690}
        height={790}
      />

      <Card
        title="التقييم الجسدي"
        text={
          <>
            نقيس الحركة والقوة
            <br />
            ونلاحظ طريقة أداء الحركة
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
  // SCENE 05
  // =========================

  const Scene05 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نحدد مكان الألم"
        number="05"
      />

      <Character
        file="IMG_0875.PNG"
        left={10}
        width={675}
        height={780}
      />

      <Card
        title="مثلاً: ألم الكتف"
        text={
          <>
            نشوف وين الألم بالضبط
            <br />
            وشن الحركات اللي تزيده.
          </>
        }
      />

      <div
        style={{
          position: "absolute",
          right: 120,
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
        مكان الألم
      </div>
    </AbsoluteFill>
  );

  // =========================
  // SCENE 06
  // =========================

  const Scene06 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نشوف الحركة"
        number="06"
      />

      <Character
        file="IMG_0810.PNG"
        left={10}
        width={680}
        height={780}
      />

      <Card
        title="اختبار الحركة"
        text={
          <>
            نطلب منك تعمل حركة بسيطة
            <br />
            حتى نقيّم الأداء والحركة.
          </>
        }
      />
    </AbsoluteFill>
  );

  // =========================
  // SCENE 07
  // =========================

  const Scene07 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نقيّم التوازن"
        number="07"
      />

      <Character
        file="IMG_0876.PNG"
        left={10}
        width={680}
        height={780}
      />

      <Card
        title="التوازن مهم"
        text={
          <>
            يساعدنا نعرف مستوى
            <br />
            التحكم والثبات أثناء الحركة.
          </>
        }
      />

      <div
        style={{
          position: "absolute",
          left: 105,
          bottom: 110,
          width: 430,
          height: 12,
          backgroundColor: CYAN,
          borderRadius: 20,
          zIndex: 30,
        }}
      />
    </AbsoluteFill>
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
        title="نرتب مراحل التقييم"
        number="09"
      />

      <Character
        file="IMG_0811.PNG"
        left={15}
        width={670}
        height={780}
      />

      <Card
        title="كل خطوة لها هدف"
        text={
          <>
            نرتب النتائج ونحدد الأولويات
            <br />
            قبل وضع الخطة العلاجية.
          </>
        }
      />

      <div
        style={{
          position: "absolute",
          right: 105,
          bottom: 110,
          display: "flex",
          gap: 14,
          zIndex: 40,
        }}
      >
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            style={{
              width: 58,
              height: 58,
              borderRadius: "50%",
              backgroundColor: n === 1 ? BLUE : LIGHT,
              color: n === 1 ? WHITE : BLUE,
              border: `2px solid ${CYAN}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 27,
              fontWeight: 900,
            }}
          >
            {n}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );

  // =========================
  // SCENE 10
  // =========================

  const Scene10 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نركز على التفاصيل"
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
            نركز على التفاصيل المرتبطة
            <br />
            بالألم والحركة.
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
    </AbsoluteFill>
  );

  // =========================
  // SCENE 12
  // =========================

  const Scene12 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نشرح لك الخطة"
        number="12"
      />

      <Character
        file="IMG_0877.PNG"
        left={5}
        width={690}
        height={790}
      />

      <Card
        title="وهنا تبدأ الخطة"
        text={
          <>
            نوضح لك شنو بنشتغلوا عليه
            <br />
            وكيف نمشوا خطوة بخطوة.
          </>
        }
      />
    </AbsoluteFill>
  );

  // =========================
  // SCENE 13
  // =========================

  const Scene13 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="نراجع التفاصيل"
        number="13"
      />

      <Character
        file="IMG_0811.PNG"
        left={10}
        width={680}
        height={780}
      />

      <Card
        title="مراجعة المعلومات"
        text={
          <>
            نرجع للملف والنتائج
            <br />
            حتى تكون الخطة مناسبة للحالة.
          </>
        }
      />
    </AbsoluteFill>
  );

  // =========================
  // SCENE 14
  // =========================

  const Scene14 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="وهنا نقطة مهمة!"
        number="14"
      />

      <Character
        file="IMG_0732.PNG"
        left={45}
        width={520}
        height={620}
      />

      <div
        style={{
          position: "absolute",
          right: 65,
          top: 205,
          width: 680,
          padding: "45px",
          backgroundColor: WHITE,
          borderRadius: 30,
          border: `4px solid ${CYAN}`,
          boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
          textAlign: "center",
          zIndex: 30,
        }}
      >
        <div
          style={{
            color: BLUE,
            fontSize: 48,
            fontWeight: 900,
          }}
        >
          كل حالة مختلفة
        </div>

        <div
          style={{
            marginTop: 20,
            color: DARK,
            fontSize: 32,
            fontWeight: 700,
            lineHeight: 1.55,
          }}
        >
          لذلك التقييم هو أساس
          <br />
          الخطة العلاجية المناسبة.
        </div>
      </div>
    </AbsoluteFill>
  );

  // =========================
  // SCENE 15
  // =========================

  const Scene15 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="وصلنا للصورة كاملة"
        number="15"
      />

      <Character
        file="IMG_0817.PNG"
        left={10}
        width={680}
        height={780}
      />

      <Card
        title="تمام!"
        text={
          <>
            الآن عندنا معلومات كافية
            <br />
            باش نبدأوا الخطة.
          </>
        }
      />
    </AbsoluteFill>
  );

  // =========================
  // SCENE 16
  // =========================

  const Scene16 = () => (
    <AbsoluteFill style={{ opacity }}>
      <Background />

      <Header
        title="وهكي تبدأ أول زيارة"
        number="16"
      />

      <Character
        file="IMG_0817.PNG"
        left={5}
        width={650}
        height={760}
      />

      <div
        style={{
          position: "absolute",
          right: 60,
          top: 180,
          width: 670,
          padding: "45px",
          boxSizing: "border-box",
          backgroundColor: WHITE,
          borderRadius: 32,
          border: `4px solid ${BLUE}`,
          boxShadow: "0 20px 45px rgba(0,0,0,0.13)",
          textAlign: "center",
          zIndex: 30,
        }}
      >
        <div
          style={{
            color: BLUE,
            fontSize: 50,
            fontWeight: 900,
            marginBottom: 20,
          }}
        >
          وهكي تبدأ أول زيارة
        </div>

        <div
          style={{
            color: DARK,
            fontSize: 32,
            fontWeight: 700,
            lineHeight: 1.7,
          }}
        >
          استماع
          <br />
          تقييم
          <br />
          تحليل
          <br />
          ثم خطة علاجية مناسبة لك
        </div>

        <div
          style={{
            marginTop: 25,
            color: CYAN,
            fontSize: 27,
            fontWeight: 900,
          }}
        >
          بودكاست نبض العلاج الطبيعي
        </div>
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
      {scene === 5 && <Scene05 />}
      {scene === 6 && <Scene06 />}
      {scene === 7 && <Scene07 />}
      {scene === 8 && <Scene08 />}
      {scene === 9 && <Scene09 />}
      {scene === 10 && <Scene10 />}
      {scene === 11 && <Scene11 />}
      {scene === 12 && <Scene12 />}
      {scene === 13 && <Scene13 />}
      {scene === 14 && <Scene14 />}
      {scene === 15 && <Scene15 />}
      {scene === 16 && <Scene16 />}
    </AbsoluteFill>
  );
};
