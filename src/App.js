import './App.css';
import React from 'react';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Clubs from "./components/clubs";
import Scroll from "./components/scroll";
import Gallery from "./components/gallery";
import Mentors from "./components/mentors";
import Footer from "./components/footer";


function App() {
 
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Clubs />
    <Scroll />
    <Gallery />
    <Mentors />
    <Footer />
    </>
  );
}

export default App;
