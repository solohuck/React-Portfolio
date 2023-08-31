import React, { useState, useRef, useEffect } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
    <section className='contact' id='contact'>
      <div className='contact__content'>
        <div className='contact__title'>Contact</div>
        <p className='contact__description'>
          Feel free to Contact me by submitting the form below 
          and I will get back to you as soon as possible
        </p>
        <div className="form__container">
          <form className='contact__form' ref={form} onSubmit={sendEmail}>
            <div className='contact__label'>
              <h2>Name</h2>
              <input type="text" required placeholder="Enter Your Name" name="from_name" />
            </div>
            <div className='contact__label'>
              <h2>Email</h2>
              <input type="email" required placeholder="Enter Your Email" name="from_email" />
            </div>
            <div className='contact__label input_msg'>
              <h2>Message</h2>
              <textarea name="from_message" required placeholder="Enter Your Message" />
            </div>
            <button type="submit" value="Send" className='submit__btn'>Submit</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;

  
