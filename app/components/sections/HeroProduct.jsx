import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CasualSelection = () => {
  return (
    <section className="max-w-full mx-auto px-6 md:px-14 py-10">
      {/* Container height set to 500px for a balanced look */}
      <div className="relative w-full bg-[#F0F0F0] rounded-[20px] overflow-hidden flex flex-col md:flex-row items-stretch md:h-[500px]">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-[350px] md:h-full">
          <img 
            src="https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=1000" 
            alt="Casual Selection"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col items-start justify-center">
          <span className="text-black/40 uppercase tracking-[4px] text-[13px] mb-4 font-semibold">
            Denim Collection
          </span>
          
          <h2 className="text-[44px] md:text-[64px] font-[1000] leading-[1] text-black uppercase mb-5 tracking-tighter">
            The Casual <br /> Selection.
          </h2>

          <p className="text-black/50 text-base md:text-lg max-w-[400px] mb-8 leading-relaxed">
            Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, 
            tincidunt ut vitae elit risus. Tempor egestas condimentum.
          </p>

          <Link href={'/newarrivals'} className="flex items-center gap-2 text-black font-bold text-lg border-b-2 border-black pb-1 hover:gap-4 transition-all duration-300 group">
            Shop Collection 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasualSelection;