import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';
import { useApp } from '../context/AppContext';
import SkeletonLoading from '../Components/SkeletonLoading';

const Products = () => {
   const {products,searchedProducts} = useApp()

  return (
    <div className='grid grid-cols-2 gap-3 mt-10 md:grid-cols-3 '>
    {
    searchedProducts.length > 0 ? 
    searchedProducts.map((product)=>(
            <div key={product.id}>
                <ProductCard product={product}/>
            </div>
      )) :
    products.length > 0 ?
        products.map((product)=>(
            <div key={product.id}>
                <ProductCard product={product}/>
            </div>
        )) : 
         Array(9).fill().map((_,index)=>(
            <SkeletonLoading key={index}/>
         ))
      }
    </div>
  )
}

export default Products
