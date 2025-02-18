import React, { useEffect, useState } from 'react';
import award0 from '../assets/Images/Awards/awards0.jpg';
import award1 from '../assets/Images/Awards/awards1.jpg';
import award2 from '../assets/Images/Awards/awards2.jpg';
import award3 from '../assets/Images/Awards/awards3.jpg';
import award4 from '../assets/Images/Awards/awards4.jpg';
import { setLoading } from '../Redux/CommonVariables';
import { useDispatch } from 'react-redux';

const Awards = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dispatch = useDispatch();

  useEffect(()=>{
const allMedia = document.querySelectorAll('img'); // Select images and videos
        
            if (allMedia.length === 0) {
              setTimeout(()=>dispatch(setLoading(false)),1000);
              return;
            }
        
            let mediaLoaded = 0;
        
            const handleMediaLoad = () => {
              mediaLoaded++;
              console.log("Media Loaded",allMedia.length)
              if (mediaLoaded == allMedia.length) {
                setTimeout(()=>dispatch(setLoading(false)),1000);
              }
            };
            
            allMedia.forEach(mediaElement => {
              if (mediaElement.complete) { // Check if already loaded (for images)
                handleMediaLoad();
              } else if (mediaElement.readyState === 4) { //check if video is loaded
                handleMediaLoad();
              }
              else {
                  mediaElement.onload = handleMediaLoad;
                  mediaElement.onerror = handleMediaLoad; // Handle errors for both
                }
              });
  },[])
  // Images from imported assets
  const images = [award0, award1, award2, award3, award4];

  // Awards list
  const awards = [
    { 
      title: "Rashtriya Rattan Award", 
      year: 1999,
    },
    { 
      title: "International Gold Star Millennium Award", 
      year: 2002,
      location: "Bangkok",
    },
    { 
      title: "The Golden Award for Quality and Business Prestige", 
      year: 2005,
      location: "Geneva, Switzerland",
      description: "Total Quality Satisfaction of Customer, Nominated by American travel agents Association",
    },
    { 
      title: "National Tourism award for the best heritage hotel",
      description: "For earning the highest foreign Exchange",
      year: 2006,
    },
    { 
      title: "32nd International award for Hotel Catering and tourism, 2007", 
      year: 2007,
      location: "Madrid, Spain",
    },
    { 
      title: "India's Best Heritage Hotel (2006, 2007) by National Tourism of India", 
      location: "India",
    },
    { 
      title: "Asia's Leading Suite, Maharajah Pavilion (2010-2016) by World Travel Awards",
    },
    { 
      title: "Asia's Leading Suite: Durbar Mahal (2007-2009) by World Travel Awards",
    },
    { 
      title: "World's Leading Heritage Hotel (2007-2013) by World Travel Awards",
    },
  ];

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Initial dispatch to set loading
    dispatch(setLoading(false));

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen pt-24 lg:pt-44  p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Container for content */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-garamond font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#426cb4] to-[#000f2a] mb-2 sm:mb-4">
            Royal Achievements
          </h1>
          <p className="text-sm sm:text-base md:text-md text-[#8B6F4E] max-w-2xl mx-auto px-4 font-poppins">
            A distinguished collection of global recognitions and pioneering achievements
          </p>
        </header>

        {/* Image Gallery */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(src === activeImage ? null : src)}
              className={`
                relative overflow-hidden rounded-md sm:rounded-lg md:rounded-xl shadow-md cursor-pointer
                transition-all duration-300 ease-in-out
                ${activeImage === src
                  ? 'scale-105 z-10 ring-2 md:ring-4 ring-[#D4AF37]'
                  : 'hover:scale-105'}
              `}
            >
              <img
                src={src}
                alt={`Achievement ${index + 1}`}
                className="w-full h-20 sm:h-24 md:h-36 lg:h-48 xl:h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#365c9d] to-[#000f2a]  p-3 sm:p-4 md:p-6">
            <h2 className="text-lg sm:text-xl md:text-3xl font-poppins-bold text-white text-center">
              Distinguished Awards and Recognitions
            </h2>
          </div>

          <div className="p-3 sm:p-4 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="
                    bg-[#86aaea] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl
                    border border-[#0b1d3c] 
                    hover:shadow-xl 
                    transition-all duration-300 
                    transform hover:-translate-y-2
                    flex flex-col h-full
                  "
                >
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#376bd4] to-[#0b22b8] rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                      <span className="text-white font-bold text-xs sm:text-base md:text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-grow overflow-hidden">
                      <h3 className="text-sm sm:text-base md:text-xl font-poppins text-black truncate">
                        {award.title}
                      </h3>
                      {award.year && (
                        <p className="text-xs sm:text-sm text-[#000000] truncate">
                          {award.year}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    {award.description && (
                      <p className="text-xs sm:text-sm md:text-base font-poppins text-[#000000] italic">
                        {award.description}
                      </p>
                    )}
                    {award.location && (
                      <p className="text-xs sm:text-sm md:text-base text-[#000000] italic">
                        {award.location}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Enlarged Achievement"
            className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Awards;