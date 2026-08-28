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
  const WHITE = "#FFFFFF";
  const LIGHT = "#E5F5F9";
  const FLOOR = "#DCE9ED";

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
  // CARD
  // =========================

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

  // =========================
  // CHARACTER
  // =========================

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

  return (
    <AbsoluteFill
      style={{
        backgroundColor: WHITE,
        overflow: "hidden",
        fontFamily: "Arial, Tahoma, sans-serif",
      }}
    >

      {/* =====================================================
          SCENE 00
      ===================================================== */}

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

      {/* =====================================================
          SCENE 01
      ===================================================== */}

      {scene === 1 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="نبدأ بالاستماع"
            number="01"
          />

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

      {/* =====================================================
          SCENE 02
      ===================================================== */}

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

      {/* =====================================================
          SCENE 03
      ===================================================== */}

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
{/* =====================================================
          SCENE 04
      ===================================================== */}

      {scene === 4 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header
            title="بعدها نبدأ القياس"
            number="04"
          />

          {/* شخصية التقييم */}
          <div
            style={{
              position: "absolute",
              left: 90,
              bottom: 90,
              width: 480,
              height: 620,
              zIndex: 20,
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

            {/* مؤشر ROM */}
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

          {/* التسمية السفلية */}
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
    </AbsoluteFill>
  );
};
