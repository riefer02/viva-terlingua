import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export default function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.edges.map((item, index) => {
          console.log(item.node);
        return (
          <a href={item.node.image.publicURL} download key={index} className="image-gallery__item">
            <GatsbyImage image={getImage(item.node.image)} alt="" />
          </a>
        );
      })}
    </div>
  );
}
