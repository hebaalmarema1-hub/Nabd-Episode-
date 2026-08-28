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
      {/* المشهد الثالث - التقييم */}
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
              "linear-gradient(180deg, #E7F7FB 0%, #FFFFFF 75%)",
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
        {/* العنوان */}
        {/* ================================================= */}

        <div
          style={{
            position: "absolute",
            top: 45,
            left: 80,
            right: 80,
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
            top: 120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 150,
            height: 6,
            borderRadius: 10,
            backgroundColor: "#35B6D6",
          }}
        />


        {/* ================================================= */}
        {/* النص المتغير */}
        {/* ================================================= */}

        <div
          style={{
            position: "absolute",
            top: 155,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            minHeight: 145,
            backgroundColor: "#FFFFFF",
            borderRadius: 28,
            border: "3px solid #CDEAF1",
            boxShadow:
              "0 15px 40px rgba(20,100,130,0.12)",
            zIndex: 20,
            textAlign: "center",
            padding: "28px 35px",
            boxSizing: "border-box",
          }}
        >

          {/* الاستماع */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: listen,
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
              الأخصائي يستمع لك
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 30,
                color: "#4A6873",
              }}
            >
              أول خطوة هي فهم مشكلتك
            </div>
          </div>


          {/* السؤال */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: question,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 42,
                color: "#087EA4",
                fontWeight: "bold",
              }}
            >
              وين الألم؟
            </div>

            <div
              style={{
                marginTop: 8,
                fontSize: 30,
                color: "#4A6873",
              }}
            >
              ومن متى بدأ؟
            </div>
          </div>


          {/* القياس */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: measure,
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
              بعدها نبدأ القياس
            </div>

            <div
              style={{
                marginTop: 8,
                fontSize: 30,
                color: "#4A6873",
              }}
            >
              نقيس الحركة والقوة
            </div>
          </div>


          {/* الألم */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: pain,
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
              نحدد مكان الألم
            </div>

            <div
              style={{
                marginTop: 8,
                fontSize: 30,
                color: "#4A6873",
              }}
            >
              ونشوف الحركة المتأثرة
            </div>
          </div>


          {/* التوازن */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: balance,
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
                marginTop: 8,
                fontSize: 30,
                color: "#4A6873",
              }}
            >
              حسب حالة كل شخص
            </div>
          </div>


          {/* الملاحظات */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: notes,
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
              نسجل كل الملاحظات
            </div>

            <div
              style={{
                marginTop: 8,
                fontSize: 30,
                color: "#4A6873",
              }}
            >
              باش نحدد احتياجك
            </div>
          </div>


          {/* الخطة */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: plan,
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
              ومن هنا تبدأ الخطة
            </div>

            <div
              style={{
                marginTop: 8,
                fontSize: 30,
                color: "#4A6873",
              }}
            >
              بما يناسب حالتك
            </div>
          </div>

        </div>


        {/* ================================================= */}
        {/* الأخصائية تستمع */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0810.PNG")}
          style={{
            position: "absolute",
            left: 100,
            bottom: 20,
            width: 400,
            height: 540,
            objectFit: "contain",
            opacity: listen,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />


        {/* ================================================= */}
        {/* علامة الاستفهام */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0737.PNG")}
          style={{
            position: "absolute",
            right: 120,
            bottom: 230,
            width: 130,
            height: 130,
            objectFit: "contain",
            opacity: question,
          }}
        />


        {/* ================================================= */}
        {/* المريضة تقوم بالقياس */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0874.PNG")}
          style={{
            position: "absolute",
            left: 90,
            bottom: 15,
            width: 430,
            height: 560,
            objectFit: "contain",
            opacity: measure,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />


        {/* ================================================= */}
        {/* تشير للكتف */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0806.PNG")}
          style={{
            position: "absolute",
            left: 100,
            bottom: 15,
            width: 430,
            height: 560,
            objectFit: "contain",
            opacity: pain,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />


        {/* ================================================= */}
        {/* تتوازن - المريضة */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0876.PNG")}
          style={{
            position: "absolute",
            left: 100,
            bottom: 15,
            width: 430,
            height: 560,
            objectFit: "contain",
            opacity: balance,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />


        {/* ================================================= */}
        {/* الملف */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0873.PNG")}
          style={{
            position: "absolute",
            right: 90,
            bottom: 15,
            width: 400,
            height: 550,
            objectFit: "contain",
            opacity: notes,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />


        {/* ================================================= */}
        {/* اللوحة */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0877.PNG")}
          style={{
            position: "absolute",
            left: 80,
            bottom: 15,
            width: 360,
            height: 500,
            objectFit: "contain",
            opacity: plan,
          }}
        />


        {/* ================================================= */}
        {/* الأخصائية - تشير للمراحل */}
        {/* ================================================= */}

        <Img
          src={staticFile("characters/IMG_0808.PNG")}
          style={{
            position: "absolute",
            right: 70,
            bottom: 15,
            width: 390,
            height: 520,
            objectFit: "contain",
            opacity: plan,
            filter:
              "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />


        {/* ================================================= */}
        {/* خط الأرض */}
        {/* ================================================= */}

        <div
          style={{
            position: "absolute",
            left: 75,
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
            left: 70,
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
