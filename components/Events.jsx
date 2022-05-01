import React from 'react'
import womenYoga from '../assets/women_yoga.jpg'
import massage from '../assets/massage.jpg'
import reikiImg from '../assets/reiki.jpg'
import reikiImg2 from '../assets/reiki2.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Events = () => {
  return (
    <div className = "w-[100vw] h-[100%] flex items-center justify-center">    
      <div className = "max-w-[1432px] w-full flex flex-col gap-[50px] md:gap-10 -mt-12 my-[100px] px-[50px] ">
        <center>
          <h1 className = "my-2 text-5xl font-bold ">Popular Packages</h1>
          <p className = "text-xl text-gray-500 ">See what most of our clients choose when they arrive!</p>
        </center>
        {/* Card 1 */}
        <motion.div className="max-w-xl mx-auto bg-white rounded-lg shadow-2xl md:mx-0"
          initial={{ opacity: 0, x:-100 }}
          whileInView={{ opacity: 1 , x:0 }}
          viewport={{ once: true }}
          transition = {{ ease: 'anticipate', duration: 1, delay : 0}}
        >
            <a href="#">
                <Image className="rounded-t-lg" src={womenYoga} alt="image of one of our trainers doing yoga" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Therapeutic Yoga</h5>
                </a>
                <p className="mb-3 text-xl font-normal text-gray-500">Private Therapeutic Yoga Sessions with Jane Doe. Read on to learn more about Jane Doe.</p>
                <button type = "text" className = "px-10 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-700 my-[10px] flex items-center justify-center">
                  Book a session
                  <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                </button>
            </div>
        </motion.div>
        {/* Card 2 */}
        <motion.div className="max-w-xl mx-auto bg-white rounded-lg shadow-2xl md:self-end md:mx-0"
          initial={{ opacity: 0, x:100 }}
          whileInView={{ opacity: 1 , x:0 }}
          viewport={{ once: true }}
          transition = {{ ease: 'anticipate', duration: 1, delay : 0.25}}
        >
            <a href="#">
                <Image className="rounded-t-lg" src={massage} alt="image of a massage session" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">60 Minute Massage</h5>
                </a>
                <p className="mb-3 text-xl font-normal text-gray-500">Enjoy a 60 minute massage by our licensed massage therapist. A gentle and soothing massage intended to improve circulation, ease tension and create a heightened state of relaxation and promote your true state of inner well~being.</p>
                <button type = "text" className = "px-10 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-700 my-[10px] flex items-center justify-center">
                  Book a session
                  <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                </button>
            </div>
        </motion.div>
        {/* Card 3 */}
        <motion.div className="max-w-xl mx-auto bg-white rounded-lg shadow-2xl md:mx-0"
          initial={{ opacity: 0, x:-100 }}
          whileInView={{ opacity: 1 , x:0 }}
          viewport={{ once: true }}
          transition = {{ ease: 'anticipate', duration: 1, delay : 0.50}}
        >
            <a href="#">
                <Image className="rounded-t-lg" src={reikiImg2} alt="Image of a reiki session" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Spiritual & Holistic Healing</h5>
                </a>
                <p className="mb-3 text-xl font-normal text-gray-500">A treatment feels like a wonderful glowing radiance that flows through and around you. Reiki treats the whole person including body, emotions, mind and spirit creating many beneficial effects that include relaxation and feelings of peace, security and well-being.</p>
                <button type = "text" className = "px-10 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-700 my-[10px] flex items-center justify-center">
                  Book a session
                  <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                </button>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Events