import React from 'react';
import { categoryData } from '@/utils/RawaData';
import { Star, ShoppingCart, Minus, Plus } from 'lucide-react';
import Link from 'next/link';

async function getSingleProduct(id) {
  const allProducts = Object.values(categoryData).flat();
  return allProducts.find((p) => p.id === id);
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) return <div className="p-20 text-center font-black">PRODUCT NOT FOUND</div>;

  return (
    <div className="max-w-[1240px] mx-auto px-4 md:px-10 py-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/">Home</Link>
        <span>/</span>
        <span className="text-black font-semibold">Shop</span>
      </nav>

      {/* MAIN FLEX CONTAINER */}
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
        
        {/* LEFT SIDE: Image (W-1/2 on desktop) */}
        <div className="w-full lg:w-[45%]">
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden aspect-[0.9/1]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-28 object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Details (W-1/2 on desktop) */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-3 tracking-tighter italic">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={i < 4 ? "fill-current" : "text-gray-200"} />
              ))}
            </div>
            <span className="text-sm font-medium">4.5/5</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="text-2xl text-gray-300 line-through font-bold">$200</span>
            <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs font-bold">-30%</span>
          </div>

          <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8 leading-relaxed">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Select */}
          <div className="mb-6 border-b border-gray-100 pb-6">
            <p className="text-gray-400 text-sm mb-4 font-semibold uppercase">Select Colors</p>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4F4631] cursor-pointer flex items-center justify-center border border-black/10">
                <div className="text-white text-xs">✓</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#314F4A] cursor-pointer" />
              <div className="w-9 h-9 rounded-full bg-[#31344F] cursor-pointer" />
            </div>
          </div>

          <div className="mb-8 border-b border-gray-100 pb-8">
            <p className="text-gray-400 text-sm mb-4 font-semibold uppercase">Choose Size</p>
            <div className="flex flex-wrap gap-3">
              {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                <button 
                  key={size}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${size === 'Large' ? 'bg-black text-white' : 'bg-[#F0F0F0] text-gray-600 hover:bg-black hover:text-white'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Button */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-5 py-4 w-36">
              <Minus className="cursor-pointer w-5 h-5" />
              <span className="font-bold text-lg">1</span>
              <Plus className="cursor-pointer w-5 h-5" />
            </div>
            
            <button className="flex-1 bg-black text-white py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}