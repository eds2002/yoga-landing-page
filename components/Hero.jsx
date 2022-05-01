import React from 'react'
import yoga from '../assets/yogaimg.svg'
import heroimage from '../assets/heroimage.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-[100vw] h-[100vh] top-0 bottom-0 left-0 right-0 flex items-center flex-col justify-center relative bg-[url('../assets/heroimage.jpg')] bg-cover bg-center">
      <div className="max-w-[1432px] w-full relative px-[50px]">
        <div className = "flex flex-col items-center justify-center text-center">
          <center>
            <h1 className = "font-bold text-5xl md:text-7xl w-[90%] py-[5px] z-50 text-white">
              Breath, move, meditate, nourish, heal.
            </h1>
            <button type = "text" className = "px-12 py-3  md:px-32 md:py-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-700 my-[10px]">Book a session</button>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Hero