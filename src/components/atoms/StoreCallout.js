import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function StoreCallout({ image }) {
  return (
    <a
      href="https://shop.gandyink.com/oticcc22"
      target="_blank"
      className="block my-10 px-8"
    >
      <div className="relative inline-block shadow-md group">
        <div className="-skew-x-12 inline-block px-8 py-3 skew-x-10 shadow-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 text-5xl bg-primary-light group-hover:bg-secondary text-white transition ease-linear pointer-events-none">
          <div className="skew-x-12">Visit Store</div>
        </div>
        <GatsbyImage
          image={getImage(image)}
          alt="terlingua cook off store ad"
        />
      </div>
    </a>
  );
}
