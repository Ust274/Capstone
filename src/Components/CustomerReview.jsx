import React from 'react'
import { Star } from 'lucide-react'

const CustomerReview = () => {



  return (
    <div className='felx flex-col items-center space-y-5 w-[90%] h-48 bg-gray-100 p-5 rounded-lg shadow-lg '>
        <span><Star size={10}/></span>
        <span className='text-gray-500 font-bold 2xl:'>Jhon Doe</span>
        <p>
            Lorem ipsum dolor sit amet consectetur
        </p>
    </div>
  )
}

export default CustomerReview