import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import About from "./pages/About"
import Error from "./pages/Error"
import "../src/css/index.css"
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Logement/:id" element={<Logement/>} />
        <Route path="/About" element={<About/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

