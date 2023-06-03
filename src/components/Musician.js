import React from 'react';
import Spacer from 'components/Spacer';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Musician({ artist }) {
  const {
    artistImage,
    website,
    setTime,
    description,
    spotifyID,
    musicVideoID,
    squareImage,
  } = artist;

  const adaptiveImage = squareImage
    ? getImage(squareImage.localFile)
    : getImage(artistImage);

  return (
    <div className="">
      <div className="flex flex-col bg-gray-light-1 p-4 rounded-lg font-secondary border-t-5 border-b-5 border-primary-light md:flex-row md:border-none shadow-md">
        <GatsbyImage
          className=" bg-secondary h-100 w-auto order-2 md:order-1 md:h-auto md:w-1/3 rounded-lg"
          image={adaptiveImage}
          alt="Fun exciting scene from Terlingua"
          placeholder="blurred"
        ></GatsbyImage>
        {/* Artist Description */}
        <div className="order-1 flex flex-col justify-center items-center gap-8 w-full h-auto md:order-2 md:w-2/3 md:m-6 md:h-auto">
          <div className="relative">
            <h4 className="font-primary text-3xl relative z-10 inline-block text-left md:text-4xl">
              {setTime}
            </h4>
          </div>
          <p className="px-4 leading-loose">{description}</p>
          <a href={website} target="_blank">
            <div className="font-primary text-4xl text-primary hover:text-primary-light transition relative w-9/10 text-center z-10 cursor-pointer m-auto md:text-2xl lg:w-full">
              {website}
            </div>
          </a>
        </div>
        {/* Spotify Player */}
        {spotifyID ? (
          <div className="order-2 w-1/3 md:order-3 md:h-full">
            <iframe
              src={`https://open.spotify.com/embed/artist/${spotifyID}`}
              width="100%"
              height="200px"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="artist spotify"
            ></iframe>
          </div>
        ) : (
          <div className="order-2 w-1/3"></div>
        )}
      </div>
      <Spacer />
      {/* Music Video */}
      <div className="max-w-4xl mx-auto relative aspect-[16/9]">
        <iframe
          src={`https://www.youtube.com/embed/${musicVideoID}`}
          title="artist video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
