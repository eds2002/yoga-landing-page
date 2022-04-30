import React from 'react'

import { GiTicket } from 'react-icons/gi'
// 59 130 246
const FirstTime = () => {
  return (
    <>
        <section className = "w-[100vw] h-full bg-blue-500 flex justify-center relative">
            <div className = "max-w-[1432px] w-full p-[50px] my-20">
                <div className = "flex flex-col items-center justify-center w-full">
                    <div className="w-[200px] h-[200px] rounded-full bg-blue-100 flex items-center justify-center my-10">
                        <h1 className = "text-blue-600 text-8xl"><GiTicket/></h1>
                    </div>
                    <h1 className = "text-3xl font-bold text-white">First time with us?</h1>
                    <p className = "text-xl text-gray-100 w-[400px] text-center my-2">Don&lsquo;t worry! We offer a complimentary yoga, reiki, massage session for 60 minutes.</p>
                    <button type = "button" className = "px-20 py-2 font-bold text-black bg-white rounded hover:bg-gray-200 active:bg-gray-300 my-[10px]">Book now</button>
                </div>
            </div>
            {/* top wave*/}
            <div className="custom-shape-divider-top-1651332208">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            {/* Bottom wave */}
            <div className="custom-shape-divider-bottom-1651332337">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    </>
  )
}

export default FirstTime