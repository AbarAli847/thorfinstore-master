'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const BottomNav = () => {
  return (
    // pt-16 ko pt-10 aur pb-10 ko pb-6 kiya height kam karne ke liye
    <footer className="bg-black text-white pt-10 pb-6"> 
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        
        {/* UPPER SECTION: Newsletter - Padding md:p-10 ko p-6 kiya */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#000] border border-white/10 rounded-[20px] p-6 md:p-8 mb-10 gap-6">
          
          <h2 className="text-xl md:text-2xl font-[1000] leading-tight max-w-[400px] uppercase tracking-tighter text-center lg:text-left">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          
          <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-0 bg-white rounded-full overflow-hidden p-1">
            <div className="relative flex-1 sm:w-[220px] md:w-[280px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full pl-10 pr-4 py-2 text-black text-xs outline-none bg-transparent"
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: '#333' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-black text-white font-bold py-2 px-6 rounded-full text-[10px] uppercase tracking-wider transition-all"
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        {/* MIDDLE SECTION: Links - mb-16 ko mb-10 kiya */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-[1000] mb-4 uppercase tracking-tighter">THORFINSTORE
</h3>
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

        {/* BOTTOM SECTION - pt-8 ko pt-6 kiya */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-[10px] md:text-xs">
            Shop.co © 2000-2026, All Rights Reserved
          </p>
          {/* <div className="flex gap-3 opacity-60 grayscale hover:grayscale-0 transition-all scale-75 md:scale-90">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="ApplePay" className="h-3" />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }) => (
  <div className="flex flex-col gap-3"> {/* gap-4 ko gap-3 kiya */}
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

// 'use client'
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

// const BottomNav = () => {
//   return (
//     <footer className="bg-black text-white pt-10 pb-6"> 
//       <div className="max-w-7xl mx-auto px-6 md:px-14">
        
//         {/* UPPER SECTION: Newsletter */}
//         <div className="flex flex-col lg:flex-row justify-between items-center bg-[#000] border border-white/10 rounded-[20px] p-5 md:p-8 mb-10 gap-6">
          
//           <h2 className="text-xl md:text-2xl font-[1000] leading-tight max-w-[400px] uppercase tracking-tighter text-center lg:text-left">
//             STAY UP TO DATE ABOUT OUR LATEST OFFERS
//           </h2>
          
//           {/* Mobile aur Laptop par aik line mein rakhne ke liye fixed layout */}
//           <div className="flex flex-row w-full lg:w-auto items-center bg-white rounded-full overflow-hidden p-1">
//             <div className="relative flex-1">
//               <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-black/40">
//                 {/* Fixed SVG: md:width ko className mein shift kiya */}
//                 <svg 
//                   width="14" 
//                   height="14" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   viewBox="0 0 24 24"
//                   className="md:w-4 md:h-4"
//                 >
//                   <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//                 </svg>
//               </span>
//               <input 
//                 type="email" 
//                 placeholder="Email address" 
//                 className="w-full pl-9 md:pl-12 pr-2 py-2 text-black text-[10px] md:text-xs outline-none bg-transparent"
//               />
//             </div>
            
//             <motion.button 
//               whileHover={{ scale: 1.02, backgroundColor: '#333' }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-black text-white font-bold py-2 px-4 md:px-8 rounded-full text-[9px] md:text-[10px] uppercase tracking-wider transition-all whitespace-nowrap"
//             >
//               Subscribe
//             </motion.button>
//           </div>
//         </div>

//         {/* MIDDLE SECTION: Links */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
//           <div className="col-span-2 md:col-span-1">
//             <h3 className="text-xl font-[1000] mb-4 uppercase tracking-tighter">THORFINSTORE</h3>
//             <p className="text-white/60 text-xs mb-4 leading-relaxed">
//               We have clothes that suit your style and which you're proud to wear.
//             </p>
//             <div className="flex gap-3">
//               <SocialIcon Icon={FaTiktok} />
//               <SocialIcon Icon={FaFacebook} />
//               <SocialIcon Icon={FaInstagram} />
//               <SocialIcon Icon={FaYoutube} />
//             </div>
//           </div>

//           <FooterLinks title="COMPANY" links={['About', 'Features', 'Works', 'Career']} />
//           <FooterLinks title="HELP" links={['Support', 'Delivery', 'Terms', 'Privacy']} />
//           <FooterLinks title="FAQ" links={['Account', 'Deliveries', 'Orders', 'Payments']} />
//           <FooterLinks title="RESOURCES" links={['eBooks', 'Tutorials', 'Blog', 'Youtube']} />
//         </div>

//         {/* BOTTOM SECTION */}
//         <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-white text-[10px] md:text-xs text-center md:text-left">
//             THORFINSTORE © 2000-2026, All Rights Reserved
//           </p>
          
//           <div className="flex gap-3 items-center">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Easypaisa_logo.png" alt="EasyPaisa" className="h-4 bg-white px-1 rounded-sm" />
//             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/JazzCash_logo.png/640px-JazzCash_logo.png" alt="JazzCash" className="h-4 bg-white px-1 rounded-sm" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const FooterLinks = ({ title, links }) => (
//   <div className="flex flex-col gap-3">
//     <h4 className="font-bold text-xs uppercase tracking-widest">{title}</h4>
//     {links.map((link) => (
//       <motion.a 
//         key={link}
//         whileHover={{ x: 5, color: '#fff' }}
//         className="text-white/60 text-[11px] cursor-pointer transition-colors"
//       >
//         {link}
//       </motion.a>
//     ))}
//   </div>
// );

// const SocialIcon = ({ Icon }) => (
//   <motion.div 
//     whileHover={{ y: -3, backgroundColor: '#fff', color: '#000' }}
//     className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center cursor-pointer transition-all"
//   >
//     <Icon size={12} />
//   </motion.div>
// );

// export default BottomNav;