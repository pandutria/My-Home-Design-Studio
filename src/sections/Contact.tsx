import whatsaap from '../../public/images/icon/whatasaap.png'
import email from '../../public/images/icon/email.png'
import instagram from '../../public/images/icon/instagram-red.png'
import youtube from '../../public/images/icon/youtube-red.png'
import contact from '../../public/images/pic/contact.png'
import circle from '../../public/images/icon/circle.png'
import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("")
  const [phone, setphone] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [date, setDate] = useState("")
  const [service, setService] = useState("")
  const [question, setQuestion] = useState("")

  const handleSend = () => {
  const message = `*Pesanan Desain Ruang*
=======================
*Nama:* ${name || '-'}
*Telepon:* ${phone || '-'}
*Email:* ${emailAddress || '-'}
*Tanggal Pemesanan:* ${date || '-'}
*Layanan:* ${service || '-'}
*Pertanyaan Tambahan:* ${question || '-'}

Terima kasih telah menghubungi My Home Design Studio! Kami akan segera menghubungi Anda.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "62895704440602";
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
};



  return (
    <div>
      <section id='contact' className="flex w-full justify-center lg:pt-10 md:pt-10 pt-10 pb-15">
        <div className="container flex lg:flex-row md:flex-row flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between">
            <div data-aos="fade-right" className="flex flex-col lg:w-125 md:w-85 gap-3">
                <p className="font-poppins font-medium text-primary text-[12px] px-2.5 py-1.5 border-[2px] rounded-[50px] w-fit">Kontak Kami</p>
                <h1 className="font-poppins font-semibold lg:text-[40px] md:text-[35px] text-[25px] leading-[120%]">Pesan Sekarang & Ubah <span className="text-primary">Ruang Anda Hari Ini</span></h1>
                <p className="font-poppins font-medium text-gray lg:text-[14px] md:text-[14px] text-[13px] lg:w-115 md:w-full mt-1">Lagi pengen bikin rumah makin estetik? Atau kantor kamu butuh sentuhan desain biar makin kece? Kami siap bantu wujudkan ruang impianmu dari interior minimalis sampai eksterior yang bikin tetangga ngelirik</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row mt-2 items-center gap-2">
                    <img src={whatsaap} className='w-5 h-auto object-contain' alt="" />
                    <p className='font-poppins font-medium text-gray text-[13px]'>+62 877-6967-0882</p>
                  </div>
                  <div className="flex flex-row mt-2 items-center gap-2">
                    <img src={email} className='w-5 h-auto object-contain' alt="" />
                    <p className='font-poppins font-medium text-gray text-[13px]'>homedesignstudiomail@gmail.com</p>
                  </div>
                  <div className="flex flex-row mt-2 items-center gap-2">
                    <img src={youtube} className='w-5 h-auto object-contain' alt="" />
                    <p className='font-poppins font-medium text-gray text-[13px]'>MyHome Design Studio</p>
                  </div>
                  <div className="flex flex-row mt-2 items-center gap-2">
                    <img src={instagram} className='w-5 h-auto object-contain' alt="" />
                    <p className='font-poppins font-medium text-gray text-[13px]'>myhomedesign.studio</p>
                  </div>
                </div>
                <img src={contact} className='lg:w-120 md:w-full h-auto object-contain mt-7' alt="" />
            </div>
            <div data-aos="fade-left" className='flex flex-col bg-white lg:w-110 md:w-80 h-full rounded-[15px] gap-6 px-7 py-5 items-center justify-center lg:mt-0 md:mt-0 mt-10 shadow-[0px_1px_12.4px_1px_rgba(0,0,0,0.25)]'>
              <div className='flex flex-row w-full gap-5'>
                <div className='flex flex-col w-full gap-2'>
                  <div className='flex flex-row items-center gap-2'>
                    <h1 className='font-poppins font-semibold text-[14px]'>Namamu</h1>
                    <img src={circle} className='w-2 h-2' alt="" />
                  </div>
                  <input type="text" value={name} onChange={(x) => setName(x.target.value)} className={`${name == "" ? 'text-gray' : 'text-black'} font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-primary focus:border-[2px]`} placeholder='Masukan Namamu'/>
                </div>
                <div className='flex flex-col w-full gap-2'>
                  <div className='flex flex-row items-center gap-2'>
                    <h1 className='font-poppins font-semibold text-[14px]'>Telpon</h1>
                    <img src={circle} className='w-2 h-2' alt="" />
                  </div>
                  <input type="text" value={phone} onChange={(x) => setphone(x.target.value)} className={`${phone == "" ? 'text-gray' : 'text-black'} font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-primary focus:border-[2px]`} placeholder='Masukan Teleponmu'/>
                </div>
              </div>
              <div className='flex flex-row w-full gap-5'>
                <div className='flex flex-col w-full gap-2'>
                  <div className='flex flex-row items-center gap-2'>
                    <h1 className='font-poppins font-semibold text-[14px]'>Alamat Email</h1>
                    <img src={circle} className='w-2 h-2' alt="" />
                  </div>
                  <input type="text" value={emailAddress} onChange={(x) => setEmailAddress(x.target.value)} className={`${emailAddress == "" ? 'text-gray' : 'text-black'} font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-primary focus:border-[2px]`} placeholder='Masukan Emailmu'/>
                </div>
                <div className='flex flex-col w-full gap-2'>
                  <div className='flex flex-row items-center gap-2'>
                    <h1 className='font-poppins font-semibold text-[14px]'>Tanggal</h1>
                    <img src={circle} className='w-2 h-2' alt="" />
                  </div>
                  <input type="text" value={date} onChange={(x) => setDate(x.target.value)} className={`${date == "" ? 'text-gray' : 'text-black'} font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-primary focus:border-[2px]`} placeholder='Masukan Tanggal'/>
                </div>
              </div>
              <div className='flex flex-col w-full gap-2'>
                  <div className='flex flex-row items-center gap-2'>
                    <h1 className='font-poppins font-semibold text-[14px]'>Layanan</h1>
                    <img src={circle} className='w-2 h-2' alt="" />
                  </div>
                  <select value={service} onChange={(x) => setService(x.target.value)} className={`${service == "" ? 'text-gray' : 'text-black'} font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-primary focus:border-[2px]`}>
                    <option value="">Silahkan Pilih Layanan</option>
                    <option value="Desain Interior">Design Interior</option>
                    <option value="Desain Exterior">Design Exterior</option>
                    <option value="Desain Komersial">Design Komersial</option>
                  </select>
              </div>
              <div className='flex flex-col w-full gap-2'>
                <div className='flex flex-row items-center gap-2'>
                  <h1 className='font-poppins font-semibold text-[14px]'>Pertanyaan</h1>
                  <img src={circle} className='w-2 h-2' alt="" />
                </div>
                <textarea value={question} onChange={(x) => setQuestion(x.target.value)} className={`${question == "" ? 'text-gray' : 'text-black'} font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] h-65 border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-primary focus:border-[2px]`} placeholder='Masukan Tanggal'/>
              </div>
              <a href="" onClick={handleSend} className="font-poppins font-semibold text-white bg-gradient rounded-[5px] lg:text-[15px] md:text-[15px] text-[14px] px-5 py-3 mt-2 w-fit self-start">Kirim Sekarang</a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

