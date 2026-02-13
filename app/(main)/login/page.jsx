'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { UserCircle2, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 1. Login Function
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/cart'); // Redirect to Customer_info
    } else {
      alert("Please fill in all fields");
    }
  };

  // 2. Guest Login Function
  const handleGuestLogin = () => {
    localStorage.setItem('isLoggedIn', 'guest');
    router.push('/cart'); // Redirect to Customer_info
  };

  // 3. Google Login Function
  const handleGoogleLogin = () => {
    localStorage.setItem('isLoggedIn', 'google');
    router.push('/cart'); // Redirect to Customer_info
  };

  return (
    <div className="min-h-[500px] w-full flex items-center justify-center bg-[#F6F6F6] relative overflow-hidden">
      {/* Background with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 blur-[3px]" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-[380px] bg-white rounded-[32px] p-8 shadow-2xl mx-4 flex flex-col items-center"
      >
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="absolute left-6 top-8 text-gray-400 hover:text-black transition-colors"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Logo Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-[1000] tracking-tighter text-black leading-none">
            THORFIN <span className="text-gray-300">STORE</span>
          </h1>
          <p className="text-[13px] font-bold text-gray-500 mt-2 tracking-wide uppercase">Member Login</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full space-y-3 mb-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-100 bg-gray-50/50 p-3.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-black focus:bg-white transition-all"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-100 bg-gray-50/50 p-3.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-black focus:bg-white transition-all"
            required
          />
          
          <button 
            type="submit"
            className="w-full bg-black text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-xl mt-2"
          >
            Sign In
          </button>
        </form>

        <div className="text-center">
          <p className="text-[11px] font-bold text-gray-400">
            New here? <span className="text-black underline cursor-pointer hover:text-zinc-600">Create Account</span>
          </p>
        </div>

        {/* Divider */}
        <div className="w-full flex items-center gap-3 my-7">
            <div className="h-[1px] bg-gray-100 flex-1"></div>
            <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em]">OR CONTINUE WITH</span>
            <div className="h-[1px] bg-gray-100 flex-1"></div>
        </div>

        {/* Social & Guest Buttons */}
        <div className="w-full space-y-2.5">
          <button 
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border border-gray-100 flex items-center justify-center gap-3 py-3 rounded-xl hover:bg-gray-50 transition-all active:scale-[0.98]"
          >
            <Image 
              src="https://www.svgrepo.com/show/355037/google.svg" 
              width={18} 
              height={18} 
              alt="Google"
            />
            <span className="font-bold text-[13px] text-zinc-800">Google Account</span>
          </button>

          <button 
            type="button"
            onClick={handleGuestLogin}
            className="w-full border border-gray-100 flex items-center justify-center gap-3 py-3 rounded-xl hover:bg-gray-50 transition-all active:scale-[0.98]"
          >
            <UserCircle2 size={20} className="text-gray-400" />
            <span className="font-bold text-[13px] text-zinc-800">Continue as Guest</span>
          </button>
        </div>

        <button className="mt-10 text-[10px] font-bold text-gray-300 uppercase tracking-widest hover:text-black transition-colors">
          Privacy Policy & Terms
        </button>
      </motion.div>
    </div>
  );
};

export default LoginPage;
