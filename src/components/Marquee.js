import React from "react";
import image from "../assets/images/hillside-journey.jpg";

export default function Marquee() {
  return (
    <div className="marquee__section">
      <div className="marquee__container container mx-auto">
        <div
          className="marquee__body shadow-lg"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="marquee__text-area shadow-lg">
            <div className="marquee__header-primary">
              Terlingua Chili Cook Off
            </div>
            {/* <div className="marquee__header-secondary">Viva Terlingua!</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
