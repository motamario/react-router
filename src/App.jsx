import React from "react";
import { Routes, Route } from "react-router-dom";
import './index.css'
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Green from "./components/Green";
import Yellow from "./components/Yellow";

function App() {
  return (
    <div id="container">
      <Navbar />

      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/yellow" element={<Yellow />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

