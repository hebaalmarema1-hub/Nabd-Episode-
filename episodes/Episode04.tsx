import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

const C = {
  navy: "#071725",
  blue: "#123B55",
  cyan: "#43D9E8",
  teal: "#55D5BD",
  gold: "#E8C477",
  white: "#F5F8FC",
  muted: "#B8CAD6",
  red: "#F07882",
  green: "#70D5A9",
  bone: "#E8D7B5",
};

const scenes = [
  {
    type: "intro",
    eyebrow: "PODCAST • EPISODE 05",
    title: "ما وراء الإصابة",
    subtitle: "افهم الضرر قبل العلاج",
    detail: "رحلة لفهم ما يحدث داخل جسم الإنسان",
    narration:
      "السلام عليكم ورحمة الله وبركاته، وأهلاً بيكم في حلقة جديدة من نبض العلاج الطبيعي مع منة الله المريمي. اليوم بنحكوا على فكرة مهمة: مش كافي نعرف اسم الإصابة، لازم نفهموا شن صار داخل الجسم.",
  },
  {
    type: "anatomy",
    eyebrow: "01 • ANATOMY",
    title: "أولاً: التشريح",
    subtitle: "كيف يتكوّن الجزء المصاب؟",
    detail: "العظام • العضلات • الأربطة • الغضاريف",
    narration:
      "أول حاجة هي التشريح. لازم نعرفوا الجزء المصاب من شن يتكوّن، وشن الأنسجة الموجودة فيه، سواء كانت عظام أو عضلات أو أربطة أو غضاريف.",
  },
  {
    type: "physiology",
    eyebrow: "02 • PHYSIOLOGY",
    title: "ثانياً: الوظيفة الفسيولوجية",
    subtitle: "كيف يعمل الجسم بصورة طبيعية؟",
    detail: "كل نسيج له وظيفة ودور داخل الجسم.",
    narration:
      "ثاني حاجة الوظيفة الفسيولوجية. يعني كيف يخدم الجزء هذا في الوضع الطبيعي؟ وشن الوظيفة اللي يقوم بيها داخل الجسم؟",
  },
  {
    type: "biomechanics",
    eyebrow: "03 • BIOMECHANICS",
    title: "ثالثاً: الميكانيكا الحيوية",
    subtitle: "كيف تحدث الحركة؟",
    detail: "القوى • الضغط • التوازن • توزيع الأحمال",
    narration:
      "ثالث حاجة الميكانيكا الحيوية. نفهموا كيف تحدث الحركة، وكيف تتوزع القوى والضغوط على المفاصل والعضلات أثناء الحركة.",
  },
  {
    type: "damage",
    eyebrow: "04 • INJURY MECHANISM",
    title: "ماذا يحدث عند الإصابة؟",
    subtitle: "هنا يبدأ التغيّر داخل الجسم",
    detail: "قد تتأثر الأنسجة وتختل الوظيفة الطبيعية.",
    narration:
      "لما تحدث الإصابة، ممكن تتأثر الأنسجة وتتغير طريقة عملها. وهنا لازم نفهموا نوع الضرر وتأثيره على وظيفة الجزء المصاب.",
  },
  {
    type: "example",
    eyebrow: "05 • CLINICAL EXAMPLE",
    title: "خلونا ناخذوا مثالاً",
    subtitle: "خشونة مفصل الركبة",
    detail: "من المفصل الطبيعي إلى التغيرات الناتجة عن الخشونة.",
    narration:
      "خلونا ناخذوا مثال بسيط: خشونة مفصل الركبة. في الوضع الطبيعي، الغضروف يساعد على تسهيل حركة المفصل وتوزيع الأحمال وتقليل الاحتكاك بين الأسطح العظمية. لكن مع الخشونة تحدث تغيرات في الغضروف والعظم والأنسجة المحيطة، وقد يتأثر أداء المفصل.",
  },
  {
    type: "assessment",
    eyebrow: "06 • CLINICAL THINKING",
    title: "شن لازم يفهم المعالج؟",
    subtitle: "مش اسم الإصابة فقط!",
    detail: "ما الأنسجة المتأثرة؟ وما الوظيفة التي اختلت؟",
    narration:
      "المعالج الطبيعي ما يكتفيش بتسجيل تشخيص خشونة الركبة، بل يسأل: شن الأنسجة اللي تأثرت؟ شن الوظيفة اللي اختلت؟ وكيف انعكس الضرر على حركة المريض وأنشطته اليومية؟ ومن هنا يقدر يختار التأهيل المناسب.",
  },
  {
    type: "outro",
    eyebrow: "رسالة الحلقة",
    title: "افهم كيف يعمل الجسم أولاً",
    subtitle: "حتى تفهم كيف يتأثر عند الإصابة",
    detail: "فهم الضرر هو بداية اختيار التأهيل المناسب.",
    narration:
      "وفي نهاية حلقتنا، تذكروا: مش كافي تعرف الإصابة، الأهم إنك تفهم تأثيرها على الجسم. لأن المعالج الناجح يفهم التغيرات اللي صارت داخل الجسم وكيف يساعد المريض يستعيد وظيفته وحركته. كان معاكم نبض العلاج الطبيعي مع منة الله المريمي. دمتم بصحة وحركة دائمة.",
  },
];

