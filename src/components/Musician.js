import React from "react";
import BackgroundImage from "gatsby-background-image";

export default function Musician({ artist }) {
  const {
    name,
    artistImage,
    website,
    setTime,
    description,
    spotifyID,
    musicVideoID,
  } = artist;

  return (
    <div className="musician__wrapper">
      <div className="musician__container-top shadow-md">
        {/* Musician Image */}
        <BackgroundImage
          className="musician__full w-1/3"
          alt="placeholder"
          fluid={artistImage.childImageSharp.fluid}
        >
          {/* <div className="musician__full-banner">
            <h2 className="musician__full-banner-text">{name}</h2>
          </div> */}
          {/* <div className="musician__full-description">
            <h3 className="musician__full-title">{name}</h3>
            <p className="musician__full-description-text">
              Feature Full Description
            </p>
          </div> */}
        </BackgroundImage>
        {/* <div className="musician__list w-2/3"> */}
        {/* Artist Description */}
        <div className="musician__description w-1/3">
          <div className="relative">
            {/* <h3 className="musician__name">{name}</h3> */}
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
        <div className="musician__spotify-player w-1/3">
          <iframe
            src={`https://open.spotify.com/embed/artist/${spotifyID}`}
            width="100%"
            height="100%"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        {/* </div> */}
      </div>
      {/* Music Video */}
      <div className="musician__music-video">
        <iframe
          src={`https://www.youtube.com/embed/${musicVideoID}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{
            position: "absolute",
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
