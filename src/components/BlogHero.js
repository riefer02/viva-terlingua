import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function BlogHero({ image, title }) {
  const imageObj = getImage(image?.localFile.childImageSharp);

  return (
    <div className="rounded-lg overflow-hidden text-center px-2">
      <div className="px-4 py-2 pb-4 w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl !leading-normal">
          {title}
        </h1>
      </div>
      <GatsbyImage
        image={imageObj}
        alt={title}
        placeholder="blurred"
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}
