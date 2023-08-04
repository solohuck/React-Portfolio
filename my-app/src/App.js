import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
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
      <Project />
      {showContact && <Contact onClose={() => setShowContact(false)} />}
      <Footer />
    </div>
  );
};

export default App;
