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
      <h1 className="text-3xl font-bold ml-6 underline">AnalyticsLearn</h1>

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
        {/* Tombol Daftar & Masuk (hanya muncul di mobile) */}
        <div className="flex flex-col mt-4 md:hidden space-y-2">
          <a
            href="/login-siswa"
            className="bg-[#1D6F35] text-white px-4 py-2 rounded-md text-center hover:bg-[#145029] transition w-full text-base font-medium"
          >
            Masuk
          </a>
          <a
            href="/register-siswa"
            className="border border-[#1D6F35] text-[#1D6F35] px-4 py-2 rounded-md text-center hover:bg-[#1D6F35] hover:text-white transition w-full text-base font-medium"
          >
            Daftar
          </a>
        </div>
      </ul>

      {/* Tombol Daftar & Masuk (hanya di desktop) */}
      <div className="hidden md:flex space-x-2 items-center">
        <a
          href="/login-siswa"
          className="bg-[#1D6F35] text-white px-4 py-2 rounded-md hover:bg-[#145029] transition text-base font-medium"
        >
          Masuk
        </a>
        <a
          href="/register-siswa"
          className="border border-[#1D6F35] text-[#1D6F35] px-4 py-2 rounded-md hover:bg-[#1D6F35] hover:text-white transition text-base font-medium"
        >
          Daftar 
        </a>
      </div>
    </nav>
  );
};

export default Navbar;