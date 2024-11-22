import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Img1 from "../../../../assets/unione.jpg"
import Img2 from "../../../../assets/unitwo.jpg"
import Img3 from "../../../../assets/unithree.jpg"
import Img4 from "../../../../assets/unifour.jpg"
import Img5 from "../../../../assets/unifive.png"
import Marquee from "react-marquee-slider";


const CertificatesData = [
    { id: 1, name: "Business and Human Rights ", uni: "Council of Europe, 2022", img: Img1 },
    { id: 2, name: "Foundations in Responsible Investments ", uni: "UN PRI Academy, 2020", img: Img2  },
    { id: 3, name: "Photovoltaic Solar Energy ", uni: "École Polytechnique Paris, 2020", img: Img3  },
    { id: 4, name: "Smart Cities – Managing Smart Urban Infrastructures ", uni: "EPFL, 2019", img: Img4  },
    { id: 5, name: "Finance for Non-Finance Managers ", uni: "GE University, 2016", img: Img5  },
  ];

const Certificates = () => {


  return (
    <div className=" py-10 ">

      {/* Slider container */}
      <div className=" w-full  py-2 ">
        {/* Animated slider */}
        <div className="flex  gap-5 items-center" >
        <Marquee velocity={30} minScale={0.7} resetAfterTries={100}>
            {CertificatesData.map((data) => (
              <div key={data.id} className="  ">
              <div className="flex flex-col justify-center items-center mx-10  text-primary  w-[300px] h-fit">
              <div className=" bg-white ">
                 <img src={data.img} alt="" className="w-full " />
              </div>
              <div className="flex flex-col py-8 px-5 rounded-md h-[150px]   w-full bg-shade2/50   items-center text-center ">
                  <h1 className='text--lg font-bold text-center'>{data.name}</h1>
                  <h1 className='text-sm'>{data.uni}</h1>
              </div>
              </div>
            </div>
          ))}
          </Marquee>


        </div>
      </div>


    </div>
  );
};

export default Certificates;
