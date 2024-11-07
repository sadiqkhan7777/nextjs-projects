import React from 'react'

const ReservationSection = () => {
  return (
    <section className='bg-gradient-to-r from-black to-slate-900'>
    <div className='container mx-auto text-center'>
      <h2 className='text-3xl font-extrabold mb-6 text-white'>Make A Reservation</h2>
      <form className='max-w-md mx-auto'>
          <div className='mb-4 text-white'>
              <input
              type="text"
              placeholder='Your Name'
              className='w-full p-3 border-gray-300 rounded-md'
              required />
          </div>

        <div>
          <input 
          type="text"
          placeholder='Your E-Mail'
          className='w-full p-3 border-gray-300 rounded-md'
          required />
        </div>

        <div>
          <input 
          type="date"
          className='w-full p-3 border-gray-300 rounded-md'
          required />
        </div>

        <div>
          <input 
          type="time"
          className='w-full p-3 border-gray-300 rounded-md'
          required />
        </div>

        <div>
          <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>
            Reserved Table
          </button> 
        </div>

      </form>
      </div>
    </section>
  )
}

export default ReservationSection;