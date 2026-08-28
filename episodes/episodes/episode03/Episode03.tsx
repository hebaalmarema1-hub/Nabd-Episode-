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

  // =====================================================
  // المشهد الأول
  // =====================================================

  const characterLeft = interpolate(
    frame,
    [0, 70],
    [-400, 180],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const characterOpacity = interpolate(
    frame,
    [0, 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // =====================================================
  // المشهد الثاني
  // =====================================================

  const scene2Opacity = interpolate(
    frame,
    [100, 115],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // =====================================================
  // المشهد الثالث
  // =====================================================

  const scene3Opacity = interpolate(
    frame,
    [210, 225],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // -----------------------------------------------------
  // 1 — الأخصائية تستمع
  // -----------------------------------------------------

  const listen = interpolate(
    frame,
    [225, 240, 275, 285],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // -----------------------------------------------------
  // 2 — سؤال
  // -----------------------------------------------------

  const question = interpolate(
    frame,
    [275, 290, 320, 330],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // -----------------------------------------------------
  // 3 — القياس
  // -----------------------------------------------------

  const measure = interpolate(
    frame,
    [320, 335, 365, 375],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // -----------------------------------------------------
  // 4 — تحديد مكان الألم
  // -----------------------------------------------------

  const pain = interpolate(
    frame,
    [365, 380, 410, 420],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // -----------------------------------------------------
  // 5 — التوازن
  // -----------------------------------------------------

  const balance = interpolate(
    frame,
    [410, 425, 455, 465],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // -----------------------------------------------------
  // 6 — تسجيل الملاحظات
  // -----------------------------------------------------

  const notes = interpolate(
    frame,
    [455, 470, 500, 510],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // -----------------------------------------------------
  // 7 — الخطة
  // -----------------------------------------------------

  const plan = interpolate(
    frame,
    [500, 515, 550],
    [0, 1, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F5FAFC",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* ================================================= */}
      {/* المشهد الأول - باب العيادة */}
      {/* ================================================= */}

      <AbsoluteFill
        style={{
          opacity: frame < 115 ? 1 : 0,
        }}
      >

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #EAF7FC 0%, #FFFFFF 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 70,
            height: "100%",
            backgroundColor: "#087EA4",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 210,
            backgroundColor: "#D8E4E8",
            borderTop: "6px solid #C1D2D8",
          }}
        />

        {/* لوحة العيادة */}
        <div
          style={{
            position: "absolute",
            top: 55,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#FFFFFF",
            padding: "22px 55px",
            borderRadius: 20,
            border: "4px solid #087EA4",
            color: "#087EA4",
            fontSize: 38,
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
          }}
        >
          PHYSICAL THERAPY

          <div
            style={{
              marginTop: 8,
              fontSize: 24,
              color: "#4A6873",
              fontWeight: "normal",
            }}
          >
            CLINIC
          </div>
        </div>

        {/* إطار الباب */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 620,
            height: 690,
            backgroundColor: "#B7CBD2",
            padding: 18,
            borderRadius: "28px 28px 0 0",
            boxSizing: "border-box",
            boxShadow: "0 15px 35px rgba(0,0,0,0.18)",
          }}
        >

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#087EA4",
              borderRadius: "18px 18px 0 0",
            }}
          >

            <div
              style={{
                position: "absolute",
                top: 35,
                left: 45,
                right: 45,
                height: 300,
                backgroundColor: "#DDF4FA",
                border: "8px solid #FFFFFF",
                borderRadius: 14,
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 365,
                left: 80,
                right: 80,
                padding: "18px 10px",
                backgroundColor: "#FFFFFF",
                borderRadius: 12,
                textAlign: "center",
                color: "#087EA4",
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              PHYSICAL THERAPY
            </div>

            <div
              style={{
                position: "absolute",
                right: 35,
                top: "58%",
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
              }}
            />
          </div>
        </div>

        <Img
          src={staticFile("characters/IMG_0815.PNG")}
          style={{
            position: "absolute",
            left: characterLeft,
            bottom: 60,
            width: 360,
            height: 500,
            objectFit: "contain",
            opacity: characterOpacity,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 90,
            bottom: 35,
            backgroundColor: "#FFFFFF",
            padding: "14px 25px",
            borderRadius: 15,
            color: "#087EA4",
            fontSize: 30,
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            opacity: frame >= 75 ? 1 : 0,
          }}
        >
          مرحبًا بك
        </div>

      </AbsoluteFill>


      {/* ================================================= */}
      {/* المشهد الثاني - داخل العيادة */}
      {/* ================================================= */}

      <AbsoluteFill
        style={{
          opacity: scene2Opacity,
        }}
      >

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #E7F6FB 0%, #FFFFFF 72%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 45,
            height: "100%",
            backgroundColor: "#087EA4",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 45,
            right: 0,
            height: 12,
            backgroundColor: "#087EA4",
          }}
        />

        {/* العنوان */}
        <div
          style={{
            position: "absolute",
            top: 55,
            left: 100,
            right: 100,
            textAlign: "center",
            color: "#087EA4",
            fontSize: 52,
            fontWeight: "bold",
          }}
        >
          أول زيارة للعلاج الطبيعي
        </div>

        <div
          style={{
            position: "absolute",
            top: 130,
            left: "50%",
            transform: "translateX(-50%)",
            width: 180,
            height: 6,
            backgroundColor: "#35B6D6",
            borderRadius: 10,
          }}
        />

        {/* لوحة تشريحية */}
        <div
          style={{
            position: "absolute",
            top: 215,
            left: 90,
            width: 190,
            height: 245,
            backgroundColor: "#FFFFFF",
            borderRadius: 18,
            border: "3px solid #C7E3EA",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#087EA4",
              fontSize: 22,
              fontWeight: "bold",import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
} from "remotion";
export const Episode03: React.FC = () => {
  const frame = useCurrentFrame();
  // =====================================================
  // إعدادات عامة
  // =====================================================
  const blue = "#087EA4";
  const lightBlue = "#35B6D6";
  const dark = "#244B57";
  const soft = "#EAF7FB";
  const white = "#FFFFFF";
  // =====================================================
  // الانتقالات
  // =====================================================
  const scene1Opacity = interpolate(
    frame,
    [0, 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const scene2Opacity = interpolate(
    frame,
    [105, 120],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const scene3Opacity = interpolate(
    frame,
    [210, 225],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  // =====================================================
  // المشهد 1
  // =====================================================
  const entranceCharacter = interpolate(
    frame,
    [0, 70],
    [-450, 120],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const entranceOpacity = interpolate(
    frame,
    [0, 18],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  // =====================================================
  // المشهد 3 — توقيت العناصر
  // =====================================================
  const listenOpacity = interpolate(
    frame,
    [225, 240, 275, 285],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const questionOpacity = interpolate(
    frame,
    [275, 290, 320, 330],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const measureOpacity = interpolate(
    frame,
    [320, 335, 365, 375],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const painOpacity = interpolate(
    frame,
    [365, 380, 410, 420],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const balanceOpacity = interpolate(
    frame,
    [410, 425, 455, 465],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const notesOpacity = interpolate(
    frame,
    [455, 470, 500, 510],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const planOpacity = interpolate(
    frame,
    [500, 515, 555],
    [0, 1, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  // =====================================================
  // مكوّن بطاقة النص
  // =====================================================
  const TextCard = ({
    title,
    subtitle,
    opacity,
  }: {
    title: string;
    subtitle: string;
    opacity: number;
  }) => (
    <div
      style={{
        position: "absolute",
        top: 170,
        left: 470,
        width: 650,
        minHeight: 190,
        padding: "30px 40px",
        boxSizing: "border-box",
        backgroundColor: white,
        borderRadius: 30,
        border: `3px solid ${lightBlue}`,
        boxShadow: "0 18px 45px rgba(20,100,130,0.15)",
        textAlign: "center",
        opacity,
        zIndex: 30,
      }}
    >
      <div
        style={{
          color: blue,
          fontSize: 46,
          fontWeight: 900,
          lineHeight: 1.25,
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: 120,
          height: 6,
          margin: "0 auto 15px",
          borderRadius: 10,
          backgroundColor: lightBlue,
        }}
      />
      <div
        style={{
          color: dark,
          fontSize: 32,
          fontWeight: 600,
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </div>
    </div>
  );
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F5FAFC",
        overflow: "hidden",
        fontFamily:
          "Arial, 'Tahoma', sans-serif",
      }}
    >
      {/* ================================================= */}
      {/* المشهد الأول — باب العيادة */}
      {/* ================================================= */}
      <AbsoluteFill
        style={{
          opacity: frame < 115 ? scene1Opacity : 0,
        }}
      >
        {/* خلفية */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #DFF4FA 0%, #FFFFFF 60%, #EAF7FB 100%)",
          }}
        />
        {/* ديكور جانبي */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 55,
            height: "100%",
            backgroundColor: blue,
          }}
        />
        {/* دوائر ديكورية */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 80,
            width: 180,
            height: 180,
            borderRadius: "50%",
            border: `3px solid ${lightBlue}`,
            opacity: 0.2,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 130,
            top: 130,
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: lightBlue,
            opacity: 0.12,
          }}
        />
        {/* الأرضية */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 180,
            backgroundColor: "#D7E5E9",
            borderTop: "5px solid #C0D3D9",
          }}
        />
        {/* عنوان العيادة */}
        <div
          style={{
            position: "absolute",
            top: 50,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "20px 60px",
            backgroundColor: white,
            borderRadius: 22,
            border: `4px solid ${blue}`,
            boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
            textAlign: "center",
            color: blue,
            fontSize: 40,
            fontWeight: 900,
          }}
        >
          PHYSICAL THERAPY
          <div
            style={{
              marginTop: 5,
              color: dark,
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: 3,
            }}
          >
            CLINIC
          </div>
        </div>
        {/* الباب */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 580,
            height: 670,
            padding: 16,
            boxSizing: "border-box",
            backgroundColor: "#B5C9D0",
            borderRadius: "30px 30px 0 0",
            boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: blue,
              borderRadius: "20px 20px 0 0",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 30,
                left: 40,
                right: 40,
                height: 310,
                backgroundColor: "#DDF4FA",
                border: "8px solid white",
                borderRadius: 18,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 375,
                left: 65,
                right: 65,
                padding: "20px 10px",
                backgroundColor: white,
                borderRadius: 15,
                textAlign: "center",
                color: blue,
                fontSize: 28,
                fontWeight: 900,
              }}
            >
              PHYSICAL THERAPY
            </div>
            <div
              style={{
                position: "absolute",
                right: 30,
                top: "58%",
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: white,
              }}
            />
          </div>
        </div>
        {/* الشخصية — أكبر */}
        <Img
          src={staticFile("characters/IMG_0815.PNG")}
          style={{
            position: "absolute",
            left: entranceCharacter,
            bottom: 35,
            width: 450,
            height: 610,
            objectFit: "contain",
            opacity: entranceOpacity,
            filter:
              "drop-shadow(0 18px 25px rgba(0,0,0,0.18))",
            zIndex: 10,
          }}
        />
        {/* فقاعة */}
        <div
          style={{
            position: "absolute",
            left: 90,
            bottom: 45,
            padding: "18px 32px",
            backgroundColor: white,
            borderRadius: 20,
            color: blue,
            fontSize: 34,
            fontWeight: 900,
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            opacity: frame >= 70 ? 1 : 0,
          }}
        >
          مرحبًا بك
        </div>
      </AbsoluteFill>
      {/* ================================================= */}
      {/* المشهد الثاني — داخل العيادة */}
      {/* ================================================= */}
      <AbsoluteFill
        style={{
          opacity: scene2Opacity,
        }}
      >
        {/* الخلفية */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #E4F6FB 0%, #FFFFFF 70%)",
          }}
        />
        {/* شريط جانبي */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 48,
            height: "100%",
            backgroundColor: blue,
          }}
        />
        {/* العنوان */}
        <div
          style={{
            position: "absolute",
            top: 45,
            left: 100,
            right: 100,
            textAlign: "center",
            color: blue,
            fontSize: 55,
            fontWeight: 900,
          }}
        >
          أول زيارة للعلاج الطبيعي
        </div>
        <div
          style={{
            position: "absolute",
            top: 125,
            left: "50%",
            transform: "translateX(-50%)",
            width: 190,
            height: 7,
            borderRadius: 20,
            backgroundColor: lightBlue,
          }}
        />
        {/* لوحة جسم الإنسان */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 210,
            width: 220,
            height: 285,
            backgroundColor: white,
            borderRadius: 24,
            border: "3px solid #C5E2E9",
            boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
            textAlign: "center",
            paddingTop: 25,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              color: blue,
              fontSize: 25,
              fontWeight: 900,
            }}
          >
            YOUR BODY
          </div>
          <div
            style={{
              margin: "25px auto",
              width: 80,
              height: 145,
              border: `6px solid ${lightBlue}`,
              borderRadius: "45% 45% 35% 35%",
              opacity: 0.65,
            }}
          />
          <div
            style={{
              color: "#66818A",
              fontSize: 22,
            }}
          >
            تقييم شامل
          </div>
        </div>
        {/* مكتب */}
        <div
          style={{
            position: "absolute",
            right: 70,
            bottom: 65,
            width: 250,
            height: 35,
            backgroundColor: blue,
            borderRadius: 10,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 95,
            bottom: 0,
            width: 35,
            height: 70,
            backgroundColor: "#9DB7BE",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 260,
            bottom: 0,
            width: 35,
            height: 70,
            backgroundColor: "#9DB7BE",
          }}
        />
        {/* ملفات فوق المكتب */}
        <div
          style={{
            position: "absolute",
            right: 110,
            bottom: 100,
            width: 110,
            height: 70,
            backgroundColor: white,
            border: "3px solid #CDEAF1",
            borderRadius: 8,
            transform: "rotate(-4deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 125,
            bottom: 140,
            width: 75,
            height: 8,
            backgroundColor: lightBlue,
            borderRadius: 5,
          }}
        />
        {/* الشخصية — كبيرة جدًا */}
        <Img
          src={staticFile("characters/IMG_0810.PNG")}
          style={{
            position: "absolute",
            left: 300,
            bottom: 0,
            width: 560,
            height: 700,
            objectFit: "contain",
            filter:
              "drop-shadow(0 18px 28px rgba(0,0,0,0.17))",
            zIndex: 10,
          }}
        />
        {/* بطاقة الكلام */}
        <div
          style={{
            position: "absolute",
            right: 250,
            top: 220,
            width: 500,
            padding: "35px 35px",
            backgroundColor: white,
            borderRadius: 28,
            border: `3px solid ${lightBlue}`,
            boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
            textAlign: "center",
            zIndex: 20,
          }}
        >
          <div
            style={{
              color: blue,
              fontSize: 44,
              fontWeight: 900,
            }}
          >
            أهلاً بك
          </div>
          <div
            style={{
              margin: "15px auto",
              width: 100,
              height: 6,
              backgroundColor: lightBlue,
              borderRadius: 10,
            }}
          />
          <div
            style={{
              color: dark,
              fontSize: 32,
              fontWeight: 700,
              lineHeight: 1.6,
            }}
          >
            خلينا نبدأ بأول زيارة
            <br />
            ونتعرف عليك أكثر
          </div>
        </div>
      </AbsoluteFill>
      {/* ================================================= */}
      {/* المشهد الثالث — التقييم */}
      {/* ================================================= */}
      <AbsoluteFill
        style={{
          opacity: scene3Opacity,
        }}
      >
        {/* الخلفية */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #E6F7FB 0%, #FFFFFF 65%, #EAF8FB 100%)",
          }}
        />
        {/* شريط جانبي */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 48,
            height: "100%",
            backgroundColor: blue,
          }}
        />
        {/* دوائر ديكور */}
        <div
          style={{
            position: "absolute",
            right: 55,
            top: 50,
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: `4px solid ${lightBlue}`,
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 95,
            top: 90,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: lightBlue,
            opacity: 0.15,
          }}
        />
        {/* العنوان */}
        <div
          style={{
            position: "absolute",
            top: 42,
            left: 100,
            right: 100,
            textAlign: "center",
            color: blue,
            fontSize: 58,
            fontWeight: 900,
            zIndex: 40,
          }}
        >
          نبدأ بالتقييم
        </div>
        <div
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 180,
            height: 7,
            backgroundColor: lightBlue,
            borderRadius: 20,
          }}
        />
        {/* ================================================= */}
        {/* بطاقات النص */}
        {/* ================================================= */}
        <TextCard
          title="الأخصائي يستمع لك"
          subtitle="أول خطوة هي فهم مشكلتك واحتياجك"
          opacity={listenOpacity}
        />
        <TextCard
          title="وين الألم؟"
          subtitle="ومن متى بدأ؟"
          opacity={questionOpacity}
        />
        <TextCard
          title="نبدأ القياس"
          subtitle="نقيس الحركة والقوة ونلاحظ الأداء"
          opacity={measureOpacity}
        />
        <TextCard
          title="نحدد مكان الألم"
          subtitle="ونشوف الحركة المتأثرة"
          opacity={painOpacity}
        />
        <TextCard
          title="نقيّم التوازن"
          subtitle="لأن كل حالة لها احتياجات مختلفة"
          opacity={balanceOpacity}
        />
        <TextCard
          title="نسجل الملاحظات"
          subtitle="باش نحدد المشكلة ونبني الخطة"
          opacity={notesOpacity}
        />
        <TextCard
          title="ومن هنا تبدأ الخطة"
          subtitle="خطة علاجية تناسب حالتك"
          opacity={planOpacity}
        />
        {/* ================================================= */}
        {/* الأخصائية — تستمع */}
        {/* ================================================= */}
        <Img
          src={staticFile("characters/IMG_0810.PNG")}
          style={{
            position: "absolute",
            left: 55,
            bottom: -5,
            width: 500,
            height: 650,
            objectFit: "contain",
            opacity: listenOpacity,
            filter:
              "drop-shadow(0 20px 25px rgba(0,0,0,0.18))",
          }}
        />
        {/* ================================================= */}
        {/* علامة الاستفهام */}
        {/* ================================================= */}
        <Img
          src={staticFile("characters/IMG_0737.PNG")}
          style={{
            position: "absolute",
            right: 80,
            bottom: 180,
            width: 170,
            height: 170,
            objectFit: "contain",
            opacity: questionOpacity,
          }}
        />
        {/* ================================================= */}
        {/* المريضة — القياس */}
        {/* ================================================= */}
        <Img
          src={staticFile("characters/IMG_0874.PNG")}
          style={{
            position: "absolute",
            left: 50,
            bottom: -10,
            width: 520,
            height: 660,
            objectFit: "contain",
            opacity: measureOpacity,
            filter:
              "drop-shadow(0 20px 25px rgba(0,0,0,0.18))",
          }}
        />
        {/* ================================================= */}
        {/* المريضة — تشير للكتف */}
        {/* ================================================= */}
        <Img
          src={staticFile("characters/IMG_0806 (1).PNG")}
          style={{
            position: "absolute",
            left: 50,
            bottom: -10,
            width: 520,
            height: 660,
            objectFit: "contain",
            opacity: painOpacity,
            filter:
              "drop-shadow(0 20px 25px rgba(0,0,0,0.18))",
          }}
        />
        {/* ================================================= */}
        {/* المريضة — تتوازن */}
        {/* ================================================= */}
        <Img
          src={staticFile("characters/IMG_0876.PNG")}
          style={{
            position: "absolute",
            left: 55,
            bottom: -10,
            width: 520,
            height: 660,
            objectFit: "contain",
            opacity: balanceOpacity,
            filter:
              "drop-shadow(0 20px 25px rgba(0,0,0,0.18))",
          }}
        />
        {/* ================================================= */}
        {/* المريضة — الملف */}
        {/* ================================================= */}
        <Img
          src={staticFile("characters/IMG_0873.PNG")}
          style={{
            position: "absolute",
            right: 55,
            bottom: -10,
            width: 500,
            height: 650,
            objectFit: "contain",
            opacity: notesOpacity,
            filter:
              "drop-shadow(0 20px 25px rgba(0,0,0,0.18))",
          }}
        />
        {/* ================================================= */}
        {/* اللوحة */}
        {/* ================================================= */}
        <Img
          src={staticFile("characters/IMG_0877.PNG")}
          style={{
            position: "absolute",
            left: 50,
            bottom: -10,
            width: 470,
            height: 620,
            objectFit: "contain",
            opacity: planOpacity,
            filter:
              "drop-shadow(0 20px 25px rgba(0,0,0,0.18))",
          }}
        />
        {/* ================================================= */}
        {/* الأخصائية — تشير للمراحل */}
        {/* ================================================= */}
        <Img
          src={staticFile("characters/IMG_0808.PNG")}
          style={{
            position: "absolute",
            right: 45,
            bottom: -10,
            width: 480,
            height: 640,
            objectFit: "contain",
            opacity: planOpacity,
            filter:
              "drop-shadow(0 20px 25px rgba(0,0,0,0.18))",
          }}
        />
        {/* ================================================= */}
        {/* خط الأرض */}
        {/* ================================================= */}
        <div
          style={{
            position: "absolute",
            left: 70,
            right: 70,
            bottom: 22,
            height: 5,
            backgroundColor: "#C6E2E8",
            borderRadius: 20,
          }}
        />
        {/* رقم المشهد */}
        <div
          style={{
            position: "absolute",
            left: 70,
            bottom: 45,
            color: blue,
            fontSize: 30,
            fontWeight: 900,
          }}
        >
          03
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
