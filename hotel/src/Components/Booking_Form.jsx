import React, { useState } from "react";
import { Link } from "react-router-dom";

const Booking_Form = () => {
  
const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0]; // Format: YYYY-MM-DD
};
  const [checkInDate, setCheckInDate] = useState(new Date().toISOString().split('T')[0]);
  const [checkOutDate, setCheckOutDate] = useState(getTomorrowDate());


  return (
    <div className="hidden md:flex h-fit justify-center items-center bg-transparent -mt-28 relative z-30">
      <div className="flex bg-white/80 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Check-In Date */}
          <div className="flex flex-col md:flex-row border-r">
            <label className="px-4 py-3 text-gray-600 text-sm font-semibold">
              Check In
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 focus:outline-none text-gray-800 bg-transparent"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>

          {/* Check-Out Date */}
          <div className="flex flex-col md:flex-row border-r">
            <label className="px-4 py-3 text-gray-600 text-sm font-semibold">
              Check Out
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 focus:outline-none text-gray-800 bg-transparent"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>

          {/* Book Now Button */}
          <div className="flex justify-center items-center">
            <Link
              to='/booking'
              target="_blank"
              className="bg-brown-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-brown-600 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking_Form;
