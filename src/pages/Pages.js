// import React from 'react'
import Home from './Home';
import About from './About';
import Location from './Location';

import {Route, Routes, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

function Pages() {

//   let navigate = useNavigate();
  
//   useEffect(() => {
//     navigate("/");
//   }, [])


  return (
  <div> 
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/location" element={<Location/>}/>
  </Routes>
  </div>
  )
}

export default Pages