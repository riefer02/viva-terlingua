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
      <div id="gallery" className="w-full py-8 px-4 md:px-6">
        <Slider {...settings}>
          {cardsData.map(({ node }, index) => {
            const { title, description, publishedAt, tags, heroImage } = node;
            const imagePath = getImage(heroImage.imageMedia.localFile);

            return (
              <Link
                to={`/blog/${slugify(title)}`}
                key={index}
                className="block"
              >
                <div className="px-2 group">
                  <div className="flex flex-col bg-tertiary-light p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[420px]">
                    <div className="bg-gray-100 rounded-lg overflow-hidden flex flex-col justify-between flex-grow">
                      {imagePath && (
                        <GatsbyImage
                          image={imagePath}
                          alt={heroImage.imageAlt || 'Blog Post Image'}
                          className="h-48 w-full object-cover"
                        />
                      )}
                      <div className="p-4 text-left flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="text-lg font-semibold line-clamp-2 mb-2">
                            {title}
                          </h3>
                          <p className="mb-2 text-sm line-clamp-3 text-primary-dark">
                            {description}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-primary-light mb-1">
                            {tags.map((tag) => `#${tag.name}`).join(', ')}
                          </p>
                          <p className="text-xs text-gray-600">
                            {formatDate(publishedAt)}
                          </p>
                        </div>
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
