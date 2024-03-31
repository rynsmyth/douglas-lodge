import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Members from './pages/Members';
import NavBar from './components/NavBar';
import Prospects from './pages/Prospects';
import Community from './pages/Community';



function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {

  return (
      <><NavBar /><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/history" element={<History />} />
      <Route path="/prospects" element={<Prospects />} />
      <Route path="/community" element={<Community />} />
      <Route path="/members" element={<Members />} />
    </Routes></>
  );
}

export default AppWrapper;
