import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export default function ImageGallery({ images }) {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="-skew-x-12 inline-block mx-auto text-center px-8 py-1 relative skew-x-10 shadow-md bg-primary-light mb-8">
          <h3 className="skew-x-12 font-primary p-2 text-white drop-shadow-lg capitalize text-2xl">
            Upcoming Cook Offs
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {images.edges.map((item, index) => {
          if (!item.node.image) return;

          return (
            <a
              href={item.node.image.localFile.publicURL}
              download
              key={index}
              className="p-4 w-80 aspect-w-9 aspect-h-11 cursor-pointer lg:w-92 xl:w-100"
            >
              <GatsbyImage image={getImage(item.node.image.localFile)} alt="" />
            </a>
          );
        })}
      </div>
    </>
  );
}
