import React, { useState } from 'react';

const Collage = ({ images }) => {
  const [loaded, setLoaded] = useState(Array(4).fill(false));

  const handleImageLoad = (index) => {
    setLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const ImageBox = ({ src, index, aspectRatio = "square" }) => {
    const aspectClasses = {
      square: "aspect-square",
      rectangle: "aspect-[4/3]"
    };

    return (
      <div className={`
        relative
        ${aspectClasses[aspectRatio]}
        bg-gray-100
        rounded-lg
        overflow-hidden
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
      `}>
        {!loaded[index] && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-300 rounded-full animate-spin" />
          </div>
        )}
        <img 
          src={src} 
          alt={`Collage ${index + 1}`}
          className={`
            absolute
            inset-0
            w-full 
            h-full
            object-cover
            transition-all
            duration-300
            ${loaded[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
          `}
          onLoad={() => handleImageLoad(index)}
        />
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left column */}
        <div className="grid gap-4">
          {/* Top image */}
          <div className="w-full">
            <ImageBox 
              src={images[0]} 
              index={0}
              aspectRatio="square"
            />
          </div>
          {/* Bottom image */}
          <div className="w-full">
            <ImageBox 
              src={images[3]} 
              index={3}
              aspectRatio="square"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="grid gap-4">
          {/* Top image */}
          <div className="w-full">
            <ImageBox 
              src={images[1]} 
              index={1}
              aspectRatio="square"
            />
          </div>
          {/* Bottom image */}
          <div className="w-full">
            <ImageBox 
              src={images[2]} 
              index={2}
              aspectRatio="square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;