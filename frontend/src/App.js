import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Clubs from "./components/clubs";
import Scroll from "./components/scroll";
import Gallery from "./components/gallery";
import Mentors from "./components/mentors";
import Footer from "./components/footer"; 
import Team from './components/team';
import Fotogra from './components/fotogra';
import Enigma from './components/enigma';
import Avyaan from './components/avyaan';
import Adaa from './components/adaa';
import Fnf from './components/fnf';
import Khalas from './components/khalas';
import Suhasini from './components/suhasini';
import Atrangi from './components/atrangi';
import Aashayein from './components/aashayein';
import Soch from './components/soch';
import Xananoids from './components/xananoids';
import Moonriders from './components/moonriders';
import Zarurat from './components/zarurat';
import  Form  from './components/form';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/team" element={
          <>
          <Navbar />
          <Team />
          <Footer />
          </>
          } />

        <Route path="/fotogra" element={
          <>
            <Navbar />
            <Fotogra />
            <Footer />
          </>
        } />

          <Route path="/enigma" element={
          <>
            <Navbar />
            <Enigma />
            <Footer />
          </>
        } />
        
          <Route path="/avyaan" element={
          <>
            <Navbar />
            <Avyaan />
            <Footer />
          </>
        } />

          <Route path="/adaa" element={
          <>
            <Navbar />
            <Adaa />
            <Footer />
          </>
        } />

          <Route path="/fnf" element={
          <>
            <Navbar />
            <Fnf />
            <Footer />
          </>
        } />

          <Route path="/khalas" element={
          <>
            <Navbar />
            <Khalas />
            <Footer />
          </>
        } />

          <Route path="/atrangi" element={
          <>
            <Navbar />
            <Atrangi />
            <Footer />
          </>
        } />

          <Route path="/suhasini" element={
          <>
            <Navbar />
            <Suhasini />
            <Footer />
          </>
        } />

          <Route path="/aashayein" element={
          <>
            <Navbar />
            <Aashayein />
            <Footer />
          </>
        } />

          <Route path="/soch" element={
          <>
            <Navbar />
            <Soch />
            <Footer />
          </>
        } />

          <Route path="/xananoids" element={
          <>
            <Navbar />
            <Xananoids />
            <Footer />
          </>
        } />

          <Route path="/moonriders" element={
          <>
            <Navbar />
            <Moonriders />
            <Footer />
          </>
        } />

          <Route path="/zarurat" element={
          <>
            <Navbar />
            <Zarurat />
            <Footer />
          </>
        } />
        <Route path="/form" element={
          <>
            <Navbar />
            <Form />
            {/* <Footer /> */}
          </>
        } />
      </Routes>
   
    </Router>
  );
}

export default App;
