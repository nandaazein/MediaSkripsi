// import React, { useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const SyncfusionSpreadsheet = () => {
//   useEffect(() => {
//     // cek dan menambahkan stylesheet
//     if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
//       document.head.appendChild(link);
//     }

//     // cek dan menambahkan script
//     if (!document.querySelector('script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]')) {
//       const script = document.createElement("script");
//       script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
//       script.async = true;
//       script.onload = () => {
       
//         new window.ej.spreadsheet.Spreadsheet({
//           sheets: [
//             {
//               name: "Sheet1",
//               columns: [{ width: 50 }, { width: 150 }, { width: 100 }],
//             },
//           ],
//         }).appendTo("#spreadsheet");
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8" style={{ paddingTop: "100px" }}>
//         <h1 className="text-3xl font-bold text-[#214C1E] mb-6 text-center">
//           Spreadsheet
//         </h1>

       
//         <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//           <p className="text-center text-gray-700 mb-6">
//             Halaman ini digunakan untuk mempelajari analisis data. 
//             Di sini, Anda akan belajar bagaimana memanfaatkan spreadsheet untuk mengelola dan menganalisis data. 
//             Pada halaman ini, Anda dapat melihat bagaimana spreadsheet digunakan untuk menganalisis data menggunakan berbagai fungsi. 
//             Spreadsheet ini memberikan tampilan yang memungkinkan untuk belajar bagaimana melakukan pencarian data, peringkasan data, dan analisis lainnya.
//           </p>

//           {/* Spreadsheet */}
//           <div
//             id="spreadsheet"
//             style={{
//               width: "80%", 
//               height: "800px", 
//               marginTop: "30px", 
//               marginBottom: "50px", 
//               marginLeft: "auto", 
//               marginRight: "auto", 
//             }}
//           ></div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SyncfusionSpreadsheet;

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SyncfusionSpreadsheet = () => {
  useEffect(() => {
    // Tambah stylesheet jika belum ada
    if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
      document.head.appendChild(link);
    }

    // Tambah script jika belum ada
    if (!document.querySelector('script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
      script.async = true;
      script.onload = () => {
        new window.ej.spreadsheet.Spreadsheet({
          sheets: [
            {
              name: "Sheet1",
              columns: [
                { width: 150 },
                { width: 200 },
                { width: 250 },
              ],
              rows: [
                {
                  cells: [
                    { value: "Bulan", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen" } },
                    { value: "Penjualan (Rp)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen" } },
                    { value: "Rata-rata Pembelian per Transaksi", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen" } },
                  ],
                },
                { cells: [{ value: "Januari" }, { value: 5000000, format: "#,##0" }, { value: 20000, format: "#,##0.00" }] },
                { cells: [{ value: "Februari" }, { value: 6500000, format: "#,##0" }, { value: 21667, format: "#,##0.00" }] },
                { cells: [{ value: "Maret" }, { value: 7000000, format: "#,##0" }, { value: 21875, format: "#,##0.00" }] },
                { cells: [{ value: "April" }, { value: 6200000, format: "#,##0" }, { value: 21379, format: "#,##0.00" }] },
                { cells: [{ value: "Mei" }, { value: 8000000, format: "#,##0" }, { value: 22857, format: "#,##0.00" }] },
              ],
            },
          ],
        }).appendTo("#spreadsheet");
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8" style={{ paddingTop: "100px" }}>
        <h1 className="text-3xl font-bold text-[#214C1E] mb-6 text-center">
          Spreadsheet
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <p className="text-center text-gray-700 mb-6">
            Halaman ini digunakan untuk mempelajari analisis data. 
            Di sini, Anda akan belajar bagaimana memanfaatkan spreadsheet untuk mengelola dan menganalisis data. 
            Pada halaman ini, Anda dapat melihat bagaimana spreadsheet digunakan untuk menganalisis data menggunakan berbagai fungsi.
          </p>

          {/* Spreadsheet container */}
          <div id="spreadsheet" style={{ height: "600px" }}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SyncfusionSpreadsheet;
