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
  // انتقال المشهد الثاني
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
  // انتقال المشهد الثالث
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

  // =====================================================
  // المشهد الثالث - ظهور الصور بالتتابع
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

  const shoulderOpacity = interpolate(
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
    [455, 470, 520],
    [0, 1, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // =====================================================
  // حركة بسيطة للصور
  // =====================================================

  const imageScale = interpolate(
    frame,
    [225, 250],
    [0.92, 1],
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
      {/* المشهد الأول - أمام باب العيادة */}
      {/* ================================================= */}

      <AbsoluteFill
        style={{
          opacity: frame < 115 ? 1 : 0,
        }}
      >

        {/* الخلفية */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #EAF7FC 0%, #FFFFFF 70%)",
          }}
        />

        {/* الشريط الجانبي */}
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

        {/* الأرضية */}
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

          {/* الباب */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: "#087EA4",
              borderRadius: "18px 18px 0 0",
            }}
          >

            {/* زجاج الباب */}
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

            {/* لوحة الباب */}
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

            {/* المقبض */}
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

        {/* الشخصية */}
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

        {/* الترحيب */}
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
          backgroundColor: "#F5FAFC",
        }}
      >

        {/* الخلفية */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #E7F6FB 0%, #FFFFFF 72%)",
          }}
        />

        {/* الشريط الجانبي */}
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

        {/* الخط العلوي */}
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

        {/* عنوان */}
        <div
          style={{
            position: "absolute",
            top: 55,
            left: 120,
            right: 120,
            textAlign: "center",
            color: "#087EA4",
            fontSize: 52,
            fontWeight: "bold",
          }}
        >
          أول زيارة للعلاج الطبيعي
        </div>

        {/* الخط */}
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
              fontWeight: "bold",
              marginBottom: 18,
            }}
          >
            HUMAN BODY
          </div>

          <div
            style={{
              width: 75,
              height: 125,
              border: "5px solid #35B6D6",
              borderRadius: "40% 40% 30% 30%",
            }}
          />
        </div>

        {/* رف */}
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 245,
            width: 230,
            height: 18,
            backgroundColor: "#087EA4",
            borderRadius: 10,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 90,
            top: 263,
            width: 190,
            height: 115,
            backgroundColor: "#FFFFFF",
          }}
        />

        {/* الكتب */}
        <div
          style={{
            position: "absolute",
            right: 115,
            top: 285,
            width: 24,
            height: 75,
            backgroundColor: "#087EA4",
            borderRadius: 4,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 145,
            top: 295,
            width: 24,
            height: 65,
            backgroundColor: "#35B6D6",
            borderRadius: 4,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 175,
            top: 280,
            width: 24,
            height: 80,
            backgroundColor: "#B7CBD2",
            borderRadius: 4,
          }}
        />

        {/* نبتة */}
        <div
          style={{
            position: "absolute",
            right: 70,
            bottom: 60,
            width: 120,
            height: 95,
            backgroundColor: "#D6E6EA",
            borderRadius: "10px 10px 25px 25px",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 88,
            bottom: 130,
            width: 80,
            height: 90,
            borderRadius: "50%",
            backgroundColor: "#8FC9A8",
            transform: "rotate(-20deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 125,
            bottom: 150,
            width: 70,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#A8D8B8",
            transform: "rotate(25deg)",
          }}
        />

        {/* بطاقة الكلام */}
        <div
          style={{
            position: "absolute",
            top: 230,
            right: 320,
            width: 520,
            padding: "38px 42px",
            backgroundColor: "#FFFFFF",
            borderRadius: 30,
            border: "3px solid #CDEAF1",
            boxShadow: "0 15px 35px rgba(0,0,0,0.10)",
            color: "#31515C",
            fontSize: 38,
            fontWeight: "bold",
            lineHeight: 1.7,
            textAlign: "center",
          }}
        >
          أهلاً بك

          <div
            style={{
              width: 110,
              height: 5,
              backgroundColor: "#35B6D6",
              margin: "14px auto 20px",
              borderRadius: 10,
            }}
          />

          <div
            style={{
              color: "#087EA4",
              fontSize: 35,
            }}
          >
            خلينا نبدأ بأول زيارة
          </div>

          <div
            style={{
              marginTop: 12,
              fontSize: 31,
              color: "#4A6873",
              fontWeight: "normal",
            }}
          >
            ونتعرف عليك أكثر
          </div>

          <div
            style={{
              marginTop: 5,
              fontSize: 31,
              color: "#4A6873",
              fontWeight: "normal",
            }}
          >
            ونساعدك على التعافي
          </div>
        </div>

        {/* الشخصية */}
        <Img
          src={staticFile("characters/IMG_0810.PNG")}
          style={{
            position: "absolute",
            bottom: 20,
            left: 270,
            width: 500,
            height: 650,
            objectFit: "contain",
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />

        {/* رقم المشهد */}
        <div
          style={{
            position: "absolute",
            left: 75,
            bottom: 50,
            color: "#087EA4",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          02
        </div>

      </AbsoluteFill>


      {/* ================================================= */}
      {/* المشهد الثالث - التقييم الأولي */}
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
              "linear-gradient(180deg, #E6F6FB 0%, #FFFFFF 75%)",
          }}
        />

        {/* الشريط الجانبي */}
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

        {/* الخط العلوي */}
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

        {/* ================================================= */}
        {/* عنوان المشهد */}
        {/* ================================================= */}

        <div
          style={{
            position: "absolute",
            top: 48,
            left: 100,
            right: 100,
            textAlign: "center",
            color: "#087EA4",
            fontSize: 54,
            fontWeight: "bold",
          }}
        >
          نبدأ بالتقييم
        </div>

        <div
          style={{
            position: "absolute",
            top: 125,
            left: "50%",
            transform: "translateX(-50%)",
            width: 150,
            height: 6,
            borderRadius: 10,
            backgroundColor: "#35B6D6",
          }}
        />

        {/* ================================================= */}
        {/* بطاقة الكلام الرئيسية */}
        {/* ================================================= */}

        <div
          style={{
            position: "absolute",
            top: 165,
            left: "50%",
            transform: "translateX(-50%)",
            width: 650,
            minHeight: 150,
            padding: "28px 40px",
            boxSizing: "border-box",
            backgroundColor: "#FFFFFF",
            borderRadius: 28,
            border: "3px solid #CDEAF1",
            boxShadow:
              "0 15px 40px rgba(20,100,130,0.12)",
            textAlign: "center",
            zIndex: 20,
          }}
        >

          {/* تستمع */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: listenOpacity,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 38,
                color: "#087EA4",
                fontWeight: "bold",
              }}
            >
              الأخصائي يستمع لك
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 28,
                color: "#4A6873",
              }}
            >
              ويحاول يفهم مشكلتك
            </div>
          </div>

          {/* سؤال */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: questionOpacity,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 40,
                color: "#087EA4",
                fontWeight: "bold",
              }}
            >
              وين الألم؟
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 29,
                color: "#4A6873",
              }}
            >
              وشنو اللي يزيده أو يخففه؟
            </div>
          </div>

          {/* قياس */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: measureOpacity,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 40,
                color: "#087EA4",
                fontWeight: "bold",
              }}
            >
              بعدها يبدأ الفحص
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 29,
                color: "#4A6873",
              }}
            >
              نقيس الحركة والقوة
            </div>
          </div>

          {/* الكتف */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: shoulderOpacity,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 40,
                color: "#087EA4",
                fontWeight: "bold",
              }}
            >
              نحدد مكان المشكلة
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 29,
                color: "#4A6873",
              }}
            >
              ونشوف مدى الحركة
            </div>
          </div>

          {/* التوازن */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: balanceOpacity,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 40,
                color: "#087EA4",
                fontWeight: "bold",
              }}
            >
              ونقيّم التوازن
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 29,
                color: "#4A6873",
              }}
            >
              حسب حالتك واحتياجك
            </div>
          </div>

          {/* تسجيل */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: notesOpacity,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 40,
                color: "#087EA4",
                fontWeight: "bold",
              }}
            >
              وكل الملاحظات تتسجل
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 29,
                color: "#4A6873",
              }}
            >
              باش نحدد الخطة المناسبة لك
            </div>
          </div>

        </div>


        {/* ================================================= */}
        {/* صورة الأخصائي - يستمع */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0810.PNG")}
          style={{
            position: "absolute",
            left: 130,
            bottom: 40,
            width: 390,
            height: 520,
            objectFit: "contain",
            opacity: listenOpacity,
            transform: `scale(${imageScale})`,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />

        {/* ================================================= */}
        {/* علامة استفهام */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0737.PNG")}
          style={{
            position: "absolute",
            right: 110,
            bottom: 250,
            width: 130,
            height: 130,
            objectFit: "contain",
            opacity: questionOpacity,
          }}
        />

        {/* ================================================= */}
        {/* صورة القياس */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0874.PNG")}
          style={{
            position: "absolute",
            left: 110,
            bottom: 30,
            width: 430,
            height: 540,
            objectFit: "contain",
            opacity: measureOpacity,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />

        {/* علامة تعجب صغيرة */}
        <Img
          src={staticFile("characters/IMG_0732.PNG")}
          style={{
            position: "absolute",
            right: 100,
            bottom: 250,
            width: 110,
            height: 110,
            objectFit: "contain",
            opacity: measureOpacity,
          }}
        />

        {/* ================================================= */}
        {/* صورة تشير للكتف */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0875.PNG")}
          style={{
            position: "absolute",
            left: 120,
            bottom: 20,
            width: 440,
            height: 560,
            objectFit: "contain",
            opacity: shoulderOpacity,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />

        {/* ================================================= */}
        {/* صورة التوازن */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0876.PNG")}
          style={{
            position: "absolute",
            left: 120,
            bottom: 20,
            width: 440,
            height: 560,
            objectFit: "contain",
            opacity: balanceOpacity,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />

        {/* ================================================= */}
        {/* صورة الملف */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0873.PNG")}
          style={{
            position: "absolute",
            right: 100,
            bottom: 10,
            width: 410,
            height: 550,
            objectFit: "contain",
            opacity: notesOpacity,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />

        {/* ================================================= */}
        {/* صورة اللوحة - تظهر في نهاية التقييم */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0877.PNG")}
          style={{
            position: "absolute",
            left: 90,
            bottom: 20,
            width: 350,
            height: 500,
            objectFit: "contain",
            opacity: notesOpacity,
          }}
        />

        {/* ================================================= */}
        {/* خط الأرض */}
        {/* ================================================= */}

        <div
          style={{
            position: "absolute",
            left: 80,
            right: 70,
            bottom: 25,
            height: 4,
            backgroundColor: "#C7E3EA",
            borderRadius: 10,
          }}
        />

        {/* رقم المشهد */}
        <div
          style={{
            position: "absolute",
            left: 75,
            bottom: 45,
            color: "#087EA4",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          03
        </div>

      </AbsoluteFill>

    </AbsoluteFill>
  );
};
