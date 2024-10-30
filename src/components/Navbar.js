import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-lime-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Green<span>Youth</span></h1>
        <div>
          <a href="#home" className="text-white hover:text-white mx-4 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-white mx-4 transition duration-300">About</a>
          <a href="#inspiratif" className="text-white hover:text-white mx-4 transition duration-300">Inspiratif</a>
          <a href="#greenyouth" className="text-white hover:text-white mx-4 transition duration-300">GreenYouth</a>
          <a href="#contact" className="text-white hover:text-white mx-4 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
