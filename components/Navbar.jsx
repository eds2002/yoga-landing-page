import react from "react"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleClick = () =>{
    setNav(!nav)
    console.log(nav)
  }



  return (  
    <div className = "vw-[100vw]">
      <div className = "max-w-[1432px] w-full mx-auto px-[25px]">
        <header className = "flex w-[100%] justify-between h-[75px] items-center">
          <h1 className = "text-3xl font-bold text-blue-500">yoga.com</h1>
          <nav className = "hidden md:block">
            <Link href = "/"><a className = "px-3.5 hover:opacity-50" >Home</a></Link>
            <Link href = "/"><a className = "px-3.5 hover:opacity-50">Yoga Fundamentals</a></Link>
            <Link href = "/"><a className = "px-3.5 hover:opacity-50">Services</a></Link>
            <Link href = "/"><a className = "px-3.5 hover:opacity-50">Free Pass</a></Link>
            <Link href = "/"><a><button className = "px-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded active:bg-blue-700">Book Now</button></a></Link>
          </nav>
          <div className = "block text-2xl cursor-pointer md:hidden">
            <FontAwesomeIcon icon = {faBars} onClick = {()=> handleClick()}/>
          </div>
          {/* Mobile nav */}
          {nav && 
            <div className = "fixed top-0 bottom-0 left-0 right-0 z-50 bg-[hsla(360,0%,0%,0.3)] ">
              <div className = "w-[60%] absolute top-0 left-0 bottom-0 bg-white p-[50px]">
                <FontAwesomeIcon icon = {faTimes} className = "text-3xl cursor-pointer" onClick = {()=>setNav(!nav)}/>
                <nav className = "relative flex flex-col h-[85%] gap-5 mt-20">
                <Link href = "/"><a className = "px-3.5 hover:opacity-50 font-bold text-xl" >Home</a></Link>
                <Link href = "/"><a className = "px-3.5 hover:opacity-50 font-bold text-xl">Yoga Fundamentals</a></Link>
                <Link href = "/"><a className = "px-3.5 hover:opacity-50 font-bold text-xl">Services</a></Link>
                <Link href = "/"><a className = "px-3.5 hover:opacity-50 font-bold text-xl">Free Pass</a></Link>
                <Link href = "/"><a><button className = "px-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded active:bg-blue-700 w-[100%] absolute bottom-0">Book Now</button></a></Link>
                </nav>
              </div>
            </div>
          }
        </header>
      </div>
    </div>
  )
}

export default Navbar