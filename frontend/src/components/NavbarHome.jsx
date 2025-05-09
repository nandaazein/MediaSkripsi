import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 text-[#1D6F35] flex justify-between items-center w-full relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold">AnalyticsLearn</h1>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-[#1D6F35] focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Navbar */}
      <ul
        className={`absolute top-16 left-0 w-full bg-gray-100 shadow-md md:shadow-none md:static md:flex md:space-x-6 md:w-auto p-4 md:p-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a href="/" className="block py-2 px-4 hover:text-gray-600">
            Beranda
          </a>
        </li>
        <li>
          <a href="/informasi" className="block py-2 px-4 hover:text-gray-600">
            Informasi
          </a>
        </li>

        {/* Tombol Daftar & Masuk (hanya muncul di mobile) */}
        <div className="flex flex-col mt-4 md:hidden">
          <a
            href="/login-siswa"
            className="bg-[#1D6F35] text-white px-4 py-2 rounded-md text-center hover:bg-[#145029] transition"
          >
            Masuk
          </a>
          <a
            href="/register-siswa"
            className="border border-[#1D6F35] text-[#1D6F35] px-4 py-2 rounded-md text-center mt-2 hover:bg-[#1D6F35] hover:text-white transition"
          >
            Daftar
          </a>
        </div>
      </ul>

      {/* Tombol Daftar & Masuk (hanya di desktop) */}
      <div className="hidden md:flex space-x-2">
        <a
          href="/login-siswa"
          className="bg-[#1D6F35] text-white px-4 py-2 rounded-md hover:bg-[#145029] transition"
        >
          Masuk
        </a>
        <a
          href="/register-siswa"
          className="border border-[#1D6F35] text-[#1D6F35] px-4 py-2 rounded-md hover:bg-[#1D6F35] hover:text-white transition"
        >
          Daftar 
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
