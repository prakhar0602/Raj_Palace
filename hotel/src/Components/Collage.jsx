import React from 'react';

const Collage = ({ sq, img1, img2, img3 }) => {
  return (
    <div className="relative flex flex-col items-center justify-center ">
      {/* Top Square Image */}
      <div className="w-full h-32 overflow-hidden border-white border-4">
        <img
          src={img1}
          alt="Top Square"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Center Square Image */}
      <div className="w-full h-60 overflow-hidden shadow-lg border-white border-4">
        <img
          src={sq}
          alt="Center Image"
          className="object-center w-full h-full"
        />
      </div>

      {/* Bottom Images */}
      <div className="flex w-full justify-center ">
        {/* Bottom-Left Square Image */}
        <div className="w-1/2 h-32 overflow-hidden border-white border-4">
          <img
            src={img2}
            alt="Bottom Left Square"
            className="object-cove w-full h-full"
          />
        </div>

        {/* Bottom-Right Square Image */}
        <div className="w-1/2 h-32 overflow-hidden border-white border-4">
          <img
            src={img3}
            alt="Bottom Right Square"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Collage;
