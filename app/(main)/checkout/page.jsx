'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; 
import { X, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const Checkout = ({ isCartOpen, setIsCartOpen }) => {
  const [cartItems, setCartItems] = useState([]);

  // --- LOGIC START: Persistence Fix ---
  
  // 1. Load cart on Page Load (Refresh hone par khali nahi hoga)
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // 2. Sync cart whenever drawer opens or storage changes
  useEffect(() => {
    const syncCart = () => {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(savedCart);
    };

    if (isCartOpen) {
      syncCart();
    }

    window.addEventListener('storage', syncCart);
    return () => window.removeEventListener('storage', syncCart);
  }, [isCartOpen]);

  // --- LOGIC END ---

  const totalPrice = cartItems.reduce((acc, item) => {
    const rawPrice = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
      : item.price;
    
    const finalPrice = rawPrice || 0;
    return acc + (finalPrice * (item.qty || 1));
  }, 0);

  return (
    <>
      
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-[2px]"
            />

            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-full max-w-[320px] bg-white z-[201] flex flex-col shadow-2xl"
            >
              <div className="p-6 flex justify-between items-center border-b">
                <h2 className="text-[16px] font-bold uppercase tracking-widest">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300">
                  <X size={28} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <CartItem 
                      key={index}
                      image={item.image} 
                      name={item.name} 
                      price={item.price} 
                      qty={item.qty || 1} 
                    />
                  ))
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                     <p className="text-gray-400 uppercase text-xs tracking-widest font-medium">Your bag is empty.</p>
                     <button 
                        onClick={() => setIsCartOpen(false)}
                        className="mt-4 text-[10px] border-b border-black font-bold uppercase"
                     >
                        Start Shopping
                     </button>
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t mt-auto space-y-4 bg-gray-50">
                  <div className="text-[16px] flex justify-between items-center">
                    <span className="text-gray-500 uppercase text-xs font-bold tracking-tighter">Subtotal:</span> 
                    <span className="font-bold text-lg">Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex flex-col gap-2 w-full">
                    <Link
                      href="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="w-full bg-black text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-[2px] flex items-center justify-center hover:bg-zinc-800 transition-all"
                    >
                      Check Out
                    </Link>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="w-full bg-white border border-black text-black py-3 rounded-full text-[11px] font-bold uppercase tracking-[2px] hover:bg-gray-100 transition-all"
                    >
                    V
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const CartItem = ({ image, name, price, qty }) => (
  <div className="flex gap-4 items-center group">
    <div className="w-[70px] h-[90px] relative flex-shrink-0 bg-[#f7f7f7] rounded-md overflow-hidden border">
      <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="flex-1 flex flex-col justify-center gap-1">
      <h3 className="text-[13px] font-bold text-[#222] uppercase tracking-tighter leading-tight">{name}</h3>
      <p className="text-[#888] text-[12px] font-medium">{qty} x {typeof price === 'number' ? `Rs. ${price.toLocaleString()}` : price}</p>
    </div>
  </div>
);

export default Checkout;