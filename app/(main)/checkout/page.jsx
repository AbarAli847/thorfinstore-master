'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; 
import { X, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const Checkout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* Navbar Cart Icon Trigger */}
      <button 
        onClick={() => setIsCartOpen(true)} 
        aria-label="Open Cart" 
        className="relative p-2"
      >
        <ShoppingCart size={24} />
        <span className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
      </button>

      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-[2px]"
            />

            {/* Sidebar Drawer */}
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full max-w-[320px] bg-white z-[201] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 flex justify-between items-center border-b border-gray-200">
                <h2 className="text-[16px] font-bold uppercase tracking-widest text-[#333]">Your Cart</h2>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  aria-label="Close Cart" 
                  className="text-[#333] hover:rotate-90 transition-all duration-300"
                >
                  <X size={28} strokeWidth={1.5} />
                </button>
              </div>
              
              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                <CartItem 
                  image="https://5.imimg.com/data5/SELLER/Default/2022/12/SC/TM/SJ/94630792/cotton-ladies-suit.jpg" 
                  name="White Shirt Pleat" 
                  price="$19.00" 
                  qty="1" 
                />
                <CartItem 
                  image="https://5.imimg.com/data5/SELLER/Default/2022/12/SC/TM/SJ/94630792/cotton-ladies-suit.jpg" 
                  name="Converse All Star" 
                  price="$39.00" 
                  qty="1" 
                />
                <CartItem 
                  image="https://5.imimg.com/data5/SELLER/Default/2022/12/SC/TM/SJ/94630792/cotton-ladies-suit.jpg" 
                  name="Nixon Porter Leather" 
                  price="$17.00" 
                  qty="1" 
                />
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 mt-auto space-y-4">
                <div className="text-[16px] text-[#222] flex justify-between">
                  <span>Total:</span> 
                  <span className="font-medium">$75.00</span>
                </div>
                
                <div className="flex gap-3 w-full">
                  <button className="flex-1 bg-[#222] text-white py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-[#717fe0] transition-all duration-300">
                    View Cart
                  </button>

                  <Link
                    href="/C"
                    onClick={() => setIsCartOpen(false)}
                    className="flex-1 bg-[#222] text-white py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-[#717fe0] flex items-center justify-center transition-all duration-300"
                  >
                    Check Out
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Cart Item Component
const CartItem = ({ image, name, price, qty }) => (
  <div className="flex gap-4 items-center group">
    <div className="w-[60px] h-[80px] relative flex-shrink-0 bg-[#f7f7f7] border border-[#eee] cursor-pointer">
      <Image 
        src={image} 
        alt={name} 
        fill 
        className="object-cover group-hover:opacity-70 transition-all duration-300" 
      />
    </div>
    <div className="flex-1 flex flex-col justify-center gap-1">
      <h3 className="text-[14px] text-[#555] hover:text-[#717fe0] transition-colors cursor-pointer leading-tight">{name}</h3>
      <p className="text-[#888] text-[12px]">{qty} x {price}</p>
    </div>
  </div>
);

export default Checkout;
