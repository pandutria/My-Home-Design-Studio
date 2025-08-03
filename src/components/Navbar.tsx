import logo from '../../public/images/logo/logo.svg'

const Navbar = () => {
  return (
    <div>
      <section className='fixed flex w-full justify-center bg-white lg:h-[11vh] md:h-[9vh] h-[10vh] items-center border-[1px] border-[#C4C4C4] z-99'>
        <div className='container flex flex-row lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center'>
          <div className='flex flex-row items-center lg:gap-5 md:gap-5 gap-3'>
            <img src={logo} className='lg:w-16 md:w-16 w-12 h-auto object-contain' alt="" />
            <div className='flex flex-col'>
              <h1 className='font-logo font-semibold text-black lg:text-[15px] md:text-[15px] text-[14px]'><span className='text-primary'>My</span> Home</h1>
              <h1 className='font-logo font-semibold text-black lg:text-[15px] md:text-[15px] text-[14px]'>Design Studio</h1>
            </div>
          </div>
          <div className='lg:flex md:flex hidden flex-row gap-7 items-center'>
            <a href="" className='font-poppins font-semibold text-primary text-[15px]'>Beranda</a>
            <a href="" className='font-poppins font-normal text-[15px]'>Tentang</a>
            <a href="" className='font-poppins font-normal text-[15px]'>Galeri</a>
            <a href="" className='font-poppins font-normal text-[15px]'>Testimoni</a>
            <a href="" className='font-poppins font-semibold text-white text-[13.5px] bg-primary rounded-[50px] py-2 px-4 items-center'>Kontak Kami</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar
