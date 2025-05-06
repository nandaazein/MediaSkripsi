import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuizInstructions() {
  const navigate = useNavigate(); // Menambahkan deklarasi navigate

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Container Utama */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        {/* Judul Kuis */}
        <h1 className="text-3xl font-bold text-green-800">KUIS 1</h1>
        <p className="text-lg text-gray-600 mt-1">Pencarian Data</p>

        {/* Garis Pembatas */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Petunjuk Pengerjaan Kuis */}
        <div className="bg-gray-100 p-6 rounded-lg text-left">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Petunjuk Pengerjaan Kuis
          </h2>
          <ul className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Terdapat 10 soal pilihan ganda pada kuis ini. Untuk memulai, tekan tombol "MULAI".</li>
            <li>
              Laman kuis terbagi menjadi dua bagian: sisi kiri untuk progres dan sisi kanan untuk soal.
            </li>
            <li>Jika semua soal selesai, klik tombol "Selesai".</li>
          </ul>
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-green-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
            onClick={() => navigate("/kuis-pencarian")}
          >
            MULAI
          </button>
          <button 
            className="bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md"
            onClick={() => navigate(-1)}
          >
            KEMBALI
          </button>
        </div>

      </div>
    </div>
  );
}
