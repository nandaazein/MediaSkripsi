import React, { useEffect, useRef } from "react";
import Layout from "../../components/Materi/Layout";

const BerlatihPengelolaan = () => {
  const spreadsheetRef = useRef(null);

  useEffect(() => {
    const loadSyncfusion = async () => {
      if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
        document.head.appendChild(link);
      }

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
      if (spreadsheetRef.current && !spreadsheetRef.current.dataset.initialized) {
        spreadsheetRef.current.dataset.initialized = "true";
        new window.ej.spreadsheet.Spreadsheet({
          sheets: [
            {
              name: "Data Siswa",
              columns: Array(5).fill({ width: 120 }),
              rows: [
                {
                  cells: [
                    { value: "Nama Siswa", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
                    { value: "Kelas", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
                    { value: "Nilai Ujian", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
                    { value: "Kehadiran (%)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
                    { value: "Ekstrakurikuler", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
                  ],
                },
                ...[
                  ["Aisyah", "8A", 85, 95, "Basket"],
                  ["Budi", "8B", 70, 80, "Paduan Suara"],
                  ["Citra", "8A", 90, 100, "Robotik"],
                  ["Dani", "8B", 75, 85, "Sepak Bola"],
                  ["Eko", "8A", 80, 90, "Basket"],
                  ["Farah", "8A", 88, 92, "Pencak Silat"],
                  ["Guntur", "8B", 78, 88, "Robotik"],
                  ["Hana", "8A", 91, 96, "Paduan Suara"],
                  ["Indra", "8B", 83, 89, "Sepak Bola"],
                  ["Joko", "8A", 87, 94, "Basket"],
                ].map(row => ({
                  cells: row.map(value => ({ value, style: { textAlign: "center", border: "1px solid black" } }))
                })),
              ],
            },
          ],
        }).appendTo(spreadsheetRef.current);
      }
    };

    loadSyncfusion();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl md:text-2xl font-bold mb-5 text-center text-green-800">
          Mari Berlatih Pengelolaan Data
        </h1>

        <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3">
            📊 Tabel Data Siswa
          </h2>
          <div className="flex justify-center">
            <div
              ref={spreadsheetRef}
              id="spreadsheet"
              style={{
                width: "90%",
                height: "600px",
                marginTop: "30px",
                marginBottom: "30px",
                overflow: "auto",
              }}
            ></div>
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

export default BerlatihPengelolaan;
