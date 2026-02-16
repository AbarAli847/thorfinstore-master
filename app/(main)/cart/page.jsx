'use client'
import React, { useState } from 'react'
import { ShieldCheck, Truck, CreditCard, Banknote, Copy } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Success from '../Success/page'

const Customer_info = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [showSuccess, setShowSuccess] = useState(false)

  const accountNumber = '1234-5678-9012-3456'

  const handlePlaceOrder = () => setShowSuccess(true)
  const handleCopyAccount = () => {
    navigator.clipboard.writeText(accountNumber)
    alert('Account number copied!')
  }

  // 🔹 Compact input style with reduced width
  const inputStyle =
    'w-[90%] md:w-[80%] border px-3 py-2 text-[11px] focus:outline-none focus:border-black'

  // 🔹 Compact button style for COD/Advance
  const buttonStyle = (active) =>
    `w-[90%] md:w-[80%] p-2 border text-[10px] font-bold uppercase flex items-center justify-center gap-1 ${
      active ? 'bg-black text-white' : 'border-gray-200 text-gray-400'
    }`

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center p-4 md:p-10 font-sans text-[#222]">
      <div className="max-w-[1100px] w-full bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm border border-gray-100">

        {/* LEFT IMAGES */}
        <div className="w-full md:w-[50%] bg-[#fafafa] p-2 md:p-6 flex gap-2">
          <div className="relative h-[420px] md:h-[450px] flex-1 overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600"
              alt="Product"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-6 right-2 bg-white/90 p-2 rounded-full shadow-lg flex flex-col items-center text-[7px]">
              <Truck size={18} />
              <span className="font-bold uppercase text-center mt-1">
                Expedited<br />Shipping
              </span>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[450px] flex-1 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600"
              alt="Detail"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-2 bg-white/90 p-2 rounded-full shadow-lg flex flex-col items-center text-[7px]">
              <ShieldCheck size={18} />
              <span className="font-bold uppercase text-center mt-1">
                Secure<br />Payment
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-[50%] p-4 md:p-8 flex flex-col items-center">
          <form className="flex flex-col gap-2 w-full " onSubmit={(e) => e.preventDefault()}>

            {/* SHIPPING */}
            <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-1">
              Shipping Address
            </h3>
            <input className={inputStyle} placeholder="Full Name" />
            <input className={inputStyle} placeholder="Email" />
            <input className={inputStyle} placeholder="Address Line 1" />
            <input className={inputStyle} placeholder="City" />

            {/* PAYMENT METHOD */}
            <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mt-2 mb-1">
              Payment Method
            </h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full max-w-[400px] mx-auto">
  <button
    type="button"
    onClick={() => setPaymentMethod('cod')}
    className={buttonStyle(paymentMethod === 'cod')}
  >
    <Banknote size={14} /> COD
  </button>

  <button
    type="button"
    onClick={() => setPaymentMethod('advance')}
    className={buttonStyle(paymentMethod === 'advance')}
  >
    <CreditCard size={14} /> Advance
  </button>
</div>


            {paymentMethod === 'advance' && (
              <>
                <div className="relative mb-1 w-[90%] md:w-[80%]">
                  <input className="w-full border px-3 py-2 text-[11px] pr-10 focus:outline-none focus:border-black" value={accountNumber} readOnly />
                  <button
                    type="button"
                    onClick={handleCopyAccount}
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                  >
                    <Copy size={14} />
                  </button>
                </div>
                <input type="file" accept="image/*" className={inputStyle} />
              </>
            )}

            {/* ORDER SUMMARY */}
            <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mt-2 mb-1">
              Order Summary
            </h3>
            <div className="w-[90%] md:w-[80%] p-2 bg-gray-50 text-[11px]">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal: Rs. 15,000</span>
                <span>Shipping: Rs. 500</span>
              </div>
              <div className="flex justify-between font-black border-t pt-1 mt-1 text-[12px]">
                <span>TOTAL</span>
                <span>Rs. 15,500</span>
              </div>
            </div>

            {/* PLACE ORDER */}
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-[90%] md:w-[80%] bg-black text-white py-3 text-[11px] font-black uppercase tracking-[3px] mt-2"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && <Success onClose={() => setShowSuccess(false)} />}
      </AnimatePresence>
    </div>
  )
}

export default Customer_info
