import React from "react";
import { Composition } from "remotion";
import { Episode03 } from "./episodes/episode03/Episode03";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
  id="Episode03"
  component={Episode03}
  durationInFrames={1275}
  fps={30}
  width={1920}
  height={1080}
/>
    </>
  );
};
