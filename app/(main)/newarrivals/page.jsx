"use client";

import { useState } from 'react';
// Data import karte waqt file name check karlein (RawData ya RawaData)
import {categoryData} from '@/utils/RawaData'
import { Star, ChevronRight, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewArrivalsPage() {
  // Default category 'clothes' rakhi hai
  const [activeCategory, setActiveCategory] = useState('clothes');

  // Sidebar categories labels
  const categories = [
    { id: 'clothes', label: 'Clothes' },
    { id: 'wallets', label: 'Wallets' },
    { id: 'watches', label: 'Watches' },
    { id: 'bracelets', label: 'Bracelets' }
  ];

  // Data fetch logic from your array
  const displayProducts = categoryData[activeCategory] || [];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-10 font-sans bg-white min-h-screen">
      
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[12px] uppercase tracking-widest text-gray-400 mb-8 px-2">
        <Link href="/" className="hover:text-black transition-colors font-bold">Home</Link>
        <ChevronRight size={12} />
        <span className="text-black font-bold italic">Women's Collection</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* --- LEFT SIDEBAR (Stylish & Clean) --- */}
        <aside className="hidden lg:block w-72 flex-shrink-0 border border-gray-100 rounded-[24px] p-6 h-fit sticky top-10 shadow-sm">
          <div className="flex justify-between items-center mb-8 border-b border-gray-50 pb-4">
            <h2 className="text-xl font-black uppercase tracking-tighter text-black">Filters</h2>
          </div>

          <div className="space-y-3">
            {categories.map((cat) => (
              <button 
                key={cat.id} 
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full flex justify-between items-center py-3 px-4 rounded-xl transition-all group ${
                  activeCategory === cat.id 
                  ? 'bg-black text-white shadow-lg shadow-black/10 translate-x-1' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-black font-bold'
                }`}
              >
                <span className="text-base tracking-tight">{cat.label}</span> 
                <ChevronRight size={16} className={`${activeCategory === cat.id ? 'opacity-100' : 'opacity-30 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-50">
             <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">New Season</p>
                <p className="text-sm font-bold text-black italic">Up to 40% Off on Accessories</p>
             </div>
          </div>
        </aside>

        {/* --- RIGHT SIDE (Grid with 3 Cards) --- */}
        <main className="flex-1">
          <div className="flex justify-between items-end mb-10 px-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-[1000] uppercase tracking-tighter text-black leading-none italic">
                {activeCategory}
              </h1>
              <p className="text-gray-400 text-xs font-black mt-2 uppercase tracking-[0.2em]">
                Explore {displayProducts.length} Premium Items
              </p>
            </div>
          </div>

          {/* Grid Set to 3 Columns (lg:grid-cols-3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {displayProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Image Container with Next/Image for Speed */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-[#F0EEED] mb-6 shadow-sm border border-transparent group-hover:border-gray-200 transition-all">
                  <Image 
                    src={`${product.image}?q=80&w=800`}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all flex items-end p-5">
                    <button className="w-full bg-white/90 backdrop-blur-md text-black py-4 rounded-2xl text-[11px] font-black shadow-2xl uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                      <ShoppingCart size={16} /> Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2 px-1">
                  <h3 className="font-black text-[18px] text-black uppercase tracking-tighter truncate leading-tight">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-current" : "text-gray-200"} />
                      ))}
                    </div>
                    <span className="text-[12px] font-black text-gray-400 tracking-tighter">{product.rating}/5</span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-2xl font-[1000] text-black italic">${product.price}</span>
                    <span className="text-gray-300 line-through font-bold text-lg decoration-red-500/30">$200</span>
                    <span className="text-red-500 text-[10px] font-black uppercase bg-red-50 px-2.5 py-1 rounded-lg">SALE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-20 flex justify-center border-t border-gray-50 pt-10">
             <button className="px-14 py-4 border-2 border-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-black/20">
                Show More Arrivals
             </button>
          </div>
        </main>
      </div>
    </div>
  );
}