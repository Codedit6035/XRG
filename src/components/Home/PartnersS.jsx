import React from "react";
import AlstomLogo from '../../assets/partners/alstom.png';
import BmwLogo from '../../assets/partners/bmw.png';
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
import Marquee from "react-fast-marquee";

const PartnersS = () => {
  const partners = [
    {id:1, img: AlstomLogo, alt: 'AlstomLogo' },
    {id:2, img: BmwLogo, alt: 'BmwLogo' },
    {id:3, img: BoschLogo, alt: 'BoschLogo' },
    {id:4, img: BslLogo, alt: 'BslLogo' },
    {id:5, img: CatenaLogo, alt: 'CatenaLogo' },
    {id:6, img: GeaLogo, alt: 'GeaLogo' },
    {id:7, img: GehLogo, alt: 'GehLogo' },
    {id:8, img: GmLogo, alt: 'GmLogo' },
    {id:9, img: HenkelLogo, alt: 'HenkelLogo' },
    {id:9, img: HitachiLogo, alt: 'HitachiLogo' },
    {id:10, img: MalikLogo, alt: 'MalikLogo' },
    {id:11, img: MercedesLogo, alt: 'MercedesLogo' },
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
    <div className="py-10 ">
      {/* Header section */}
      <div className="animate-slideInFromLeft w-full pl-5 lg:pl-20 bg ">
        <h1 className="text-left text-3xl  hover:bg-shade1 hover:text-white w-fit ">Partners & Employers</h1>
        {/* Blue line */}
        <div className="w-16 h-1 bg-shade7 mb-4"></div>
      </div>

      {/* Slider container */}
      <div className=" w-full  py-2 ">
        {/* Animated slider */}
        <div className="flex  gap-5 items-center" >
        <Marquee speed={50} >
            {partners.map((data,index) => (
              <div
                key= {index}
                className="flex justify-center items-center w-[150px] h-[150px]  p-5 mx-4 rounded-md bg-shade2/30  ">

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
