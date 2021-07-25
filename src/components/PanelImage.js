import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function PanelImage({ image }) {
  return (
    <GatsbyImage
      image={image}
      alt="Hillside Journey!"
      className="panel-image my-16 shadow-md"
      objectPosition="0% 0%"
    />
  );
}
