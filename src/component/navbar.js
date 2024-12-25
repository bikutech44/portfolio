import React from 'react';
import './navbar.css';
import logo from '../img/logo.png';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useRef } from 'react';




const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
    if (window.innerWidth < 800){
      if (navRef.current.classList.contains("responsive_nav")) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }

  };

  const [activeLink, setActiveLink] = useState('intro');

  const handleSetActive = (link) => {
    setActiveLink(link);
  }

  return (
    <nav className='navbar'>   
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='logoname'><img src={logo} className='logoimg' alt='logoimg'/> </Link>
        
        <div className='menu-list' ref={navRef}>
            <Link onClick={showNavbar}  to='intro' spy={true} smooth={true} offset={-100} duration={500} className={`menu-lists home ${activeLink === 'intro' ? 'active' : ''}`} onSetActive={() => handleSetActive('intro')}>Home</Link>
            <Link onClick={showNavbar}  to='about' spy={true} smooth={true} offset={-52} duration={500} className={`menu-lists ${activeLink === 'about' ? 'active' : ''}`} onSetActive={() => handleSetActive('about')}>About</Link>
            <Link onClick={showNavbar}  to='service' spy={true} smooth={true} offset={-52} duration={500} className={`menu-lists ${activeLink === 'service' ? 'active' : ''}`} onSetActive={() => handleSetActive('service')}>Service</Link>
            <Link onClick={showNavbar}  to='contact' spy={true} smooth={true} offset={-30} duration={500} className={`menu-lists ${activeLink === 'contact' ? 'active' : ''}`} onSetActive={() => handleSetActive('contact')} >Contact</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes/>
            </button>
        </div>
        <button className='nav-btn nav-open-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
    </nav>
  )
}

export default Navbar;