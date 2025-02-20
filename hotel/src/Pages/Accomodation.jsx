import React, { useEffect } from 'react'
import room from '../assets/Images/Misc/HeritageRoom.jpg'
import  suite from "../assets/Images/Presidential Suits/(Prestige Suite) Khaas Mahal.jpg"
import Speciality from '../Components/Speciality'
import { setLoading } from '../Redux/CommonVariables'



import { content } from '../Components/Navbar/HoveredMenu_Data'
import { setList } from "../Redux/List";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import Fade from '../Components/Fade'
import LeftEnter from '../Components/LeftEnter'
import RightEnter from '../Components/RightEnter'
const Accomodation = () => {
    
    let navigate = useNavigate()
    let list = useSelector((state)=>state.list)
  
  
  let dispatch = useDispatch()
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


  function setlist(x) {
    navigate(`/list/${x}`);
  }
function linkFunction(item) {
  
    dispatch(setLoading(true))
    if (content["a"][item].function) 
      setlist(content["a"][item].function);
    else if (item == "Download MICE Brochure")
      window.open(content["a"][item].link);
    else 
      navigate(content["a"][item].link);
  }

  return (
    <div className={`flex  flex-col w-full h-full justify-center items-center lg:pt-32 pt-16 pb-5`}>
        <Fade>
        <h2 className="text-3xl lg:text-5xl font-garamond font-bold text-center text-[#001F54] tracking-wider">
      ACCOMODATION
    </h2>
        </Fade>
    <div className='w-fit p-5  flex flex-col lg:flex-row gap-10 justify-center items-center'>
        <LeftEnter>
        <button   onClick={() => linkFunction("Rooms & Suites")}>
        <Speciality
              heading={"Rooms & Suits"}
              imageSrc={room}
              description={""}
              height="lg:h-[400px] h-[200px]"
              />
              </button>
              </LeftEnter>
              <RightEnter>

            <button   onClick={() => linkFunction("Presidential Suites")}>
            <Speciality
              heading={"Presidential Suites"}
              imageSrc={suite}
              description={""}
              height="lg:h-[400px] h-[200px]"
              />
              </button>
              </RightEnter>
    </div>
              </div>
  )
}

export default Accomodation