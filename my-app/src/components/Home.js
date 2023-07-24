import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <section class="home-hero">
            <div class="home-hero__content">
                <h1 class="heading-primary">Welcome.</h1>
                <div class="home-hero__info">
                    <p class="text-primary">
                        Hello, my name is Solomon Huckstep and I am an entry level full stack Web Developer 
                        looking to start my career in web development. 
                    </p>
                </div>
                <div class="home-hero__cta">
                    <a href="./#projects" class="btn btn--bg">projects</a>
                </div>
            </div>
        </section>
    );
};

export default Home;