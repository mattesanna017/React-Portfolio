import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#c9c0bb] text-black'>
       

        {/* navbar menu */}
        <ul className='hidden sm:flex'>
            <li className='hover:text-[#b22222]'>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='hover:text-[#b22222]'>
                <Link to='about' smooth={true} duration={500}>
                   About Me
                </Link>
            </li>
            <li className='hover:text-[#b22222]'>
                <Link to='resume' smooth={true} duration={500}>
                   Resume
                </Link>
            </li>
            <li className='hover:text-[#b22222]'>
                <Link to='projects' smooth={true} duration={500}>
                   Projects
                </Link>
            </li>
            <li className='hover:text-[#b22222]'>
                <Link to='contact' smooth={true} duration={500}>
                   Contact
                </Link>
            </li>
        </ul>
        
        {/* hamburger */}
        <div onClick={handleClick} className='sm:hidden z-40'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#c9c0bb] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:text-[#b22222]'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#b22222]'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                About Me
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#b22222]'>
                <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
                Resume
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#b22222]'>
                <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                Projects
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#b22222]'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-[#c9c0bb]' href='https://www.linkedin.com/in/matteo-sanna-837170106/' target='#'>LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-[#c9c0bb]' href='https://github.com/mattesanna017' target='#'>GitHub <FaGithub size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#53a795]'>
                    <a className='flex justify-between items-center w-full text-[#c9c0bb]' href='mailto:matteo.mog.sanna@gmail.com'>Email <HiOutlineMail size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-[#c9c0bb]' href='https://drive.google.com/file/d/1n3-aAWgL-MqKyabs3lv6xepxBGXuBb1V/view?usp=sharing' target='#'>Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    </div>
  
  )
}

export default Navbar
