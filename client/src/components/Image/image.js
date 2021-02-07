import React from "react";
import { ImgWrapper, Img } from "./image.elements";

export default function Image({ src, start, alt }) {
  return (
    <ImgWrapper start={start}>
      <Img src={src} alt={alt} />
    </ImgWrapper>
  );
}
