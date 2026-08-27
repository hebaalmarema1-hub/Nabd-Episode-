import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const Episode03: React.FC = () => {
  const frame = useCurrentFrame();

  // ظهور النص
  const textOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // حركة بسيطة للكاميرا
  const cameraScale = interpolate(frame, [0, 180], [1, 1.03], {
    extrapolateRight: "clamp",
  });

  // فتح الباب في نهاية المشهد
  const doorOpen = interpolate(frame, [120, 180], [0, 75], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F4FAFD",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* الكاميرا */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${cameraScale})`,
        }}
      >
        {/* الحائط */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #EAF7FC 0%, #FFFFFF 75%)",
          }}
        />

        {/* خطوط ديكور الحائط */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 300,
            height: 2,
            backgroundColor: "#D6E9EF",
          }}
        />

        {/* لوحة صغيرة على اليمين */}
        <div
          style={{
            position: "absolute",
            right: 150,
            top: 220,
            width: 260,
            height: 150,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 25,
              color: "#087EA4",
              fontWeight: 700,
            }}
          >
            العلاج الطبيعي
          </div>

          <div
            style={{
              marginTop: 12,
              fontSize: 18,
              color: "#6B8791",
            }}
          >
            حركة أفضل • حياة أفضل
          </div>
        </div>

        {/* الأرضية */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 240,
            background:
              "linear-gradient(180deg, #E8EFF2 0%, #DCE7EB 100%)",
          }}
        />

        {/* ظل تحت الباب */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 85,
            transform: "translateX(-50%)",
            width: 520,
            height: 35,
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.10)",
            filter: "blur(12px)",
          }}
        />

        {/* إطار الباب */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 85,
            transform: "translateX(-50%)",
            width: 470,
            height: 690,
            backgroundColor: "#D3E3E8",
            borderRadius: "22px 22px 0 0",
            padding: 18,
            boxSizing: "border-box",
            boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
          }}
        >
          {/* فتحة الباب */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: "12px 12px 0 0",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* الضوء داخل العيادة */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, #DDF5FA 0%, #FFFFFF 70%)",
              }}
            />

            {/* سرير علاج طبيعي بشكل مبسط */}
            <div
              style={{
                position: "absolute",
                left: 70,
                bottom: 115,
                width: 250,
                height: 25,
                borderRadius: 8,
                backgroundColor: "#087EA4",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 85,
                bottom: 45,
                width: 20,
                height: 75,
                backgroundColor: "#6E8992",
              }}
            />

            <div
              style={{
                position: "absolute",
                right: 85,
                bottom: 45,
                width: 20,
                height: 75,
                backgroundColor: "#6E8992",
              }}
            />

            {/* الباب الأزرق */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${100 - doorOpen}%`,
                height: "100%",
                background:
                  "linear-gradient(135deg, #087EA4 0%, #075E7B 100%)",
                transformOrigin: "left center",
                boxShadow: "8px 0 25px rgba(0,0,0,0.18)",
              }}
            >
              {/* اسم العيادة على الباب */}
              <div
                style={{
                  position: "absolute",
                  top: 80,
                  left: 35,
                  right: 35,
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: 25,
                  fontWeight: 700,
                }}
              >
                عيادة العلاج الطبيعي
              </div>

              {/* مقبض الباب */}
              <div
                style={{
                  position: "absolute",
                  right: 30,
                  top: "50%",
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                }}
              />
            </div>
          </div>
        </div>

        {/* النص الافتتاحي */}
        <div
          style={{
            position: "absolute",
            left: 110,
            bottom: 105,
            width: 650,
            opacity: textOpacity,
          }}
        >
          <div
            style={{
              color: "#087EA4",
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 15,
            }}
          >
            الحلقة الثالثة
          </div>

          <div
            style={{
              color: "#163B4A",
              fontSize: 45,
              fontWeight: 700,
              lineHeight: 1.35,
            }}
          >
            تخيل إن اليوم أول مرة
            <br />
            تدخل فيها لعيادة العلاج الطبيعي...
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
