import React from "react";
// import { Link } from "gatsby";
import NavBar from "components/NavBar";
import Banner from "components/Banner";

const Header = () => {
  return (
    <header className="shadow-lg">
      <Banner />
      <div className="container mx-auto">
        <p>Terlingua Chili Cook Off</p>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
