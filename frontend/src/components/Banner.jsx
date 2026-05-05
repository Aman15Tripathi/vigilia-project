// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Banner = () => {

//     const navigate = useNavigate()
//     return (
//         <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

//             {/*---------- leftside ---------*/}

//             <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
//                 <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
//                     <p>Book Appointment</p>
//                     <p className='mt-4'>With 100+ Trusted Doctors</p>
//                 </div>
//                 <button onClick={() => {navigate('/login'); scrollTo (0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
//             </div>

//             {/*---------- Right side ---------*/}
//             <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
//                 <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Banner










import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Banner = () => {

  const navigate = useNavigate()
  const { token } = useContext(AppContext) // 👈 login check

  return (
    <div className='relative flex flex-col md:flex-row items-center bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-2xl px-6 sm:px-10 md:px-14 lg:px-16 py-10 md:py-14 lg:py-16 my-20 md:mx-10 overflow-hidden'>

      {/* Background blur (premium feel) */}
      <div className='absolute top-[-50px] left-[-50px] w-72 h-72 bg-blue-300/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl'></div>

      {/*---------- LEFT ---------*/}
      <div className='flex-1 text-center md:text-left z-10'>

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight'
        >
          <p>Book Appointment</p>
          <p className='mt-3 text-white/90'>
            With <span className='text-yellow-300'>100+ Trusted Doctors</span>
          </p>
        </motion.div>

        {/* CTA Button (Dynamic) */}
        <motion.button
          onClick={() => {
            if (token) {
              navigate('/doctors')
            } else {
              navigate('/login')
            }
            scrollTo(0, 0)
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className='mt-6 bg-white text-[#1E3A8A] text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-md hover:bg-gray-100 transition'
        >
          {token ? "Book Appointment" : "Create Account"}
        </motion.button>

      </div>

      {/*---------- RIGHT ---------*/}
      <div className='w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0'>

        <motion.img
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='w-52 sm:w-64 md:w-72 lg:w-80 object-contain drop-shadow-xl'
          src={assets.appointment_img}
          alt=""
        />

      </div>

    </div>
  )
}

export default Banner
