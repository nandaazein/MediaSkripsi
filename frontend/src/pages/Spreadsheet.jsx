import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SyncfusionSpreadsheet = () => {
  useEffect(() => {
    // cek dan menambahkan stylesheet
    if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
      document.head.appendChild(link);
    }

    // cek dan menambahkan script
    if (!document.querySelector('script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
      script.async = true;
      script.onload = () => {
       
        new window.ej.spreadsheet.Spreadsheet({
          sheets: [
            {
              name: "Sheet1",
              columns: [{ width: 50 }, { width: 150 }, { width: 100 }],
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
            Spreadsheet ini memberikan tampilan yang memungkinkan untuk belajar bagaimana melakukan pencarian data, peringkasan data, dan analisis lainnya.
          </p>

          {/* Spreadsheet */}
          <div
            id="spreadsheet"
            style={{
              width: "80%", 
              height: "800px", 
              marginTop: "30px", 
              marginBottom: "50px", 
              marginLeft: "auto", 
              marginRight: "auto", 
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SyncfusionSpreadsheet;


