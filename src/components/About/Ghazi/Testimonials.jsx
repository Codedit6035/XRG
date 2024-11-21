import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialData from "../../../data/TestimonialsData";

const Testimonials = () => {
  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute bottom-[-60px] left-[45%] flex justify-center items-center bg-white w-10 h-10 rounded shadow-lg cursor-pointer"
    >
      <FaArrowLeft className="text-shade6" />
    </div>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute bottom-[-60px] left-[50%] flex justify-center items-center bg-white w-10 h-10 rounded shadow-lg cursor-pointer"
    >
      <FaArrowRight className="text-shade6" />
    </div>
  );

  // Slider settings
  const settings = {
    dots: false,
    arrows: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="  flex flex-col gap-10  pt-10 pb-40  font-raleway  text-base  ">
               {/*slogan*/}
               <div className=' text-2xl  text-center py-10  '>
          <p className='px-10 text-primary font-bold'>“Mastery is not a question of intelligence, but a question of persistence and resilience” <span className="text-lg "> - Anonymous</span></p>
        </div>
      <div className=" bg-shade6 py-10 ">
        {/* Header Section */}
        <div data-aos="zoom-in" className=" ">
          <h1 className=" container text-3xl font-bold text-shade2 mb-6">
            Partners Feedback
          </h1>

          {/* Slider Section */}
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className=" container  flex-shrink-0">
                <div className="flex flex-col py-8 px-10 rounded-xl relative">
                  <div className="flex flex-col items-start">
                    <div className="mb-6">
                      <p className="text-white text-justify">{data.text}</p>
                    </div>
                    <div className="flex gap-5">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="w-[100px] "
                      />
                      <div>
                        <h1 className="text-xl font-bold text-white">
                          {data.name}
                        </h1>
                        <h1 className="text-sm text-shade2">{data.post}</h1>
                      </div>
                    </div>
                  </div>
                  <p className="text-shade6/20 text-9xl font-serif absolute top-0 left-0 pl-5 -z-10">
                    “
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
