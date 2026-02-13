'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ProductOverview = () => {
  const router = useRouter();

  const categories = [
    { id: 'clothes', name: 'Women clothes', image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop" },
    { id: 'Wallets', name: 'Wallets', image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
    { id: 'Watches', name: 'Watches', image: "https://images.unsplash.com/photo-1519704943920-18447d21751b?q=80&w=1000&auto=format&fit=crop" },
    { id: 'Bracelets', name: 'Bracelets', image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop" },
  ];

  const handleCategoryClick = (id) => {
    router.push(`/category/${id.toLowerCase()}`);
  };

  return (
    // py-20 ko kam kar ke py-10 ya pt-0 kar diya hai space hatane ke liye
    <section className="pt-4 pb-12 bg-white w-full"> 
      
      {/* Product Overview Heading ki margin-bottom kam kar di (mb-4) */}
      <div className='text-[32px] md:text-[40px] font-bold text-center mb-6 uppercase tracking-tighter text-black'>
          <h1>Product Overview</h1>
      </div>

      {/* Container ki width ko full rakha hai taaki navbar/layout disturb na ho */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center gap-6 md:gap-4">
        
        {/* LEFT SIDE: Heading */}
        <div className="w-full md:w-[20%] self-start md:self-center">
          <h2 className="text-[28px] md:text-[32px] font-medium leading-[1.1] text-black tracking-tight text-center md:text-left">
            SHOP BY<br className="hidden md:block" /> CATEGORY
          </h2>
        </div>

        {/* RIGHT SIDE: Category Cards */}
        <div className="w-full md:w-[80%] grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -5 }}
              onClick={() => handleCategoryClick(cat.id)}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F0EEED] rounded-sm">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              <p className="mt-3 text-[14px] md:text-[16px] font-normal text-gray-800 tracking-wide">
                {cat.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductOverview;