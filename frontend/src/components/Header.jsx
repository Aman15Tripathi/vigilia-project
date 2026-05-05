// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//   return (
//     <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

//       {/*----- left Side --------- */}

//       <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
//             <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//                 Book Appointment <br/> With Trusted Doctors
//             </p>
//             <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//                 <img className='w-28' src={assets.group_profiles} alt=''/>
//                 <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/> schedule your appointment hassle-free</p>
//             </div>
//             <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//                 Book appoinment <img className='w-3' src={assets.arrow_icon} alt=''/>
//             </a>
//       </div>

//       {/*----- Right Side --------- */}

//       <div className='md:w-1/2 relative'>
//             <img className ='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img}/>
//       </div>

//     </div>
//   )
// }

// export default Header

import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Header = () => {

  const doctors = [
    assets.doc1,
    assets.doc2,
    assets.doc3,
    assets.doc4,
    assets.doc5,
    assets.doc1,
    
     // repeat for cube faces
  ]

  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden'>

      {/*----- LEFT SIDE --------- */}

      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>

        {/* Heading */}
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'
        >
          Book Appointment <br /> With Trusted Doctors
        </motion.p>

        {/* Sub Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='flex flex-col md:flex-row items-center gap-3 text-white/80 text-sm font-light'
        >
          <img className='w-28' src={assets.group_profiles} alt='' />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className='hidden sm:block' />
            schedule your appointment hassle-free
          </p>
        </motion.div>

        {/* Button */}
        <motion.a
          href='#speciality'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#0F172A] shadow-md hover:bg-gray-100 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
        >
          Book appointment
          <img className='w-3' src={assets.arrow_icon} alt='' />
        </motion.a>
      </div>

      {/*----- RIGHT SIDE (3D CUBE) --------- */}

      <div className='md:w-1/2 flex items-center justify-center py-10 overflow-hidden'>

        <motion.div
          initial={{ rotateY: 0, y: 0 }}
          animate={{ rotateY: 360, y: [-20, 20, 0],  scale: 1.5  }}
          transition={{ duration: 3, ease: "easeInOut" }}
          // className='relative w-40 h-40 md:w-56 md:h-56'
          className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56'
          style={{ transformStyle: "preserve-3d" }}
        >

          {/* Cube Faces */}
          {doctors.map((img, index) => {
            const transforms = [
              "rotateY(0deg) translateZ(120px)",
              "rotateY(90deg) translateZ(120px)",
              "rotateY(180deg) translateZ(120px)",
              "rotateY(-90deg) translateZ(120px)",
              "rotateX(90deg) translateZ(120px)",
              "rotateX(-90deg) translateZ(120px)",
            ]

            return (
              <div
                key={index}
                className='absolute w-full h-full'
                style={{
                  transform: transforms[index],
                   backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={img}
                  className='w-full h-full object-cover rounded-lg shadow-lg' 
                  alt=""
                />
              </div>
            )
          })}
        </motion.div>

      </div>

    </div>
  )
}

export default Header
