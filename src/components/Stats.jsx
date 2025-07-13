import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
    <section className='flex justify-center ss:items-center items-start ss:flex-row flex-col flex-wrap mt-4 sm:mb-20 mb-6'>
      {stats.map((stats) => (
        <div key={stats.id} className='flex-1 flex justify-start items-center flex-row m-3'>
           <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stats.value}</h4>
           <p className='font-poppins font-semibold xs:text-[20px] text-[10px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stats.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats
