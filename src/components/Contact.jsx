import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#e5e4e2] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/fe9de62a-5eae-44a7-a85e-bdf2dbcdaa4a" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
              <p className='text-4xl text-[#555d50] font-bold inline border-b-4 border-[#b22222] '>Contact</p>
              <p className='text-[#555555] text-xl py-4'> Send a message by email: <a className='text-[#b22222]' href="mailto:atmason90@gmail.com">matteo.mog.sanna@gmail.com</a></p>
              <p className='text-[#555555] text-xl py-4'> --- OR ---</p>
              <p className='text-[#555555] text-xl py-4'>Fill out the form below to contact me</p>
          </div>
          <input className='bg-[#c9c0bb] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#c9c0bb]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#c9c0bb] p-2' name="message" rows="10"></textarea>
          <button className='text-black border-2 hover:bg-[#b22222] hover:border-black px-4 py-3 my-8 mx-auto items-center border-black'>Send</button>
      </form>
    </div>
  )
}

export default Contact
