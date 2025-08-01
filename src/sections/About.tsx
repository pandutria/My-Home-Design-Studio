import React from 'react'
import about from '../../public/images/pic/about.png'

const About = () => {
  return (
    <div>
      <section className='flex w-full justify-center pb-20'>
        <div className='container flex flex-row w-250 justify-between'>
            <img src={about} className='w-100 h-auto object-contain' alt="" />
            <div className='flex flex-col'>
                
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
