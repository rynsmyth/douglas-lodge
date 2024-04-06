import React from 'react';
import { CssBaseline, Container, Box, Typography, styled, useTheme  } from '@mui/material';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Members from './pages/Members';
import NavBar from './components/NavBar';
import Prospects from './pages/Prospects';
import Community from './pages/Community';
import Footer from './components/Footer';
import Cornerstone from './pages/Cornerstone';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);


function AppWrapper() {
  return (
    <HashRouter >
      <App />
    </HashRouter >
  );
}

function App() {
  const theme = useTheme();

  return (
      <><><CssBaseline /><NavBar />
       <Offset />
      <Box sx={{ flexGrow: 1, padding: theme.spacing(3) }}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/history" element={<History />} />
      <Route path="/prospects" element={<Prospects />} />
      <Route path="/community" element={<Community />} />
      <Route path="/members" element={<Members />} />
      <Route path="/cornerstone" element={<Cornerstone />} />
    </Routes>
    </Box>
    </><Footer /></>
  );
}

export default AppWrapper;
