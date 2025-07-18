import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMadia } from '../constants'

const Footer = () => (
    <section className='flex justify-center items-center sm:py-16 py-6 flex-col'>
      <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
         <div className='flex-1 flex flex-col justify-start mr-10'>
            <img src={logo} alt='hoobank'
            className='w-[266px] h-[72x] object-contain'/>

            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310x]'>
               A new way to make the payments easy, reliable and secure.
            </p>
         </div>

         <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
            {footerLinks.map((footerLink) => (
              <div key={footerLink.key}
              className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                 <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                    {footerLink.title}
                 </h4>

                 <ul className='list-none mt-4'>
                  {footerLink.links.map((link, index) => (
                    <li key={link.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                    ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                       {link.name}
                    </li>
                  ))}
                 </ul>
              </div>
            ))}
         </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
         <p className='font-poppins font-normal text-center text-[18x] leading-[27px] text-white'>
            2021 Hoobank. All right Reserved.
         </p>
         <div className='flex flex-row md:mt-0 mt-6'>
            {socialMadia.map((social, index) => (
              <img 
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer
            ${index !== socialMadia.length -1 ? "mr-6" : "mr-0"}`}
              />
            ))}
         </div>
      </div>
      
    </section>
)

export default Footer
