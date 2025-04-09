
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'; 
// import Header from './components/ServicesCard';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import UseStateHook from './components/Hooks/UseStateHook';
import UseEffect from './components/Hooks/UseEffect';
import FakeApi from './components/Hooks/FakeApi';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/usestate" element={<UseStateHook />} />
        <Route path ="/useeffect" element={<UseEffect/>} />
        <Route path ="/fakeapi" element={<FakeApi/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
