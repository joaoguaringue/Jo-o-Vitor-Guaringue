import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans font-light text-brand-dark selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Clients />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;