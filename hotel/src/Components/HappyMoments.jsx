import React, { useState, useRef, useEffect } from 'react';
import img1 from "../assets/Images/Happy Moments/1.jpg"
import img2 from "../assets/Images/Happy Moments/2.jpg"
import img3 from "../assets/Images/Happy Moments/3.jpg"
import img4 from "../assets/Images/Happy Moments/4.jpg"
import img5 from "../assets/Images/Happy Moments/5.jpg"
import img6 from "../assets/Images/Happy Moments/6.jpg"
import img7 from "../assets/Images/Happy Moments/7.jpg"
import img8 from "../assets/Images/Happy Moments/8.jpg"
import img9 from "../assets/Images/Happy Moments/9.jpg"
import imgsq1 from "../assets/Images/Happy Moments/sq1.jpg"
import imgsq2 from "../assets/Images/Happy Moments/sq2.jpg"
import imgsq3 from "../assets/Images/Happy Moments/sq3.jpg"
import spiral from '../assets/Images/Happy Moments/separator.png'
import below from '../assets/Images/Happy Moments/below.png'
import Collage from './Collage';
import RightEnter from './RightEnter';
import Fade from './Fade';
import LeftEnter from './LeftEnter';
const HappyMoments = () => {
  const leftScrollRef = useRef(null);
  const rightScrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const images=[
    [img2,imgsq1,img3,img1
  ],
    [img5,imgsq2,img6,img4],
    [
      img8,imgsq3,img9,img7,
    ],
  ]
  const handleLeftScroll = () => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    if (leftScrollRef.current && rightScrollRef.current) {
      rightScrollRef.current.scrollTop = leftScrollRef.current.scrollTop;
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  };

  const handleRightScroll = () => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    if (leftScrollRef.current && rightScrollRef.current) {
      leftScrollRef.current.scrollTop = rightScrollRef.current.scrollTop;
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  };

  return (
    <div className="flex flex-col md:flex-row h-full w-full justify-center gap-3 md:gap-0 items-center">
      {/* Left Side - Fixed Heading */}
      <div 
        ref={leftScrollRef}
        onScroll={handleLeftScroll}
        className="w-2/3 text-[#001F54]  flex flex-col items-center justify-center relative"
      >
        <LeftEnter extraCss="sticky top-0 flex flex-col justify-center items-center text-center transform  whitespace-nowrapp-5  ">
          <img src={below} className='md:w-full w-[70%] z-20' alt="" />
          <h1 className=" z-30 md:text-4xl text-2xl font-garamond font-bold text-center text-[#001F54]  tracking-wider ">
            Perfect Moments
          </h1>
        </LeftEnter>
      </div>

        <Fade extraCss=' flex flex-col md:-ml-[150px]  w-[80%] md:w-fit md:rotate-90 justify-center items-center'>
            <img src={spiral} className="" alt="" />
      </Fade>

      {/* Right Side - Scrollable Content */}
      <div 
        ref={rightScrollRef}
        onScroll={handleRightScroll}
        className="w-full md:-ml-[150px] md:h-[80%] h-[60%] overflow-y-auto scrollbar-thin scrollbar-thumb-black"
      >
        <RightEnter extraCss="w-full  md:flex flex-col h-full gap-14 mx-auto">
          {images.map((image,index) => (
              <Collage images={image} />
          ))}
        </RightEnter>
      </div>
    </div>
  );
};

export default HappyMoments;