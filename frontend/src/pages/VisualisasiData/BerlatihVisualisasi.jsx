// import Layout from "../../components/Layout";

// const BerlatihVisualisasi = () => {
//   return (
//     <Layout>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Judul Halaman */}
//         <h1 className="text-xl md:text-2xl sm:text-lg font-bold mb-5 text-center text-green-800">
//           Mari Berlatih Visualisasi Data
//         </h1>

//         {/* Container untuk Instruksi */}
//         <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
//           <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3">
//             💡 Instruksi
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 text-sm md:text-base">
//             <li>Urutkan langkah-langkah yang benar untuk membuat visualisasi data.</li>
//             <li>Isi kolom produk untuk melengkapi data sebelum membuat grafik.</li>
//             <li>Unduh file kemudian kumpulkan pada tempat yang sudah disediakan.</li>
//           </ul>
//         </div>

//         {/* Container untuk Soal Latihan */}
//         <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
//           <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3">
//             ❓ Soal Latihan
//           </h2>
//           <ol className="list-decimal list-inside text-gray-600 text-sm md:text-base">
//             <li>
//               Urutkan langkah acak di bawah ini, lalu isi di dalam tabel yang sudah disediakan:
//               <ul className="list-disc ml-5 mt-2">
//                 <li>Pilih jenis chart yang sesuai, misalnya Bar Chart untuk membandingkan data.</li>
//                 <li>Siapkan data dan pastikan tabel sudah rapi sesuai kategori.</li>
//                 <li>Buat chart dengan memilih menu "Insert" lalu klik jenis chart yang diinginkan.</li>
//                 <li>Periksa apakah chart sudah jelas dan mudah dibaca.</li>
//                 <li>Pilih semua data yang akan dibuat chart.</li>
//               </ul>
//             </li>
//             <li className="mt-3">
//               Isi kolom "Produk" di tabel agar data bisa divisualisasikan dengan lebih jelas.
//             </li>
//           </ol>
//         </div>

//         {/* Zoho Sheet Embed */}
//         <div className="mt-8 bg-white shadow-md rounded-lg p-5 border-2 border-green-800">
//           <div className="flex justify-center">
//             <iframe 
//               width="100%" 
//               height="400" 
//               style={{ border: "1px solid #f3f3f3" }} 
//               frameBorder="0" 
//               scrolling="no" 
//               src="https://sheet.zohopublic.com/sheet/published/cc5ltdf04b9ecd4ab435297b87f7f67bb2d88?mode=embed">
//             </iframe>
//           </div>
//         </div>

//         {/* Tombol Selanjutnya */}
//         <div className="flex justify-end mt-5 sm:mt-7">
//           <a 
//             href="/pencarian-data" 
//             className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base"
//           >
//             Selanjutnya
//           </a>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default BerlatihVisualisasi;


// import React, { useEffect, useRef } from "react";
// import Layout from "../../components/Layout";

// const BerlatihVisualisasi = () => {
//   const spreadsheetRef = useRef(null);

//   useEffect(() => {
//     const loadSyncfusion = async () => {
//       if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
//         const link = document.createElement("link");
//         link.rel = "stylesheet";
//         link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
//         document.head.appendChild(link);
//       }

//       if (!window.ej) {
//         const script = document.createElement("script");
//         script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
//         script.async = true;
//         script.onload = () => initializeSpreadsheet();
//         document.body.appendChild(script);
//       } else {
//         initializeSpreadsheet();
//       }
//     };

//     const initializeSpreadsheet = () => {
//       if (spreadsheetRef.current && !spreadsheetRef.current.dataset.initialized) {
//         spreadsheetRef.current.dataset.initialized = "true";
//         new window.ej.spreadsheet.Spreadsheet({
//           sheets: [
//             {
//               name: "Data Visualisasi",
//               columns: [{ width: 120 }, { width: 150 }, { width: 150 }, { width: 150 }],
//               rows: [
//                 {
//                   cells: [
//                     { value: "Bulan", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
//                     { value: "Produk A (Rp)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
//                     { value: "Produk B (Rp)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
//                     { value: "Produk C (Rp)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
//                   ],
//                 },
//                 { 
//                   cells: [
//                     { value: "Januari", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 4000000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 5500000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 3200000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } } 
//                   ] 
//                 },
//                 { 
//                   cells: [
//                     { value: "Februari", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 5200000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 6000000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 3500000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } } 
//                   ] 
//                 },
//                 { 
//                   cells: [
//                     { value: "Maret", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 5800000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 6700000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 4100000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } } 
//                   ] 
//                 },
//                 { 
//                   cells: [
//                     { value: "April", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 5000000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 6500000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 3900000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } } 
//                   ] 
//                 },
//                 { 
//                   cells: [
//                     { value: "Mei", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 6500000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 7200000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } }, 
//                     { value: 4600000, format: "#,##0", style: { textAlign: "center", border: "1px solid black" } } 
//                   ] 
//                 },
//               ],
              
