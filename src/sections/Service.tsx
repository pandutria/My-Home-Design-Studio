import { useState } from 'react'
import service1 from '../../public/images/icon/service1.png'
import service2 from '../../public/images/icon/service2.png'
import service3 from '../../public/images/icon/service3.png'
import left_arrow from '../../public/images/icon/left-arrow.png'
import right_arrow from '../../public/images/icon/right-arrow.png'

import ahuiSiantar1 from '../../public/images/pic/new/Ahui-Siantar/1.jpeg'
import ahuiSiantar2 from '../../public/images/pic/new/Ahui-Siantar/2.jpeg'
import ahuiSiantar3 from '../../public/images/pic/new/Ahui-Siantar/3.jpeg'
import ahuiSiantar4 from '../../public/images/pic/new/Ahui-Siantar/4.jpeg'
import ahuiSiantar5 from '../../public/images/pic/new/Ahui-Siantar/5.jpeg'
import ahuiSiantar6 from '../../public/images/pic/new/Ahui-Siantar/6.jpeg'
import ahuiSiantar7 from '../../public/images/pic/new/Ahui-Siantar/7.jpeg'

import frittoChicken1 from '../../public/images/pic/new/Fritto-Chicken/1.jpeg'
import frittoChicken2 from '../../public/images/pic/new/Fritto-Chicken/2.jpeg'
import frittoChicken3 from '../../public/images/pic/new/Fritto-Chicken/3.jpeg'
import frittoChicken4 from '../../public/images/pic/new/Fritto-Chicken/4.jpeg'
import frittoChicken5 from '../../public/images/pic/new/Fritto-Chicken/5.jpeg'
import frittoChicken6 from '../../public/images/pic/new/Fritto-Chicken/6.jpeg'
import frittoChicken7 from '../../public/images/pic/new/Fritto-Chicken/7.jpeg'
import frittoChicken8 from '../../public/images/pic/new/Fritto-Chicken/8.jpeg'
import frittoChicken9 from '../../public/images/pic/new/Fritto-Chicken/9.jpeg'
import frittoChicken10 from '../../public/images/pic/new/Fritto-Chicken/10.jpeg'
import frittoChicken11 from '../../public/images/pic/new/Fritto-Chicken/11.jpeg'

import cemaraAsih1 from '../../public/images/pic/new/Cemara-Asri/1.jpeg'
import cemaraAsih2 from '../../public/images/pic/new/Cemara-Asri/2.jpeg'
import cemaraAsih3 from '../../public/images/pic/new/Cemara-Asri/3.jpeg'
import cemaraAsih4 from '../../public/images/pic/new/Cemara-Asri/4.jpeg'
import cemaraAsih5 from '../../public/images/pic/new/Cemara-Asri/5.jpeg'
import cemaraAsih6 from '../../public/images/pic/new/Cemara-Asri/6.jpeg'

import WinterHoliday1 from '../../public/images/pic/new/Winter-Holiday-Wilson/1.jpeg'
import WinterHoliday2 from '../../public/images/pic/new/Winter-Holiday-Wilson/2.jpeg'
import WinterHoliday3 from '../../public/images/pic/new/Winter-Holiday-Wilson/3.jpeg'
import WinterHoliday4 from '../../public/images/pic/new/Winter-Holiday-Wilson/4.jpeg'
import WinterHoliday5 from '../../public/images/pic/new/Winter-Holiday-Wilson/5.jpeg'
import WinterHoliday6 from '../../public/images/pic/new/Winter-Holiday-Wilson/6.jpeg'
import WinterHoliday7 from '../../public/images/pic/new/Winter-Holiday-Wilson/7.jpeg'
import WinterHoliday8 from '../../public/images/pic/new/Winter-Holiday-Wilson/8.jpeg'
import WinterHoliday9 from '../../public/images/pic/new/Winter-Holiday-Wilson/9.jpeg'
import WinterHoliday10 from '../../public/images/pic/new/Winter-Holiday-Wilson/10.jpeg'
import WinterHoliday11 from '../../public/images/pic/new/Winter-Holiday-Wilson/11.jpeg'
import WinterHoliday12 from '../../public/images/pic/new/Winter-Holiday-Wilson/12.jpeg'
import WinterHoliday13 from '../../public/images/pic/new/Winter-Holiday-Wilson/13.jpeg'
import WinterHoliday15 from '../../public/images/pic/new/Winter-Holiday-Wilson/15.jpeg'
import WinterHoliday14 from '../../public/images/pic/new/Winter-Holiday-Wilson/14.jpeg'
import WinterHoliday16 from '../../public/images/pic/new/Winter-Holiday-Wilson/16.jpeg'
import WinterHoliday17 from '../../public/images/pic/new/Winter-Holiday-Wilson/17.jpeg'
import WinterHoliday18 from '../../public/images/pic/new/Winter-Holiday-Wilson/18.jpeg'
import WinterHoliday19 from '../../public/images/pic/new/Winter-Holiday-Wilson/19.jpeg'
import WinterHoliday20 from '../../public/images/pic/new/Winter-Holiday-Wilson/20.jpeg'
import WinterHoliday21 from '../../public/images/pic/new/Winter-Holiday-Wilson/21.jpeg'
import WinterHoliday22 from '../../public/images/pic/new/Winter-Holiday-Wilson/22.jpeg'
import WinterHoliday23 from '../../public/images/pic/new/Winter-Holiday-Wilson/23.jpeg'
import WinterHoliday24 from '../../public/images/pic/new/Winter-Holiday-Wilson/24.jpeg'
import WinterHoliday25 from '../../public/images/pic/new/Winter-Holiday-Wilson/25.jpeg'

