import React from "react";

export default function NavBar() {
  return (
    <div className="navbar flex justify-center items-center">
      <a href="#home" className="navbar__item">
        Home
      </a>
      <a href="#news" className="navbar__item">
        About
      </a>
      <div className="navbar__dropdown">
        <div className="dropbtn navbar__item">Explore</div>
        <div className="dropdown-content shadow-lg">
          <div className="mega-menu__row">
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Chili Cook Off</h3>
              <div className="mega-menu__list">
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Music</h3>
              <div className="mega-menu__list">
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Resources</h3>
              <div className="mega-menu__list">
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
              </div>
            </div>
            <div className="mega-menu__category">
              <h3 className="mega-menu__category-header">Sponsors</h3>
              <div className="mega-menu__list">
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
                  <span className="slider-text">Link 1</span>
                </a>{" "}
                <a href="#" className="mega-menu__item slider-bg">
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
