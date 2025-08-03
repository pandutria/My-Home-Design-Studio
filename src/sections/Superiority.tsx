import React from 'react'
import super1 from '../../public/images/pic/superior1.png'
import super2 from '../../public/images/pic/superior2.png'

const Superiority = () => {
  return (
    <div>
      <section className='flex w-full pt-20 justify-center'>
        <div className='container flex flex-row w-250 justify-between'>
          <div className='flex flex-col gap-5 w-145'>
            <div className='flex flex-row w-full gap-5'>
              <hr className='h-full border-primary border-[1.5px]' />
              <div className='flex flex-col gap-1'>
                <h1 className='font-poppins font-semibold text-white text-[13px] bg-primary rounded-[50px] py-1.5 px-4 items-center w-fit'>Mengapa Memilih Kami?</h1>
                <h1 className='font-poppins font-semibold text-[30px] mt-2'>Desain yang Melampaui Ekspektasi</h1>
                <p className='font-poppins font-medium text-gray text-[15px]'>Desain luar biasa untuk hasil yang tak biasa  kami menggabungkan estetika, fungsionalitas, dan nilai personal di setiap ruang.</p>
              </div>
            </div>
            <div className='flex flex-col gap-5 w-full'>
              <div className='flex flex-row gap-5 w-full'>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>5+</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Tahun Pengalaman</p>
                </div>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>12+</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Proyek Telah Selesai</p>
                </div>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>6</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Penghargaan Desain</p>
                </div>
              </div>
              <div className='flex flex-row gap-5 w-full'>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>75%</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Klien Kembali Membeli</p>
                </div>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>7</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Tim Kami Profesional</p>
                </div>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>100%</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%] mr-2'>Kepuasan Klien</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-5'>
            <img src={super1} className='w-45 h-full rounded-[5px] object-cover' alt="" />
            <img src={super2} className='w-45 h-full rounded-[5px] object-cover' alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Superiority
