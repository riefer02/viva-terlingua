import React from 'react';
import { Link } from 'gatsby';
import NavBar from 'components/NavBar';
import Banner from 'components/Banner';
import logo from '../assets/images/oticcc-logo-white-sm.png';

const Header = () => {
  return (
    <header className="header shadow-md">
      <Banner />
      <div className="header__container container mx-auto">
        <Link to="/">
          <div className="flex justify-center align-center">
            <img
              className="header__logo"
              src={logo}
              alt="Tolbert's International Wick Fowler Chili Cook Off"
            />
            <p className="header__site-title">
              The Tolbert Chili Cookoff Group
            </p>
          </div>
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
