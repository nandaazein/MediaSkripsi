import React from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar di bawah navbar untuk mobile, di samping untuk desktop */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <Sidebar />
        </div>

        {/* Konten utama */}
        <main className="flex-1 p-6 bg-gray-100">{children}
          {/* Footer */}
      <Footer />
        </main>
        
      </div>

      
    </div>
  );
};

export default Layout;
