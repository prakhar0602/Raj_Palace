import React, { useState, useEffect } from 'react';
import Fade from './Fade';

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
      <button 
        className={`
          bg-[#093685] text-white 
          md:w-16 md:h-16 w-14 h-14 rounded-full 
          shadow-lg hover:bg-[#0b162a] 
          transition-all duration-300
          flex items-center justify-center
          ${isFlipping ? 'animate-flip' : ''}
        `}
        onClick={()=>window.open("https://be.synxis.com/?adult=1&arrive=2024-12-13&chain=22402&child=0&currency=USD&depart=2024-12-14&hotel=78522&level=hotel&locale=en-US&productcurrency=USD&rooms=1&src=24C")}
      >
        <p className='text-3xl'>

       <ion-icon name="calendar-outline"></ion-icon>
        </p>
      </button>
    </Fade>
  );
};

export default Button;