import React from 'react';
import { MapPin, Eye, ExternalLink } from 'lucide-react';

const Profile = ({ data }) => {
  return (
    <div className="relative mb-16 z-10 w-full max-w-4xl mx-auto">
      
      {/* Glow Effect di Belakang Kartu */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary rounded-2xl opacity-30 blur-lg transition duration-500"></div>

      {/* Container Utama Kartu */}
      <div className="relative bg-cyber-bg border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl">
        
        {/* Layout Flexbox: Kiri (Foto) - Kanan (Teks) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          
          {/* === BAGIAN KIRI: FOTO === */}
          <div className="shrink-0 mx-auto md:mx-0">
             <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-cyber-primary/50 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <img 
                  src={data.photo_url} 
                  alt={data.full_name} 
                  className="w-full h-full object-cover" 
                />
             </div>
          </div>

          {/* === BAGIAN KANAN: INFORMASI === */}
          <div className="flex-1 w-full text-center md:text-left">
            
            {/* 1. Nama */}
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
              {data.full_name}
            </h1>
            
            {/* 2. Headline */}
            <p className="text-cyber-primary font-mono text-xs md:text-sm mb-4">
              {data.headline}
            </p>

            {/* 3. Baris Badge (NIM, Prodi, Tahun) - Mirip Gambar */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
               {/* Badge NIM */}
               <span className="bg-white/10 text-white text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-white/5 font-medium">
                 {data.nim}
               </span>
               {/* Badge Prodi */}
               <span className="bg-white/10 text-white text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-white/5 font-medium">
                 {data.prodi}
               </span>
               {/* Badge Angkatan */}
               <span className="bg-white/10 text-white text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-white/5 font-medium">
                 Tahun {data.angkatan}
               </span>
            </div>

            {/* 4. Lokasi & Views */}
            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-400 mb-4 font-sans">
                <div className="flex items-center gap-1">
                   <MapPin size={14} className="text-red-400" /> 
                   {data.location}
                </div>
                <div className="flex items-center gap-1">
                   <Eye size={14} className="text-cyber-primary" /> 
                   {data.views || "127"} kali dilihat
                </div>
            </div>

            {/* 5. Bio Singkat */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {data.short_bio}
            </p>

            {/* 6. Tombol (Background Putih/Terang mirip gambar) */}
            <div className="flex justify-center md:justify-start">
              <a 
                href={data.portfolio_url} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-lg text-sm"
              >
                 <ExternalLink size={16} /> Kunjungi Portofolio
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;