const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const move = Math.sin(frame / 50) * 35;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at ${40 + move / 20}% 45%, #17465B 0%, ${C.navy} 65%, #020912 100%)`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.09,
          backgroundImage:
            "linear-gradient(#43D9E8 1px, transparent 1px), linear-gradient(90deg, #43D9E8 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      {[650, 900, 1150].map((size, i) => (
        <div
          key={size}
          style={{
            position: "absolute",
            width: size,
            height: size,
            border: `1px solid ${C.cyan}20`,
            borderRadius: "50%",
            right: -size / 2 + move,
            top: 100 + i * 50,
            transform: `rotate(${frame * 0.03}deg)`,
          }}
        />
      ))}

      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: (i * 173 + 40) % 1920,
            top: (i * 113 + frame * 0.3) % 1080,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: i % 4 === 0 ? C.gold : C.cyan,
            opacity: 0.3 + Math.sin(frame / 15 + i) * 0.12,
            boxShadow: `0 0 12px ${C.cyan}`,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

const Brand: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 14) * 0.04;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div
        style={{
          width: 65,
          height: 65,
          border: `2px solid ${C.cyan}`,
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: C.white,
          fontSize: 27,
          fontWeight: 900,
          transform: `scale(${pulse})`,
          boxShadow: `0 0 30px ${C.cyan}44`,
        }}
      >
        نبض
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ color: C.white, fontSize: 25, fontWeight: 900 }}>
          نبض العلاج الطبيعي
        </div>
        <div style={{ color: C.gold, fontSize: 14, letterSpacing: 2 }}>
          WITH MENATALLAH ALMAREMI
        </div>
      </div>
    </div>
  );
};

// رسم تشريحي مبسط لمفصل الركبة
const Knee: React.FC<{ damaged?: boolean }> = ({ damaged = false }) => {
  const frame = useCurrentFrame();
  const pulse = 0.7 + Math.sin(frame / 12) * 0.2;

  return (
    <svg viewBox="0 0 500 570" width="100%" height="100%">
      <defs>
        <linearGradient id="bone05" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF0D4" />
          <stop offset="100%" stopColor="#BDA77D" />
        </linearGradient>
        <filter id="glow05">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* عظمة الفخذ */}
      <path
        d="M190 20 L180 170 L145 230 Q110 290 175 310 Q220 325 250 285 Q280 325 325 310 Q390 290 355 230 L320 170 L310 20 Z"
        fill="url(#bone05)"
        stroke="#FFF0D4"
        strokeWidth="4"
      />

      {/* عظمة الساق */}
      <path
        d="M165 350 Q205 320 250 345 Q295 320 335 350 L315 535 L185 535 Z"
        fill="url(#bone05)"
        stroke="#FFF0D4"
        strokeWidth="4"
      />

      {/* الغضروف المفصلي */}
      <path
        d="M155 315 Q205 295 250 318 Q295 295 345 315"
        stroke={damaged ? C.red : C.cyan}
        strokeWidth={damaged ? 7 : 19}
        strokeLinecap="round"
        fill="none"
        filter="url(#glow05)"
      />

      {/* الأربطة */}
      <path
        d="M215 265 L285 390"
        stroke={C.gold}
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={damaged ? "17 12" : "none"}
      />
      <path
        d="M285 265 L215 390"
        stroke="#D3AF7D"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* الرضفة */}
      <ellipse
        cx="375"
        cy="310"
        rx="31"
        ry="49"
        fill="url(#bone05)"
        stroke="#FFF0D4"
        strokeWidth="4"
      />

      {damaged && (
        <>
          <path
            d="M180 320 L205 337 L193 350 M270 318 L290 340 L280 355"
            stroke={C.red}
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="250"
            cy="320"
            r={45 + pulse * 8}
            stroke={C.red}
            strokeWidth="3"
            fill="none"
            opacity={pulse}
          />
        </>
      )}
    </svg>
  );
};

