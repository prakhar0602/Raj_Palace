import React, { useEffect } from 'react'
import room from '../assets/Images/Misc/HeritageRoom.jpg'
import  suite from "../assets/Images/Presidential Suits/(Prestige Suite) Khaas Mahal.jpg"
import Speciality from '../Components/Speciality'
import { setLoading } from '../Redux/CommonVariables'



import { content } from '../Components/Navbar/HoveredMenu_Data'
import { setList } from "../Redux/List";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
const Accomodation = () => {
    
    let navigate = useNavigate()
    let list = useSelector((state)=>state.list)
  
  
  let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setLoading(false))
    },[])


  function setlist(x) {
    dispatch(setList(x));
    navigate("/list");
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
        <h2 className="text-3xl lg:text-5xl font-poppins-bold text-center text-[#001F54] tracking-wider">
      Accomodation
    </h2>
    <div className='w-fit p-5  flex flex-col lg:flex-row gap-10 justify-center items-center'>
        <button   onClick={() => linkFunction("Rooms & Suites")}>
        <Speciality
              heading={"Rooms & Suits"}
              imageSrc={room}
              description={""}
              height="lg:h-[400px] h-[200px]"
              />
              </button>
            <button   onClick={() => linkFunction("Presidential Suites")}>
            <Speciality
              heading={"Presidential Suites"}
              imageSrc={suite}
              description={""}
              height="lg:h-[400px] h-[200px]"
              />
              </button>
    </div>
              </div>
  )
}

export default Accomodation