'use client'
import React, { useState, useEffect } from 'react';
import { Plus, Minus, Heart, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

import Checkout from '../../checkout/page.jsx'; 

const Quickview = () => {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);  
  const [accordionOpen, setAccordionOpen] = useState({
    Description: false,
    Details: false,
    'Delivery Time': false
  });
  const [isImageOpen, setIsImageOpen] = useState(false);

  const accordionContent = {
    'Description': 'This premium quality outfit offers comfort and style, perfect for casual and semi-formal occasions.',
    'Details': 'High-quality fabric, machine washable, and long-lasting colors.',
    'Delivery Time': 'Orders are delivered within 3-5 business days across the country.'
  };

  useEffect(() => {
    const savedProduct = localStorage.getItem('selectedProduct');
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  }, []);

  const handleAuthAction = (actionType) => {
    if (actionType === 'buy') {
      router.push('/login');
    } else if (actionType === 'add') {
       
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // 2. Naya item set karo
      const cartProduct = {
        name: product.name,
        price: product.price,
        image: product.image,
        qty: quantity
      };

      // 3. Save to localStorage
      localStorage.setItem('cart', JSON.stringify([...existingCart, cartProduct]));

      
      setIsCartOpen(true);
    }
  };

  const toggleAccordion = (section) => {
    setAccordionOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <p className="text-black font-medium animate-pulse uppercase tracking-widest text-sm">
          Loading Product Details...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-6 font-sans text-[#222]">
      
      {/* Checkout Drawer: State pass kar di */}
      <Checkout isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      <div className="max-w-[1100px] w-full mx-auto flex flex-col md:flex-row gap-0 bg-white shadow-sm overflow-hidden rounded-sm">
        {/* LEFT: IMAGE SECTION */}
        <div className="w-full md:w-[50%] flex flex-col-reverse md:flex-row gap-3 p-4 md:p-5 bg-white relative">
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-100 overflow-hidden rounded-md hover:border-black min-w-[70px] md:min-w-[70px] transition-all">
                <img src={product.image} alt="thumb" className="w-full h-[70px] md:h-[80px] object-cover cursor-pointer" />
              </div>
            ))}
          </div>

          <div className="flex-1 overflow-hidden h-[350px] sm:h-[450px] md:h-[550px] rounded-lg relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-lg" />
            <button 
              onClick={() => setIsImageOpen(true)} 
              className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
            >
              <Eye size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="w-full md:w-[50%] flex flex-col p-6 md:p-8 md:pl-4 bg-white">
          <div className="mb-3">
            <h1 className="text-[14px] tracking-[3px] uppercase font-bold italic">
              Thorfin<span className='text-gray-400 font-bold'>Store</span>
            </h1>
          </div>
          <hr className="border-gray-200 mb-6" />

          <h2 className="text-[22px] md:text-[24px] font-medium uppercase mb-2 leading-tight tracking-tight">{product.name}</h2>
          <p className="text-[20px] text-black mb-6 font-medium">Rs. {product.price}</p>

          <div className="flex gap-2 mb-5">
            <div className="flex border border-black/10 items-center h-[45px] bg-gray-50">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4"><Minus size={14}/></button>
              <span className="px-2 font-medium w-10 text-center text-sm">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4"><Plus size={14}/></button>
            </div>
            <button className="flex-1 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all text-gray-400">
              <Heart size={18}/>
            </button>
          </div>

          <div className="space-y-2 mb-6">
            <button 
              onClick={() => handleAuthAction('add')}
              className="w-full bg-white border border-black text-black py-3.5 text-[11px] font-medium uppercase tracking-[2px] hover:bg-black hover:text-white transition-all duration-300"
            >
              Add to Bag
            </button>
            <button 
              onClick={() => handleAuthAction('buy')}
              className="w-full bg-black text-white py-3.5 text-[11px] font-medium uppercase tracking-[2px] hover:bg-gray-800 transition-all duration-300"
            >
              Buy It Now
            </button>
          </div>

          {/* Accordion */}
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

      {/* Fullscreen Image Modal */}
      {isImageOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4">
          <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain rounded-md" />
          <button onClick={() => setIsImageOpen(false)} className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300">&times;</button>
        </div>
      )}
    </div>
  );
};

export default Quickview;