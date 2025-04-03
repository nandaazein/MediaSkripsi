import React from "react";
import Navbar from "../components/NavbarHome";

const Materi = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            <div className="container mx-auto px-4 py-8 pt-10 bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-extrabold text-[#166534] mb-8 text-center">Materi Pembelajaran</h1>
                <div className="flex flex-wrap gap-8 justify-center">
                    <div className="p-6 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-semibold text-[#166534] mb-3">Pencarian Data</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Pencarian Data dengan Fungsi Lookup</li>
                            <li>Pencarian Data dengan Fungsi Reference</li>
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-semibold text-[#166534] mb-3">Visualisasi Data</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Peran Visualisasi Data</li>
                            <li>Jenis Chart dan Kegunaannya</li>
                            <li>Pembuatan Chart</li>
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-semibold text-[#166534] mb-3">Peringkasan Data</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Fungsi SUMIF dan SUMIFS</li>
                            <li>Fungsi COUNTIF dan COUNTIFS</li>
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg bg-white w-full md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-semibold text-[#166534] mb-3">Pengelolaan Data</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Sort Tables</li>
                            <li>Filter Tables</li>
                        </ul>
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

export default Materi;
