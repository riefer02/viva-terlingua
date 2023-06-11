import React, { useState, useRef, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useSpring, animated } from '@react-spring/web';
import Hamburger from './Hamburger';

const desktopNavLinks = [
  { label: 'Home', slug: '' },
  { label: 'Tickets', slug: 'tickets' },
  { label: 'Music', slug: 'music' },
  { label: 'About', slug: 'about' },
  { label: 'Resources', slug: 'resources' },
];

const mobileNavLinks = [
  { label: 'Home', slug: '' },
  { label: 'Tickets', slug: 'tickets' },
  { label: 'Music', slug: 'music' },
  { label: 'About', slug: 'about' },
  { label: 'Resources', slug: 'resources' },
  { label: `News & Events`, slug: 'events' },
  { label: 'Local Attractions', slug: 'local-attractions' },
];

export default function NavBar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [megaMenuActive, setMegaMenuActive] = useState(false);

  const data = useStaticQuery(graphql`
    query NavBarQuery {
      allStrapiEvent {
        nodes {
          slug
          title
        }
      }
      allStrapiLocalAttraction {
        nodes {
          name
          url
        }
      }
      allStrapiMusician(filter: { year: { eq: 2023 } }) {
        nodes {
          slug
          name
        }
      }
      allStrapiSponsor(sort: { fields: priority, order: ASC }, limit: 8) {
        nodes {
          website
          name
        }
      }
    }
  `);

  const menuItems = {
    'Events/News': { items: [...data.allStrapiEvent.nodes], path: '/events' },
    Music: { items: [...data.allStrapiMusician.nodes], path: '/music' },
    'Local Attractions': {
      items: [...data.allStrapiLocalAttraction.nodes],
      path: '/local-attractions',
    },
    Sponsors: { items: [...data.allStrapiSponsor.nodes], path: '' },
  };

  const [props, api] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    if (megaMenuActive) {
      api.start({ opacity: 1 });
    } else {
      api.start({ opacity: 0 });
    }
  }, [megaMenuActive, api]);

  useEffect(() => {
    if (mobileNavActive) {
      api.start({ opacity: 1 });
    } else {
      api.start({ opacity: 0 });
    }
  }, [mobileNavActive, api]);

  const handleToggleMenu = () => {
    setMegaMenuActive((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-center items-center overflow-hidden">
      <div className="hidden lg:flex justify-center items-center gap-6">
        {desktopNavLinks.map((navLink, index) => (
          <Link
            key={index}
            to={`/${navLink.slug}`}
            className="items-center h-full md:text-lg text-center transition-all md:py-4 hover:underline"
          >
            {navLink.label}
          </Link>
        ))}

        <div
          id="dropdown-btn"
          onClick={handleToggleMenu}
          className="h-full min-w-[93px] text-center cursor-pointer transition group px-4 py-1 rounded-xl bg-gray-light-1 text-primary hover:text-white hover:bg-secondary"
          aria-expanded={megaMenuActive}
          aria-haspopup="true"
          aria-label={megaMenuActive ? 'Close menu' : 'Open menu'}
        >
          {megaMenuActive ? 'Close' : 'Explore'}
        </div>
        <animated.div style={props}>
          <div
            className={`${
              !megaMenuActive ? 'pointer-events-none' : ''
            } min-w-[100%] absolute top-[110px] z-50 text-gray-dark left-0 py-2 pb-4 px-4 group-hover:border-tertiary-light shadow-md overflow-hidden transition bg-tertiary-light hidden border-none md:block`}
          >
            {Object.keys(menuItems).map((category, index) => (
              <div
                key={index}
                className="md:w-[25%] w-full h-full float-left bg-tertiary-light"
              >
                <h3 className="relative border-b mb-2 lg:text-lg font-secondary border-primary-light">
                  <Link to={menuItems[category].path}>
                    <span className="hover:text-primary transition">
                      {category}
                    </span>
                  </Link>
                </h3>
                <div className="flex gap-2 flex-col flex-wrap basis-[50%]">
                  {menuItems[category].items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.slug || item.website || item.url}
                      className="font-primary block slider-bg cursor-pointer -ml-2"
                      target={item.website ? '_blank' : '_self'}
                    >
                      <div className="slider-bg ">
                        <span className="slider-text px-2">
                          {item.title || item.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </animated.div>
      </div>
      {mobileNavActive && <MobileNav mobileNavActive={mobileNavActive} />}
      <Hamburger
        mobileNavActive={mobileNavActive}
        setMobileNavActive={setMobileNavActive}
      />
    </nav>
  );
}

const MobileNav = ({ mobileNavActive }) => {
  return (
    <div
      className={`${
        mobileNavActive ? 'fixed' : 'hidden'
      } top-[64px] sm:top-[114px] left-0 w-[100vw] h-[calc(100vh-64px)] bg-primary bg-opacity-100`}
    >
      <ul
        className={
          'h-full flex flex-col p-4 py-8 gap-8 items-center justify-start uppercase'
        }
      >
        {mobileNavLinks.map((navLink, index) => (
          <Link to={`/${navLink.slug}`} className="">
            <li
              key={index}
              className="text-xl text-gray-light-1 bg-secondary min-w-[240px] px-2 py-2 rounded-lg shadow text-center"
            >
              {navLink.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
