import Layout from "../../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz4 = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const correctAnswers = {
    q1: "b",
    q2: "c",
    q3: "b",
    q4: "b",
    q5: "b",
    q6: "b",
    q7: "c",
    q8: "b",
    q9: "a",
    q10: "b",
    q11: "sorting",
    q12: "filtering",
  };

  const answerOptions = {
    q1: {
      a: "Membuat data lebih sulit diakses",
      b: "Menyusun dan menyaring data agar lebih terstruktur",
      c: "Menghapus data yang tidak relevan",
      d: "Mengganti data dengan informasi baru",
    },
    q2: {
      a: "Filtering",
      b: "Sorting dengan urutan A ke Z",
      c: "Sorting dengan urutan Z ke A",
      d: "COUNTIF",
    },
    q3: {
      a: "Sorting",
      b: "Filtering",
      c: "Abstraction",
      d: "Decomposition",
    },
    q4: {
      a: "Klik menu Filter",
      b: "Blok seluruh data termasuk header tabel",
      c: "Centang kategori yang ingin ditampilkan",
      d: "Pilih kolom yang akan dihapus",
    },
    q5: {
      a: "Decomposition",
      b: "Pattern Recognition",
      c: "Abstraction",
      d: "Algorithm",
    },
    q6: {
      a: "Mengurutkan data dari kecil ke besar",
      b: "Menampilkan hanya data yang memenuhi kriteria tertentu",
      c: "Menghapus data yang tidak relevan",
      d: "Mengganti data dengan nilai baru",
    },
    q7: {
      a: "Memecah masalah menjadi langkah kecil",
      b: "Mengenali pola dalam data",
      c: "Fokus pada informasi penting dan mengabaikan yang tidak relevan",
      d: "Membuat langkah-langkah sistematis",
    },
    q8: {
      a: "Nama Siswa",
      b: "Nilai Ujian",
      c: "Alamat",
      d: "Kelas",
    },
    q9: {
      a: "Memudahkan pencarian informasi",
      b: "Menghapus data yang tidak relevan",
      c: "Mengganti data dengan informasi baru",
      d: "Menyembunyikan data yang tidak memenuhi kriteria",
    },
    q10: {
      a: "Klik menu Sort dan pilih Z ke A",
      b: "Klik ikon panah di kolom, pilih Filter Angka, lalu masukkan nilai 80",
      c: "Blok data dan hapus yang tidak relevan",
      d: "Pilih kolom dan urutkan dari A ke Z",
    },
    q11: {
      placeholder: "Jawaban...",
    },
    q12: {
      placeholder: "Jawaban...",
    },
  };

  const handleAnswer = (question, answer) => {
    console.log("Selected:", question, answer);
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = () => {
    try {
      if (Object.keys(answers).length < 12) {
        alert("Harap jawab semua soal sebelum menyelesaikan kuis!");
        return;
      }
      let correctCount = 0;
      Object.keys(correctAnswers).forEach((question) => {
        if (answers[question]?.toLowerCase() === correctAnswers[question]) {
          correctCount++;
        }
      });
      const score = (correctCount / 12) * 100;
      console.log("Submitting:", { answers, correctCount, score, correctAnswers, answerOptions });
      navigate("/feedback1", { state: { answers, correctCount, score, correctAnswers, answerOptions } });
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      alert("Terjadi kesalahan saat menyelesaikan kuis. Silakan coba lagi.");
    }
  };

  return (
    <Layout>
      <div>
        <h1 className="mt-5 text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white">
          Kuis 4: Pengelolaan Data
        </h1>
      </div>

      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-8">
          Selamat datang di kuis tentang pengelolaan data menggunakan spreadsheet! Kuis ini berisi 12 soal untuk melatih pemahamanmu dalam sorting, filtering, dan pendekatan Computational Thinking. Soal 1-10 berupa pilihan ganda, sedangkan soal 11-12 adalah studi kasus dengan isian teks. Pilih jawaban yang benar untuk setiap soal. Skor minimal 70 diperlukan untuk lanjut ke materi berikutnya. Selamat mengerjakan!
        </p>
      </div>

      {/* Soal 1 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 1
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Apa tujuan utama pengelolaan data menggunakan spreadsheet?
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q1).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q1" onChange={() => handleAnswer("q1", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 2 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 2
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Fitur apa yang digunakan untuk mengurutkan data dari nilai terbesar ke terkecil dalam spreadsheet?
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q2).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q2" onChange={() => handleAnswer("q2", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 3 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 3
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel: Daftar Buku Perpustakaan</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Judul Buku", "Kategori", "Jumlah Halaman"],
                    ["2", "Petualangan di Hutan", "Fiksi", "150"],
                    ["3", "Dunia Planet", "Sains", "200"],
                    ["4", "Misteri Kota Tua", "Fiksi", "180"],
                    ["5", "Teknologi Masa Depan", "Sains", "220"],
                    ["6", "Kisah Pahlawan", "Sejarah", "170"],
                  ].map((row, index) => (
                    <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Sari ingin menampilkan hanya buku dengan kategori "Sains" dari daftar buku perpustakaan. Teknik apa yang harus ia gunakan?
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q3).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q3" onChange={() => handleAnswer("q3", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 4 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 4
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Apa langkah pertama yang dilakukan saat menerapkan sorting pada data di spreadsheet?
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q4).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q4" onChange={() => handleAnswer("q4", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 5 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 5
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel: Daftar Nilai Ulangan</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Nama Siswa", "Nilai Ulangan"],
                    ["2", "Adi", "85"],
                    ["3", "Bima", "90"],
                    ["4", "Cici", "78"],
                    ["5", "Dani", "92"],
                  ].map((row, index) => (
                    <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Budi mengurutkan nilai ulangan siswa dan menemukan bahwa nilai tertinggi ada di posisi atas. Pendekatan Computational Thinking apa yang ia gunakan untuk mengenali pola ini?
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q5).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q5" onChange={() => handleAnswer("q5", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 6 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 6
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Apa yang dilakukan fitur filtering dalam spreadsheet?
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q6).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q6" onChange={() => handleAnswer("q6", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 7 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 7
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Dalam pendekatan Computational Thinking, langkah abstraction berfokus pada ...
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q7).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q7" onChange={() => handleAnswer("q7", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 8 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 8
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel: Daftar Nilai Ujian</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Nama Siswa", "Nilai Ujian"],
                    ["2", "Rina", "85"],
                    ["3", "Tono", "70"],
                    ["4", "Vina", "90"],
                  ].map((row, index) => (
                    <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Seorang guru ingin mengetahui siswa dengan nilai di atas 80. Kolom apa yang harus difokuskan dalam proses filtering?
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q8).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q8" onChange={() => handleAnswer("q8", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 9 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 9
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel: Daftar Penjualan Produk</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Nama Produk", "Harga (Rp)"],
                    ["2", "Laptop", "5000000"],
                    ["3", "Mouse", "50000"],
                    ["4", "Keyboard", "200000"],
                  ].map((row, index) => (
                    <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Setelah mengurutkan data penjualan dari harga tertinggi ke terendah, manajer toko menemukan produk termahal di posisi atas. Apa manfaat dari pengurutan ini?
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q9).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q9" onChange={() => handleAnswer("q9", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 10 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 10
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Langkah apa yang harus dilakukan setelah mengaktifkan fitur filter untuk menyaring data dengan nilai di atas 80?
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q10).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q10" onChange={() => handleAnswer("q10", key)} className="mr-2" />
                {key}. {value}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 11 - Studi Kasus 1 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 11
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel: Skor Lari Siswa</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Nama Siswa", "Skor Lari (detik)"],
                    ["2", "Adi", "12"],
                    ["3", "Bima", "10"],
                    ["4", "Cici", "15"],
                    ["5", "Dani", "11"],
                  ].map((row, index) => (
                    <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Seorang guru olahraga ingin menentukan siswa dengan skor lari tercepat untuk mengikuti lomba antar sekolah. Teknik apa yang harus digunakan untuk mengurutkan data dari skor tercepat (terkecil) ke terlambat (terbesar)?
        </p>
        <div className="flex items-center gap-2 mt-4">
          <label className="text-gray-700 text-sm md:text-base font-medium">
            Jawaban:
          </label>
          <input
            type="text"
            className="w-full max-w-xs px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
            placeholder={answerOptions.q11.placeholder}
            onChange={(e) => handleAnswer("q11", e.target.value)}
          />
        </div>
      </div>

      {/* Soal 12 - Studi Kasus 2 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 12
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel: Data Penjualan Produk</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Nama Produk", "Kategori", "Unit Terjual"],
                    ["2", "Laptop", "Elektronik", "70"],
                    ["3", "Buku Tulis", "Alat Tulis", "30"],
                    ["4", "Headphone", "Elektronik", "60"],
                    ["5", "Pensil", "Alat Tulis", "40"],
                  ].map((row, index) => (
                    <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Seorang penjual ingin menampilkan hanya produk yang terjual lebih dari 50 unit untuk analisis stok. Teknik apa yang harus digunakan?
        </p>
        <div className="flex items-center gap-2 mt-4">
          <label className="text-gray-700 text-sm md:text-base font-medium">
            Jawaban:
          </label>
          <input
            type="text"
            className="w-full max-w-xs px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
            placeholder={answerOptions.q12.placeholder}
            onChange={(e) => handleAnswer("q12", e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleSubmit}
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
        >
          Selesai
        </button>
      </div>
    </Layout>
  );
};

export default Quiz4;