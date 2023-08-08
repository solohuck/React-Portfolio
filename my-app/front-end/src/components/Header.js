import React from 'react';
import '../styles/Header.css';

const Header = ({ onContactClick }) => { // Add the onContactClick prop here
  return (
    <header className="header">
      <div className='navbar'>
        <div className="logo_container">
          <h1>SolomonHuckstep<span>.</span><span> _</span></h1>
        </div>
          <ul className="navbar_links">
            <li className='navbar_link'><a href="./">Home</a></li>
            <li className='navbar_link'><a href="#projects">Projects</a></li>
            <button onClick={onContactClick} className='contact_btn'>Contact</button>
          </ul>
        </div>
      <div className="header_hero">
        <div className='hero_container'>
          <h1 className="hero_title">Solomon Huckstep,</h1>
          <h2 className='hero_subtitle'>An aspiring full-stack web developer.</h2>
          <button onClick={onContactClick} className='hero_button'>About Me</button>
        </div>
      </div>
    </header>

  );
};


export default Header;





