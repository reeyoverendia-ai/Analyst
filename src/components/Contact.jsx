import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  // 1. FIXED: Added missing state and submit logic
const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xbdaaqlv", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  } catch (error) {
    console.error("Submission error", error);
  }
};  
  return (
    <section id="contact" className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-16 lg:p-24 gap-12 lg:gap-24 relative z-10">
      
      {/* LEFT NARRATIVE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="max-w-xl">
          <span className="text-[#8C7355] font-bold tracking-widest uppercase text-sm mb-4 block">Inquiries</span>
          <h2 className="text-[#4A443F] text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tighter">
            Let's build a <br className="hidden lg:block"/> partnership.
          </h2>
          <p className="text-[#635D59] text-lg md:text-xl leading-relaxed opacity-90">
            Ensuring your systems perform exactly as intended. Reach out to discuss strategic defect coordination and end-to-end quality governance for your project.
          </p>
        </div>
      </div>

{/* RIGHT PANEL - Unified Glass Form */}
<div className="w-full md:w-1/2 flex items-center justify-center p-4">
  
  {/* THIS IS THE MISSING CONTAINER */}
  <div className="w-full max-w-lg glass-soft rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/10">
    
    {submitted ? (
      /* 1. THE THANK YOU CARD */
      <div className="h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-[#F4E7DA] flex items-center justify-center shadow-[0_0_30px_rgba(244,231,218,0.5)]">
          <CheckCircle className="w-10 h-10 text-[#4A443F]" />
        </div>
        <h3 className="text-3xl font-bold text-[#4A443F]">Message Sent!</h3>
        <p className="text-[#635D59] max-w-xs mx-auto leading-relaxed">
          Thank you, Nyree will get back to you with a structured plan shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-sm font-bold text-[#8E7D62] underline underline-offset-4 hover:text-[#4A443F] transition-colors"
        >
          Send another message
        </button>
      </div>
    ) : (
      /* 2. THE FORM */
      <form
  onSubmit={handleSubmit}
  className="space-y-6 flex flex-col"
>
        <h2 className="text-[#4A443F] text-3xl font-extrabold tracking-tight mb-4">
          Direct Collaboration
        </h2>

        {/* NAME FIELD */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-[#8C7355] ml-4">Name</label>
          <div className="w-full rounded-[2rem] px-6 py-4 flex items-center gap-4 transition-all duration-300 bg-white/20 border border-white/30 hover:shadow-[0_0_40px_rgba(244,231,218,0.7)] focus-within:bg-white/40">
            <User className="w-5 h-5 text-[#4A443F]/60" />
            <input type="text" name="name" placeholder="Your name" required className="w-full bg-transparent outline-none text-[#4A443F] text-base" />
          </div>
        </div>

        {/* EMAIL FIELD */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-[#8C7355] ml-4">Email</label>
          <div className="w-full rounded-[2rem] px-6 py-4 flex items-center gap-4 transition-all duration-300 bg-white/20 border border-white/30 hover:shadow-[0_0_40px_rgba(244,231,218,0.7)] focus-within:bg-white/40">
            <Mail className="w-5 h-5 text-[#4A443F]/60" />
            <input type="email" name="email" placeholder="you@example.com" required className="w-full bg-transparent outline-none text-[#4A443F] text-base" />
          </div>
        </div>

        {/* MESSAGE FIELD */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-[#8C7355] ml-4">Message</label>
          <div className="w-full rounded-[2.5rem] px-6 py-5 flex items-start gap-4 transition-all duration-300 bg-white/20 border border-white/30 hover:shadow-[0_0_40px_rgba(244,231,218,0.7)] focus-within:bg-white/40">
            <MessageSquare className="w-5 h-5 text-[#4A443F]/60 mt-1" />
            <textarea 
              name="message"
              placeholder="Tell me about your project or system challenges..." 
              rows="4" 
              required 
              className="w-full bg-transparent outline-none resize-none text-[#4A443F] text-base"
            ></textarea>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full rounded-full py-5 inline-flex justify-center items-center gap-3 text-lg font-bold tracking-widest uppercase text-[#4A443F] bg-[#F4E7DA] transition-all duration-300 shadow-[0_10px_30px_rgba(140,115,85,0.1)] hover:shadow-[0_0_50px_rgba(244,231,218,0.8)] hover:scale-[1.02] active:scale-95"
          >
            Send Message
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
      )}
  </div>
</div>
    </section>
  );
};

export default Contact;