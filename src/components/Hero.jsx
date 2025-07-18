import React from 'react'
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id='home' className='flex md:flex-row flex-col sm:py-16 py-6 sm:mt-10 mt-20'>
      <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className='ml-2 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>
            <span className='text-white mr-1'>20%</span>
            Discount For {""}
            <span className='text-white mr-1'>1 Month</span>
            Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden'/>
            {" "}
            <span className='text-gradient'>Generation</span>
            {" "}
            
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

          <h1 className='font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[150px] leading-[75px] w-full'>
            Payment Method.
          </h1>
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
              Our team of experts user a methodology to identify
              the credit card most likely to fit your needs.
              we examine annual percentage rates, annual fees.
          </p>
      </div>

      <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
         <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
         <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
         <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
         <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>

      <div className='ss:hidden flex justify-center items-center'>
        <GetStarted />
      </div>
  </section>
)

export default Hero
