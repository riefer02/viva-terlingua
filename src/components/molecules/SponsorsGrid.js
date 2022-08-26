import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function SponsorsGrid({ sponsorLogos } ) {
  return (
    <div className="">
      <div className="-skew-x-12 inline-block px-8 py-3 relative skew-x-10 shadow-md bg-secondary mb-8">
        <h3 className="skew-x-12 font-primary p-2 text-white drop-shadow-lg capitalize text-5xl">
          We Love Our Sponsors
        </h3>
      </div>
      <div className="text-white border border-tertiary-light bg-white p-8 shadow-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-10 justify-start p-8 bg-primary shadow-md">
          {sponsorLogos.map((image, index) => (
            <div className="w-full h-[200px] overflow-hidden flex items-center justify-center p-4 bg-primary-light  border border-white border-opacity-20 shadow-md rounded-xl">
              <GatsbyImage
                placeholder="blurred"
                formats="[AVIF,WEBP]"
                image={getImage(image.node.logo)}
                alt=""
                key={index}
                imgStyle={{ objectFit: `contain` }}
                style={{ height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
