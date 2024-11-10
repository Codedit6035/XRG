import React from 'react'
import Img1 from "../../assets/advising.jpg"
import Img2 from "../../assets/talking.jpg"
import Img3 from "../../assets/teaching.jpg"


const IndustriesData = [
    {
      id: 1,
      img: Img1,
      title: "Corporations",
      description:"Corporations operate in a dynamic environment where sustainable growth, social responsibility, and financial performance must be balanced.",
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Financial Services",
      description:"Financial Services are at the forefront of fostering economic growth and innovation.",
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Industrial Networks",
      description:"Industrial Networks bring together companies to collaborate on best practices, technological advancements, and sustainable innovations. ",
      color: "brown",
      aosDelay: "400",
    },
    {
        id: 4,
        img: Img3,
        title: "Standardization & Regulatory bodies",
        description:"Standardization & Regulatory Bodies play a crucial role in setting frameworks that ensure quality, safety, and ethical practices across industries.",
        color: "brown",
        aosDelay: "400",
      },
      {
        id: 5,
        img: Img3,
        title: "Meetings & Conferences",
        description:"Meetings & Conferences are vital for knowledge sharing, networking, and advancing industry agendas.",
        color: "brown",
        aosDelay: "400",
      },
      {
        id: 6,
        img: Img3,
        title: "Universities & Business Schools",
        description:"Universities & Business Schools shape the leaders of tomorrow. ",
        color: "brown",
        aosDelay: "400",
      },
  
  ];

const IndustriesS = () => {
  return (
    <div className=' '>
        <div className="pt-14 pb-12 font-Raleway">
        {/* header section */}
        <div className="mb-10  bg-white  animate-slideInFromLeft w-full pl-20   text-black">
          <h1 className="text-left   text-3xl  text-primary">
            Industries
          </h1>
          {/* Blue line */}
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
        </div>  
        {/* Industries cards */}      
        <div className='container   '>
        <div className=' flex  justify-center  gap-20 flex-wrap pb-20'>
        {IndustriesData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="   h-[500px] w-[300px] bg-blue-950 "
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-full "
                />                   
                <h2 className="font-bold text-white hover:underline py-3 pl-5 pr-3 bg-gray-400/40 w-3/4 ">{data.title}</h2>
                <p className='text-white p-5  '> {data.description}</p>  
         

              </div>
            ))}

        </div>
        </div>
        </div>
    </div>
  )
}

export default IndustriesS