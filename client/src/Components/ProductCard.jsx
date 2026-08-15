import React from 'react'

const ProductCard = ({product}) => {
  return (
            <div className="flex flex-col bg-white shadow-md md:w-60 my-4">
              <div className='justify-center flex flex-col items-center'>
                <img className='  w-40 h-40 object-cover'
                    src={product.thumbnail}
                    alt="image" />
                    </div>
                <div className="p-4 text-sm">
                    <p className="text-slate-600">$ {product.price}</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">{product.name}</p>
                    <p className="text-slate-500">{product.description.slice(1,60)}...</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-slate-100 text-slate-600 rounded py-2">
                            Add to cart
                        </button>
                        <button className="bg-green-600 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
 
  )
}

export default ProductCard
