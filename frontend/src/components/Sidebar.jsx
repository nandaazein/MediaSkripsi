// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBookOpen,
//   faSearch,
//   faChartBar,
//   faCompress,
//   faTable,
//   faTasks,
//   faChevronDown,
//   faCircle,
// } from "@fortawesome/free-solid-svg-icons";

// export const Sidebar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   const menuItems = [
//     {
//       icon: faBookOpen,
//       title: "Pendahuluan",
//       subItems: ["Pengantar Bab", "Pendahuluan", "Mengenal Analisis Data", "Pendekatan Computational Thinking"],
//     },
//     {
//       icon: faSearch,
//       title: "Pencarian Data",
//       subItems: ["Pencarian dengan Fungsi Lookup", "Latihan", "Pencarian dengan Fungsi Reference", "Latihan", "Evaluasi"],
//     },
//     {
//       icon: faChartBar,
//       title: "Visualisasi Data",
//       subItems: ["Visualisasi Data", "Latihan"],
//     },
//     {
//       icon: faCompress,
//       title: "Peringkasan Data",
//       subItems: ["Peringkasan Data", "Latihan"],
//     },
//     {
//       icon: faTable,
//       title: "Pengelolaan Data",
//       subItems: ["Sorting & Filtering", "Latihan"],
//     },
//     {
//       icon: faTasks,
//       title: "Evaluasi",
//     },
//   ];

//   return (
//     <aside
//       className={`bg-gray-100 border-gray-200 shadow-sm p-4 transition-all  duration-200 ease-in-out
//         ${isMobile ? "w-full" : "w-64 fixed left-0 h-screen"}
//         ${isScrolled ? "top-0" : "top-16"}`}
//     >
//       <h2 className="text-sm font-bold text-center text-[#255F38] mb-4">DAFTAR MATERI</h2>
//       <ul className="space-y-2">
//         {menuItems.map((item, index) => (
//           <li key={index}>
//             <button
//               className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer font-medium text-base"
//               onClick={() => toggleDropdown(index)}
//             >
//               <div className="flex items-center">
//                 <div className="w-6 h-6 bg-[#255F38] text-white rounded-md flex items-center justify-center mr-3">
//                   <FontAwesomeIcon icon={item.icon} size="sm" />
//                 </div>
//                 {item.title}
//               </div>
//               {item.subItems && (
//                 <FontAwesomeIcon
//                   icon={faChevronDown}
//                   size="sm"
//                   className={`transition-transform duration-200 ease-in-out ${openDropdown === index ? "rotate-180" : ""}`}
//                 />
//               )}
//             </button>
//             {openDropdown === index && item.subItems && (
//               <ul className="pl-10 space-y-2 mt-1 text-gray-600 text-sm">
//                 {item.subItems.map((sub, subIndex) => (
//                   <li key={subIndex} className="flex items-center gap-2 p-2 hover:text-gray-900 cursor-pointer">
//                     <FontAwesomeIcon icon={faCircle} size="xs" />
//                     {sub}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBookOpen,
//   faSearch,
//   faChartBar,
//   faCompress,
//   faTable,
//   faTasks,
//   faChevronDown,
// } from "@fortawesome/free-solid-svg-icons";

// export const Sidebar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   const menuItems = [
//     {
//       icon: faBookOpen,
//       title: "Pendahuluan",
//       subItems: ["Pengantar Bab Analisis Data", "Pendahuluan", "Mengenal Analisis Data", "Pendekatan Computational Thinking", "Contoh Penerapan CT"],
//     },
//     {
//       icon: faSearch,
//       title: "Pencarian Data",
//       subItems: ["Pencarian dengan Fungsi Lookup", "Contoh Penerapan Fungsi Lookup", "Aktivitas Siswa", "Mari Berlatih",
//         "Pencarian dengan Fungsi Reference", "Contoh Penerapan Fungsi Reference", "Aktivitas Siswa", "Mari Berlatih", "Evaluasi"],
//     },
//     {
//       icon: faChartBar,
//       title: "Visualisasi Data",
//       subItems: ["Visualisasi Data", "Latihan"],
//     },
//     {
//       icon: faCompress,
//       title: "Peringkasan Data",
//       subItems: ["Peringkasan Data", "Latihan"],
//     },
//     {
//       icon: faTable,
//       title: "Pengelolaan Data",
//       subItems: ["Sorting & Filtering", "Latihan"],
//     },
//     {
//       icon: faTasks,
//       title: "Evaluasi",
//     },
//   ];

