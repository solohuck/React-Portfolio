import React from "react";
import "../styles/Footer.css";


const Footer = () => {

    return (
    <section className="footer" id="footer">
        <div className="footer__content">
            <div className="social__title">Social</div>
            <ul>
                <li className="social__icon"></li>
                <li className="social__icon"></li>
            </ul>
            <div className="myname">Solomon Huckstep</div>
            <p className="my__description">
                A Frontend focused Web Developer building the Frontend of Websites 
                and Web Applications that leads to the success of the overall product
            </p>
            <div className="footer__line">
                <div className="copyright">
                    © Copyright 2023. Made by<a href="./">Solomon Huckstep</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Footer;