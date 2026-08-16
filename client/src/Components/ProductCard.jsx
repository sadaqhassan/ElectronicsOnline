import React from 'react'
import { useApp } from '../context/AppContext'

const ProductCard = ({product}) => {
  const { addToCart } = useApp()
  return (
            <div className="flex flex-col bg-white shadow-md  rounded-xl w-full my-4">
              <div className='justify-center flex flex-col items-center'>
                <img className='w-full h-40 object-cover'
                    src={product.thumbnail}
                    alt="image" />
                </div>
                <div className="p-4 text-sm">
                    <p className="text-slate-600 font-bold">${product.price.toFixed()}</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">{product.title}</p>
                    <p className="text-slate-500 text-xs">{product.description.slice(0,60)}...</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button  onClick={()=>addToCart(product.id)} className="bg-slate-100 text-slate-600 rounded py-2">
                            Add to cart
                        </button>
                        <button  className="bg-green-600 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
 
  )
}

export default ProductCard
