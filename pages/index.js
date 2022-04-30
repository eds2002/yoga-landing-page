import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Pillars from '../components/Pillars'
import Events from '../components/Events'
import FirstTime from '../components/FirstTime'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className = "relative">  
      <Navbar/>
      <Hero/>
      <Pillars/>
      <Events/>
      <FirstTime/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
