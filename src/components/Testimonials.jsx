import React from 'react'
import { feedback } from '../constants'
import FeedbackCard from './postCard'

const Testimonials = () => (
    <section id='clients' className='sm:py-16 py-6 flex justify-center items-center flex-col relative'>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
          <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
            Your Post
          </h1>
          <div className='w-full md:mt-0 mt-6'>
             <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]'>
                Everything you need to accept card payments and grow business anywhere on the planet.
             </p>
          </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card}/>
          ))}
      </div>
    </section>
  )


export default Testimonials
