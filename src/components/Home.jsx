import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
import MyImage from '../assets/images.jpeg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e5e4e2]'>
      
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div>
            <img className='hidden sm:flex scale-50 mt-12 h-[500px] w-[500px] rounded-full' src={MyImage} alt="Matteo Sanna" />
        </div>
        <p className='text-[#b22222] text-lg'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#555d50]'>Matteo Sanna</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#555555]'>I am a full stack developer</h2>
        <p className='text-[#555555] py-4 max-w-[700px]'>with a background in Logistics Administration. Trying to use my web programming talents to offer online applications that aid in company initiative.</p>
      
      <div>
          <button className='text-black group border-2 px-6 py-3 my-2 flex items-center border-black hover:bg-[#b22222] hover:border-black'> 
            <Link to='projects' smooth={true} duration={500}>
                My Projects
            </Link>
            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
          </button>
      </div>
      </div>
    </div>
  )
}

export default Home
