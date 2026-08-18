import React, { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { ArrowBigLeft, MinusIcon, MinusSquare, MinusSquareIcon, Plus, PlusSquareIcon, Trash } from 'lucide-react';

const Carts = () => {

  const {carts,totalPrice,removeItem,navigate,decreaseQuantity,increaseQuantity} = useApp();
  

  const [showAddress,setShowAddress] = useState(false)


  return (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-black">{carts?.length > 0 ? carts.length : 0 } Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {carts?.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                                <img className="max-w-full h-full object-cover" src={product.thumbnail} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <p>Size: <span>{product.size || "N/A"}</span></p>
                                    <div className='flex items-center'>
                                        <p className={`${product.quantity > 9 ? "text-xs" : "text-medium"}`}>Qty: {product.quantity}</p>
                                        <div className='flex space-x-2 ml-3'>
                                            <button onClick={()=>increaseQuantity(product.id)}  className='p-2'><PlusSquareIcon/></button>
                                            <button onClick={()=>decreaseQuantity(product.id)}  className='p-2'><MinusSquareIcon/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">${product.price * product.quantity }</p>
                        <button onClick={()=>removeItem(product.id)} className="cursor-pointer mx-auto">
                            <Trash className='text-red-500 font-bold'/>
                        </button>
                    </div>)
                )}

                <button onClick={()=>navigate('/products')} className="group cursor-pointer flex items-center mt-8 gap-2 text-black font-medium">
                    <ArrowBigLeft className='text-green-600'/>
                    Continue Shopping
                </button>

            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">No address found</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-black hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                                <p onClick={() => setShowAddress(false)} className="text-gray-500 p-2 hover:bg-gray-100">
                                    New York, USA
                                </p>
                                <p onClick={() => setShowAddress(false)} className="text-black text-center cursor-pointer p-2 hover:bg-black/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{totalPrice}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>$5</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{totalPrice + 5}</span>
                    </p>
                </div>

                <button className="w-full py-3 mt-6 cursor-pointer bg-green-600 text-white font-medium hover:bg-green-500 transition">
                    Place Order
                </button>
            </div>
    </div>
  )
}

export default Carts
