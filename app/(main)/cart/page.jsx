'use client'
import React, { useState } from 'react'
import { ShieldCheck, Truck, CreditCard, Banknote, Copy } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Success from '../Success/page' // Correct path

const Customer_info = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [showSuccess, setShowSuccess] = useState(false)
  const accountNumber = "1234-5678-9012-3456" // Your account number

  const handlePlaceOrder = () => {
    // Show success modal
    setShowSuccess(true)
  }

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(accountNumber)
    alert("Account number copied!")
  }

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center p-4 md:p-10 font-sans text-[#222]">
      <div className="max-w-[1100px] w-full bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm border border-gray-100">

        {/* LEFT IMAGES */}
        <div className="w-full md:w-[50%] bg-[#fafafa] p-6 flex gap-2">
          <div className="relative h-[550px] flex-1 overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600"
              alt="Product"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-10 right-4 bg-white/90 p-3 rounded-full shadow-lg flex flex-col items-center">
              <Truck size={22} />
              <span className="text-[7px] font-bold uppercase mt-1 text-center">
                Expedited<br />Shipping
              </span>
            </div>
          </div>

          <div className="relative h-[550px] flex-1 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600"
              alt="Detail"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-10 left-4 bg-white/90 p-3 rounded-full shadow-lg flex flex-col items-center">
              <ShieldCheck size={22} />
              <span className="text-[7px] font-bold uppercase mt-1 text-center">
                Secure<br />Payment
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-[50%] p-8 md:p-12">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Shipping Fields */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400">
                Shipping Address
              </h3>
              <input className="w-full border p-3 text-xs" placeholder="Full Name" />
              <input className="w-full border p-3 text-xs" placeholder="Email" />
              <input className="w-full border p-3 text-xs" placeholder="Address Line 1" />
              <input className="w-full border p-3 text-xs" placeholder="City" />
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-4">
                Payment Method
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-2 border text-[10px] font-bold uppercase ${
                    paymentMethod === 'cod'
                      ? 'bg-black text-white'
                      : 'border-gray-200 text-gray-400'
                  }`}
                >
                  <Banknote size={14} /> Cash on Delivery
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('advance')}
                  className={`p-2 border text-[10px] font-bold uppercase ${
                    paymentMethod === 'advance'
                      ? 'bg-black text-white'
                      : 'border-gray-200 text-gray-400'
                  }`}
                >
                  <CreditCard size={14} /> Advance Payment
                </button>
              </div>

              {/* Advance Payment Fields */}
              {paymentMethod === 'advance' && (
                <div className="space-y-3">
                  {/* Account Number with copy */}
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full border p-3 text-xs pr-12"
                      value={accountNumber}
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={handleCopyAccount}
                      className="absolute top-1/2 right-2 -translate-y-1/2 p-1"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                  {/* Screenshot Upload */}
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full border p-3 text-xs"
                  />
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-4">
                Order Summary
              </h3>
              <div className="border p-3 bg-gray-50">
                <div className="flex justify-between text-[11px] text-gray-500">
                  <span>Subtotal: Rs. 15,000</span>
                  <span>Shipping: Rs. 500</span>
                </div>
                <div className="flex justify-between text-[13px] font-black border-t pt-3 mt-2">
                  <span>TOTAL</span>
                  <span>Rs. 15,500</span>
                </div>
              </div>
            </div>

            {/* Place Order */}
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-full bg-black text-white py-4 text-[11px] font-black uppercase tracking-[4px]"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && <Success onClose={() => setShowSuccess(false)} />}
      </AnimatePresence>
    </div>
  )
}

export default Customer_info
