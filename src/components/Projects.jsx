import React from 'react';
import techblog from '../assets/techblog.PNG';
import texteditor from '../assets/texteditor.PNG';
import socialnetwork from '../assets/socialnetworkapi.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import notetaker from '../assets/notetaker.PNG';


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#e5e4e2]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl text-[#555d50] font-bold inline border-b-4 text-gray-300 border-[#b22222]'>Projects</p>
            <p className='py-6 text-xl text-[#555555]'>View a few of my most recent projects</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

   
            
            {/* grid item */}
            <div style={{ backgroundImage: `url(${techblog})` }} className='shadow-lg shadow-[#cc6666] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-[#e5e4e2] tracking-wider'>
                        Tech Blog App
                    </span>
                    <div className='justify-center text-[#e5e4e2]'>
                        Social blog site for techies
                    </div>
                    <div className='justify-center text-[#e5e4e2]'>
                        MVC, JavaScript, CSS, MySql, Express
                    </div>
                    <div className='pt-8 text-center'>
                       <a href="https://my-tech-blog-w14.herokuapp.com/" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Deployment</button>
                        </a> 
                        <a href="https://github.com/mattesanna017/Tech-Blog-W14" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>

            {/* grid item */}
            <div style={{ backgroundImage: `url(${texteditor})` }} className='shadow-lg shadow-[#cc6666] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-[#e5e4e2] tracking-wider'>
                        Text Editor PWA
                    </span>
                    <div className='justify-center text-[#e5e4e2]'>
                        Progressive Web Application
                    </div>
                    <div className='justify-center text-[#e5e4e2]'>
                        JavaScript, IndexedDB, Express, Heroku
                    </div>
                    <div className='pt-8 text-center'>
                       <a href="https://text-editor-w19.herokuapp.com/" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Deployment</button>
                        </a> 
                        <a href="https://github.com/mattesanna017/Text-Editor-W19" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>

            {/* grid item */}
            <div style={{ backgroundImage: `url(${socialnetwork})` }} className='shadow-lg shadow-[#cc6666] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-[#e5e4e2] tracking-wider'>
                        Social Network API
                    </span>
                    <div className='justify-center text-[#e5e4e2]'>
                        Backend of a Social Media Site
                    </div>
                    <div className='justify-center text-[#e5e4e2]'>
                        JavaScript, Express, MongoDB
                    </div>
                    <div className='pt-8 text-center'>
                       <a href="https://youtu.be/gKpiIhXtqgo" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Demonstration</button>
                        </a> 
                        <a href="https://github.com/mattesanna017/Social-Network-API-W18" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>

            {/* grid item */}
            <div style={{ backgroundImage: `url(${ecommerce})` }} className='shadow-lg shadow-[#cc6666] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-[#e5e4e2] tracking-wider'>
                        E-commerce Backend
                    </span>
                    <div className='justify-center text-[#e5e4e2]'>
                        Backend of an E-Commerce site
                    </div>
                    <div className='justify-center text-[#e5e4e2]'>
                        JavaScript, MySql, Express
                    </div>
                    <div className='pt-8 text-center'>
                       <a href="https://youtu.be/9mfndUPzWAM" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Demonstration</button>
                        </a> 
                        <a href="https://github.com/mattesanna017/E-Commerce-BackEnd-W13" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>

             {/* grid item */}
             <div style={{ backgroundImage: `url(${notetaker})` }} className='shadow-lg shadow-[#cc6666] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-[#e5e4e2] tracking-wider'>
                        Note Taker
                    </span>
                    <div className='justify-center text-[#e5e4e2]'>
                        Keep track of tasks
                    </div>
                    <div className='justify-center text-[#e5e4e2]'>
                        Express, CSS, HTML, Concurrently
                    </div>
                    <div className='pt-8 text-center'>
                       <a href="https://note-taker-1122.herokuapp.com/" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Deployment</button>
                        </a> 
                        <a href="https://github.com/mattesanna017/Note-Taker-W11" target='#'>
                           <button className='text-center text-[#b22222] rounded-lg px-4 py-3 m-2 bg-[#e5e4e2] -700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Projects
