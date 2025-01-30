import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-10 w-full">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-poppins-bold text-gray-400">The Raj Palace</h2>
          <p className="mt-2 text-gray-400 font-monsterrat tracking-wider">
            Jorawer Singh Gate, Amer Road Jaipur (302002), INDIA
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center space-x-6 mb-8">
          <button onClick={()=>window.open("https://www.youtube.com/@arunpuri511")} className="text-gray-400 hover:text-gray-500">
            <ion-icon name="logo-youtube" size="large"></ion-icon>
          </button>
          <button onClick={()=>window.open("https://www.pinterest.com/therajpalace/")}  className="text-gray-400 hover:text-gray-500">
            <ion-icon name="logo-pinterest" size="large"></ion-icon>
          </button>
          <button onClick={()=>window.open("https://www.instagram.com/therajpalacejaipur/")} className="text-gray-400 hover:text-gray-500">
            <ion-icon name="logo-instagram" size="large"></ion-icon>
          </button>
          <button onClick={()=>window.open(" https://www.facebook.com/therajpalacejaipur")} className="text-gray-400 hover:text-gray-500">
            <ion-icon name="logo-facebook" size="large"></ion-icon>
          </button>
        </div>

        {/* Legal Links Section */}
       
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-6 font-monsterrat-medium tracking-widest">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/awards" className="hover:text-gray-500">Awards</Link>
          <Link to="/contactus" className="hover:text-gray-500">Contact Us</Link>
          <Link to="/workforUs" className="hover:text-gray-500">Work for Us</Link>
          <Link to="/booking" className="hover:text-gray-500" target="_blank">Book Online</Link>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm tracking-widest text-gray-500 font-garamond">
          <p>&copy; {new Date().getFullYear()} The Raj Palace. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
