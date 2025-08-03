import React, { useState } from 'react'
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
      <section className='flex w-full justify-center pt-20'>
        <div className='container flex flex-row w-250 justify-between'>
            <img src={about} className='w-100 h-full rounded-[10px] object-cover' alt="" />
            <div className='flex flex-col w-140 gap-3'>
                <h1 className='font-poppins font-semibold text-white text-[14px] bg-primary rounded-[50px] py-1.5 px-4.5 items-center w-fit'>Project Kami</h1>
                <h1 className='font-poppins font-bold text-[33.5px] leading-[135%]'>Ruang Sakral yang Menyatukan <span className='text-primary'>Keindahan dan Kedamaian</span></h1>
                <p className='font-poppins font-medium text-gray text-[14.5px] leading-[165%]'>Ini adalah contoh project kami, yaitu tentang penginapan yang dirancang dengan konsep menyatu bersama ruang sakral di dalamnya. Desain ini menghadirkan suasana tenang dan damai, memadukan keindahan arsitektur dengan nilai-nilai spiritualitas yang mendalam.</p>
                <div className='flex flex-row w-full h-full gap-4 mt-2'>
                    <div className='flex flex-col w-full gap-4 self-start'>
                        <div className='flex flex-row w-full pr-15 gap-8'>
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
                    <img src={aboutPhoto} className='w-43 h-47 rounded-[5px] object-cover self-end' alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Project
