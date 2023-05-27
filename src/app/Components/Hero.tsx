import React from 'react'
import Image from 'next/image'
import one from '../images/two.png'
import Typewriter from 'typewriter-effect';
import "animate.css"
function Hero() {
    
    return (
        <>

            <section className=" hero_section animate__animated animate__fadeIn text-gray-600 body-font bg-indigo-100" id='hero'>
                <div className="container mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold my-10 text-gray-900"><span className='text-purple-600'>SITE <span></span> </span>SPARK
                            {/* <br className="hidden lg:inline-block " /><span className='text-purple-600'>A</span>Software Company */}
                        </h1>
                        <h2 className='text-2xl font-semibold text-[30px]'>
                            <Typewriter
                                options={{
                                    strings: [
                                        "Software Company",
                                        "Software Institute Best Trainers",
                                        "Software House",
                                        "We have Best Product",
                                        "NetWork Hub",
                                        "Secure Payment Methode ",
                                        "Working With Internation Clients",
                                        "Experience Software Engineers",
                                        "Safe Invesment Records"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <p className="mb-8 leading-relaxed my-[10px]">Site Spark is a dynamic and innovative software company that specializes in providing cutting-edge solutions for various industries. With a strong focus on web development, their expertise lies in creating responsive and visually appealing websites, as well as powerful web applications.</p>
                        <div className="flex justify-center">
                            <button id='btn' className=" inline-flex text-white bg-indigo-500 border-0 sm:py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{
                                const contact = document.getElementById("contact");
                                contact?.scrollIntoView({behavior:"smooth"})
                            }}>Contact</button>
                            <button className="ml-4 inline-flex text-white bg-gray-400 border-0 sm:py-2 px-6 focus:outline-none hover:bg-indigo-600  rounded text-lg" onClick={() =>{
                                window.location.href="https://www.linkedin.com/in/shaheer-ismail-088079190/";
                            }}>Chief Exsicutive</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image src={one} width={1000} height={1000} alt='site sparke' className='min-w[320]:h-100 animate__animated animate__pulse animate__infinite' />
                    </div>
                </div>
            </section>



        </>
    )
}

export default Hero
