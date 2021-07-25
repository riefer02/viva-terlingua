import React from "react";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";

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
  console.log(squareImage);

  const adaptiveImage = squareImage
    ? squareImage.childImageSharp.fluid
    : artistImage.childImageSharp.fluid;

  console.log(adaptiveImage);
  return (
    <div className="musician__wrapper">
      <div className="musician__container-top shadow-md">
        {/* Musician Image */}
        <BackgroundImage
          className="musician__full"
          alt="placeholder"
          fluid={adaptiveImage}
          imgStyle={{ objectFit: "contain" }}
        ></BackgroundImage>

        {/* Artist Description */}
        <div className="musician__description">
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
        <div className="musician__spotify-player">
          <iframe
            src={`https://open.spotify.com/embed/artist/${spotifyID}`}
            width="100%"
            height="100%"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
      {/* Music Video */}
      <div className="musician__music-video">
        <iframe
          src={`https://www.youtube.com/embed/${musicVideoID}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
