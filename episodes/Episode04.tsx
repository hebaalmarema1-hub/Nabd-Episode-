import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const Episode04: React.FC = () => {
  const frame = useCurrentFrame();

  const scenes = [
    {
      title: "نبض العلاج الطبيعي",
      subtitle: "مع منة الله المريمي",
      text: "الحلقة الرابعة",
    },
    {
      title: "العلاج الطبيعي والألم",
      subtitle: "هل لازم تتألم باش تتحسن؟",
      text: "سؤال مهم.. وإجابته علمية",
    },
    {
      title: "هل الألم دليل نجاح العلاج؟",
      subtitle: "لا، الألم مش مقياس لنجاح التأهيل",
      text: "التحسن الحقيقي يظهر في الحركة والوظيفة والقوة",
    },
    {
      title: "هل الألم بعد التمرين طبيعي؟",
      subtitle: "أحياناً قد يحدث ألم عضلي خفيف",
      text: "لكن الألم الشديد أو المتزايد يستدعي التوقف والتقييم",
    },
    {
      title: "كيف نعرف أن العلاج ناجح؟",
      subtitle: "تحسن الحركة • زيادة القوة • أداء الأنشطة اليومية",
      text: "الهدف هو استعادة الوظيفة وتحسين جودة الحياة",
    },
    {
      title: "تذكّر دائماً",
      subtitle: "مش شرط تتألم باش تتحسن",
      text: "كان معاكم نبض العلاج الطبيعي 💙",
    },
  ];

  const sceneDuration = 75;
  const sceneIndex = Math.min(
    Math.floor(frame / sceneDuration),
    scenes.length - 1
  );

  const scene = scenes[sceneIndex];

  const opacity = interpolate(
    frame % sceneDuration,
    [0, 12, 63, 75],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #102D46 0%, #087EA4 55%, #35B6D6 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, Tahoma, sans-serif",
        color: "white",
        padding: 80,
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity,
          padding: 80,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 35, color: "#BCEEFF" }}>
          🎙️ نبض العلاج الطبيعي
        </div>

        <div style={{ fontSize: 76, fontWeight: "bold", marginBottom: 35 }}>
          {scene.title}
        </div>

        <div style={{ fontSize: 43, marginBottom: 30, lineHeight: 1.5 }}>
          {scene.subtitle}
        </div>

        <div style={{ fontSize: 30, color: "#D8F5FF", marginTop: 25 }}>
          {scene.text}
        </div>

        <div style={{ marginTop: 65, fontSize: 24, color: "#BCEEFF" }}>
          الحلقة الرابعة | مع منة الله المريمي
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
