import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Events from './components/Events';
import RecentEvents from './components/RecentEvents';
import Hackathons from './components/Hackathons';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Team />
      <Events />
      <RecentEvents />
      <Hackathons />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;