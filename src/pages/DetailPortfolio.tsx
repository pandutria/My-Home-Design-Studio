import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import logo from '../../public/images/logo/logo.svg'
import Footer from '../components/Footer';
import { PortfolioData } from '../assets/PortfolioData';
import { HashLink } from 'react-router-hash-link'

const DetailPortfolio = () => {
    const { name } = useParams();
    const [selectedData, setSelectedData] = useState<PortfolioProps | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);

    interface PortfolioProps {
        id: number;
        name: string;
        desc: string;
        text: string;
        image: string;
        imageData: { 
            id: number; 
            image: string 
        }[];
    }

    useEffect(() => {
        const fetchData = () => {
            const findData = PortfolioData.find((item) => {
                const data = item.name === name;
                return data;
            });

            if (findData) {
                setSelectedData(findData);
            }
        }

        fetchData();
    });
  return (
    <div>
      <nav className='flex overflow-x-hidden'>
        <div className='fixed top-0 flex flex-row w-full justify-center bg-white lg:h-[11vh] md:h-[9vh] h-[10vh] items-center border-[1px] border-[#C4C4C4] z-[9999]'>
          <div className='container flex flex-row lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center'>
            <div className='flex flex-row items-center lg:gap-5 md:gap-5 gap-3'>
              <Link to="/">
                <img src={logo} className='lg:w-16 md:w-16 w-12 h-auto object-contain' alt="" />
              </Link>
              <div className='flex flex-col'>
                <h1 className='font-logo font-semibold text-black lg:text-[15px] md:text-[15px] text-[14px]'><span className='text-primary'>My</span> Home</h1>
                <h1 className='font-logo font-semibold text-black lg:text-[15px] md:text-[15px] text-[14px]'>Design Studio</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className='flex w-full lg:mb-12 lg:mt-12 mb-14 mt-4 lg:min-h-screen justify-center items-center bg-white lg:pt-[9vh] md:pt-[9vh] pt-[10vh]'>
        <div className='container flex flex-row lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:pt-0 md:pt-15 pt-8 justify-between items-start'>
            <div className="flex lg:flex-row flex-col justify-between lg:gap-14 gap-8 w-full items-start font-poppins">
                <div className="flex flex-col" data-aos="fade-right">
                    <img src={selectedData?.imageData[selectedImage].image} className='lg:w-[500px] w-full lg:h-[440px] h-[240px] object-cover rounded-sm' alt="" />
                    <div className="overflow-x-auto lg:w-[500px] w-[320px]">
                        <div className="flex gap-6 items-center mt-6 w-max">
                            {selectedData?.imageData.map((item, index) => (
                                <div className="cursor-pointer" key={index}>
                                    <img src={item.image} onClick={() => setSelectedImage(index)} className='w-[180px] h-[100px] hover:opacity-80 duration-200 object-cover' alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col" data-aos="fade-left">
                    <p className='lg:text-[20px] text-[16px]'>{selectedData?.desc}</p>
                    <h1 className='lg:text-[34px] text-[24px] font-medium'>{selectedData?.name}</h1>
                    <p className='text-justify whitespace-pre-line lg:text-[16px] text-[12px] mt-2'>{selectedData?.text}</p>
                    <HashLink to="/#contact">
                        <button className='w-fit bg-[#800000] border-2 border-[#800000] hover:text-[#800000] hover:bg-transparent duration-200 text-white font-semibold px-12 py-3 mt-8 cursor-pointer rounded-sm text-[16px]'>Kontak</button>
                    </HashLink>
                </div>
            </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default DetailPortfolio
