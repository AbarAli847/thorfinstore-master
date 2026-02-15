'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6"> 
      <div className="max-w-full mx-auto px-6 md:px-14">

        {/* UPPER SECTION: Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#000] border border-white/10 rounded-[20px] p-6 md:p-8 mb-10 gap-4">
          
          <h2 className="text-xl md:text-2xl font-[1000] leading-tight max-w-[400px] uppercase tracking-tighter text-center lg:text-left">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          
          <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-2 sm:gap-0 bg-white rounded-full overflow-hidden p-1">
            
            {/* Email Input */}
            <div className="flex-1 min-w-0 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </span>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full pl-10 pr-4 py-2 text-black text-xs outline-none bg-transparent rounded-l-full"
              />
            </div>

            {/* Subscribe Button */}
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: '#333' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-black text-white font-bold py-2 px-6 rounded-full text-[10px] uppercase tracking-wider transition-all"
            >
              Subscribe
            </motion.button>

          </div>
        </div>

        {/* MIDDLE SECTION: Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-[1000] mb-4 uppercase tracking-tighter">THORFINSTORE</h3>
            <p className="text-white/60 text-xs mb-4 leading-relaxed">
              We have clothes that suit your style and which you're proud to wear.
            </p>
            <div className="flex gap-3">
              <SocialIcon Icon={FaTiktok} />
              <SocialIcon Icon={FaFacebook} />
              <SocialIcon Icon={FaInstagram} />
              <SocialIcon Icon={FaYoutube} />
            </div>
          </div>

          <FooterLinks title="COMPANY" links={['About', 'Features', 'Works', 'Career']} />
          <FooterLinks title="HELP" links={['Support', 'Delivery', 'Terms', 'Privacy']} />
          <FooterLinks title="FAQ" links={['Account', 'Deliveries', 'Orders', 'Payments']} />
          <FooterLinks title="RESOURCES" links={['eBooks', 'Tutorials', 'Blog', 'Youtube']} />
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-white text-[10px] md:text-xs">
            Thorfin © 2000-2026, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }) => (
  <div className="flex flex-col gap-3">
    <h4 className="font-bold text-xs uppercase tracking-widest">{title}</h4>
    {links.map((link) => (
      <motion.a 
        key={link}
        whileHover={{ x: 5, color: '#fff' }}
        className="text-white/60 text-[11px] cursor-pointer transition-colors"
      >
        {link}
      </motion.a>
    ))}
  </div>
);

const SocialIcon = ({ Icon }) => (
  <motion.div 
    whileHover={{ y: -3, backgroundColor: '#fff', color: '#000' }}
    className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center cursor-pointer transition-all"
  >
    <Icon size={12} />
  </motion.div>
);

export default BottomNav;
