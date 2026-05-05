// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom'

// const RelatedDoctors = ({speciality, docId}) => {

//     const {doctors} = useContext(AppContext)
//     const navigate = useNavigate()
//     const [relDoc, setRelDoc] = useState([])

//     useEffect(()=>{
//         if(doctors.length > 0 && speciality) {
//             const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
//             setRelDoc(doctorsData)
//         }

//     },[doctors, speciality, docId])

//   return (
//      <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
//       <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
//       <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
//       <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
//         {relDoc.slice(0,5).map((item,index)=>(
//             <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                 <img className='bg-blue-50' src={item.image} alt=''/>
//                 <div className='p-4'>
//                     <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                         <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Availble</p>
//                     </div>
//                     <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                     <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                 </div>
//             </div>
//         ))}
//       </div>
//       <button onClick={()=> {navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 '>more</button>
//     </div>
//   )
// }

// export default RelatedDoctors







import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const RelatedDoctors = ({ speciality, docId }) => {

  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()
  const [relDoc, setRelDoc] = useState([])

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      )
      setRelDoc(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-6 py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 text-gray-800 bg-gradient-to-b from-white to-blue-50'>

      {/* 🔥 Changed Heading */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60 }}
        viewport={{ once: true }}
        className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 text-center'
      >
        Doctors You May Like
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-center text-xs sm:text-sm text-gray-500'
      >
        Explore more doctors from the same speciality for better care.
      </motion.p>

      {/* 🔥 Responsive Grid Fix */}
      <div
  className='w-full grid gap-5 justify-center'
  style={{
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 260px))"
  }}
>

        {relDoc.slice(0, 5).map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className='group rounded-xl overflow-hidden shadow-md bg-white cursor-pointer'
          >

            {/* Image with FIXED ratio (no crop issue) */}
            <div className='w-full aspect-[3/4] bg-blue-50 relative'>
              <img
                className='w-full h-full object-contain'
                src={item.image}
                alt=''
              />

              {/* Hover Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4'>

                <div className='flex items-center gap-2 text-sm text-green-300'>
                  <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                  <p>Available</p>
                </div>

                <p className='text-white text-sm mt-1'>
                  Fees: ₹{item.fees || 500}
                </p>

                <p className='text-blue-200 text-sm'>
                  {item.speciality}
                </p>

                <button
                  onClick={() => {
                    navigate(`/appointment/${item._id}`)
                    scrollTo(0, 0)
                  }}
                  className='mt-3 bg-white text-[#1E3A8A] text-xs px-4 py-2 rounded-full hover:scale-105 transition'
                >
                  View Profile
                </button>

              </div>
            </div>

            {/* Always visible */}
            <div className='p-4 text-center'>
              <p className='text-gray-900 text-base font-semibold'>
                {item.name}
              </p>
              <p className='text-gray-500 text-sm'>
                {item.speciality}
              </p>
            </div>

          </motion.div>

        ))}

      </div>

      {/* Button */}
      <motion.button
        onClick={() => {
          navigate('/doctors')
          scrollTo(0, 0)
        }}
        whileHover={{ scale: 1.05 }}
        className='bg-[#1E3A8A] text-white text-sm sm:text-base px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full mt-8 sm:mt-10 shadow-md hover:bg-[#16307a] transition'
      >
        View All Doctors
      </motion.button>

    </div>
  )
}

export default RelatedDoctors