//   return (
//     <aside
//       className={`bg-gray-100 border-gray-200 shadow-sm p-4 transition-all duration-200 ease-in-out
//         ${isMobile ? "w-full" : "w-64 fixed left-0 h-screen"}
//         ${isScrolled ? "top-0" : "top-16"}`}
//     >
//       <h2 className="text-sm font-bold text-center text-[#255F38] mb-4">DAFTAR MATERI</h2>
//       <ul className="space-y-2">
//         {menuItems.map((item, index) => (
//           <li key={index}>
//             <button
//               className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer font-medium text-base"
//               onClick={() => toggleDropdown(index)}
//             >
//               <div className="flex items-center">
//                 <div className="w-6 h-6 bg-[#255F38] text-white rounded-md flex items-center justify-center mr-3">
//                   <FontAwesomeIcon icon={item.icon} size="sm" />
//                 </div>
//                 {item.title}
//               </div>
//               {item.subItems && (
//                 <FontAwesomeIcon
//                   icon={faChevronDown}
//                   size="sm"
//                   className={`transition-transform duration-200 ease-in-out ${openDropdown === index ? "rotate-180" : ""}`}
//                 />
//               )}
//             </button>
//             {openDropdown === index && item.subItems && (
//               <ul className="bg-gray-50 rounded-lg mt-2">
//                 {item.subItems.map((sub, subIndex) => (
//                   <li key={subIndex} className="flex items-center gap-2 px-4 py-2 text-gray-700 border-b last:border-b-0">
//                     ○ {sub}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faSearch,
  faChartBar,
  faCompress,
  faTable,
  faTasks,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    {
      icon: faBookOpen,
      title: "Pendahuluan",
      subItems: [
        { title: "Pengantar Bab Analisis Data", path: "/pengantar-bab" },
        { title: "Pendahuluan", path: "/pendahuluan" },
        { title: "Mengenal Analisis Data", path: "/mengenal-analisis" },
        { title: "Computational Thinking", path: "/pengenalan-ct" },
        { title: "Penerapan CT", path: "/penerapan-ct" },
      ],
    },
    {
      icon: faSearch,
      title: "Pencarian Data",
      subItems: [
        { title: "Pencarian Fungsi Lookup", path: "/pencarian-lookup" },
        { title: "Penerapan Fungsi Lookup", path: "/contoh-lookup" },
        { title: "Pencarian Fungsi Reference", path: "/pencarian-reference" },
        { title: "Penerapan Fungsi Reference", path: "/contoh-reference" },
        { title: "Aktivitas Siswa", path: "/aktivitas-lookup" },
        { title: "Mari Berlatih", path: "/berlatih-lookup" },
        { title: "Kuis 1", path: "/quiz1" },
      ],
    },
    {
      icon: faChartBar,
      title: "Visualisasi Data",
      subItems: [
        { title: "Visualisasi Data", path: "/visualisasi-data" },
        {
          title: "Penerapan Visualisasi Data",
          path: "/contoh-penerapan-visualisasi-data",
        },
        { title: "Aktivitas Siswa", path: "/aktivitas-visualisasi" },
        { title: "Mari Berlatih", path: "/mari-berlatih-visualisasi" },
        { title: "Kuis", path: "/kuis2" },
      ],
    },
    {
      icon: faCompress,
      title: "Peringkasan Data",
      subItems: [
        { title: "Peringkasan Data", path: "/peringkasan-data" },
        { title: "Penerapan Peringkasan Data", path: "/penerapan-peringkasan" },
        { title: "Aktivitas Siswa", path: "/aktivitas-peringkasan" },
        { title: "Mari Berlatih", path: "/berlatih-peringkasan" },
        { title: "Kuis 3", path: "/quiz3" },
      ],
    },
    {
      icon: faTable,
      title: "Pengelolaan Data",
      subItems: [
        { title: "Sorting & Filtering", path: "/pengelolaan-data" },
        {
          title: "Penerapan Pengelolaan Data",
          path: "/penerapan-pengelolaan-data",
        },
        { title: "Aktivitas Siswa", path: "/aktivitas-siswa" },
        { title: "Mari Berlatih", path: "/berlatih-pengelolaan" },
        { title: "Kuis 4", path: "/quiz4" },
      ],
    },
    {
      icon: faTasks,
      title: "Evaluasi",
      subItems: [],
    },
  ];

  return (
    <aside
      className={`bg-gray-100 border-gray-200 shadow-sm p-4 transition-all duration-200 ease-in-out 
        ${isMobile ? "w-full" : "w-64 fixed left-0 h-screen"} 
        ${isScrolled ? "top-0" : "top-16"}`}
    >
      <h2 className="text-sm font-bold text-center text-[#255F38] mb-4">
        DAFTAR MATERI
      </h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer font-normal text-base"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#255F38] text-white rounded-md flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={item.icon} size="sm" />
                </div>
                {item.title}
              </div>
              {item.subItems.length > 0 && (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="sm"
                  className={`transition-transform duration-200 ease-in-out ${
                    openDropdown === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
            {openDropdown === index && item.subItems.length > 0 && (
              <ul className="bg-gray-50 rounded-lg mt-2">
                {item.subItems.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm hover:bg-gray-200 cursor-pointer"
                  >
                    <Link to={sub.path} className="flex items-center gap-2">
                      ○ {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
