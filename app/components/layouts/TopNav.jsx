// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Search, ShoppingCart, User, ChevronDown, 
//   X, Menu, Package, Heart, LogOut, Settings 
// } from 'lucide-react';
// // import Hero from './components/Slider';

// const TopNav = () => {
//   const [isShopOpen, setIsShopOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showPromo, setShowPromo] = useState(true);
  
//   // Ref for handling click outside
//   const profileRef = useRef(null);

//   // Close profile dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setIsProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Variants for Smooth Animations
//   const dropdownVars = {
//     hidden: { opacity: 0, y: 15, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
//     exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.2 } }
//   };

//   return (
// <>
//     <nav className="w-full font-sans sticky top-0 z-[100] bg-white border-b border-gray-100">
//       {/* 1. Dynamic Announcement Bar */}
//       <AnimatePresence>
//         {showPromo && (
//           <motion.div 
//             initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
//             className="bg-black text-white text-center py-2.5 text-xs font-medium relative px-10"
//           >
//             Sign up and get 20% off to your first order. 
//             <button className="ml-2 underline font-bold hover:text-gray-300 transition-colors">Sign Up Now</button>
//             <X 
//               size={16} 
//               className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:rotate-90 transition-transform" 
//               onClick={() => setShowPromo(false)} 
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 2. Main Navigation Content */}
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        
//         {/* Left: Mobile Menu & Logo */}
//         <div className="flex items-center gap-3">
//           <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 hover:bg-gray-100 rounded-full">
//             <Menu size={24} />
//           </button>
//           <div className="text-2xl lg:text-3xl font-[1000] tracking-tighter hover:opacity-80 transition-opacity">
//             THORFIN<span className="text-gray-400">STORE</span>
//           </div>
//         </div>

//         {/* Center: Desktop Nav Links */}
//         <div className="hidden md:flex items-center gap-6 lg:gap-8">
//           <div 
//             className="relative py-2 group cursor-pointer flex items-center gap-1 font-medium"
//             onMouseEnter={() => setIsShopOpen(true)}
//             onMouseLeave={() => setIsShopOpen(false)}
//           >
//             <span>Shop</span>
//             <ChevronDown size={14} className={`transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`} />
//             <AnimatePresence>
//               {isShopOpen && (
//                 <motion.div 
//                   variants={dropdownVars} initial="hidden" animate="visible" exit="exit"
//                   className="absolute top-full left-0 w-48 bg-white shadow-2xl border border-gray-100 mt-1 py-2 rounded-xl"
//                 >
//                   {['Men', 'Women', 'Accessories'].map(item => (
//                     <a key={item} href="#" className="block px-4 py-2.5 hover:bg-gray-50 hover:pl-6 transition-all border-l-2 border-transparent hover:border-black text-sm">
//                       {item}'s Collection
//                     </a>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//           {['On Sale', 'New Arrivals', 'Brands'].map(link => (
//             <a key={link} href="#" className="font-medium hover:text-gray-500 transition-colors py-2">{link}</a>
//           ))}
//         </div>

//         {/* Right: Search & Actions */}
//         <div className="flex-1 max-w-md relative hidden lg:block group">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
//           <input 
//             type="text" placeholder="Search for products..." 
//             className="w-full bg-[#F0F0F0] py-2.5 pl-11 pr-4 rounded-full outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all"
//           />
//         </div>

//         {/* Icons Area */}
//         <div className="flex items-center gap-2 md:gap-4">
//           <button className="p-2 hover:bg-gray-100 rounded-full lg:hidden"><Search size={22}/></button>
          
//           <div className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer">
//             <ShoppingCart size={22} />
//             <span className="absolute top-1 right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
//           </div>

//           {/* --- Profile Dropdown START --- */}
//           <div className="relative" ref={profileRef}>
//             <button 
//               onClick={() => setIsProfileOpen(!isProfileOpen)}
//               className={`p-2.5 rounded-full transition-all duration-300 ${isProfileOpen ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
//             >
//               <User size={22} />
//             </button>

