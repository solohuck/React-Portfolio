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
                          I've had a passion for problem-solving and creating new things since my days in grade school. 
                          My introduction to the tech world began during my freshman year of high school when I started using FL Studio to create beats in my bedroom. 
                          Throughout high school, I utilized YouTube to enhance my music production skills and eventually successfully auditioned to join IUPUI's music technology program. 
                          However, despite being accepted into the program, after two years, I began to lose faith in my ability to pursue a career in music. 
                          At that point, music was all I knew, so I made the decision to leave IUPUI and take a break from school. 
                          During this break, I became increasingly interested in PC gaming and even started building my own PCs. I was fascinated by the hardware and how all the components worked together. I had found a new passion, but I still needed to figure out how to turn it into a career.
                          This led me to explore coding and web development. I was amazed by the creative possibilities that could be unlocked with just a few lines of code. I started teaching myself HTML, CSS, and JavaScript and eventually made the decision to enroll in a coding bootcamp.
                        </p> 
                        <p className='text__space'> 
                          I attended the Butler Full Stack Bootcamp from August 2022 to February 2023. The bootcamp challenged me with an intense amount of information to absorb in a short time. 
                          After completing the bootcamp, I was able to dedicate more time to the areas that fascinated me the most. 
                          I gradually leaned towards front-end development and UI/UX design, consistently learning and improving my skills in these domains. 
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