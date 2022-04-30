import react from "react"
import Link from 'next/link'

const Navbar = () => {
  return (  
    <div className = "vw-[100vw]">
      <div className = "max-w-[1432px] w-full mx-auto px-[50px]">
        <header className = "flex w-[100%] justify-between h-[75px] items-center">
          <h1 className = "text-3xl font-bold text-blue-500">yoga.com</h1>
          <nav>
            <Link href = "/"><a className = "px-3.5 hover:opacity-50" >Home</a></Link>
            <Link href = "/"><a className = "px-3.5 hover:opacity-50">About</a></Link>
            <Link href = "/"><a className = "px-3.5 hover:opacity-50">Services</a></Link>
            <Link href = "/"><a className = "px-3.5 hover:opacity-50">Reviews</a></Link>
            <Link href = "/"><a><button className = "px-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded active:bg-blue-700">Book Now</button></a></Link>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar