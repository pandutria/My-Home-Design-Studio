import about1 from "../../public/images/icon/about1.png"
import about2 from "../../public/images/icon/about2.png"
import about3 from "../../public/images/icon/about3.png"
import aboutImg1 from "../../public/images/pic/about1.png"
import aboutImg2 from "../../public/images/pic/about2.png"
import aboutImg3 from "../../public/images/pic/about3.png"
import aboutImg4 from "../../public/images/pic/about4.png"

const About = () => {
  return (
    <div>
      <section id="about" className='flex w-full lg:pt-0 md:pt-20 pt-15 lg:pb-20 md:pb-20 pb-15 justify-center'>
        <div className='container flex lg:flex-row md:flex-col flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-end'>
            <div data-aos="fade-right" className='flex flex-col lg:w-135 w-full gap-2'>
                <h1 className='font-montserrat font-bold lg:text-[42px] md:text-[42px] text-[30px]'>Tentang <span className='text-primary'>Studio Kami</span></h1>
                <p className='font-poppins font-medium text-gray lg:text-[15px] md:text-[15px] text-[14px]'>My Home Design Studio adalah studio desain interior dan eksterior yang mengedepankan estetika, fungsi, dan kenyamanan. Dengan pengalaman lebih dari 5 tahun, kami membantu klien menciptakan ruang yang selaras dengan gaya hidup dan nilai mereka.</p>
                <div className='flex flex-col gap-5 mt-5'>
                    <div className='flex flex-row gap-3 items-start'>
                        <img src={about1} className='w-8 h-auto object-contain' alt="" />
                        <div className='flex flex-col mt-0.5 gap-1'>
                            <h1 className='font-poppins font-semibold text-[17px]'>Tata Ruang Modern</h1>
                            <p className='font-poppins font-medium text-gray lg:text-[15px] md:text-[15px] text-[14px]'>Bagi kami, ruang bukan sekadar tempat tapi bagian dari hidup Anda. Desain kami disesuaikan agar fungsional, estetik, dan mencerminkan karakter pribadi Anda.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 items-start'>
                        <img src={about2} className='w-8 h-auto object-contain' alt="" />
                        <div className='flex flex-col mt-0.5 gap-1'>
                            <h1 className='font-poppins font-semibold text-[17px]'>Gaya Rumah Harmonis</h1>
                            <p className='font-poppins font-medium text-gray lg:text-[15px] md:text-[15px] text-[14px]'>Kami menghadirkan desain yang menggabungkan keindahan dan kenyamanan, menciptakan ruang yang terasa hangat dan menyenangkan untuk ditinggali.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 items-start'>
                        <img src={about3} className='w-8 h-auto object-contain' alt="" />
                        <div className='flex flex-col mt-0.5 gap-1'>
                            <h1 className='font-poppins font-semibold text-[17px]'>Ruang Indah, Hidup Lebih Nyaman</h1>
                            <p className='font-poppins font-medium text-gray lg:text-[15px] md:text-[15px] text-[14px]'>Setiap sudut kami rancang dengan hati, menyatu dengan gaya hidup Anda dan membawa ketenangan dalam keseharian.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className='flex flex-row lg:mt-0 md:mt-10 mt-8 lg:gap-5 md:gap-10 gap-5'>
                <div className='flex flex-col gap-7'>
                    <img src={aboutImg1} className='lg:w-50 md:w-full h-auto object-contain' alt="" />
                    <img src={aboutImg2} className='lg:w-50 md:w-full h-auto object-contain' alt="" />
                </div>
                <div className='flex flex-col gap-7'>
                    <img src={aboutImg3} className='lg:w-50 md:w-full h-auto object-contain' alt="" />
                    <img src={aboutImg4} className='lg:w-50 md:w-full h-auto object-contain' alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
