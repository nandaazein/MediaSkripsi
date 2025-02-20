import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Materi = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8 pt-24">
                <h1 className="text-3xl font-bold text-[#214C1E] mb-6 text-center">Materi Pembelajaran</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                    <div className="p-6 border rounded-lg shadow bg-white w-full md:w-1/2 lg:w-1/3">
                        <h2 className="text-xl font-semibold text-[#1D6F35]">Pencarian Data</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>Pencarian Data dengan Fungsi Lookup</li>
                            <li>Pencarian Data dengan Fungsi Reference</li>
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg shadow bg-white w-full md:w-1/2 lg:w-1/3">
                        <h2 className="text-xl font-semibold text-[#1D6F35]">Visualisasi Data</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>Peran Visualisasi Data</li>
                            <li>Jenis Chart dan Kegunaannya</li>
                            <li>Pembuatan Chart</li>
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg shadow bg-white w-full md:w-1/2 lg:w-1/3">
                        <h2 className="text-xl font-semibold text-[#1D6F35]">Peringkasan Data</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>Fungsi SUMIF dan SUMIFS</li>
                            <li>Fungsi COUNTIF dan COUNTIFS</li>
                            <li>Pivot Table Satu Dimensi</li>
                            <li>Pivot Table Dua Dimensi</li>
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg shadow bg-white w-full md:w-1/2 lg:w-1/3">
                        <h2 className="text-xl font-semibold text-[#1D6F35]">Pengelolaan Data</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>Sort Tables</li>
                            <li>Filter Tables</li>
                            <li>Perhitungan Total</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Materi;
