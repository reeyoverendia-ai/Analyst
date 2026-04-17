import React from 'react';

export default function Videos() {
  return (
    <section id="videos" className="py-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-label mb-2">Technical Evidence</h2>
          <h3 className="text-4xl font-extrabold text-[#4A443F]">Postman & API Testing Demos</h3>
        </div>

        {/* 3-CONTAINER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div 
  key={item} 
  className="glass-card p-4 flex flex-col h-full transition-all duration-300 
             hover:-translate-y-2 hover:shadow-2xl hover:bg-white/10 
             active:scale-95 active:bg-white/20"
>             
              {/* VIDEO BOX */}
              <div className="relative w-full aspect-video bg-[#4A443F]/20 rounded-2xl overflow-hidden shadow-inner border border-[#8E7D62]/20">
                <video 
                 controls 
                 playsInline
                 className="w-full h-full object-contain bg-black/20"
                    poster={
                    item === 1 ? "/postman-preview.jpg" : 
                    item === 2 ? "/jira-preview.jpg" : 
                    "/negative-test-preview.jpg"
                  }
                >
                  <source 
                    src={
                      item === 1 ? "/postman test 1.mp4" : 
                      item === 2 ? "/Defect raised via Jira.mp4" : 
                      "/postman negative test.mp4"
                    } 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6 px-2">
                <h4 className="text-[#4A443F] font-bold text-lg mb-2 uppercase tracking-tight">
                  {item === 1 && "REST API Functional Testing"}
                  {item === 2 && "Defect Documentation & Jira"}
                  {item === 3 && "Negative Test Validation"}
                </h4>
                <p className="text-[#635D59] text-sm leading-relaxed">
                  {item === 1 && "Demonstrating proficiency in Postman: Validating Status Codes (200 OK), response payloads, and basic API test scripts."}
                  {item === 2 && "Walkthrough of documenting technical anomalies in Jira, ensuring clear steps to reproduce for the development team."}
                  {item === 3 && "Demonstrating API error handling by simulating invalid payloads and verifying correct system error codes (e.g., 400 or 401)."}
                </p>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
}