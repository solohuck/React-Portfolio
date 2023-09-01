import React, { useEffect } from 'react';
import '../styles/Header.css';

const Home = () => {
  useEffect(() => {
    // Show menu
    const navToggle = document.getElementById('nav__toggle');
    const navClose = document.getElementById('nav__close');
    const navMenu = document.getElementById('nav__menu');

    // Menu show
    const handleNavToggleClick = () => {
      console.log('toggle');
      navClose.classList.remove('none');
      navToggle.classList.add('none');
      navMenu.classList.remove('header__link-hide')
    };

    // Menu hidden
    const handleNavCloseClick = () => {
      console.log('close');
      navToggle.classList.remove('none');
      navClose.classList.add('none');
      navMenu.classList.add('header__link-hide')
    };

    // Link action
    const handleNavLinkClick = () => {
      navMenu.classList.add('header__link-hide');
      navToggle.classList.remove('none');
      navClose.classList.add('none');
    };

    if (navToggle) {
      navToggle.addEventListener('click', handleNavToggleClick);
    }

    if (navClose) {
      navClose.addEventListener('click', handleNavCloseClick);
    }

    const navLinks = document.querySelectorAll('.header__link');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', handleNavToggleClick);
      }
      if (navClose) {
        navClose.removeEventListener('click', handleNavCloseClick);
      }
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return (
    <section>
      <header className='header'>
        <div className='header__content'>
          <div className='logo__container'>
            <div className='logo__img'>

            </div>
            <span className='name'>Solomon Huckstep</span>
          </div>
          <div className='header__main'>
            <ul className='header__links header__link-hide' id='nav__menu'>
              <li className='header__link-wrapper nav__link' id='nav__link'>
                <a href='./' className='header__link'> Home </a>
              </li>
              <li className='header__link-wrapper'>
                <a href='./#about' className='header__link'> About </a>
              </li>
              <li className='header__link-wrapper'>
                <a href='./#projects' className='header__link'> Projects </a>
              </li>
              <li className='header__link-wrapper'>
                <a href='./#contact' className='header__link'> Contact </a>
              </li>
            </ul>
            <div className='hamburger__menu-content'>
              <img src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg" 
              alt="hamburger menu" id='nav__toggle'></img>
              <img src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg" 
              alt="hamburger menu close" className="none" id='nav__close'></img>
            </div>
          </div>
        </div>
      </header>
      
      <section className='home__hero'>
        <div className='home__content'>
          <h1 className='heading__primary'> Hey, I'm Solomon <br/> Huckstep</h1>
          <div className='home__info'>
            <p className='text__primary'>
            Aspiring Full Stack Web Developer | Eager to Grow, Learn, and Innovate 
            </p>
          </div>
          <div className='home__btn'>
            <a href='./#projects' className='btn'>Projects</a>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Home;





