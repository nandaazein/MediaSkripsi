// import { useState } from "react";

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);
//   const [submenuOpen, setSubmenuOpen] = useState({
//     pendahuluan: false,
//     pencarian: false,
//     visualisasi: false,
//     peringkasan: false,
//     pengelolaan: false,
//     uji: false,
//   });

//   // Fungsi untuk toggle submenu
//   const toggleSubmenu = (key) => {
//     setSubmenuOpen((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   return (
//     <div className="flex mt-10 fixed">
//       {/* Sidebar */}
//       <div
//         className={`${open ? "w-64" : "w-20"}  h-auto min-h-screen transition-all duration-300 relative `}
//         style={{ backgroundColor: "#214C1E" }} // Hijau Tua
//       >
//         {/* Tombol Toggle */}
//         <button
//           className={`absolute top-9 right-0 transform translate-x-1/2 w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md transition-transform ${
//             !open ? "rotate-180" : ""
//           } hover:bg-gray-200`}
//           onClick={() => setOpen(!open)}
//         >
//           <i className="ri-arrow-right-s-line text-black"></i>
//         </button>

//         {/* Header Daftar Materi */}
//         {open && (
//           <h2 className="text-white text-lg font-semibold text-center mt-10">
//             Daftar Materi
//           </h2>
//         )}

//         {/* Menu */}
//         <ul className="mt-6">
//           {/* Pendahuluan */}
//           <li
//             className="flex items-center p-3 text-white cursor-pointer hover:bg-gray-600 rounded-md"
//             onClick={() => toggleSubmenu("pendahuluan")}
//           >
//             <i className="ri-book-line text-xl"></i>
//             <span className={`ml-4 ${!open ? "hidden" : ""} text-sm`}>
//               Pendahuluan
//             </span>
//           </li>
//           {submenuOpen.pendahuluan && open && (
//             <ul className="ml-10 text-white text-sm">
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Pengantar Bab Analisis Data
//               </li>
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Pendahuluan Bab Analisis Data
//               </li>
//             </ul>
//           )}

//           {/* Pencarian Data */}
//           <li
//             className="flex items-center p-3 text-white cursor-pointer hover:bg-gray-600 rounded-md"
//             onClick={() => toggleSubmenu("pencarian")}
//           >
//             <i className="ri-search-line text-xl"></i>
//             <span className={`ml-4 ${!open ? "hidden" : ""} text-sm`}>
//               Pencarian Data
//             </span>
//           </li>
//           {submenuOpen.pencarian && open && (
//             <ul className="ml-10 text-white text-sm">
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Pencarian dengan Fungsi Lookup (Vlookup dan Hlookup)
//               </li>
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Pencarian dengan Fungsi Reference (Index, Match, Choose)
//               </li>
//             </ul>
//           )}

//           {/* Visualisasi Data */}
//           <li
//             className="flex items-center p-3 text-white cursor-pointer hover:bg-gray-600 rounded-md"
//             onClick={() => toggleSubmenu("visualisasi")}
//           >
//             <i className="ri-bar-chart-line text-xl"></i>
//             <span className={`ml-4 ${!open ? "hidden" : ""} text-sm`}>
//               Visualisasi Data
//             </span>
//           </li>
//           {submenuOpen.visualisasi && open && (
//             <ul className="ml-10 text-white text-sm">
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Peran Analisis Data
//               </li>
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Membuat Grafik
//               </li>
//             </ul>
//           )}

//           {/* Peringkasan Data */}
//           <li
//             className="flex items-center p-3 text-white cursor-pointer hover:bg-gray-600 rounded-md"
//             onClick={() => toggleSubmenu("peringkasan")}
//           >
//             <i className="ri-list-check-2 text-xl"></i>
//             <span className={`ml-4 ${!open ? "hidden" : ""} text-sm`}>
//               Peringkasan Data
//             </span>
//           </li>
//           {submenuOpen.peringkasan && open && (
//             <ul className="ml-10 text-white text-sm">
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Fungsi SUMIF & SUMIFS
//               </li>
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Fungsi COUNTIF & COUNTIFS
//               </li>
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Pivot Table 1D & 2D
//               </li>
//             </ul>
//           )}

//           {/* Pengelolaan Data */}
//           <li
//             className="flex items-center p-3 text-white cursor-pointer hover:bg-gray-600 rounded-md"
//             onClick={() => toggleSubmenu("pengelolaan")}
//           >
//             <i className="ri-folder-line text-xl"></i>
//             <span className={`ml-4 ${!open ? "hidden" : ""} text-sm`}>
//               Pengelolaan Data
//             </span>
//           </li>
//           {submenuOpen.pengelolaan && open && (
//             <ul className="ml-10 text-white text-sm">
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Membuat Tabel
//               </li>
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Sorting Data
//               </li>
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Filtering Data
//               </li>
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Menghitung Total
//               </li>
//             </ul>
//           )}

//           {/* Uji Kompetensi */}
//           <li
//             className="flex items-center p-3 text-white cursor-pointer hover:bg-gray-600 rounded-md"
//             onClick={() => toggleSubmenu("uji")}
//           >
//             <i className="ri-award-line text-xl"></i>
//             <span className={`ml-4 ${!open ? "hidden" : ""} text-sm`}>
//               Uji Kompetensi
//             </span>
//           </li>
//           {submenuOpen.uji && open && (
//             <ul className="ml-10 text-white text-sm">
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Soal Pilihan Ganda
//               </li>
//               <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
//                 Soal HOTS
//               </li>
//             </ul>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import { useState } from "react";

const Sidebar = ({ open, setOpen }) => {
  const [submenuOpen, setSubmenuOpen] = useState({
    pendahuluan: false,
    pencarian: false,
    visualisasi: false,
    peringkasan: false,
    pengelolaan: false,
    uji: false,
  });

  const toggleSubmenu = (key) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full transition-all duration-300 ${
        open ? "w-64" : "w-20"
      }`}
      style={{ backgroundColor: "#214C1E" }}
    >
      {/* Tombol Toggle */}
      <button
        className={`absolute top-9 right-[-15px] w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md transition-transform ${
          open ? "" : "rotate-180"
        } hover:bg-gray-200`}
        onClick={() => setOpen(!open)}
      >
        <i className="ri-arrow-right-s-line text-black"></i>
      </button>

      {/* Header Daftar Materi */}
      {open && (
        <h2 className="text-white text-lg font-semibold text-center mt-10">
          Daftar Materi
        </h2>
      )}

      {/* Menu */}
      <ul className="mt-6">
        <li
          className="flex items-center p-3 text-white cursor-pointer hover:bg-gray-600 rounded-md"
          onClick={() => toggleSubmenu("pendahuluan")}
        >
          <i className="ri-book-line text-xl"></i>
          <span className={`ml-4 ${!open ? "hidden" : ""} text-sm`}>
            Pendahuluan
          </span>
        </li>
        {submenuOpen.pendahuluan && open && (
          <ul className="ml-10 text-white text-sm">
            <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
              Pengantar Bab Analisis Data
            </li>
            <li className="p-2 cursor-pointer hover:bg-gray-700 rounded-md">
              Pendahuluan Bab Analisis Data
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

