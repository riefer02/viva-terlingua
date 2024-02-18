import React from 'react';
import Slider from 'react-slick';
import BlogCard from './BlogCard';

const CardCarousel = ({ cardsData }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div id="gallery" className="w-full py-8 px-4 md:px-6">
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <BlogCard key={index} blog={card.node} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
