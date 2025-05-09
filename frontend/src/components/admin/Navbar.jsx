// import React from "react";
// import { UserCircle } from "lucide-react";

// export const Navbar = () => {
//   return (
//     <nav className="bg-gray-100 shadow-md  border-[#255F38] w-full p-4 flex justify-between items-center sticky top-0 z-50">
//       <h1 className="text-xl font-bold ml-10" style={{ color: "#255F38" }}>AnalyticsLearn</h1>
//       <div className="flex items-center space-x-4">
//         <span style={{ color: "#255F38" }}>Halo, Difana</span>
//         <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//           <UserCircle size={32} className="text-[#255F38]" /> 
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [teacherName, setTeacherName] = useState("Guru");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setTeacherName(user.fullName || "Guru");
      } catch (error) {
        console.error("Error parsing user data:", error);
        navigate("/login-guru");
      }
    } else {
      navigate("/login-guru");
    }
  }, [navigate]);

  return (
    <nav className="bg-gray-100 shadow-md border-[#255F38] w-full p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold ml-10" style={{ color: "#255F38" }}>
        AnalyticsLearn
      </h1>
      <div className="flex items-center space-x-4">
        <span style={{ color: "#255F38" }}>Halo, {teacherName}</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <UserCircle size={32} className="text-[#255F38]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;