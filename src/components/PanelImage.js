import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function PanelImage({ image }) {
  return (
    <GatsbyImage
      image={image}
      alt="Hillside Journey!"
      className="image__full-panel my-16 shadow-md"
      objectPosition="0% 0%"
    />
  );
}
