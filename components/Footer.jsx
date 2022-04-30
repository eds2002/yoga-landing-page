const Footer = () => {
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
			</section>
    </>
  )
}

export default Footer