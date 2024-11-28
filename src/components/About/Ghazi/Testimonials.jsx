import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialData from "../../../data/TestimonialsData";
import TestimonialtsImg from "../../../assets/testimonials.jpeg"
import { motion } from 'framer-motion';

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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="container   flex flex-col gap-10  pt-10 pb-20 text-primary">
      {/*slogan*/}
      {/*quote img*/}
      <div className='flex flex-col sm:flex-row gap-1'>
        <motion.div className='flex   text-2xl py-10  text-justify justify-center items-center flex-1 bg-shade2/50'
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true }}>
          <p className='px-10  font-bold  '>"The only way to do great work is to love what you do" -<br /> <span className='text-lg text-shade6 font-normal'>Steve Jobs</span></p>
        </motion.div>
        <motion.div className='flex-1'
          initial={{ x: '100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          viewport={{ once: true }}>
          <img src={TestimonialtsImg} alt="" className=' size-full' />
        </motion.div>
      </div>

      <div className="  py-10 ">
        {/* Header Section */}
        <div data-aos="zoom-in" className=" ">
          <h1 className="text-3xl font-bold  mb-6">
            Partners Feedback
          </h1>

          {/* Slider Section */}
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="flex-shrink-0">
                <div className="flex flex-col py-8 rounded-xl relative">
                  <div className="flex flex-col items-start">
                    <div className="mb-6">
                      <p className=" text-justify">{data.text}</p>
                    </div>
                    <div className="flex gap-5">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="w-[100px] "
                      />
                      <div>
                        <h1 className="text-xl font-bold  text-shade6">
                          {data.name}
                        </h1>
                        <h1 className="text-sm text-shade6">{data.post}</h1>
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
