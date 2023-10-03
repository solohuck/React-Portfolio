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
                          I've had a passion for problem-solving and creativity since childhood. 
                          I ventured into tech during high school by teaching myslef how to use FL Studio. 
                          Despite getting into IUPUI's music technology program, I eventually decided to leave, seeking a new direction. 
                        </p>
                        <p className='text__space'> 
                          During a break, I delved into PC gaming and hardware, sparking a new interest. I wanted to learn how video games were made and that's what lead me to coding.
                          I tried some free courses covering full stack web development and I was hooked. I attended a Full Stack coding bootcamp from August 2022 to February 2023. 
                          During the bootcamp I started to lean towards front-end development and UI/UX design. 
                          I'm currently working on several projects to add to my portfolio and am eager to take on freelance opportunities.
                        </p> 
                        <p className='text__space'> 
                          I am now actively seeking job opportunities where I can contribute, learn, and grow. If you have an exciting opportunity that aligns with my skills and experience, please don't hesitate to reach out to me! 
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