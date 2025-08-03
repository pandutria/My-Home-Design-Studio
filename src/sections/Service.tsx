import React from 'react'
import service1 from '../../public/images/icon/service1.png'
import service2 from '../../public/images/icon/service2.png'
import service3 from '../../public/images/icon/service3.png'

const Service = () => {
  return (
    <div>
      <section className='flex w-full justify-center py-15 bg-primary'>
        <div className='container flex flex-col w-250 gap-3'>
            <h1 className='font-poppins font-semibold text-white text-[13px] bg-secondary rounded-[50px] w-fit py-2 px-5'>Layanan Kami</h1>
            <h1 className='font-poppins font-semibold text-white text-[35px] w-140 leading-[130%] mt-1'>Wujudkan Hunian Impian dengan Sentuhan Profesional</h1>
            <p className='font-poppins font-normal text-white text-[15.5px] w-140'>Kami menghadirkan berbagai layanan desain untuk menciptakan ruang yang indah, nyaman, dan selaras dengan gaya hidup Anda.</p>
            <div className='flex flex-row w-full gap-5 mt-5'>
                <div className='flex flex-col w-full bg-white rounded-[6px] gap-1 py-6 px-5'>
                    <img src={service1} className='w-9 h-9 object-contain' alt="" />
                    <h1 className='font-poppins font-semibold text-primary text-[20px] mt-2'>Desain Interior</h1>
                    <p className='font-poppins font-medium text-[#5F5F5F] text-[13px]'>Transformasi setiap sudut ruangan menjadi lebih estetis dan fungsional sesuai karakter Anda.</p>
                </div>
                <div className='flex flex-col w-full bg-white rounded-[6px] gap-1 py-6 px-5'>
                    <img src={service2} className='w-9 h-9 object-contain' alt="" />
                    <h1 className='font-poppins font-semibold text-primary text-[20px] mt-2'>Desain Eksterior</h1>
                    <p className='font-poppins font-medium text-[#5F5F5F] text-[13px]'>Ciptakan tampilan luar rumah yang memukau dan menyatu dengan lingkungan sekitar.</p>
                </div>
                <div className='flex flex-col w-full bg-white rounded-[6px] gap-1 py-6 px-5'>
                    <img src={service3} className='w-9 h-9 object-contain' alt="" />
                    <h1 className='font-poppins font-semibold text-primary text-[20px] mt-2'>Desain Komersial</h1>
                    <p className='font-poppins font-medium text-[#5F5F5F] text-[13px]'>Kami juga melayani desain untuk ruang usaha seperti hotel, kafe, dan kantor dengan pendekatan kreatif dan efisien.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Service
