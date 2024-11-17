import React, { useState, useEffect } from "react";
import AlstomLogo from '../../assets/partners/alstom.png';
import BmwLogo from '../../assets/partners/bmw.svg';
import BoschLogo from '../../assets/partners/bosch.png';
import BslLogo from '../../assets/partners/bsl.svg';
import CatenaLogo from '../../assets/partners/catena.webp';
import GeaLogo from '../../assets/partners/gea.png';
import GehLogo from '../../assets/partners/geh.png';
import GmLogo from '../../assets/partners/gm.png';
import HenkelLogo from '../../assets/partners/henkel.png';
import HitachiLogo from '../../assets/partners/hitachi.svg';
import MalikLogo from '../../assets/partners/malik.png';
import MercedesLogo from '../../assets/partners/mercedes.png';
import MitLogo from '../../assets/partners/mit.png';
import TbsLogo from '../../assets/partners/tbs.png';
import UpgLogo from '../../assets/partners/upg.png';
import WbcsdLogo from '../../assets/partners/wbcsd.png';
import WbgLogo from '../../assets/partners/wbg.png';
import WitsLogo from '../../assets/partners/wits.svg';
import WrfLogo from '../../assets/partners/wrf.png';
import ZhawLogo from '../../assets/partners/zhaw.png';
import Marquee from "react-marquee-slider";

const PartnersS = () => {
  const partners = [
    {id:1, img: AlstomLogo, alt: 'AlstomLogo' },
    {id:1, img: BmwLogo, alt: 'BmwLogo' },
    {id:1, img: BoschLogo, alt: 'BoschLogo' },
    {id:1, img: BslLogo, alt: 'BslLogo' },
    {id:1, img: CatenaLogo, alt: 'CatenaLogo' },
    {id:1, img: GeaLogo, alt: 'GeaLogo' },
    {id:1, img: GehLogo, alt: 'GehLogo' },
    {id:1, img: GmLogo, alt: 'GmLogo' },
    {id:1, img: HenkelLogo, alt: 'HenkelLogo' },
    {id:1, img: HitachiLogo, alt: 'HitachiLogo' },
    {id:1, img: MalikLogo, alt: 'MalikLogo' },
    {id:1, img: MercedesLogo, alt: 'MercedesLogo' },
    {id:1, img: MitLogo, alt: 'MitLogo' },
    {id:1, img: TbsLogo, alt: 'TbsLogo' },
    {id:1, img: UpgLogo, alt: 'UpgLogo' },
    {id:1, img: WbcsdLogo, alt: 'WbcsdLogo' },
    {id:1, img: WbgLogo, alt: 'WbgLogo' },
    {id:1, img: WitsLogo, alt: 'WitsLogo' },
    {id:1, img: WrfLogo, alt: 'WrfLogo' },
    {id:1, img: ZhawLogo, alt: 'ZhawLogo' },
  ];




  return (
    <div className="pt-14 pb-12 font-Raleway">
      {/* Header section */}
      <div className="mb-10 bg-white w-full pl-20 text-black">
        <h1 className="text-left text-3xl text-primary hover:bg-shade1 hover:text-white w-fit pr-5 pl-1">Partners</h1>
        {/* Blue line */}
        <div className="w-16 h-1 bg-teal-500 mb-4"></div>
      </div>

      {/* Slider container */}
      <div className=" w-full  py-2 ">
        {/* Animated slider */}
        <div className="flex  gap-5 items-center" >
        <Marquee velocity={30} minScale={0.7} resetAfterTries={100}>
            {partners.map((data) => (
              <div
                key={data.id}
                className="flex justify-center items-center w-[150px] h-[150px]  p-5 mx-4 rounded-md bg-primary/10  ">

                  <img
                    src={data.img}
                    alt={data.alt}
                    className="  w-full h-full object-contain "
                  />



              </div>
            ))}
          </Marquee>


        </div>
      </div>
    </div>
  );
};

export default PartnersS;
