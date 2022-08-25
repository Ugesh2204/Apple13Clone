import React from 'react'
import { NavLink } from 'react-router-dom';
function NavigationHeader() {
  return (
    <>

  <nav className="flex justify-between items-center  h-[48px] bg-[#333333] text-white px-[5%]">
    <a href="#" className="" >Link 1</a>
    <a href="#" className="" >Link 2</a>
    <a href="#" className="">Link 3</a>
    <a href="#">Link 4</a>
   </nav>
   <nav className="sticky top-0 bg-blue-600  drop-shadow shadow-blue-600 px-[5%]">
        <NavLink to={'/'}  className="px-4">Home</NavLink>
        <NavLink to={'/about'}  className="px-4">About</NavLink>
        <NavLink to={'/location'}  className="px-4">Locations</NavLink>
    </nav>
   
   
    </>
  )
}

export default NavigationHeader