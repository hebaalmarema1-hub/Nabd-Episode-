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

  // =========================
  // حركة الشخصية - المشهد الأول
  // =========================

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

  // =========================
  // انتقال المشهد الثاني
  // =========================

  const scene2Opacity = interpolate(
    frame,
    [100, 115],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // =========================
  // انتقال المشهد الثالث
  // =========================

  const scene3Opacity = interpolate(
    frame,
    [210, 225],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // حركة دخول شخصية المشهد الثالث
  const patientLeft = interpolate(
    frame,
    [210, 245],
    [-300, 90],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const therapistRight = interpolate(
    frame,
    [220, 255],
    [-300, 70],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // ظهور بطاقة الأسئلة
  const questionOpacity = interpolate(
    frame,
    [245, 265],
    [0, 1],
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

      {/* ===================================== */}
      {/* المشهد الأول - أمام باب العيادة */}
      {/* ===================================== */}

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

        {/* شريط جانبي */}
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

        {/* الشخصية تدخل */}
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
            fontSize: 26,
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            opacity: frame >= 75 ? 1 : 0,
          }}
        >
          مرحبًا بك
        </div>
      </AbsoluteFill>


      {/* ===================================== */}
      {/* المشهد الثاني - داخل العيادة */}
      {/* ===================================== */}

      <AbsoluteFill
        style={{
          opacity: scene2Opacity,
          backgroundColor: "#F5FAFC",
        }}
      >

        {/* الخلفية الرئيسية */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #E7F6FB 0%, #FFFFFF 72%)",
          }}
        />

        {/* ديكور جانبي */}
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

        {/* خط ديكوري علوي */}
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

        {/* دوائر ديكورية */}
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 90,
            width: 22,
            height: 22,
            borderRadius: "50%",
            backgroundColor: "#087EA4",
            opacity: 0.25,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 140,
            right: 135,
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#35B6D6",
            opacity: 0.5,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 180,
            right: 95,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#087EA4",
            opacity: 0.4,
          }}
        />

        {/* عنوان المشهد */}
        <div
          style={{
            position: "absolute",
            top: 55,
            left: 120,
            right: 120,
            textAlign: "center",
            color: "#087EA4",
            fontSize: 48,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          أول زيارة للعلاج الطبيعي
        </div>

        {/* خط تحت العنوان */}
        <div
          style={{
            position: "absolute",
            top: 125,
            left: "50%",
            transform: "translateX(-50%)",
            width: 170,
            height: 5,
            backgroundColor: "#35B6D6",
            borderRadius: 10,
          }}
        />

        {/* نبضة صغيرة */}
        <div
          style={{
            position: "absolute",
            top: 150,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#087EA4",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          ── ♥ ──
        </div>

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
              opacity: 0.7,
            }}
          />

          <div
            style={{
              marginTop: 12,
              width: 100,
              height: 5,
              backgroundColor: "#DDF4FA",
              borderRadius: 10,
            }}
          />
        </div>

        {/* رف صغير */}
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
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
          }}
        />

        {/* كتب وملفات */}
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
            fontSize: 35,
            fontWeight: "bold",
            lineHeight: 1.7,
            textAlign: "center",
          }}
        >
          أهلاً بك

          <div
            style={{
              width: 100,
              height: 4,
              backgroundColor: "#35B6D6",
              margin: "12px auto 18px",
              borderRadius: 10,
            }}
          />

          <div
            style={{
              color: "#087EA4",
              fontSize: 32,
            }}
          >
            خلينا نبدأ بأول زيارة
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 28,
              color: "#4A6873",
              fontWeight: "normal",
            }}
          >
            ونتعرف عليك أكثر
          </div>

          <div
            style={{
              marginTop: 5,
              fontSize: 28,
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
            filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />

        {/* خط أرضي */}
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 70,
            bottom: 30,
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
            bottom: 50,
            color: "#087EA4",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          02
        </div>
      </AbsoluteFill>


      {/* ===================================== */}
      {/* المشهد الثالث - بداية التقييم */}
      {/* ===================================== */}

      <AbsoluteFill
        style={{
          opacity: scene3Opacity,
          backgroundColor: "#F5FAFC",
        }}
      >

        {/* الخلفية */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #E8F7FB 0%, #FFFFFF 75%)",
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

        {/* خط علوي */}
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

        {/* دوائر ديكورية */}
        <div
          style={{
            position: "absolute",
            top: 95,
            right: 90,
            width: 24,
            height: 24,
            borderRadius: "50%",
            backgroundColor: "#087EA4",
            opacity: 0.18,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 135,
            right: 125,
            width: 13,
            height: 13,
            borderRadius: "50%",
            backgroundColor: "#35B6D6",
            opacity: 0.45,
          }}
        />

        {/* عنوان المشهد */}
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 100,
            right: 100,
            textAlign: "center",
            color: "#087EA4",
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          بداية التقييم
        </div>

        <div
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 5,
            borderRadius: 10,
            backgroundColor: "#35B6D6",
          }}
        />

        {/* مكتب التقييم */}
        <div
          style={{
            position: "absolute",
            left: 120,
            bottom: 100,
            width: 310,
            height: 25,
            backgroundColor: "#087EA4",
            borderRadius: 12,
            boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
          }}
        />

        {/* أرجل المكتب */}
        <div
          style={{
            position: "absolute",
            left: 145,
            bottom: 0,
            width: 20,
            height: 105,
            backgroundColor: "#B7CBD2",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 385,
            bottom: 0,
            width: 20,
            height: 105,
            backgroundColor: "#B7CBD2",
          }}
        />

        {/* ملف التقييم */}
        <div
          style={{
            position: "absolute",
            left: 190,
            bottom: 130,
            width: 150,
            height: 105,
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            border: "3px solid #C7E3EA",
            transform: "rotate(-4deg)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
          }}
        >
          <div
            style={{
              margin: "18px auto 12px",
              width: 75,
              height: 8,
              borderRadius: 5,
              backgroundColor: "#35B6D6",
            }}
          />

          <div
            style={{
              width: 95,
              height: 6,
              margin: "10px auto",
              borderRadius: 5,
              backgroundColor: "#D8EEF5",
            }}
          />

          <div
            style={{
              width: 80,
              height: 6,
              margin: "10px auto",
              borderRadius: 5,
              backgroundColor: "#D8EEF5",
            }}
          />

          <div
            style={{
              width: 90,
              height: 6,
              margin: "10px auto",
              borderRadius: 5,
              backgroundColor: "#D8EEF5",
            }}
          />
        </div>

        {/* بطاقة الأسئلة */}
        <div
          style={{
            position: "absolute",
            top: 175,
            left: "50%",
            transform: "translateX(-50%)",
            width: 620,
            padding: "30px 35px",
            backgroundColor: "#FFFFFF",
            borderRadius: 28,
            border: "3px solid #CDEAF1",
            boxShadow: "0 15px 35px rgba(0,0,0,0.10)",
            textAlign: "center",
            opacity: questionOpacity,
          }}
        >

          <div
            style={{
              fontSize: 34,
              color: "#087EA4",
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            خلينا نعرف أكثر عن حالتك
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >

            <div
              style={{
                backgroundColor: "#EAF8FC",
                borderRadius: 15,
                padding: "12px 22px",
                color: "#14647B",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              وين الألم؟
            </div>

            <div
              style={{
                backgroundColor: "#EAF8FC",
                borderRadius: 15,
                padding: "12px 22px",
                color: "#14647B",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              من متى؟
            </div>

            <div
              style={{
                backgroundColor: "#EAF8FC",
                borderRadius: 15,
                padding: "12px 22px",
                color: "#14647B",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              شنو يزيد الألم؟
            </div>

            <div
              style={{
                backgroundColor: "#EAF8FC",
                borderRadius: 15,
                padding: "12px 22px",
                color: "#14647B",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              شنو يخففه؟
            </div>

          </div>
        </div>

        {/* شخصية المريض */}
        <Img
          src={staticFile("characters/IMG_0815.PNG")}
          style={{
            position: "absolute",
            left: patientLeft,
            bottom: 35,
            width: 350,
            height: 480,
            objectFit: "contain",
            filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />

        {/* شخصية الأخصائي */}
        <Img
          src={staticFile("characters/IMG_0810.PNG")}
          style={{
            position: "absolute",
            right: therapistRight,
            bottom: 20,
            width: 390,
            height: 520,
            objectFit: "contain",
            filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.15))",
          }}
        />

        {/* خط الأرض */}
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
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          03
        </div>

      </AbsoluteFill>

    </AbsoluteFill>
  );
};
