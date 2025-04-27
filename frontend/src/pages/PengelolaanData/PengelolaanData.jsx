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

export default function PengelolaanData() {
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
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center">
        D. PENGELOLAAN DATA
      </div>

      <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
          <li>
            Memahami konsep pengelolaan data melalui teknik <i>Sorting</i> dan <i>Filtering</i> dalam <i>Spreadsheet</i>.
          </li>
          <li>
            Menggunakan pendekatan <i>Computational Thinking</i> untuk menyelesaikan permasalahan dalam pengelolaan data.
          </li>
          <li>
            Menerapkan teknik <i>Sorting</i> dan <i>Filtering</i> dalam studi kasus pengelolaan di lembar kerja.
          </li>
        </ol>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Dalam kehidupan sehari-hari, kita sering berhadapan dengan banyak data yang perlu dikelola agar lebih mudah dianalisis dan digunakan dalam pengambilan keputusan. Pengelolaan data adalah proses menyusun, mengurutkan, dan menyaring data agar lebih terstruktur serta dapat diakses dengan cepat. Jika dilakukan secara manual, pengelolaan data dapat memakan waktu yang lama dan rentan terhadap kesalahan. Oleh karena itu, kita dapat menggunakan fitur sorting (pengurutan) dan filtering (penyaringan) dalam spreadsheet untuk membantu proses ini secara lebih efisien.
      </p>

      {/* Pentingnya Pengelolaan Data */}
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        Mengapa Pengelolaan Data Penting?
      </div>
      <ul className="list-disc list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
        <li className="text-justify">
          <strong>Memudahkan pencarian</strong> informasi → Data yang tersusun rapi lebih mudah ditemukan.
        </li>
        <li className="text-justify">
          <strong>Meningkatkan efisiensi</strong> kerja → Sorting dan filtering menghemat waktu dalam analisis data.
        </li>
        <li className="text-justify">
          <strong>Membantu pengambilan</strong> keputusan → Data yang tersusun dengan baik memberikan informasi yang lebih akurat.
        </li>
        <li className="text-justify">
          <strong>Menghindari kesalahan</strong> dalam pengolahan → Data yang tidak terorganisir dapat menyebabkan kesalahan dalam analisis.
        </li>
      </ul>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Pendekatan <i>Computational Thinking</i> (CT) membantu dalam mengelola data secara sistematis melalui beberapa langkah utama: <i>decomposition</i> (memecah masalah data yang kompleks menjadi bagian-bagian yang lebih kecil), <i>pattern recognition</i> (mengidentifikasi kesamaan atau pola dalam data), <i>abstraction</i> (memfokuskan pada informasi penting dan mengabaikan hal-hal yang tidak relevan).
      </p>

      {/* Dekomposisi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>

        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Sebelum mengelola data, kita harus memahami langkah-langkah kecil yang perlu dilakukan:
        </p>

        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Tentukan tujuan</strong> pengelolaan data → Apakah ingin mengurutkan data agar lebih mudah dibaca atau menyaring data berdasarkan kriteria tertentu?
          </li>
          <li className="text-justify">
            <strong>Pilih teknik</strong> yang sesuai:
            <div className="ml-4 mt-2 space-y-4">
              {/* Teknik: Sorting */}
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">1. Sorting</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Sorting</strong> digunakan untuk mengurutkan data agar lebih mudah dianalisis.
                  Misalnya, jika kita ingin mengetahui siswa dengan nilai tertinggi, kita bisa mengurutkan data dari yang terbesar ke terkecil (<i>descending</i>).
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  Pilih kolom → Klik menu Sort → Pilih A-Z (ascending) atau Z-A (descending)
                </pre>
              </section>

              {/* Teknik: Filtering */}
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">2. Filtering</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Filtering</strong> digunakan untuk menampilkan hanya data yang memenuhi kriteria tertentu sementara data lainnya disembunyikan.
                  Misalnya, hanya menampilkan siswa yang mendapatkan nilai 80.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  Pilih kolom → Klik menu Filter → Centang data yang ingin ditampilkan
                </pre>
              </section>
            </div>
          </li>
          <li className="text-justify">
            <strong>Tentukan langkah-langkah</strong> dalam menerapkan sorting dan filtering → Misalnya, memilih kolom yang digunakan sebagai acuan dan menentukan metode pengurutan atau penyaringan.
          </li>
        </ul>

        {/* Interactive Case Study for Dekomposisi */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Memecah Masalah: Mengelola Data Penjualan
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu memiliki data penjualan toko: Nama Produk, Kategori, Harga, dan Tanggal. Kamu ingin mengurutkan data berdasarkan harga dari tertinggi ke terendah.
          </p>
          <p className="text-gray-700 mt-4">
            Klik tombol berikut untuk melihat langkah-langkah memecah masalah:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => toggleDekomposisiStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Tentukan Tujuan
            </button>
            {dekomposisiSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Tujuan:</strong> Mengurutkan data penjualan berdasarkan harga dari tertinggi ke terendah.
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(1)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Pilih Teknik
            </button>
            {dekomposisiSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Teknik:</strong> Gunakan <i>Sorting</i> untuk mengurutkan data.
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Tentukan Langkah
            </button>
            {dekomposisiSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Langkah:</strong> Pilih kolom "Harga" sebagai acuan dan urutkan secara <i>descending</i> (Z-A).
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
          Setelah menentukan cara mengelola data, kita harus mengenali pola dalam data agar lebih efektif.
        </p>

        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Mengamati hasil</strong> <i>sorting</i> → Apakah setelah sorting data lebih mudah dibaca? Misalnya, apakah siswa dengan nilai tertinggi berada di posisi atas?
          </li>
          <li className="text-justify">
            <strong>Menganalisis hasil</strong> <i>filtering</i> → Setelah menyaring data, apakah informasi yang dihasilkan lebih relevan dan sesuai dengan kebutuhan?
          </li>
        </ul>

        {/* Interactive Case Study for Pengenalan Pola */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Mengenali Pola: Hasil Sorting Nilai Siswa
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu telah mengurutkan data nilai siswa: Aisyah (85), Budi (70), Citra (95). Setelah sorting dari tertinggi ke terendah, data menjadi: Citra (95), Aisyah (85), Budi (70). Apa pola yang terlihat?
          </p>
          <p className="text-gray-700 mt-4">
            Klik tombol berikut untuk melihat langkah-langkah mengenali pola:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => togglePolaStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Amati Data Setelah Sorting
            </button>
            {polaSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Data:</strong> Citra (95), Aisyah (85), Budi (70).
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
                <strong>Pola:</strong> Nilai tertinggi (Citra, 95) berada di posisi atas, diikuti Aisyah (85), dan Budi (70) di posisi terbawah.
              </p>
            )}
            <button
              onClick={() => togglePolaStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Evaluasi Manfaat
            </button>
            {polaSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Manfaat:</strong> Data lebih mudah dibaca, siswa dengan nilai tertinggi langsung terlihat di posisi atas.
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

        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Agar data lebih mudah dipahami dan digunakan, kita hanya fokus pada bagian penting.
        </p>

        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Mengabaikan informasi</strong> yang tidak diperlukan → Jika hanya ingin mengetahui siswa yang <span className="italic">lulus</span>, kita cukup melihat kolom <span className="italic">Nilai</span> tanpa memperhatikan detail lain seperti nama atau kelas.
          </li>
          <li className="text-justify">
            <strong>Menyaring data</strong> untuk fokus pada informasi relevan → Misalnya, hanya menampilkan siswa dengan nilai lebih dari <span className="italic">80</span> agar bisa fokus pada siswa yang unggul.
          </li>
          <li className="text-justify">
            <strong>Mewakili data</strong> dalam bentuk yang lebih sederhana → Kita bisa menampilkan jumlah siswa yang memiliki nilai tertentu tanpa perlu melihat data setiap siswa satu per satu — misalnya menggunakan rumus <span className="italic">COUNTIF</span>.
          </li>
        </ul>

        {/* Interactive Case Study for Abstraksi */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Abstraksi: Menyederhanakan Data Siswa
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu memiliki data siswa: Nama, Kelas, Nilai Ujian, dan Alamat. Kamu hanya ingin mengetahui siswa yang nilainya di atas 80.
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
                <strong>Data penting:</strong> Kolom "Nilai Ujian".
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
                <strong>Data tidak relevan:</strong> Nama, Kelas, dan Alamat.
              </p>
            )}
            <button
              onClick={() => toggleAbstraksiStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Terapkan Teknik
            </button>
            {abstraksiSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Teknik:</strong> Gunakan <i>Filtering</i> untuk menampilkan hanya siswa dengan nilai di atas 80.
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
          Setelah kita memahami data yang tersedia dan menentukan informasi yang ingin kita cari, kita bisa membuat langkah-langkah sistematis untuk menerapkan sorting dan filtering di spreadsheet.
        </p>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 Sorting (Pengurutan) – Mengurutkan Data dari Nilai Tertinggi ke Terendah:
        </p>

        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 5. Contoh Data untuk Sorting
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Nilai Tugas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">95</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Blok seluruh data</strong> termasuk header tabel → Misalnya, kolom Nama Siswa dan Nilai Tugas.
          </li>
          <li className="text-justify">
            <strong>Klik menu Data</strong> kemudian pilih Urutkan → Untuk memulai proses pengurutan.
          </li>
          <li className="text-justify">
            <strong>Pilih kolom</strong> yang ingin diurutkan → Misalnya, "Nilai Tugas".
          </li>
          <li className="text-justify">
            <strong>Pilih Urutkan</strong> dari Z ke A → Untuk mendapatkan urutan dari nilai tertinggi ke terendah.
          </li>
        </ul>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 Filtering (Penyaringan) – Menampilkan Data Siswa dengan Nilai di Atas 80:
        </p>

        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 6. Contoh Data untuk Filtering
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
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">78</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">88</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Farah</td>
                <td className="border border-green-600 px-4 py-2">92</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Blok seluruh data</strong> termasuk header kolom → Untuk memastikan semua data tersaring.
          </li>
          <li className="text-justify">
            <strong>Klik menu Data</strong> kemudian pilih Filter → Untuk mengaktifkan fitur penyaringan.
          </li>
          <li className="text-justify">
            <strong>Ikon panah</strong> akan muncul di header kolom → Sebagai indikator filter aktif.
          </li>
          <li className="text-justify">
            <strong>Klik ikon panah</strong> di kolom "Nilai Ujian" → Pilih Filter Angka → Lebih besar dari.
          </li>
          <li className="text-justify">
            <strong>Masukkan nilai</strong> 80 → Klik OK untuk menampilkan hanya siswa dengan nilai di atas 80.
          </li>
        </ul>

        {/* Interactive Case Study for Algoritma */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Algoritma: Menyaring Data Penjualan
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu memiliki data penjualan: Nama Produk, Kategori, Harga, dan Tanggal. Kamu ingin menampilkan hanya produk dengan harga di atas Rp500.000.
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
                <strong>Data:</strong> Seluruh tabel penjualan, fokus pada kolom "Harga".
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
                <strong>Kriteria:</strong> Harga di atas Rp500.000.
              </p>
            )}
            <button
              onClick={() => toggleAlgoritmaStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Terapkan Filtering
            </button>
            {algoritmaSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Langkah Filtering:</strong> Klik menu Filter, pilih kolom "Harga", lalu filter dengan "Lebih besar dari 500000".
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
          href="/contoh-pengelolaan"
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}