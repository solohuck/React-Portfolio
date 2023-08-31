import React from "react";
import "../styles/Footer.css";


const Footer = () => {

    return (
    <section className="footer" id="footer">
        <div className="footer__content">
            <div className="social__title">Social</div>
            <ul className="social__icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/solomon-huckstep-461155232/s">
                    <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="Ram Maheshwari Linkedin Profile"></img>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/solohuck">
                    <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="RammCodes Github Profile"></img>
                </a>    
            </ul>
            <div className="myname">Solomon Huckstep</div>
            <p className="my__description">
                A Frontend focused Web Developer building the Frontend of Websites 
                and Web Applications that leads to the success of the overall product
            </p>
            <div className="footer__line">
                <div className="copyright">
                    © Copyright 2023. Made by <a href="./" className="name__link">Solomon Huckstep</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Footer;