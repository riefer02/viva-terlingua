import React from "react";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <div className="navbar flex justify-center items-center">
      <Link to="/" className="navbar__item">
        Home
      </Link>
      <Link to="/page-2" className="navbar__item">
        About
      </Link>
      <div className="navbar__dropdown">
        <div className="dropbtn navbar__item">Explore</div>
        <div className="dropdown-content shadow-lg">
          <div className="mega-menu__row">
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Chili Cook Off</h3>
              <div className="mega-menu__list">
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Music</h3>
              <div className="mega-menu__list">
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Resources</h3>
              <div className="mega-menu__list">
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Sponsors</h3>
              <div className="mega-menu__list">
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
