import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/logos/RajPalace.png";
import title from "../../assets/Images/logos/RajPalace_title.png";
import { useNavigate, useParams } from "react-router-dom";
import { content } from "./HoveredMenu_Data";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../Redux/CommonVariables";
import {setRoomDetails} from '../../Redux/Room'
import {setList} from '../../Redux/List'

const NavbarDesktop = () => {
  const {id} = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [menu1Content, setContent1] = useState([]);
  const [menu2Content, setContent2] = useState([]);
  const [fixed,setFixed] = useState(false)
  const [key,selectKey] = useState('')
  const [key2,selectKey2] = useState('')
  let list = useSelector((state)=>state.list)
  let navigate = useNavigate();
  let dispatch = useDispatch()
  
  function goTo(link) {
    if(window.location.pathname!=link)
    dispatch(setLoading(true))
    setIsOpen(false)
    navigate(link);
  }
  const menuItems = {
    Home: { link: "/", icon: "home" },
    Accommodation: { link: "/accomodation", icon: "bed", key: "a" },
    Dining: { link: "/dining", icon: "pizza" },
    // 'Activities':'/notDefined',
    Weddings: { link: "/wedding", icon: "heart" },
    "Meetings & Business": { link: "/iv_ov", icon: "cafe", key: "mb" },
    // 'Events':"/notDefined", 'Rates':'/notDefined'
  };
 
    useEffect(()=>{
      function handleScroll(){
        const vh= window.innerHeight;
        if(window.scrollY > 0.3*vh)
          setFixed(true)
        else
          setFixed(false)
      }
      window.addEventListener("scroll",handleScroll)
    },[])

   const room = useSelector((state)=>state.room) 

  function selectRoom(x) {
    if (x.name == "Book Online") {
      window.open(x.link);
      return;
    }
      // console.log(room)
    // console.log(x.name)
    dispatch(setLoading(true));
    setIsOpen(false)
    navigate(x.link);
  }
  
    function setlist(x) {
      dispatch(setLoading(true));
      navigate(`/list/${x}`);
    }
  
    function linkFunction(item) {
      setIsOpen(false)
      console.log(item)
      if(item=="Reservation" || ((list && item==list.heading) && (window.location.pathname=='/list') ))
        return
      console.log(window.location.pathname)
      console.log(menu1Content[item])
  
      dispatch(setLoading(true))
      if (menu1Content[item].function) 
        setlist(menu1Content[item].function);
      else if (item == "Download MICE Brochure"){
        dispatch(setLoading(false))
        window.open(menu1Content[item].link);
      }else 
        navigate(menu1Content[item].link);
    }


     function selectContent(key, bool) {
        if (!bool) {
          setContent2([]);
          return;
        }
        selectKey2(key);
        const subContent = menu1Content[key]["content"];
        setContent2(subContent);
      }

  return (
    <div className={  `${fixed ? "animate-slide-down bg-white/70" : ""} fixed  flex justify-between items-center w-full top-0 z-40 px-4 h-[13vh] transition-all duration-500`}>

      {/* Menu icon on the right */}
      <div className="flex justify-end items-center ">
        <button
          onClick={() => {
            setIsOpen(true);
            console.log(true);
          }}
        >
          <p className={`${fixed?"text-black":"text-[#b6b6b6]"}  text-[40px]`}>
          <ion-icon name="menu"></ion-icon>
          </p>
        </button>
      </div>
      {/* Centered logo */}
      <div className="flex justify-center items-center w-full ">
        <button className="flex justify-center items-center w-fit h-fit"  onClick={()=>goTo("/")}>
        <img src={logo} className="h-[11vh]" alt="Raj Palace" />
        <img src={title} className="h-[8vh]" alt="Raj Palace" />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[85vw] bg-white shadow-lg p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`
      }
      >
        {/* Close Button */}
        <button
          onClick={() => {setIsOpen(false);setContent1([]);setContent2([])}}
          className="absolute top-4 right-4 text-[rgb(0,31,84)] "
        >
          <p className="text-3xl">
          <ion-icon name="close"></ion-icon>
          </p>
        </button>

        <div className="flex h-full gap-5">
          {/* Menu Items */}
          <div className="flex w-[20vw] flex-col justify-between h-full" onMouseEnter={()=>{selectContent(undefined,false);selectKey2('')}} >
            <div className="flex flex-col w-full">
              <ul
                className="w-full flex flex-col gap-7 cursor-default"
               
              >
                {Object.keys(menuItems).map((item, index) => (
                  <button
                    onMouseEnter={() => {setContent1(menuItems[item].key?content[menuItems[item].key]:menu1Content);selectKey(menuItems[item].key?menuItems[item].key:key)}}
                    onClick={() => goTo(menuItems[item].link)}
                    className="flex items-center space-x-2 "
                  >
                    <span>
                      <ion-icon name={menuItems[item].icon}></ion-icon>
                    </span>
                    <div className="flex items-center w-full justify-between">

                    <span className="font-monsterrat">{item.toUpperCase()}</span>
                    {
                      menuItems[item].key?(<span className={`text-black text-2xl transition-transform duration-300 ${
                        key==menuItems[item].key ? "rotate-180" : "" }`}><i class='bx bx-chevron-right'></i></span>):(<span></span>)
                    }
                    </div>
                  </button>
                ))}
              </ul>
            </div>
            <div className="flex flex-col w-full">
              <hr className="my-6" />
              <ul className="space-y-4 flex flex-col font-garamond text-md font-medium text-[#000000]">
                <button className="w-fit" onClick={() => goTo("/history")} >HISTORY</button>
                <button className="w-fit" onClick={() => goTo("/contactus")}>CONTACT US</button>
                <button className="w-fit" onClick={() => goTo("/workforUs")}>WORK FOR US</button>
              </ul>
            </div>
          </div>


          <div className="w-[1px]  bg-[#a5a5a55d]"></div>
          <div className="flex flex-col w-[30vw] gap-2" >
            {Object.keys(menu1Content).map((item, i) => (
              <button
                onClick={() => linkFunction(item)}
                onMouseEnter={() => selectContent(item, true)}
                className="flex gap-5 justify-center group relative cursor-pointer  
              px-7 py-3.5 text-[#001F54]
                transition-all duration-300 
                transform hover:-translate-y-0.5 
                overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <p
                  className="relative z-10 
                            font-monsterrat-medium
                            text-lg 
                            tracking-widest 
                            uppercase 
                            text-center 
                            drop-shadow-lg
                            group-hover:text-opacity-90 
                            transition-all duration-300"
                >
                  {item}
                </p>
                {
                      menu1Content[item]["content"]?(<span className={`text-black text-2xl transition-transform duration-300 ${
                        key2==item ? "rotate-180" : "" }`}><i class='bx bx-chevron-right'></i></span>):(<span></span>)
                    }
              </button>
            ))}
          </div>
          <div className="w-[1px] bg-[#a5a5a55d]"></div>
          <div className=" flex flex-col gap-3">
            {
              menu2Content.map((item,i)=>(
                <button
                onClick={() => selectRoom(item)}
                className="group flex items-center 
                             text-[#001F54] 
                            px-4 py-2 
                            transition-all duration-300 
                            cursor-pointer 
                            space-x-3"
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt="image"
                    className="w-10 h-10 rounded-full object-cover 
                             group-hover:scale-110 
                             transition-transform duration-300"
                  />
                ) : (
                  <span></span>
                )}
                <p
                  className="font-monsterrat-medium 
                              tracking-wider 
                              uppercase"
                >
                  {item.name}
                </p>
              </button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