// رسم يوضح العضلات ووظيفتها
const MuscleDiagram: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 0.8 + Math.sin(frame / 12) * 0.12;

  return (
    <svg viewBox="0 0 500 570" width="100%" height="100%">
      <path
        d="M210 30 Q160 100 185 205 Q190 270 230 285 L230 500 L270 500 L270 285 Q310 270 315 205 Q340 100 290 30 Z"
        fill="#D9C7A5"
        stroke="#FFF0D4"
        strokeWidth="4"
      />

      <path
        d="M205 90 Q150 150 205 255 L240 280 L240 100 Z"
        fill={C.red}
        opacity={pulse}
      />
      <path
        d="M295 90 Q350 150 295 255 L260 280 L260 100 Z"
        fill={C.red}
        opacity={pulse}
      />

      <path
        d="M220 285 L220 475 M280 285 L280 475"
        stroke={C.gold}
        strokeWidth="12"
        strokeLinecap="round"
      />

      <path
        d="M210 170 Q250 220 290 170"
        stroke={C.cyan}
        strokeWidth="5"
        fill="none"
      />

      <circle cx="250" cy="275" r="18" fill={C.gold} />
      <circle
        cx="250"
        cy="275"
        r={35 + pulse * 8}
        fill="none"
        stroke={C.cyan}
        strokeWidth="3"
        opacity={pulse}
      />

      <path
        d="M125 160 L190 160"
        stroke={C.cyan}
        strokeWidth="3"
      />
      <text x="30" y="150" fill={C.white} fontSize="19">
        العضلات
      </text>

      <path
        d="M320 290 L380 290"
        stroke={C.gold}
        strokeWidth="3"
      />
      <text x="385" y="297" fill={C.white} fontSize="18">
        المفصل
      </text>
    </svg>
  );
};

// رسم يوضح القوى والحركة
const MovementDiagram: React.FC = () => {
  const frame = useCurrentFrame();
  const angle = Math.sin(frame / 20) * 18;

  return (
    <svg viewBox="0 0 500 570" width="100%" height="100%">
      <path
        d="M245 35 L245 280"
        stroke={C.bone}
        strokeWidth="43"
        strokeLinecap="round"
      />
      <path
        d="M245 280 L245 520"
        stroke={C.bone}
        strokeWidth="39"
        strokeLinecap="round"
        transform={`rotate(${angle},245,280)`}
      />

      <circle
        cx="245"
        cy="280"
        r="42"
        fill={C.blue}
        stroke={C.cyan}
        strokeWidth="7"
      />

      <path
        d="M100 145 Q40 280 105 415"
        stroke={C.cyan}
        strokeWidth="7"
        strokeDasharray="12 10"
        fill="none"
      />
      <path
        d="M85 395 L105 415 L120 390"
        stroke={C.cyan}
        strokeWidth="7"
        fill="none"
      />

      <path
        d="M390 415 Q455 280 390 145"
        stroke={C.gold}
        strokeWidth="7"
        strokeDasharray="12 10"
        fill="none"
      />
      <path
        d="M375 165 L390 145 L410 165"
        stroke={C.gold}
        strokeWidth="7"
        fill="none"
      />

      <path
        d="M245 60 L245 160"
        stroke={C.red}
        strokeWidth="8"
      />
      <path
        d="M225 140 L245 165 L265 140"
        stroke={C.red}
        strokeWidth="8"
        fill="none"
      />

      <text x="250" y="555" fill={C.gold} fontSize="20" textAnchor="middle">
        حركة المفصل وتوزيع القوى
      </text>
    </svg>
  );
};

