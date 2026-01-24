'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const ProductOverview = () => {
  const [activeTab, setActiveTab] = useState('All Products');

  const categories = ['All Products', 'Women', 'Men', 'Bag', 'Shoes', 'Watches'];

  const products = [
    { id: 1, name: "Esprit Ruffle Shirt", rating: 4.5, price: 16.64, category: 'Women', image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "Herschel supply", rating: 4.2, price: 35.31, category: 'Women', image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "Only Check Trousers", rating: 4.8, price: 25.50, category: 'Men', image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, name: "Classic Trench Coat", rating: 4.5, price: 75.00, category: 'Women', image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop" },
  ];

  const filteredProducts = activeTab === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        
        {/* HEADING */}
        <h2 className="text-[32px] md:text-[40px] font-[1000] text-center mb-10 uppercase tracking-tighter text-black">
          PRODUCT OVERVIEW
        </h2>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm md:text-base font-medium transition-all relative pb-1 ${
                  activeTab === tab ? 'text-black' : 'text-black/40 hover:text-black'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="underline_overview" className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
                )}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2 border border-black/10 rounded-sm text-sm font-medium hover:bg-black hover:text-white transition-all">
              <span>Filter</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1.5 3.5H13.5M3.5 7.5H11.5M5.5 11.5H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <button className="flex items-center gap-2 px-5 py-2 border border-black/10 rounded-sm text-sm font-medium hover:bg-black hover:text-white transition-all">
              <span>Search</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <AnimatePresence mode='wait'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                {/* Image Container - New Look */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#F0EEED] mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="w-full bg-white text-black py-3 rounded-xl text-sm font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Info - New Look */}
                <div className="space-y-1">
                  <h3 className="font-bold text-lg md:text-xl text-black truncate pr-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star size={14} className="fill-gray-200 text-gray-200" />
                    <span className="text-xs text-black/40 ml-1">{product.rating || 4.5}/5</span>
                  </div>

                  <p className="text-xl md:text-2xl font-bold text-black pt-1">
                    ${product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;