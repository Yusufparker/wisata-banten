import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
