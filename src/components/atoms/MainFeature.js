import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styles } from '../../utils/styles.js';
import '../../utils/fontawesome';

export default function MainFeature({ mainFeature }) {
  return (
    <Link
      to={mainFeature.slug}
      className="flex w-full col-span-4 mb-10 lg:mb-0 py-4 md:py-0 shadow-md bg-white lg:bg-transparent group relative min-h-[510px] md:min-h-[540px]"
    >
      <div className="absolute top-0 left-0 z-20 h-full w-full">
        <div className="group-hover:bg-secondary hidden w-1/2 top-0 -left-[35%] transition ease-linear lg:block group-hover:-translate-x-2 group-hover:-skew-x-12 shadow-md bg-primary-light relative mx-auto m-[unset] lg:top-[2%] lg:right-[0%] -skew-x-12">
          <h2 className="skew-x-12 text-white text-3xl py-3">
            {mainFeature.calloutText}
            <FontAwesomeIcon size="xs" icon="arrow-right" className="ml-2"></FontAwesomeIcon>
          </h2>
        </div>
        <div className="absolute px-10 lg:px-10 py-10 bottom-0 bg-white lg:bg-secondary-dark lg:bg-opacity-80 w-full  group-hover:bg-tertiary lg:group-hover:bg-opacity-50 transition ease-linear">
          <h3 className={`lg:text-white lg:text-center underline ${styles.cardHeaderText}`}>
            {mainFeature.title}
          </h3>
          <p className={`lg:text-white lg:text-center ${styles.cardBodyText}`}>
            {mainFeature.description}
          </p>
          <div className="w-full xl:w-1/3 block lg:hidden bg-primary-light text-white py-4 -skew-x-12 hover:bg-secondary transition ease-linear">
            <button className="skew-x-12 text-4xl lg:text-3xl transition ease-linear">
              {mainFeature.calloutText}{' '}
              <FontAwesomeIcon size="xs" icon="arrow-right" className=""></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-primary z-10">
        <GatsbyImage
          image={getImage(mainFeature.image)}
          alt={''}
          className="h-full w-full shadow-lg"
        />
      </div>
    </Link>
  );
}
