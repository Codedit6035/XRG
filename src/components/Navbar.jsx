import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import LogoText from "../assets/logotext.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io"; // Add this icon for the arrow

const Menu = [
  { id: 1, name: "Home", link: "/", bg:"bg-white"  },
  { id: 2, name: "Explore", link: "/Explore", bg:"bg-white" },
  { id: 3, name: "Services", link: "/services", bg:"bg-white"  },
];

const AboutDropdown = [
  { id: 1, name: "XRG Approach", link: "/explore#xrg-story" },
  { id: 2, name: "Dr. Ghazi Kablouti", link: "/explore#about-me" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-transparent duration-200 relative z-50">
      <div className="container bg-transparent py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/"  >
          <div className="flex items-center  w-20 ">
              <img src={Logo} alt="Logo" className=" h-20 animate-spin-slow" />
              <img src={LogoText} alt="Logo" className=" h-20" />
          </div>
          </a>

          {/* Links */}
          <div > 
            <ul className="sm:flex hidden gap-3   ">
              {Menu.map((item) => (
                <li key={item.id} className="relative ">
                  {item.name === "Explore" ? (
                    <button
                       onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-base font-raleway bg-shade5/50 px-2   flex items-center text-white  hover:bg-white hover:text-primary"

                    >
                      {item.name}
                      <IoIosArrowDown className="ml-1" />
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      className={` bg-shade5/40 px-2 py-0.5 text-white hover:${item.bg} hover:text-primary`}

                    >
                      {item.name}
                    </a>
                  )}


                  {/* Dropdown Menu */}
                  {item.name === "Explore" && isDropdownOpen && (
                    <ul className="absolute top-full left-0 mt-2 bg-white/50  shadow-lg py-2 min-w-40" onMouseLeave={() => setIsDropdownOpen(!isDropdownOpen)}>
                      {AboutDropdown.map((subItem) => (
                        <li key={subItem.id} className=''>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2 text-sm hover:bg-blue-100 text-white "
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
               <li>
               <a
                      href="/get-in-touch"
                      className=" bg-shade7 px-2 py-0.5 text-white hover:bg-white hover:text-primary"

                    >
                      Get In Touch
                    </a>
                </li>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <a href="#" onClick={toggleMobileMenu} className="sm:hidden">
            <div className={`relative w-8 h-8 flex flex-col items-center transition-transform duration-3000 z-20 ${isMobileMenuOpen ? 'justify-center' : 'justify-between '}`}>
            <div className={`w-full h-1 bg-shade7 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 absolute bg-white' : ''}`} />
              <div className={`w-full h-1 bg-shade7 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 absolute ' : ''}`} />
              <div className={`w-full h-1 bg-shade7 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 absolute bg-white' : ''}`} />
            </div>
          </a>
        </div>
      </div>
            {/* Mobile Menu Slide-in */}
            <div
        className={`fixed top-0 right-0  bg-shade7/90 w-full h-full transform transition-all duration-500 sm:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={toggleMobileMenu} // This will close the menu if the background is clicked
      >

<div className="flex justify-center flex-col items-center space-y-6 h-full ">
          {/* Mobile menu items */}
          {Menu.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="text-white text-lg"
              onClick={toggleMobileMenu} // This will close the menu after clicking a link
            >
              {item.name}
            </a>
          ))}
          <a
            href="/get-in-touch"
            className="text-white text-lg"
            onClick={toggleMobileMenu} // This will close the menu after clicking a link
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
