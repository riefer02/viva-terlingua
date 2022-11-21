import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';

export default function Feature({ items }) {
  const features = [...items];
  const mainFeature = features[0];
  features.shift();
  const sideFeatures = features;

  return (
    <div className="feature__container shadow-md">
      {/* Featured Full */}
      <Link to={mainFeature.slug} className="flex w-full xl:w-1/3 mb-20 lg:mb-0 py-4 md:py-0 shadow-md bg-white lg:bg-transparent">
        <BackgroundImage
          className="feature__full w-1/3"
          style={{ minHeight: '400px' }}
          alt="placeholder"
          fluid={mainFeature.image.childImageSharp.fluid}
        >
          <div className="feature__full-banner">
            <h2 className="feature__full-banner-text">
              {mainFeature.calloutText}
              <FontAwesomeIcon size="xs" icon="arrow-right"></FontAwesomeIcon>
            </h2>
          </div>
          <div className="absolute bottom-0 bg-secondary bg-opacity-50 w-full lg:px-4">
            <h3 className="text-5xl md:text-6xl lg:text-5xl pt-10 pb-2 text-white font-secondary">{mainFeature.title}</h3>
            <p className="text-4xl lg:text-3xl leading-[35px] md:leading-[40px] xl:leading-[35px] py-6 px-4 text-white font-primary">
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
              <div className="feature__item hover:bg-primary-light">
                <GatsbyImage
                  image={getImage(image)}
                  placeholder="blurred"
                  alt={title + ' link'}
                  className="feature__item-image"
                  objectPosition="center"
                />
                <div className="feature__item-group">
                  <div className="feature__item-group-details w-full xl:w-2/3 text-left">
                    <h3 className="feature__item-title text-5xl lg:text-4xl md:p-4">
                      {title}
                    </h3>
                    <p className="feature__item-description">{description}</p>
                  </div>
                  <div className="w-full xl:w-1/3 feature__item-action">
                    <button className="feature__item-btn text-4xl lg:text-3xl">
                      {calloutText}{' '}
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