import ahokVihara1 from '../../public/images/pic/new/Ahok-Vihara/1.jpeg'
import ahokVihara2 from '../../public/images/pic/new/Ahok-Vihara/2.jpeg'
import ahokVihara3 from '../../public/images/pic/new/Ahok-Vihara/3.jpeg'
import ahokVihara4 from '../../public/images/pic/new/Ahok-Vihara/4.jpeg'
import ahokVihara5 from '../../public/images/pic/new/Ahok-Vihara/5.jpeg'
import ahokVihara6 from '../../public/images/pic/new/Ahok-Vihara/6.jpeg'
import ahokVihara7 from '../../public/images/pic/new/Ahok-Vihara/7.jpeg'
import ahokVihara8 from '../../public/images/pic/new/Ahok-Vihara/8.jpeg'

import wilsonKatamsih1 from '../../public/images/pic/new/Wilson-Katamso/1.jpeg'
import wilsonKatamsih2 from '../../public/images/pic/new/Wilson-Katamso/2.jpeg'
import wilsonKatamsih3 from '../../public/images/pic/new/Wilson-Katamso/3.jpeg'
import wilsonKatamsih4 from '../../public/images/pic/new/Wilson-Katamso/4.jpeg'
import wilsonKatamsih5 from '../../public/images/pic/new/Wilson-Katamso/5.jpeg'
import wilsonKatamsih6 from '../../public/images/pic/new/Wilson-Katamso/6.jpeg'
import wilsonKatamsih7 from '../../public/images/pic/new/Wilson-Katamso/7.jpeg'
import wilsonKatamsih8 from '../../public/images/pic/new/Wilson-Katamso/8.jpeg'
import wilsonKatamsih9 from '../../public/images/pic/new/Wilson-Katamso/9.jpeg'
import wilsonKatamsih10 from '../../public/images/pic/new/Wilson-Katamso/10.jpeg'

type Category = 'exterior' | 'interior' | 'komersial'

const galleries: Record<Category, { name: string; images: string[] }[]> = {
  exterior: [
    { name: 'Ahui Siantar - Cafe', images: [ahuiSiantar1, ahuiSiantar2, ahuiSiantar3, ahuiSiantar4, ahuiSiantar5, ahuiSiantar6, ahuiSiantar7] },
    { name: 'Fritto Chicken - Jalan Asia', images: [frittoChicken1, frittoChicken2, frittoChicken3, frittoChicken4, frittoChicken5, frittoChicken6, frittoChicken7, frittoChicken8, frittoChicken9, frittoChicken10, frittoChicken11] },
    { name: 'Cemara Asri - Salon', images: [cemaraAsih1, cemaraAsih2, cemaraAsih3, cemaraAsih4, cemaraAsih5, cemaraAsih6] }
  ],
  interior: [
    {
      name: 'Winter Holiday Katamso',
      images: [
        WinterHoliday1,
        WinterHoliday2,
        WinterHoliday3,
        WinterHoliday4,
        WinterHoliday5,
        WinterHoliday6,
        WinterHoliday7,
        WinterHoliday8,
        WinterHoliday9,
        WinterHoliday10,
        WinterHoliday11,
        WinterHoliday12,
        WinterHoliday13,
        WinterHoliday14,
        WinterHoliday15,
        WinterHoliday16,
        WinterHoliday17,
        WinterHoliday18,
        WinterHoliday19,
        WinterHoliday20,
        WinterHoliday21,
        WinterHoliday22,
        WinterHoliday23,
        WinterHoliday24,
        WinterHoliday25
      ]
    }
  ],
  komersial: [
    {
      name: 'Vihara',
      images: [
        ahokVihara1,
        ahokVihara2,
        ahokVihara3,
        ahokVihara4,
        ahokVihara5,
        ahokVihara6,
        ahokVihara7,
        ahokVihara8
      ]
    },
    {
      name: 'Winter Holiday Katamso',
      images: [
        wilsonKatamsih1,
        wilsonKatamsih2,
        wilsonKatamsih3,
        wilsonKatamsih4,
        wilsonKatamsih5,
        wilsonKatamsih6,
        wilsonKatamsih7,
        wilsonKatamsih8,
        wilsonKatamsih9,
        wilsonKatamsih10
      ]
    }
  ]
}

