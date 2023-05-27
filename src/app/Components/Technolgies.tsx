import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import 'animate.css';

function Technolgies() {
  return (
    <>
    
    <section className="text-gray-600 body-font  bg-indigo-100  technologies-section" id='technologies'>
      <h1 className='text-center font-bold text-3xl'><span className='text-purple-600 font-bold'>We</span> <span className='text-gray-900'>have Experts In</span></h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
      <FaReact className='d-block m-auto text-blue-600 animate__animated animate__rotateIn animate__infinite' size={100}/>

      <p className="leading-relaxed text-lg font-semibold my-3 text-black ">React<span className='text-purple-600'>.Js</span></p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
      <SiNextdotjs size={100} className='text-black d-block m-auto' />
      <p className="leading-relaxed text-lg font-semibold my-3 text-black">Next<span className='text-purple-600'>.Js</span></p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
      <FaBootstrap size={100} className='text-blue-900 d-block m-auto' />
      <p className="leading-relaxed text-lg font-semibold my-3 text-black">Bootstra<span className='text-purple-600'>pe</span></p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
      <SiMysql size={100} className='text-blue-500 d-block m-auto' />
      <p className="leading-relaxed text-lg font-semibold my-3 text-black">MySq<span className='text-purple-600'>li</span></p>
      </div>
    </div>
  </div>
  {/* -------------------------------------------------------------------------------------------------------- */}
  
<div className="container px-5 py-20 mx-auto ">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        {/* <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2> */}
        <FaPython className='d-block m-auto text-blue-600' size={100}/>
        <p className="leading-relaxed text-lg font-semibold my-3 text-black">Pyth<span className='text-purple-600'>on</span></p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        {/* <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2> */}
        <DiMongodb size={100} className='text-green-800 d-block m-auto' />

        <p className="leading-relaxed text-lg font-semibold my-3 text-black">Mongo<span className='text-purple-600'>DB</span></p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        {/* <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2> */}
        <FaJava size={100} className='text-orange-400 d-block m-auto' />

        <p className="leading-relaxed text-lg font-semibold my-3 text-black">Jav<span className='text-purple-600'>a</span></p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        {/* <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2> */}
        <SiFlutter size={100} className='text-blue-600 d-block m-auto' />

        <p className="leading-relaxed text-lg font-semibold my-3 text-black">Flut<span className='text-purple-600'>ter</span></p>
      </div>
    </div>
  </div>
</section>
    

    </>
  )
}

export default Technolgies
