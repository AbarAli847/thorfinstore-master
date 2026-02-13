'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// Scrolling Number Animation Logic
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0));
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

const Hero = () => {
  return (
    <div className="w-full bg-[#F2F0F1] overflow-hidden">
     
      <header className="max-w-full mx-auto flex flex-col-reverse md:flex-row items-start justify-between px-6 md:px-10 lg:px-42 pt-2">
        
       
        <section className="w-full md:w-1/2 flex flex-col z-10 py-10 md:pt-16 md:pb-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] leading-[0.95] md:text-[64px] md:leading-[1] font-[1000] mb-5 uppercase tracking-tighter text-black max-w-[500px]"
          >
            FIND <br />
            CLOTHES <br />
            THAT <br />
            MATCHES <br />
            YOUR STYLE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-black/60 text-xs md:text-sm mb-8 max-w-[400px] leading-relaxed"
          >
            Browse through our diverse range of meticulously crafted garments, 
            designed to bring out your individuality and cater to your sense of style.
          </motion.p>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-52 bg-black text-white px-8 py-4 rounded-full font-bold mb-10 hover:bg-black/80 transition-all shadow-lg uppercase text-xs tracking-widest"
          >
            Shop Now
          </motion.button>

          {/* NUMBERS SECTION */}
          <div className="flex flex-nowrap items-center justify-between md:justify-start gap-4 md:gap-10">
            <div className="flex flex-col">
              <p className="text-2xl md:text-3xl font-bold">
                <AnimatedCounter value={200} />+
              </p>
              <p className="text-[9px] md:text-[10px] text-black/40 uppercase tracking-tight">Brands</p>
            </div>
            <div className="w-[1px] h-8 bg-black/10" />
            <div className="flex flex-col">
              <p className="text-2xl md:text-3xl font-bold">
                <AnimatedCounter value={2000} />+
              </p>
              <p className="text-[9px] md:text-[10px] text-black/40 uppercase tracking-tight">Products</p>
            </div>
            <div className="w-[1px] h-8 bg-black/10" />
            <div className="flex flex-col">
              <p className="text-2xl md:text-3xl font-bold">
                <AnimatedCounter value={30000} />+
              </p>
              <p className="text-[9px] md:text-[10px] text-black/40 uppercase tracking-tight">Customers</p>
            </div>
          </div>
        </section>

        {/* RIGHT: Image - Starting exactly from top edge */}
        <section className="w-full md:w-1/2 relative flex justify-end items-start pt-0">
          <div className="relative inline-block pt-0">
            {/* Image max-h set ki hai taake section control mein rahe */}
            <img 
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop" 
              alt="Fashion Style" 
              className="h-auto md:max-h-[700px] w-full object-contain align-top"
            />

            {/* Top Star */}
            <motion.img
              src="https://www.svgrepo.com/show/513511/star.svg"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute right-4 top-10 w-12 md:w-20 brightness-0"
            />

            {/* Side Star */}
            <motion.img
              src="https://www.svgrepo.com/show/513511/star.svg"
              animate={{ rotate: -360, scale: [1, 1.3, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute left-0 md:-left-10 top-[35%] w-8 md:w-12 brightness-0 opacity-40"
            />
          </div>
        </section>

      </header>
    </div>
  );
};

export default Hero;