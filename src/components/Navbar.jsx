import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// FIX 1: Add { setView } inside the parentheses here
export default function Navbar({ setView }) { 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-[100] bg-transparent px-4 md:px-12 py-6 md:py-8 flex items-center justify-between">
      
      {/* LEFT: BRAND */}
      <h1 className="text-[#4A443F] text-sm sm:text-lg md:text-2xl font-extrabold tracking-tighter whitespace-nowrap z-[110] uppercase cursor-pointer" 
          onClick={() => setView('home')}> {/* Optional: Click logo to go home */}
        Quality & <span className="text-[#8C7355]">Governance</span>
      </h1>

      {/* MOBILE TOGGLE BUTTON */}
      <button 
        className="md:hidden z-[110] text-[#4A443F] p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* RIGHT: NAV (Desktop) */}
      <nav className="hidden md:flex items-center gap-10">
  
       <button 
        onClick={() => setView('resume')}
       className="text-label hover:text-[#8C7355] transition-all uppercase tracking-widest font-bold text-sm cursor-pointer hover:-translate-y-0.5"
       > 
        VIEW RESUME
       </button>
                    
        <a
        href="#contact"
       onClick={(e) => {
       e.preventDefault();
       setIsOpen(false); // Closes mobile menu if open
       document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
       }}
       style={{ 
    color: '#FDFBF7', 
    backgroundColor: 'rgba(142, 125, 98, 0.65)', 
    border: '1.5px solid rgba(244, 231, 218, 0.7)', 
    boxShadow: '0 0 20px rgba(142, 125, 98, 0.6), 0 0 40px rgba(244, 231, 218, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    textShadow: '0 1px 4px rgba(0,0,0,0.2)',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(142, 125, 98, 0.85)';
    e.currentTarget.style.boxShadow = '0 0 35px rgba(142, 125, 98, 0.9), 0 0 15px rgba(253, 251, 247, 0.5)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(142, 125, 98, 0.65)';
    e.currentTarget.style.boxShadow = '0 0 20px rgba(142, 125, 98, 0.6), 0 0 40px rgba(244, 231, 218, 0.2)';
     }}
     className="px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center font-bold text-sm tracking-widest uppercase hover:scale-105 active:scale-95 whitespace-nowrap"
     >
       WORK WITH ME
      </a>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div 
        className={`fixed inset-0 z-[105] transition-all duration-500 flex flex-col items-center justify-center gap-10 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-10'
        } md:hidden px-6`}
        style={{ 
          background: 'linear-gradient(135deg, #FFF0DB 30%, #E5DCCB 65%, #B8AD9E 100%)',
        }}
      >
        {/* FIX 3: Update mobile links as well */}
        <button
         onClick={() => { setView('resume'); setIsOpen(false); }}
        className="text-label hover:text-[#8C7355] transition-all uppercase tracking-widest font-bold text-sm cursor-pointer hover:-translate-y-0.5"
        >
        VIEW RESUME
       </button>
        
        <div className="w-full flex justify-center mt-4">
        <a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    setIsOpen(false); // Closes mobile menu if open
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
  style={{ 
    color: '#FDFBF7', 
    backgroundColor: 'rgba(142, 125, 98, 0.65)', 
    border: '1.5px solid rgba(244, 231, 218, 0.7)', 
    boxShadow: '0 0 20px rgba(142, 125, 98, 0.6), 0 0 40px rgba(244, 231, 218, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    textShadow: '0 1px 4px rgba(0,0,0,0.2)',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(142, 125, 98, 0.85)';
    e.currentTarget.style.boxShadow = '0 0 35px rgba(142, 125, 98, 0.9), 0 0 15px rgba(253, 251, 247, 0.5)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(142, 125, 98, 0.65)';
    e.currentTarget.style.boxShadow = '0 0 20px rgba(142, 125, 98, 0.6), 0 0 40px rgba(244, 231, 218, 0.2)';
  }}
  className="px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center font-bold text-sm tracking-widest uppercase hover:scale-105 active:scale-95 whitespace-nowrap"
>
  WORK WITH ME
</a>
        </div>
      </div>
    </header>
  );
}