const DamageDiagram: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 0.7 + Math.sin(frame / 9) * 0.25;

  return (
    <div style={{ position: "relative", width: 550, height: 570 }}>
      <Knee damaged />
      <div
        style={{
          position: "absolute",
          top: 115,
          right: 5,
          border: `1px solid ${C.red}`,
          background: "#321B2B",
          color: C.red,
          padding: "12px 18px",
          borderRadius: 15,
          fontSize: 19,
          fontWeight: 800,
          opacity: pulse,
        }}
      >
        تغيرات في الأنسجة
      </div>
    </div>
  );
};

const Comparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame: frame - 10,
    fps,
    config: { damping: 15 },
  });

  return (
    <div
      style={{
        display: "flex",
        gap: 25,
        justifyContent: "center",
        alignItems: "center",
        opacity: enter,
        transform: `translateY(${(1 - enter) * 35}px)`,
      }}
    >
      <div
        style={{
          width: 265,
          height: 430,
          border: `2px solid ${C.green}`,
          borderRadius: 25,
          background: "#102F43",
          padding: 15,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: C.green,
            fontSize: 24,
            fontWeight: 900,
            marginBottom: 10,
          }}
        >
          مفصل طبيعي
        </div>
        <Knee />
        <div style={{ color: C.white, fontSize: 18 }}>
          غضروف يساعد على تسهيل الحركة
        </div>
      </div>

      <div
        style={{
          width: 265,
          height: 430,
          border: `2px solid ${C.red}`,
          borderRadius: 25,
          background: "#102F43",
          padding: 15,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: C.red,
            fontSize: 24,
            fontWeight: 900,
            marginBottom: 10,
          }}
        >
          خشونة الركبة
        </div>
        <Knee damaged />
        <div style={{ color: C.white, fontSize: 18 }}>
          تغيرات في الغضروف والعظم
        </div>
      </div>
    </div>
  );
};

const Assessment: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const questions = [
    { n: "01", t: "ما الأنسجة المتأثرة؟", color: C.cyan },
    { n: "02", t: "ما الوظيفة التي اختلت؟", color: C.gold },
    { n: "03", t: "كيف تأثرت حركة المريض؟", color: C.green },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 22,
        width: 570,
      }}
    >
      {questions.map((item, i) => {
        const enter = spring({
          frame: frame - i * 12,
          fps,
          config: { damping: 15 },
        });

        return (
          <div
            key={item.n}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: 24,
              borderRadius: 20,
              background: "#102F43DD",
              border: `1px solid ${item.color}88`,
              opacity: enter,
              transform: `translateX(${(1 - enter) * 45}px)`,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 17,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.color,
                border: `2px solid ${item.color}`,
                fontSize: 21,
                fontWeight: 900,
              }}
            >
              {item.n}
            </div>
            <div
              style={{
                color: C.white,
                fontSize: 24,
                fontWeight: 800,
                direction: "rtl",
              }}
            >
              {item.t}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const IntroVisual: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame: frame - 10,
    fps,
    config: { damping: 13, stiffness: 65 },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 35,
        opacity: enter,
        transform: `scale(${0.85 + enter * 0.15})`,
      }}
    >
      <div
        style={{
          width: 430,
          height: 430,
          borderRadius: "50%",
          border: `2px solid ${C.cyan}66`,
          boxShadow: `0 0 90px ${C.cyan}22`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 25,
            borderRadius: "50%",
            border: `1px dashed ${C.gold}88`,
            transform: `rotate(${frame * 0.4}deg)`,
          }}
        />
        <div style={{ transform: "scale(0.65)" }}>
          <Knee />
        </div>
      </div>
      <Brand />
    </div>
  );
};

const SceneVisual: React.FC<{
  scene: (typeof scenes)[number];
}> = ({ scene }) => {
  if (scene.type === "intro") return <IntroVisual />;
  if (scene.type === "anatomy") return <Knee />;
  if (scene.type === "physiology") return <MuscleDiagram />;
  if (scene.type === "biomechanics") return <MovementDiagram />;
  if (scene.type === "damage") return <DamageDiagram />;
  if (scene.type === "example") return <Comparison />;
  if (scene.type === "assessment") return <Assessment />;
  return <Knee moving />;
};

