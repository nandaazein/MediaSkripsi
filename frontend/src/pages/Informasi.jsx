import React from "react";
import Navbar from "../components/NavbarHome";


const Informasi = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            <div className="container mx-auto px-4 py-8 pt-10">
                <h1 className="text-3xl font-bold text-[#214C1E] mb-6 text-center">Informasi Media</h1>
                
                <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4 justify-center sm:justify-start">
                <i className="ri-information-line text-2xl text-[#1D6F35] mr-2"></i>
                <h2 className="text-2xl font-semibold text-[#1D6F35] text-center sm:text-left">
                    Detail Media Pembelajaran
                </h2>
                </div>

                    <p className="text-gray-700 mb-4 text-center sm:text-left">
                        Media pembelajaran ini dibuat untuk memenuhi persyaratan dalam menyelesaikan program Strata-1 Pendidikan Komputer dengan judul:
                    </p>
                    <p className="text-center font-bold text-gray-700 mb-10">PENGEMBANGAN MEDIA PEMBELAJARAN INTERAKTIF BERBASIS WEB PADA MATERI ANALISIS DATA KELAS VIII SMP DENGAN PENDEKATAN COMPUTATIONAL THINKING</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
                        <p><strong>Nama:</strong> Difana Nanda Pridhasila Zein </p>
                        <p><strong>Email:</strong> <a href="nandaazein@gmail.com" className="text-blue-600">nandaazein@gmail.com</a></p>
                        <p><strong>Dosen Pembimbing 1:</strong> Dr. R. Ati Sukmawati, M.Kom</p>
                        <p><strong>Dosen Pembimbing 2:</strong> Muhammad Hifdzi Adini, S.Kom., Mt</p>
                        <p><strong>Program Studi:</strong> S-1 Pendidikan Komputer</p>
                        <p><strong>Fakultas:</strong> Fakultas Keguruan dan Ilmu Pendidikanr</p>
                        <p><strong>Institusi:</strong> Universitas Lambung Mangkurat</p>
                    </div>
                </div>
                
                <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-6">
                    <div className="flex items-center mb-4">
                        <i className="ri-book-2-line text-2xl text-[#1D6F35] mr-2"></i>
                        <h2 className="text-2xl font-semibold text-[#1D6F35]">Referensi dan Sumber</h2>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li></li>
                        <li></li>
                        {/* <li>Ilustrasi media pembelajaran didapatkan dari <a href="https://storyset.com/work" className="text-blue-600">storyset.com/work</a></li> */}
                    </ul>
                </div>
            </div>
            
            {/* Footer */}
            <footer className="bg-gray-100 p-4 text-center text-[#1D6F35] w-full">
                <span className="font-bold">AnalyticsLearn</span> © 2025 PilkomMedia
            </footer>

        </>
    );
};

export default Informasi;
