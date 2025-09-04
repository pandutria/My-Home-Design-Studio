import { PortfolioData } from '../assets/PortfolioData'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section id='portfolio' className='flex font-poppins w-full lg:min-h-screen justify-center items-center bg-white lg:my-12 my-6'>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:pt-0 md:pt-15 pt-8 justify-between items-start'>
          <div className="text-center font-light lg:text-[18px] text-[12px] lg:w-[820px] w-full mx-auto" data-aos="fade-up">
            <p className='lg:leading-8 leading-normal'>Setiap desain bukan hanya sekadar bentuk, melainkan bagian dari perjalanan hidup yang penuh makna. Kami menghadirkan karya yang lahir dari cerita personal setiap klien.</p>
            <p className='my-2'>Di <span className='font-semibold text-[#800000]'>My Home Design Studio</span>, kami percaya,</p>
            <p>“Ada Perjalanan dalam Setiap Desain”</p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto mt-20 gap-16 items-start">
            {PortfolioData.map((item, index) => (
              <div onClick={() => navigate(`/detail/${item.name}`)} className={`${index % 2 ? 'lg:mt-20 mt-0' : 'mt-0'}`} key={index} data-aos="fade-up">
                <div className="flex relative group flex-col gap-6 cursor-pointer">
                  <div className="absolute bg-[#00000045] w-full h-0 group-hover:h-[300px] rounded-sm flex justify-center items-center duration-500 overflow-hidden">
                    <button onClick={() => navigate(`/detail/${item.name}`)} className='bg-white font-regular text-[20px] px-12 py-3 border-white border-3 hover:bg-transparent hover:text-white duration-200 cursor-pointer'>Detail</button>
                  </div>
                  <img src={item.image} className='object-cover w-[500px] h-[300px] rounded-sm' alt="" />
                  <div className="flex flex-col gap-1">
                    <h1 className='text-[20px]'>{item.name}</h1>
                    <p className='text-[18px] text-[#706C66]'>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
