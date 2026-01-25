import React from 'react';
import { Truck, ShieldCheck, RotateCcw, CreditCard } from 'lucide-react';

const TrustBadgeFullWidth = () => {
  const data = [
    {
      icon: <Truck size={16} strokeWidth={2.5} />, 
      title: "FAST DELIVERY",
      desc: "Worldwide"
    },
    {
      icon: <ShieldCheck size={16} strokeWidth={2.5} />,
      title: "SECURE PAY",
      desc: "SSL encrypted"
    },
    {
      icon: <RotateCcw size={16} strokeWidth={2.5} />,
      title: "EASY RETURNS",
      desc: "30-day guarantee"
    },
    {
      icon: <CreditCard size={16} strokeWidth={2.5} />,
      title: "FLEXIBLE PAY",
      desc: "All cards"
    }
  ];

  return (
    // width full (w-full) aur height sleek (py-4)
    <section className="w-full bg-[#32363d] py-4 px-8  shadow-lg">
      <div className="w-full">
        
        {/* Badges Row - Full width grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              {/* Compact Circle */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff8b42] via-[#ff5b3e] to-[#ff3d3d] text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="mt-2 text-white text-[10px] font-bold tracking-wider text-center">
                {item.title}
              </h3>
              <p className="mt-0.5 text-gray-400 text-[9px] font-medium opacity-80 text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Separator line */}
        <div className="border-t border-gray-600/20 mb-3 w-full"></div>

        {/* Partners Section - Compact and Full Width */}
        <div className="flex items-center justify-between px-2">
          <h4 className="text-gray-500 text-[8px] font-bold tracking-[0.15em] uppercase">
            Payment Partners
          </h4>
          
        </div>
      </div>
    </section>
  );
};

export default TrustBadgeFullWidth;