import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
  spring,
} from "remotion";

const scenes = [
  {
    title: "نبض العلاج الطبيعي",
    subtitle: "العلاج الطبيعي والألم",
    text: "هل لازم تتألم باش تتحسن؟",
    host: "IMG_4364.PNG",
    tag: "الحلقة الرابعة",
  },
  {
    title: "سؤال يتكرر!",
    subtitle: "هل الألم دليل إن العلاج ناجح؟",
    text: "مش كل ألم معناه إنك تتحسن.",
    patient: "IMG_4360.PNG",
    tag: "خلينا نفهموا الموضوع",
  },
  {
    title: "الألم مش مقياس النجاح",
    subtitle: "التحسن ممكن يصير من غير ألم.",
    text: "نجاح التأهيل يظهر في الحركة والقوة والقدرة على أداء الأنشطة اليومية.",
    doctor: "IMG_4355.PNG",
    tag: "معلومة علمية",
  },
  {
    title: "هل الألم بعد التمرين طبيعي؟",
    subtitle: "أحياناً يصير ألم عضلي خفيف.",
    text: "لكن الألم الشديد أو المتزايد أو غير المعتاد يستدعي التوقف والتقييم.",
    patient: "IMG_4351.PNG",
    doctor: "IMG_4363.PNG",
    tag: "انتبه لجسمك",
  },
  {
    title: "كيف نعرف أن العلاج ناجح؟",
    subtitle: "نلاحظ التحسن في:",
    text: "الحركة • القوة • التوازن • الأنشطة اليومية",
    patient: "IMG_4353.PNG",
    doctor: "IMG_4361.PNG",
    tag: "الهدف هو استعادة الوظيفة",
  },
  {
    title: "تذكّر دائماً",
    subtitle: "مش شرط تتألم باش تتحسن.",
    text: "كان معاكم نبض العلاج الطبيعي 💙",
    host: "IMG_4349.PNG",
    tag: "مع منة الله المريمي",
  },
];

const Person: React.FC<{
  file: string;
  side: "left" | "right";
  frame: number;
}> = ({ file, side, frame }) => {
  const enter = spring({
    frame,
    fps: 30,
    config: { damping: 14, stiffness: 85 },
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: -15,
        [side]: 20,
        width: 570,
        height: 790,
        opacity: enter,
        transform: `translateX(${interpolate(
          enter,
          [0, 1],
          [side === "left" ? -100 : 100, 0]
        )}px)`,
      }}
    >
      <Img
        src={staticFile(`characters/${file}`)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "bottom",
          filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.2))",
        }}
      />
    </div>
  );
};

export const Episode04: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneDuration = 75;
  const index = Math.min(
    Math.floor(frame / sceneDuration),
    scenes.length - 1
  );

  const localFrame = frame - index * sceneDuration;
  const scene = scenes[index];

  const fade = interpolate(
    localFrame,
    [0, 12, 63, 75],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const enter = spring({
    frame: localFrame,
    fps: 30,
    config: { damping: 16, stiffness: 80 },
  });

  const twoPeople = !!(scene.patient && scene.doctor);
  const hasPerson = !!(scene.host || scene.patient || scene.doctor);

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(130deg, #102D46, #087EA4 60%, #35B6D6)",
        fontFamily: "Arial, Tahoma, sans-serif",
        color: "white",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 650,
          height: 650,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.10)",
          top: -280,
          right: -150,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 45,
          left: 70,
          right: 70,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 25,
          fontWeight: "bold",
          color: "#EAF8FC",
          zIndex: 5,
        }}
      >
        <span>🎙️ نبض العلاج الطبيعي</span>
        <span style={{ color: "#E9C98B" }}>{scene.tag}</span>
      </div>

      {scene.host && (
        <Person file={scene.host} side="left" frame={localFrame} />
      )}

      {scene.patient && (
        <Person file={scene.patient} side="left" frame={localFrame} />
      )}

      {scene.doctor && (
        <Person
          file={scene.doctor}
          side={twoPeople ? "right" : "left"}
          frame={localFrame}
        />
      )}

      <div
        style={{
          position: "absolute",
          top: 205,
          left: hasPerson ? 570 : 150,
          right: 100,
          zIndex: 4,
          opacity: fade,
          transform: `translateY(${interpolate(enter, [0, 1], [40, 0])}px)`,
          textAlign: "right",
        }}
      >
        <div
          style={{
            width: 90,
            height: 7,
            borderRadius: 10,
            background: "#E9C98B",
            marginLeft: "auto",
            marginBottom: 30,
          }}
        />

        <div
          style={{
            fontSize: 60,
            fontWeight: "bold",
            lineHeight: 1.4,
          }}
        >
          {scene.title}
        </div>

        <div
          style={{
            fontSize: 36,
            color: "#EAF8FC",
            lineHeight: 1.6,
            marginTop: 25,
          }}
        >
          {scene.subtitle}
        </div>

        <div
          style={{
            marginTop: 30,
            padding: "20px 25px",
            borderRadius: 20,
            background: "rgba(255,255,255,0.13)",
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: 27,
            lineHeight: 1.7,
          }}
        >
          {scene.text}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 35,
          left: 70,
          right: 70,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          color: "#D8F5FF",
          zIndex: 5,
        }}
      >
        <span>مع منة الله المريمي</span>
        <span>{index + 1} / 6</span>
      </div>
    </AbsoluteFill>
  );
};
