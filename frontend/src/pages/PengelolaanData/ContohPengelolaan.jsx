import Layout from "../../components/Layout";
import { useEffect } from "react";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

const ContohPengelolaan = () => {
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
        if (window.ej && window.ej.spreadsheet && !document.querySelector("#spreadsheet1 .e-spreadsheet")) {
          // Spreadsheet untuk Sorting (Lomba Pidato)
          new window.ej.spreadsheet.Spreadsheet({
            sheets: [
              {
                name: "Sheet1",
                columns: [
                  { width: 120 },
                  { width: 120 },
                  { width: 120 },
                ],
                rows: [
                  {
                    cells: [
                      {
                        value: "Nama Siswa",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Kelas",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Skor",
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
                      { value: "Rani", style: { textAlign: "center" } },
                      { value: "8A", style: { textAlign: "center" } },
                      { value: 92, format: "#,##0", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Adi", style: { textAlign: "center" } },
                      { value: "8B", style: { textAlign: "center" } },
                      { value: 78, format: "#,##0", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Siti", style: { textAlign: "center" } },
                      { value: "8C", style: { textAlign: "center" } },
                      { value: 85, format: "#,##0", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Dedi", style: { textAlign: "center" } },
                      { value: "8A", style: { textAlign: "center" } },
                      { value: 88, format: "#,##0", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Eka", style: { textAlign: "center" } },
                      { value: "8B", style: { textAlign: "center" } },
                      { value: 75, format: "#,##0", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Fani", style: { textAlign: "center" } },
                      { value: "8C", style: { textAlign: "center" } },
                      { value: 90, format: "#,##0", style: { textAlign: "center" } },
                    ],
                  },
                ],
              },
            ],
          }).appendTo("#spreadsheet1");
        }

        if (window.ej && window.ej.spreadsheet && !document.querySelector("#spreadsheet2 .e-spreadsheet")) {
          // Spreadsheet untuk Filtering (Ekstrakurikuler Basket)
          new window.ej.spreadsheet.Spreadsheet({
            sheets: [
              {
                name: "Sheet1",
                columns: [
                  { width: 120 },
                  { width: 120 },
                  { width: 150 },
                ],
                rows: [
                  {
                    cells: [
                      {
                        value: "Nama Siswa",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Kelas",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Ekstrakurikuler",
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
                      { value: "Bima", style: { textAlign: "center" } },
                      { value: "8A", style: { textAlign: "center" } },
                      { value: "Basket", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Lusi", style: { textAlign: "center" } },
                      { value: "8B", style: { textAlign: "center" } },
                      { value: "Pramuka", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Tono", style: { textAlign: "center" } },
                      { value: "8A", style: { textAlign: "center" } },
                      { value: "Basket", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Rina", style: { textAlign: "center" } },
                      { value: "8C", style: { textAlign: "center" } },
                      { value: "Basket", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Deni", style: { textAlign: "center" } },
                      { value: "8B", style: { textAlign: "center" } },
                      { value: "Pramuka", style: { textAlign: "center" } },
                    ],
                  },
                  {
                    cells: [
                      { value: "Sari", style: { textAlign: "center" } },
                      { value: "8A", style: { textAlign: "center" } },
                      { value: "Basket", style: { textAlign: "center" } },
                    ],
                  },
                ],
              },
            ],
          }).appendTo("#spreadsheet2");
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Layout>
      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white">
        Contoh Penerapan Sorting dan Filtering Data
      </h1>

      {/* Studi Kasus 1: Sorting - Mengurutkan Data Peringkat Lomba Pidato Sekolah */}
      <h2 className="text-lg md:text-xl font-bold mt-8 mb-4 px-4 text-gray-800">
        Studi Kasus 1: Sorting - Mengurutkan Data Peringkat Lomba Pidato Sekolah
      </h2>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Budi, seorang siswa SMP, diminta oleh gurunya untuk mengelola data hasil lomba pidato antar kelas di sekolah. Data berisi nama siswa, kelas, dan skor. Budi ingin mengurutkan data berdasarkan skor dari tertinggi ke terendah (descending, Z ke A) untuk menentukan pemenang lomba. Dengan sorting, Budi dapat dengan cepat melihat peringkat siswa berdasarkan skor mereka. <strong>Penjelasan</strong>: Urutan "A ke Z" (ascending) mengurutkan dari nilai terkecil ke terbesar, sedangkan "Z ke A" (descending) mengurutkan dari nilai terbesar ke terkecil.
      </p>

      {/* Tabel Data Lomba Pidato */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">
          Tabel 13. Data Hasil Lomba Pidato
        </p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
              <th className="border border-green-600 px-4 py-2">Kelas</th>
              <th className="border border-green-600 px-4 py-2">Skor</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Rani", "8A", 92],
              ["Adi", "8B", 78],
              ["Siti", "8C", 85],
              ["Dedi", "8A", 88],
              ["Eka", "8B", 75],
              ["Fani", "8C", 90],
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

      {/* Penyelesaian dengan Computational Thinking - Sorting */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan{" "}
        <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI - Sorting */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li className="list-none -ml-6">
            Sebelum melakukan sorting, kita perlu membagi masalah menjadi langkah-langkah kecil:
          </li>
          <li>Mengumpulkan data hasil lomba pidato dalam bentuk tabel.</li>
          <li>
            Menentukan kolom yang akan diurutkan, yaitu kolom Skor.
          </li>
          <li>
            Menggunakan fitur sorting di spreadsheet untuk mengurutkan data dari terbesar ke terkecil (descending, Z ke A).
          </li>
        </ul>
      </div>

      {/* Pengenalan Pola - Sorting */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>
            Setelah sorting, skor tertinggi akan berada di posisi atas.
          </li>
          <li>
            Data akan tersusun secara berurutan dari skor terbesar ke terkecil, memudahkan identifikasi pemenang lomba.
          </li>
          <li>
            Pola ini membantu Budi melihat peringkat siswa dengan jelas untuk menentukan pemenang.
          </li>
        </ul>
      </div>

      {/* Abstraksi - Sorting */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>
            Fokus hanya pada kolom Skor untuk mengurutkan data.
          </li>
          <li>
            Informasi seperti nama siswa dan kelas hanya diperlukan setelah pengurutan untuk mengidentifikasi pemenang.
          </li>
          <li>
            Abaikan detail lain yang tidak relevan untuk tujuan sorting.
          </li>
        </ul>
      </div>

      {/* Algoritma - Sorting */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> ALGORITMA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li className="list-none -ml-6">
            Untuk mengurutkan data di spreadsheet, ikuti langkah-langkah berikut:
          </li>
          <li>Blok seluruh data, termasuk judul kolom (header), misalnya kolom Nama Siswa, Kelas, dan Skor.</li>
          <li>Klik kanan pada data yang sudah diblok.</li>
          <li>Pilih menu Sort dari daftar yang muncul.</li>
          <li>
            Jika hanya ingin mengurutkan satu kolom, pilih Sort A to Z (dari kecil ke besar) atau Sort Z to A (dari besar ke kecil).
          </li>
          <li>
            Jika ingin mengurutkan berdasarkan lebih dari satu kolom, pilih Custom Sort.
          </li>
          <li>Misalnya, mengurutkan data pada tabel berdasarkan kolom Skor agar siswa dengan skor tertinggi muncul di atas.</li>
        </ul>

        <div className="w-full flex justify-center px-4">
          <div
            id="spreadsheet1"
            className="w-full max-w-full md:max-w-screen-md"
            style={{ height: "400px" }}
          ></div>
        </div>
      </div>

      {/* Kesimpulan dan Analisis - Sorting */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-6">
          Dengan sorting, Budi dapat dengan cepat mengidentifikasi pemenang lomba pidato tanpa perlu memeriksa data secara manual.
        </p>
        <p className="text-gray-600 text-sm font-semibold md:text-base">
          Analisis
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Setelah sorting (Z ke A), Rani (92), Fani (90), Dedi (88), Siti (85), Adi (78), dan Eka (75) adalah peringkat siswa berdasarkan skor.
          </li>
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Sorting dengan urutan descending (Z ke A) membuat data lebih terorganisir, memudahkan Budi menentukan pemenang lomba pidato.
          </li>
        </ul>
      </div>

      {/* Studi Kasus 2: Filtering - Menampilkan Data Siswa yang Mengikuti Ekstrakurikuler Basket */}
      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 2: Filtering - Menampilkan Data Siswa yang Mengikuti Ekstrakurikuler Basket
      </h2>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Sari, seorang siswa SMP dan anggota tim basket sekolah, diminta mengelola data kegiatan ekstrakurikuler siswa yang berisi nama siswa, kelas, dan ekstrakurikuler. Sari ingin menyaring siswa yang mengikuti ekstrakurikuler Basket untuk membuat daftar anggota tim. Dengan filtering, Sari dapat dengan cepat memilih siswa yang relevan tanpa memeriksa setiap entri secara manual.
      </p>

      {/* Tabel Data Ekstrakurikuler */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">
          Tabel 14. Data Kegiatan Ekstrakurikuler
        </p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
              <th className="border border-green-600 px-4 py-2">Kelas</th>
              <th className="border border-green-600 px-4 py-2">Ekstrakurikuler</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Bima", "8A", "Basket"],
              ["Lusi", "8B", "Pramuka"],
              ["Tono", "8A", "Basket"],
              ["Rina", "8C", "Basket"],
              ["Deni", "8B", "Pramuka"],
              ["Sari", "8A", "Basket"],
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

      {/* Penyelesaian dengan Computational Thinking - Filtering */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan{" "}
        <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI - Filtering */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li className="list-none -ml-6">
            Sebelum melakukan filtering, kita perlu membagi masalah menjadi langkah-langkah kecil:
          </li>
          <li>Mengumpulkan data kegiatan ekstrakurikuler dalam bentuk tabel.</li>
          <li>
            Menentukan kriteria penyaringan, yaitu ekstrakurikuler "Basket".
          </li>
          <li>
            Menggunakan fitur filtering di spreadsheet untuk menampilkan hanya siswa yang mengikuti ekstrakurikuler Basket.
          </li>
        </ul>
      </div>

      {/* Pengenalan Pola - Filtering */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>
            Setelah filtering, hanya siswa dengan ekstrakurikuler Basket yang ditampilkan.
          </li>
          <li>
            Data menunjukkan pola: hanya siswa yang relevan dengan tim basket yang muncul.
          </li>
          <li>
            Pola ini membantu Sari fokus pada anggota tim basket untuk keperluan daftar.
          </li>
        </ul>
      </div>

      {/* Abstraksi - Filtering */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>
            Fokus hanya pada kolom Ekstrakurikuler untuk menyaring siswa yang mengikuti Basket.
          </li>
          <li>
            Informasi seperti kelas diabaikan karena tidak relevan untuk tujuan filtering.
          </li>
          <li>
            Nama siswa hanya diperlukan setelah penyaringan untuk membuat daftar anggota tim.
          </li>
        </ul>
      </div>

      {/* Algoritma - Filtering */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> ALGORITMA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li className="list-none -ml-6">
            Untuk menyaring data di spreadsheet, ikuti langkah-langkah berikut:
          </li>
          <li>Blok seluruh data, termasuk judul kolom (header), agar semua data bisa difilter dengan benar.</li>
          <li>Klik kanan pada kolom "Ekstrakurikuler", lalu pilih opsi Filter.</li>
          <li>
            Pilih kriteria filter → Misalnya, jika ingin menampilkan hanya siswa dari ekstrakurikuler Basket, centang "Basket" saja.
          </li>
          <li>Jika ingin menampilkan semua ekstrakurikuler, centang "Select All".</li>
        </ul>

        <div className="w-full flex justify-center px-4">
          <div
            id="spreadsheet2"
            className="w-full max-w-full md:max-w-screen-md"
            style={{ height: "400px" }}
          ></div>
        </div>
      </div>

      {/* Kesimpulan dan Analisis - Filtering */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-6">
          Dengan filtering, Sari dapat dengan cepat mengidentifikasi siswa yang mengikuti ekstrakurikuler Basket untuk membuat daftar anggota tim tanpa perlu memeriksa setiap entri secara manual.
        </p>
        <p className="text-gray-600 text-sm font-semibold md:text-base">
          Analisis
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Setelah filtering, hanya Bima, Tono, Rina, dan Sari yang ditampilkan sebagai anggota tim Basket.
          </li>
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Filtering menghemat waktu Sari dalam memilih siswa yang relevan dan memastikan daftar anggota tim fokus pada ekstrakurikuler yang diinginkan.
          </li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8">
        <a
          href="/pengelolaan-data"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md"
        >
          ← Sebelumnya
        </a>
        <a
          href="/aktivitas-pengelolaan"
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default ContohPengelolaan;