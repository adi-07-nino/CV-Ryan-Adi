import React from 'react';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import mahasiswaData from './dataMahasiswa.json';
import './App.css'; 

function App() {
  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text font-sans pb-20 overflow-x-hidden relative">
      
      {/* Background Grid Tech Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)' }}>
      </div>

      {/* Ambient Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-12">
        <Profile data={mahasiswaData.profile} />
        <Skills data={mahasiswaData.skills} />
        <Experiences data={mahasiswaData.experiences} />
      </div>
    </div>
  );
}

export default App;