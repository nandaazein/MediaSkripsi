import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Informasi = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="p-6 bg-white min-h-screen flex-1">
        {/* Page Title */}
        <div className="p-4 bg-gradient-to-r from-[#255F38] to-[#2E8B57] mb-6 text-white font-bold text-lg text-center rounded-lg shadow-lg">
          INFORMASI MEDIA
        </div>

        {/* Media Details Section */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg shadow-md mb-6">
          <div className="flex items-center mb-5 justify-center sm:justify-start">
            <i className="ri-information-line text-2xl text-[#255F38] mr-3"></i>
            <h2 className="text-xl font-bold text-[#255F38] text-center sm:text-left">
              Detail Media Pembelajaran
            </h2>
          </div>
          <p className="text-gray-700 mb-4 text-center sm:text-left">
            Media pembelajaran ini dibuat untuk memenuhi persyaratan dalam menyelesaikan program Strata-1 Pendidikan Komputer dengan judul:
          </p>
          <p className="text-center font-bold text-gray-700 mb-6 sm:text-left">
            PENGEMBANGAN MEDIA PEMBELAJARAN INTERAKTIF BERBASIS WEB PADA MATERI ANALISIS DATA KELAS VIII SMP DENGAN PENDEKATAN COMPUTATIONAL THINKING
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <p>
              <span className="font-semibold">Nama:</span> Difana Nanda Pridhasila Zein
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:nandaazein@gmail.com" className="text-blue-600 hover:underline">
                nandaazein@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Dosen Pembimbing 1:</span> Dr. R. Ati Sukmawati, M.Kom
            </p>
            <p>
              <span className="font-semibold">Dosen Pembimbing 2:</span> Muhammad Hifdzi Adini, S.Kom., Mt
            </p>
            <p>
              <span className="font-semibold">Program Studi:</span> S-1 Pendidikan Komputer
            </p>
            <p>
              <span className="font-semibold">Fakultas:</span> Fakultas Keguruan dan Ilmu Pendidikan
            </p>
            <p>
              <span className="font-semibold">Institusi:</span> Universitas Lambung Mangkurat
            </p>
          </div>
        </div>

        {/* References Section */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg shadow-md">
          <div className="flex items-center mb-5">
            <i className="ri-book-2-line text-2xl text-[#255F38] mr-3"></i>
            <h2 className="text-xl font-bold text-[#255F38]">Referensi dan Sumber</h2>
          </div>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              Wing, J. M. (2006). "Computational Thinking." <em>Communications of the ACM</em>, 49(3), 33-35.
            </li>
            <li>
              Tuckman, B. W., & Harper, B. E. (2012). <em>Conducting Educational Research</em>. Rowman & Littlefield Publishers.
            </li>
            <li>
              Ilustrasi media pembelajaran didapatkan dari{" "}
              <a href="https://storyset.com/work" className="text-blue-600 hover:underline">
                storyset.com/work
              </a>
            </li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate("/home")} // Adjust the route as needed
            className="px-5 py-2 text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer"
          >
            Kembali
          </button>
        </div>
      </div>

     <footer className="bg-white p-4 text-center text-[#1D6F35] w-full">
        <span className="font-bold">AnalyticsLearn</span> © 2025 PilkomMedia
    </footer>
    </div>
  );
};

export default Informasi;