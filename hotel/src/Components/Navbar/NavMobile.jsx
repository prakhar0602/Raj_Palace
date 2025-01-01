import React, { useEffect, useState } from 'react'
import logo from '../../assets/Images/logos/RajPalace.png'
import title from '../../assets/Images/logos/RajPalace_title.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../Redux/CommonVariables';
const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
     const [fixed,setFixed] = useState(false)
    const menuItems = {
        'Home':{link:'/',icon:"home"}, 
        'Accommodation':{link:'/accomodation',icon:"bed"}, 'Dining':{link:'/dining',icon:"pizza"}, 
        // 'Activities':'/notDefined', 
          'Weddings':{link:'/wedding',icon:"heart"}, 'Meetings & Business':{link:'/iv_ov',icon:"cafe"}, 
        // 'Events':"/notDefined", 'Rates':'/notDefined'
    };

     useEffect(()=>{
          function handleScroll(){
            const vh= window.innerHeight;
            if(window.scrollY > 0.2*vh)
              setFixed(true)
            else
              setFixed(false)
          }
          window.addEventListener("scroll",handleScroll)
        },[])

    function goTo(link){
        setIsOpen(false)
        if(window.location.pathname!=link)
          dispatch(setLoading(true))
        navigate(link)
    }

  return (
    <nav className={`${fixed ? "fixed  animate-slide-down" : "flex"} bg-white/90 shadow-2xl flex w-[100vw] z-50`}>
      <div className="flex justify-between w-full items-center px-6 py-4">
        {/* Logo */}
        <div className="text-lg flex h-[6vh] justify-center gap-2 items-center font-serif font-bold text-[#000] tracking-wider">
          <img src={logo} alt="" className='h-full' />
          <img src={title} alt="" className='h-full'/>
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-royal-purple hover:text-gold-900 transition-colors duration-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className={`text-black text-[30px]`}>
          <ion-icon name="menu"></ion-icon>
          </p>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-4 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#001F54]"
        >
          <ion-icon name="close"></ion-icon>
        </button>

        {/* Menu Items */}
        <div className="flex flex-col justify-between h-full">
          <div className='flex flex-col'>

          <h2 className="text-2xl font-bold font-garamond mb-4">The Raj Palace</h2>
          <ul className="space-y-4">
          {Object.keys(menuItems).map((item,index) => (
            <li
            onClick={()=>goTo(menuItems[item].link)}
            className="flex items-center space-x-2">
             <span><ion-icon name={menuItems[item].icon}></ion-icon></span>
             <span className='font-monsterrat'>{item}</span>
           </li>
            ))}
            
          </ul>
            </div>
          <div className='flex flex-col w-full'>
          <hr className="my-6" />
          <ul className="space-y-4 font-monsterrat">
            <li onClick={()=>goTo('/history')}>History</li>
            <li onClick={()=>goTo('/contactus')}>Contact Us</li>
            <li onClick={()=>goTo('/workforUs')}>Work For Us</li>
          </ul>
        </div>
          </div>
      </div>
    </nav>
  )
}

export default NavMobile