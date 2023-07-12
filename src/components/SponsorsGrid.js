import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function SponsorsGrid({ sponsorLogos }) {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="-skew-x-12 inline-block px-8 py-1 relative skew-x-10 shadow-md bg-primary-light mb-8">
          <h3 className="skew-x-12 font-primary p-2 text-white drop-shadow-lg capitalize text-2xl">
            We Love Our Sponsors
          </h3>
        </div>
      </div>
      <div className="text-white border border-tertiary-light bg-tertiary p-2 lg:p-4 shadow-lg mx-auto max-w-7xl rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-2 md:gap-4 lg:gap-10 justify-start p-2 lg:p-4 bg-gray-light-1 rounded-lg shadow-md">
          {sponsorLogos.map((image, index) => {
            if (!image.node.logo) return;

            return (
              <div
                key={index}
                className="w-full h-[200px] overflow-hidden flex items-center justify-center p-4 bg-secondary bg-opacity-80  border border-white border-opacity-20 shadow-md rounded-xl"
              >
                <GatsbyImage
                  placeholder="blurred"
                  formats="[AVIF,WEBP]"
                  image={getImage(image.node.logo.localFile)}
                  alt=""
                  key={index}
                  imgStyle={{ objectFit: `contain` }}
                  style={{ height: '100%' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
