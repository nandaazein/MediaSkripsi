import React, { useEffect, useState } from "react";
import { UserCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import axios from "axios";
import informasi from "../assets/informasi.png";
import materi from "../assets/materi.png";
import siswa from "../assets/siswa.png";

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nis, setNis] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setIsLoggedIn(true);
        setNis(user.nis);
      } catch (error) {
        console.error("Error parsing user data:", error);
        setIsLoggedIn(false);
        setError("Error parsing user data");
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="homepage flex flex-col min-h-screen pb-10 text-[#214C1E]">
        <div className="max-w-6xl mx-auto px-8 text-center flex-grow bg-gray-100">
          <h1 className="text-3xl font-bold my-8 text-[#1D6F35]">
            MEDIA PEMBELAJARAN ANALISIS DATA
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="box bg-white shadow-lg p-6 rounded-lg w-80 mx-auto border border-gray-300">
              <img src={informasi} alt="Daftar Isi" className="mx-auto mb-4 w-52" />
              <h2 className="text-xl font-semibold">INFORMASI MEDIA</h2>
              <button
                onClick={() => window.location.href = "/informasi"}
                className="mt-4 inline-block px-4 py-2 border border-[#1D6F35] text-[#1D6F35] rounded-md hover:bg-[#1D6F35] hover:text-white transition text-md cursor-pointer"
              >
                LIHAT INFORMASI
              </button>
            </div>
            <div className="box bg-white shadow-lg p-6 rounded-lg w-80 mx-auto border border-gray-300">
              <img src={materi} alt="Materi" className="mx-auto mb-4 w-52" />
              <h2 className="text-xl font-semibold">MATERI</h2>
              <button
                onClick={() => window.location.href = "/pengantar-bab"}
                className="mt-4 inline-block px-4 py-2 bg-[#1D6F35] text-white rounded-md hover:bg-[#155A2A] transition text-md cursor-pointer"
              >
                MULAI BELAJAR
              </button>
            </div>
            <div className="box bg-white shadow-lg p-6 rounded-lg w-80 mx-auto border border-gray-300">
              <img src={siswa} alt="Informasi" className="mx-auto mb-3 w-52" />
              <h2 className="text-xl font-semibold">INFORMASI SISWA</h2>
              <button
                onClick={() => window.location.href = "/dashboard-siswa"}
                className="mt-4 inline-block px-4 py-2 border border-[#1D6F35] text-[#1D6F35] rounded-md hover:bg-[#1D6F35] hover:text-white transition text-md cursor-pointer"
              >
                LIHAT INFORMASI SISWA
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-100 p-4 text-center text-[#1D6F35] w-full">
        <span className="font-bold">AnalyticsLearn</span> © 2025 PilkomMedia
      </footer>
    </>
  );
};

export default Homepage;