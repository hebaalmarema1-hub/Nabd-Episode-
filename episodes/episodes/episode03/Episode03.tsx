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

  // المشهد الأول: الشخصية تدخل
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

  // المشهد الثاني يبدأ بعد الفريم 100
  const scene2Opacity = interpolate(
    frame,
    [100, 115],
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
      {/* ========================= */}
      {/* المشهد الأول */}
      {/* ========================= */}

      <AbsoluteFill
        style={{
          opacity: frame < 115 ? 1 : 0,
        }}
      >
        {/* الحائط */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #EAF7FC 0%, #FFFFFF 70%)",
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

        {/* الباب */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 620,
            height: 690,
            backgroundColor: "#087EA4",
            padding: 18,
            borderRadius: "28px 28px 0 0",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#087EA4",
              borderRadius: "18px 18px 0 0",
              position: "relative",
            }}
          >
            {/* الزجاج */}
            <div
              style={{
                position: "absolute",
                top: 35,
                left: 45,
                right: 45,
                height: 300,
                backgroundColor: "#DDF4FA",
                border: "8px solid white",
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
                backgroundColor: "white",
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
                backgroundColor: "white",
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
            backgroundColor: "white",
            padding: "14px 25px",
            borderRadius: 15,
            color: "#087EA4",
            fontSize: 26,
            fontWeight: "bold",
            opacity: frame >= 75 ? 1 : 0,
          }}
        >
          مرحبًا بك 👋
        </div>
      </AbsoluteFill>

      {/* ========================= */}
      {/* المشهد الثاني */}
      {/* ========================= */}

      <AbsoluteFill
        style={{
          opacity: scene2Opacity,
          backgroundColor: "#F5FAFC",
        }}
      >
        {/* خلفية العيادة */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #EAF7FC 0%, #FFFFFF 70%)",
          }}
        />

        {/* عنوان */}
        <div
          style={{
            position: "absolute",
            top: 70,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#087EA4",
            fontSize: 42,
            fontWeight: "bold",
          }}
        >
          أول زيارة للعلاج الطبيعي
        </div>

        {/* الشخصية تستمع */}
        <Img
          src={staticFile("characters/IMG_0810.PNG")}
          style={{
            position: "absolute",
            bottom: 40,
            left: 230,
            width: 430,
            height: 560,
            objectFit: "contain",
          }}
        />

        {/* فقاعة الكلام */}
        <div
          style={{
            position: "absolute",
            top: 210,
            right: 120,
            width: 500,
            padding: "30px 35px",
            backgroundColor: "white",
            borderRadius: 30,
            color: "#31515C",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          }}
        >
          أهلاً بك 🌷
          <br />
          خلينا نبدأ بأول زيارة
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
