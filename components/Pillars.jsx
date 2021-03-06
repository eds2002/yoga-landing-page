import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPersonWalking , faWind, faAppleAlt} from '@fortawesome/free-solid-svg-icons'

const Pillars = () => {
  return (
    <div className = "relative">
      <div className = "w-[100vw] p-[25px] flex justify-center my-[150px] bg-gray-50 relative" >
        <div className = "max-w-[1432px] w-full px-[25px] pb-10 ">  
          <center>
            <h1 className = "my-10 text-3xl font-bold">Yoga Fundamentals</h1>
          </center>
          <div className="flex gap-[30px] w-full justify-center flex-col md:flex-row">
            {/* Card1 */}
            <motion.div className="flex flex-col items-center justify-center w-[100%] h-full md:w-[320px] md:h-[400px] overflow-hidden bg-blue-100 rounded shadow-lg "
              initial={{ opacity: 0, y:50 }}
              whileInView={{ opacity: 1 , y:0 }}
              viewport={{ once: true }}
              transition = {{ ease: 'anticipate', duration: 1, delay : 0}}
            >
              <div className="px-6 py-4">
                <div className="max-w-[100%] my-[10px]">
                  <div className="max-w-[100px] h-[100px] rounded-full border bg-blue-300 m-auto flex justify-center items-center">
                    <h1 className = "text-5xl text-blue-600"><FontAwesomeIcon icon={faAppleAlt} /></h1>
                  </div>
                </div>
                <div className="mb-2 text-xl font-bold text-center">Nourish</div>
                <p className="text-base text-center text-gray-700">
                  Nourish the body, inside and out, using natural organic food, supplements, essential oils, and beauty products, that are non toxic and will NOURISH the body, mind and soul.
                </p>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div className="flex flex-col items-center justify-center w-[100%] h-full md:w-[320px] md:h-[400px] overflow-hidden bg-teal-100 rounded shadow-lg "
              initial={{ opacity: 0, y:50 }}
              whileInView={{ opacity: 1 , y:0 }}
              viewport={{ once: true }}
              transition = {{ease: 'anticipate', duration : 1, delay: 0.25}}
            >
              <div className="px-6 py-4">
                <div className="max-w-[100%] my-[10px]">
                  <div className="max-w-[100px] h-[100px] rounded-full border  bg-teal-300 m-auto flex justify-center items-center">
                    <h1 className = "text-5xl text-teal-600"><FontAwesomeIcon icon={faWind} /></h1>
                  </div>
                </div>
                <div className="mb-2 text-xl font-bold text-center">Breathe</div>
                <p className="text-base text-center text-gray-700">
                When you breathe through life&#39;s journey, you use your breath to keep us steady in the chaos of life and its inevitable unexpected turns.  Your breath connects you to the universe.
                </p>
              </div>
            </motion.div>
            {/* Card 3 */}
            <motion.div className="flex flex-col items-center justify-center w-[100%] h-full md:w-[320px] md:h-[400px] overflow-hidden bg-red-100 rounded shadow-lg"
              initial={{ opacity: 0, y:50 }}
              whileInView={{ opacity: 1 , y:0 }}
              viewport={{ once: true }}
              transition = {{ease: 'anticipate', duration: 1, delay: 0.50}}
            >
              <div className="px-6 py-4">
                <div className="max-w-[100%] my-[10px]">
                  <div className="max-w-[100px] h-[100px] rounded-full border  bg-red-300 m-auto flex justify-center items-center">
                    <h1 className = "text-5xl text-red-600"><FontAwesomeIcon icon={faPersonWalking} /></h1>
                  </div>
                </div>
                <div className="mb-2 text-xl font-bold text-center">Move</div>
                <p className="text-base text-center text-gray-700">
                  When you allow your body to move and be fluid with the rhythm of life it creates the space for energy to flow, the strength to move forward and the balance to create a centered life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-top-1651330728">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

export default Pillars