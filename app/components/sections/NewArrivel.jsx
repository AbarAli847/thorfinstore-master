'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBasket } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Navigation ke liye

const NewArrival = () => {
  const router = useRouter();

  const products = [
    { id: 1, name: "Esprit Ruffle Shirt", rating: 4.5, price: 16.64, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "Herschel Supply", rating: 4.2, price: 35.31, image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "Only Check Trousers", rating: 4.8, price: 25.50, image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, name: "Classic Trench Coat", rating: 4.5, price: 75.00, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop" },
  ];

  // ✅ Logic: Product save karo aur redirect karo
  const handleProductClick = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    router.push('/product/id');
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <h2 className="text-[32px] md:text-[48px] font-bold text-center mb-10 uppercase tracking-tighter text-black">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <AnimatePresence mode="wait">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => handleProductClick(product)} //  Click handle
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden  bg-[#F0EEED] mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />

                  <div className="hidden md:flex absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-4">
                    <button className="w-full bg-white text-black py-3 rounded-xl text-sm font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </button>
                  </div>

                  <button className="md:hidden absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg active:scale-95">
                    <ShoppingBasket size={20} className="text-black" />
                  </button>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-lg md:text-xl text-black truncate pr-2">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} />
                    ))}
                    <span className="text-xs text-black/40 ml-1">{product.rating}/5</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-black">${product.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;