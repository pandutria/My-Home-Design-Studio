import { useState } from 'react';
import service1 from '../../public/images/icon/service1.png'
import service2 from '../../public/images/icon/service2.png'
import service3 from '../../public/images/icon/service3.png'
import interior1 from "../../public/images/pic/indoor/1.png";
import interior2 from "../../public/images/pic/indoor/2.png";
import interior3 from "../../public/images/pic/indoor/3.png";
import interior4 from "../../public/images/pic/indoor/4.png";
import interior5 from "../../public/images/pic/indoor/5.png";
import interior6 from "../../public/images/pic/indoor/6.png";
import interior7 from "../../public/images/pic/indoor/7.png";
import interior8 from "../../public/images/pic/indoor/8.png";
import interior9 from "../../public/images/pic/indoor/9.png";
import interior10 from "../../public/images/pic/indoor/10.png";
import interior11 from "../../public/images/pic/indoor/11.png";
import interior12 from "../../public/images/pic/indoor/12.png";
import interior13 from "../../public/images/pic/indoor/13.png";
import interior14 from "../../public/images/pic/indoor/14.png";
import exterior1 from "../../public/images/pic/outdoor/4.png";
import exterior2 from "../../public/images/pic/outdoor/5.png";
import exterior3 from "../../public/images/pic/outdoor/6.png";
import komersial1 from "../../public/images/pic/komersial/1.jpg";
import komersial2 from "../../public/images/pic/komersial/2.jpg";
import komersial3 from "../../public/images/pic/komersial/3.jpg";
import komersial4 from "../../public/images/pic/komersial/4.jpg";
import komersial5 from "../../public/images/pic/komersial/5.jpg";
import komersial6 from "../../public/images/pic/komersial/6.jpg";
import komersial7 from "../../public/images/pic/komersial/7.jpg";
import komersial8 from "../../public/images/pic/komersial/8.jpg";
import komersial10 from "../../public/images/pic/komersial/10.jpg";
import komersial11 from "../../public/images/pic/komersial/11.jpg";
import komersial12 from "../../public/images/pic/komersial/12.jpg";
import left_arrow from "../../public/images/icon/left-arrow.png";
import right_arrow from "../../public/images/icon/right-arrow.png";

const Service = () => {
  const [project, setProject] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galeriInterior = [
    interior1, interior2, interior3, interior4, interior5, interior6, interior7,
    interior8, interior9, interior10, interior11, interior12, interior13, interior14,
  ];
  const galeriExterior = [exterior1, exterior2, exterior3];
  const galeriKomersial = [
    komersial1, komersial2, komersial3, komersial4, komersial5, komersial6,
    komersial7, komersial8, komersial10, komersial11, komersial12,
  ];

  const getCurrentGallery = () => {
    if (project === "interior") return galeriInterior;
    if (project === "exterior") return galeriExterior;
    if (project === "komersial") return galeriKomersial;
    return [];
  };

  return (
    <div>
      <section id='service' className='flex w-full justify-center py-15 bg-primary'>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 gap-3'>
          <h1 data-aos="fade-down" className='font-poppins font-semibold text-white text-[13px] bg-secondary rounded-[50px] w-fit py-2 px-5'>Layanan Kami</h1>
          <h1 data-aos="fade-down" className='font-poppins font-semibold text-white lg:text-[35px] md:text-[35px] text-[20px] lg:w-140 md:w-140 w-full leading-[130%] mt-1'>
            Wujudkan Hunian Impian dengan Sentuhan Profesional
          </h1>
          <p data-aos="fade-down" className='font-poppins font-normal text-white lg:text-[15.5px] md:text-[15.5px] text-[14px] lg:w-140 md:w-140 w-full'>
            Kami menghadirkan berbagai layanan desain untuk menciptakan ruang yang indah, nyaman, dan selaras dengan gaya hidup Anda.
          </p>
          <div data-aos="flip-left" className='flex lg:flex-row md:flex-row flex-col w-full gap-5 mt-5'>
            <div onClick={() => { setProject("exterior"); setCurrentImageIndex(0); setIsModalOpen(true); }} className='cursor-pointer flex flex-col w-full bg-white rounded-[6px] gap-1 py-6 px-5 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2'>
              <img src={service2} className='w-9 h-9 object-contain' alt="" />
              <h1 className='font-poppins font-semibold text-primary text-[20px] mt-2'>Desain Eksterior</h1>
              <p className='font-poppins font-medium text-[#5F5F5F] text-[13px]'>
                Ciptakan tampilan luar rumah yang memukau dan menyatu dengan lingkungan sekitar.
              </p>
            </div>
            <div onClick={() => { setProject("interior"); setCurrentImageIndex(0); setIsModalOpen(true); }} className='cursor-pointer flex flex-col w-full bg-white rounded-[6px] gap-1 py-6 px-5 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2'>
              <img src={service1} className='w-9 h-9 object-contain' alt="" />
              <h1 className='font-poppins font-semibold text-primary text-[20px] mt-2'>Desain Interior</h1>
              <p className='font-poppins font-medium text-[#5F5F5F] text-[13px]'>
                Transformasi setiap sudut ruangan menjadi lebih estetis dan fungsional sesuai karakter Anda.
              </p>
            </div>
            <div onClick={() => { setProject("komersial"); setCurrentImageIndex(0); setIsModalOpen(true); }} className='cursor-pointer flex flex-col w-full bg-white rounded-[6px] gap-1 py-6 px-5 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2'>
              <img src={service3} className='w-9 h-9 object-contain' alt="" />
              <h1 className='font-poppins font-semibold text-primary text-[20px] mt-2'>Desain Komersial</h1>
              <p className='font-poppins font-medium text-[#5F5F5F] text-[13px]'>
                Kami juga melayani desain untuk ruang usaha seperti hotel, kafe, dan kantor dengan pendekatan kreatif dan efisien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed flex flex-row top-0 left-0 w-full lg:px-20 md:px-10 px-5 h-screen overflow-hidden bg-black bg-opacity-70 justify-between items-center z-[99999]"
        >
          {currentImageIndex > 0 ? (
            <img
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => prev - 1); }}
              src={left_arrow}
              className="cursor-pointer lg:w-12 md:w-12 w-10 h-auto object-contain"
              alt=""
            />
          ) : (
            <div className="lg:w-12 md:w-12 w-10" />
          )}

          <img
            onClick={(e) => e.stopPropagation()}
            src={getCurrentGallery()[currentImageIndex]}
            className="lg:w-[90%] md:w-[80%] w-[65%] max-w-3xl object-cover rounded-[10px]"
            alt=""
          />

          {currentImageIndex < getCurrentGallery().length - 1 ? (
            <img
              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => prev + 1); }}
              src={right_arrow}
              className="cursor-pointer lg:w-12 md:w-12 w-10 h-auto object-contain"
              alt=""
            />
          ) : (
            <div className="lg:w-12 md:w-12 w-10" />
          )}
        </div>
      )}
    </div>
  )
}

export default Service;
