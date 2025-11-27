import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const Experiences = ({ data }) => {
  return (
    <section className="relative pb-20">
      <h2 className="text-center text-xl font-bold mb-12 text-white tracking-widest uppercase">
        Experience
      </h2>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Garis Tengah */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-primary via-cyber-accent to-transparent transform md:-translate-x-1/2 opacity-30"></div>

        <div className="space-y-12">
          {data.map((item, idx) => {
            const isRight = idx % 2 !== 0; 
            
            // Logika warna badge berdasarkan tipe experience
            let badgeStyle = "bg-blue-900/50 text-blue-300 border-blue-500";
            if (item.experience_type.toLowerCase().includes('magang')) badgeStyle = "bg-cyan-900/50 text-cyan-300 border-cyan-500";
            if (item.experience_type.toLowerCase().includes('organization')) badgeStyle = "bg-purple-900/50 text-purple-300 border-purple-500";

            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center w-full ${isRight ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Node Tengah */}
                <div className={`absolute left-[20px] md:left-1/2 w-4 h-4 bg-cyber-bg border-2 border-white/50 rounded-full z-20 transform -translate-x-1/2 shadow-[0_0_10px_currentColor]`}>
                    <div className={`w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                </div>

                {/* Konektor Garis */}
                <div className={`hidden md:block absolute top-1/2 h-[1px] w-[30px] border-t border-dotted border-gray-500 opacity-50 ${isRight ? 'left-1/2' : 'right-1/2'}`}></div>

                {/* Spacer */}
                <div className="w-full md:w-1/2"></div>
                
                {/* Card Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isRight ? 'md:pr-10 text-right' : 'md:pl-10 text-left'}`}>
                  
                  <div className={`relative p-5 rounded-xl border border-white/10 bg-cyber-card/80 backdrop-blur-md group hover:border-white/30 transition-all duration-300`}>
                    
                    {/* Header: Badge & Status */}
                    <div className={`flex items-center gap-3 mb-3 flex-wrap ${isRight ? 'md:flex-row-reverse' : ''}`}>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${badgeStyle} shadow-sm`}>
                            {item.experience_type}
                        </span>
                        {item.is_current && (
                            <span className="flex items-center gap-1 text-[10px] text-green-400 font-mono animate-pulse">
                                ● Active
                            </span>
                        )}
                    </div>
                    
                    <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
                    
                    <div className={`flex items-center gap-2 text-xs text-cyber-primary mb-3 font-mono opacity-90 ${isRight ? 'md:justify-end' : ''}`}>
                        <Building2 size={12} /> {item.organization}
                    </div>

                    <div className={`flex items-center gap-2 text-[10px] text-gray-500 mb-3 font-mono ${isRight ? 'md:justify-end' : ''}`}>
                        <Calendar size={10} /> {item.start_date} - {item.end_date || "Present"}
                    </div>

                    <p className="text-[11px] text-gray-400 leading-relaxed opacity-70 mb-4">
                      {item.description}
                    </p>

                    {/* Tech Stack Tags (Fitur Baru) */}
                    {item.technologies && (
                        <div className={`flex flex-wrap gap-2 mt-3 ${isRight ? 'md:justify-end' : 'justify-start'}`}>
                            {item.technologies.map((tech, i) => (
                                <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;