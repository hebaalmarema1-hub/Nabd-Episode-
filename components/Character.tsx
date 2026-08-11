import React from "react";
import { Img } from "remotion";
export const Character: React.FC = () => {
  return (
    <Img
      src="/characters/nabd_host.jpeg"
      style={{
        width: 500,
        height: 500,
        objectFit: "contain",
      }}
    />
  );
};
