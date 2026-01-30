'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import Aside from './Aside';
import {categoryData} from '@/utils/RawaData'

const ArrivelCards = () => {
  // Product data directly here (since you have it)

  // State for active category
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products based on activeCategory
  const getFilteredProducts = () => {
    if (activeCategory === 'All') {
      return [
        ...categoryData.clothes,
        ...categoryData.wallets,
        ...categoryData.watches,
        ...categoryData.bracelets
      ];
    } else {
      const categoryKey = activeCategory.toLowerCase(); // 'clothes', 'wallets', etc.
      return categoryData[categoryKey] || [];
    }
  };

  const allProducts = getFilteredProducts();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 cards per page

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Calculate total pages
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  // Get current page products
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <Aside activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* --- RIGHT PRODUCTS GRID --- */}
      <div className="flex-1">
        {/* Grid: 3 columns on md and above, 2 on sm, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          <AnimatePresence>
            {currentProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#F0EEED] mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="w-full bg-white text-black py-3 rounded-xl text-sm font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-1">
                  <h3 className="font-bold text-lg md:text-xl text-black truncate pr-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star size={14} className="fill-gray-200 text-gray-200" />
                    <span className="text-xs text-black/40 ml-1">{product.rating}/5</span>
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-center gap-3 pt-1">
                    <p className="text-xl md:text-2xl font-bold text-black">${product.price}</p>
                    {product.id === 'c1' && ( // Assuming first item has sale, adjust as needed
                      <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">-20%</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-12 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded ${currentPage === page ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArrivelCards;