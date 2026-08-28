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

  const scene = Math.floor(frame / SCENE_DURATION);
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

  // =====================================================
  // BACKGROUND
  // =====================================================

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

      <div
        style={{
          position: "absolute",
          left: 75,
          right: 70,
          bottom: 88,
          height: 4,
          borderRadius: 10,
          backgroundColor: "#C4DFE6",
        }}
      />
    </>
  );

  // =====================================================
  // HEADER
  // =====================================================

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

  // =====================================================
  // CARD
  // =====================================================

  const Card = ({
    title,
    text,
  }: {
    title: string;
    text: string;
  }) => (
    <div
      style={{
        position: "absolute",
        right: 75,
        top: 195,
        width: 625,
        minHeight: 235,
        padding: "35px 42px",
        boxSizing: "border-box",
        backgroundColor: WHITE,
        border: `4px solid ${CYAN}`,
        borderRadius: 30,
        boxShadow: "0 18px 40px rgba(0,70,90,0.13)",
        textAlign: "center",
        zIndex: 30,
      }}
    >
      <div
        style={{
          color: BLUE,
          fontSize: 43,
          fontWeight: 900,
          lineHeight: 1.25,
        }}
      >
        {title}
      </div>

      <div
        style={{
          width: 105,
          height: 5,
          margin: "17px auto 20px",
          backgroundColor: CYAN,
          borderRadius: 10,
        }}
      />

      <div
        style={{
          color: DARK,
          fontSize: 31,
          fontWeight: 700,
          lineHeight: 1.55,
        }}
      >
        {text}
      </div>
    </div>
  );

  // =====================================================
  // IMAGE CHARACTER
  // =====================================================

  const Character = ({
    file,
    left = 20,
    width = 650,
    height = 760,
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

  // =====================================================
  // SCENE 4 CHARACTER
  // =====================================================

  const AssessmentCharacter = () => (
    <div
      style={{
        position: "absolute",
        left: 70,
        bottom: 75,
        width: 500,
        height: 630,
        opacity,
        transform: `translateY(${moveUp}px)`,
        zIndex: 20,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 25,
          left: 150,
          width: 185,
          height: 185,
          borderRadius: "50%",
          backgroundColor: "#F2C6A0",
          border: `6px solid ${DARK}`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 10,
          left: 145,
          width: 195,
          height: 85,
          borderRadius: "100px 100px 35px 35px",
          backgroundColor: DARK,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 195,
          left: 90,
          width: 300,
          height: 310,
          borderRadius: "80px 80px 35px 35px",
          backgroundColor: BLUE,
          border: `6px solid ${DARK}`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 230,
          left: 350,
          width: 105,
          height: 240,
          borderRadius: 60,
          backgroundColor: "#F2C6A0",
          border: `6px solid ${DARK}`,
          transform: "rotate(-18deg)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 475,
          left: 125,
          width: 105,
          height: 150,
          borderRadius: 45,
          backgroundColor: "#F2C6A0",
          border: `6px solid ${DARK}`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 475,
          left: 260,
          width: 105,
          height: 150,
          borderRadius: 45,
          backgroundColor: "#F2C6A0",
          border: `6px solid ${DARK}`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 335,
          left: 175,
          width: 130,
          height: 130,
          borderRadius: "50%",
          backgroundColor: WHITE,
          border: `7px solid ${CYAN}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: BLUE,
          fontSize: 40,
          fontWeight: 900,
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        ROM
      </div>
    </div>
  );

  // =====================================================
  // MAIN
  // =====================================================

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        overflow: "hidden",
        fontFamily: "Arial, Tahoma, sans-serif",
      }}
    >

      {/* ================= SCENE 0 ================= */}

      {scene === 0 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <div
            style={{
              position: "absolute",
              top: 35,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: WHITE,
              border: `4px solid ${BLUE}`,
              borderRadius: 22,
              padding: "18px 55px",
              textAlign: "center",
              color: BLUE,
              fontSize: 38,
              fontWeight: 900,
              boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
              zIndex: 60,
            }}
          >
            PHYSICAL THERAPY

            <div
              style={{
                marginTop: 5,
                color: DARK,
                fontSize: 22,
                letterSpacing: 3,
              }}
            >
              CLINIC
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 560,
              height: 650,
              backgroundColor: "#B8CDD4",
              padding: 16,
              borderRadius: "28px 28px 0 0",
              boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
              zIndex: 5,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundColor: BLUE,
                borderRadius: "20px 20px 0 0",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 35,
                  left: 40,
                  right: 40,
                  height: 290,
                  backgroundColor: "#DDF4FA",
                  border: `8px solid ${WHITE}`,
                  borderRadius: 15,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 60,
                  left: 65,
                  width: 120,
                  height: 230,
                  backgroundColor: WHITE,
                  opacity: 0.18,
                  transform: "skewX(-15deg)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 365,
                  left: 65,
                  right: 65,
                  backgroundColor: WHITE,
                  borderRadius: 14,
                  padding: "18px 8px",
                  textAlign: "center",
                  color: BLUE,
                  fontSize: 25,
                  fontWeight: 900,
                }}
              >
                PHYSICAL THERAPY
              </div>

              <div
                style={{
                  position: "absolute",
                  right: 28,
                  top: "58%",
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: WHITE,
                }}
              />
            </div>
          </div>

          <Character
            file="IMG_0815.PNG"
            left={35}
            width={650}
            height={760}
          />

          <div
            style={{
              position: "absolute",
              right: 80,
              bottom: 150,
              padding: "24px 55px",
              backgroundColor: WHITE,
              border: `4px solid ${CYAN}`,
              borderRadius: 28,
              color: BLUE,
              fontSize: 48,
              fontWeight: 900,
              boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
              zIndex: 60,
            }}
          >
            مرحبًا بك
          </div>
        </AbsoluteFill>
      )}

      {/* ================= SCENE 1 ================= */}

      {scene === 1 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نبدأ بالاستماع" number="01" />

          <Character
            file="IMG_0810.PNG"
            left={25}
            width={650}
            height={760}
          />

          <Card
            title="خلينا نسمع منك"
            text="شن المشكلة؟ ومتى بدأت؟ وشن أكثر شيء يضايقك؟"
          />
        </AbsoluteFill>
      )}

      {/* ================= SCENE 2 ================= */}

      {scene === 2 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="المريضة تشرح حالتها"
            number="02"
          />

          <Character
            file="IMG_0873.PNG"
            left={15}
            width={660}
            height={770}
          />

          <Card
            title="نوضح الحالة"
            text="المريضة تعطي المعلومات الأساسية وتشرح المشكلة."
          />

          <div
            style={{
              position: "absolute",
              right: 105,
              bottom: 115,
              backgroundColor: LIGHT,
              border: `2px solid ${CYAN}`,
              padding: "14px 28px",
              borderRadius: 18,
              color: BLUE,
              fontSize: 27,
              fontWeight: 900,
              zIndex: 40,
            }}
          >
            المعلومات الأولية
          </div>
        </AbsoluteFill>
      )}

      {/* ================= SCENE 3 ================= */}

      {scene === 3 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="نسأل الأسئلة المهمة"
            number="03"
          />

          <Character
            file="IMG_0810.PNG"
            left={20}
            width={650}
            height={760}
          />

          <Card
            title="وين الألم؟"
            text="نسأل عن مكان الألم، شدته، ومتى يظهر."
          />

          <div
            style={{
              position: "absolute",
              right: 100,
              bottom: 110,
              width: 220,
              padding: "14px",
              backgroundColor: LIGHT,
              border: `2px solid ${CYAN}`,
              borderRadius: 18,
              color: BLUE,
              textAlign: "center",
              fontSize: 26,
              fontWeight: 900,
              zIndex: 40,
            }}
          >
            مكان الألم
          </div>
        </AbsoluteFill>
      )}

      {/* ================= SCENE 4 ================= */}

      {scene === 4 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="بعدها نبدأ القياس"
            number="04"
          />

          <AssessmentCharacter />

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
                lineHeight: 1.2,
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

          <div
            style={{
              position: "absolute",
              right: 75,
              bottom: 110,
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
      )}

      {/* ================= SCENE 5 ================= */}

      {scene === 5 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نحدد مكان الألم" number="05" />

          <Character
            file="IMG_0806.PNG"
            left={10}
            width={675}
            height={780}
          />

          <Card
            title="مثلاً: ألم الكتف"
            text="نشوف وين الألم بالضبط وشن الحركات اللي تزيده."
          />
        </AbsoluteFill>
      )}

      {/* ================= SCENE 6 ================= */}

      {scene === 6 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نشوف الحركة" number="06" />

          <Character
            file="IMG_0807.PNG"
            left={5}
            width={690}
            height={790}
          />

          <Card
            title="اختبار الحركة"
            text="قد نطلب منك تعمل حركة أو تمرين بسيط حتى نقيّم الأداء."
          />
        </AbsoluteFill>
      )}

      {/* ================= SCENE 7 ================= */}

      {scene === 7 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نقيّم التوازن" number="07" />

          <Character
            file="IMG_0876.PNG"
            left={10}
            width={680}
            height={780}
          />

          <Card
            title="التوازن مهم"
            text="لأنه يساعدنا نعرف مستوى التحكم والثبات أثناء الحركة."
          />

          <div
            style={{
              position: "absolute",
              left: 110,
              bottom: 110,
              width: 430,
              height: 12,
              backgroundColor: CYAN,
              borderRadius: 20,
              zIndex: 30,
            }}
          />
        </AbsoluteFill>
      )}

      {/* ================= SCENE 8 ================= */}

      {scene === 8 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نحلل المعلومات" number="08" />

          <Character
            file="IMG_0816.PNG"
            left={20}
            width={660}
            height={770}
          />

          <Card
            title="الأخصائي يحلل"
            text="نجمع كل المعلومات باش نفهم سبب المشكلة بشكل أفضل."
          />
        </AbsoluteFill>
      )}

      {/* ================= SCENE 9 ================= */}

      {scene === 9 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="نرتب مراحل التقييم"
            number="09"
          />

          <Character
            file="IMG_0808.PNG"
            left={15}
            width={670}
            height={780}
          />

          <Card
            title="كل خطوة لها هدف"
            text="نرتب النتائج ونحدد الأولويات قبل وضع الخطة العلاجية."
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
      )}

      {/* ================= SCENE 10 ================= */}

      {scene === 10 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="نركز على التفاصيل"
            number="10"
          />

          <Character
            file="IMG_0812.PNG"
            left={10}
            width={680}
            height={780}
          />

          <Card
            title="مثلاً: الرقبة"
            text="نلاحظ الألم والحركة والمنطقة المرتبطة بالمشكلة."
          />
        </AbsoluteFill>
      )}

      {/* ================= SCENE 11 ================= */}

      {scene === 11 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="نتأكد من الحركة"
            number="11"
          />

          <Character
            file="IMG_0814.PNG"
            left={15}
            width={670}
            height={780}
          />

          <div
            style={{
              position: "absolute",
              right: 75,
              top: 215,
              width: 580,
              padding: "40px",
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
                fontSize: 50,
                fontWeight: 900,
              }}
            >
              نعم، هكذا!
            </div>

            <div
              style={{
                marginTop: 18,
                color: DARK,
                fontSize: 32,
                fontWeight: 700,
              }}
            >
              الحركة صحيحة
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* ================= SCENE 12 ================= */}

      {scene === 12 && (
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
            text="نوضح لك شنو بنشتغلوا عليه وكيف نمشوا خطوة بخطوة."
          />
        </AbsoluteFill>
      )}

      {/* ================= SCENE 13 ================= */}

      {scene === 13 && (
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
            text="نرجع للملف والنتائج حتى تكون الخطة مناسبة للحالة."
          />
        </AbsoluteFill>
      )}

      {/* ================= SCENE 14 ================= */}

      {scene === 14 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="وهنا نقطة مهمة!"
            number="14"
          />

          <Img
            src={staticFile("characters/IMG_0732.PNG")}
            style={{
              position: "absolute",
              left: 55,
              bottom: 95,
              width: 390,
              height: 390,
              objectFit: "contain",
              opacity,
              zIndex: 20,
            }}
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
      )}

      {/* ================= SCENE 15 ================= */}

      {scene === 15 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="وصلنا للصورة كاملة"
            number="15"
          />

          <Character
            file="IMG_0813.PNG"
            left={10}
            width={680}
            height={780}
          />

          <div
            style={{
              position: "absolute",
              right: 70,
              top: 210,
              width: 640,
              padding: "42px",
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
                fontSize: 50,
                fontWeight: 900,
              }}
            >
              تمام!
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
              الآن عندنا معلومات كافية
              <br />
              باش نبدأوا الخطة.
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* ================= SCENE 16 ================= */}

      {scene === 16 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Character
            file="IMG_0817.PNG"
            left={15}
            width={680}
            height={780}
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
      )}

    </AbsoluteFill>
  );
};
