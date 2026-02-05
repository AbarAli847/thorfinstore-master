'use client'
import React, { useState, useEffect } from 'react';
import { Plus, Minus, Heart } from 'lucide-react';
import Image from 'next/image';

const Quickview = () => {
  const [product, setProduct] = useState(null); // Initial null rakha hai
  const [quantity, setQuantity] = useState(1);
  const [accordionOpen, setAccordionOpen] = useState({
    Description: false,
    Details: false,
    'Delivery Time': false
  });

  // ✅ UseEffect: Page load hote hi data get karega
  useEffect(() => {
    const savedProduct = localStorage.getItem('selectedProduct');
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  }, []);

  const toggleAccordion = (section) => {
    setAccordionOpen(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const accordionContent = {
    'Description': 'This premium quality outfit offers comfort and style, perfect for casual and semi-formal occasions.',
    'Details': 'High-quality fabric, machine washable, and long-lasting colors. Perfect for your wardrobe.',
    'Delivery Time': 'Orders are delivered within 3-5 business days across the country.'
  };

  // ✅ Agar product load nahi hua toh simple loading screen
  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <p className="text-black font-bold animate-pulse tracking-widest uppercase text-sm">Loading Product...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6 font-sans text-[#222]">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-0 bg-white shadow-sm overflow-hidden">

        {/* LEFT: IMAGES SECTION */}
        <div className="w-full md:w-[60%] flex gap-4 p-4 pr-0 bg-white">
          
          <div className="hidden md:flex flex-col gap-2 min-w-[65px]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-gray-200 cursor-pointer overflow-hidden rounded-sm hover:border-black transition-all">
                {/* ✅ Dynamic Thumbnail */}
                <img 
                  src={product.image} 
                  alt="thumbnail" 
                  className="w-full h-[80px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-start items-start overflow-hidden h-[500px] md:h-[600px]">
            {/* ✅ Dynamic Main Image */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>

        {/* RIGHT: DETAILS SECTION */}
        <div className="w-full md:w-[40%] flex flex-col p-6 md:p-8 pl-4 bg-white">
          <div className="mb-4">
            <h1 className="text-[16px] tracking-[3px] uppercase font-bold italic">
              Thorfin<span className='text-gray-400'>Store</span>
            </h1>
          </div>

          <hr className="border-gray-200 mb-6" />

          {/* ✅ Dynamic Name */}
          <h2 className="text-[22px] font-bold uppercase tracking-tight mb-2 leading-tight">
            {product.name}
          </h2>

          {/* ✅ Dynamic Price */}
          <p className="text-[18px] text-black mb-6 font-bold">
            {typeof product.price === 'number' ? `$${product.price}` : product.price}
          </p>

          <div className="space-y-2 mb-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[2px] text-gray-400 mb-3">Fabric Details</h3>
            <div className="grid grid-cols-1 gap-1 text-[13px] text-gray-700">
              <p><span className="font-bold">Shirt:</span> {product.shirt || 'Premium Lawn'}</p>
              <p><span className="font-bold">Trouser:</span> {product.trouser || 'Soft Cambric'}</p>
              <p><span className="font-bold">Dupatta:</span> {product.dupatta || 'Swiss Voil'}</p>
              <p className="font-bold italic mt-1">Color: <span className="font-normal not-italic text-gray-500">Selected Item</span></p>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <div className="flex border border-gray-300 items-center h-[40px] bg-white">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 hover:bg-gray-100 transition-colors">
                <Minus size={14} />
              </button>
              <span className="px-3 text-[14px] font-bold w-10 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 hover:bg-gray-100 transition-colors">
                <Plus size={14} />
              </button>
            </div>
            <button className="flex-1 border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Heart size={18} className="text-gray-600" />
            </button>
          </div>

          <div className="space-y-2 mb-8">
            <button className="w-full border border-black py-3 text-[11px] font-bold uppercase tracking-[2px] hover:bg-black hover:text-white transition-all duration-300">
              Add to Bag
            </button>
            <button className="w-full bg-black text-white py-3 text-[11px] font-bold uppercase tracking-[2px] hover:bg-[#333] transition-all duration-300">
              Buy It Now
            </button>
          </div>

          <div className="border-t border-gray-100">
            {Object.keys(accordionContent).map((item) => (
              <div key={item} className="border-b border-gray-100 py-3.5 cursor-pointer group" onClick={() => toggleAccordion(item)}>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-gray-500 group-hover:text-black transition-colors">{item}</span>
                  <Plus size={14} className={`text-gray-400 transition-transform duration-300 ${accordionOpen[item] ? 'rotate-45 text-black' : ''}`} />
                </div>
                {accordionOpen[item] && (
                  <p className="text-[12px] text-gray-600 mt-3 leading-relaxed">
                    {accordionContent[item]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickview;