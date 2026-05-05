// // import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

//         {/* --- left section --- */}

//         <div>
//             <img className='mb-5 w-40' src={assets.Vigilia_logo} alt="" />
//             <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat omnis aperiam laborum? Maxime modi porro, libero pariatur voluptatem recusandae voluptates blanditiis magnam at soluta cumque distinctio quidem fuga possimus?</p>
//         </div>

//         {/* --- center section --- */}

//         <div>
//             <p className='text-xl font-medium mb-5'>COMPANY</p>
//             <ul className='flex flex-col gap-2 text-gray-600'>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Contact us</li>
//                 <li>Privacy policy</li>
//             </ul>

//         </div>


//         {/* --- Right section --- */}

//         <div>
//             <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//             <ul className='flex flex-col gap-2 text-gray-600'>
//                 <li>+1-212-456-7890</li>
//                 <li>vigiliaCare@gmail.com</li>
//             </ul>
//         </div>

//       </div>
//         {/* ------ Copyright Text --------- */}
//       <div>
//         <hr/>
//         <p className='py-5 text-sm text-center'>Copyright 2025@ Vigilia24X7 - All Right Reserved</p>
//       </div>
//     </div>
//   )
// }

// export default Footer









import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9] text-white mt-24 px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-6'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>

        {/* --- Left Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img className='mb-5 w-36' src={assets.Vigilia_logo} alt="" />

          <p className='text-sm text-white/80 leading-6 max-w-sm'>
            Vigilia is your trusted healthcare partner. Easily book appointments with verified doctors and manage your health journey with confidence and convenience.
          </p>

          {/* Social Icons */}
          <div className='flex gap-4 mt-5'>
            <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#1E3A8A] transition'>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#1E3A8A] transition'>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#1E3A8A] transition'>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </motion.div>

        {/* --- Center Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className='text-lg font-semibold mb-4'>Company</p>
          {/* <ul className='flex flex-col gap-2 text-white/80'>
            <li className='hover:text-white cursor-pointer transition'>Home</li>
            <li className='hover:text-white cursor-pointer transition'>About Us</li>
            <li className='hover:text-white cursor-pointer transition'>Contact Us</li>
            <li className='hover:text-white cursor-pointer transition'>Privacy Policy</li>
          </ul> */}

          <ul className='flex flex-col gap-2 text-white/80'>
            <Link to='/' className='hover:text-white transition'>Home</Link>
            <Link to='/about' className='hover:text-white transition'>About Us</Link>
            <Link to='/contact' className='hover:text-white transition'>Contact Us</Link>
            <Link to='/privacy' className='hover:text-white transition'>Privacy Policy</Link>
          </ul>
        </motion.div>

        {/* --- Right Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className='text-lg font-semibold mb-4'>Get in Touch</p>
          <ul className='flex flex-col gap-2 text-white/80'>
            <li>📞 +91-98765-43210</li>
            <li>📧 vigiliacare@gmail.com</li>
          </ul>

          {/* Mini CTA */}
          <button className='mt-5 bg-white text-[#1E3A8A] px-5 py-2 rounded-full text-sm hover:scale-105 transition'>
            Contact Support
          </button>
        </motion.div>

      </div>

      {/* Divider */}
      <div className='border-t border-white/20 mt-10 pt-5 text-center'>
        <p className='text-xs sm:text-sm text-white/70'>
          © 2025 Vigilia24X7 — All Rights Reserved
        </p>
      </div>

    </div>
  )
}

export default Footer