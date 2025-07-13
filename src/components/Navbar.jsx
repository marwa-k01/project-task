import {useState } from 'react'

import { close, logo, menu} from '../assets';
import { navLinks } from '../constants';
import CreatePost from './CreatePost';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    
    const [showCreate, setShowCreate] = useState(false);

return (
    <nav className='fixed w-[93%] z-[10] backdrop-blur flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='hoobank'
        className='w-[150px] h-[40px]'/>

        <ul className='list-none mx-auto max-w-96 sm:flex hidden justify-between items-center flex-1'>
            {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-2'} text-white`}
                >   <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>

        <div className='absolute right-9'>
                {showCreate ? (
                    <CreatePost/>
                ) : (
                    <button onClick={() => setShowCreate(true)}
                    className='bg-blue-gradient flex items-center text-white px-4 py-1 rounded'><span className='sm:flex hidden'>Create Post</span><i className={`text-lg `}>+</i></button>
                )}
        </div>

        <div className='sm:hidden'>
            <img 
            src={toggle ? close : menu} 
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
            />


            <div
              className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
                <ul className='list-none flex flex-col justify-between items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                        >   <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
