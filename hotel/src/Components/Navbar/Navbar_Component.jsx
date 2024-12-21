import React from 'react'
import NavMobile from './NavMobile'
import NavbarDesktop from './NavbarDesktop'

const Navbar_Component = () => {
  return (
    <div className='w-full h-fit'>
    <div className='hidden lg:flex h-fit w-full'>
        <NavbarDesktop />
    </div>
    <div className='md:hidden h-fit w-full'>
        <NavMobile />
    </div>
    </div>
  )
}

export default Navbar_Component







