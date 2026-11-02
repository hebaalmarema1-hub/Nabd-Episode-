import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
  spring,
} from "remotion";

const COLORS = {
  navy: "#10283F",
  blue: "#087EA4",
  cyan: "#35B6D6",
  light: "#EAF8FC",
  gold: "#E9C98B",
  white: "#FFFFFF",
};

const scenes = [
  {
    title: "نبض العلاج الطبيعي",
    subtitle: "العلاج الطبيعي والألم",
    text: "هل لازم تتألم باش تتحسن؟",
    detail: "خلينا نكتشفوا الإجابة العلمية مع بعض",
    host: "IMG_4364.PNG",
    tag: "الحلقة الرابعة",
  },
  {
    title: "سؤال يتكرر!",
    subtitle: "هل الألم دليل إن العلاج ناجح؟",
    text: "كثير من الناس يعتقدوا إن الألم بعد التمرين يعني إن العلاج قاعد يعطي نتيجة.",
    detail: "لكن هل هذا الاعتقاد صحيح؟",
    patient: "IMG_4360.PNG",
    tag: "نبدأ بالسؤال",
  },
  {
    title: "الألم مش مقياس النجاح",
    subtitle: "مش شرط تتألم باش تتحسن.",
    text: "العلاج الطبيعي يهدف إلى تحسين الحركة، وزيادة القوة، واستعادة القدرة على أداء الأنشطة اليومية.",
    detail: "التحسن الوظيفي أهم من الإحساس بالألم.",
    doctor: "IMG_4355.PNG",
    tag: "معلومة علمية",
  },
  {
    title: "هل الألم بعد التمرين طبيعي؟",
    subtitle: "أحياناً ممكن يحدث ألم عضلي خفيف.",
    text: "قد تشعر ببعض التعب أو الوجع الخفيف بعد نشاط جديد أو تمرين غير معتاد.",
    detail: "لكن الألم الشديد أو المتزايد أو غير المعتاد يحتاج إلى التوقف والتقييم.",
    patient: "IMG_4351.PNG",
    doctor: "IMG_4363.PNG",
    tag: "انتبه لجسمك",
  },
  {
    title: "كيف نعرف أن العلاج ناجح؟",
    subtitle: "راقب التغيير في حياتك اليومية.",
    text: "تحسن مدى الحركة • زيادة القوة • تحسن التوازن • سهولة المشي وأداء الأنشطة.",
    detail: "هذه مؤشرات تساعد الأخصائي على متابعة تقدمك.",
    patient: "IMG_4353.PNG",
    doctor: "IMG_4361.PNG",
    tag: "علامات التحسن",
  },
  {
    title: "تذكّر دائماً",
    subtitle: "مش شرط تتألم باش تتحسن.",
    text: "هدف العلاج الطبيعي هو استعادة الحركة والوظيفة وتحسين جودة الحياة.",
    detail: "كان معاكم نبض العلاج الطبيعي 💙",
    host: "IMG_4349.PNG",
    tag: "مع منة الله المريمي",
  },
];

const Person: React.FC<{
  file: string;
  side: "left" | "right";
  frame: number;
  twoPeople: boolean;
}> = ({ file, side, frame, twoPeople }) => {
  const enter = spring({
    frame,
    fps: 30,
    config: { damping: 15, stiffness: 75 },
  });

  const movement = interpolate(
    enter,
    [0, 1],
    [side === "left" ? -90 : 90, 0]
  );

  const width = twoPeople ? 440 : 540;

  return (
    <div
      style={{
        position: "absolute",
        bottom: -12,
        left: side === "left" ? (twoPeople ? 0 : 35) : "auto",
        right: side === "right" ? 0 : "auto",
        width,
        height: 740,
        opacity: enter,
        transform: `translateX(${movement}px)`,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      <Img
        src={staticFile(`characters/${file}`)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "bottom",
          filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.22))",
        }}
      />
    </div>
  );
};

