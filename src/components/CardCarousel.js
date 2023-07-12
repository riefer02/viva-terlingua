import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import slugify from '../utils/slugify';

const defaultCards = [
  {
    image: 'https://placehold.co/400',
    link: '/champions/2022',
    alt: 'The 2022 OTICCC Winner',
    cta: '2022 Champions',
  },
  {
    image: 'https://placehold.co/400',
    link: '/memorials/laury-mccullough',
    alt: 'Laury McCullough',
    cta: 'In Memory',
  },
  {
    image: 'https://placehold.co/400',
    link: '/collages/2022',
    alt: '',
    cta: 'Art Collage',
  },
];
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const CardCarousel = ({ cardsData }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Set the duration between slides
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens (lg)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens (md)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small screens (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div id="gallery" className="md:w-full py-8 px-6">
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <Link to={slugify(card.node.title)}>
              <div key={index} className="px-2 group">
                <div className="bg-tertiary-light p-2 rounded-lg">
                  <div className="bg-gray-light-1 rounded-lg">
                    <GatsbyImage
                      image={getImage(card.node.heroImage.localFile)}
                      alt={card.node.title}
                      className="rounded-t-l max-w-[400px] w-full h-0 pb-[100%] relative"
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                    <div className="p-4 px-6 flex flex-col text-left items-center min-h-[86px] justify-start text-gray-dark bg-gray-light-1 w-full group-hover:bg-primary-light group-hover:text-white transition-colors rounded-b">
                      <div className="mb-2 line-clamp-2 min-h-[54px]">{card.node.title}</div>
                      <div className="mb-2 text-sm w-full text-primary-light group-hover:text-white transition">{card.node.author}</div>
                      <div className="text-sm w-full">
                        {formatDate(card.node.publishedAt)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
