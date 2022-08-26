import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function SponsorsGrid({ sponsorLogos } ) {
  return (
    <div className="">
      <div className="-skew-x-12 inline-block px-8 py-3 relative skew-x-10 shadow-md bg-primary-light mb-8">
        <h3 className="skew-x-12 font-primary p-2 text-white drop-shadow-lg capitalize text-5xl">
          We Love Our Sponsors
        </h3>
      </div>
      <div className="text-white border border-tertiary-light bg-white p-8 shadow-lg mx-auto">
        <div className="flex flex-wrap items-center gap-10 justify-between p-8 bg-primary-light shadow-md">
          {sponsorLogos.map((image, index) => (
            <div className="w-full md:w-1/4 lg:w-[15%] h-[200px] overflow-hidden flex items-center justify-center p-4">
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
