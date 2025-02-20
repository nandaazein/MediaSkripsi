

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "../components/NavbarMateri/Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar open={open} setOpen={setOpen} />
        
        {/* Main Content */}
        <div
          className={`flex-1 overflow-y-auto transition-all duration-300 p-10 ${open ? "ml-64 " : "ml-20"}`}
        >
          
          <div className="p-7 text-lg">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// export default Layout;

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "../components/NavbarMateri/Navbar";
// import Footer from "./Footer";

// const Layout = ({ children }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar open={open} setOpen={setOpen} />
        
//         {/* Main Content */}
//         <div
//           className={`flex-1 overflow-y-auto transition-all duration-300 p-10 ${
//             open ? "ml-64" : "ml-20"
//           }`}
//         >
//           <div className="p-7 text-lg">{children}</div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

export default Layout;