//             },
//           ],
//         }).appendTo(spreadsheetRef.current);
//       }
//     };

//     loadSyncfusion();
//   }, []);

//   return (
//     <Layout>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-xl md:text-2xl font-bold mb-5 text-center text-green-800">
//           Mari Berlatih Visualisasi Data
//         </h1>

//         <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
//           <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3">
//             📊 Tabel Data Penjualan
//           </h2>
//           <div className="flex justify-center">
//           <div
//   ref={spreadsheetRef}
//   id="spreadsheet"
//   style={{
//     width: "90% !important",
//     maxWidth: "100% !important",
//     height: "600px",
//     marginTop: "30px",
//     marginBottom: "30px",
//     overflow: "auto",
//   }}
// ></div> 
//           </div>
//         </div>

//         <div className="flex justify-end mt-5 sm:mt-7">
//           <a 
//             href="/pencarian-data" 
//             className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base"
//           >
//             Selanjutnya
//           </a>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default BerlatihVisualisasi;

import React, { useEffect, useRef } from "react";
import Layout from "../../components/Materi/Layout";

const BerlatihVisualisasi = () => {
  const spreadsheetRef = useRef(null);

  useEffect(() => {
    const loadSyncfusion = async () => {
      // Cek apakah CSS sudah dimuat
      if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
        document.head.appendChild(link);
      }

      // Cek apakah script sudah ada
      if (!window.ej) {
        const script = document.createElement("script");
        script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
        script.async = true;
        script.onload = () => initializeSpreadsheet();
        document.body.appendChild(script);
      } else {
        initializeSpreadsheet();
      }
    };

    const initializeSpreadsheet = () => {
      console.log("Inisialisasi Spreadsheet...");

      if (spreadsheetRef.current && !spreadsheetRef.current.dataset.initialized) {
        spreadsheetRef.current.dataset.initialized = "true";

        const spreadsheet = new window.ej.spreadsheet.Spreadsheet({
          sheets: [
            {
              name: "Data Visualisasi",
              columns: [
                { width: 120 },
                { width: 150 },
                { width: 150 },
                { width: 150 },
              ],
              rows: [
                {
                  cells: [
                    { value: "Bulan", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
                    { value: "Produk A (Rp)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
                    { value: "Produk B (Rp)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
                    { value: "Produk C (Rp)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
                  ],
                },
                { cells: [{ value: "Januari" }, { value: 4000000 }, { value: 5500000 }, { value: 3200000 }] },
                { cells: [{ value: "Februari" }, { value: 5200000 }, { value: 6000000 }, { value: 3500000 }] },
                { cells: [{ value: "Maret" }, { value: 5800000 }, { value: 6700000 }, { value: 4100000 }] },
                { cells: [{ value: "April" }, { value: 5000000 }, { value: 6500000 }, { value: 3900000 }] },
                { cells: [{ value: "Mei" }, { value: 6500000 }, { value: 7200000 }, { value: 4600000 }] },
              ],
            },
          ],
        });

        spreadsheet.appendTo(spreadsheetRef.current);
      }
    };

    loadSyncfusion();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl md:text-2xl font-bold mb-5 text-center text-green-800">
          Mari Berlatih Visualisasi Data
        </h1>

        <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3">
            📊 Tabel Data Penjualan
          </h2>

          <div className="flex justify-center">
            <div
              ref={spreadsheetRef}
              id="spreadsheet"
              style={{
                width: "80%",
                maxWidth: "800px",
                height: "600px",
                marginTop: "30px",
                marginBottom: "30px",
                overflow: "auto",
              }}
            />
          </div>
        </div>

        <div className="flex justify-end mt-5 sm:mt-7">
          <a 
            href="/pencarian-data" 
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base"
          >
            Selanjutnya
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default BerlatihVisualisasi;