export const Episode04: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneDuration = 75;
  const sceneIndex = Math.min(
    Math.floor(frame / sceneDuration),
    scenes.length - 1
  );

  const localFrame = frame - sceneIndex * sceneDuration;
  const scene = scenes[sceneIndex];

  const twoPeople = !!(scene.patient && scene.doctor);
  const hasCharacter = !!(
    scene.host || scene.patient || scene.doctor
  );

  const fade = interpolate(
    localFrame,
    [0, 10, 65, 75],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const entrance = spring({
    frame: localFrame,
    fps: 30,
    config: { damping: 18, stiffness: 75 },
  });

  const textY = interpolate(entrance, [0, 1], [35, 0]);
  const progress = ((sceneIndex + 1) / scenes.length) * 100;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(130deg, ${COLORS.navy} 0%, ${COLORS.blue} 58%, ${COLORS.cyan} 100%)`,
        fontFamily: "Cairo, Tajawal, Tahoma, Arial, sans-serif",
        color: COLORS.white,
        overflow: "hidden",
      }}
    >
      {/* خلفية زخرفية */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.10)",
          top: -350,
          right: -180,
          transform: `rotate(${frame * 0.15}deg)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.045)",
          bottom: -320,
          left: -140,
        }}
      />

      {/* رأس المشهد */}
      <div
        style={{
          position: "absolute",
          top: 38,
          left: 65,
          right: 65,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 6,
          fontSize: 25,
          fontWeight: "bold",
          color: COLORS.light,
        }}
      >
        <span>🎙️ نبض العلاج الطبيعي</span>

        <span
          style={{
            color: COLORS.gold,
            fontSize: 21,
          }}
        >
          {scene.tag}
        </span>
      </div>

      {/* الشخصيات */}
      {scene.host && (
        <Person
          file={scene.host}
          side="left"
          frame={localFrame}
          twoPeople={false}
        />
      )}

      {scene.patient && (
        <Person
          file={scene.patient}
          side="left"
          frame={localFrame}
          twoPeople={twoPeople}
        />
      )}

      {scene.doctor && (
        <Person
          file={scene.doctor}
          side={twoPeople ? "right" : "left"}
          frame={localFrame}
          twoPeople={twoPeople}
        />
      )}

      {/* مساحة النص */}
      <div
        style={{
          position: "absolute",
          top: twoPeople ? 225 : 190,
          left: twoPeople ? 430 : hasCharacter ? 600 : 150,
          right: twoPeople ? 430 : 100,
          zIndex: 4,
          opacity: fade,
          transform: `translateY(${textY}px)`,
          textAlign: "right",
        }}
      >
        {/* خط زخرفي */}
        <div
          style={{
            width: 85,
            height: 7,
            background: COLORS.gold,
            borderRadius: 20,
            marginLeft: "auto",
            marginBottom: 26,
          }}
        />

        {/* العنوان */}
        <div
          style={{
            fontSize: twoPeople ? 45 : 57,
            fontWeight: "bold",
            lineHeight: 1.45,
            color: COLORS.white,
            textShadow: "0 4px 15px rgba(0,0,0,0.12)",
          }}
        >
          {scene.title}
        </div>

        {/* العنوان الفرعي */}
        <div
          style={{
            fontSize: twoPeople ? 29 : 35,
            lineHeight: 1.55,
            color: COLORS.light,
            marginTop: 20,
            fontWeight: 600,
          }}
        >
          {scene.subtitle}
        </div>

        {/* صندوق المعلومة */}
        <div
          style={{
            marginTop: 27,
            padding: "20px 24px",
            borderRadius: 22,
            background: "rgba(255,255,255,0.13)",
            border: "1px solid rgba(255,255,255,0.23)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
            fontSize: twoPeople ? 23 : 27,
            lineHeight: 1.65,
            color: COLORS.white,
          }}
        >
          {scene.text}
        </div>

        {/* الخلاصة */}
        <div
          style={{
            marginTop: 22,
            fontSize: twoPeople ? 21 : 24,
            lineHeight: 1.5,
            color: COLORS.gold,
            fontWeight: "bold",
          }}
        >
          {scene.detail}
        </div>
      </div>

      {/* تذييل الحلقة */}
      <div
        style={{
          position: "absolute",
          bottom: 42,
          left: 65,
          right: 65,
          zIndex: 7,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 19,
          color: COLORS.light,
        }}
      >
        <span>مع منة الله المريمي</span>
        <span>
          المشهد {sceneIndex + 1} من {scenes.length}
        </span>
      </div>

      {/* شريط التقدم */}
      <div
        style={{
          position: "absolute",
          bottom: 17,
          left: 65,
          right: 65,
          height: 5,
          borderRadius: 10,
          background: "rgba(255,255,255,0.22)",
          overflow: "hidden",
          zIndex: 8,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: COLORS.gold,
            borderRadius: 10,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
