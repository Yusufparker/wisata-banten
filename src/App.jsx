import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import About from './Pages/About';
import ProgressBar from './Components/ProgressBar';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ProgressBar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tentang' element={<About/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
