// import React from 'react'
// import {specialityData} from '../assets/assets'
// import {Link} from 'react-router-dom'

// const SpecialityMenu = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
//       <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//       <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appoinment hassle-free.</p>
//       <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
//             {specialityData.map((item,index) =>(
//                 <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
//                     <img className='w-16 sm:w-24 mb-2' src={item.image} alt=''/>
//                     <p>{item.speciality}</p>

//                 </Link>
//             ))}
//       </div>
//     </div>
//   )
// }

// export default SpecialityMenu






import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SpecialityMenu = () => {

  // stagger container
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  // card animation
  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60 }
    }
  }

  const stats = [
    { value: "100+", label: "Doctors" },
    { value: "50+", label: "Clinics" },
    { value: "10k+", label: "Patients" },
    { value: "4.8★", label: "Rating" },
  ]

  return (
    <div
      className='flex flex-col items-center justify-center gap-6 min-h-[90vh] py-16 md:py-24 text-gray-800 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden'
      id='speciality'
    >

      {/* Background blur */}
      <div className='absolute top-10 left-[-100px] w-72 h-72 bg-blue-300/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-10 right-[-100px] w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl'></div>

      {/* Heading */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60 }}
        viewport={{ once: true }}
        className='text-3xl md:text-4xl font-semibold text-gray-900 text-center'
      >
        Find by Speciality
      </motion.h1>

      {/* Trust Line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className='text-sm text-blue-600 font-medium text-center'
      >
        Trusted by thousands for quality healthcare services
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className='sm:w-1/2 text-center text-base text-gray-500 px-4'
      >
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className='flex justify-center gap-6 sm:gap-10 flex-wrap mt-4'
      >
        {stats.map((item, i) => (
          <div key={i} className='text-center'>
            <h2 className='text-xl sm:text-2xl font-bold text-[#1E3A8A]'>{item.value}</h2>
            <p className='text-gray-500 text-sm'>{item.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Speciality Cards (YOUR ORIGINAL - SAFE) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='flex sm:justify-center gap-6 pt-10 w-full overflow-x-auto px-6'
      >
        {specialityData.map((item, index) => (
          <motion.div key={index} variants={itemVariant}>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={`/doctors/${item.speciality}`}
              className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0'
            >

              <motion.img
                whileHover={{ scale: 1.15, y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className='w-16 sm:w-24 mb-2 rounded-full shadow-md border border-gray-200'
                src={item.image}
                alt=''
              />

              <p className='text-gray-700 font-medium'>{item.speciality}</p>

            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Doctor */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className='mt-10 px-4 w-full flex justify-center'
      >
        <div className='bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 w-full max-w-md hover:shadow-xl transition'>

          <img
            src={specialityData[0].image}
            className='w-16 h-16 rounded-full object-cover'
            alt=''
          />

          <div>
            <h3 className='font-semibold text-gray-800'>Dr. Sharma</h3>
            <p className='text-sm text-gray-500'>Cardiologist</p>
            <p className='text-xs text-[#0EA5E9] mt-1'>Available Today</p>
          </div>

        </div>
      </motion.div>

    </div >
  )
}

export default SpecialityMenu
