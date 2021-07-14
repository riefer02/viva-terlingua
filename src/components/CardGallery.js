import React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

function Card({ item, index }) {
  // `slug` for internal links, `url` for external links
  const { image, slug, name, url } = item.node;

  if (url) {
    return (
      <div className="card-gallery__card my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
        <article className="card-gallery__card-content overflow-hidden rounded-lg shadow-md">
          <a href={url}>
            <GatsbyImage
              alt="Placeholder"
              className="card-gallery__card-image block h-auhref w-full"
              image={getImage(image)}
              placeholder="blurred"
            />
          </a>
          <div className="card-gallery__card-text-area shadow-md flex items-center justify-between leading-tight p-2 md:p-4">
            <a className="card-gallery__card-link" href={url}>
              <h2 className="card-gallery__card-title">{name}</h2>
            </a>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="card-gallery__card my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
      <article className="card-gallery__card-content overflow-hidden rounded-lg shadow-md">
        <Link to={slug}>
          <GatsbyImage
            alt="Placeholder"
            className="card-gallery__card-image block h-auto w-full"
            image={getImage(image)}
            placeholder="blurred"
          />
        </Link>
        <div className="card-gallery__card-text-area shadow-md flex items-center justify-between leading-tight p-2 md:p-4">
          <Link className="card-gallery__card-link" to={slug}>
            <h2 className="card-gallery__card-title">{name}</h2>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default function CardGallery({ items }) {
  let cards;
  if (!items) {
    cards = [1, 2, 3, 4, 5, 6, 7, 8];
  } else {
    cards = items;
  }

  const cardList = () => {
    return cards.map((card, index) => (
      <Card key={index} item={card} index={index + 1} />
    ));
  };

  return (
    <div className="card-gallery__container">
      <div className="card-gallery__content flex flex-wrap">{cardList()}</div>
    </div>
  );
}
