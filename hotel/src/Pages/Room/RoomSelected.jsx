import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../Redux/CommonVariables';
import Image_Grid from '../../Components/Image_Grid';
import Fade from '../../Components/Fade';

const RoomSelected = () => {
    const roomDetails = useSelector((state) => state.room.roomDetails);
  const amenities =  useSelector((state) => state.room.amenities);
  const galleryImages =  useSelector((state) => state.room.galleryImages);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setLoading(false))
  },[galleryImages])

  return (
    <Fade extraCss="min-h-screen  flex flex-col ">
      <Image_Grid images={galleryImages}/>
      <div className='flex flex-col p-5 gap-5'>

        <h2 className="w-full flex  justify-center items-center text-3xl lg:text-5xl font-poppins-bold mb-2 text-[#001F54] ">
          {roomDetails.title}
        </h2>
      <div className="w-full">
        <p className="text-black leading-relaxed font-poppins tracking-widest">{roomDetails.description}</p>
 {/* Grid of Images */}
 <div className="mx-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <img
          key={index}
          src={image}
          alt={`Gallery Image ${index + 1}`}
          className="w-full lg:h-64 h-44 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
          
          />
        ))}
      </div>
    </div>
    <div className='flex flex-col lg:flex-row w-full gap-5 justify-center py-8 lg:py-14'>

        {/* Icons Section */}
        {/* <div className="flex justify-around lg:w-1/2">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center">
              <span className="text-3xl text-[#D4AF37]">{amenity.icon}</span>
              <p className="mt-2 text-gray-700 text-sm font-poppins">{amenity.text}</p>
            </div>
          ))}
        </div> */}

        {/* Pricing & Booking */}
        <div className="flex items-center justify-end gap-12">
          <button className="bg-[#001F54] hover:bg-[#0c192f] text-white font-poppins px-6 py-3 rounded-md shadow-md transition-all">
            BOOK NOW
          </button>
          </div>
        </div>
      </div>

          </div>
   
  </Fade>
  )
}

export default RoomSelected