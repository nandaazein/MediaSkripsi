import React, { useEffect, useRef } from "react";
import Layout from "../../components/Materi/Layout";

const Berlatih = () => {
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
              name: "Data Karyawan",
              columns: Array(4).fill({ width: 150 }),
              rows: [
                {
                  cells: [
                    { value: "Nama Karyawan", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
                    { value: "Jabatan", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
                    { value: "Lama Bekerja (Tahun)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
                    { value: "Gaji (Rp)", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center", border: "1px solid black" } },
                  ],
                },
                ...[
                  ["Andi", "Manajer", 6, "15,000,000"],
                  ["Budi", "Staf", 4, "8,000,000"],
                  ["Citra", "Manajer", 3, "14,500,000"],
                  ["Dewi", "Supervisor", 7, "12,000,000"],
                  ["Eko", "Manajer", 8, "16,000,000"],
                  ["Fajar", "Staf", 6, "9,000,000"],
                  ["Gina", "Manajer", 10, "17,000,000"],
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
            📊 Tabel Data Karyawan
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

export default Berlatih;
