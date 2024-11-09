import React from 'react'
import {useSelector} from 'react-redux'

const OrderSummary = () => {
  const order = useSelector(state => state.order)

  return (
    <section className='bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-6'>
      <h2 className='text-xl font-semibold mb-4 text-center'>Order Summary</h2>

      <div className='space-y-4'>
        <div className='flex justify-between'>
          <span className='font-medium'>Name:</span>
          <span>{order.name}</span>
        </div>

        <div className='flex justify-between'>
          <span className='font-medium'>Email:</span>
          <span>{order.email}</span>
        </div>

        <div className='flex justify-between'>
          <span className='font-medium'>Stay Duration:</span>
          <span>{order.stayDuration} days</span>
        </div>

        <div className='flex justify-between'>
          <span className='font-medium'>Total Price:</span>
          <span>${order.totalPrice}</span>
        </div>
      </div>

      <div className='mt-6 text-center'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400'>
          Confirm Booking
        </button>
      </div>
    </section>
  )
}

export default OrderSummary
