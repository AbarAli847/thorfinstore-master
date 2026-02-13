'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'  // ✅ Router import

const Success = ({ onClose }) => {
  const router = useRouter()

  const handleContinue = () => {
    onClose()         // Modal close
    router.push('/')  // Home page redirect
  }

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-md flex items-center justify-center z-[500] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white border border-gray-100 shadow-2xl rounded-none
          p-6 md:p-8
          max-w-[300px] w-full
          text-center
        "
      >
        {/* Animated Success Icon */}
        <div className="flex justify-center mb-5">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
            className="relative w-14 h-14 bg-[#717fe0] text-white rounded-full flex items-center justify-center"
          >
            {/* Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 rounded-full bg-[#717fe0]"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Check size={26} strokeWidth={3} />
            </motion.div>
          </motion.div>
        </div>

        {/* Text */}
        <h2 className="text-[18px] font-bold uppercase tracking-[2.5px] text-[#222] mb-3">
          Order Success
        </h2>
        <p className="text-[12px] text-[#888] leading-relaxed mb-6">
          Thank you for your purchase! Your order{' '}
          <span className="text-black font-medium">#TH-7721</span>{' '}
          is being processed.
        </p>

        {/* Button */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleContinue}
            className="
              w-full
              bg-[#222] text-white
              py-3
              text-[10px]
              font-bold uppercase tracking-widest
              hover:bg-[#717fe0]
              transition-all duration-300
              rounded-full
            "
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Success
