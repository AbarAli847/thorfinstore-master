'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBasket } from 'lucide-react';
import { useRouter } from 'next/navigation'; 
import Aside from './Aside';
import { categoryData } from '@/utils/RawaData';

const ArrivelCards = () => {
  const router = useRouter();  
  const [activeCategory, setActiveCategory] = useState('All');

  const getFilteredProducts = () => {
    if (activeCategory === 'All') {
      return [
        ...categoryData.clothes,
        ...categoryData.wallets,
        ...categoryData.watches,
        ...categoryData.bracelets
      ];
    } else {
      return categoryData[activeCategory.toLowerCase()] || [];
    }
  };

  const allProducts = getFilteredProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  //  Navigation aur Data Saving Logic
  const handleProductClick = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    router.push('/product/id'); // app/(main)/product/page.jsx
  };

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Aside activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          <AnimatePresence mode='wait'>
            {currentProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => handleProductClick(product)}  
                className="group cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F0EEED] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* MOBILE BASKET ICON */}
                  <button className="absolute bottom-3 right-3 md:hidden bg-black text-white p-2 rounded-full shadow-lg">
                    <ShoppingBasket size={18} />
                  </button>

                  {/* Quick View (desktop hover) */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <button className="hidden md:block w-full bg-white text-black py-3 rounded-xl text-sm font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="space-y-1">
                  <h3 className="font-bold text-lg md:text-xl truncate text-black">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(product.rating || 4) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} 
                      />
                    ))}
                    <span className="text-xs text-black/40 ml-1">
                      {product.rating}/5
                    </span>
                  </div>

                  <p className="text-xl md:text-2xl font-bold text-black">
                    ${product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ArrivelCards;