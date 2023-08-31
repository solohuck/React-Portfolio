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
                <div className='text__primary-about'>
                <div className='text__title'> Get to know me! </div>
                    <p className='text__space'> 
                        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. 
                    </p> 
                    <p className='text__space'> 
                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming 
                    </p> 
                    <p className='text__space'> 
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. 
                    </p> 
                    <button className='contact__btn'>Contact </button>
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
        </section>
);
};

export default About;