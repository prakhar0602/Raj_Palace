// Import React
import React from 'react';

// Define the ImageWithHoverBox component
const Image = ({ src, height, width,extraCSS }) => {
  return (
    <div
      className={`relative group ${width} ${height} overflow-hidden ${extraCSS}`} // Wrapper for positioning and hover effects with overflow hidden
    >
      {/* The image */}
        <img
          src={src} // Display the selected image here
          alt="Image"
          className={`${width} ${height} object-cover rounded-l-lg transition-transform duration-300 group-hover:scale-105`} // Add zoom effect on hover
        />
      {/* Golden box appearing on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-[1px] border-[#ffffff] m-6 z-20" // Transition effect
      ></div>
    </div>
  );
};

export default Image;
