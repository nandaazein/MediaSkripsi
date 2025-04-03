// import React from "react";
// import { Sidebar } from "./Sidebar";
// import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";

// export const Layout = ({ children }) => {
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Container untuk Sidebar dan Konten */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Konten utama dengan margin-left agar tidak tertutup */}
//         <main className="flex-1 p-6 bg-gray-100 ml-64">{children}</main>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

// import React from "react";
// import { Sidebar } from "./Sidebar";
// import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";

// export const Layout = ({ children }) => {
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Container untuk Sidebar dan Konten */}
//       <div className="flex flex-1 flex-col md:flex-row">
//         {/* Sidebar */}
//         <div className="w-64 hidden md:flex">
//           <Sidebar />
//         </div>


//         {/* Konten utama yang mengisi ruang sidebar jika tersembunyi */}
//         <main className="flex-1 p-6 bg-gray-100">{children}</main>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import { Sidebar } from "./Sidebar";
// import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";

// export const Layout = ({ children }) => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Navbar */}
//       <Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

//       {/* Sidebar untuk Mobile */}
//       {isSidebarOpen && (
//         <div className="absolute z-50 w-64 h-full bg-white shadow-lg md:hidden">
//           <Sidebar />
//         </div>
//       )}

//       {/* Container untuk Sidebar dan Konten */}
//       <div className="flex flex-1 flex-col md:flex-row">
//         {/* Sidebar untuk Desktop */}
//         <div className="block md:w-64">
//   <Sidebar />
// </div>

//         {/* Konten utama */}
//         <main className="flex-1 p-6 bg-gray-100">{children}</main>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

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
