import testimonial1 from '../../public/images/pic/testimonial1.png'
import testimonial2 from '../../public/images/pic/testimonial2.png'
import testimonial3 from '../../public/images/pic/testimonial3.png'
import testimonial4 from '../../public/images/pic/testimonial4.png'
import testimonial5 from '../../public/images/pic/testimonial5.png'
import testimonial6 from '../../public/images/pic/testimonial6.png'

const Testimonials = () => {
  return (
    <div>
      <section id='testimonial' className='flex w-full lg:pt-20 md:pt-20 pt-15 justify-center'>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 gap-1 items-center'>
            <p data-aos="fade-down" className='uppercase font-poppins font-medium text-primary text-[16px] tracking-widest'>Testimoni</p>
            <h1 data-aos="fade-down" className='font-poppins font-bold text-[30px]'>Ulasan Klien Kami</h1>
            <div className='flex flex-row flex-wrap w-full mt-8 justify-between'>
                <img data-aos="zoom-in-up" src={testimonial1} className='lg:w-80 md:w-90 w-full h-auto object-contain' alt="" />
                <img data-aos="zoom-in-up" src={testimonial2} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" src={testimonial3} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" src={testimonial4} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" src={testimonial5} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
                <img data-aos="zoom-in-up" src={testimonial6} className='lg:w-80 md:w-90 w-full h-auto object-contain lg:-mt-0 md:-mt-0 -mt-5' alt="" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
