import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const Episode04: React.FC = () => {
  const frame = useCurrentFrame();

  const BLUE = "#087EA4";
  const CYAN = "#35B6D6";
  const DARK = "#244B57";
  const BG = "#F4FBFD";
  const WHITE = "#FFFFFF";

  return (
    <AbsoluteFill
      style={{
        background: BG,
        overflow: "hidden",
        fontFamily: "Arial, Tahoma, sans-serif",
      }}
    >
      {/* الحلقة الرابعة - سنبدأ بناء المشاهد هنا */}
    </AbsoluteFill>
  );
};
