import React from 'react';
import Home from './components/Header';
import About from './components/About';
import Project from './components/Project';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Project />
      {/* <Contact/> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
