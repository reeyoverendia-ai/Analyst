import React from 'react';
import skillsImage from '../assets/skills-bg.jpg';

const skillCategories = [
  {
    title: "Core QA Excellence",
    skills: ["STLC / SDLC", "SAP S/4 HANA", "Defect Management", "Regression Testing"]
  },
  {
    title: "Financials & Logic",
    skills: ["SAP FS-CD", "Data Integrity", "Workflow Testing", "Audit Compliance"]
  },
  {
    title: "Web Development",
    skills: ["React / Vite", "Tailwind CSS", "JavaScript Basics", "Responsive Design"]
  },
  {
    title: "E-commerce & API",
    skills: ["Postman / API", "Product Research", "Listing Audits"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* LEFT SIDE: IMAGE */}
        <div className="w-full h-full min-h-[400px]">
          <img 
            src={skillsImage} 
            className="w-full h-full object-cover rounded-[2rem] md:rounded-[3rem] shadow-xl saturate-[90%]"
            alt="Skills"
          />
        </div>

        {/* RIGHT SIDE: CARDS */}
        <div className="flex flex-col justify-between gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-6 md:p-8 hover:translate-y-[-5px] transition-all duration-300 border border-white/10 active:scale-95 active:bg-white/20"
            >
              <h4 className="text-[#8C7355] font-bold tracking-[0.2em] uppercase mb-3 text-[10px]">
                {category.title}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <li 
                    key={idx} 
                    className="bg-[#4A443F]/5 px-3 py-1 rounded-full text-[#4A443F] text-xs font-medium border border-[#4A443F]/10"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;