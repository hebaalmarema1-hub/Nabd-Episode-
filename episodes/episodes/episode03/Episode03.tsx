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
  // إعدادات
  // =========================================================

  const BLUE = "#087EA4";
  const CYAN = "#35B6D6";
  const DARK = "#244B57";
  const BG = "#F4FBFD";
  const LIGHT = "#E5F5F9";

  // كل لقطة = 75 فريم
  const SCENE = 75;

  const scene = Math.floor(frame / SCENE);
  const local = frame % SCENE;

  // دخول ناعم للشخصية والنص
  const fadeIn = interpolate(local, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(local, [62, 74], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = Math.min(fadeIn, fadeOut);

  // حركة بسيطة للشخصية
  const characterY = interpolate(local, [0, 20], [35, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =========================================================
  // خلفية موحدة
  // =========================================================

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

      {/* دوائر ديكورية */}
      <div
        style={{
          position: "absolute",
          right: 70,
          top: 55,
          width: 150,
          height: 150,
          borderRadius: "50%",
          border: `4px solid ${CYAN}`,
          opacity: 0.16,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 115,
          top: 100,
          width: 55,
          height: 55,
          borderRadius: "50%",
          backgroundColor: CYAN,
          opacity: 0.10,
        }}
      />

      {/* الأرضية */}
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

      {/* خط الأرض */}
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
  // عنوان
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
          top: 38,
          left: 90,
          right: 90,
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
          width: 150,
          height: 6,
          backgroundColor: CYAN,
          borderRadius: 20,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 70,
          bottom: 42,
          color: BLUE,
          fontSize: 26,
          fontWeight: 900,
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
        right: 100,
        top: 190,
        width: 560,
        minHeight: 220,
        padding: "32px 38px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: `3px solid ${CYAN}`,
        borderRadius: 28,
        boxShadow: "0 18px 40px rgba(0,80,100,0.12)",
        textAlign: "center",
        zIndex: 15,
      }}
    >
      <div
        style={{
          color: BLUE,
          fontSize: 42,
          fontWeight: 900,
          lineHeight: 1.25,
          marginBottom: 15,
        }}
      >
        {title}
      </div>

      <div
        style={{
          width: 90,
          height: 5,
          margin: "0 auto 18px",
          backgroundColor: CYAN,
          borderRadius: 10,
        }}
      />

      <div
        style={{
          color: DARK,
          fontSize: 30,
          fontWeight: 700,
          lineHeight: 1.55,
        }}
      >
        {text}
      </div>
    </div>
  );

  // =========================================================
  // شخصية كبيرة
  // =========================================================

  const Character = ({
    file,
    left = 60,
    width = 520,
    height = 670,
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
        bottom: 70,
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
  // العنصر الرئيسي
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
              top: 75,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#FFFFFF",
              padding: "24px 65px",
              borderRadius: 25,
              border: `4px solid ${BLUE}`,
              color: BLUE,
              fontSize: 42,
              fontWeight: 900,
              boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
              textAlign: "center",
              zIndex: 20,
            }}
          >
            PHYSICAL THERAPY
            <div
              style={{
                marginTop: 5,
                color: DARK,
                fontSize: 23,
                letterSpacing: 3,
                fontWeight: 500,
              }}
            >
              CLINIC
            </div>
          </div>

          <Character
            file="IMG_0815.PNG"
            left={130}
            width={570}
            height={700}
          />

          <div
            style={{
              position: "absolute",
              right: 150,
              top: 280,
              padding: "28px 55px",
              backgroundColor: "#FFFFFF",
              borderRadius: 28,
              border: `3px solid ${CYAN}`,
              color: BLUE,
              fontSize: 48,
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
            left={70}
            width={570}
            height={700}
          />

          <Card
            title="خلينا نسمع منك"
            text="شن المشكلة؟ ومتى بدأت؟ وشن أكثر شيء يضايقك؟"
          />

          <div
            style={{
              position: "absolute",
              right: 750,
              top: 310,
              fontSize: 85,
              color: CYAN,
              fontWeight: 900,
              opacity: 0.65,
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
            left={80}
            width={570}
            height={700}
          />

          <Card
            title="نوضح الحالة"
            text="المريضة تعطي المعلومات الأساسية وتشرح المشكلة."
          />

          <div
            style={{
              position: "absolute",
              right: 90,
              bottom: 125,
              padding: "15px 25px",
              backgroundColor: LIGHT,
              borderRadius: 18,
              color: BLUE,
              fontSize: 27,
              fontWeight: 800,
            }}
          >
            📋 المعلومات الأولية
          </div>
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 3 — السؤال
         ===================================================== */}

      {scene === 3 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />
          <Header title="نسأل الأسئلة المهمة" number="03" />

          <Character
            file="IMG_0810.PNG"
            left={80}
            width={540}
            height={680}
          />

          <Img
            src={staticFile("characters/IMG_0737.PNG")}
            style={{
              position: "absolute",
              right: 120,
              bottom: 115,
              width: 190,
              height: 190,
              objectFit: "contain",
              opacity,
            }}
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
            left={60}
            width={590}
            height={710}
          />

          <Card
            title="التقييم الجسدي"
            text="نقيس الحركة والقوة ونلاحظ طريقة أداء الحركة."
          />

          <div
            style={{
              position: "absolute",
              right: 120,
              bottom: 125,
              backgroundColor: "#FFFFFF",
              border: `3px solid ${CYAN}`,
              borderRadius: 18,
              padding: "14px 28px",
              color: BLUE,
              fontSize: 28,
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
            file="IMG_0806 (1).PNG"
            left={65}
            width={590}
            height={710}
          />

          <Card
            title="مثلاً: ألم الكتف"
            text="نشوف وين الألم بالضبط وشن الحركات اللي تزيده."
          />

          <div
            style={{
              position: "absolute",
              right: 100,
              bottom: 125,
              padding: "14px 30px",
              backgroundColor: LIGHT,
              color: BLUE,
              borderRadius: 18,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            تحديد المشكلة
          </div>
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 6 — التمارين / الحركة
         ===================================================== */}

      {scene === 6 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />
          <Header title="نشوف الحركة" number="06" />

          <Character
            file="IMG_0807.PNG"
            left={55}
            width={600}
            height={720}
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
            left={70}
            width={580}
            height={710}
          />

          <Card
            title="التوازن مهم"
            text="لأنه يساعدنا نعرف مستوى التحكم والثبات أثناء الحركة."
          />

          <div
            style={{
              position: "absolute",
              right: 110,
              bottom: 125,
              width: 170,
              height: 12,
              backgroundColor: CYAN,
              borderRadius: 20,
            }}
          />
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 8 — التفكير والتحليل
         ===================================================== */}

      {scene === 8 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />
          <Header title="نحلل المعلومات" number="08" />

          <Character
            file="IMG_0816.PNG"
            left={90}
            width={550}
            height={690}
          />

          <Card
            title="الأخصائي يحلل"
            text="نجمع كل المعلومات باش نفهم سبب المشكلة بشكل أفضل."
          />
        </AbsoluteFill>
      )}

      {/* =====================================================
          SCENE 9 — مراحل
         ===================================================== */}

      {scene === 9 && (
        <AbsoluteFill style={{ opacity }}>
          <Background />
          <Header title="نرتب مراحل التقييم" number="09" />

          <Character
            file="IMG_0808.PNG"
            left={80}
            width={560}
            height={700}
          />

          <Card
            title="كل خطوة لها هدف"
            text="نرتب النتائج ونحدد الأولويات قبل وضع الخطة العلاجية."
          />

          <div
            style={{
              position: "absolute",
              right: 110,
              bottom: 130,
              display: "flex",
              gap: 12,
            }}
          >
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: "50%",
                  backgroundColor: n === 1 ? BLUE : LIGHT,
                  color: n === 1 ? WHITE : BLUE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
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
            left={70}
            width={580}
            height={710}
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
            left={75}
            width={570}
            height={700}
          />

          <div
            style={{
              position: "absolute",
              right: 150,
              top: 245,
              width: 480,
              padding: "30px",
              backgroundColor: "#FFFFFF",
              borderRadius: 28,
              border: `3px solid ${CYAN}`,
              boxShadow: "0 15px 35px rgba(0,0,0,0.10)",
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
              نعم، هكذا!
            </div>

            <div
              style={{
                marginTop: 12,
                color: DARK,
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              الحركة صحيحة 👌
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
            left={65}
            width={590}
            height={720}
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
            left={70}
            width={580}
            height={710}
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

          <Img
            src={staticFile("characters/IMG_0732.PNG")}
            style={{
              position: "absolute",
              left: 100,
              bottom: 120,
              width: 280,
              height: 280,
              objectFit: "contain",
              opacity,
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 120,
              top: 220,
              width: 600,
              padding: "45px 40px",
              backgroundColor: "#FFFFFF",
              borderRadius: 30,
              border: `3px solid ${CYAN}`,
              boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: 46,
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
                lineHeight: 1.5,
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
            left={70}
            width={580}
            height={710}
          />

          <div
            style={{
              position: "absolute",
              right: 130,
              top: 220,
              width: 570,
              padding: "40px",
              backgroundColor: "#FFFFFF",
              borderRadius: 30,
              border: `3px solid ${CYAN}`,
              boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: 46,
                fontWeight: 900,
              }}
            >
              تمام ✅
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

          <Img
            src={staticFile("characters/IMG_0817.PNG")}
            style={{
              position: "absolute",
              left: 100,
              bottom: 100,
              width: 560,
              height: 700,
              objectFit: "contain",
              opacity,
              filter:
                "drop-shadow(0 20px 30px rgba(0,0,0,0.18))",
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 110,
              top: 220,
              width: 620,
              padding: "45px",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
              borderRadius: 32,
              border: `4px solid ${BLUE}`,
              boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: 52,
                fontWeight: 900,
                marginBottom: 18,
              }}
            >
              وهكي تبدأ أول زيارة ✨
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
