import React from 'react';
import { Helmet } from 'react-helmet';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';

export default function SponsorsCarousel({
  content: { header, text, images },
}) {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <div className="text-white bg-primary-light p-8">
        <div className="bg-tertiary-light px-8 py-4 max-w-5xl mx-auto flex items-center flex-col justify-center">
          <div className="bg-white px-4 py-4 shadow-md">
            <div className="-skew-x-12 inline-block px-4 relative skew-x-10 shadow-lg bg-primary-light text-4xl  md:text-5xl lg:text-6xl mb-4">
              <h3 className="skew-x-12 font-primary p-2 capitalize">
                {header}
              </h3>
            </div>
            <p className="text-gray-dark py-4 lg:text-2xl">{text}</p>
          </div>
        </div>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div className="">
              <GatsbyImage
                style={{ height: '200px', width: 'auto' }}
                imgStyle={{ objectFit: 'cover' }}
                placeholder="blurred"
                formats="[AVIF,WEBP]"
                image={getImage(image.node.logo)}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
