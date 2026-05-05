// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 text-gray-500'>
//         <p>ABOUT <span className='text-gray-700 font-medium'> US </span></p>
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-12 '>
//         <img className='w-full md:max-w-[360px]' src={assets.about_image} alt='' />
//         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
//           <p>Welcome to Vigilia, your trusted partner in managing your healthcare needs conveniently And Efficiently at Vigilia, We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health reacords. </p>
//           <p>Vigilia is committed to excellence in healthcare technology. we continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. whether you're booking your first appointment or managing ongoing care, Vigilia is here to support you every step of the way.</p>
//           <b className='text-gray-800'>Our Vision</b>
//           <p>Our vision at Vigilia is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need , when you need it </p>
//         </div>
//       </div>

//       <div className='text-xl my-4'>
//         <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
//       </div>

//       <div className='flex flex-col md:flex-row mb-20'>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>Efficiency:</b>
//           <p>Streamlined appointment scheduling that fits into your busy lifestyles.</p>
//         </div>

//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>Convenience</b>
//           <p>Access to a network of trusted healthcare professionals in your area.</p>
//         </div>

//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>Personalization</b>
//           <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About




import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
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
        ABOUT <span className='text-[#1E3A8A]'>US</span>
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
            src={assets.about_image}
            alt=''
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex flex-col gap-5 text-sm sm:text-base text-gray-600'
        >
          <p>
            Welcome to <span className='font-semibold text-[#1E3A8A]'>Vigilia</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when scheduling doctor appointments and managing their health records.
          </p>

          <p>
            Vigilia is committed to excellence in healthcare technology. We continuously enhance our platform, integrating modern solutions to improve user experience and deliver superior service.
          </p>

          <div>
            <p className='font-semibold text-gray-800 text-lg mb-1'>Our Vision</p>
            <p>
              Our vision is to create a seamless healthcare experience by bridging the gap between patients and providers, ensuring timely and easy access to care.
            </p>
          </div>
        </motion.div>

      </div>

      {/* WHY CHOOSE US */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className='text-center text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mt-16 mb-10'
      >
        WHY <span className='text-[#1E3A8A]'>CHOOSE US</span>
      </motion.div>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className='bg-white rounded-xl shadow-md p-6 text-gray-600 hover:bg-gradient-to-br hover:from-[#1E3A8A] hover:to-[#0EA5E9] hover:text-white transition-all duration-300'
        >
          <p className='font-semibold text-lg mb-2'>Efficiency</p>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className='bg-white rounded-xl shadow-md p-6 text-gray-600 hover:bg-gradient-to-br hover:from-[#1E3A8A] hover:to-[#0EA5E9] hover:text-white transition-all duration-300'
        >
          <p className='font-semibold text-lg mb-2'>Convenience</p>
          <p>Access a network of trusted healthcare professionals near you.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className='bg-white rounded-xl shadow-md p-6 text-gray-600 hover:bg-gradient-to-br hover:from-[#1E3A8A] hover:to-[#0EA5E9] hover:text-white transition-all duration-300'
        >
          <p className='font-semibold text-lg mb-2'>Personalization</p>
          <p>Get tailored recommendations and reminders for better health management.</p>
        </motion.div>

      </div>

    </div>
  )
}

export default About