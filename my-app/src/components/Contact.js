import React from 'react';
import '../styles/Contact.css';

const ContactForm = () => {
  return (
    <div className="contact__form">
      <form className='contact__form-form'>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="about__me">
      <div className='about__me-container'>
        <div className='about__me-title'>
          <h2>About Me</h2>
        </div>
        <div className='about__me-text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
            bibendum odio. Nulla facilisi. Proin eget ex volutpat, lacinia elit at,
            tempus quam. Nullam commodo tellus vitae dictum gravida. Fusce facilisis
            in libero nec luctus. Phasellus sit amet congue nibh. Nulla nec dui
            blandit, blandit neque quis, faucibus sem. Donec lacinia a eros vel
            ullamcorper. Aenean euismod diam in justo tristique, eu posuere nulla
            vehicula. Nulla facilisi. Nunc ut euismod ante. Nullam blandit turpis eu
            urna ullamcorper, nec rhoncus dolor rutrum. Duis a dolor vitae mi
            interdum luctus vel vitae dui.
          </p>
        </div>
        <div className='about__me-skills'>
          <h3>Skills</h3>
        </div>
      </div>
    </div>
  );
};

const Contact = ({ onClose }) => {
  return (
    <div className="contact__about-section">
      <button className="close-btn" onClick={onClose}>X</button>
      <div className="contact-about-content">
        <AboutMe />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

  
