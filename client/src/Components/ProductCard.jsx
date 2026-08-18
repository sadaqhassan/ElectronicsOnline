import React from 'react'
import { useApp } from '../context/AppContext'

const ProductCard = ({product}) => {
  const {navigate ,addToCart} = useApp()
  
  return (
            <div className="flex flex-col zoom-76 bg-white shadow-md  rounded-xl w-full my-2">
              <div className='justify-center flex flex-col items-center'>
                <img  onClick={()=>{navigate(`/product-detail/${product.id}`)}} className='w-full h-50 object-cover'
                    src={product.thumbnail}
                    alt="image" />
                </div>
                <div className="p-4 text-sm">
                    <p className="text-slate-600 font-bold">${product.price.toFixed()}</p>
                    <p className="text-slate-800  text-sm font-medium my-1">{product.title}</p>
                    <p className="text-slate-500 text-xs">{product.description.slice(0,40)}...</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button  onClick={()=>addToCart(product)} className="bg-slate-100 text-slate-600 rounded py-1 rounded">
                            Add to cart
                        </button>
                        <button  className="bg-green-600 text-white py-1 rounded">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
 
  )
}

export default ProductCard
