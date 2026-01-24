import React from 'react';
import { Truck, ShieldCheck, RotateCcw, CreditCard } from 'lucide-react';

const TrustBadgePremium = () => {
  const data = [
    {
      icon: <Truck size={24} strokeWidth={2.5} />,
      title: "FAST DELIVERY",
      desc: "Worldwide shipping"
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={2.5} />,
      title: "SECURE PAYMENTS",
      desc: "SSL encrypted"
    },
    {
      icon: <RotateCcw size={24} strokeWidth={2.5} />,
      title: "EASY RETURNS",
      desc: "30-day guarantee"
    },
    {
      icon: <CreditCard size={24} strokeWidth={2.5} />,
      title: "FLEXIBLE PAY",
      desc: "All major cards"
    }
  ];

  return (
    <section className="w-full bg-[#32363d] py-12 px-4 rounded-xl shadow-2xl">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badges Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              {/* Image jaisa Orange-Red Gradient Circle */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff8b42] via-[#ff5b3e] to-[#ff3d3d] text-white shadow-[0_10px_20px_rgba(255,61,61,0.3)] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="mt-5 text-white text-[13px] font-black tracking-widest">
                {item.title}
              </h3>
              <p className="mt-1 text-gray-400 text-[11px] font-medium tracking-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Separator line like in image */}
        <div className="border-t border-gray-600/50 mb-8 w-full"></div>

        {/* Partners Section */}
        <div className="flex flex-col gap-6">
          <h4 className="text-gray-500 text-[10px] font-bold tracking-[0.25em] uppercase">
            Trusted Payment Partners
          </h4>
          
          
        </div>
      </div>
    </section>
  );
};

export default TrustBadgePremium;