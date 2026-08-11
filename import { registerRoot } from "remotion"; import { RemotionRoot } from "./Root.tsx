import React from "react";
import { Composition } from "remotion";
import { Episode01 } from "./episodes/episode01/Episode01";
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Episode01"
      component={Episode01}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
