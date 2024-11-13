import React from 'react'
import AlstomLogo from '../../../assets/partners/alstom.png'
import BmwLogo from '../../../assets/partners/bmw.svg'
import BoschLogo from '../../../assets/partners/bosch.png'
import BslLogo from '../../../assets/partners/bsl.svg'
import CatenaLogo from '../../../assets/partners/catena.webp'
import GeaLogo from '../../../assets/partners/gea.png'
import GehLogo from '../../../assets/partners/geh.png'
import GmLogo from '../../../assets/partners/gm.png'
import HenkelLogo from '../../../assets/partners/henkel.png'
import HitachiLogo from '../../../assets/partners/hitachi.svg'
import MalikLogo from '../../../assets/partners/malik.png'
import MercedesLogo from '../../../assets/partners/mercedes.svg'
import MitLogo from '../../../assets/partners/mit.png'
import TbsLogo from '../../../assets/partners/tbs.png'
import UpgLogo from '../../../assets/partners/upg.png'
import WbcsdLogo from '../../../assets/partners/wbcsd.png'
import WbgLogo from '../../../assets/partners/wbg.png'
import WitsLogo from '../../../assets/partners/wits.svg'
import WrfLogo from '../../../assets/partners/wrf.png'
import ZhawLogo from '../../../assets/partners/zhaw.png'



const partners = [
  { img: AlstomLogo , alt: 'AlstomLogo'},
  { img: BmwLogo , alt: 'BmwLogo'},
  { img: BoschLogo , alt: 'BoschLogo'},
  { img: BslLogo , alt: 'BslLogo'},
  { img: CatenaLogo, alt: 'CatenaLogo'},
  { img: GeaLogo, alt: 'GeaLogo'},
  { img: GehLogo, alt: 'GehLogo'},
  { img: GmLogo, alt: 'GmLogo'},
  { img: HenkelLogo, alt: 'HenkelLogo'},
  { img: HitachiLogo, alt: 'HitachiLogo'},
  { img: MalikLogo, alt: 'MalikLogo'},
  { img: MercedesLogo, alt: 'MercedesLogo'},
  { img: MitLogo, alt: 'MitLogo'},
  { img: TbsLogo, alt: 'TbsLogo'},
  { img: UpgLogo, alt: 'UpgLogo'},
  { img: WbcsdLogo, alt: 'WbcsdLogo'},
  { img: WbgLogo, alt: 'WbgLogo'},
  { img: WitsLogo, alt: 'WitsLogo'},
  { img: WrfLogo, alt: 'WrfLogo'},
  { img: ZhawLogo, alt: 'ZhawLogo'},

];
const Clients = () => {
  return (
    <div>
      {/* Tab List Container */}
      <div className=" flex gap-2 justify-center items-center container flex-wrap py-20 ">
        {partners.map((partner, index) => (
          <div
            key={index}
            className='w-[200px] h-[200px] bg-shade3 flex justify-center items-center p-3'
          >
            <img src={partner.img} alt={partner.alt}  className='w-[90%]  '/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