export default function Service() {
  const [category, setCategory] = useState<Category | ''>('')
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (cat: Category, gIndex: number) => {
    setCategory(cat)
    setCurrentGalleryIndex(gIndex)
    setCurrentImageIndex(0)
    setIsModalOpen(true)
  }

  const currentGallery = category ? galleries[category as Category][currentGalleryIndex] : null

  const nextImage = () => {
    if (!category) return
    const g = galleries[category as Category]
    if (currentImageIndex < g[currentGalleryIndex].images.length - 1) {
      setCurrentImageIndex(i => i + 1)
    } else if (currentGalleryIndex < g.length - 1) {
      setCurrentGalleryIndex(i => i + 1)
      setCurrentImageIndex(0)
    }
  }

  const prevImage = () => {
    if (!category) return
    const g = galleries[category as Category]
    if (currentImageIndex > 0) {
      setCurrentImageIndex(i => i - 1)
    } else if (currentGalleryIndex > 0) {
      const prevGalleryIndex = currentGalleryIndex - 1
      setCurrentGalleryIndex(prevGalleryIndex)
      setCurrentImageIndex(g[prevGalleryIndex].images.length - 1)
    }
  }

  return (
    <div>
      <section id="service" className="flex w-full justify-center py-15 bg-primary">
        <div className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 gap-3">
          <h1 className="font-poppins font-semibold text-white text-[13px] bg-secondary rounded-[50px] w-fit py-2 px-5">Layanan Kami</h1>
          <h1 className="font-poppins font-semibold text-white lg:text-[35px] text-[20px] mt-1 leading-[130%]">
            Wujudkan Hunian Impian dengan Sentuhan Profesional
          </h1>
          <p className="font-poppins font-normal text-white lg:text-[15.5px] text-[14px]">
            Kami menghadirkan berbagai layanan desain untuk menciptakan ruang yang indah, nyaman, dan selaras dengan gaya hidup Anda.
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 mt-5">
            <div onClick={() => openModal('exterior', 0)} className="cursor-pointer bg-white rounded-[6px] p-6 hover:shadow-2xl transition transform hover:-translate-y-2">
              <img src={service2} className="w-9 h-9 object-contain" alt="" />
              <h1 className="font-poppins font-semibold text-primary text-[20px] mt-2">Desain Eksterior</h1>
              <p className="font-poppins text-[#5F5F5F] text-[13px] mt-1">Ciptakan tampilan luar rumah yang memukau dan menyatu dengan lingkungan sekitar.</p>
            </div>
            <div onClick={() => openModal('interior', 0)} className="cursor-pointer bg-white rounded-[6px] p-6 hover:shadow-2xl transition transform hover:-translate-y-2">
              <img src={service1} className="w-9 h-9 object-contain" alt="" />
              <h1 className="font-poppins font-semibold text-primary text-[20px] mt-2">Desain Interior</h1>
              <p className="font-poppins text-[#5F5F5F] text-[13px] mt-1">Transformasi setiap sudut ruangan menjadi lebih estetis dan fungsional.</p>
            </div>
            <div onClick={() => openModal('komersial', 0)} className="cursor-pointer bg-white rounded-[6px] p-6 hover:shadow-2xl transition transform hover:-translate-y-2">
              <img src={service3} className="w-9 h-9 object-contain" alt="" />
              <h1 className="font-poppins font-semibold text-primary text-[20px] mt-2">Desain Komersial</h1>
              <p className="font-poppins text-[#5F5F5F] text-[13px] mt-1">Desain untuk hotel, kafe, kantor, dan ruang usaha lainnya.</p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && currentGallery && (
        <div onClick={() => setIsModalOpen(false)} className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex items-center justify-center z-[9999] px-5">
          {(currentImageIndex > 0 || currentGalleryIndex > 0) && (
            <img src={left_arrow} onClick={e => { e.stopPropagation(); prevImage() }} className="absolute left-5 lg:w-12 w-10 cursor-pointer" alt="" />
          )}
          <div onClick={e => e.stopPropagation()} className="flex flex-col items-center max-w-4xl w-full">
            <h2 className="text-white font-poppins font-semibold text-xl mb-3">{currentGallery.name}</h2>
            <img src={currentGallery.images[currentImageIndex]} className="w-full max-h-[80vh] object-cover rounded-[10px]" alt="" />
          </div>
          {(currentImageIndex < currentGallery.images.length - 1 || currentGalleryIndex < galleries[category as Category].length - 1) && (
            <img src={right_arrow} onClick={e => { e.stopPropagation(); nextImage() }} className="absolute right-5 lg:w-12 w-10 cursor-pointer" alt="" />
          )}
        </div>
      )}
    </div>
  )
}
