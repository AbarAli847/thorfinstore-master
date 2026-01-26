// app/category/[slug]/page.js
import React from 'react';
import { categoryData } from '@/utils/RawaData'; // Path check karlein apne folder ke mutabiq
import { Star } from 'lucide-react';

// Yeh function API fetch ko simulate kar raha hai
async function getProducts(slug) {
  // Real life mein yahan fetch("https://api...") hota
  const data = categoryData[slug.toLowerCase()] || [];
  return data;
}

export default async function CategoryPage({ params }) {
  // Server component mein params direct await hotay hain
  const { slug } = await params; 
  const products = await getProducts(slug);

  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-14">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <span className="text-gray-400 text-sm font-bold uppercase tracking-[4px]">Collection</span>
        <h1 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter text-black mt-2">
          {slug}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] bg-[#F0EEED] mb-5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button className="w-full bg-white text-black py-4 rounded-2xl text-sm font-black shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 uppercase">
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="font-black text-xl text-black uppercase tracking-tight truncate">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-black text-black" : "fill-gray-200 text-gray-200"} />
                      ))}
                    </div>
                    <span className="text-sm font-bold">{product.rating}/5</span>
                  </div>

                  <p className="text-2xl font-black text-black">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[50vh] flex flex-col items-center justify-center text-center border-4 border-dashed border-gray-50 rounded-[40px]">
            <h2 className="text-3xl font-black uppercase text-gray-200 tracking-tighter">Category Not Found</h2>
            <p className="text-gray-400 mt-2">Check the URL or return to shop.</p>
          </div>
        )}
      </div>
    </div>
  );
}