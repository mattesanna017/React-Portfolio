import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#e5e4e2] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl text-[#555d50] font-bold inline border-b-4 border-[#b22222]'>About Me</p>
            </div>
            <div></div>
            </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#555555]'>
            <div className='sm:text-right text-3xl font-bold'>
                <p>Full Stack Web Developer with a background in Logistics administration and Customer Service. Looking forward to using my development expertise to create online applications that aid corporate goals. Obtained a certificate in web development from University of Manchester.</p>
            </div>
            <div className='text-lg'>
                <p>High skill working with broad, cross-functional teams to develop innovative and long-lasting company solutions is the result of experience in Logistics administration. Praised for being a persistent, resourceful, collaborative, and results-oriented problem solver. Excellent relationship-builder with excellent communication skills. Strong technical aptitude, determination, and a willingness to learn, develop, and succeed in any pursuit, contributing value to any organization or community, are all desirable qualities.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
