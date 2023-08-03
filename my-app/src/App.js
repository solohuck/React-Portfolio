import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <div>
      <Header onContactClick={handleContactClick} />
      <Home />
      <Project />
      {showContact && <Contact onClose={() => setShowContact(false)} />}
      <Footer />
    </div>
  );
};

export default App;
