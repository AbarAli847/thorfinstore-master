'use client'
import { ChevronRight, SlidersHorizontal } from 'lucide-react';
const categories = ['All', 'Clothes', 'Wallets', 'Watches', 'Bracelets'];

const Aside = ({ activeCategory, setActiveCategory }) => {

  return (
    <aside className="hidden md:block w-64 flex-shrink-0">
      <div className="border border-gray-100 rounded-[20px] p-6 sticky top-10 shadow-sm">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h3 className="font-bold text-xl text-black">Filters</h3>
          <SlidersHorizontal size={18} className="text-gray-400" />
        </div>

        <div className="space-y-4">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full flex justify-between items-center py-2.5 px-3 rounded-xl transition-all duration-200 ${
                activeCategory === cat ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className="font-semibold text-sm">{cat}</span>
              <ChevronRight size={14} className={activeCategory === cat ? "opacity-100" : "opacity-30"} />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Aside;