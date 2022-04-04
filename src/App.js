import React from 'react'
import './App.css';
import Intropage from './comp/Intropage';
import Home from './comp/Home';
import Work from './comp/Work';
import About from './comp/About';
import Contact from './comp/Contact';
import Workdetail from './comp/Workdetail';
import { HashRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Intropage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workdetail/:id" element={<Workdetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
