import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function PanelImage({ image }) {
  if (!image) return;

  return (
    <GatsbyImage
      image={getImage(image.localFile)}
      alt="People enjoying themselves in Terlingua"
      className="md:h-[200px] h-[14vh] lg:h-[400px] rounded-t-lg"
    />
  );
}
