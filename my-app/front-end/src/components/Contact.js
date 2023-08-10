import React, { useState, useRef, useEffect } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hcd3rb8', 'template_x13i4dn', form.current, '1EjIkx3tQWk7XRDAp')
      .then((result) => {
          console.log(result.text);
          setSuccessMessage('Message sent successfully!');
          setFormSubmitted(true);

          setTimeout(() => {
            setSuccessMessage(''); // Clear the success message after 5 seconds
          }, 5000);
        
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, Please try again');
      });
  };

  useEffect(() => {
    if (formSubmitted) {
      form.current.reset();
      setFormSubmitted(false); // Reset the formSubmitted state
    }
  }, [formSubmitted]);


  return (
    <div className="contact__form">
      <form className='contact__form-form' ref={form} onSubmit={sendEmail}>
        <div className='contact_label'>
          <h2>Name*</h2>
          <input type="text" name="from_name"  required />
        </div>
        <div className='contact_label'>
        <h2>Email*</h2>
          <input type="email" name="from_email"  required />
        </div>
        <div className='contact_label input_msg'>
        <h2>Message*</h2>
          <textarea name="from_message"  required />
        </div>
        <button type="submit" value="Send" className='btn'>Submit</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
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

  
