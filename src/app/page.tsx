"use client"

import About_comapny from "./Components/About_comapny"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Prize from "./Components/Prize"
import Services from "./Components/Services"
import Team from "./Components/Team"
import Technolgies from "./Components/Technolgies"

// import { useState,useEffect } from "react";

// import Image from 'next/image'


export default function Home() {

  // const [Count,setCount] = useState(0);
  // useEffect(()=>{
  //   document.title=`your title is ${Count}`;
  // })
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <About_comapny/>
      <Team/>
      <Technolgies/>
      <Prize/>
      <Contact/>
      <Footer/>
    </>
  )
}
