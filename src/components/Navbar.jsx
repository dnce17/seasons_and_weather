import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import SeasonsLogo from '../assets/imgs/seasons_logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  // Always show nav bar on large screen
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Remembers if nav bar was visible when users moves b/w large and small screen
  const [toggleStatus, setToggleStatus] = useState(false);

  const toggleNav = () => {
    setToggleStatus(!toggleStatus);
  }

  // Effect to handle screen size changes
  useEffect(() => {
    const handleNavResize = () => {
      // Check if screen width is larger than "md" breakpoint (768px by default in Tailwind)
      // true = Show nav when the screen is large, false = Hide nav when the screen is small
      window.innerWidth >= 768 ? setIsLargeScreen(true) : setIsLargeScreen(false);
    };

    // Run once on component mount and on window resize
    handleNavResize();
    window.addEventListener('resize', handleNavResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleNavResize);
    };
  }, []);

  return (
    <div className='py-2.5 md:flex md:justify-center md:items-center'>
      <div className='flex justify-center items-center md:left-1/2'>
        <GiHamburgerMenu className='absolute left-4 cursor-pointer md:hidden' size={25} onClick={toggleNav} />
        <NavLink to='/' className='select-none'>
          <img src={SeasonsLogo} className='w-56 no-underline' alt='all four seasons' />
        </NavLink>
      </div>
      {(toggleStatus || isLargeScreen) && (
        <nav className='flex justify-center md:absolute md:right-0'>
          <ul className='md:flex md:self-center'>
            <li><NavLink to='/' className='mr-5'>Seasons</NavLink></li>
            <li><NavLink to='/weather' className='mr-5'>Weather</NavLink></li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Navbar;