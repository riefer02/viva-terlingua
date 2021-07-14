import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

export default function Feature({ items }) {
  const features = [...items];
  const mainFeature = features[0];
  features.shift();
  const sideFeatures = features;
  return (
    <div className="feature__container shadow-md">
      {/* Featured Full */}
      <Link to={mainFeature.slug} className="flex w-full xl:w-1/3">
        <BackgroundImage
          className="feature__full w-1/3"
          alt="placeholder"
          fluid={mainFeature.image.childImageSharp.fluid}
        >
          <div className="feature__full-banner">
            <h2 className="feature__full-banner-text">
              {mainFeature.calloutText}
              <FontAwesomeIcon size="xs" icon="arrow-right"></FontAwesomeIcon>
            </h2>
          </div>
          <div className="feature__full-description">
            <h3 className="feature__full-title">{mainFeature.title}</h3>
            <p className="feature__full-description-text">
              {mainFeature.description}
            </p>
          </div>
        </BackgroundImage>
      </Link>
      {/* Featured List */}
      <div className="feature__list w-full xl:w-1/3">
        {/* Featured Item */}
        {sideFeatures.map((feature, index) => {
          const { title, description, calloutText, image, slug } = feature;
          return (
            <Link to={slug} key={index}>
              <div className="feature__item">
                <GatsbyImage
                  image={getImage(image)}
                  placeholder="blurred"
                  alt={title + " link"}
                  className="feature__item-image"
                  objectPosition="center"
                />
                <div className="feature__item-group">
                  <div className="feature__item-group-details w-full xl:w-2/3 text-left">
                    <h3 className="feature__item-title">{title}</h3>
                    <p className="feature__item-description">{description}</p>
                  </div>
                  <div className="w-full xl:w-1/3 feature__item-action">
                    <button className="feature__item-btn">
                      {calloutText}{" "}
                      <FontAwesomeIcon
                        size="xs"
                        icon="arrow-right"
                      ></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
