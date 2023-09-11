import React  from 'react';
import '../styles/About.css';

const About = () =>{
    return(
        <section>
        <div className='about' id='about'>
            <div className='about__content'>
                <div className='about__title'> About Me </div>
                <div className='about__description'>
                    Here you will find more information about me, what I do, and
                    my current skills mostly in terms of programming and technology
                </div>
                <div className='about__container'>
                    <div className='text__primary-about'>
                        <div className='text__title'> Get to know me! </div>
                        <p className='text__space'> 
                            As a motivated IT computer operator with a passion for programming, my objective is to secure a position as a front-end web Developer. 
                            With a foundation in computer hardware, software, operating systems, and programming, I am eager to expand my knowledge and contribute to the development of innovative front-end web designs. 
                        </p> 
                        <p className='text__space'> 
                            I attended a Full stack Web Developement bootcamp from Aug. 2022 - Feb 2023. After completing the bootcamp I was attracted to Front-end web Development. Check out the source code to my projects in the project section. 
                        </p> 
                        <p className='text__space'> 
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. 
                        </p> 
                        <a href="./#contact"className='contact__btn'>Contact </a>
                    </div>

                    <div className='my__skills'>
                        <div className='skill__title'> My Skills</div>
                        <ul className='skills__content'>
                            <li className='single__skill'>HTML</li>
                            <li className='single__skill'>CSS</li>
                            <li className='single__skill'>JavaScript</li>
                            <li className='single__skill'>React</li>
                            <li className='single__skill'>GIT</li>
                            <li className='single__skill'>Github</li>
                            <li className='single__skill'>Responsive Design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
);
};

export default About;