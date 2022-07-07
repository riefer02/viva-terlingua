import React from 'react';
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
    ? getImage(squareImage)
    : getImage(artistImage);

  return (
    <div className="musician__wrapper">
      <div className="musician__container-top shadow-md">
        <GatsbyImage
          className="musician__full"
          image={adaptiveImage}
          alt="Fun exciting scene from Terlingua"
          placeholder="blurred"
        ></GatsbyImage>
        {/* Artist Description */}
        <div className="musician__description">
          <div className="relative">
            <h4 className="musician__set-time">{setTime}</h4>
          </div>
          <p className="p-lead">{description}</p>
          <div className="musician__website">
            <a href={website} target="_blank">
              {website}
            </a>
          </div>
        </div>
        {/* Spotify Player */}
        <div className="musician__spotify-player">
          <iframe
            src={`https://open.spotify.com/embed/artist/${spotifyID}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="artist spotify"
          ></iframe>
        </div>
      </div>
      {/* Music Video */}
      <div className="musician__music-video">
        <iframe
          src={`https://www.youtube.com/embed/${musicVideoID}`}
          title="artist video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
          }}
        ></iframe>
      </div>
    </div>
  );
}
