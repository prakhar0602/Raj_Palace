import React, { useEffect, useState } from "react";
import main from "../../assets/Images/Wedding/Main.jpg";
import main2 from "../../assets/Images/Wedding/main2.jpg";
import main3 from "../../assets/Images/Wedding/main3.jpg";
import main4 from "../../assets/Images/Wedding/main4.jpg";

import g1 from "../../assets/Images/Wedding/g1.jpg";
import g2 from "../../assets/Images/Wedding/g2.jpg";
import g3 from "../../assets/Images/Wedding/g3.jpg";
import g4 from "../../assets/Images/Wedding/g4.jpg";
import g5 from "../../assets/Images/Wedding/g5.jpg";
import g6 from "../../assets/Images/Wedding/g6.jpg";

import p1 from "../../assets/Images/Wedding/p1.jpg";
import p2 from "../../assets/Images/Wedding/p2.jpg";

import w1 from "../../assets/Images/Wedding/w1.jpg"
import w2 from "../../assets/Images/Wedding/w2.jpeg"
import w3 from "../../assets/Images/Wedding/w3.jpg"
import w4 from "../../assets/Images/Wedding/w4.jpg"

import Image from "../../Components/Image";
import { setLoading } from "../../Redux/CommonVariables";
import { useDispatch } from "react-redux";
import LeftEnter from "../../Components/LeftEnter";
import RightEnter from "../../Components/RightEnter";
import Fade from "../../Components/Fade";