const TextBlock: React.FC<{
  scene: (typeof scenes)[number];
}> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame: frame - 8,
    fps,
    config: { damping: 18, stiffness: 70 },
  });

  return (
    <div
      style={{
        width: 790,
        direction: "rtl",
        textAlign: "right",
        fontFamily: "Cairo, Tajawal, Tahoma, Arial, sans-serif",
        opacity: interpolate(frame, [0, 15], [0, 1], {
          extrapolateRight: "clamp",
        }),
        transform: `translateX(${(1 - enter) * 65}px)`,
      }}
    >
      <div
        style={{
          display: "inline-block",
          color: C.gold,
          fontSize: 21,
          fontWeight: 800,
          borderBottom: `2px solid ${C.gold}`,
          paddingBottom: 12,
          marginBottom: 25,
        }}
      >
        {scene.eyebrow}
      </div>

      <div
        style={{
          color: C.white,
          fontSize: scene.type === "intro" ? 75 : 55,
          lineHeight: 1.5,
          fontWeight: 900,
          marginBottom: 15,
          textShadow: "0 5px 30px #0008",
        }}
      >
        {scene.title}
      </div>

      <div
        style={{
          color: C.cyan,
          fontSize: 34,
          lineHeight: 1.6,
          fontWeight: 800,
          marginBottom: 18,
        }}
      >
        {scene.subtitle}
      </div>

      <div
        style={{
          color: C.muted,
          fontSize: 25,
          lineHeight: 1.9,
          fontWeight: 500,
        }}
      >
        {scene.detail}
      </div>

      <div
        style={{
          width: 110,
          height: 4,
          background: `linear-gradient(90deg, ${C.cyan}, ${C.gold})`,
          marginTop: 30,
          borderRadius: 10,
        }}
      />
    </div>
  );
};

const SceneContent: React.FC<{
  scene: (typeof scenes)[number];
}> = ({ scene }) => {
  if (scene.type === "intro") {
    return (
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextBlock scene={scene} />
        <div
          style={{
            position: "absolute",
            bottom: 65,
            right: 100,
          }}
        >
          <Brand />
        </div>
      </AbsoluteFill>
    );
  }

  if (scene.type === "outro") {
    return (
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 1100,
            textAlign: "center",
          }}
        >
          <TextBlock scene={scene} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 65,
            }}
          >
            <Brand />
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 55,
          right: 80,
        }}
      >
        <Brand />
      </div>

      <div
        style={{
          position: "absolute",
          left: 60,
          top: 170,
          width: 690,
          height: 740,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SceneVisual scene={scene} />
      </div>

      <div
        style={{
          position: "absolute",
          right: 110,
          top: 300,
        }}
      >
        <TextBlock scene={scene} />
      </div>
    </>
  );
};

export const Episode04: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneDuration = 225;

  const index = Math.min(
    Math.floor(frame / sceneDuration),
    scenes.length - 1
  );

  const localFrame = frame % sceneDuration;

  const fadeIn = interpolate(localFrame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(
    localFrame,
    [sceneDuration - 18, sceneDuration],
    [1, 0],
    {
      extrapolateLeft: "clamp",
    }
  );

  const scene = scenes[index];

  const progress =
    ((index + localFrame / sceneDuration) / scenes.length) * 100;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: C.navy,
        overflow: "hidden",
      }}
    >
    <Background />

<AbsoluteFill style={{ opacity: fadeIn * fadeOut }}>
        <SceneContent scene={scene} />
      </AbsoluteFill>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 75,
          right: 75,
          height: 4,
          background: "#FFFFFF25",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${C.cyan}, ${C.gold})`,
            boxShadow: `0 0 15px ${C.cyan}`,
            borderRadius: 10,
          }}
        />
      </div>

      {/* Episode number */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 80,
          color: "#FFFFFF88",
          fontSize: 15,
          letterSpacing: 2,
          fontFamily: "Arial, sans-serif",
        }}
      >
        EPISODE 05
      </div>

      {/* Scene number */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          right: 80,
          color: C.gold,
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        {String(index + 1).padStart(2, "0")} / 08
      </div>
    </AbsoluteFill>
  );
};
        
     

    
       
