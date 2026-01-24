'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react'; 

const NewArrival = () => {
  const products = [
    { id: 1, name: "Esprit Ruffle Shirt", rating: 4.5, price: 16.64, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "Herschel Supply", rating: 4.2, price: 35.31, image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "Only Check Trousers", rating: 4.8, price: 25.50, image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, name: "Classic Trench Coat", rating: 4.5, price: 75.00, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        
        <h2 className="text-[32px] md:text-[48px] font-[1000] text-center mb-10 uppercase tracking-tighter text-black">
          New Arrivals
        </h2>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <AnimatePresence>
            {products.map((product) => (
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
                    {product.id === 1 && (
                      <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">-20%</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Subtle Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <hr className="mt-16 border-black/5" />
      </div>
    </section>
  );
};

export default NewArrival;