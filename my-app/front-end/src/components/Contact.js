import React, { useState } from 'react';
import '../styles/Contact.css';

const ContactForm = () => {
  return (
    <div className="contact__form">
      <form className='contact__form-form'>
        <div className='contact_label'>
          <h2>Name*</h2>
          <input type="text" name="name"  required />
        </div>
        <div className='contact_label'>
        <h2>Email*</h2>
          <input type="email" name="email"  required />
        </div>
        <div className='contact_label input_msg'>
        <h2>Message*</h2>
          <textarea name="message"  required />
        </div>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="about__me">
      <div className='about__me-container'>
        <div className='about__me-title'>
          <h2>About Me.</h2>
          <h3>interactive front-end developer.</h3>
        </div>
        <div className='about__me-text'>
          <p>
            I'm Riccardo Zanutta, a 22-year-old Italian Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
            I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
            When not working or futzing around with code, I study how to escape from University. Actually for hire.
          </p>
        </div>
        <div className='about__me-skills'>
        </div>
      </div>
    </div>
  );
};


const Contact = ({ onClose }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
    setTimeout(() => {
      onClose();
    }, 1000); // Delay the actual closing for 1 second to allow the animation to complete
  };

  if (isClosed) {
    document.body.classList.remove('no-scroll');
    
  } else {
    document.body.classList.add('no-scroll');
  }

  return (
    <div className={`contact__about-section ${isClosed ? 'closed' : ''}`}>
      {!isClosed && (
        <div className="contact-btn-container">
          <button className="close-btn" onClick={handleClose}>X</button>
        </div>
      )}
      <div className={`contact-about-content ${isClosed ? 'closed' : ''}`}>
        <AboutMe />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

  
