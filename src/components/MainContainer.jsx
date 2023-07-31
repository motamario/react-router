import React from "react";
import '../index.css'
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";
import Green from "./Green";
import Yellow from "./Yellow";

function MainContainer () {
    return (
    <div>
        <Routes>
            <Route path='/'  element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />   
            <Route path="/green" element={<Green />} /> 
            <Route path="/yellow" element={<Yellow />} /> 

        </Routes>
    </div>
  )
}
export default MainContainer;