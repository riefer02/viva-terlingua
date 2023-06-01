import React from 'react';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';

function Card({ item }) {
  // `slug` for internal links, `url` for external links
  const { image, slug, name, url, squareImage } = item.node;
  const cardImage = squareImage ? squareImage.localFile : image.localFile;
  const cardStyles = `p-4 block group max-w-[400px] mx-auto`;
  const cardContentStyles = 'px-8 lg:px-0';
  const cardLinkImgWrapperStyles = `block`;
  const cardGalleryCardImgStyles = 'rounded-t-lg h-[300px] ';
  const cardTextAreaStyles = `bg-primary-light group-hover:bg-secondary transition ease-linear text-white rounded-b-lg px-4`;
  const cardGalleryCardTitleStyles = `text-4xl lg:text-2xl my-4 inline-block px-2`;

  const cardContent = () => (
    <article className={cardContentStyles}>
      <GatsbyImage
        alt="Placeholder"
        className={cardGalleryCardImgStyles}
        image={getImage(cardImage)}
        placeholder="blurred"
      />
      <div className={cardTextAreaStyles}>
        <h2 className={cardGalleryCardTitleStyles}>
          {name}{' '}
          <FontAwesomeIcon
            icon="arrow-right"
            className="relative bottom-1 h-6 lg:h-4"
          ></FontAwesomeIcon>
        </h2>
      </div>
    </article>
  );

  return (
    <div className={cardStyles}>
      {url ? (
        <a className={cardLinkImgWrapperStyles} href={url}>
          {cardContent()}
        </a>
      ) : (
        <Link className={cardLinkImgWrapperStyles} to={slug}>
          {cardContent()}
        </Link>
      )}
    </div>
  );
}

export default function CardGallery({ items }) {
  if (!items) return;

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {items.map((card, index) => (
          <Card key={index} item={card} index={index + 1} />
        ))}
      </div>
    </div>
  );
}
