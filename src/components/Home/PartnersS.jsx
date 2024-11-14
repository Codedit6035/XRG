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

const PartnersS = () => {
  const partners = [
    { img: AlstomLogo, alt: 'AlstomLogo' },
    { img: BmwLogo, alt: 'BmwLogo' },
    { img: BoschLogo, alt: 'BoschLogo' },
    { img: BslLogo, alt: 'BslLogo' },
    { img: CatenaLogo, alt: 'CatenaLogo' },
    { img: GeaLogo, alt: 'GeaLogo' },
    { img: GehLogo, alt: 'GehLogo' },
    { img: GmLogo, alt: 'GmLogo' },
    { img: HenkelLogo, alt: 'HenkelLogo' },
    { img: HitachiLogo, alt: 'HitachiLogo' },
    { img: MalikLogo, alt: 'MalikLogo' },
    { img: MercedesLogo, alt: 'MercedesLogo' },
    { img: MitLogo, alt: 'MitLogo' },
    { img: TbsLogo, alt: 'TbsLogo' },
    { img: UpgLogo, alt: 'UpgLogo' },
    { img: WbcsdLogo, alt: 'WbcsdLogo' },
    { img: WbgLogo, alt: 'WbgLogo' },
    { img: WitsLogo, alt: 'WitsLogo' },
    { img: WrfLogo, alt: 'WrfLogo' },
    { img: ZhawLogo, alt: 'ZhawLogo' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Create a duplicated list of partners for infinite scrolling
  const duplicatedPartners = [...partners, ...partners];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Reset the slide when reaching the midpoint to create the infinite effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Reset the index when it reaches halfway through the duplicated array
  useEffect(() => {
    if (currentIndex === partners.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, partners.length]);

  return (
    <div className="pt-14 pb-12 font-Raleway">
      {/* Header section */}
      <div className="mb-10 bg-white w-full pl-20 text-black">
        <h1 className="text-left text-3xl font-Raleway text-primary">Partners</h1>
        {/* Blue line */}
        <div className="w-16 h-1 bg-blue-500 mb-4"></div>
      </div>

      {/* Slider container */}
      <div className="relative w-full bg-shade2 py-2 overflow-hidden">
        {/* Animated slider */}
        <div
          className="flex gap-5 transition-transform duration-500 items-center justify-center"
          style={{
            transform: `translateX(-${currentIndex * 200}px)`, // Moves by 200px for each item
            width: `${duplicatedPartners.length * 200}px`, // Ensure container fits all duplicated items
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-none px-2 py-4  justify-center"
              style={{ width: "200px" }}
            >
              <img src={partner.img} alt={partner.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersS;
