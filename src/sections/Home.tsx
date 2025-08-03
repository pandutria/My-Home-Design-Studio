import homeImg from '../../public/images/pic/home.png'
import persons from '../../public/images/pic/persons.png'

const Home = () => {
  return (
    <div>
      <section id='home' className='flex w-full lg:h-screen justify-center items-center bg-white lg:pt-[9vh] md:pt-[9vh] pt-[10vh]'>
        <div className='container flex flex-row lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:pt-0 md:pt-15 pt-8 justify-between items-start'>
          <img data-aos="fade-right" src={homeImg} className='lg:flex md:flex hidden lg:w-100 md:w-80 h-auto object-contain' alt="" />
          <div data-aos="fade-left" className='flex flex-col lg:w-140 md:w-95 w-full lg:gap-1 md:gap-2 gap-2'>
            <h1 className='font-montserrat font-bold lg:text-[40px] md:text-[30px] text-[30px] leading-[135%]'>Kami Spesialis Desain Interior dan <span className='text-primary'>Eksterior Profesional</span></h1>
            <p className='font-poppins font-medium text-gray lg:text-[16px] md:text-[14px] text-[14px] leading-[165%]'>Kami adalah tim desain yang berfokus pada menciptakan ruang yang estetis, fungsional, dan sesuai kebutuhan klien. Dengan pengalaman dalam berbagai proyek mulai dari hunian pribadi, komersial, hingga tempat ibadah kami hadir untuk mewujudkan ide dan visi Anda menjadi ruang yang nyata dan inspiratif.</p>
            <div className='lg:flex md:hidden flex flex-row mt-5 gap-7 items-center'>
              <a href="" className='font-poppins font-bold text-white lg:text-[14px] md:text-[12px] text-[12px] bg-gradient rounded-[50px] py-3 px-4.5 items-center'>Kunjungi Kami</a>
              <div className='lg:flex hidden flex-row gap-3 items-center'>
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
