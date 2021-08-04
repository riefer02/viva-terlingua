import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function PanelImage({ image }) {
  return (
    <GatsbyImage
      image={image}
      alt="People enjoying themselves in Terlingua"
      className="panel-image my-16 shadow-md"
    />
  );
}
