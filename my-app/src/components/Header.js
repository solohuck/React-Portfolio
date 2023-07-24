import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <span className="header__logo-sub">Solomon Huckstep</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./" className="header__link">Home</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link">Projects</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

