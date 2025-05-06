import React, { useState } from "react";
import Layout from "../../components/Layout";
import {
  BookOpen,
  Lightbulb,
  BarChart,
  Filter,
  Code,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export default function PeringkasanData() {
  // State untuk toggle langkah-langkah di masing-masing bagian
  const [dekomposisiSteps, setDekomposisiSteps] = useState([false, false, false]);
  const [polaSteps, setPolaSteps] = useState([false, false, false]);
  const [abstraksiSteps, setAbstraksiSteps] = useState([false, false, false]);
  const [algoritmaSteps, setAlgoritmaSteps] = useState([false, false, false]);

  // Fungsi untuk toggle langkah-langkah
  const toggleDekomposisiStep = (index) => {
    setDekomposisiSteps((prev) =>
      prev.map((step, i) => (i === index ? !step : step))
    );
  };

  const togglePolaStep = (index) => {
    setPolaSteps((prev) =>
      prev.map((step, i) => (i === index ? !step : step))
    );
  };

  const toggleAbstraksiStep = (index) => {
    setAbstraksiSteps((prev) =>
      prev.map((step, i) => (i === index ? !step : step))
    );
  };

  const toggleAlgoritmaStep = (index) => {
    setAlgoritmaSteps((prev) =>
      prev.map((step, i) => (i === index ? !step : step))
    );
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        C. PERINGKASAN DATA
      </div>

      <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
          <li>
            Memahami konsep peringkasan data dan penggunaan fungsi dalam
            spreadsheet untuk menyajikan informasi secara singkat dan akurat
          </li>
          <li>
            Menggunakan pendekatan Computational Thinking (CT) untuk meringkas
            data dengan fungsi perhitungan otomatis.
          </li>
          <li>
            Menerapkan fungsi SUMIF, COUNTIF, SUMIFS, dan COUNTIFS dalam studi
            kasus peringkasan data di lembar kerja.
          </li>
        </ol>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Dalam kehidupan sehari-hari, kita sering berhadapan dengan banyak data
        yang perlu dianalisis dan diringkas agar lebih mudah dipahami.
        Peringkasan data adalah proses mengolah data yang besar dan kompleks
        menjadi lebih sederhana tanpa menghilangkan informasi penting.
      </p>

      {/* Pentingnya Peringkasan Data */}
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        Mengapa Peringkasan Data Penting?
      </div>
      <ul className="list-disc list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
        <li className="text-justify">
          <strong>Menghemat waktu</strong> dan tenaga → Dengan fungsi otomatis, kita tidak perlu menghitung satu per satu.
        </li>
        <li className="text-justify">
          <strong>Membantu dalam</strong> pengambilan keputusan → Data yang telah diringkas lebih mudah dianalisis.
        </li>
        <li className="text-justify">
          <strong>Menampilkan informasi</strong> lebih jelas → Menghindari tumpukan angka yang sulit dipahami.
        </li>
      </ul>

      {/* Contoh Peringkasan Data */}
      <h2 className="font-bold text-[#255F38] mt-6 px-4">
        Contoh Peringkasan Data dalam Kehidupan Sehari-hari
      </h2>
      <ul className="list-decimal list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
        <li className="text-justify">
          <strong>Seorang siswa</strong> ingin tahu berapa kali ia membeli makanan favorit di kantin dalam satu minggu → Dengan COUNTIF, ia bisa langsung mendapatkan jumlahnya.
        </li>
        <li className="text-justify">
          <strong>Seseorang mencatat</strong> pengeluarannya setiap bulan dan ingin tahu total pengeluaran untuk transportasi → Dengan SUMIF, ia bisa menjumlahkan hanya untuk kategori transportasi.
        </li>
        <li className="text-justify">
          <strong>Seorang guru</strong> ingin tahu berapa siswa yang mendapat nilai di atas 75 → Dengan COUNTIF, ia bisa langsung mengetahui jumlah siswa yang lulus.
        </li>
      </ul>

      {/* Dekomposisi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Sebelum meringkas data, kita harus memahami apa yang perlu dihitung
          dan bagaimana cara menghitungnya.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Tentukan apa</strong> yang ingin diringkas → Apakah ingin menjumlahkan angka (penjualan, nilai, dll.) atau menghitung jumlah data (jumlah siswa, jumlah transaksi, dll.)?
          </li>
          <li className="text-justify">
            <strong>Tentukan kriteria</strong> peringkasan → Misalnya, hanya menjumlahkan nilai siswa yang lebih dari 75 atau hanya menghitung transaksi di bulan tertentu.
          </li>
          <li className="text-justify">
            <strong>Pilih fungsi</strong> yang sesuai:
            <div className="ml-4 mt-2 space-y-4">
              {/* Fungsi: SUMIF */}
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">1. SUMIF</h3>
                <p className="text-gray-700 mt-2">
                  <strong>SUMIF</strong> digunakan untuk menjumlahkan data dengan satu syarat.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  =SUMIF(range, criteria, sum_range)
                </pre>
                <p className="text-gray-700 mt-2">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                  <li>
                    <strong>range:</strong> Rentang data yang akan diperiksa kriterianya.
                  </li>
                  <li>
                    <strong>criteria:</strong> Syarat yang harus dipenuhi agar nilainya dijumlahkan.
                  </li>
                  <li>
                    <strong>sum_range:</strong> Rentang angka yang akan dijumlahkan jika kriterianya terpenuhi.
                  </li>
                </ul>
              </section>

              {/* Fungsi: SUMIFS */}
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">2. SUMIFS</h3>
                <p className="text-gray-700 mt-2">
                  <strong>SUMIFS</strong> digunakan untuk menjumlahkan data dengan lebih dari satu syarat.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  =SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)
                </pre>
                <p className="text-gray-700 mt-2">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                  <li>
                    <strong>sum_range:</strong> Rentang data yang akan dijumlahkan.
                  </li>
                  <li>
                    <strong>criteria_range1:</strong> Rentang pertama yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria1:</strong> Syarat pertama yang harus dipenuhi.
                  </li>
                  <li>
                    <strong>criteria_range2:</strong> Rentang kedua yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria2:</strong> Syarat kedua yang harus dipenuhi.
                  </li>
                </ul>
              </section>

              {/* Fungsi: COUNTIF */}
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">3. COUNTIF</h3>
                <p className="text-gray-700 mt-2">
                  <strong>COUNTIF</strong> digunakan untuk menghitung jumlah data dengan satu syarat.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  =COUNTIF(range, criteria)
                </pre>
                <p className="text-gray-700 mt-2">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                  <li>
                    <strong>range:</strong> Rentang data yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria:</strong> Kriteria yang harus dipenuhi agar data dihitung.
                  </li>
                </ul>
              </section>

              {/* Fungsi: COUNTIFS */}
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">4. COUNTIFS</h3>
                <p className="text-gray-700 mt-2">
                  <strong>COUNTIFS</strong> digunakan untuk menghitung jumlah data dengan lebih dari satu syarat.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  =COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2)
                </pre>
                <p className="text-gray-700 mt-2">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                  <li>
                    <strong>criteria_range1:</strong> Rentang pertama yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria1:</strong> Syarat pertama yang harus dipenuhi.
                  </li>
                  <li>
                    <strong>criteria_range2:</strong> Rentang kedua yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria2:</strong> Syarat kedua yang harus dipenuhi.
                  </li>
                </ul>
              </section>
            </div>
          </li>
        </ul>

        {/* Interactive Case Study for Dekomposisi */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Memecah Masalah: Menghitung Total Pengeluaran Bulanan
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu mencatat pengeluaran harianmu selama sebulan dan ingin menghitung total pengeluaran untuk kategori "Makanan". Data pengeluaranmu mencakup: tanggal, kategori (Makanan, Transportasi, Hiburan), dan jumlah pengeluaran.
          </p>
          <p className="text-gray-700 mt-4">
            Klik tombol berikut untuk melihat langkah-langkah memecah masalah:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => toggleDekomposisiStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Identifikasi Tujuan
            </button>
            {dekomposisiSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Tujuan:</strong> Menghitung total pengeluaran untuk kategori "Makanan" dalam sebulan.
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(1)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Tentukan Kriteria
            </button>
            {dekomposisiSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Kriteria:</strong> Hanya pengeluaran dengan kategori "Makanan".
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Pilih Fungsi
            </button>
            {dekomposisiSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Fungsi:</strong> Gunakan SUMIF untuk menjumlahkan pengeluaran berdasarkan kategori "Makanan".
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Pengenalan Pola */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="mr-2 w-5 h-5" /> Pengenalan Pola
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Setelah memahami langkah-langkah kecilnya, kita harus mengenali pola
          dalam data agar tahu cara terbaik untuk meringkasnya.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">
          📌 Beberapa pola umum dalam peringkasan data:
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Menjumlahkan total</strong> penjualan berdasarkan kategori produk → Dengan SUMIF, kita bisa menjumlahkan total penjualan hanya untuk kategori tertentu.
          </li>
          <li className="text-justify">
            <strong>Menghitung jumlah</strong> siswa yang mendapat nilai di atas batas tertentu → Dengan COUNTIF, kita bisa menghitung berapa banyak siswa yang mendapat nilai lebih dari 75.
          </li>
          <li className="text-justify">
            <strong>Menjumlahkan total</strong> penjualan dengan beberapa syarat → Dengan SUMIFS, kita bisa menjumlahkan hanya transaksi yang memenuhi lebih dari satu kriteria, misalnya kategori produk tertentu dan periode tertentu.
          </li>
          <li className="text-justify">
            <strong>Menghitung jumlah</strong> data berdasarkan lebih dari satu kriteria → Dengan COUNTIFS, kita bisa menghitung berapa transaksi yang terjadi di bulan tertentu untuk produk tertentu.
          </li>
        </ul>

        {/* Interactive Case Study for Pengenalan Pola */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Mengenali Pola: Mengelompokkan Data Nilai Siswa
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu memiliki data nilai siswa: Aisyah (80), Budi (65), Citra (90), Dani (70), dan Eko (85). Kamu ingin menghitung berapa siswa yang nilainya di atas 75.
          </p>
          <p className="text-gray-700 mt-4">
            Klik tombol berikut untuk melihat langkah-langkah mengenali pola:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => togglePolaStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Amati Data
            </button>
            {polaSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Data:</strong> Nilai siswa: Aisyah (80), Budi (65), Citra (90), Dani (70), Eko (85).
              </p>
            )}
            <button
              onClick={() => togglePolaStep(1)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Identifikasi Pola
            </button>
            {polaSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Pola:</strong> Nilai di atas 75: Aisyah (80), Citra (90), Eko (85).
              </p>
            )}
            <button
              onClick={() => togglePolaStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Gunakan Fungsi
            </button>
            {polaSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Fungsi:</strong> Gunakan COUNTIF untuk menghitung jumlah siswa dengan nilai di atas 75.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Abstraksi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="mr-2 w-5 h-5" /> Abstraksi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
          Agar lebih mudah dipahami, kita hanya fokus pada bagian penting dalam
          data dan mengabaikan informasi yang tidak diperlukan.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Hanya pilih</strong> data yang benar-benar diperlukan → Jika ingin menghitung jumlah siswa yang lulus, kita hanya perlu kolom "Nilai Ujian", tidak perlu melihat nama siswa.
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> yang tepat → Jika hanya butuh jumlah siswa yang lulus, cukup gunakan COUNTIF tanpa perlu SUMIF.
          </li>
        </ul>

        {/* Interactive Case Study for Abstraksi */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Abstraksi: Menyederhanakan Data Penjualan
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu memiliki data penjualan: Nama Produk, Kategori, Pendapatan, Tanggal, dan Lokasi. Kamu hanya ingin menjumlahkan pendapatan untuk kategori "Elektronik".
          </p>
          <p className="text-gray-700 mt-4">
            Klik tombol berikut untuk melihat langkah-langkah abstraksi:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => toggleAbstraksiStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Identifikasi Data Penting
            </button>
            {abstraksiSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Data penting:</strong> Kolom "Kategori" dan "Pendapatan".
              </p>
            )}
            <button
              onClick={() => toggleAbstraksiStep(1)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Abaikan Data Tidak Relevan
            </button>
            {abstraksiSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Data tidak relevan:</strong> Nama Produk, Tanggal, dan Lokasi.
              </p>
            )}
            <button
              onClick={() => toggleAbstraksiStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Gunakan Fungsi
            </button>
            {abstraksiSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Fungsi:</strong> Gunakan SUMIF untuk menjumlahkan pendapatan hanya pada kategori "Elektronik".
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Algoritma */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
          Setelah kita memahami data dan menyederhanakannya, kita bisa membuat
          langkah-langkah sistematis untuk menerapkan peringkasan data dalam
          spreadsheet.
        </p>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 SUMIF untuk Menjumlahkan Data dengan Satu Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 7. Contoh Data SUMIF
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Kelas</th>
                <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">80</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">65</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">90</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Pilih range</strong> data yang akan diperiksa kriterianya → Misalnya, kolom "Kelas" untuk mencari siswa kelas 8A.
          </li>
          <li className="text-justify">
            <strong>Tentukan kriteria</strong> → Misalnya, hanya siswa dari kelas 8A.
          </li>
          <li className="text-justify">
            <strong>Pilih sum_range</strong> → Data yang akan dijumlahkan, yaitu kolom "Nilai Ujian".
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> SUMIF → Untuk menjumlahkan nilai siswa dari kelas 8A.
          </li>
        </ul>
        <pre className="bg-gray-200 p-2 rounded ml-12 mt-2 text-gray-800">
          =SUMIF(B2:B6, "8A", C2:C6)
        </pre>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 COUNTIF untuk Menghitung Data dengan Satu Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 8. Contoh Data COUNTIF
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">80</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">65</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">90</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Pilih range</strong> data yang akan diperiksa kriterianya → Misalnya, kolom "Nilai Ujian".
          </li>
          <li className="text-justify">
            <strong>Tentukan kriteria</strong> → Misalnya, nilai lebih dari 75.
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> COUNTIF → Untuk menghitung jumlah siswa yang memiliki nilai lebih dari 75.
          </li>
        </ul>
        <pre className="bg-gray-200 p-2 rounded ml-12 mt-2 text-gray-800">
          =COUNTIF(B2:B6, ">75")
        </pre>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 SUMIFS untuk Menjumlahkan Data dengan Banyak Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 9. Contoh Data SUMIFS
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Produk</th>
                <th className="border border-green-600 px-4 py-2">Kategori</th>
                <th className="border border-green-600 px-4 py-2">Pendapatan (Rp)</th>
                <th className="border border-green-600 px-4 py-2">Bulan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Laptop</td>
                <td className="border border-green-600 px-4 py-2">Elektronik</td>
                <td className="border border-green-600 px-4 py-2">8.500.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Printer</td>
                <td className="border border-green-600 px-4 py-2">Elektronik</td>
                <td className="border border-green-600 px-4 py-2">2.000.000</td>
                <td className="border border-green-600 px-4 py-2">Februari</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Roti</td>
                <td className="border border-green-600 px-4 py-2">Makanan</td>
                <td className="border border-green-600 px-4 py-2">500.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Mouse</td>
                <td className="border border-green-600 px-4 py-2">Elektronik</td>
                <td className="border border-green-600 px-4 py-2">150.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Susu</td>
                <td className="border border-green-600 px-4 py-2">Makanan</td>
                <td className="border border-green-600 px-4 py-2">800.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Pilih sum_range</strong> → Data yang akan dijumlahkan, yaitu kolom "Pendapatan (Rp)".
          </li>
          <li className="text-justify">
            <strong>Pilih criteria_range1</strong> → Kolom "Kategori".
          </li>
          <li className="text-justify">
            <strong>Tentukan criteria1</strong> → Hanya menjumlahkan kategori Elektronik.
          </li>
          <li className="text-justify">
            <strong>Pilih criteria_range2</strong> → Kolom "Bulan".
          </li>
          <li className="text-justify">
            <strong>Tentukan criteria2</strong> → Hanya menjumlahkan transaksi di Januari.
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> SUMIFS → Untuk menjumlahkan pendapatan yang memenuhi kedua kriteria.
          </li>
        </ul>
        <pre className="bg-gray-200 p-2 rounded ml-12 mt-2 text-gray-800">
          =SUMIFS(C2:C6, B2:B6, "Elektronik", D2:D6, "Januari")
        </pre>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 COUNTIFS untuk Menghitung Data dengan Banyak Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 10. Contoh Data COUNTIFS
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Kelas</th>
                <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">80</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">65</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">90</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Pilih criteria_range1</strong> → Kolom "Kelas".
          </li>
          <li className="text-justify">
            <strong>Tentukan criteria1</strong> → Hanya menghitung siswa dari kelas 8A.
          </li>
          <li className="text-justify">
            <strong>Pilih criteria_range2</strong> → Kolom "Nilai Ujian".
          </li>
          <li className="text-justify">
            <strong>Tentukan criteria2</strong> → Hanya menghitung siswa yang nilainya lebih dari 75.
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> COUNTIFS → Untuk menghitung jumlah siswa yang memenuhi kedua kriteria.
          </li>
        </ul>
        <pre className="bg-gray-200 p-2 rounded ml-12 mt-2 text-gray-800">
          =COUNTIFS(B2:B6, "8A", C2:C6, ">75")
        </pre>

        {/* Interactive Case Study for Algoritma */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Algoritma: Menghitung Jumlah Siswa Lulus
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu memiliki data nilai siswa: Aisyah (80), Budi (65), Citra (90), Dani (70), Eko (85). Kamu ingin menghitung jumlah siswa yang nilainya di atas 75.
          </p>
          <p className="text-gray-700 mt-4">
            Klik tombol berikut untuk melihat langkah-langkah algoritma:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => toggleAlgoritmaStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Pilih Data
            </button>
            {algoritmaSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Data:</strong> Kolom "Nilai Ujian" dari daftar siswa.
              </p>
            )}
            <button
              onClick={() => toggleAlgoritmaStep(1)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Tentukan Kriteria
            </button>
            {algoritmaSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Kriteria:</strong> Nilai di atas 75.
              </p>
            )}
            <button
              onClick={() => toggleAlgoritmaStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Terapkan Rumus
            </button>
            {algoritmaSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Rumus:</strong> Gunakan COUNTIF: =COUNTIF(B2:B6, ">75").
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a
          href="/feedback2"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
        >
          ← Sebelumnya
        </a>
        <a
          href="/penerapan-peringkasan"
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}
