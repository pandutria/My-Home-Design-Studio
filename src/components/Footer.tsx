import React from 'react'
import logo from '../../public/images/logo/logo.svg'
import facebook from '../../public/images/icon/facebook.png'
import instagram from '../../public/images/icon/instagram.png'
import tweeter from '../../public/images/icon/tweeter.png'
import youtube from '../../public/images/icon/youtube.png'
import wordpress from '../../public/images/icon/wordpress.png'

const Footer = () => {
  return (
    <div>
      <section className='flex w-full justify-center bg-thrdtinary'>
        <div className='container flex flex-col w-250 py-15 gap-10'>
          <div className='flex flex-row w-full items-start justify-between'>
            <img src={logo} className='w-25 h-auto object-contain' alt="" />
            <div className='flex flex-col gap-4'>
              <h1 className='font-poppins font-semibold text-white text-[16px]'>Tentang Kami</h1>
              <div className='flex flex-col gap-2'>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Tentang Kami</p>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Testimoni Klien</p>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Portofolio Proyek</p>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Kebijakan Privasi</p>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Karir</p>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Hubungi Kami</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='font-poppins font-semibold text-white text-[16px]'>Layanan & Booking</h1>
              <div className='flex flex-col gap-2'>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Desain Interior</p>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Desain Eksterior</p>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Desain Komersial</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='font-poppins font-semibold text-white text-[16px]'>Hubungi Kami</h1>
              <div className='flex flex-col gap-2'>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Konsultasi: +62-812-3456-7890</p>
                <p className='font-poppins font-normal text-white/80 text-[13.5px]'>Booking: +62-812-9876-5432</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='font-poppins font-semibold text-white text-[16px]'>Media Sosial</h1>
              <div className='flex flex-row gap-5 mt-2'>
                <img src={facebook} className='w-5 h-5 object-contain' alt="" />
                <img src={instagram} className='w-5 h-5 object-contain' alt="" />
                <img src={tweeter} className='w-5 h-5 object-contain' alt="" />
                <img src={youtube} className='w-5 h-5 object-contain' alt="" />
                <img src={wordpress} className='w-5 h-5 object-contain' alt="" />
              </div>
            </div>
          </div>
          <hr className='w-full border-[1.5px] border-white/15 mt-5' />
          <p className='font-poppins font-normal text-white/75 text-[14px] self-center'>©2025 My Home Design Studio | Seluruh Hak Cipta Dilindungi</p>
        </div>
      </section>
    </div>
  )
}

export default Footer
