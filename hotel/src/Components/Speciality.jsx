import React from 'react';

const Speciality = ({ heading, imageSrc, description }) => {
  return (
    <div className="w-fit mx-auto">
      <div className="relative group">
        {/* Image */}
        <img
          className="object-cover h-[450px] rounded-lg shadow-lg"
          src={imageSrc}
          alt="Card Image"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <p className="text-white text-center px-4">
            {description}
          </p>
        </div>
      </div>

      {/* Heading Below Image */}
      <h5 className="mt-4 text-xl font-bold text-gray-900 text-center">
        {heading}
      </h5>
    </div>
  );
};

export default Speciality;
