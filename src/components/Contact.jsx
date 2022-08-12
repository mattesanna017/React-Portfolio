import React from 'react';
import { Link } from 'react-scroll';


const Footer = () => {
  return (
      <div>
        <footer className='fixed w-full bottom-0 p-4 bg-[#c9c0bb] sm:p-6'>
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-[#b22222] sm:text-center">© 2022 <a href="https://github.com/mattesanna017" class="hover:underline">Matteo Sanna</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-black dark:text-gray-400 sm:mt-0">
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
                    <li className='hover:text-[#b22222]'>
                        <a href="https://www.linkedin.com/in/matteo-sanna-837170106/" target='#'>LinkedIn</a>
                    </li>
                    <li className='hover:text-[#b22222]'>
                        <a href="https://github.com/mattesanna017" target='#'>GitHub</a>
                    </li>
                </ul>
            </div>
        </footer>
      </div>
  )
}

export default Footer
