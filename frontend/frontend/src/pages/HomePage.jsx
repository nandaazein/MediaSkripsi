import React from 'react';
import { UserCircle } from "lucide-react";
import homepage from '../assets/homepage1.png';


const Homepage = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-100 p-4 text-[#1D6F35] flex justify-between items-center">
      <h1 className="text-2xl font-bold">AnalyticsLearn</h1>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:underline">Beranda</a></li>
        <li><a href="/materi" className="hover:underline">Materi</a></li>
        <li><a href="/perihal" className="hover:underline">Informasi</a></li>
      </ul>
      <div className="flex items-center space-x-2">
        <UserCircle size={32} className="text-[#1D6F35] " /> {/* Ikon profil */}
        <p>Halo, </p> {/* Nama diambil dari prop userName */}
      </div>
      </nav>
      
      {/* Main Content */}
      <div className="homepage flex flex-col min-h-screen pb-10 text-[#214C1E]">
        <div className="max-w-6xl mx-auto px-8 text-center flex-grow">
          <h1 className="text-3xl font-bold my-8 text-[#1D6F35]">MEDIA PEMBELAJARAN ANALISIS DATA</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="box bg-white shadow-lg p-6 rounded-lg w-80 mx-auto border border-gray-300">
              <img src={homepage} alt="Daftar Isi" className="mx-auto mb-4 w-52" />
              <h2 className="text-xl font-semibold">INFORMASI</h2>
              <a href="/daftar-isi" className="mt-4 inline-block px-4 py-2 border border-[#1D6F35] text-[#1D6F35] rounded-md hover:bg-[#1D6F35] hover:text-white transition text-md">LIHAT DAFTAR ISI</a>
            </div>
            <div className="box bg-white shadow-lg p-6 rounded-lg w-80 mx-auto border border-gray-300">
              <img src={homepage} alt="Materi" className="mx-auto mb-4 w-52" />
              <h2 className="text-xl font-semibold">MATERI</h2>
              <a href="/pengantar-bab" className="mt-4 inline-block px-4 py-2 bg-[#1D6F35] text-white rounded-md hover:bg-[#155A2A] transition text-md">MULAI BELAJAR</a>
            </div>
            <div className="box bg-white shadow-lg p-6 rounded-lg w-80 mx-auto border border-gray-300">
              <img src={homepage} alt="Informasi" className="mx-auto mb-3 w-52" />
              <h2 className="text-xl font-semibold">PETUNJUK PENGGUNAAN</h2>
              <a href="/informasi" className="mt-4 inline-block px-4 py-2 border border-[#1D6F35] text-[#1D6F35] rounded-md hover:bg-[#1D6F35] hover:text-white transition text-md">LIHAT INFORMASI</a>
            </div>
          </div>
        </div>
      </div>

      
      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center text-[#1D6F35] w-full">
          <span className="font-bold">AnalyticsLearn</span> © 2025 PilkomMedia
      </footer>

    </>
  );
};

export default Homepage;