//             <AnimatePresence>
//               {isProfileOpen && (
//                 <motion.div 
//                   variants={dropdownVars} initial="hidden" animate="visible" exit="exit"
//                   className="absolute right-0 top-full w-64 bg-white shadow-[0px_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 mt-4 rounded-2xl overflow-hidden"
//                 >
//                   <div className="p-4 bg-gray-50 border-b">
//                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">My Account</p>
//                     <p className="text-sm font-black truncate">thorfin_user@store.com</p>
//                   </div>
//                   <div className="p-2">
//                     <ProfileItem icon={<Package size={18}/>} label="My Orders" />
//                     <ProfileItem icon={<Heart size={18}/>} label="Wishlist" />
//                     <ProfileItem icon={<Settings size={18}/>} label="Settings" />
//                     <div className="h-[1px] bg-gray-100 my-2" />
//                     <ProfileItem icon={<LogOut size={18}/>} label="Logout" danger />
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//           {/* --- Profile Dropdown END --- */}
//         </div>
//       </div>

//       {/* 3. Mobile Sidebar (Drawer) */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <>
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]" />
//             <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[120] p-6 shadow-2xl">
//               <div className="flex justify-between items-center mb-8">
//                 <span className="font-black text-xl">THORFIN</span>
//                 <X onClick={() => setIsMobileMenuOpen(false)} className="cursor-pointer" />
//               </div>
//               <nav className="space-y-6">
//                 <div onClick={() => setIsShopOpen(!isShopOpen)} className="flex justify-between items-center font-bold text-lg">
//                   Shop <ChevronDown size={20} className={isShopOpen ? 'rotate-180' : ''} />
//                 </div>
//                 {isShopOpen && (
//                   <div className="pl-4 space-y-4 text-gray-500 font-medium">
//                     <p>Men's Wear</p>
//                     <p>Women's Wear</p>
//                     <p>Brands</p>
//                   </div>
//                 )}
//                 <p className="font-bold text-lg">On Sale</p>
//                 <p className="font-bold text-lg">New Arrivals</p>
//               </nav>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </nav>
//     {/* <Hero/> */}
// </>
//   );
// };

// // Helper Component for Profile Items
// const ProfileItem = ({ icon, label, danger }) => (
//   <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${danger ? 'text-red-500 hover:bg-red-50' : 'hover:bg-gray-50 text-gray-700'}`}>
//     <span className={danger ? '' : 'text-gray-400 group-hover:text-black'}>{icon}</span>
//     <span className="text-sm font-semibold">{label}</span>
//   </button>
// );

// export default TopNav;


'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; // Navigation ke liye zaroori hai
import { 
  Search, ShoppingCart, User, ChevronDown, 
  X, Menu, Package, Heart, LogOut, Settings 
} from 'lucide-react';

const TopNav = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  
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

  // Categories Array for easy management and future API
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu size={24} />
            </button>
            <Link href="/" className="text-2xl lg:text-3xl font-[1000] tracking-tighter hover:opacity-80 transition-opacity">
              THORFIN<span className="text-gray-400">STORE</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div 
              className="relative py-2 group cursor-pointer flex items-center gap-1 font-medium"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <span>Shop</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`} />
              
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
            
            <Link href="on-sale" className="font-medium hover:text-gray-500 transition-colors">On Sale</Link>
            <Link href={'/newarrivals'} className="font-medium hover:text-gray-500 transition-colors">New Arrivals</Link>
            <Link href="/brands" className="font-medium hover:text-gray-500 transition-colors">Brands</Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative hidden lg:block group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
            <input 
              type="text" placeholder="Search for products..." 
              className="w-full bg-[#F0F0F0] py-2.5 pl-11 pr-4 rounded-full outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all"
            />
          </div>

          {/* Icons Area */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full lg:hidden"><Search size={22}/></button>
            
            <div className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <Link href={'/main/checkout'}>
               <ShoppingCart size={22} />
              </Link>
              <span className="absolute top-1 right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`p-2.5 rounded-full transition-all duration-300 ${isProfileOpen ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
              >
                <User size={22} />
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

        {/* Mobile Sidebar */}
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
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const ProfileItem = ({ icon, label, danger }) => (
  <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${danger ? 'text-red-500 hover:bg-red-50' : 'hover:bg-gray-50 text-gray-700'}`}>
    <span className={danger ? '' : 'text-gray-400 group-hover:text-black'}>{icon}</span>
    <span className="text-sm font-semibold">{label}</span>
  </button>
);

export default TopNav;