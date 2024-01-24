import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import slugify from '../utils/slugify';

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
    slidesToShow: 1,
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
          {cardsData.map(({ node }, index) => {
            const { title, description, publishedAt, tags, heroImage } = node;
            const imagePath = getImage(heroImage.imageMedia.localFile);

            return (
              <Link to={`/blog/${slugify(title)}`} key={index}>
                <div className="px-2 group">
                  <div className="bg-tertiary-light p-2 rounded-lg">
                    <div className="bg-gray-light-1 rounded-lg">
                      {imagePath && (
                        <GatsbyImage
                          image={imagePath}
                          alt={heroImage.imageAlt || 'Blog Post Image'}
                          className="rounded-t-lg max-w-[400px] w-full"
                        />
                      )}
                      <div className="p-4 px-6 flex flex-col text-left items-center min-h-[86px] justify-start text-gray-dark bg-gray-light-1 w-full group-hover:bg-primary-light group-hover:text-white transition-colors rounded-b-lg">
                        <h3 className="mb-2 line-clamp-2 min-h-[54px]">
                          {title}
                        </h3>
                        <p className="mb-2 text-sm w-full text-primary-light group-hover:text-white transition">
                          {tags.map((tag) => tag.name).join(', ')}
                        </p>
                        <p className="text-sm w-full">
                          {formatDate(publishedAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
