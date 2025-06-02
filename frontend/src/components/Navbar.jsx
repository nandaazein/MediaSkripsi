import React, { useEffect, useState } from "react";
import { UserCircle, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Navbar = () => {
  const [studentName, setStudentName] = useState("Siswa");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setStudentName(user.fullName || "Siswa");
      } catch (error) {
        console.error("Error parsing user data:", error);
        navigate("/login-siswa");
      }
    } else {
      navigate("/login-siswa");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Tampilkan SweetAlert2 untuk notifikasi logout
    Swal.fire({
      title: "Berhasil Logout",
      text: "Anda telah berhasil logout dari sistem.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#255F38",
    }).then(() => {
      // Clear authentication data from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Redirect to student login page
      navigate("/");
    });
  };

  const handleDashboard = () => {
    // Redirect to dashboard
    navigate("/home");
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-100 shadow-md border-[#255F38] w-full p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold ml-10" style={{ color: "#255F38" }}>
        AnalyticsLearn
      </h1>
      <div className="flex items-center space-x-4 relative">
        <span style={{ color: "#255F38" }}>Halo, {studentName}</span>
        <div className="relative">
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <UserCircle size={32} className="text-[#255F38]" />
            </div>
            <ChevronDown
              size={20}
              className={`text-[#255F38] transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ">
              <button
                onClick={handleDashboard}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg cursor-pointer"
              >
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;