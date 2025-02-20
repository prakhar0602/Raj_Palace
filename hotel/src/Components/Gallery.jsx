import React from "react";
import a1 from '../assets/Images/Gallery/1.jpg' 
import a2 from '../assets/Images/Gallery/2.jpg' 
import a3 from '../assets/Images/Gallery/3.jpg' 
import a4 from '../assets/Images/Gallery/4.jpg' 
import a5 from '../assets/Images/Gallery/5.jpg' 
import a6 from '../assets/Images/Gallery/6.jpg' 
import a7 from '../assets/Images/Gallery/7.jpg' 
import a8 from '../assets/Images/Gallery/8.jpg' 
import a9 from '../assets/Images/Gallery/9.jpg' 
import a10 from '../assets/Images/Gallery/10.jpg' 
import Image from './Image'
const Gallery = () => {
  // Placeholder image URLs for the gallery
  const images = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Section Header */}
      <h2 className="md:text-5xl text-2xl font-poppins-bold text-center text-[#001F54] md:mb-14 mb-4 tracking-wider">
      Grandeur Escapes
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(214,174,98,0.4)] border-[1px] border-[#001F54] hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            <Image src={src} height="md:h-64 h-52" extraCSS="hover:opacity-90 transition-opacity duration-500" width="md:w-full w-72" />
            {/* <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full  "
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
