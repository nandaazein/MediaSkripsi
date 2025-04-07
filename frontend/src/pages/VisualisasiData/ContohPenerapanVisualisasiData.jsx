import Layout from "../../components/Layout";
import { useEffect } from "react";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";
import chart from "../../assets/Visualisasi/chart.png";
import switchh from "../../assets/Visualisasi/switchh.png";

const ContohPenerapanVisualisasiData = () => {
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
        if (window.ej && window.ej.spreadsheet && !document.querySelector("#spreadsheet .e-spreadsheet")) {
          new window.ej.spreadsheet.Spreadsheet({
            sheets: [
              {
                name: "Sheet1",
                columns: [
                  { width: 80 },
                  { width: 120 },
                  { width: 220 },
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
                        value: "Penjualan (Rp)",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Rata-rata Pembelian per Transaksi",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Januari", style: { textAlign: "center" } },
                      { value: 5000000, format: "#,##0", style: { textAlign: "center" } },
                      { value: 20000, format: "#,##0.00", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Februari", style: { textAlign: "center" } },
                      { value: 6500000, format: "#,##0", style: { textAlign: "center" } },
                      { value: 21667, format: "#,##0.00", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Maret", style: { textAlign: "center" } },
                      { value: 7000000, format: "#,##0", style: { textAlign: "center" } },
                      { value: 21875, format: "#,##0.00", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "April", style: { textAlign: "center" } },
                      { value: 6200000, format: "#,##0", style: { textAlign: "center" } },
                      { value: 21379, format: "#,##0.00", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Mei", style: { textAlign: "center" } },
                      { value: 8000000, format: "#,##0", style: { textAlign: "center" } },
                      { value: 22857, format: "#,##0.00", style: { textAlign: "center" } },
                    ],
                  },
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
      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white">
        Contoh Penerapan Visualisasi Data
      </h1>

      {/* Paragraf Penjelasan di Luar Section */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Toko A ingin mengetahui tren penjualan mereka selama lima bulan
        terakhir. Mereka telah mencatat total penjualan setiap bulan dalam
        tabel, tetapi sulit untuk melihat apakah penjualan meningkat atau
        menurun hanya dengan membaca angka. Untuk memudahkan analisis, pemilik
        toko ingin menampilkan data ini dalam bentuk Diagram Garis (Line Chart)
        menggunakan spreadsheet. Dengan grafik ini, mereka dapat dengan cepat
        memahami apakah bisnis mereka berkembang atau mengalami penurunan.
      </p>

      {/* Tabel Data Penjualan */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">
          Tabel 1. Data Penjualan Toko A
        </p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Bulan</th>
              <th className="border border-green-600 px-4 py-2">
                Penjualan (Rp)
              </th>
              <th className="border border-green-600 px-4 py-2">
                Rata-rata Pembelian per Transaksi
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Januari", 5000000, 20000],
              ["Februari", 6500000, 21667],
              ["Maret", 7000000, 21875],
              ["April", 6200000, 21379],
              ["Mei", 8000000, 22857],
            ].map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
              >
                {row.map((cell, i) => (
                  <td key={i} className="border border-green-600 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Penyelesaian dengan Computational Thinking */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan{" "}
        <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li className="list-none -ml-6">
            Sebelum membuat grafik, kita perlu membagi masalah menjadi
            langkah-langkah kecil:
          </li>
          <li>Mengumpulkan data penjualan per bulan dalam bentuk tabel.</li>
          <li>
            Menentukan jenis grafik yang sesuai untuk menampilkan tren perubahan
            penjualan.
          </li>
          <li>
            Menggunakan spreadsheet untuk membuat grafik otomatis dan
            mempermudah analisis.
          </li>
        </ul>
      </div>

      {/* Pengenalan Pola */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Jika penjualan meningkat, garis grafik akan bergerak naik.</li>
          <li>Jika penjualan menurun, garis grafik akan turun.</li>
          <li>
            Jika terdapat penjualan naik dan turun, grafik akan berbentuk
            bergelombang.
          </li>
          <li>
            Diagram Garis (Line Chart) cocok digunakan karena dapat menunjukkan
            pola perubahan dari waktu ke waktu.
          </li>
        </ul>
      </div>

      {/* Abstraksi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>
            Fokus hanya pada dua kolom utama: Bulan dan Penjualan, tanpa
            memasukkan informasi lain yang tidak relevan.
          </li>
          <li>
            Gunakan grafik yang tepat agar informasi lebih mudah dipahami.
          </li>
        </ul>
      </div>

      {/* Algoritma */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> ALGORITMA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li className="list-none -ml-6">
            Untuk membuat Diagram Garis di spreadsheet, ikuti langkah-langkah
            berikut:
          </li>
          <li>Siapkan data dalam tabel.</li>
          <li>
            Pilih data yang akan digunakan untuk chart → Sorot kolom Bulan dan
            Penjualan.
          </li>
          <li>
            Masukkan grafik → Klik menu "Insert Chart", lalu pilih Diagram Garis
            (Line Chart).
          </li>
          <li>Periksa dan sesuaikan</li>
          <li>
            Analisis hasilnya → Amati pola pada grafik untuk melihat tren
            kenaikan atau penurunan penjualan.
          </li>
        </ul>

        <div className="w-full flex justify-center px-4">
          <div
            id="spreadsheet"
            className="w-full max-w-full md:max-w-screen-md" 
            style={{ height: "600px" }}
          ></div>
        </div>    
  </div>
  
      {/* Kesimpulan dan Analisis */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-6">
          Dengan Diagram Garis (Line Chart), pemilik Toko A dapat melihat tren
          penjualan setiap bulan dengan lebih cepat dan jelas, tanpa harus
          menganalisis angka secara manual.
        </p>
        <p className="text-gray-600 text-sm font-semibold md:text-base">
          Analisis
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Dari Januari hingga Maret, penjualan naik dari Rp5.000.000 ke
            Rp7.000.000, lalu turun ke Rp6.200.000 di April, sebelum meningkat
            kembali menjadi Rp8.000.000 di Mei.
          </li>
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Secara keseluruhan, tren penjualan menunjukkan kenaikan, meskipun
            sempat menurun di April.
          </li>
        </ul>
      </div>

      {/* Modifikasi Chart */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
  <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
    <CheckCircle className="w-5 h-5 mr-2" /> MODIFIKASI CHART
  </div>
  <p className="mt-4 text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
    Setelah membuat grafik, kita bisa memodifikasi tampilannya agar lebih
    informatif.
  </p>
  <div className="flex flex-col items-center mt-6">
    <table className="border-collapse border border-green-800 w-full md:w-4/5 text-center">
      <thead>
        <tr className="bg-[#255F38] text-white">
          <th className="border border-green-600 px-4 py-2">Langkah</th>
          <th className="border border-green-600 px-4 py-2">Tampilan</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-green-50">
          <td className="border border-green-600 px-4 py-2 text-justify">
            Mengubah Tipe Chart. Sebagai contoh, ubah chart Column menjadi Bar chart
            untuk kelompok data yang sama.
            <ol className="list-decimal pl-6 mt-2">
              <li>Pilih chart Column yang sudah dibuat.</li>
              <li>
                Pada tab Chart Design, klik Chart Type, lalu pilih jenis chart
                yang sesuai dengan kebutuhan.
              </li>
            </ol>
          </td>
          <td className="border border-green-600 px-4 py-2">
            <div className="mt-4 border border-gray-300 p-2">
              <img
                src={chart}
                alt="Contoh Chart"
                className="w-[500px] h-[300px] object-contain mx-auto"
              />
            </div>
          </td>
        </tr>
        <tr className="bg-white">
          <td className="border border-green-600 px-4 py-2 text-justify">
            Beralih dari Column ke Row atau sebaliknya. Pada grafik Column Chart
            yang ditampilkan, jika ingin menampilkan kolom berdasarkan bulan
            (bukan berdasarkan produk), lakukan langkah berikut:
            <ol className="list-decimal pl-6 mt-2">
              <li>Pilih Column Chart yang sudah dibuat.</li>
              <li>
                Pada tab Chart Design, klik Switch Row/Column untuk menukar
                susunan data pada chart.
              </li>
            </ol>
          </td>
          <td className="border border-green-600 px-4 py-2">
            <div className="mt-4 border border-gray-300 p-2">
              <img
                src={switchh}
                alt="Contoh Chart"
                className="w-[500px] h-[300px] object-contain mx-auto"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8">
        <a
          href="/visualisasi-data"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md"
        >
          ← Sebelumnya
        </a>
        <a
          href="/aktivitas-visualisasi"
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default ContohPenerapanVisualisasiData;
