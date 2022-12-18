import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function PanelImage({ image }) {
  return (
    <div className="lg:pb-8">
      <GatsbyImage
        image={image}
        alt="People enjoying themselves in Terlingua"
        className="md:h-[200px] h-[14vh] lg:h-[400px]"
      />
    </div>
  );
}
