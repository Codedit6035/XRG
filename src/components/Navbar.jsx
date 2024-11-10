import React, { useState } from 'react';
import Logo from "../assets/logo.png";
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

const Navbar = ({ titreColor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-transparent duration-200 relative z-50">
      <div className="container bg-transparent py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-40" />
            </a>
          </div>

          {/* Links */}
          <div > 
            <ul className="sm:flex hidden gap-10">
              {Menu.map((item) => (
                <li key={item.id} className="relative ">
                  {item.name === "About" ? (
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-xl font-bold hover:text-blue-500 transition duration-200 flex items-center"
                      style={{ color: titreColor }}
                    >
                      {item.name}
                      <IoIosArrowDown className="ml-1" />
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      className="text-xl font-bold hover:text-blue-500 transition duration-200"
                      style={{ color: titreColor }}
                    >
                      {item.name}
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {item.name === "About" && isDropdownOpen && (
                    <ul className="absolute top-full left-0 mt-2 bg-white/50  shadow-lg py-2 rounded-md w-40  ">
                      {AboutDropdown.map((subItem) => (
                        <li key={subItem.id} className=''>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2 hover:bg-blue-100 text-white"
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
