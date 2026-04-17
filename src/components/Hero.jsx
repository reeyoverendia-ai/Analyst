import React from 'react';
import heroImage from '../assets/corporate-bg.jpg'; 

const Hero = () => {
  return (
    /* We use 'relative' and 'z-10' to keep Hero on its own layer */
    <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center bg-transparent pt-32 md:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* LEFT CONTENT */}
          <div className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 flex flex-col justify-center shadow-xl">
            <h1 className="text-[#4A443F] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.2] tracking-tighter">
              QA Test Lead <br className="hidden md:block"/> & Analyst
            </h1>
            <p className="text-[#635D59] text-base md:text-lg leading-relaxed opacity-90 mb-10">
              Optimizing financial landscapes with 14 years of expertise in SAP FS-CD.
            </p>
            <div className="flex justify-center md:justify-start">
<a 
  href="#skills"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="px-10 py-4 rounded-full font-extrabold tracking-widest uppercase text-[#FDFBF7] transition-all hover:scale-105 hover:bg-white/20
  active:scale-95 active:bg-white/30
    /* Base State */
    bg-white/10 
    border border-white/30
    shadow-[0_0_20px_rgba(253,251,247,0.2)]
    
    /* Desktop Hover (Mouse) */
    hover:bg-white/20 
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(253,251,247,0.6)]
    hover:border-white/50

    /* MOBILE TOUCH (Finger Tap) */
    active:bg-white/30
    active:scale-95 
    active:shadow-[0_0_50px_rgba(253,251,247,0.8)]
    active:border-white/70"
  
  style={{
    fontSize: '15px',
    textShadow: '0 0 10px rgba(253, 251, 247, 0.3)'
  }}
>
  View Technical Profile
</a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-full min-h-[400px] relative">
            <img 
              src={heroImage} 
              alt="Corporate Environment" 
              className="w-full h-full object-cover rounded-[3rem] shadow-xl saturate-[90%]"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-[#E5DACE] rounded-[3rem] -z-10 flex items-center justify-center text-[#4A443F]/20 font-bold italic">
               Professional Profile Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;