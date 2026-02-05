'use client'
import React, { useState, useEffect } from 'react';
import { Plus, Minus, Heart } from 'lucide-react';

const Quickview = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [accordionOpen, setAccordionOpen] = useState({
    Description: false,
    Details: false,
    'Delivery Time': false
  });

  useEffect(() => {
    const savedProduct = localStorage.getItem('selectedProduct');
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  }, []);

  const toggleAccordion = (section) => {
    setAccordionOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const accordionContent = {
    'Description': 'This premium quality outfit offers comfort and style, perfect for casual and semi-formal occasions.',
    'Details': 'High-quality fabric, machine washable, and long-lasting colors.',
    'Delivery Time': 'Orders are delivered within 3-5 business days across the country.'
  };

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <p className="text-black font-medium animate-pulse uppercase tracking-widest text-sm">Loading Product Details...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-6 font-sans text-[#222]">
      {/* Container width and max-height logic */}
      <div className="max-w-[1100px] w-full mx-auto flex flex-col md:flex-row gap-0 bg-white shadow-sm overflow-hidden rounded-sm">

        {/* LEFT: IMAGE SECTION (Compact Height) */}
        <div className="w-full md:w-[50%] flex flex-col-reverse md:flex-row gap-3 p-4 md:p-5 bg-white">
          
          {/* Thumbnails - Optimized size */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-100 overflow-hidden rounded-md hover:border-black min-w-[70px] md:min-w-[70px] transition-all">
                <img src={product.image} alt="thumb" className="w-full h-[70px] md:h-[80px] object-cover cursor-pointer" />
              </div>
            ))}
          </div>

          {/* Main Image - Height Reduced to 550px */}
          <div className="flex-1 overflow-hidden h-[350px] sm:h-[450px] md:h-[550px] rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        {/* RIGHT: DETAILS SECTION */}
        <div className="w-full md:w-[50%] flex flex-col p-6 md:p-8 md:pl-4 bg-white">
          <div className="mb-3">
            <h1 className="text-[14px] tracking-[3px] uppercase font-medium italic">Thorfin<span className='text-gray-400'>Store</span></h1>
          </div>
          <hr className="border-gray-200 mb-6" />

          {/* Title & Price - Clean & Medium Font */}
          <h2 className="text-[22px] md:text-[24px] font-medium uppercase mb-2 leading-tight tracking-tight">{product.name}</h2>
          <p className="text-[20px] text-black mb-6 font-medium">
            Rs. ${product.price}
          </p>

          {/* Product Info */}
          <div className="space-y-2 mb-6 text-[13px]  border-black/10 pl-4">
            <p><span className="text-gray-400 uppercase text-[15px]  block mb-1">Fabric</span> Premium Cotton</p>
            <p><span className="text-gray-400 uppercase text-[15px]   block mb-1">Fit</span> Regular Style</p>
          </div>

          {/* Quantity & Heart */}
          <div className="flex gap-2 mb-5">
            <div className="flex border border-black/10 items-center h-[45px] bg-gray-50">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 hover:bg-gray-200 transition-colors"><Minus size={14}/></button>
              <span className="px-2 font-medium w-10 text-center text-sm">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 hover:bg-gray-200 transition-colors"><Plus size={14}/></button>
            </div>
            <button className="flex-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all text-gray-400">
               <Heart size={18}/>
            </button>
          </div>

          {/* Buttons - More Compact */}
          <div className="space-y-2 mb-6">
            <button className="w-full bg-white border border-black text-black py-3.5 text-[11px] font-medium uppercase tracking-[2px] hover:bg-black hover:text-white transition-all duration-300">
              Add to Bag
            </button>
            <button className="w-full bg-black text-white py-3.5 text-[11px] font-medium uppercase tracking-[2px] hover:bg-gray-800 transition-all duration-300">
              Buy It Now
            </button>
          </div>

          {/* Accordion - Minimalist */}
          <div className="border-t border-gray-100 pt-2">
            {Object.keys(accordionContent).map((item) => (
              <div key={item} className="border-b border-gray-100 py-3 cursor-pointer group" onClick={() => toggleAccordion(item)}>
                <div className="flex justify-between items-center text-[10px] font-medium uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                  <span>{item}</span>
                  <Plus size={12} className={`transition-transform duration-300 ${accordionOpen[item] ? 'rotate-45 text-black' : ''}`} />
                </div>
                {accordionOpen[item] && (
                   <p className="text-[12px] text-gray-500 mt-3 leading-relaxed font-light">{accordionContent[item]}</p>
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