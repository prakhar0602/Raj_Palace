import React, { useEffect, useState, useRef } from 'react';
import Image_Grid from '../Components/Image_Grid';
import Booking_Form from '../Components/Booking_Form';
import Speciality from '../Components/Speciality';
import { useDispatch } from 'react-redux';
import { setLoading } from '../Redux/CommonVariables';
import HappyMoments from '../Components/HappyMoments';
import Gallery from '../Components/Gallery';
import {images,specialties} from '../Data_Files/Specialities.js';
import Button from '../Components/Button';
import video from '../assets/video.mp4';

// Fade in on scroll component
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
          }, delay);
          observer.unobserve(domRef.current);
        }
      });
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out w-full h-full flex justify-center items-center
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  let dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(setLoading(false));
    setVisible(true);
  }, []);

  return (
    <div className={`transition-opacity ease-in duration-500 opacity-100 text-[#2C3E50] w-full flex flex-col justify-center items-center box-content`}>
      {/* Video section doesn't need fade as it's at the top */}
      <video src={video} autoPlay={true} playsInline loop={true} muted={true} className="w-full h-auto md:h-[90vh] object-cover flex-shrink-0" />
      <div className='relative w-full h-auto md:-mt-[90vh] md:h-[90vh] object-cover flex-shrink-0 bg-black/40'></div>

      <FadeInSection>
        <Booking_Form />
      </FadeInSection>

      <FadeInSection delay={200}>
        <div className="container md:px-16 md:mt-24 px-5 mt-5">
          <div className="bg-[#cdcdcd] shadow-lg rounded-xl">
            <div className="md:p-8 p-4 text-center">
              <h1 className="text-xl md:text-4xl font-poppins-bold text-[#001F54] md:mb-6 mb-3 tracking-wide">
                Experience The Royal Living with The Raj Palace
              </h1>
              <div className="md:max-w-4xl max-w-2xl mx-auto md:space-y-4 space-y-2">
                <p className="text-sm lg:text-lg xl:text-xl text-[#000] font-poppins leading-relaxed tracking-wider">
                  Located in the heart of Jaipur, The Raj Palace is an imposing palace hotel that will leave you spellbound. Originally called 'The Chaumoo Haveli', this architectural marvel was built in 1727 and named after the last ruler of Chaumoo, Thakur Raj Singh.
                </p>
                <p className="hidden md:block text-base lg:text-lg xl:text-xl text-[#000] font-poppins leading-relaxed tracking-wider">
                  Transformed into a luxurious palace hotel by Princess Jayendra Kumari in 1996, it retains its historical splendor with artifacts from a bygone era. Recognized by Conde Nast Traveler and Travel & Leisure, The Raj Palace offers unparalleled extravagance.
                </p>
                <p className="hidden md:block text-base lg:text-lg xl:text-xl text-[#000] font-poppins leading-relaxed tracking-wider">
                  Upon arrival, guests are warmly welcomed with marigold garlands, soulful music, and a refreshing welcome drink. Relax on our exquisite jhoola (swing seating) in the courtyard and immerse yourself in a royal experience like no other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={400}>
        <div className="w-full flex flex-col justify-center md:gap-5 gap-2 items-center md:mt-16 mt-10">
          <h2 className="md:text-5xl text-3xl font-poppins-bold text-center text-[#001F54] md:mb-14 tracking-wider">
            Our Specialities
          </h2>
          <div className="h-fit flex justify-center w-full">
            <div className="flex md:gap-14 gap-7 w-[95%] md:p-5 p-2 overflow-x-scroll scrollbar-thin scrollbar-thumb-purple-950 scrollbar-track-gray-100">
              {specialties.map((specialty, index) => (
                  <div className="w-[fit] flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
                    <Speciality
                      heading={specialty.heading}
                      imageSrc={specialty.imageSrc}
                      description={specialty.description}
                      height="md:h-[350px] h-[200px]"
                    />
                  </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={600}>
        <div className='container md:w-[80%] w-[90%] h-[90vh]'>
          <HappyMoments />
        </div>
      </FadeInSection>

      <FadeInSection delay={700}>
        <div className='container md:my-14 my-5'>
          <Gallery />
        </div>
      </FadeInSection>

      <FadeInSection delay={800}>
        <Button />
      </FadeInSection>
    </div>
  );
};

export default Home;