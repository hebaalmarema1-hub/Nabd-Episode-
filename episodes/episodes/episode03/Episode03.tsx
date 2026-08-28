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

  // =========================================================
  // الألوان
  // =========================================================

  const BLUE = "#087EA4";
  const CYAN = "#35B6D6";
  const DARK = "#244B57";
  const BG = "#F4FBFD";
  const LIGHT = "#E5F5F9";
  const WHITE = "#FFFFFF";

  // كل مشهد 75 فريم
  const SCENE = 75;
  const scene = Math.floor(frame / SCENE);
  const local = frame % SCENE;

  // دخول وخروج ناعم
  const fadeIn = interpolate(local, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(local, [65, 74], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = Math.min(fadeIn, fadeOut);

  // حركة دخول بسيطة
  const characterY = interpolate(local, [0, 18], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================
  // الخلفية
  // =========================================================

  const Background = () => (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #E4F6FA 0%, #FFFFFF 55%, #EEF9FB 100%)",
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
          top: 45,
          width: 170,
          height: 170,
          borderRadius: "50%",
          border: `5px solid ${CYAN}`,
          opacity: 0.14,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 110,
          top: 90,
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: CYAN,
          opacity: 0.10,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 48,
          right: 0,
          bottom: 0,
          height: 90,
          backgroundColor: "#DCE9ED",
          borderTop: "4px solid #C6D9DE",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 75,
          right: 65,
          bottom: 85,
          height: 4,
          borderRadius: 10,
          backgroundColor: "#C5E0E6",
        }}
      />
    </>
  );

  // =========================================================
  // العنوان
  // =========================================================

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
          top: 35,
          left: 80,
          right: 80,
          textAlign: "center",
          color: BLUE,
          fontSize: 52,
          fontWeight: 900,
          lineHeight: 1.2,
          zIndex: 20,
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
          width: 170,
          height: 6,
          backgroundColor: CYAN,
          borderRadius: 20,
          zIndex: 20,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 70,
          bottom: 42,
          color: BLUE,
          fontSize: 27,
          fontWeight: 900,
          zIndex: 30,
        }}
      >
        {number}
      </div>
    </>
  );

  // =========================================================
  // بطاقة الكلام
  // =========================================================

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
        right: 90,
        top: 195,
        width: 610,
        padding: "34px 42px",
        boxSizing: "border-box",
        backgroundColor: WHITE,
        border: `3px solid ${CYAN}`,
        borderRadius: 30,
        boxShadow: "0 18px 40px rgba(0,80,100,0.13)",
        textAlign: "center",
        zIndex: 15,
      }}
    >
      <div
        style={{
          color: BLUE,
          fontSize: 43,
          fontWeight: 900,
          lineHeight: 1.25,
          marginBottom: 15,
        }}
      >
        {title}
      </div>

      <div
        style={{
          width: 100,
          height: 5,
          margin: "0 auto 20px",
          backgroundColor: CYAN,
          borderRadius: 10,
        }}
      />

      <div
        style={{
          color: DARK,
          fontSize: 31,
          fontWeight: 700,
          lineHeight: 1.6,
        }}
      >
        {text}
      </div>
    </div>
  );

  // =========================================================
  // الشخصية
  // =========================================================

  const Character = ({
    file,
    left = 40,
    width = 620,
    height = 730,
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
        bottom: 55,
        width,
        height,
        objectFit: "contain",
        opacity,
        transform: `translateY(${characterY}px)`,
        filter: "drop-shadow(0 18px 25px rgba(0,0,0,0.17))",
        zIndex: 10,
      }}
    />
  );

  // =========================================================
  // العلامة / الأيقونة
  // =========================================================

  const Icon = ({
    file,
    right = 90,
    bottom = 110,
    size = 210,
  }: {
    file: string;
    right?: number;
    bottom?: number;
    size?: number;
  }) => (
    <Img
      src={staticFile(`characters/${file}`)}
      style={{
        position: "absolute",
        right,
        bottom,
        width: size,
        height: size,
        objectFit: "contain",
        opacity,
        filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.12))",
        zIndex: 18,
      }}
    />
  );

  // =========================================================
  // العرض
  // =========================================================

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        overflow: "hidden",
        fontFamily: "Arial, Tahoma, sans-serif",
      }}
    >

      {/* =====================================================
          SCENE 0 — مرحباً
         ===================================================== */}

      {scene === 0 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <div
            style={{
              position: "absolute",
              top: 70,
              left: "50%",
              transform: "translateX(-50%)",
              padding: "22px 65px",
              backgroundColor: WHITE,
              borderRadius: 25,
              border: `4px solid ${BLUE}`,
              color: BLUE,
              fontSize: 43,
              fontWeight: 900,
              textAlign: "center",
              boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
              zIndex: 20,
            }}
          >
            PHYSICAL THERAPY

            <div
              style={{
                marginTop: 5,
                color: DARK,
                fontSize: 24,
                letterSpacing: 3,
              }}
            >
              CLINIC
            </div>
          </div>

          <Character
            file="IMG_0815.PNG"
            left={80}
            width={650}
            height={760}
          />

          <div
            style={{
              position: "absolute",
              right: 120,
              top: 300,
              padding: "28px 60px",
              backgroundColor: WHITE,
              borderRadius: 30,
              border: `3px solid ${CYAN}`,
              color: BLUE,
              fontSize: 50,
              fontWeight: 900,
              boxShadow: "0 15px 35px rgba(0,0,0,0.10)",
              zIndex: 20,
            }}
          >
            مرحبًا بك
          </div>
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 1 — الاستماع
         ===================================================== */}

      {scene === 1 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نبدأ بالاستماع" number="01" />

          <Character
            file="IMG_0810.PNG"
            left={45}
            width={650}
            height={750}
          />

          <Card
            title="خلينا نسمع منك"
            text="شن المشكلة؟ ومتى بدأت؟ وشن أكثر شيء يضايقك؟"
          />

          <div
            style={{
              position: "absolute",
              right: 745,
              top: 315,
              color: CYAN,
              fontSize: 90,
              fontWeight: 900,
            }}
          >
            …
          </div>
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 2 — المريضة مع الملف
         ===================================================== */}

      {scene === 2 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="المريضة تشرح حالتها" number="02" />

          <Character
            file="IMG_0873.PNG"
            left={55}
            width={650}
            height={750}
          />

          <Card
            title="نوضح الحالة"
            text="المريضة تعطي المعلومات الأساسية وتشرح المشكلة."
          />

          <div
            style={{
              position: "absolute",
              right: 105,
              bottom: 120,
              padding: "15px 28px",
              backgroundColor: LIGHT,
              borderRadius: 18,
              color: BLUE,
              fontSize: 29,
              fontWeight: 900,
            }}
          >
            المعلومات الأولية
          </div>
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 3 — الأسئلة
         ===================================================== */}

      {scene === 3 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نسأل الأسئلة المهمة" number="03" />

          <Character
            file="IMG_0810.PNG"
            left={45}
            width={630}
            height={740}
          />

          <Icon
            file="IMG_0737.PNG"
            right={105}
            bottom={105}
            size={230}
          />

          <Card
            title="وين الألم؟"
            text="نسأل عن مكان الألم، شدته، ومتى يظهر."
          />
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 4 — القياس
         ===================================================== */}

      {scene === 4 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="بعدها نبدأ القياس" number="04" />

          <Character
            file="IMG_0874.PNG"
            left={35}
            width={670}
            height={760}
          />

          <Card
            title="التقييم الجسدي"
            text="نقيس الحركة والقوة ونلاحظ طريقة أداء الحركة."
          />

          <div
            style={{
              position: "absolute",
              right: 105,
              bottom: 115,
              padding: "15px 30px",
              backgroundColor: WHITE,
              border: `3px solid ${CYAN}`,
              borderRadius: 18,
              color: BLUE,
              fontSize: 29,
              fontWeight: 900,
            }}
          >
            ROM • القوة • الحركة
          </div>
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 5 — ألم الكتف
         ===================================================== */}

      {scene === 5 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نحدد مكان الألم" number="05" />

          <Character
            file="IMG_0806.PNG"
            left={30}
            width={670}
            height={760}
          />

          <Card
            title="مثلاً: ألم الكتف"
            text="نشوف وين الألم بالضبط وشن الحركات اللي تزيده."
          />

          <div
            style={{
              position: "absolute",
              right: 120,
              bottom: 120,
              padding: "15px 32px",
              backgroundColor: LIGHT,
              color: BLUE,
              borderRadius: 18,
              fontSize: 29,
              fontWeight: 900,
            }}
          >
            تحديد المشكلة
          </div>
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 6 — التمارين
         ===================================================== */}

      {scene === 6 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نشوف الحركة" number="06" />

          <Character
            file="IMG_0807.PNG"
            left={20}
            width={680}
            height={770}
          />

          <Card
            title="اختبار الحركة"
            text="قد نطلب منك تعمل حركة أو تمرين بسيط حتى نقيّم الأداء."
          />
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 7 — التوازن
         ===================================================== */}

      {scene === 7 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نقيّم التوازن" number="07" />

          <Character
            file="IMG_0876.PNG"
            left={25}
            width={670}
            height={760}
          />

          <Card
            title="التوازن مهم"
            text="لأنه يساعدنا نعرف مستوى التحكم والثبات أثناء الحركة."
          />

          <div
            style={{
              position: "absolute",
              right: 120,
              bottom: 125,
              width: 190,
              height: 14,
              backgroundColor: CYAN,
              borderRadius: 20,
            }}
          />
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 8 — التفكير
         ===================================================== */}

      {scene === 8 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نحلل المعلومات" number="08" />

          <Character
            file="IMG_0816.PNG"
            left={55}
            width={640}
            height={750}
          />

          <Card
            title="الأخصائي يحلل"
            text="نجمع كل المعلومات باش نفهم سبب المشكلة بشكل أفضل."
          />
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 9 — مراحل التقييم
         ===================================================== */}

      {scene === 9 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نرتب مراحل التقييم" number="09" />

          <Character
            file="IMG_0808.PNG"
            left={45}
            width={650}
            height={750}
          />

          <Card
            title="كل خطوة لها هدف"
            text="نرتب النتائج ونحدد الأولويات قبل وضع الخطة العلاجية."
          />

          <div
            style={{
              position: "absolute",
              right: 110,
              bottom: 120,
              display: "flex",
              gap: 15,
            }}
          >
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: n === 1 ? BLUE : LIGHT,
                  color: n === 1 ? WHITE : BLUE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 900,
                }}
              >
                {n}
              </div>
            ))}
          </div>
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 10 — الرقبة
         ===================================================== */}

      {scene === 10 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نركز على التفاصيل" number="10" />

          <Character
            file="IMG_0812.PNG"
            left={30}
            width={670}
            height={760}
          />

          <Card
            title="مثلاً: الرقبة"
            text="نلاحظ الألم والحركة والمنطقة المرتبطة بالمشكلة."
          />
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 11 — نعم هكذا
         ===================================================== */}

      {scene === 11 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نتأكد من الحركة" number="11" />

          <Character
            file="IMG_0814.PNG"
            left={35}
            width={650}
            height={750}
          />

          <div
            style={{
              position: "absolute",
              right: 110,
              top: 245,
              width: 520,
              padding: "35px",
              backgroundColor: WHITE,
              borderRadius: 30,
              border: `3px solid ${CYAN}`,
              boxShadow: "0 15px 35px rgba(0,0,0,0.10)",
              textAlign: "center",
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
                marginTop: 15,
                color: DARK,
                fontSize: 31,
                fontWeight: 700,
              }}
            >
              الحركة صحيحة
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 12 — اللوحة والخطة
         ===================================================== */}

      {scene === 12 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نشرح لك الخطة" number="12" />

          <Character
            file="IMG_0877.PNG"
            left={20}
            width={680}
            height={770}
          />

          <Card
            title="وهنا تبدأ الخطة"
            text="نوضح لك شنو بنشتغلوا عليه وكيف نمشوا خطوة بخطوة."
          />
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 13 — قراءة الملف
         ===================================================== */}

      {scene === 13 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="نراجع التفاصيل" number="13" />

          <Character
            file="IMG_0811.PNG"
            left={35}
            width={660}
            height={760}
          />

          <Card
            title="مراجعة المعلومات"
            text="نرجع للملف والنتائج حتى تكون الخطة مناسبة للحالة."
          />
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 14 — علامة التعجب
         ===================================================== */}

      {scene === 14 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="وهنا نقطة مهمة!" number="14" />

          <Icon
            file="IMG_0732.PNG"
            right={105}
            bottom={105}
            size={280}
          />

          <div
            style={{
              position: "absolute",
              left: 160,
              top: 230,
              width: 620,
              padding: "42px",
              backgroundColor: WHITE,
              borderRadius: 30,
              border: `3px solid ${CYAN}`,
              boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: 47,
                fontWeight: 900,
                marginBottom: 20,
              }}
            >
              كل حالة مختلفة
            </div>

            <div
              style={{
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

      {/* =====================================================
          SCENE 15 — النجاح
         ===================================================== */}

      {scene === 15 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Header title="وصلنا للصورة كاملة" number="15" />

          <Character
            file="IMG_0813.PNG"
            left={35}
            width={660}
            height={760}
          />

          <div
            style={{
              position: "absolute",
              right: 110,
              top: 230,
              width: 600,
              padding: "40px",
              backgroundColor: WHITE,
              borderRadius: 30,
              border: `3px solid ${CYAN}`,
              boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: 48,
                fontWeight: 900,
              }}
            >
              تمام!
            </div>

            <div
              style={{
                marginTop: 18,
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

      {/* =====================================================
          SCENE 16 — النهاية
         ===================================================== */}

      {scene === 16 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />

          <Character
            file="IMG_0817.PNG"
            left={40}
            width={650}
            height={760}
          />

          <div
            style={{
              position: "absolute",
              right: 90,
              top: 190,
              width: 650,
              padding: "42px",
              boxSizing: "border-box",
              backgroundColor: WHITE,
              borderRadius: 32,
              border: `4px solid ${BLUE}`,
              boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
              textAlign: "center",
              zIndex: 20,
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: 52,
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
                lineHeight: 1.6,
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
                fontSize: 28,
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
