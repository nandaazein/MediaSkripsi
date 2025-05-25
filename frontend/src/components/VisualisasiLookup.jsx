import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function VisualisasiLookup() {
  // State untuk toggle antara VLOOKUP dan HLOOKUP
  const [activeLookup, setActiveLookup] = useState("VLOOKUP");

  // State untuk VLOOKUP
  const [vlookupValue, setVlookupValue] = useState("");
  const [vCurrentIndex, setVCurrentIndex] = useState(-1);
  const [vResult, setVResult] = useState("");
  const [vStepExplanation, setVStepExplanation] = useState("");
  const [vSearching, setVSearching] = useState(false);
  const [vResultTable, setVResultTable] = useState([
    { code: "A0001", name: "" },
    { code: "A0002", name: "" },
    { code: "A0003", name: "" },
  ].sort((a, b) => a.code.localeCompare(b.code)));

  const vReferenceData = [
    { code: "A0001", name: "Laptop", price: 8500000 },
    { code: "A0002", name: "Printer", price: 2000000 },
    { code: "A0003", name: "Mouse", price: 150000 },
  ];

  // State untuk HLOOKUP
  const [hLookupValue, setHLookupValue] = useState("");
  const [hCurrentIndex, setHCurrentIndex] = useState(-1);
  const [hResult, setHResult] = useState("");
  const [hStepExplanation, setHStepExplanation] = useState("");
  const [hSearching, setHSearching] = useState(false);
  const [hResultTable, setHResultTable] = useState([
    { day: "Senin", point: "" },
    { day: "Selasa", point: "" },
    { day: "Rabu", point: "" },
  ].sort((a, b) => a.day.localeCompare(b.day)));

  const hReferenceData = [
    { label: "Hari", Senin: "Senin", Selasa: "Selasa", Rabu: "Rabu" },
    { label: "Poin", Senin: "10", Selasa: "20", Rabu: "15" },
  ];

  // Fungsi untuk VLOOKUP
  const startVLOOKUP = () => {
    if (!vlookupValue) {
      setVResult("Masukkan kode barang terlebih dahulu!");
      return;
    }
    setVSearching(true);
    setVCurrentIndex(0);
    setVResult("");
    setVStepExplanation(`Memulai pencarian kode ${vlookupValue}...`);
    setVResultTable(vResultTable.map((row) => ({ ...row, name: "" })));
  };

  const resetVLOOKUP = () => {
    setVlookupValue("");
    setVCurrentIndex(-1);
    setVResult("");
    setVStepExplanation("");
    setVSearching(false);
    setVResultTable([
      { code: "A0001", name: "" },
      { code: "A0002", name: "" },
      { code: "A0003", name: "" },
    ].sort((a, b) => a.code.localeCompare(b.code)));
  };

  useEffect(() => {
    let interval;
    if (vSearching && vCurrentIndex >= 0 && vCurrentIndex < vReferenceData.length) {
      interval = setInterval(() => {
        const currentCode = vReferenceData[vCurrentIndex].code;
        setVStepExplanation(`Mencocokkan kode ${vlookupValue} dengan ${currentCode} di baris ${vCurrentIndex + 1}...`);

        if (currentCode === vlookupValue) {
          const matchedName = vReferenceData[vCurrentIndex].name;
          setVResultTable((prev) =>
            prev.map((row) =>
              row.code === vlookupValue ? { ...row, name: matchedName } : row
            )
          );
          setVResult(`Ditemukan: ${matchedName}`);
          setVStepExplanation(`Kode ${vlookupValue} ditemukan! Nama barang: ${matchedName}`);
          setVSearching(false);
          clearInterval(interval);
        } else if (vCurrentIndex === vReferenceData.length - 1) {
          setVResult("Tidak ditemukan");
          setVStepExplanation(`Kode ${vlookupValue} tidak ditemukan dalam tabel referensi.`);
          setVSearching(false);
          clearInterval(interval);
        } else {
          setVCurrentIndex((prev) => prev + 1);
        }
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [vSearching, vCurrentIndex, vlookupValue]);

  // Fungsi untuk HLOOKUP
  const startHLOOKUP = () => {
    if (!hLookupValue) {
      setHResult("Masukkan nama hari terlebih dahulu!");
      return;
    }
    setHSearching(true);
    setHCurrentIndex(0);
    setHResult("");
    setHStepExplanation(`Memulai pencarian hari ${hLookupValue}...`);
    setHResultTable(hResultTable.map((row) => ({ ...row, point: "" })));
  };

  const resetHLOOKUP = () => {
    setHLookupValue("");
    setHCurrentIndex(-1);
    setHResult("");
    setHStepExplanation("");
    setHSearching(false);
    setHResultTable([
      { day: "Senin", point: "" },
      { day: "Selasa", point: "" },
      { day: "Rabu", point: "" },
    ].sort((a, b) => a.day.localeCompare(b.day)));
  };

  useEffect(() => {
    let interval;
    if (hSearching && hCurrentIndex >= 0 && hCurrentIndex < Object.keys(hReferenceData[0]).length - 1) {
      interval = setInterval(() => {
        const currentDay = hReferenceData[0][Object.keys(hReferenceData[0])[hCurrentIndex + 1]];
        setHStepExplanation(`Mencocokkan hari ${hLookupValue} dengan ${currentDay} di kolom ${hCurrentIndex + 1}...`);

        if (currentDay === hLookupValue) {
          const matchedPoint = hReferenceData[1][Object.keys(hReferenceData[1])[hCurrentIndex + 1]];
          setHResultTable((prev) =>
            prev.map((row) =>
              row.day === hLookupValue ? { ...row, point: matchedPoint } : row
            )
          );
          setHResult(`Ditemukan: ${matchedPoint}`);
          setHStepExplanation(`Hari ${hLookupValue} ditemukan! Poin: ${matchedPoint}`);
          setHSearching(false);
          clearInterval(interval);
        } else if (hCurrentIndex === Object.keys(hReferenceData[0]).length - 2) {
          setHResult("Tidak ditemukan");
          setHStepExplanation(`Hari ${hLookupValue} tidak ditemukan dalam tabel referensi.`);
          setHSearching(false);
          clearInterval(interval);
        } else {
          setHCurrentIndex((prev) => prev + 1);
        }
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [hSearching, hCurrentIndex, hLookupValue]);

  return (
    <Layout>
      <div className="p-4 sm:p-6 bg-[#255F38] text-white font-bold text-lg md:text-xl text-center rounded-lg shadow-lg">
        Visualisasi Interaktif VLOOKUP dan HLOOKUP
      </div>

      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md mt-4 sm:mt-6">
        <h2 className="font-semibold text-[#255F38] text-base md:text-lg">
          Simulasi Interaktif Pencarian Data
        </h2>
        <p className="text-gray-700 text-sm md:text-base text-justify mt-2">
          Gunakan simulasi berikut untuk memahami cara kerja VLOOKUP dan HLOOKUP. Pilih antara VLOOKUP atau HLOOKUP, masukkan nilai yang sesuai, dan lihat proses pencarian data dengan tabel referensi dan hasil yang ditampilkan.
        </p>

        {/* Tombol Toggle */}
        <div className="flex space-x-4 mt-4 mb-4">
          <button
            onClick={() => setActiveLookup("VLOOKUP")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              activeLookup === "VLOOKUP"
                ? "bg-[#255F38] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            VLOOKUP
          </button>
          <button
            onClick={() => setActiveLookup("HLOOKUP")}
            className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
              activeLookup === "HLOOKUP"
                ? "bg-[#255F38] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            HLOOKUP
          </button>
        </div>

        {/* Visualisasi VLOOKUP */}
        {activeLookup === "VLOOKUP" && (
          <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-[#255F38] text-base md:text-lg mb-2">
              VLOOKUP: Pencarian Kode Barang
            </h3>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <input
                type="text"
                value={vlookupValue}
                onChange={(e) => setVlookupValue(e.target.value)}
                placeholder="Masukkan kode (contoh: A0002)"
                className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#255F38]"
              />
              <button
                onClick={startVLOOKUP}
                className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
              >
                Mulai
              </button>
              <button
                onClick={resetVLOOKUP}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
              >
                Reset
              </button>
            </div>

            {/* Alur Kerja */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
              <span className="text-sm font-medium text-gray-700">1. Input Kode</span>
              <span className="text-xl hidden sm:inline text-[#255F38]">→</span>
              <span className="text-sm font-medium text-gray-700">2. Cari di Tabel Referensi</span>
              <span className="text-xl hidden sm:inline text-[#255F38]">→</span>
              <span className="text-sm font-medium text-gray-700">3. Tampilkan di Tabel Hasil</span>
            </div>

            {/* Narasi Langkah */}
            <div className="mt-4 p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Langkah Pencarian:</strong>{" "}
                {vStepExplanation || "Masukkan kode barang dan klik Mulai untuk melihat proses pencarian."}
              </p>
            </div>

            {/* Tabel Referensi */}
            <h4 className="font-semibold text-[#255F38] mt-6 text-base md:text-lg">Tabel Referensi</h4>
            <div className="overflow-x-auto w-full">
              <table className="border-collapse border border-green-800 w-full mt-2">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Kode Barang</th>
                    <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Nama Barang</th>
                    <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {vReferenceData.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-green-50" : "bg-white"
                      } ${
                        vCurrentIndex === index && vSearching ? "bg-yellow-200 animate-pulse" : ""
                      } ${
                        !vSearching && item.code === vlookupValue ? "bg-green-200" : ""
                      }`}
                    >
                      <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{item.code}</td>
                      <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{item.name}</td>
                      <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tabel Hasil */}
            <h4 className="font-semibold text-[#255F38] mt-6 text-base md:text-lg">Tabel Hasil</h4>
            <div className="overflow-x-auto w-full">
              <table className="border-collapse border border-green-800 w-full mt-2">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Kode Barang</th>
                    <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Nama Barang</th>
                  </tr>
                </thead>
                <tbody>
                  {vResultTable.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-green-50" : "bg-white"
                      } ${
                        row.code === vlookupValue && row.name ? "bg-green-200" : ""
                      }`}
                    >
                      <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.code}</td>
                      <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.name || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mt-4 text-sm md:text-base">
              <strong>Hasil:</strong>{" "}
              {vResult || (vSearching ? "Mencari..." : "Masukkan kode dan klik Mulai")}
            </p>
          </div>
        )}

        {/* Visualisasi HLOOKUP */}
        {activeLookup === "HLOOKUP" && (
          <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-[#255F38] text-base md:text-lg mb-2">
              HLOOKUP: Pencarian Poin Berdasarkan Hari
            </h3>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <input
                type="text"
                value={hLookupValue}
                onChange={(e) => setHLookupValue(e.target.value)}
                placeholder="Masukkan hari (contoh: Senin)"
                className="p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#255F38]"
              />
              <button
                onClick={startHLOOKUP}
                className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
              >
                Mulai
              </button>
              <button
                onClick={resetHLOOKUP}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
              >
                Reset
              </button>
            </div>

            {/* Alur Kerja */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
              <span className="text-sm font-medium text-gray-700">1. Input Hari</span>
              <span className="text-xl hidden sm:inline text-[#255F38]">→</span>
              <span className="text-sm font-medium text-gray-700">2. Cari di Tabel Referensi</span>
              <span className="text-xl hidden sm:inline text-[#255F38]">→</span>
              <span className="text-sm font-medium text-gray-700">3. Tampilkan di Tabel Hasil</span>
            </div>

            {/* Narasi Langkah */}
            <div className="mt-4 p-3 bg-gray-100 rounded-lg">
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Langkah Pencarian:</strong>{" "}
                {hStepExplanation || "Masukkan nama hari dan klik Mulai untuk melihat proses pencarian."}
              </p>
            </div>

            {/* Tabel Referensi */}
            <h4 className="font-semibold text-[#255F38] mt-6 text-base md:text-lg">Tabel Referensi</h4>
            <div className="overflow-x-auto w-full">
              <table className="border-collapse border border-green-800 w-full mt-2">
                <tbody>
                  {hReferenceData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
                    >
                      <td className="border border-green-600 px-4 py-2 bg-[#255F38] text-white whitespace-nowrap">{row.label}</td>
                      {Object.keys(row).slice(1).map((day, colIndex) => (
                        <td
                          key={colIndex}
                          className={`border border-green-600 px-4 py-2 whitespace-nowrap ${
                            hCurrentIndex === colIndex && hSearching ? "bg-yellow-200 animate-pulse" : ""
                          } ${
                            !hSearching && rowIndex === 0 && row[day] === hLookupValue ? "bg-green-200" : ""
                          }`}
                        >
                          {row[day]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tabel Hasil */}
            <h4 className="font-semibold text-[#255F38] mt-6 text-base md:text-lg">Tabel Hasil</h4>
            <div className="overflow-x-auto w-full">
              <table className="border-collapse border border-green-800 w-full mt-2">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Hari</th>
                    <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Poin</th>
                  </tr>
                </thead>
                <tbody>
                  {hResultTable.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-green-50" : "bg-white"
                      } ${
                        row.day === hLookupValue && row.point ? "bg-green-200" : ""
                      }`}
                    >
                      <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.day}</td>
                      <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.point || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mt-4 text-sm md:text-base">
              <strong>Hasil:</strong>{" "}
              {hResult || (hSearching ? "Mencari..." : "Masukkan hari dan klik Mulai")}
            </p>
          </div>
        )}
      </section>

      <div className="flex justify-between items-center px-4 sm:px-6 py-4 mt-6">
        <a
          href="/pencarian-lookup"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px]"
        >
          ← Kembali
        </a>
      </div>
    </Layout>
  );
}