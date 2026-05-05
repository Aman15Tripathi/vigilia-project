import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  // const fetchDocInfo = async () => {
  //   const docInfo = doctors.find(doc => doc._id === docId)
  //   setDocInfo(docInfo)
  //   console.log(docInfo)
  // }

  const fetchDocInfo = () => {
    if (doctors.length > 0) {
      const doc = doctors.find(doc => doc._id === docId)
      setDocInfo(doc)
    }
  }

  const getAvailableSlots = async () => {
    if (!docInfo || !docInfo.slots_booked) return;
    setDocSlots([])

    //getting current date

    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time of the date with index

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      //setting hours

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        // let day = date.getDate()
        // let month = date.getMonth() + 1
        // let year = date.getFullYear()

        // const slotDate = day + "_" + month + "_" + year

        let day = String(currentDate.getDate()).padStart(2, '0')
        let month = String(currentDate.getMonth() + 1).padStart(2, '0')
        let year = currentDate.getFullYear()

        const slotDate = `${year}-${month}-${day}`

        const slotTime = formattedTime

        // const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

        const isSlotAvailable = docInfo?.slots_booked?.[slotDate]?.includes(slotTime) ? false : true;

        if (isSlotAvailable) {
          //add slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          })
        }



        // Increment current time by 30 minutes

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))

    }

  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    try {
      const date = docSlots[slotIndex][0].datetime

      // let day = date.getDate()
      // let month = date.getMonth() + 1
      // let year = date.getFullYear()

      // const slotDate = day + "_" + month + "_" + year

      let day = String(date.getDate()).padStart(2, '0')
      let month = String(date.getMonth() + 1).padStart(2, '0')
      let year = date.getFullYear()

      const slotDate = `${year}-${month}-${day}`

      const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
      console.log({
        docId,
        slotDate,
        slotTime
      })
      if (data.success) {
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointments')
      } else {
        toast.error(data.message)
      }
      console.log(slotDate);
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  // useEffect(() => {
  //   getAvailableSlots()
  // }, [docInfo])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots()
    }
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])


  // return docInfo && (
  //   <div>

  //     {/*  --------Doctor Details ------------ */}
  //     <div className='flex flex-col sm:flex-row gap-4'>

  //       <div>
  //         <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt='' />
  //       </div>

  //       <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
  //         {/* ----------Doc Info : name, degree, experience -------- */}

  //         <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
  //           {docInfo.name}
  //           <img className='w-5' src={assets.verified_icon} alt='' />
  //         </p>
  //         <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
  //           <p>{docInfo.degree} - {docInfo.speciality}</p>
  //           <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
  //         </div>

  //         {/* --------Doctor About ----------- */}

  //         <div>
  //           <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
  //             About <img src={assets.info_icon} alt='' />
  //           </p>
  //           <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
  //         </div>
  //         <p className='text-gray-500 font-medium mt-4'>
  //           Appointment fee:<span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
  //         </p>
  //       </div>
  //     </div>

  //     {/* -------- Booking slots ------------ */}
  //     <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
  //       <p>Booking slots</p>
  //       <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
  //         {docSlots.length && docSlots.map((item, index) => (
  //           <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
  //             <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
  //             <p>{item[0] && item[0].datetime.getDate()}</p>
  //           </div>
  //         ))}
  //       </div>
  //       <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
  //         {docSlots.length && docSlots[slotIndex].map((item, index) => (
  //           <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}> {item.time.toLowerCase()}</p>
  //         ))}
  //       </div>
  //       <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
  //     </div>

  //     {/* listing */}
  //     <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

  //   </div>
  // )



  return docInfo && (
    <div className='px-4 sm:px-6 md:px-10 lg:px-14 py-10 bg-gradient-to-b from-white to-blue-50'>

      {/* 🔥 TOP SECTION */}
      <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6'>

<div className='relative flex justify-center'>

  {/* glow */}
  <div className='absolute w-60 h-60 bg-[#0EA5E9]/30 blur-3xl rounded-full top-10'></div>

  {/* container */}
  <div className='relative w-full max-w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl
                  bg-gradient-to-br from-[#1E3A8A] to-[#0EA5E9]'>

    <img
      className='w-full h-full object-contain'
      src={docInfo.image}
      alt=''
    />

  </div>

</div>
        {/* 👉 DOCTOR INFO CARD */}
        <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3'>

          {/* Name */}
          <div className='flex items-center gap-2'>
            <h2 className='text-2xl font-semibold text-gray-800'>
              {docInfo.name}
            </h2>
            <img className='w-5' src={assets.verified_icon} alt='' />
          </div>

          {/* Degree + Exp */}
          <div className='flex flex-wrap items-center gap-2 text-sm text-gray-600'>
            <p>{docInfo.degree} • {docInfo.speciality}</p>
            <span className='px-2 py-0.5 border rounded-full text-xs'>
              {docInfo.experience}
            </span>
          </div>

          {/* About */}
          <div className='mt-2'>
            <p className='text-sm font-medium text-gray-800 flex items-center gap-1'>
              About <img src={assets.info_icon} alt='' />
            </p>
            <p className='text-sm text-gray-500 mt-1 leading-relaxed'>
              {docInfo.about}
            </p>
          </div>

          {/* Fees */}
          <p className='mt-2 text-gray-700 font-medium'>
            Consultation Fee:
            <span className='text-[#1E3A8A] font-semibold ml-1'>
              {currencySymbol}{docInfo.fees}
            </span>
          </p>

        </div>
      </div>

      {/* 🔥 BOOKING SECTION */}
      <div className='mt-12 bg-white rounded-2xl shadow-md p-6'>

        <h3 className='text-lg font-semibold text-gray-800'>
          Select Appointment Slot
        </h3>

        {/* 👉 DAYS */}
        <div className='flex gap-3 overflow-x-auto mt-5 pb-2'>
          {docSlots.length > 0 && docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`flex-shrink-0 px-4 py-3 rounded-xl cursor-pointer text-center transition
              ${slotIndex === index
                  ? 'bg-[#1E3A8A] text-white shadow'
                  : 'bg-gray-50 border'
                }`}
            >
              <p className='text-xs'>
                {item[0] && daysOfWeek[item[0].datetime.getDay()]}
              </p>
              <p className='font-medium'>
                {item[0] && item[0].datetime.getDate()}
              </p>
            </div>
          ))}
        </div>

        {/* 👉 TIME */}
        <div className='flex gap-3 overflow-x-auto mt-5 pb-2'>
          {docSlots.length > 0 && docSlots[slotIndex]?.map((item, index) => (
            <p
              key={index}
              onClick={() => setSlotTime(item.time)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm cursor-pointer transition
              ${item.time === slotTime
                  ? 'bg-[#1E3A8A] text-white'
                  : 'bg-gray-100 text-gray-600'
                }`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        {/* 👉 BUTTON */}
        <button
          onClick={bookAppointment}
          className='mt-6 w-full sm:w-auto bg-gradient-to-r from-[#1E3A8A] to-[#0EA5E9] text-white px-10 py-3 rounded-full hover:scale-105 transition'
        >
          Book Appointment
        </button>

      </div>

      {/* 🔥 RELATED DOCTORS */}
      <div className='mt-16'>
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>

    </div>
  )
}

export default Appointment
