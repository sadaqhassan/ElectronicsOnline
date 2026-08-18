import React from 'react'
import ProductCard from './ProductCard'

const SkeletonLoading = () => {
  return (
     <div className='w-full  object-cover h-48 rounded-xl  shadow-lg'>
    <div className='w-full animate-pulse object-cover h-48 rounded-xl bg-gradient from-gray-500 to-300 shadow-lg'>
              
    </div>      
    </div>

  )
}

export default SkeletonLoading
