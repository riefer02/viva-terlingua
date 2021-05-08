import React from "react";
// import { Link } from "gatsby";
import NavBar from "components/NavBar";
import Banner from "components/Banner";

const Header = () => {
  return (
    <header className="shadow-md">
      <Banner />
      <div className="header__container container mx-auto">
        <p className="header__site-title">Terlingua Chili Cook Off</p>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
