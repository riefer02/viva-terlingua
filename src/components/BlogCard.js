import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from '../utils/slugify';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const BlogCard = ({ blog }) => {
  const { title, description, publishedAt, tags, heroImage } = blog;
  const imagePath = getImage(heroImage.imageMedia.localFile);

  return (
    <Link to={`/blog/${slugify(title)}`} className="block">
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
};

export default BlogCard;
