import React from 'react';
import gif from "../assets/Images/logos/logo.gif";

const LoadingPage = () => {
  return (
    <div className="fixed w-screen h-screen flex items-center justify-center overflow-hidden bg-[#e0f0ff] text-[#1A1A2E] z-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,26,46,0.2)_0%,_rgba(0,0,0,0)_70%)]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-6 p-2 border-4 border-double border-[#1A1A2E] rounded-full animate-pulse shadow-[0_0_40px_rgba(26,26,46,0.5)]">
          <img
            src={gif}
            alt="Loading..."
            className="w-[20vh] h-[20vh] sm:w-[25vh] sm:h-[25vh] rounded-full object-cover"
          />
        </div>

        <div className="relative">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-wide text-[#1A1A2E] drop-shadow-[0_4px_3px_rgba(26,26,46,0.3)]">
            Loading
          </h2>
          <div className="absolute bottom-[-10px] left-0 right-0 h-1 bg-[#1A1A2E] rounded-full animate-pulse"></div>
        </div>

        <div className="mt-4 text-lg sm:text-xl text-black font-medium tracking-widest opacity-80">
          Preparing your royal experience...
        </div>
      </div>

      {/* Decorative Royal Elements */}
      <div className="absolute top-10 left-10 w-10 h-10 sm:w-20 sm:h-20 bg-[radial-gradient(ellipse_at_center,_rgba(26,26,46,0.2)_0%,_rgba(0,0,0,0)_70%)] rounded-full opacity-50 animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 sm:w-16 sm:h-16 bg-[radial-gradient(ellipse_at_center,_rgba(26,26,46,0.2)_0%,_rgba(0,0,0,0)_70%)] rounded-full opacity-50 animate-spin-slow"></div>
    </div>
  );
};

export default LoadingPage;
