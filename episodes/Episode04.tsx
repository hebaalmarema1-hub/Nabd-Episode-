import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

const C = {
  navy: "#071629",
  blue: "#123D68",
  cyan: "#42D9F5",
  gold: "#E8C477",
  white: "#F7FAFF",
  muted: "#B8C9D9",
};

const scenes = [
  {
    type: "intro",
    eyebrow: "PODCAST • EPISODE 04",
    title: "نبض العلاج الطبيعي",
    subtitle: "مع منة الله المريمي",
    detail: "العلم الذي يعيد للحركة معناها",
  },
  {
    type: "host",
    eyebrow: "أهلاً بيكم",
    title: "خلونا نحكوا على مفهوم مهم",
    subtitle: "العلاج الطبيعي والألم",
    detail: "هل لازم تتألم باش تتحسن؟",
    person: "IMG_4364.PNG",
  },
  {
    type: "patient",
    eyebrow: "سؤال المريضة",
    title: "كل ما ندير تمرين نحس بألم...",
    subtitle: "هل هذا معناه إن العلاج قاعد ينفع؟",
    detail: "وهل الألم دليل على نجاح الجلسة؟",
    person: "IMG_4360.PNG",
  },
  {
    type: "doctor",
    eyebrow: "التوضيح العلمي",
    title: "مش بالضرورة!",
    subtitle: "الألم مش مقياس نجاح العلاج الطبيعي",
    detail: "ممكن تتحسن الحركة والقوة من غير ما تحس بألم.",
    person: "IMG_4361.PNG",
  },
  {
    type: "info",
    eyebrow: "خلونا نفرقوا",
    title: "ألم بسيط بعد التمرين؟",
    subtitle: "ممكن يصير أحياناً",
    detail: "لكن وجود الألم مش شرط، ومش دليل وحده على فعالية التمرين.",
  },
  {
    type: "warning",
    eyebrow: "انتبه!",
    title: "مش كل ألم طبيعي",
    subtitle: "الألم الشديد أو المتزايد أو غير المعتاد",
    detail: "أوقف التمرين وأبلغ أخصائي العلاج الطبيعي، خاصةً لو ظهرت أعراض جديدة.",
  },
  {
    type: "success",
    eyebrow: "كيف نعرفوا إننا نتقدموا؟",
    title: "التحسن الحقيقي يظهر في الوظيفة",
    subtitle: "حركة أفضل • قوة أكبر • توازن أفضل",
    detail: "والقدرة على أداء أنشطتك اليومية براحة واستقلالية.",
  },
  {
    type: "outro",
    eyebrow: "رسالة الحلقة",
    title: "مش لازم تتألم باش تتحسن",
    subtitle: "التأهيل الناجح يقاس بالتقدم، مش بكمية الألم.",
    detail: "شكراً لمتابعتكم • نلتقوا في حلقة جديدة",
  },
];

const FloatingParticles: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none" }}>
      {Array.from({ length: 34 }).map((_, i) => {
        const x = (i * 173 + 61) % 1920;
        const y = (i * 97 + 35) % 1080;
        const drift = (frame * (0.25 + (i % 4) * 0.12) + i * 31) % 120;
        const opacity = 0.12 + (Math.sin(frame / 22 + i) + 1) * 0.16;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: (y - drift + 1080) % 1080,
              width: i % 5 === 0 ? 5 : 3,
              height: i % 5 === 0 ? 5 : 3,
              borderRadius: "50%",
              background: i % 3 === 0 ? C.gold : C.cyan,
              opacity,
              boxShadow: `0 0 18px ${C.cyan}`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const move = Math.sin(frame / 45) * 45;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at ${50 + move / 30}% 45%, #16456A 0%, ${C.navy} 58%, #030A15 100%)`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 950,
          height: 950,
          borderRadius: "50%",
          border: "1px solid #42D9F522",
          left: -350 + move,
          top: 150,
          boxShadow: "0 0 100px #42D9F510, inset 0 0 100px #42D9F510",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: "1px solid #E8C47722",
          right: -250 - move,
          top: -180,
          boxShadow: "0 0 100px #E8C47710",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1100,
          height: 1100,
          borderRadius: "50%",
          border: "1px solid #42D9F510",
          right: -500,
          bottom: -650,
        }}
      />
      <FloatingParticles />
    </AbsoluteFill>
  );
};

const BrandMark: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 13) * 0.045;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <div
        style={{
          width: 66,
          height: 66,
          borderRadius: 22,
          border: `2px solid ${C.cyan}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.white,
          fontSize: 36,
          fontWeight: 800,
          transform: `scale(${pulse})`,
          boxShadow: `0 0 28px ${C.cyan}55`,
        }}
      >
        نبض
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ color: C.white, fontSize: 26, fontWeight: 800 }}>
          نبض العلاج الطبيعي
        </div>
        <div style={{ color: C.gold, fontSize: 17, letterSpacing: 2 }}>
          WITH MENATALLAH ALMAREMI
        </div>
      </div>
    </div>
  );
};

const Person: React.FC<{ file: string; side?: "left" | "right" }> = ({
  file,
  side = "right",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 65 },
  });
  const float = Math.sin(frame / 17) * 9;

  return (
    <div
      style={{
        position: "absolute",
        bottom: -35,
        [side]: 55,
        width: 570,
        height: 850,
        opacity: entrance,
        transform: `translateY(${(1 - entrance) * 100 + float}px) scale(${0.96 + entrance * 0.04})`,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 55,
          width: 440,
          height: 440,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.cyan}30, transparent 70%)`,
          filter: "blur(18px)",
        }}
      />
      <Img
        src={staticFile(`characters/${file}`)}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "bottom",
          filter: "drop-shadow(0 20px 35px #0008)",
        }}
      />
    </div>
  );
};

