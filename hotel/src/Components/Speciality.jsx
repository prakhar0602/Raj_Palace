import React from 'react';

const Speciality = ({ heading, imageSrc, description,height}) => {
  return (
    <div className={`w-fit `}>
      <div className="relative group">
        {/* Image */}
        <img
          className={`object-cover ${height} w-72 md:w-full rounded-lg shadow-lg`}
          src={imageSrc}
          alt="Card Image"
        />

        {/* Hover Overlay */}
        <div className={`absolute inset-0 flex items-center w-72 md:w-full justify-center ${height}  bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 py-4 transition-opacity duration-300 rounded-lg`}>
        <p className="text-white  text-justify h-[100%] md:px-4 px-2 text-[11px] lg:text-[15px] font-poppins flex md:items-center overflow-hidden line-clamp-2">
  {description}
</p>

        </div>
      </div>

      {/* Heading Below Image */}
      <h5 className={`md:mt-4 mt-2 md:text-xl text-md font-poppins-bold text-gray-900 w-72 md:w-full text-center`}>
        {heading}
      </h5>
    </div>
  );
};

export default Speciality;
