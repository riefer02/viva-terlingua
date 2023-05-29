import React from 'react';
import { Link } from 'gatsby';
import NavBar from 'components/NavBar';
import Banner from 'components/Banner';
import logo from '../assets/images/oticcc-logo-white-sm.png';

export default function Header() {
  return (
    <header className="shadow-md z-50 w-full top-0 fixed md:relative bg-primary">
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
}
