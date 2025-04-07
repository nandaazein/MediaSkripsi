import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import bar from "../../assets/Visualisasi/bar.png";
import line from "../../assets/Visualisasi/line.png";
import pie from "../../assets/Visualisasi/pie.png";

const AktivitasVisualisasiGambar = () => {
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [jawaban1, setJawaban1] = useState("");
  const [jawaban2, setJawaban2] = useState("");
  const [jawaban3, setJawaban3] = useState("");
  const [isTouched1, setIsTouched1] = useState(false);
  const [isTouched2, setIsTouched2] = useState(false);
  const [isTouched3, setIsTouched3] = useState(false);

  const jawabanBenar = {
    satu: "line chart",
    dua: "bar chart",
    tiga: "pie chart",
  };

  const isCorrect = (input, correct) => input.trim().toLowerCase() === correct;

  const semuaBenar =
    isCorrect(jawaban1, jawabanBenar.satu) &&
    isCorrect(jawaban2, jawabanBenar.dua) &&
    isCorrect(jawaban3, jawabanBenar.tiga);

  const handleChoice = (choice) => {
    setSelected(choice);
    if (choice === "line") {
      setFeedback("✅ Benar! Grafik garis (line chart) menunjukkan perubahan dari waktu ke waktu.");
    } else {
      setFeedback("❌ Salah. Grafik tersebut kurang tepat untuk menunjukkan perubahan dari waktu ke waktu.");
    }
  };

  useEffect(() => {
    if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
      document.head.appendChild(link);
    }

    if (!document.querySelector('script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
      script.async = true;
      script.onload = () => {
        if (window.ej && window.ej.spreadsheet && !document.querySelector("#spreadsheet .e-spreadsheet")) {
          new window.ej.spreadsheet.Spreadsheet({
            sheets: [
              {
                name: "Sheet1",
                columns: [
                  { width: 120 },
                  { width: 150 },
                ],
                rows: [
                  {
                    cells: [
                      {
                        value: "Bulan",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Penjualan (Unit)",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                    ],
                  },
                  { cells: [{ value: "Januari", style: { textAlign: "center" } }, { value: 50, style: { textAlign: "center" } }] },
                  { cells: [{ value: "Februari", style: { textAlign: "center" } }, { value: 60, style: { textAlign: "center" } }] },
                  { cells: [{ value: "Maret", style: { textAlign: "center" } }, { value: 55, style: { textAlign: "center" } }] },
                  { cells: [{ value: "April", style: { textAlign: "center" } }, { value: 70, style: { textAlign: "center" } }] },
                ],
              },
            ],
          }).appendTo("#spreadsheet");
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Layout>
      <h1 className="text-xl md:text-2xl text-center font-bold mb-6 p-4 bg-[#255F38] text-white">
        Aktivitas Siswa
      </h1>

      <div className="p-4">
        <p className="mb-4 text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
          1. Seorang pemilik toko ingin melihat <span className="font-bold text-red-600">perubahan penjualan produk selama 4 bulan</span>. Grafik mana yang paling tepat digunakan?
        </p>

        <div className="w-full flex justify-center px-4 mb-5">
          <div
            id="spreadsheet"
            className="w-full max-w-full md:max-w-screen-md"
            style={{ height: "600px" }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div
            className={`border-4 rounded-xl p-2 cursor-pointer ${selected === "bar" ? "border-red-400" : "border-gray-200"}`}
            onClick={() => handleChoice("bar")}
          >
            <img src={bar} alt="Bar Chart" className="rounded-lg" />
            <p className="text-center mt-2 font-semibold text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">Bar</p>
          </div>

          <div
            className={`border-4 rounded-xl p-2 cursor-pointer ${selected === "line" ? "border-green-500" : "border-gray-200"}`}
            onClick={() => handleChoice("line")}
          >
            <img src={line} alt="Line Chart" className="rounded-lg" />
            <p className="text-center mt-2 font-semibold text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">Line</p>
          </div>

          <div
            className={`border-4 rounded-xl p-2 cursor-pointer ${selected === "pie" ? "border-red-400" : "border-gray-200"}`}
            onClick={() => handleChoice("pie")}
          >
            <img src={pie} alt="Pie Chart" className="rounded-lg" />
            <p className="text-center mt-2 font-semibold text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">Pie</p>
          </div>
        </div>

        {feedback && (
          <div className="mt-6 text-lg font-semibold text-center text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
            {feedback}
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="mb-4 text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
          2. Pilih <span className="font-bold text-red-600">jenis grafik</span> yang paling sesuai untuk menyajikan data pada <span className="italic">setiap situasi</span> berikut:
        </p>

        <div className="overflow-x-auto px-4">
          <table className="table-auto w-full border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-4 py-2 text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">Situasi</th>
                <th className="border border-gray-400 px-4 py-2 text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">Jenis Grafik yang Sesuai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2 text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
                  Perubahan jumlah penjualan Toko A selama lima bulan terakhir.
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1"
                    value={jawaban1}
                    onChange={(e) => setJawaban1(e.target.value)}
                    onBlur={() => setIsTouched1(true)}
                  />
                  {isTouched1 && jawaban1 && (
                    <div className={`mt-1 text-sm ${isCorrect(jawaban1, jawabanBenar.satu) ? "text-green-600" : "text-red-600"}`}>
                      {isCorrect(jawaban1, jawabanBenar.satu) ? "✅ Benar" : "❌ Salah"}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
                  Perbandingan jumlah barang terjual dari tiga cabang toko.
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1"
                    value={jawaban2}
                    onChange={(e) => setJawaban2(e.target.value)}
                    onBlur={() => setIsTouched2(true)}
                  />
                  {isTouched2 && jawaban2 && (
                    <div className={`mt-1 text-sm ${isCorrect(jawaban2, jawabanBenar.dua) ? "text-green-600" : "text-red-600"}`}>
                      {isCorrect(jawaban2, jawabanBenar.dua) ? "✅ Benar" : "❌ Salah"}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
                  Persentase penjualan dari setiap kategori produk.
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1"
                    value={jawaban3}
                    onChange={(e) => setJawaban3(e.target.value)}
                    onBlur={() => setIsTouched3(true)}
                  />
                  {isTouched3 && jawaban3 && (
                    <div className={`mt-1 text-sm ${isCorrect(jawaban3, jawabanBenar.tiga) ? "text-green-600" : "text-red-600"}`}>
                      {isCorrect(jawaban3, jawabanBenar.tiga) ? "✅ Benar" : "❌ Salah"}
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <button
            className={`px-6 py-2 text-white rounded font-semibold ${
              semuaBenar ? "bg-[#255F38]" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!semuaBenar}
            onClick={() => {
              window.location.href = "berlatih-visualisasi"; // Ganti sesuai rute kamu
            }}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AktivitasVisualisasiGambar;