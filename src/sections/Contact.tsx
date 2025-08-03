import whatsaap from '../../public/images/icon/whatasaap.png'
import email from '../../public/images/icon/email.png'
import instagram from '../../public/images/icon/instagram-red.png'
import youtube from '../../public/images/icon/youtube-red.png'
import contact from '../../public/images/pic/contact.png'
import circle from '../../public/images/icon/circle.png'

const Contact = () => {
  return (
    <div>
      <section className="flex w-full justify-center lg:pt-10 md:pt-10 pt-10 pb-20">
        <div className="container flex flex-row w-250 justify-between">
            <div className="flex flex-col w-125 gap-3">
                <p className="font-poppins font-medium text-primary text-[12px] px-2.5 py-1.5 border-[2px] rounded-[50px] w-fit">Kontak Kami</p>
                <h1 className="font-poppins font-semibold text-[40px] leading-[120%]">Pesan Sekarang & Ubah <span className="text-primary">Ruang Anda Hari Ini</span></h1>
                <p className="font-poppins font-medium text-gray text-[14px] w-115 mt-1">Lagi pengen bikin rumah makin estetik? Atau kantor kamu butuh sentuhan desain biar makin kece? Kami siap bantu wujudkan ruang impianmu dari interior minimalis sampai eksterior yang bikin tetangga ngelirik</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row mt-2 items-center gap-2">
                    <img src={whatsaap} className='w-5 h-auto object-contain' alt="" />
                    <p className='font-poppins font-medium text-gray text-[13px]'>Ruko Pisa Grande B no 7, Banten 15810</p>
                  </div>
                  <div className="flex flex-row mt-2 items-center gap-2">
                    <img src={email} className='w-5 h-auto object-contain' alt="" />
                    <p className='font-poppins font-medium text-gray text-[13px]'>senyumsehatceria@gmail.com</p>
                  </div>
                  <div className="flex flex-row mt-2 items-center gap-2">
                    <img src={youtube} className='w-5 h-auto object-contain' alt="" />
                    <p className='font-poppins font-medium text-gray text-[13px]'>+62 1297786651</p>
                  </div>
                  <div className="flex flex-row mt-2 items-center gap-2">
                    <img src={instagram} className='w-5 h-auto object-contain' alt="" />
                    <p className='font-poppins font-medium text-gray text-[13px]'>+62 1297786651</p>
                  </div>
                </div>
                <img src={contact} className='w-120 h-auto object-contain mt-7' alt="" />
            </div>
            <div className='flex flex-col bg-white h-full rounded-[15px] px-5 py-4 items-center shadow-[0px_1px_12.4px_1px_rgba(0,0,0,0.25)]'>
              <div className='flex flex-row w-full'>
                <div className='flex flex-col'>
                  <div className='flex flex-row items-center gap-2'>
                    <h1 className='font-poppins font-semibold text-[14px]'>Namamu</h1>
                    <img src={circle} className='w-2 h-2' alt="" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

