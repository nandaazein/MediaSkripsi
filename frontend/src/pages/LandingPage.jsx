import React from "react";
import Navbar from "../components/NavbarHome";
import HeroImage from "../assets/hero1.png";

const Homepage = () => {
  return (
    <div className="overflow-x-hidden w-full min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-15 bg-gray-100 w-full flex-1">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-[#1D6F35] text-xl font-bold">
            MEDIA PEMBELAJARAN INTERAKTIF
          </h2>
          <h1 className="text-4xl font-bold text-[#1D1D1D] mt-2">
            ANALISIS DATA INFORMATIKA
          </h1>
          <p className="text-[#4A4A4A] mt-4">
            Pelajari cara mencari, memvisualisasikan, meringkas, dan mengelola
            data menggunakan pendekatan Computational Thinking. Materi dalam
            aplikasi ini dirancang agar pemula dapat memahami analisis data
            secara sistematis dan terstruktur.
          </p>
          <div className="mt-6">
            <a
              href="/login-siswa"
              className="bg-[#1D6F35] text-white px-6 py-3 rounded-md mr-4 hover:bg-[#145029] transition"
            >
              MULAI BELAJAR
            </a>
            <a
              href="/login-guru"
              className="border border-[#1D6F35] text-[#1D6F35] px-6 py-3 rounded-md hover:bg-[#1D6F35] hover:text-white transition"
            >
              HALAMAN GURU
            </a>
          </div>
        </div>
        <div className="md:pr-4">
          <img src={HeroImage} alt="Hero" className="w-[400px] mt-10 md:mt-0" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center text-[#1D6F35] w-full">
          <span className="font-bold">AnalyticsLearn</span> © 2025 PilkomMedia
      </footer>
    </div>
  );
};

export default Homepage;