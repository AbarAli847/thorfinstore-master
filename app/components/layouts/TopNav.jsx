'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; 
import Image from 'next/image';
import { 
  ShoppingCart, User, ChevronDown, 
  X, Menu, Package, Heart, LogOut, Settings 
} from 'lucide-react';

const TopNav = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [showPromo, setShowPromo] = useState(true);
  
  // --- LOGIC: Cart State ---
  const [cartItems, setCartItems] = useState([]);

  // Function to sync cart from localStorage
  const syncCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  };

  useEffect(() => {
    syncCart();  
    // Listen for changes from other components (Quickview)
    window.addEventListener('storage', syncCart);
    const interval = setInterval(syncCart, 1000); // Polling as backup
    return () => {
      window.removeEventListener('storage', syncCart);
      clearInterval(interval);
    };
  }, []);

  // Total Price Calculation Logic
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
      : item.price;
    return acc + (price || 0) * (item.qty || 1);
  }, 0);
  // --- END LOGIC ---

  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVars = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.2 } }
  };

  const shopCategories = [
    { name: "Women Clothes", slug: "clothes" },
    { name: "Wallets", slug: "wallets" },
    { name: "Watches", slug: "watches" },
    { name: "Bracelets", slug: "bracelets" }
  ];

  return (
    <>
      <nav className="w-full font-sans sticky top-0 z-[100] bg-white border-b border-gray-100">
        {/* 1. Promo Bar */}
        <AnimatePresence>
          {showPromo && (
            <motion.div 
              initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
              className="bg-black text-white text-center py-2.5 text-xs font-medium relative px-10"
            >
              Sign up and get 20% off to your first order. 
              <button className="ml-2 underline font-bold hover:text-gray-300 transition-colors">Sign Up Now</button>
              <X 
                size={16} 
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:rotate-90 transition-transform" 
                onClick={() => setShowPromo(false)} 
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. Main Nav */}
        <div className="w-full px-4 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu size={24} />
            </button>
            <Link href="/" className="text-3xl lg:text-4xl font-[1000] tracking-tighter hover:opacity-80 transition-opacity">
              THORFIN<span className="text-gray-400">STORE</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            <div 
              className="relative py-2 group cursor-pointer flex items-center gap-1 font-bold text-[14px]"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <span className='text-[17px]'>Shop</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`} />
              
              <AnimatePresence>
                {isShopOpen && (
                  <motion.div 
                    variants={dropdownVars} initial="hidden" animate="visible" exit="exit"
                    className="absolute top-full left-0 w-52 bg-white shadow-2xl border border-gray-100 mt-1 py-2 rounded-xl overflow-hidden"
                  >
                    {shopCategories.map((item) => (
                      <Link 
                        key={item.slug} 
                        href={`/category/${item.slug}`}
                        className="block px-4 py-2.5 hover:bg-gray-50 hover:pl-6 transition-all border-l-2 border-transparent hover:border-black text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/on-sale" className="font-bold text-[17px] hover:text-gray-500 transition-colors">On Sale</Link>
            <Link href="/newarrivals" className="font-bold text-[17px] hover:text-gray-500 transition-colors">New Arrivals</Link>
            <Link href="/clearence" className="font-bold text-[17px]  text-red-500 transition-colors">clearence</Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div 
              onClick={() => setIsCartOpen(true)} 
              className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer"
            >
              <ShoppingCart size={24} />
              {/* LOGIC: Dynamic Badge Count */}
              {cartItems.length > 0 && (
                <span className="absolute top-1 right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              )}
            </div>

            <div className="relative" ref={profileRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`p-2.5 rounded-full transition-all duration-300 ${isProfileOpen ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
              >
                <User size={24} />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div 
                    variants={dropdownVars} initial="hidden" animate="visible" exit="exit"
                    className="absolute right-0 top-full w-64 bg-white shadow-[0px_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 mt-4 rounded-2xl overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 border-b">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">My Account</p>
                      <p className="text-sm font-black truncate">thorfin_user@store.com</p>
                    </div>
                    <div className="p-2">
                      <ProfileItem icon={<Package size={18}/>} label="My Orders" />
                      <ProfileItem icon={<Heart size={18}/>} label="Wishlist" />
                      <ProfileItem icon={<Settings size={18}/>} label="Settings" />
                      <div className="h-[1px] bg-gray-100 my-2" />
                      <ProfileItem icon={<LogOut size={18}/>} label="Logout" danger />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* --- CART DRAWER SECTION --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-[2px]"
            />

            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full max-w-[320px] bg-white z-[201] flex flex-col shadow-2xl"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-200">
                <h2 className="text-[16px] font-bold uppercase tracking-widest text-[#333]">Your Cart</h2>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  className="text-[#333] hover:rotate-90 transition-all duration-300"
                >
                  <X size={28} strokeWidth={1.5} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                {/* LOGIC: Dynamic Cart Items */}
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <CartItem 
                      key={index}
                      image={item.image} 
                      name={item.name} 
                      price={item.price} 
                      qty={item.qty} 
                    />
                  ))
                ) : (
                  <p className="text-center text-gray-400 mt-10 uppercase text-[10px] tracking-widest">Your bag is empty.</p>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-200 mt-auto space-y-4">
                  <div className="text-[16px] text-[#222] flex justify-between">
                    <span>Total:</span> 
                    {/* LOGIC: Dynamic Total */}
                    <span className="font-medium font-sans text-lg">Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex gap-3 w-full">
                    <button className="flex-1 bg-white border border-black text-black py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                      View Cart
                    </button>
                    <Link
                      href="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="flex-1 bg-black text-white py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 flex items-center justify-center transition-all duration-300"
                    >
                      Check Out
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Logic Same as Before */}
      <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]" />
              <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[120] p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-black text-xl">THORFIN</span>
                  <X onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer" />
                </div>
                <nav className="space-y-6">
                  <div onClick={() => setIsShopOpen(!isShopOpen)} className="flex justify-between items-center font-bold text-lg cursor-pointer">
                    Shop <ChevronDown size={20} className={isShopOpen ? 'rotate-180' : ''} />
                  </div>
                  {isShopOpen && (
                    <div className="pl-4 space-y-4 text-gray-500 font-medium">
                      {shopCategories.map((item) => (
                        <Link key={item.slug} href={`/category/${item.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="block">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  <Link href="/on-sale" className="block font-bold text-lg">On Sale</Link>
                  <Link href="/newarrivals" className="block font-bold text-lg">New Arrivals</Link>
                  <Link href="/brands" className="block font-bold text-lg">Brands</Link>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
    </>
  );
};

const CartItem = ({ image, name, price, qty }) => (
  <div className="flex gap-4 items-center group">
    <div className="w-[60px] h-[80px] relative flex-shrink-0 bg-[#f7f7f7] border border-[#eee] overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
    </div>
    <div className="flex-1 flex flex-col justify-center gap-1">
      <h3 className="text-[13px] font-medium text-[#333] hover:text-black transition-colors cursor-pointer leading-tight uppercase tracking-tight">{name}</h3>
      <p className="text-gray-400 text-[12px] font-medium">{qty} x {price}</p>
    </div>
  </div>
);

const ProfileItem = ({ icon, label, danger }) => (
  <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${danger ? 'text-red-500 hover:bg-red-50' : 'hover:bg-gray-50 text-gray-700'}`}>
    <span className={danger ? '' : 'text-gray-400 group-hover:text-black'}>{icon}</span>
    <span className="text-sm font-semibold">{label}</span>
  </button>
);

export default TopNav;