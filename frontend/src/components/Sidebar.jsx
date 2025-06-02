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
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Cari item menu yang sesuai dengan path saat ini
    const currentPath = location.pathname;
    const activeMenuIndex = menuItems.findIndex((item) => {
      if (item.path === currentPath) return true; // Untuk item tanpa subItems
      return item.subItems?.some((subItem) => subItem.path === currentPath);
    });

    // Buka dropdown untuk item menu aktif
    setOpenDropdown(activeMenuIndex !== -1 ? activeMenuIndex : null);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

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
      ],
    },
    {
      icon: faSearch,
      title: "Pencarian Data",
      subItems: [
        { title: "Pencarian Fungsi Lookup", path: "/pencarian-lookup" },
        { title: "Contoh Fungsi Lookup", path: "/contoh-lookup" },
        { title: "Pencarian Fungsi Reference", path: "/pencarian-reference" },
        { title: "Contoh Fungsi Reference", path: "/contoh-reference" },
        { title: "Aktivitas Siswa", path: "/aktivitas-lookup" },
        { title: "Mari Berlatih", path: "/berlatih-lookup" },
        { title: "Rangkuman", path: "/rangkuman-pencarian" },
        { title: "Kuis 1", path: "/petunjuk-pengerjaan-pencarian" },
      ],
    },
    {
      icon: faChartBar,
      title: "Visualisasi Data",
      subItems: [
        { title: "Visualisasi Data", path: "/visualisasi-data" },
        { title: "Contoh Visualisasi Data", path: "/contoh-penerapan-visualisasi-data" },
        { title: "Aktivitas Siswa", path: "/aktivitas-visualisasi" },
        { title: "Mari Berlatih", path: "/berlatih-visualisasi" },
        { title: "Rangkuman", path: "/rangkuman-visualisasi" },
        { title: "Kuis 2", path: "/petunjuk-pengerjaan-visualisasi" },
      ],
    },
    {
      icon: faCompress,
      title: "Peringkasan Data",
      subItems: [
        { title: "Peringkasan Data", path: "/peringkasan-data" },
        { title: "Contoh Peringkasan Data", path: "/penerapan-peringkasan" },
        { title: "Aktivitas Siswa", path: "/aktivitas-peringkasan" },
        { title: "Mari Berlatih", path: "/berlatih-peringkasan" },
        { title: "Rangkuman", path: "/rangkuman-peringkasan" },
        { title: "Kuis 3", path: "/petunjuk-pengerjaan-peringkasan" },
      ],
    },
    {
      icon: faTable,
      title: "Pengelolaan Data",
      subItems: [
        { title: "Sorting & Filtering", path: "/pengelolaan-data" },
        { title: "Contoh Pengelolaan Data", path: "/contoh-pengelolaan" },
        { title: "Aktivitas Siswa", path: "/aktivitas-pengelolaan" },
        { title: "Mari Berlatih", path: "/berlatih-pengelolaan" },
        { title: "Rangkuman", path: "/rangkuman-pengelolaan" },
        { title: "Kuis 4", path: "/petunjuk-pengerjaan-pengelolaan" },
      ],
    },
    {
      icon: faTasks,
      title: "Evaluasi",
      path: "/petunjuk-pengerjaan-evaluasi",
      subItems: [], // Tambahkan subItems kosong untuk konsistensi
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
            {item.subItems?.length > 0 ? (
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
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="sm"
                  className={`transition-transform duration-200 ease-in-out ${
                    openDropdown === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                to={item.path}
                className={`flex items-center w-full p-2 text-gray-700 hover:bg-gray-200 rounded-lg font-normal text-base ${
                  location.pathname === item.path ? "bg-gray-300 font-bold" : ""
                }`}
              >
                <div className="w-6 h-6 bg-[#255F38] text-white rounded-md flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={item.icon} size="sm" />
                </div>
                {item.title}
              </Link>
            )}
            {openDropdown === index && item.subItems?.length > 0 && (
              <ul className="bg-gray-50 rounded-lg mt-2">
                {item.subItems.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm hover:bg-gray-200 cursor-pointer"
                  >
                    <Link
                      to={sub.path}
                      className={`flex items-center gap-2 w-full ${
                        location.pathname === sub.path
                          ? "bg-gray-300 font-bold"
                          : ""
                      }`}
                    >
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
