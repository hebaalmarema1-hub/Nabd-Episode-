import React from "react";
import { Composition } from "remotion";
import { Episode04 } from "./episodes/Episode04";

export const RemotionRoot: React.FC = () => {
  return (
    <>
  <Composition
  id="Episode04"
  component={Episode04}
  durationInFrames={450}
  fps={30}
  width={1920}
  height={1080}
/>
    </>
  );
};
