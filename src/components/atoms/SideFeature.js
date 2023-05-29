import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/fontawesome';

export default function SideFeature({ feature }) {
  const { title, description, calloutText, image, slug } = feature;
  return (
    <Link to={slug} className="relative block group">
      <div className="lg:group-hover:bg-primary-light shadow-md pointer-events-none md:pointer-events-auto flex lg:grid grid-cols-10 justify-between bg-white transition ease-linear flex-col lg:flex-row mb-10 lg:mb-0 min-h-[170px]">
        <div className="col-span-2">
        <GatsbyImage
          image={getImage(image)}
          placeholder="blurred"
          alt={title + ' link'}
          className="h-full w-full"
        />
        </div>
        <div className="flex flex-col col-span-8 justify-between px-10 py-5 lg:flex-row lg:group-hover:text-white relative">
          <div className="text-left lg:pr-44">
            <h3 className="text-5xl lg:text-4xl mb-2 pt-4 pb-2 text-left font-secondary underline">
              {title}
            </h3>
            <p className="text-left mb-4 text-3xl leading-[30px] !font-primary">
              {description}
            </p>
          </div>
          <div className="lg:group-hover:translate-x-2 transition ease-liner shadow-sm w-full lg:w-auto px-6 lg:absolute top-4 xl:top-[18px] xl:-right-16 right-6 inline-block bg-primary-light lg:group-hover:bg-secondary text-white py-3 -skew-x-12 hover:bg-secondary">
            <button className="skew-x-12 text-4xl lg:text-2xl">
              {calloutText}{' '}
              <FontAwesomeIcon size="xs" icon="arrow-right"></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
