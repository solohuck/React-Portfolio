import React from 'react';
import '../styles/Header.css';


const Header = () => {
  
  return (
    <header className="header__cont">
        <div className="header__logo-cont">
          <span className="header__logo">SolomonHuckstep
          <span className='header__logo-dot'>.</span>
          <span className='header__logo-dash'> _</span>
          </span>
        </div>
        <div>
          <ul className="header__items-cont">
            <li className='header__item'><a href="./">Home</a></li>
            <li className='header__item'> <a href="#projects">projects</a></li>
            <li className='header__item'><a href="#contact">Contact</a></li>
          </ul>
        </div>
    </header>
  );
};

export default Header;
