// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Docters = () => {

//   const  {speciality} = useParams()

//   const [filterDoc, setFilterDoc] = useState([])
//   const [showFilter, setShowFilter] = useState(false)
//   const navigate = useNavigate()

//   const {doctors} = useContext(AppContext)

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
//     } else {
//       setFilterDoc(doctors)
//     }
//   }

//   useEffect(() =>{
//     applyFilter()
//   },[doctors, speciality])

//   return (
//     <div>
//       <p className='text-gray-600'>Brows through the doctors specialist.</p>
//       <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
//         <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white':''}`} onClick={()=> setShowFilter(prev => !prev)}>Filters</button>
//         <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex':'hidden sm:flex'}`}>
//           <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}> General physician </p>
//           <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
//           <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor- ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
//           <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor- ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
//           <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor- ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
//           <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor- ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
//         </div>
//         <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
//           {
//             filterDoc.map((item,index)=>(
//             <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                 <img className='bg-blue-50' src={item.image} alt=''/>
//                 <div className='p-4'>
//                     <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                         <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Availble</p>
//                     </div>
//                     <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                     <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                 </div>
//             </div>
//         ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Docters








import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Docters = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  // 🔥 FILTER APPLY
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  // 🔥 SPECIALITIES (with ALL option)
  const specialities = [
    "All Doctors",
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist"
  ]

  return (
    <div className='px-4 sm:px-6 md:px-10 lg:px-14 py-10 bg-gradient-to-b from-white to-blue-50'>

      {/* Heading */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='text-center mb-6'
      >
        <h1 className='text-2xl sm:text-3xl font-semibold text-gray-800'>
          Find Your Doctor
        </h1>
        <p className='text-sm text-gray-500 mt-1'>
          Showing {filterDoc.length} doctors
        </p>
      </motion.div>

      {/* Layout */}
      <div className='flex flex-col lg:flex-row gap-8'>

        {/* 🔥 FILTER */}
        <div className='lg:w-1/4'>

          {/* Mobile Button */}
          <button
            className={`mb-4 py-2 px-4 border rounded-full text-sm lg:hidden ${showFilter ? 'bg-[#1E3A8A] text-white' : ''}`}
            onClick={() => setShowFilter(prev => !prev)}
          >
            Filters
          </button>

          {/* Filter List */}
          <div className={`${showFilter ? 'flex' : 'hidden lg:flex'} flex-col gap-3`}>

            {specialities.map((spec, i) => (
              <p
                key={i}
                onClick={() => {
                  if (spec === "All Doctors") {
                    navigate('/doctors')
                  } else {
                    speciality === spec
                      ? navigate('/doctors')
                      : navigate(`/doctors/${spec}`)
                  }
                }}
                className={`px-4 py-2 rounded-full border cursor-pointer text-sm transition
                  ${
                    (spec === "All Doctors" && !speciality) || speciality === spec
                      ? 'bg-[#1E3A8A] text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
              >
                {spec}
              </p>
            ))}

          </div>
        </div>

        {/* 🔥 DOCTOR GRID */}
        <div
          className='w-full grid gap-6 justify-center'
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 260px))"
          }}
        >

          {filterDoc.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className='group rounded-xl overflow-hidden shadow-md bg-white border border-transparent hover:border-[#0EA5E9] transition cursor-pointer'
            >

              {/* Image */}
              <div className='w-full aspect-[3/4] bg-blue-50 relative'>
                <img
                  className='w-full h-full object-contain'
                  src={item.image}
                  alt=''
                />

                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4'>

                  <div className='flex items-center gap-2 text-sm text-green-300'>
                    <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                    <p>Available</p>
                  </div>

                  <p className='text-white text-sm mt-1'>
                    Fees: ₹{item.fees || 500}
                  </p>

                  <button
                    onClick={() => navigate(`/appointment/${item._id}`)}
                    className='mt-3 bg-white text-[#1E3A8A] text-xs px-4 py-2 rounded-full hover:scale-105 transition'
                  >
                    View Profile
                  </button>

                </div>
              </div>

              {/* Info */}
              <div className='p-4 text-left'>
                <p className='text-[10px] bg-blue-100 text-[#1E3A8A] px-2 py-1 rounded-full w-fit mb-2'>
                  {item.speciality}
                </p>
                <p className='text-gray-900 text-base font-semibold'>
                  {item.name}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Docters