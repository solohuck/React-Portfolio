import React from "react";



const Footer = () => {

    return (
    <section className="footer" id="footer">
        <div className="footer__content">
            <div className="footer__container">
                <div className="myname__container">
                    <div className="myname">Solomon Huckstep</div>
                    <p className="my__description">
                    A motivated IT computer operator with a passion for programming, my objective is to secure a position as front-end web Developer
                    </p>
                </div>
                <div className="social__container">
                    <div className="social__title">Social</div>
                    <ul className="social__icon">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/solomon-huckstep-461155232/s">
                            <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="Ram Maheshwari Linkedin Profile"></img>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/solohuck">
                            <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="RammCodes Github Profile"></img>
                        </a>    
                    </ul>
                </div>
            </div>
            
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