import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";

export default function Feature({ items }) {
  return (
    <div className="feature__container shadow-md">
      {/* Featured Full */}
      <BackgroundImage
        className="feature__full w-1/3"
        alt="placeholder"
        fluid={items.marqueeImage.childImageSharp.fluid}
      >
        <div className="feature__full-banner">
          <h2 className="feature__full-banner-text">Featured Banner Title</h2>
        </div>
        <div className="feature__full-description">
          <h3 className="feature__full-title">Feature Full Title</h3>
          <p className="feature__full-description-text">
            Feature Full Description
          </p>
          {/* <div className="feature__full-action">
            <button className="feature__full-btn">Feature Full Action</button>
          </div> */}
        </div>
      </BackgroundImage>
      {/* Featured List */}
      <div className="feature__list w-2/3">
        {/* Featured Item */}
        <div className="feature__item">
          <StaticImage
            src="https://picsum.photos/600/400/?random"
            placeholder="blurred"
            alt="random"
            className="feature__item-image"
          />
          <div className="feature__item-group">
            <div className="feature__item-group-details w-2/3 text-left">
              <h3 className="feature__item-title">Feature Title</h3>
              <p className="feature__item-description">Feature Description</p>
            </div>
            <div className=" w-1/3 feature__item-action">
              <button className="feature__item-btn">Feature Action</button>
            </div>
          </div>
        </div>
        {/* Featured Item */}
        <div className="feature__item">
          <StaticImage
            src="https://picsum.photos/600/400/?random"
            placeholder="blurred"
            alt="random"
            className="feature__item-image"
          />
          <div className="feature__item-group">
            <div className="feature__item-group-details w-2/3 text-left">
              <h3 className="feature__item-title">Feature Title</h3>
              <p className="feature__item-description">Feature Description</p>
            </div>
            <div className=" w-1/3 feature__item-action">
              <button className="feature__item-btn">Feature Action</button>
            </div>
          </div>
        </div>
        {/* Featured Item */}
        <div className="feature__item">
          <StaticImage
            src="https://picsum.photos/600/400/?random"
            placeholder="blurred"
            alt="random"
            className="feature__item-image"
          />
          <div className="feature__item-group">
            <div className=" feature__item-group-details w-2/3 text-left">
              <h3 className="feature__item-title">Feature Title</h3>
              <p className="feature__item-description">Feature Description</p>
            </div>
            <div className=" w-1/3 feature__item-action">
              <button className="feature__item-btn">Feature Action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
