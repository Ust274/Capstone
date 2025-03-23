import React from 'react'

const Card = ({ 
  dishName = "Delicious Dish", 
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  price = "$0.00",
  imageUrl = "/path/to/default-dish.jpg" 
}) => {
  return (
    <div className='flex flex-col items-center space-y-4 w-[90%] h-96 bg-[#1e2939] text-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
        <h2 className='text-xl font-bold text-gray-800'>{dishName}</h2>
        <div className='w-full h-48 overflow-hidden rounded-md'>
            <img 
              src={imageUrl} 
              alt={`Image of ${dishName}`} 
              className='w-full h-full object-cover'
            />
        </div>
        <p className='text-sm overflow-ellipsis line-clamp-3 text-white'>
            {description}
        </p>
        <div className='w-full flex justify-between items-center'>
          <span className='font-bold text-lg'>{price}</span>
          <button className='bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors'>
            Add to order
          </button>
        </div>
    </div>
  )
}

export default Card