import React, { useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
    useEffect(() => {
        const hiddenElement = document.querySelectorAll('.hide-it');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show-it');
            } 
          });
        });
        hiddenElement.forEach((element) => {
          observer.observe(element);
        });
      }, []);
    return (
        <section className="home">
            <div>
                <h1 className="home__title">Solomon Huckstep,</h1>
                <h2 className='home__subtitle hide-it'>An aspiring full-stack web developer.</h2>
            </div>
        </section>
    );
};

export default Home;