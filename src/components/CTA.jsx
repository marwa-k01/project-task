import React from 'react'
import Button from './Button'

const CTA = () => (
  <section className='flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow'>
    <div className='flex-1 flex flex-col'>
       <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
          Let's try now!
       </h2>
       <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
           Everything you need to accept card pyments and grow your business anywhere on the planet.
       </p>
    </div>
       <div className='flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10'>
          <Button/>
       </div>
  </section>
)


export default CTA
