'use client'  
import React, { useState, useEffect } from 'react';
import { categoryData } from '@/utils/RawaData';
import { Star, ShoppingBasket } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CategoryPage({ params }) {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [slug, setSlug] = useState('');

  //  Server params ko unwrapping aur data fetching
  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
      const data = categoryData[resolvedParams.slug.toLowerCase()] || [];
      setProducts(data);
    };
    fetchParams();
  }, [params]);

  //  Same logic: Data save karo aur redirect karo
  const handleProductClick = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    router.push('/product/id'); 
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-14">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-12">
        <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
          Collection
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-2 capitalize">
          {slug}
        </h1>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}  
                className="group cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative aspect-[3/4] overflow-hidden  bg-[#F0EEED] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* MOBILE BASKET */}
                  <button className="absolute bottom-3 right-3 lg:hidden bg-black text-white p-2.5 rounded-full shadow-md">
                    <ShoppingBasket size={18} />
                  </button>

                  {/* QUICK VIEW */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="hidden lg:block w-full bg-white text-black py-3 rounded-xl text-sm font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                      Quick View
                    </div>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="space-y-1">
                  <h3 className="font-bold text-lg md:text-xl text-black truncate">
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
                      {product.rating || 4}/5
                    </span>
                  </div>

                  <p className="text-xl md:text-2xl font-bold text-black">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[50vh] flex items-center justify-center">
            <p className="text-black/30 text-lg font-semibold uppercase tracking-widest">
              Loading Products...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}