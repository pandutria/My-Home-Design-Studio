import { useState } from 'react'
import about from '../../public/images/pic/about.png'
import aboutPhoto from '../../public/images/pic/+12photo.png'
import plygon from '../../public/images/icon/polygon.png'
import checklist from '../../public/images/icon/checklist.png'

const Project = () => {
  const [project, setProject] = useState ("interior")
  const projectText = ["Interior penginapan didesain untuk memberikan kenyamanan sekaligus menghadirkan nilai luhur. Ruang-ruangnya mendukung aktivitas relaksasi maupun meditasi dengan suasana yang hangat dan penuh ketenangan.", "Kami mendesain eksterior dengan memperhatikan keselarasan bentuk, fungsi, dan konteks lingkungan. Setiap detail ditata agar menciptakan tampilan yang estetis, kuat secara visual, dan mendukung karakter bangunan secara menyeluruh."]
  const checkListText1 = ["Penataan ruang sesuai kebutuhan klien", "Desain fasad yang menarik dan fungsional"]
  const checkListText2 = ["Pemilihan material warna yang harmonis", "Penataan lanskap dan area luar"]
  const checkListText3 = ["Tata furnitur yang menyatu", "Material tahan cuaca dan estetis"]

  return (
    <div>
      <section className='flex w-full justify-center lg:pt-20 md:pt-20 pt-15'>
        <div className='container flex lg:flex-row md:flex-col flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between'>
            <img data-aos="fade-right" src={about} className='lg:w-100 md:w-full w-full lg:h-full md:h-auto rounded-[10px] lg:object-cover md:object-contain' alt="" />
            <div data-aos="fade-left" className='flex flex-col lg:w-140 md:w-full gap-3 lg:mt-0 md:mt-10 mt-7'>
                <h1 className='font-poppins font-semibold text-white lg:text-[14px] md:text-[14px] text-[13px] bg-primary rounded-[50px] py-1.5 px-4.5 items-center w-fit'>Project Kami</h1>
                <h1 className='font-poppins font-bold lg:text-[33.5px] md:text-[33.5px] text-[20px] leading-[135%]'>Ruang Sakral yang Menyatukan <span className='text-primary'>Keindahan dan Kedamaian</span></h1>
                <p className='font-poppins font-medium text-gray lg:text-[14.5px] md:text-[14.5px] text-[14px] leading-[165%]'>Ini adalah contoh project kami, yaitu tentang penginapan yang dirancang dengan konsep menyatu bersama ruang sakral di dalamnya. Desain ini menghadirkan suasana tenang dan damai, memadukan keindahan arsitektur dengan nilai-nilai spiritualitas yang mendalam.</p>
                <div className='flex lg:flex-row md:flex-row flex-col w-full h-full gap-4 mt-2'>
                    <div className='flex flex-col w-full gap-4'>
                        <div className='flex flex-row w-full lg:pr-15 md:pr-15 pr-0 gap-8'>
                            <div onClick={() => setProject("interior")} className='cursor-pointer flex flex-col w-full items-center'>
                                <h1 className={`${project == 'interior' ? 'text-primary' : 'text-[#979797]'} font-poppins font-medium text-[16px]`}>Interior Design</h1>
                                <div className='flex w-full justify-center items-center'>
                                    <hr className={`${project == 'interior' ? 'border-[#B71C1C]' : 'border-[#979797]'} w-full border-[1.2px] mt-4`}/>
                                    <img src={plygon} className={`${project == 'interior' ? 'flex' : ' hidden'} absolute w-5 h-auto object-contain`} alt="" />
                                </div>
                            </div>
                            <div onClick={() => setProject("exterior")} className='cursor-pointer flex flex-col w-full items-center'>
                                <h1 className={`${project == 'exterior' ? 'text-primary' : 'text-[#979797]'} font-poppins font-medium text-[16px]`}>Exterior Design</h1>
                                <div className='flex w-full justify-center items-center'>
                                    <hr className={`${project == 'exterior' ? 'border-[#B71C1C]' : 'border-[#979797]'} w-full border-[1.2px] mt-4`}/>
                                    <img src={plygon} className={`${project == 'exterior' ? 'flex' : ' hidden'} absolute w-5 h-auto object-contain`} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='font-poppins font-medium text-gray text-[14px]'>{project == 'interior' ? projectText[0] : projectText[1]}</p>
                        <div className='flex flex-col gap-2.5'>
                            <div className='flex flex-row gap-3 items-center'>
                                <img src={checklist} className='w-4.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium text-[14px]'>{project == 'interior' ? checkListText1[0] : checkListText1[1]}</p>
                            </div>
                            <div className='flex flex-row gap-3 items-center'>
                                <img src={checklist} className='w-4.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium text-[14px]'>{project == 'interior' ? checkListText2[0] : checkListText2[1]}</p>
                            </div>
                            <div className='flex flex-row gap-3 items-center'>
                                <img src={checklist} className='w-4.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium text-[14px]'>{project == 'interior' ? checkListText3[0] : checkListText3[1]}</p>
                            </div>
                        </div>
                    </div>
                    <img src={aboutPhoto} className='lg:w-43 md:w-43 w-full lg:h-47 md:h-47 h-auto rounded-[5px] lg:object-cover md:object-cover object-contain lg:self-end md:self-end lg:mt-0 md:mt-0 mt-5' alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Project
