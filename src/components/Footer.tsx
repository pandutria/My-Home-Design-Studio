import logo from '../../public/images/logo/logo.svg'
import facebook from '../../public/images/icon/facebook.png'
import instagram from '../../public/images/icon/instagram.png'
import tweeter from '../../public/images/icon/tweeter.png'
import youtube from '../../public/images/icon/youtube.png'
import wordpress from '../../public/images/icon/wordpress.png'

const Footer = () => {
  return (
    <div>
      <section className='flex w-full justify-center bg-thrdtinary'>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:py-15 md:py-15 py-10 lg:gap-10 md:gap-10 gap-5'>
          <div className='flex flex-row w-full items-start justify-between'>
            <img src={logo} className='lg:w-25 md:w-15 w-25 h-auto object-contain' alt="" />
            <div className='lg:flex md:flex hidden flex-col gap-4'>
              <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[13px]'>Tentang Kami</h1>
              <div className='flex flex-col gap-2'>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Tentang Kami</p>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Testimoni Klien</p>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Portofolio Proyek</p>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Kebijakan Privasi</p>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Karir</p>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Hubungi Kami</p>
              </div>
            </div>
            <div className='lg:flex md:flex hidden flex-col gap-4'>
              <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[13px]'>Layanan & Booking</h1>
              <div className='flex flex-col gap-2'>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Desain Interior</p>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Desain Eksterior</p>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Desain Komersial</p>
              </div>
            </div>
            <div className='lg:flex md:flex hidden flex-col gap-4'>
              <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[13px]'>Hubungi Kami</h1>
              <div className='flex flex-col gap-2'>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Konsultasi: +62-812-3456-7890</p>
                <p className='font-poppins font-normal text-white/80 lg:text-[13.5px] md:text-[11px]'>Booking: +62-812-9876-5432</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
            <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[13px]'>Media Sosial</h1>
              <div className='flex flex-row lg:gap-5 md:gap-4 gap-4 lg:mt-2 md:mt-2 mt-0'>
                <img src={facebook} className='lg:w-5 md:w-4 w-8 lg:h-5 md:h-4 h-8 object-contain' alt="" />
                <img src={instagram} className='lg:w-5 md:w-4 w-7 lg:h-5 md:h-4 h-8 object-contain' alt="" />
                <img src={tweeter} className='lg:w-5 md:w-4 w-8 lg:h-5 md:h-4 h-8 object-contain' alt="" />
                <img src={youtube} className='lg:w-5 md:w-4 w-8 lg:h-5 md:h-4 h-8 object-contain' alt="" />
                <img src={wordpress} className='lg:w-5 md:w-4 w-8 lg:h-5 md:h-4 h-8 object-contain' alt="" />
              </div>
            </div>
          </div>
          <hr className='w-full border-[1.5px] border-white/15 mt-5' />
          <p className='font-poppins font-normal text-white/75 lg:text-[14px] md:text-[14px] text-[10px] text-center self-center'>©2025 My Home Design Studio | Seluruh Hak Cipta Dilindungi</p>
        </div>
      </section>
    </div>
  )
}

export default Footer
