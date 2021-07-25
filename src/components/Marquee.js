import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Sponsors from "components/Sponsors";

export default function Marquee({ marquee }) {
  const image = getImage(marquee.marqueeImage.childImageSharp);
  const activeSub = marquee.subhead ? true : false;

  return (
    <div className="marquee__section">
      <div className="marquee__container container mx-auto">
        <Sponsors />
        <GatsbyImage
          className="marquee__body shadow-lg "
          image={image}
          alt="Fun exciting scene from Terlingua"
          placeholder="blurred"
        ></GatsbyImage>
        <div className="marquee__text-area shadow-lg">
          <div className="marquee__header-primary">{marquee.title}</div>
          {activeSub && (
            <div className="marquee__header-secondary">{marquee.subhead}</div>
          )}
        </div>
      </div>
    </div>
  );
}
