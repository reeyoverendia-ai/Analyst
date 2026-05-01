import React from 'react';
import { MessageCircle, Mail, MapPin, Download, ArrowLeft, Globe } from 'lucide-react';

const Resume = ({ setView }) => {
  return (
/* Added 'print-container' class for the print logic */
    <div className="min-h-screen pt-12 pb-20 px-6 md:px-16 bg-[#FFFBF7] print:p-0 print:bg-white">
      
      {/* ACTIONS BAR - Hide this when printing */}
      <div className="max-w-4xl mx-auto mb-12 flex justify-between items-center print:hidden">
        {/* LEFT SIDE: BACK BUTTON */}
        <button 
          onClick={() => setView('home')}
          className="group flex items-center gap-3 text-[#8C7355] font-bold text-sm tracking-widest uppercase hover:text-[#4A443F] transition-all"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Portfolio
        </button>

        {/* RIGHT SIDE: DOWNLOAD BUTTON (High Contrast) */}
        <button 
          onClick={() => window.print()} 
          className="glass-work-with-me !py-2.5 !px-6 !text-[11px] !text-[#4A443F] !bg-white/40 flex items-center gap-2 border border-[#8C7355]/40 hover:!bg-[#8C7355]/20 shadow-md transition-all"
        >
          <Download size={16} className="text-[#8C7355]" /> 
          <span className="font-bold">DOWNLOAD PDF</span>
        </button>
      </div>

      {/* MAIN RESUME CARD */}
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-16 shadow-2xl border border-[#8C7355]/10 print:shadow-none print:border-none print:p-0">
        
        <header className="border-b-2 border-[#8C7355]/30 pb-8 mb-10">
          <h1 className="text-[#4A443F] text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-4">
            NYREE JO <span className="text-[#8C7355]">VERENDIA</span>
          </h1>
          <h2 className="text-[#8C7355] text-lg md:text-xl font-bold tracking-[0.15em] uppercase mb-6">
            SAP QA Lead | QA Analyst
          </h2>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[#4A443F]/80 font-medium text-xs md:text-sm">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-[#8C7355]" /> Brgy. 1 Calamba Laguna
            </span>
            <a href="mailto:reeverendia@duck.com" className="flex items-center gap-2 hover:text-[#8C7355] transition-colors">
              <Mail size={16} className="text-[#8C7355]" /> reeverendia@duck.com
            </a>
            
            {/* WHATSAPP LINE */}
            <a
            href="https://wa.me/639000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#8C7355] transition-colors"
             >
             <MessageCircle size={16} className="text-[#8C7355]" />
             +63 919 584 3301
             </a>
             
             {/* GitHub - The New Addition */}
            <a
            href="https://github.com/reeyoverendia-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#8C7355] transition-colors"
           >
           <Globe size={16} className="text-[#8C7355]" />
            <span>https://github.com/reeyoverendia-ai</span>
               </a>
            </div>
          </header>
     
        <section className="mb-10">
        <h2 className="text-[#8C7355] font-extrabold tracking-widest uppercase mb-4 text-sm">Summary</h2>
        <p className="text-[#4A443F] leading-relaxed opacity-90">
          Senior QA Test Analyst with 14 years of experience in SAP Financials (FS-CD). Expert in STLC and System Integration Testing (SIT), validating data pipelines and complex conditional logic. Currently leveraging advanced-level quality principles to ensure seamless API integration and cross-platform compatibility across modern web architectures.
        </p>
      </section>

      {/* TECHNICAL SKILLS & CERTIFICATION */}
      <section className="mb-10">
      <h2 className="text-[#8C7355] font-extrabold tracking-widest uppercase mb-4 text-sm">
       Technical Skills & Certification
      </h2>
      <ul className="space-y-2 list-disc list-outside ml-5 text-[#4A443F] opacity-90">
      <li>
      <strong className="font-bold">Testing & Tools:</strong> STLC / Manual Scripting, Regression / SIT / SAP S/4 HANA / OpenText AQM / SOLMAN
      </li>
       <li>
      <strong className="font-bold">Domain & Development:</strong> Workflow & Logic Testing, Email & Document Templates, Data Mapping & Integrity, Vite / React / Tailwind CSS
      </li>
      <li>
      <strong className="font-bold">Certification:</strong> ISTQB - Certified Tester, CTAL - Test Analyst
    </li>
  </ul>
</section>
        {/* MAKE SURE EXPERIENCE IS INSIDE THIS CARD DIV */}
        <section className="mb-10">
        <h2 className="text-[#8C7355] font-extrabold tracking-widest uppercase mb-4 text-sm">Professional Experience</h2>
        <div className="flex justify-between items-baseline mb-4 border-b border-[#4A443F]/10 pb-1">
        <h3 className="text-xl font-bold text-[#4A443F]">Accenture / HP</h3>
       <span className="text-[#4A443F] font-bold opacity-80 text-sm">2011 — 2025</span>
      </div>
        <ul className="space-y-4 list-disc list-outside ml-5 text-[#4A443F] opacity-90">
        <li><strong className="font-bold">Workflow & Logic Testing:</strong> Authored comprehensive test scripts for complex financial triggers and automated correspondence, ensuring 100% accuracy in conditional logic and system-generated templates.</li>
        <li><strong className="font-bold">Defect Management:</strong> Resolved 5–10 high-priority "showstopper" defects per cycle related to system connectivity and data integrity, collaborating with cross-functional teams to streamline project health.</li>
        <li><strong className="font-bold">Data Integrity:</strong> Led end-to-end SIT phases, ensuring seamless data flow across disparate modules and maintaining strict traceability via HP ALM.</li>
        <li><strong className="font-bold">Integration & API Logic:</strong> Orchestrated validation for 16 system migrations to S/4 HANA. Verified "data handshakes" and payload accuracy between Legacy systems and SAP, applying the same principles used in API-driven integrations.</li>
        <li><strong className="font-bold">System Validation:</strong> Managed end-to-end validation of DMEE-generated XML payment files, ensuring strict adherence to banking schemas. Coordinated directly with bank technical teams to verify successful transmission, schema compliance, and data reconciliation between SAP backend records and the bank's receiving system.</li>
        <li><strong className="font-bold">Cross-Functional Coordination:</strong> Partnered with Business Analysts and Developers to resolve integration bottlenecks and optimize daily status reporting.</li>
        </ul>
       </section>
        {/* PROJECTS & PROFESSIONAL DEVELOPMENT */}
        <section>
          <h2 className="text-[#8C7355] font-extrabold tracking-widest uppercase mb-6 text-sm flex items-center gap-2">
            Projects & Professional Development
          </h2>
          <ul className="space-y-6">
            <li className="text-[#4A443F] opacity-90 leading-relaxed">
              <strong className="font-bold text-[#4A443F]">Personal Portfolio Website:</strong> Built a responsive site using Vite, React, and Tailwind CSS. Performed manual cross-browser testing (Chrome, Safari, Edge) and mobile responsiveness audits to ensure UI/UX parity.
            </li>
            
            <li className="text-[#4A443F] opacity-90 leading-relaxed">
              <strong className="font-bold text-[#4A443F]">API Testing Upskilling:</strong> Completed self-directed training in Postman to verify web-based data exchanges, mapping SAP integration logic to modern RESTful API standards.
            </li>

            {/* ADDED E-COMMERCE OPTIMIZATION */}
            <li className="text-[#4A443F] opacity-90 leading-relaxed">
              <strong className="font-bold text-[#4A443F]">E-commerce Optimization:</strong> Conducted meticulous product research and listing audits, focusing on formatting consistency and data-driven logic for Amazon FBA.
            </li>
          </ul>
        </section>
      </div>
    
{/* STYLES TO FIX PRINTING CUT-OFFS */}
<style dangerouslySetInnerHTML={{ __html: `
  @media print {
    @page { 
      size: auto; 
      margin: 15mm 20mm; /* Standard professional margins */
    }
    
    body { 
      background: white !important; 
      overflow: visible !important;
    }

    /* THE FIX: Allow the card to split across pages */
    .glass-card { 
      background: white !important; 
      backdrop-filter: none !important;
      height: auto !important;
      min-height: 100% !important;
      overflow: visible !important;
      box-shadow: none !important;
      border: none !important;
      display: block !important; /* Forces standard document flow */
    }

    /* Keep sections from splitting awkwardly in the middle of a sentence */
    section {
      page-break-inside: avoid;
      break-inside: avoid;
      margin-bottom: 2rem !important;
    }

    h1, h2, h3 {
      page-break-after: avoid;
    }
  }
` }} />
    </div>
  );
};

export default Resume;
