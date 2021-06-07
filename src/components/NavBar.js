import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query NavBarQuery {
      allStrapiEvents {
        nodes {
          slug
          title
        }
      }
      allStrapiLocalAttractions {
        nodes {
          name
          url
        }
      }
      allStrapiMusicians {
        nodes {
          slug
          name
        }
      }
      allStrapiSponsors {
        nodes {
          website
          name
        }
      }
    }
  `);

  const events = [...data.allStrapiEvents.nodes];
  const localAttractions = [...data.allStrapiLocalAttractions.nodes];
  const musicians = [...data.allStrapiMusicians.nodes];
  const sponsors = [...data.allStrapiSponsors.nodes];

  return (
    <div className="navbar flex justify-center items-center">
      <Link to="/" className="navbar__item">
        Home
      </Link>
      <Link to="/about" className="navbar__item">
        About
      </Link>
      <Link to="/tickets" className="navbar__item">
        Tickets
      </Link>
      <div className="navbar__dropdown">
        <div className="dropbtn navbar__item">Explore</div>
        <div className="dropdown-content shadow-lg">
          <div className="mega-menu__row">
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Events</h3>
              <div className="mega-menu__list">
                {events.map((event, index) => {
                  return (
                    <Link
                      to={event.slug}
                      key={index}
                      className="mega-menu__item slider-bg"
                    >
                      <span className="slider-text">{event.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Music</h3>
              <div className="mega-menu__list">
                {musicians.map((event, index) => {
                  return (
                    <Link
                      to={event.slug}
                      key={index}
                      className="mega-menu__item slider-bg"
                    >
                      <span className="slider-text">{event.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Local Attractions</h3>
              <div className="mega-menu__list">
                {localAttractions.map((la, index) => {
                  return (
                    <a
                      href={la.url}
                      key={index}
                      className="mega-menu__item slider-bg"
                    >
                      <span className="slider-text">{la.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Sponsors</h3>
              <div className="mega-menu__list">
                {sponsors.map((sponsor, index) => {
                  return (
                    <a
                      href={sponsor.website}
                      key={index}
                      className="mega-menu__item slider-bg"
                    >
                      <span className="slider-text">{sponsor.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
