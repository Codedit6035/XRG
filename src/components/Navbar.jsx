import React from 'react'
import Logo from "../assets/logo.png"
import { IoMenuOutline } from "react-icons/io5";

const Menu = [
  {
    id: 1,
    name: "Home ",
    link: "/",
  },
  {
    id: 2,
    name: "About ",
    link: "/about",
  },
    {
      id: 3,
      name: "Services",
      link: "/services",
    },
    {
      id: 4,
      name: "Get In Touch",
      link: "/get in touch",
    },

  ];
  

const Navbar = ({titreColor}) => {
  return (
    <div className="bg-transparent  duration-200 relative z-999">
        {/* lower Navbar */}
        <div className=" container bg-transparent py-4">
            <div className=" flex justify-between items-center ">
                {/* logo */}
                <div className="flex  items-center g">
                    <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                    <img src={Logo} alt="Logo" className="w-40  "  />
                    </a>
                </div>
                {/*links */}
                <div>
                  <ul  className="sm:flex hidden gap-10 ">
                  {Menu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className=" text-xl font-bold hover:text-blue-500 transition duration-200 shadow-xl"
                                     style={{ color: titreColor }}>
                    {item.name}
                  </a>
                </li>
              ))}                 
                  </ul>
                </div>              
                {/*menu */}
                <a href="" className='sm:hidden'>
                  <IoMenuOutline className='text-5xl text-blue-500 font-bold hover:text-white transition duration-200'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar