import super1 from '../../public/images/pic/superior1.png'
import super2 from '../../public/images/pic/superior2.png'

const Superiority = () => {
  return (
    <div className='flex overflow-x-hidden'>
      <section className='flex w-full lg:pt-20 md:pt-20 pt-15 justify-center'>
        <div className='container flex lg:flex-row md:flex-col flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between'>
          <div data-aos="fade-right" className='flex flex-col gap-5 lg:w-145 md:w-full w-full'>
            <div className='flex flex-row w-full gap-5'>
              <hr className='h-full border-primary border-[1.5px]' />
              <div className='flex flex-col gap-1'>
                <h1 className='font-poppins font-semibold text-white text-[13px] bg-primary rounded-[50px] py-1.5 px-4 items-center w-fit'>Mengapa Memilih Kami?</h1>
                <h1 className='font-poppins font-semibold lg:text-[30px] md:text-[30px] text-[25px] mt-2'>Desain yang Melampaui Ekspektasi</h1>
                <p className='font-poppins font-medium text-gray lg:text-[15px] md:text-[15px] text-[13px]'>Desain luar biasa untuk hasil yang tak biasa  kami menggabungkan estetika, fungsionalitas, dan nilai personal di setiap ruang.</p>
              </div>
            </div>
            <div className='flex flex-col gap-5 w-full'>
              <div className='flex lg:flex-row md:flex-row flex-col gap-5 w-full'>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>15+</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Tahun Pengalaman</p>
                </div>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>300</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Proyek Telah Selesai</p>
                </div>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>6</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Penghargaan Desain</p>
                </div>
              </div>
              <div className='flex lg:flex-row md:flex-row flex-col gap-5 w-full'>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>99%</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Klien Kembali Membeli</p>
                </div>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>7</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%]'>Dikerjakan oleh tim Profesional</p>
                </div>
                <div className='flex flex-col bg-gradient-two w-full px-5 pt-4 pb-6 rounded-[7.5px]'>
                  <h1 className='font-poppins font-bold text-white text-[40px]'>100%</h1>
                  <p className='font-poppins font-semibold text-white text-[17px] leading-[120%] mr-2'>Kepuasan Klien</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className='flex flex-row lg:mt-0 md:mt-10 mt-7 lg:w-auto md:w-full md:justify-between justify-between gap-5'>
            <img src={super1} className='lg:w-45 md:w-[47%] w-[47%] lg:h-full md:h-auto h-auto rounded-[5px] lg:object-cover md:object-contain object-contain' alt="" />
            <img src={super2} className='lg:w-45 md:w-[47%] w-[47%] lg:h-full md:h-auto h-auto rounded-[5px] lg:object-cover md:object-contain object-contain' alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Superiority
