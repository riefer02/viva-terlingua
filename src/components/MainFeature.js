import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome.js';

const cardHeaderText = 'text-2xl mb-2 lg:text-3xl text-left font-secondary';
const cardBodyText = 'text-left mb-4 lg:mb-0 md:text-lg lg:text-xl';

export default function MainFeature({ mainFeature }) {
  return (
    <Link
      to={mainFeature.slug}
      className="flex w-full col-span-4 mb-10 lg:mb-0 shadow-md rounded-lg bg-gray-light-1 lg:bg-transparent group relative min-h-[510px] md:min-h-[540px]"
    >
      <div className="absolute top-0 left-0 z-20 h-full w-full">
        <div className="lg:group-hover:bg-secondary hidden w-[60%] top-0 xxl:-left-[30%] transition ease-linear lg:block lg:group-hover:-translate-x-2 lg:group-hover:-skew-x-12 shadow-md bg-primary-light relative mx-auto m-[unset] lg:top-[2%] lg:right-[0%] -skew-x-12">
          <h2 className="skew-x-12 text-white text-lg py-1 text-center">
            {mainFeature.calloutText}
            <FontAwesomeIcon
              size="xs"
              icon="arrow-right"
              className="ml-2"
            ></FontAwesomeIcon>
          </h2>
        </div>
        <div className="absolute py-4 px-6 lg:px-4 lg:py-6 bottom-0 bg-gray-light-1 lg:bg-secondary-dark rounded-b-lg lg:bg-opacity-80 w-full  lg:group-hover:bg-secondary lg:group-hover:bg-opacity-100 transition ease-linear">
          <h3
            className={`lg:text-white lg:text-center underline ${cardHeaderText}`}
          >
            {mainFeature.title}
          </h3>
          <p
            className={`lg:text-white lg:text-center font-primary ${cardBodyText}`}
          >
            {mainFeature.description}
          </p>
          <div className="w-full xl:w-1/3 block lg:hidden bg-primary-light text-center text-white py-1 -skew-x-12 hover:bg-secondary transition ease-linear">
            <button className="skew-x-12 text-lg transition ease-linear">
              {mainFeature.calloutText}{' '}
              <FontAwesomeIcon
                size="xs"
                icon="arrow-right"
                className=""
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-primary z-10 rounded-lg">
        <GatsbyImage
          image={getImage(mainFeature.image.localFile)}
          alt={''}
          className="h-full w-full shadow-lg rounded-lg"
        />
      </div>
    </Link>
  );
}
