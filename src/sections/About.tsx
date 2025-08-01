import React from 'react'
import about from '../../public/images/pic/about.png'
import aboutPhoto from '../../public/images/pic/+12photo.png'
import plygon from '../../public/images/icon/polygon.png'

const About = () => {
  return (
    <div>
      <section className='flex w-full justify-center pb-20'>
        <div className='container flex flex-row w-250 justify-between'>
            <img src={about} className='w-100 h-auto object-contain' alt="" />
            <div className='flex flex-col w-140 gap-3'>
                <a href="" className='font-poppins font-semibold text-white text-[14px] bg-primary rounded-[50px] py-1 px-4.5 items-center w-fit'>Tentang Vihara</a>
                <h1 className='font-poppins font-bold text-[33.5px] leading-[135%]'>Ruang Sakral yang Menyatukan Keindahan dan Kedamaian</h1>
                <p className='font-poppins font-medium text-gray text-[14px] leading-[165%]'>Setiap elemen ruang di vihara kami dirancang untuk menciptakan suasana yang tenang, sakral, dan estetis. Kami menghadirkan desain interior dan eksterior yang harmonis, menyatu dengan nilai spiritualitas, memberikan kenyamanan bagi setiap umat dalam beribadah dan bermeditasi.</p>
                <div className='flex flex-row w-full h-full gap-5 items-end'>
                    <div className='flex flex-col w-full gap-4 self-start'>
                        <div className='flex flex-row w-full gap-8'>
                            <div className='cursor-pointer flex flex-col w-full items-center'>
                                <h1 className='font-poppins font-medium text-primary text-[14px]'>Interior Design</h1>
                                <div className='flex w-full justify-center items-center'>
                                    <hr  className='w-full border-[1.2px] border-[#B71C1C] mt-4'/>
                                    <img src={plygon} className='absolute w-5 h-auto object-contain' alt="" />
                                </div>
                            </div>
                            <div className='cursor-pointer flex flex-col w-full items-center'>
                                <h1 className='font-poppins font-medium text-lightGray text-[14px]'>Exterior Design</h1>
                                <div className='flex w-full justify-center items-center'>
                                    <hr  className='w-full border-[1.2px] border-[#979797] mt-4'/>
                                    <img src={plygon} className='hidden absolute w-5 h-auto object-contain' alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='font-poppins font-medium text-gray text-[14px]'>Untuk Interior nya Memiliki  Di sini, kami mengajarkan ajaran luhur penuh welas asih, membimbing praktik meditasi sebagai sarana yang enak dan hayyuk sekali bosque mantao</p>
                    </div>
                    <img src={aboutPhoto} className='w-48 h-auto object-contain' alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