const Wedding = () => {
  let images = [main, main2, main3, main4];
  let gallery = [[g1, g2, g3], [g4, g5, g6]];
  const [selectedImage, setImage] = useState(images[0]);
  const [i_index,setI] = useState(0)

  const weddingImage=[
    {
        image:w1,
        name:"Anish & Rijuta’s Wedding"
    },
    {
        image:w2,
        name:"Shambhavi’s Wedding"
    },
    {
        image:w3,
        name:"Sonia & Aaron's Wedding"
    },
    {
        image:w4,
        name:"Radhika & Rahul Wedding"
    }
  ]

  const dispatch = useDispatch()
  useEffect(()=>{
    const interval = setInterval(() => {
      // Move to the next image
      setI((i_index + 1) % images.length);
      setImage(images[(i_index + 1) % images.length])
    }, 5000);
    
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
    
    return ()=>{clearInterval(interval)};
  },[selectedImage])
  return (
    <div className="flex flex-col w-full min-h-screen pb-10 bg-[#ffc0c0]">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row h-fit lg:h-[85vh] gap-0 justify-start">
        <LeftEnter extraCss="w-fit flex relative">
          <div className="w-fit h-full flex flex-col">
            <img 
              src={selectedImage} 
              className="h-full min-w-[55vw] object-cover transition-all duration-500" 
              alt="Wedding venue" 
            />
            <div className="h-[15vh] w-full bg-gradient-to-b from-transparent via-[#ffc0c0]/80 to-[#ffc0c0] absolute bottom-0"></div>
          </div>
          <div className="h-full bg-gradient-to-r from-transparent via-[#ffc0c0]/90 to-[#ffc0c0] w-[20vw] absolute right-0"></div>
        </LeftEnter>

        <RightEnter extraCss="bg-[#ffc0c0] h-full w-full px-12 tracking-widest justify-center lg:justify-start lg:gap-14 items-center lg:items-start flex flex-col">
        <div className="lg:hidden mt-8 grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setImage(img)}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`Wedding ${index + 1}`}
                  className={`h-20 w-24 object-cover transition-all duration-300 rounded-lg`}
                />
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-[90%] h-fit mt-8 lg:mt-20">
            <p className="font-poppins tracking-wider text-xs text-justify lg:text-sm text-[#c90b7d] uppercase">
              -Designing the Day of your Dreams
            </p>
            <h1 className="text-2xl lg:text-5xl font-medium font-garamond leading-tight">
              We Make Dream Weddings a Beautiful Reality
            </h1>
            <p className="font-poppins text-justify tracking-wide text-base text-gray-800 leading-relaxed max-w-2xl">
              Step into a world of sophistication and romance as we transform our exquisite spaces into the wedding venue of your dreams. With state-of-the-art amenities, exceptional culinary delights, and unparalleled service, our hotel ensures that your big day is nothing short of perfection.
            </p>
          </div>

          <div className="hidden lg:flex gap-6">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setImage(img)}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`Wedding ${index + 1}`}
                  className={`h-24 w-32 object-cover transition-all duration-300 rounded-lg 
                    ${selectedImage === img 
                      ? 'ring-2 ring-[#c90b7d] ring-offset-2' 
                      : 'opacity-70 group-hover:opacity-100'}`}
                />
                {selectedImage === img && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c90b7d]"></div>
                )}
              </button>
            ))}
          </div>
        </RightEnter>
      </div>

      {/* Gallery Section */}
      <div className="px-12 lg:py-20 py-10">
        <Fade>
        <h2 className="text-4xl font-garamond mb-12 text-center">Wedding Gallery</h2>
        </Fade>
        <div className="hidden lg:flex flex-col gap-8 max-w-7xl mx-auto">
          {gallery.map((rows, index) => (
            <div key={index} className="flex gap-8 justify-center">
              {rows.map((image, imgIndex) => (
                <Fade key={imgIndex} extraCss="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={image}
                    height="md:h-80 h-52"
                    extraCSS="hover:scale-105 transition-all duration-500"
                    width="md:w-96 w-32"
                  />
                </Fade>
              ))}
            </div>
          ))}
        </div>
        <Fade extraCss="lg:hidden flex flex-col gap-8 max-w-7xl mx-auto">
          {gallery.map((rows, index) => (
            <div key={index} className="flex flex-col gap-8 justify-center">
              {rows.map((image, imgIndex) => (
                <div key={imgIndex} className="overflow-hidden  rounded-xl shadow-lg">
                  <Image
                    src={image}
                    height="md:h-80 h-52"
                    extraCSS="hover:scale-105 transition-all duration-500"
                    width="w-full"
                  />
                </div>
              ))}
            </div>
          ))}
        </Fade>
      </div>

      {/* Bottom Section */}
      <div className="flex gap-12 px-12 lg:py-20 py-10 h-fit w-full">
        <LeftEnter extraCss="hidden lg:flex overflow-hidden rounded-xl shadow-lg w-full h-[70vh]">
          <img src={p1} alt="Wedding venue" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
        </LeftEnter>
        
        <Fade extraCss="flex flex-col items-center w-[90vw]">
          <h2 className="lg:text-4xl text-2xl font-garamond lg:mb-12 mb-5 text-center">Your love, our inspiration, the perfect celebration.</h2>
          <p className="font-poppins lg:text-lg text-md text-justify leading-relaxed text-gray-700">
            The perfect destination for your dream wedding. Nestled in a picturesque location with breathtaking views, our elegant venues and impeccable service create a magical setting for your special day. From intimate ceremonies to grand celebrations, we offer tailor-made packages, exquisite dining options, and luxurious accommodations for you and your guests. Let us turn your wedding into a celebration of love, joy, and cherished memories that will last a lifetime. Your happily ever after begins here!
          </p>
        </Fade>

        <RightEnter extraCss="hidden lg:flex overflow-hidden rounded-xl shadow-lg w-full h-[70vh]">
          <img src={p2} alt="Wedding celebration" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
        </RightEnter>
      </div>


          <Fade extraCss="w-full h-fit flex flex-col justify-center items-center gap-8 ">
            <p className="lg:text-4xl text-2xl font-garamond text-center">Real Weddings at The Raj Palace</p>
            <div className="flex lg:flex-row flex-col gap-5">
                {
                    weddingImage.map((weds,image)=>(
                        <div className="p-3 flex flex-col bg-white w-fit">
                    <div className="h-[30vh] lg:w-[15vw] w-[70vw] p-2 border-dashed border-2 border-[#c5c5c5]">
                        <img src={weds.image} className="h-full w-full" alt="" />
                    </div>
                    <div className="p-2 flex w-full justify-center items-center">
                        <p>{weds.name}</p>
                    </div>
                </div>
                ))
            }
            </div>
          </Fade>

    </div>
  );
};

export default Wedding;