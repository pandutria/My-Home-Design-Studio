import React from 'react'
import testimonial1 from '../../public/images/pic/testimonial1.png'
import testimonial2 from '../../public/images/pic/testimonial2.png'
import testimonial3 from '../../public/images/pic/testimonial3.png'
import testimonial4 from '../../public/images/pic/testimonial4.png'
import testimonial5 from '../../public/images/pic/testimonial5.png'
import testimonial6 from '../../public/images/pic/testimonial6.png'

const Testimonials = () => {
  return (
    <div>
      <section className='flex w-full pt-20 pb-10 justify-center'>
        <div className='container flex flex-col w-250 gap-1 items-center'>
            <p className='uppercase font-poppins font-medium text-primary text-[16px] tracking-widest'>Testimoni</p>
            <h1 className='font-poppins font-bold text-[30px]'>Ulasan Klien Kami</h1>
            <div className='flex flex-row w-full mt-8 justify-between'>
                <img src={testimonial1} className='w-full h-auto object-contain' alt="" />
                <img src={testimonial2} className='w-full h-auto object-contain' alt="" />
                <img src={testimonial3} className='w-full h-auto object-contain' alt="" />
            </div>
            <div className='flex flex-row w-full -mt-3 justify-between'>
                <img src={testimonial4} className='w-full h-auto object-contain' alt="" />
                <img src={testimonial5} className='w-full h-auto object-contain' alt="" />
                <img src={testimonial6} className='w-full h-auto object-contain' alt="" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
