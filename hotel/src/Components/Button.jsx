import React, { useState, useEffect } from 'react';
import Fade from './Fade';
import { Link } from 'react-router-dom';

const Button = () => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    // Set up an interval to trigger flipping every 5 seconds
    const flipInterval = setInterval(() => {
      setIsFlipping(true);
      
      // Remove flipping after 1 second
      const flipTimeout = setTimeout(() => {
        setIsFlipping(false);
      }, 1000);

      // Clean up timeouts to prevent memory leaks
      return () => {
        clearTimeout(flipTimeout);
      };
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(flipInterval);
  }, []);

  return (
    <Fade extraCss="fixed right-4 top-3/4 transform -translate-y-1/2 z-50">
      <Link 
        className={`
          bg-[#093685] text-white 
          md:w-16 md:h-16 w-14 h-14 rounded-full 
          shadow-lg hover:bg-[#0b162a] 
          transition-all duration-300
          flex items-center justify-center
          ${isFlipping ? 'animate-flip' : ''}
        `}
        to="/booking"
        target="_blank"
      >
        <p className='text-3xl'>

       <ion-icon name="calendar-outline"></ion-icon>
        </p>
      </Link>
    </Fade>
  );
};

export default Button;