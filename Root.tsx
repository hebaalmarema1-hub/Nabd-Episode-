import React from "react";
import { Composition } from "remotion";
import { Intro } from "./components/Intro";
import { Episode01 } from "./episodes/episode01/Episode01";
import { Episode02 } from "./episodes/episode02/Episode02";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="NabdIntro"
        component={Intro}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="Episode01"
        component={Episode01}
        durationInFrames={4260}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="Episode02"
        component={Episode02}
        durationInFrames={6930}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

