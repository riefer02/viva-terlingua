import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const mobileNavLinks = [
    { label: 'Home', slug: '' },
    { label: 'Tickets', slug: 'tickets' },
    { label: 'Music', slug: 'music' },
    { label: 'About', slug: 'about' },
    { label: 'Resources', slug: 'resources' },
    { label: `News & Events`, slug: 'events' },
    { label: 'Local Attractions', slug: 'local-attractions' },
  ];

  const MobileNav = () => {
    return (
      <div className={`mobile-nav ${isOpen ? 'nav--open' : ''}`}>
        <div className="mobile-nav__list">
          {mobileNavLinks.map((navLink, index) => (
            <Link
              key={index}
              to={`/${navLink.slug}`}
              className="mobile-nav__item"
            >
              {navLink.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const Hamburger = () => {
    return (
      <div
        onClick={() => {
          setOpen(!isOpen);
        }}
        id="hamburger"
        role="navigation button"
        className={isOpen ? 'open' : ''}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

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
      allStrapiSponsors(filter: { priority: { eq: 1 } }) {
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

  const desktopNavLinks = [
    { label: 'Home', slug: '' },
    { label: 'Tickets', slug: 'tickets' },
    { label: 'Music', slug: 'music' },
    { label: 'About', slug: 'about' },
    { label: 'Resources', slug: 'resources' },
  ];

  return (
    <nav className="navbar flex justify-center items-center">
      {desktopNavLinks.map((navLink, index) => (
        <Link
          key={index}
          to={`/${navLink.slug}`}
          className="navbar__item nav--desktop"
        >
          {navLink.label}
        </Link>
      ))}
      <div className="navbar__dropdown">
        <div className="dropbtn navbar__item">
          <div className="dropbtn--text">Explore</div>
          <Hamburger />
        </div>
        <div className="dropdown-content shadow-lg">
          <MobileNav />
          <div className="mega-menu__row">
            <div className="mega-menu__category-wrapper">
              <div className="mega-menu__category">
                <h3 className="mega-menu__category-header">
                  <Link to="/events">Events/News</Link>
                </h3>
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
            </div>
            <div className="mega-menu__category-wrapper">
              <div className="mega-menu__category">
                <h3 className="mega-menu__category-header">
                  <Link to="/music">Music</Link>
                </h3>
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
            </div>
            <div className="mega-menu__category-wrapper">
              <div className="mega-menu__category">
                <h3 className="mega-menu__category-header">
                  <Link to="/local-attractions">Local Attractions</Link>
                </h3>
                <div className="mega-menu__list">
                  {localAttractions.map((la, index) => {
                    return (
                      <a
                        href={la.url}
                        key={index}
                        className="mega-menu__item slider-bg"
                        target="_blank"
                      >
                        <span className="slider-text">{la.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mega-menu__category-wrapper">
              <div className="mega-menu__category">
                <h3 className="mega-menu__category-header">Sponsors</h3>
                <div className="mega-menu__list">
                  {sponsors.map((sponsor, index) => {
                    return (
                      <a
                        href={sponsor.website}
                        key={index}
                        className="mega-menu__item slider-bg"
                        target="_blank"
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
    </nav>
  );
}
