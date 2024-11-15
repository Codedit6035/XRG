import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import LogoText from "../assets/logotext.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io"; // Add this icon for the arrow

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Get In Touch", link: "/get in touch" },
];

const AboutDropdown = [
  { id: 1, name: "XRG Story", link: "/about#xrg-story" },
  { id: 2, name: "About Me", link: "/about#about-me" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-transparent duration-200 relative z-50">
      <div className="container bg-transparent py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/"  >
          <div className="flex items-center  w-44 ">
              <img src={Logo} alt="Logo" className=" h-20 animate-spin-slow" />
              <img src={LogoText} alt="Logo" className=" h-20" />
          </div>
          </a>

          {/* Links */}
          <div > 
            <ul className="sm:flex hidden gap-3  ">
              {Menu.map((item) => (
                <li key={item.id} className="relative ">
                  {item.name === "About" ? (
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
                      className="text-base font-raleway  bg-shade5/40 px-2 py-0.5 text-white hover:bg-white hover:text-primary"

                    >
                      {item.name}
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {item.name === "About" && isDropdownOpen && (
                    <ul className="absolute top-full left-0 mt-2 bg-white/50  shadow-lg py-2  w-28  " onMouseLeave={() => setIsDropdownOpen(!isDropdownOpen)}>
                      {AboutDropdown.map((subItem) => (
                        <li key={subItem.id} className=''>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2 text-sm hover:bg-blue-100 text-white"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <a href="" className="sm:hidden">
            <IoMenuOutline className="text-5xl text-blue-500 font-bold hover:text-white transition duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
