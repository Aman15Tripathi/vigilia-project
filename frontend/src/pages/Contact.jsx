// import React from 'react'
// import { assets } from '../assets/assets'

// const Contact = () => {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 text-gray-500'>
//         <p>CONTACT <span className='text-gray-700 font-semibold'> US </span> </p>
//       </div>
//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
//         <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt=''/>
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-lg text-gray-500'>OUR OFFICE</p>
//           <p className='text-gray-500'>54709 willms Station <br/> Suite 350, Washington, USA</p>
//           <p className='text-gray-500'>Tel: (415) 555-0132 <br/> Email: greatstackdev@gmail.com </p>
//           <p className='font-semibold text-lg text-gray-600'>Careers at VIGILIA</p>
//           <p className='text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact




import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import CallButton from './CallButton'

const Contact = () => {
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-14 py-12 md:py-16 bg-gradient-to-b from-white to-blue-50'>

      {/* Heading */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60 }}
        viewport={{ once: true }}
        className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800'
      >
        CONTACT <span className='text-[#1E3A8A]'>US</span>
      </motion.div>

      {/* Main Section */}
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center'>

        {/* Image */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex justify-center'
        >
          <img
            className='w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] rounded-xl shadow-lg object-cover'
            src={assets.contact_image}
            alt=''
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex flex-col gap-6 text-sm sm:text-base text-gray-600'
        >

          {/* Office */}
          <div>
            <p className='font-semibold text-lg text-gray-800 mb-1'>Our Office</p>
            <p className='text-gray-500 leading-6'>
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className='font-semibold text-lg text-gray-800 mb-1'>Contact Details</p>
            <p className='text-gray-500 leading-6'>
              📞 (415) 555-0132 <br />
              📧 vigiliahms@gmail.com
            </p>
          </div>

          {/* Careers */}
          <div>
            <p className='font-semibold text-lg text-gray-800 mb-1'>Careers at Vigilia</p>
            <p className='text-gray-500'>
              Learn more about our teams and job openings.
            </p>
          </div>

          {/* Button */}
          {/* <button className='mt-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-full text-sm sm:text-base hover:scale-105 hover:bg-[#16307a] transition-all duration-300 shadow-md'>
            Explore Jobs
          </button> */}
          <CallButton />
        </motion.div>

      </div>

    </div>
  )
}

export default Contact