const TextBlock: React.FC<{
  scene: (typeof scenes)[number];
  centered?: boolean;
}> = ({ scene, centered = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({
    frame: frame - 8,
    fps,
    config: { damping: 18, stiffness: 75 },
  });
  const opacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: centered ? 160 : 180,
        right: centered ? 160 : 650,
        transform: `translateY(-50%) translateX(${(1 - enter) * -65}px)`,
        opacity,
        textAlign: "right",
        direction: "rtl",
        fontFamily: "Cairo, Tajawal, Tahoma, Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "inline-block",
          color: C.gold,
          fontSize: 21,
          fontWeight: 700,
          letterSpacing: 2,
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
          fontSize: scene.type === "intro" ? 72 : 57,
          fontWeight: 900,
          lineHeight: 1.45,
          textShadow: "0 5px 30px #0008",
          marginBottom: 16,
        }}
      >
        {scene.title}
      </div>

      <div
        style={{
          color: C.cyan,
          fontSize: 35,
          fontWeight: 800,
          lineHeight: 1.55,
          marginBottom: 18,
        }}
      >
        {scene.subtitle}
      </div>

      <div
        style={{
          color: C.muted,
          fontSize: 25,
          fontWeight: 500,
          lineHeight: 1.8,
          maxWidth: 1000,
        }}
      >
        {scene.detail}
      </div>
    </div>
  );
};

const SceneContent: React.FC<{ scene: (typeof scenes)[number] }> = ({
  scene,
}) => {
  if (scene.type === "intro") {
    return (
      <>
        <AbsoluteFill
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div
            style={{
              transform: "scale(1.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 32,
            }}
          >
            <BrandMark />
            <div
              style={{
                color: C.gold,
                fontSize: 24,
                letterSpacing: 8,
                fontWeight: 700,
              }}
            >
              {scene.eyebrow}
            </div>
            <div
              style={{
                color: C.white,
                fontSize: 29,
                fontWeight: 700,
              }}
            >
              {scene.detail}
            </div>
          </div>
        </AbsoluteFill>
      </>
    );
  }

  if (scene.type === "outro") {
    return (
      <>
        <TextBlock scene={scene} centered />
        <div style={{ position: "absolute", bottom: 75, left: 100 }}>
          <BrandMark />
        </div>
      </>
    );
  }

  if (scene.type === "host") {
    return (
      <>
        <Person file={scene.person!} side="left" />
        <TextBlock scene={scene} />
      </>
    );
  }

  if (scene.type === "patient" || scene.type === "doctor") {
    return (
      <>
        <Person file={scene.person!} side="left" />
        <TextBlock scene={scene} />
        <div
          style={{
            position: "absolute",
            top: 75,
            right: 100,
            color: C.gold,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          نبض العلاج الطبيعي
        </div>
      </>
    );
  }

  return (
    <>
      <TextBlock scene={scene} centered />
      {scene.type === "warning" && (
        <div
          style={{
            position: "absolute",
            top: 90,
            left: 120,
            fontSize: 90,
            color: C.gold,
            opacity: 0.8,
            textShadow: `0 0 35px ${C.gold}`,
          }}
        >
          !
        </div>
      )}
      {scene.type === "success" && (
        <div
          style={{
            position: "absolute",
            bottom: 90,
            left: 130,
            display: "flex",
            gap: 18,
          }}
        >
          {["الحركة", "القوة", "التوازن"].map((word) => (
            <div
              key={word}
              style={{
                border: `1px solid ${C.cyan}88`,
                borderRadius: 30,
                padding: "14px 25px",
                color: C.white,
                fontSize: 22,
                background: "#123D6866",
                boxShadow: `0 0 25px ${C.cyan}22`,
              }}
            >
              {word}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export const Episode04: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sceneDuration = 225;
  const index = Math.min(
    Math.floor(frame / sceneDuration),
    scenes.length - 1
  );
  const localFrame = frame % sceneDuration;

  const fadeIn = interpolate(localFrame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    localFrame,
    [sceneDuration - 18, sceneDuration],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  const scene = scenes[index];

  return (
    <AbsoluteFill style={{ backgroundColor: C.navy }}>
      <Background />

      <AbsoluteFill style={{ opacity: fadeIn * fadeOut }}>
        <SceneContent scene={scene} />
      </AbsoluteFill>

      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 70,
          right: 70,
          height: 3,
          background: "#FFFFFF20",
          borderRadius: 5,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${((index + localFrame / sceneDuration) / scenes.length) * 100}%`,
            background: `linear-gradient(90deg, ${C.cyan}, ${C.gold})`,
            boxShadow: `0 0 15px ${C.cyan}`,
            borderRadius: 5,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 48,
          right: 75,
          color: "#FFFFFF99",
          fontSize: 16,
          fontFamily: "Arial, sans-serif",
        }}
      >
        EPISODE 04
      </div>
    </AbsoluteFill>
  );
};
