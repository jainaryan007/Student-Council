import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from './components/homescreen';  // Capitalize correctly
import Team from './components/team';
import ClubDetail from './components/clubdetails';
import FormClosed from './components/formClosed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clubdetails" element={<ClubDetail />} />
        <Route path="/formClosed" element={<FormClosed />} />
      </Routes>
    </Router>
  );
}

export default App;
