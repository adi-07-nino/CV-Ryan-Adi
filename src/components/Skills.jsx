import React from 'react';

const Skills = ({ data }) => {
  // Fungsi Helper: Rotasi warna otomatis karena di JSON tidak ada field 'color'
  const getGlowColor = (index) => {
    const colors = [
      "border-cyan-400 shadow-[0_0_15px_#22d3ee]",   // Index 0
      "border-green-400 shadow-[0_0_15px_#4ade80]",  // Index 1
      "border-blue-400 shadow-[0_0_15px_#60a5fa]",   // Index 2
      "border-red-400 shadow-[0_0_15px_#f87171]"     // Index 3
    ];
    return colors[index % colors.length];
  };

  const getGradient = (index) => {
    const grads = [
      "from-cyan-500 to-blue-500",
      "from-green-500 to-emerald-500",
      "from-blue-500 to-indigo-500",
      "from-red-500 to-orange-500"
    ];
    return grads[index % grads.length];
  };

  return (
    <section className="mb-24">
      <h2 className="text-center text-xl font-bold mb-8 text-white tracking-widest uppercase">
        Skills & Expertise
      </h2>
      
      <div className="flex flex-col gap-6">
        {data.map((skill, index) => (
          <div key={skill.id} className="relative pl-4">
             {/* Card Background */}
             <div className={`relative bg-cyber-card/60 backdrop-blur-sm border border-white/5 rounded-r-xl p-4 flex items-center gap-5 hover:bg-white/5 transition-colors overflow-hidden`}>
                
                {/* Garis Kiri Neon */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${getGradient(index)}`}></div>

                {/* Icon Wrapper */}
                <div className="relative w-14 h-14 shrink-0 flex items-center justify-center bg-white/5 rounded-full p-2 border border-white/10">
                   {/* Load Icon dari URL Devicon */}
                   <img src={skill.icon_url} alt={skill.name} className="w-full h-full object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className={`text-lg font-bold mb-1 text-white`}>{skill.name}</h3>
                    <span className="text-[10px] font-mono text-gray-400 border border-white/10 px-2 py-0.5 rounded uppercase">{skill.level}</span>
                  </div>
                  
                  {/* Progress Bar Sederhana */}
                  <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${getGradient(index)}`} 
                      style={{ width: skill.level === 'advanced' ? '90%' : skill.level === 'intermediate' ? '70%' : '50%' }}
                    ></div>
                  </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;