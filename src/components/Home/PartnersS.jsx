import React from 'react';
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

const PartnersS = () => {
  // Duplicate partners array to create an infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="pt-14 pb-12 font-Raleway">
      {/* Header section */}
      <div className="mb-10 bg-white w-full pl-20 text-black">
        <h1 className="text-left text-3xl font-Raleway text-primary">Partners</h1>
        {/* Blue line */}
        <div className="w-16 h-1 bg-blue-500 mb-4"></div>
      </div>

      {/* Slider container */}
      <div className="overflow-hidden w-9/12 mx-auto bg-primary px-10 py-5 rounded-md">
        {/* Animated slider */}
        <div className="flex animate-slide">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="w-[20%] h-[100px] flex justify-center items-center p-3"
            >
              <img src={partner.img} alt={partner.alt} className="w-[90%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersS;
