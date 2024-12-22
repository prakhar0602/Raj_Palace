import React, { useState } from 'react'
import logo from '../../assets/Images/logos/RajPalace.png'
import { useNavigate } from 'react-router-dom';
const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const menuItems = {
        'Home':{link:'/',icon:"home"}, 
        'Accommodation':{link:'/accomodation',icon:"bed"}, 'Dining':{link:'/dining',icon:"pizza"}, 
        // 'Activities':'/notDefined', 
          'Weddings':{link:'/wedding',icon:"heart"}, 'Meetings & Business':{link:'/iv_ov',icon:"cafe"}, 
        // 'Events':"/notDefined", 'Rates':'/notDefined'
    };

    function goTo(link){
        navigate(link)
    }

  return (
    <nav className="bg-white/90 shadow-2xl fixed w-full z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-lg flex h-[5vh] justify-center gap-2 items-center font-serif font-bold text-[#000] tracking-wider">
          <img src={logo} alt="" className='h-full' />
          <p className='font-garamond text-xl'>The Raj Palace</p>
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-royal-purple hover:text-gold-900 transition-colors duration-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-4 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
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