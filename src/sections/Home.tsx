import React from 'react'
import homeImg from '../../public/images/pic/home.png'
import persons from '../../public/images/pic/persons.png'

const Home = () => {
  return (
    <div>
      <section className='flex w-full h-screen justify-center items-center bg-white pt-[9vh]'>
        <div className='container flex flex-row w-250 justify-between items-start'>
          <img src={homeImg} className='w-100 h-auto object-contain' alt="" />
          <div className='flex flex-col w-140 gap-1'>
            <h1 className='font-montserrat font-bold text-[40px] leading-[135%]'>Kami Spesialis Desain Interior dan <span className='text-primary'>Eksterior Profesional</span></h1>
            <p className='font-poppins font-medium text-gray text-[16px] leading-[165%]'>Kami adalah tim desain yang berfokus pada menciptakan ruang yang estetis, fungsional, dan sesuai kebutuhan klien. Dengan pengalaman dalam berbagai proyek mulai dari hunian pribadi, komersial, hingga tempat ibadah kami hadir untuk mewujudkan ide dan visi Anda menjadi ruang yang nyata dan inspiratif.</p>
            <div className='flex flex-row mt-5 gap-7 items-center'>
              <a href="" className='font-poppins font-bold text-white text-[14px] bg-gradient rounded-[50px] py-3 px-4.5 items-center'>Kunjungi Kami</a>
              <div className='flex flex-row gap-3 items-center'>
                <img src={persons} className='w-30 h-auto object-contain' alt="" />
                <div className='flex flex-col'>
                  <h1 className='font-poppins font-semibold text-[18px] text-primary'>250+</h1>
                  <p className='font-poppins font-medium text-black/50 text-[13px]'>Orang menemukan makna sejati</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
