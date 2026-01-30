'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Cart_page = () => {
  const [qty, setQty] = useState(1)

  const increase = () => setQty(qty + 1)
  const decrease = () => {
    if (qty > 1) setQty(qty - 1)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl rounded-sm shadow-lg overflow-hidden flex flex-col md:flex-row p-6 md:p-12 relative">
        
        {/* Thumbnails */}
        <div className="flex flex-row md:flex-col gap-3 mb-4 md:mb-0">
          {[1, 2, 3].map((img) => (
            <div key={img} className="w-16 h-20 border border-gray-200 cursor-pointer hover:border-gray-400 relative">
              <Image src={`/product-${img}.jpg`} alt="thumb" fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 px-0 md:px-8 relative group">
          <div className="w-full h-[500px] bg-gray-50 overflow-hidden relative">
            <Image 
              src="/product-main.jpg" 
              alt="Lightweight Jacket" 
              fill
              className="object-cover"
            />
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/30 text-white p-2">&lt;</button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/30 text-white p-2">&gt;</button>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-[400px] flex flex-col pt-6 md:pt-0">
          <h1 className="text-2xl font-light text-gray-800">Lightweight Jacket</h1>
          <p className="text-xl font-semibold mt-2 text-gray-900">$58.79</p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex border border-gray-300 h-11">
              <button onClick={decrease} className="px-4 hover:bg-gray-100 border-r border-gray-300">-</button>
              <input type="text" value={qty} className="w-12 text-center outline-none" readOnly />
              <button onClick={increase} className="px-4 hover:bg-gray-100 border-l border-gray-300">+</button>
            </div>
            <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-full transition-all uppercase text-sm tracking-wider">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart_page
