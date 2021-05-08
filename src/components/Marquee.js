import React from "react";
import BackgroundImage from "gatsby-background-image";

export default function Marquee({ marquee }) {
  return (
    <div className="marquee__section">
      <div className="marquee__container container mx-auto rounded-lg">
        <BackgroundImage
          className="marquee__body shadow-lg "
          // style={{ backgroundImage: `url(${image})` }}
          fluid={marquee.marqueeImage.childImageSharp.fluid}
          placeholder="blurred"
          style={{
            // Defaults are overwrite-able by setting one or each of the following:
            backgroundSize: "cover",
            backgroundPosition: "0% 0%",
            backgroundRepeat: "",
          }}
        >
         
        </BackgroundImage>
        <div className="marquee__text-area shadow-lg">
            <div className="marquee__header-primary">{marquee.title}</div>
            {/* <div className="marquee__header-secondary">Viva Terlingua!</div> */}
          </div>
      </div>
    </div>
  );
}
