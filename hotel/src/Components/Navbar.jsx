import React from 'react';
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50 ">
      <nav
        className="container h-[15vh] mx-auto flex items-center justify-center px-14 py-1"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))',
        }}
      >
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          <a href="#destinations" className="hover:text-[#a66b3c] font-semibold transition-opacity text-lg text-white">
            Destinations
          </a>
          <a href="#expeditions" className="hover:text-[#a66b3c] font-semibold transition-opacity text-lg text-white">
            Expeditions
          </a>
          <a href="#experiences" className="hover:text-[#a66b3c] font-semibold transition-opacity text-lg text-white">
            Experiences
          </a>
        </div>

        {/* Horizontal Divider (Left to Logo) */}
        <div className="flex-1 mx-4 h-px bg-white"></div>

        {/* Logo Section */}
        <div className="flex items-center flex-col">
            <img src={logo} className='w-[80px]' alt="" />  
            <p className='text-white font-mono'>The Raj Palace</p>
        </div>

        {/* Horizontal Divider (Logo to Right) */}
        <div className="flex-1 mx-4 h-px bg-white"></div>

        {/* Right Section */}
        <div className="flex items-center space-x-8">
          <a href="#our-story" className="hover:text-[#a66b3c] text-lg font-semibold transition-opacity text-white">
            Our Story
          </a>
          <a href="#room-offers" className="hover:text-[#a66b3c] text-lg font-semibold transition-opacity text-white">
            Room Offers
          </a>
          <a href="#press-room" className="hover:text-[#a66b3c] text-lg font-semibold transition-opacity text-white">
            Press Room
          </a>
        </div>
      </nav>
      <nav
  className="container h-[7vh] mx-auto flex items-center justify-start px-14 py-1"
  style={{
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
  }}
>
  {/* Left Section (Address) */}
  <div className="text-white font-bold text-sm">
    <p>1234 Street Name, City, Country</p>
  </div>

  {/* Divider */}
  <div className="h-full border-l border-white mx-6"></div>

  {/* Right Section (6 Items) */}
  <div className="flex w-full items-center justify-around text-white text-sm">
    <a href="#home" className="hover:opacity-80 font-bold transition-opacity">Home</a>
    <a href="#about" className="hover:opacity-80 font-bold transition-opacity">About Us</a>
    <a href="#services" className="hover:opacity-80 font-bold transition-opacity">Services</a>
    <a href="#portfolio" className="hover:opacity-80 font-bold transition-opacity">Portfolio</a>
    <a href="#blog" className="hover:opacity-80 font-bold transition-opacity">Blog</a>
    <a href="#contact" className="hover:opacity-80 font-bold transition-opacity">Contact</a>
  </div>
</nav>


    </header>
  );
};

export default Navbar;
