import { useState } from 'react'
import testimonial1 from '../../public/images/pic/testimonial1.png'
import testimonial2 from '../../public/images/pic/testimonial2.png'
import testimonial3 from '../../public/images/pic/testimonial3.png'
import testimonial4 from '../../public/images/pic/testimonial4.png'
import testimonial5 from '../../public/images/pic/testimonial5.png'
import testimonial6 from '../../public/images/pic/testimonial6.png'
import testimonial7 from '../../public/images/pic/testimonial7.png'
import testimonial8 from '../../public/images/pic/testimonial8.png'
import close from '../../public/images/icon/close.png'

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalVideo, setModalVideo] = useState<String>("")

  const openModal = (videoSrc: String) => {
    setModalVideo(videoSrc)
    setIsModalOpen(true)
  }

  return (
    <div>
      <section id='testimonial' className='flex w-full lg:pt-20 md:pt-20 pt-15 justify-center'>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 gap-1 items-center'>
            <p data-aos="fade-down" className='uppercase font-poppins font-medium text-primary text-[16px] tracking-widest'>Testimoni</p>
            <h1 data-aos="fade-down" className='font-poppins font-bold text-[30px]'>Ulasan Klien Kami</h1>
            <div className='flex flex-row flex-wrap w-full mt-8 justify-between items-center'>
                <img data-aos="zoom-in-up" src={testimonial1} className='lg:w-80 md:w-90 w-full h-auto object-contain' alt="" />
                <img data-aos="zoom-in-up" src={testimonial2} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" src={testimonial3} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" src={testimonial4} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" src={testimonial5} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" src={testimonial6} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" onClick={() => openModal("https://firebasestorage.googleapis.com/v0/b/outgamble.appspot.com/o/lv_0_20250812104657.mp4?alt=media&token=97693d06-7f54-4a62-a1f3-04524a0e31f8")} src={testimonial7} className='cursor-pointer lg:w-120 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" onClick={() => openModal("https://firebasestorage.googleapis.com/v0/b/outgamble.appspot.com/o/lv_0_20250813114540.mp4?alt=media&token=d8e8a5f9-0d62-4b3f-a455-30f2404ce694")} src={testimonial8} className='cursor-pointer lg:w-120 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
            </div>
        </div>
      </section>
      {isModalOpen && modalVideo && (
        <div
          className="fixed top-0 w-full h-screen flex flex-row justify-center items-center px-5 bg-black bg-opacity-70 z-[99999]"
        >
          <video
            onClick={(e) => e.stopPropagation()}
            src={modalVideo.toString()}
            controls
            autoPlay
            className="w-auto rounded-[10px] h-screen object-contain"
          />
          <img src={close} onClick={() => setIsModalOpen(false)} className='absolute right-0 top-0 lg:mt-10 md:mt-10 mt-5 lg:mr-10 md:mr-10 mr-5 lg:w-12 md:w-12 w-10 h-auto object-contain' alt="" />
        </div>
      )}
    </div>
  )
}

export default Testimonials