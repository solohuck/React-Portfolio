import React, { useEffect } from "react";
import "../styles/Contact.css";

// create a contact page 
const Contact = () => {
    useEffect(() => {
        const hiddenElement = document.querySelectorAll('.not-show');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('do-show');
            } 
          });
        });
        hiddenElement.forEach((element) => {
          observer.observe(element);
        });
      }, []);
    return (
        <section id="contact" className="contact-hero">
            <div className="contact__left-box">
                <h1 className="contact__title">Contact Me</h1>
            </div>
            <div className="contact__right-box">
                <form className="contact__form not-show">
                    <div className="contact__form-fullname">
                        <div className="contact__form-firstname">
                            <label htmlFor="name" className="contact__form-label">First Name*</label>
                            <input type="text" className="contact__form-input" required />
                        </div>
                        <div className="contact__form-lastname">
                            <label htmlFor="name" className="contact__form-label">Last Name</label>
                            <input type="text" className="contact__form-input"  />
                        </div>
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="email" className="contact__form-label">Email*</label>
                        <input type="email" className="contact__form-email" required />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="message" className="contact__form-label">Message*</label>
                        <textarea className="contact__form-message" required></textarea>
                    </div>
                    <div className="contact__form-group__btn">
                        <button type="submit" className="contact__form-button">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;