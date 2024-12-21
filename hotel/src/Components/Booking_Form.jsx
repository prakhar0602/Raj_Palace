import React from 'react';

const Booking_Form = () => {
  return (
    <div className="hidden md:flex h-fit justify-center items-center bg-transparent -mt-28 relative z-30">
      <div className="flex bg-white/80 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">

    

          {/* Check-In Date */}
          <div className="flex flex-col md:flex-row border-r">
            <label className="px-4 py-3 text-gray-600 text-sm font-semibold">Check In</label>
            <input
              type="date"
              className="w-full px-4 py-3 focus:outline-none text-gray-800 bg-transparent"
              defaultValue="2024-12-13"
            />
          </div>

          {/* Check-Out Date */}
          <div className="flex flex-col md:flex-row border-r">
            <label className="px-4 py-3 text-gray-600 text-sm font-semibold">Check Out</label>
            <input
              type="date"
              className="w-full px-4 py-3 focus:outline-none text-gray-800 bg-transparent"
              defaultValue="2024-12-14"
            />
          </div>

          {/* Book Now Button */}
          <div className="flex justify-center items-center">
            <button className="bg-brown-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-brown-600 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking_Form;
