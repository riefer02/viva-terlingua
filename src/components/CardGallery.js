import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function Card({ index }) {
  return (
    <div className="card-gallery__card my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
      <article className="card-gallery__card-content overflow-hidden rounded-lg shadow-md">
        <Link to="/">
          <StaticImage
            alt="Placeholder"
            className="card-gallery__card-image block h-auto w-full"
            src="https://picsum.photos/600/400/?random"
            placeholder="blurred"
            // imgStyle={{ width: "auto", height: `auto` }}
            // style={{ width: "auto", height: `auto` }}
          />
        </Link>
        <div className="card-gallery__card-text-area shadow-md flex items-center justify-between leading-tight p-2 md:p-4">
          <Link className="" to="/">
            <h2 className="card-gallery__card-title">Article Title</h2>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default function CardGallery() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  const cardList = () => {
    return cards.map((card, index) => <Card key={index} index={index + 1} />);
  };

  return (
    <div className="card-gallery__container">
      <div className="card-gallery__content flex flex-wrap">{cardList()}</div>
    </div>
  );
}
