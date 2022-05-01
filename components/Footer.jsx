const Footer = () => {
	// 30,58,138
  return (
    <>
			<section className = "w-[100vw] h-full flex justify-center relative bg-blue-900">
				<div className = "max-w-[1432px] w-full px-[50px] py-[100px]">
					<div className = "flex flex-col items-start justify-between gap-20 md:flex-row md:gap-0">
						<div className = "flex flex-col items-start justify-start">
							<h2 className = "text-2xl font-bold text-white">Yoga.us</h2>
							<p className = "w-[200px] mt-[30px] text-xl text-white">Breath, move, meditate, nourish, heal.</p>
						</div>
						<div className = "flex flex-col items-start justify-start gap-2">
							<h2 className = "my-2 text-base font-bold text-gray-300 ">Our service</h2>
							<a className = "text-white cursor-pointer hover:text-gray-400">About us</a>
							<a className = "text-white cursor-pointer hover:text-gray-400">Our Work</a>
							<a className = "text-white cursor-pointer hover:text-gray-400">Pricing</a>
							<a className = "text-white cursor-pointer hover:text-gray-400">Customer Service</a>
						</div>
						<div className = "flex flex-col items-start justify-start gap-2">
							<h2 className = "my-2 text-base font-bold text-gray-300 ">Company</h2>
							<a className = "text-white cursor-pointer hover:text-gray-400">Terms of Use</a>
							<a className = "text-white cursor-pointer hover:text-gray-400">Contact Us</a>
						</div>
						<div className = "flex flex-col items-start justify-start gap-2">
							<h2 className = "my-2 text-base font-bold text-gray-300 ">Follow Us</h2>
							<a className = "text-white cursor-pointer hover:text-gray-400">Facebook</a>
							<a className = "text-white cursor-pointer hover:text-gray-400">Linkedin</a>
							<a className = "text-white cursor-pointer hover:text-gray-400">Instagram</a>
							<a className = "text-white cursor-pointer hover:text-gray-400">Twitter</a>
						</div>
					</div>
					</div>
					<div className="custom-shape-divider-top-1651383061">
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
						</svg>
					</div>
			</section>
    </>
  )
}

export default Footer