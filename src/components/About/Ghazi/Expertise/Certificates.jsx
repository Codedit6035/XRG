import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Img1 from "../../../../assets/unione.jpg"
import Img2 from "../../../../assets/unitwo.jpg"
import Img3 from "../../../../assets/unithree.jpg"
import Img4 from "../../../../assets/unifour.jpg"
import Img5 from "../../../../assets/unifive.png"


const CertificatesData = [
    { id: 1, name: "Business and Human Rights ", uni: "Council of Europe, 2022", img: Img1 },
    { id: 2, name: "Foundations in Responsible Investments ", uni: "UN PRI Academy, 2020", img: Img2  },
    { id: 3, name: "Photovoltaic Solar Energy ", uni: "École Polytechnique Paris, 2020", img: Img3  },
    { id: 4, name: "Smart Cities – Managing Smart Urban Infrastructures ", uni: "EPFL, 2019", img: Img4  },
    { id: 5, name: "Finance for Non-Finance Managers ", uni: "GE University, 2016", img: Img5  },
  ];

const Certificates = () => {
  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute bottom-[-60px] left-[45%] flex justify-center items-center bg-white w-10 h-10 rounded shadow-lg cursor-pointer"
    >
      <FaArrowLeft className="text-primary" />
    </div>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute bottom-[-60px] left-[50%] flex justify-center items-center bg-white w-10 h-10 rounded shadow-lg cursor-pointer"
    >
      <FaArrowRight className="text-primary" />
    </div>
  );

  // Slider settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" py-10 ">

          {/* Slider Section */}
          <Slider {...settings}  >
            {CertificatesData.map((data) => (
              <div key={data.id} className="  ">
                <div className="flex flex-col justify-center items-center mx-10  ">
                <div className=" bg-white ">
                   <img src={data.img} alt="" className="w-full " />
                </div>
                <div className="flex flex-col py-8 px-5 rounded-md h-[200px]   w-full bg-shade2/30  justify-center items-center ">
                    <h1 className='text--lg font-bold text-center'>{data.name}</h1>
                    <h1 className='text-sm'>{data.uni}</h1>
                </div>
                </div>
              </div>
            ))}
          </Slider>


    </div>
  );
};

export default Certificates;
