import React from "react";
import { Link } from "gatsby";

export default function NavBar() {
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
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Music</h3>
              <div className="mega-menu__list">
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Local Resources</h3>
              <div className="mega-menu__list">
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Sponsors</h3>
              <div className="mega-menu__list">
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
                <Link to="/" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
