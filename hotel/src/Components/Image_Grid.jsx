import React, { useState, useEffect } from 'react';
import p1 from '../assets/1.png'
import p2 from '../assets/2.png'
import p3 from '../assets/3.png'
import p4 from '../assets/4.png'
import p5 from '../assets/5.png'
const Image_Grid = () => {
  // List of images
  const images = [
    p1,p2,p3,p4,p5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds delay

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden z-0">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Translate to the current image
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={p1}
            alt={`Slide ${index + 1}`}
            className="w-full h-[90vh] object-cover flex-shrink-0 "
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full z-0 ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Image_Grid;
