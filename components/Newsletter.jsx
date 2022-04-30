import React from 'react'
import NewsletterImg from '../assets/newsletter.svg'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <>
      <section className = "w-[100vw] h-full flex justify-center relative">
        <div className = "max-w-[1432px] w-full p-[50px] my-20 flex items-center justify-center">
          <div className = "w-[50%] h-full p-[50px] hidden md:block">
            <Image src = {NewsletterImg} className = "scale-75" alt = "image of mailbox"></Image>
          </div>
          <div className = "flex flex-col p-50px w-[100%] md:w-[50%]">
            <h1 className = "text-3xl font-bold text-black ">Subscribe to our newsletter!</h1>
            <p className = "text-xl text-gray-500">We&apos;ll send you discounts and new additions to our place! Only once a month. We promise.</p>
            <form className = "flex flex-col gap-2 my-10">
              <label htmlFor = "email" className = "font-bold text-gray-500">Enter e-mail</label>
              <input type = "text" name = "email" className = "bg-gray-300 p-[10px] rounded-md focus:outline-none focus:ring focus:ring-gray-400"></input>
              <button type = "text" className = "p-3 font-bold text-white bg-blue-600 rounded-md" onClick = {(e)=> e.preventDefault()}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter