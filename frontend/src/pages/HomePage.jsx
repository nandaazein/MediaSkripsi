
import React, { useEffect, useState } from "react";
import { UserCircle } from "lucide-react";
import homepage from "../assets/homepage1.png";
import Navbar from "../components/Navbar";
import axios from "axios";

const Homepage = () => {
  const [progress, setProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nis, setNis] = useState(null);

  useEffect(() => {
    // Check if the user is logged in by looking for user data in localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setIsLoggedIn(true);
        setNis(user.nis); // Store nis to fetch progress
      } catch (error) {
        console.error("Error parsing user data:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    // Fetch progress if logged in
    if (isLoggedIn && nis) {
      const fetchProgress = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/students/progress/${nis}`);
          setProgress(response.data.progress || 0);
        } catch (error) {
          console.error("Error fetching progress:", error);
          setProgress(0);
        }
      };
      fetchProgress();
    }
  }, [isLoggedIn, nis]);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="homepage flex flex-col min-h-screen pb-10 text-[#214C1E]">
        <div className="max-w-6xl mx-auto px-8 text-center flex-grow">
          <h1 className="text-3xl font-bold my-8 text-[#1D6F35]">
            MEDIA PEMBELAJARAN ANALISIS DATA
          </h1>

          {/* Progress Bar Section */}
          <div className="mb-8">
            <h2 className="mt-8 text-xl font-semibold text-[#1D6F35] mb-2">
              Progres Pembelajaran
            </h2>
            {isLoggedIn ? (
              <div className="w-full max-w-md mx-auto bg-gray-300 rounded-full h-8 shadow-sm overflow-hidden relative">
                <div
                  className="bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] h-8 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
                <span
                  className="absolute inset-0 flex items-center justify-center text-sm font-medium"
                  style={{
                    color: progress > 50 ? "#FFFFFF" : "#214C1E",
                    textShadow: progress > 50 ? "1px 1px 2px rgba(0, 0, 0, 0.5)" : "none",
                  }}
                >
                  {progress}%
                </span>
              </div>
            ) : (
              <p className="text-sm text-gray-600">
                Silakan <a href="/student-login" className="text-[#1D6F35] hover:underline">login</a> untuk melihat progres pembelajaran Anda.
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="box bg-white shadow-lg p-6 rounded-lg w-80 mx-auto border border-gray-300">
              <img src={homepage} alt="Daftar Isi" className="mx-auto mb-4 w-52" />
              <h2 className="text-xl font-semibold">INFORMASI</h2>
              <a
                href="/informasi"
                className="mt-4 inline-block px-4 py-2 border border-[#1D6F35] text-[#1D6F35] rounded-md hover:bg-[#1D6F35] hover:text-white transition text-md"
              >
                LIHAT INFORMASI
              </a>
            </div>
            <div className="box bg-white shadow-lg p-6 rounded-lg w-80 mx-auto border border-gray-300">
              <img src={homepage} alt="Materi" className="mx-auto mb-4 w-52" />
              <h2 className="text-xl font-semibold">MATERI</h2>
              <a
                href="/pengantar-bab"
                className="mt-4 inline-block px-4 py-2 bg-[#1D6F35] text-white rounded-md hover:bg-[#155A2A] transition text-md"
              >
                MULAI BELAJAR
              </a>
            </div>
            <div className="box bg-white shadow-lg p-6 rounded-lg w-80 mx-auto border border-gray-300">
              <img src={homepage} alt="Informasi" className="mx-auto mb-3 w-52" />
              <h2 className="text-xl font-semibold">PETUNJUK PENGGUNAAN</h2>
              <a
                href="/informasi"
                className="mt-4 inline-block px-4 py-2 border border-[#1D6F35] text-[#1D6F35] rounded-md hover:bg-[#1D6F35] hover:text-white transition text-md"
              >
                LIHAT INFORMASI
              </a>
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