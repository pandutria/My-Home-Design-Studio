import logo from '../../public/images/logo/logo.svg'
import hamburger from '../../public/images/icon/hamburger.png'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      const sections = ['home', 'about', 'service', 'testimonial']
      for (let id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='flex overflow-x-hidden'>
      <section className='fixed top-0 flex flex-row w-full justify-center bg-white lg:h-[11vh] md:h-[9vh] h-[10vh] items-center border-[1px] border-[#C4C4C4] z-[9999]'>
        <div className='container flex flex-row lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center'>
          <div className='flex flex-row items-center lg:gap-5 md:gap-5 gap-3'>
            <img src={logo} className='lg:w-16 md:w-16 w-12 h-auto object-contain' alt="" />
            <div className='flex flex-col'>
              <h1 className='font-logo font-semibold text-black lg:text-[15px] md:text-[15px] text-[14px]'><span className='text-primary'>My</span> Home</h1>
              <h1 className='font-logo font-semibold text-black lg:text-[15px] md:text-[15px] text-[14px]'>Design Studio</h1>
            </div>
          </div>
          <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 md:translate-x-0 transition-transform duration-500 ease-in-out lg:flex md:flex flex lg:relative md:relative absolute top-0 right-0 lg:h-auto md:h-auto h-screen lg:flex-row md:flex-row flex-col lg:gap-7 md:gap-6 gap-5 lg:px-0 md:px-0 px-5 bg-white justify-center items-center`}>
            <a href="#home" className={`${activeSection == 'home' ? 'text-primary font-semibold' : 'text-black font-normal'} font-poppins text-[15px]`}>Beranda</a>
            <a href="#about"className={`${activeSection == 'about' ? 'text-primary font-semibold' : 'text-black font-normal'} font-poppins text-[15px]`}>Tentang</a>
            <a href="#service" className={`${activeSection == 'service' ? 'text-primary font-semibold' : 'text-black font-normal'} font-poppins text-[15px]`}>Layanan</a>
            <a href="#testimonial" className={`${activeSection == 'testimonial' ? 'text-primary font-semibold' : 'text-black font-normal'} font-poppins text-[15px]`}>Testimoni</a>
            <a href="#contact" className='font-poppins font-semibold text-white text-[13.5px] bg-primary rounded-[50px] py-2 px-4 items-center'>Kontak Kami</a>
          </div>
          <img src={hamburger} onClick={() => setIsOpen(!isOpen)} className={` ${isOpen ? 'rotate-90' : 'rotate-0'} lg:hidden md:hidden flex w-6 h-auto object-contain cursor-pointer transition-transform duration-300 z-50 relative`} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Navbar
