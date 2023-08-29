import React, { useEffect } from 'react';
import '../styles/Header.css';

const Home = () => {
  useEffect(() => {
    // Show menu
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');

    // Menu show
    const handleNavToggleClick = () => {
      console.log('toggle');
      navMenu.classList.add('show-menu');
    };

    // Menu hidden
    const handleNavCloseClick = () => {
      console.log('close');
      navMenu.classList.remove('show-menu');
    };

    // Link action
    const handleNavLinkClick = () => {
      navMenu.classList.remove('show-menu');
    };

    if (navToggle) {
      navToggle.addEventListener('click', handleNavToggleClick);
    }

    if (navClose) {
      navClose.addEventListener('click', handleNavCloseClick);
    }

    const navLinks = document.querySelectorAll('.nav__link');
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
    <header className='header' id='header'>
      <nav className="nav container">
        <a href="./" className='nav__logo'>
          SH
        </a>

        <div className="nav__menu" id='nav-menu'>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="./" className="nav__link">Home</a>
            </li>

            <li className="nav__item">
              <a href="#Projects" className="nav__link">Projects</a>
            </li>

            <li className="nav__item">
              <a href="#Contacts" className="nav__link">Contact</a>
            </li>

            <li className="nav__item">
              <a href="#Resume" className="nav__link">Resume</a>
            </li>
          </ul>

          {/* close button */}
          <div className='nav__close' id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

          {/* Toggle button */}
          <div className='nav__toggle' id="nav-toggle">
          <i className="ri-menu-line"></i>
          </div>
      </nav>
    </header>
    
    <main className='main'>
        <section className='home'>
          <div className='home__container container'>
            <div className='home__content'>
              <div className='home__data'>
                <h3 className='home__subtitle'>
                  Hello,
                </h3>
                <h1 className='home__title'>
                  I'm Solomon Hucktep
                </h1>
                <p className='home__description'>
                  Front-End Web Developer
                </p>
                <a href='./' className='home__button'>
                  About me
                </a>
              </div>
            </div> 
          </div>
        </section>
      </main>
      
    </section>
  );
};
export default Home;





