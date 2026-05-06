import React from 'react';

export default function Videos() {
  return (
    <section id="videos" className="py-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-label mb-2">Technical Evidence</h2>
          <h3 className="text-4xl font-extrabold text-[#4A443F]">Automation & Web Testing Demos</h3>
        </div>

        {/* 4-CONTAINER GRID (Updated to 2 columns for a 2x2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
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
                    item === 3 ? "/negative-test-preview.jpg" :
                    "/playwright-preview.jpg" // Add your Playwright thumbnail here
                  }
                >
                  <source 
                    src={
                      item === 1 ? "/postman test 1.mp4" : 
                      item === 2 ? "/Defect raised via Jira.mp4" : 
                      item === 3 ? "/postman negative test.mp4" :
                      "/playwright-demo.mp4" // Add your Playwright video file name here
                    } 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6 px-2">
                <h4 className="text-[#4A443F] font-bold text-lg mb-2 uppercase tracking-tight">
                  {item === 1 && "Postman: Web Functional Testing"}
                  {item === 2 && "Postman: Defect Documentation & Jira"}
                  {item === 3 && "Postman: Web Error & Negative Validation"}
                  {item === 4 && "Playwright Web Functional Testing"}
                </h4>
                <p className="text-[#635D59] text-sm leading-relaxed">
                  {item === 1 && "Using Postman to perform functional validations on web-based services, ensuring UI-to-backend data integrity and feature reliability."}
                  {item === 2 && "Walkthrough of documenting technical anomalies in Jira, ensuring clear steps to reproduce for the development team."}
                  {item === 3 && "Demonstrating web-layer error handling by simulating invalid user inputs and verifying that the system provides appropriate error feedback."}
                  {item === 4 && "Automating web-based functional tests using Playwright: Validating UI elements, user interactions, and cross-browser consistency."}
                </p>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
}
