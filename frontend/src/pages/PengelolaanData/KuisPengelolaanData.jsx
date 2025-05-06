import Layout from "../../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizPengelolaanData = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const correctAnswers = {
    q1: "b", // Membuat data lebih terstruktur
    q2: "b", // Computational Thinking
    q3: "a", // Tentukan tujuan
    q4: "b", // Sorting descending
    q5: "b", // Filtering
    q6: "b", // Sort Z-A
    q7: "b", // Abstraksi
    q8: "b", // Filtering Basket
    q9: "b", // Pengenalan pola
    q10: "b", // Filtering Elektronik
  };

  const answerOptions = {
    q1: {
      a: "Mempercepat proses pengetikan data",
      b: "Membuat data lebih terstruktur dan mudah dianalisis",
      c: "Mengubah format data menjadi grafik",
      d: "Menghapus data yang tidak diperlukan",
    },
    q2: {
      a: "Menggunakan rumus matematika untuk mengelola data",
      b: "Memecah masalah, mengenali pola, abstraksi, dan membuat algoritma",
      c: "Menyimpan data dalam database eksternal",
      d: "Mengurutkan data tanpa menggunakan spreadsheet",
    },
    q3: {
      a: "Menentukan tujuan pengelolaan data",
      b: "Mengurutkan data secara acak",
      c: "Menghapus data yang tidak relevan",
      d: "Membuat grafik dari data",
    },
    q4: {
      a: "Filtering",
      b: "Sorting dengan urutan descending (Z-A)",
      c: "Sorting dengan urutan ascending (A-Z)",
      d: "Custom Filtering",
    },
    q5: {
      a: "Mengurutkan data dari kecil ke besar",
      b: "Menampilkan hanya data yang memenuhi kriteria tertentu",
      c: "Mengubah data menjadi format lain",
      d: "Menghapus data secara permanen",
    },
    q6: {
      a: "Blok kolom Skor, klik kanan, pilih Sort A-Z",
      b: "Blok kolom Skor, klik kanan, pilih Sort Z-A",
      c: "Blok kolom Nama, klik kanan, pilih Filter",
      d: "Blok kolom Kelas, klik kanan, pilih Custom Sort",
    },
    q7: {
      a: "Mengurutkan data berdasarkan beberapa kolom",
      b: "Fokus pada informasi penting dan mengabaikan data tidak relevan",
      c: "Menambahkan data baru ke dalam tabel",
      d: "Mengidentifikasi pola dalam data",
    },
    q8: {
      a: "Blok kolom Ekstrakurikuler, klik kanan, pilih Sort Z-A",
      b: "Blok kolom Ekstrakurikuler, klik kanan, pilih Filter, centang 'Basket'",
      c: "Blok kolom Nama, klik kanan, pilih Sort A-Z",
      d: "Blok kolom Kelas, klik kanan, pilih Custom Sort",
    },
    q9: {
      a: "Membantu menambah data baru",
      b: "Memudahkan pemahaman urutan atau struktur data",
      c: "Mengubah data menjadi format lain",
      d: "Menghapus data yang tidak diperlukan",
    },
    q10: {
      a: "Sorting dengan urutan ascending",
      b: "Filtering dengan kriteria 'Elektronik'",
      c: "Custom Sort berdasarkan harga",
      d: "Sorting dengan urutan descending",
    },
  };

  const handleAnswer = (question, answer) => {
    console.log("Selected:", question, answer);
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = () => {
    try {
      if (Object.keys(answers).length < 10) {
        alert("Harap jawab semua soal sebelum menyelesaikan kuis!");
        return;
      }
      let correctCount = 0;
      Object.keys(correctAnswers).forEach((question) => {
        if (answers[question] === correctAnswers[question]) {
          correctCount++;
        }
      });
      const score = (correctCount / 10) * 100;
      console.log("Submitting:", { answers, correctCount, score, correctAnswers, answerOptions });
      navigate("/feedback-pengelolaan-data", { state: { answers, correctCount, score, correctAnswers, answerOptions } });
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      alert("Terjadi kesalahan saat menyelesaikan kuis. Silakan coba lagi.");
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        KUIS PENGELOLAAN DATA
      </div>

      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-8">
          Selamat datang di kuis tentang pengelolaan data! Kuis ini berisi 10 soal pilihan ganda untuk melatih pemahamanmu dalam menggunakan teknik sorting dan filtering dalam spreadsheet serta pendekatan Computational Thinking. Setiap soal akan menyertakan penjelasan atau tabel data yang perlu kamu analisis untuk memilih jawaban yang tepat. Pilih jawaban yang benar untuk setiap soal. Skor minimal 70 diperlukan untuk lanjut ke materi berikutnya. Selamat mengerjakan!
        </p>
      </div>

      {/* Soal 1: Tujuan Pengelolaan Data */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 1
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Apa tujuan utama pengelolaan data menggunakan sorting dan filtering dalam spreadsheet?
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

      {/* Soal 2: Computational Thinking */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 2
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Apa yang dimaksud dengan pendekatan Computational Thinking dalam pengelolaan data?
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

      {/* Soal 3: Dekomposisi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 3
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Langkah pertama dalam dekomposisi saat mengelola data adalah...
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

      {/* Soal 4: Sorting Nilai Siswa */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 4
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Nilai Tugas Siswa
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
                ["1", "Nama Siswa", "Nilai Tugas"],
                ["2", "Aisyah", "85"],
                ["3", "Budi", "70"],
                ["4", "Citra", "95"],
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Jika kamu ingin mengurutkan data nilai siswa dari tertinggi ke terendah, teknik apa yang digunakan?
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

      {/* Soal 5: Fungsi Filtering */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 5
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Apa fungsi filtering dalam pengelolaan data di spreadsheet?
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

      {/* Soal 6: Sorting Lomba Pidato */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 6
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Hasil Lomba Pidato
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
                ["1", "Nama Siswa", "Kelas", "Skor"],
                ["2", "Rani", "8A", "92"],
                ["3", "Adi", "8B", "78"],
                ["4", "Siti", "8C", "85"],
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Dalam studi kasus lomba pidato, jika Budi ingin mengetahui siswa dengan skor tertinggi, langkah sorting yang tepat adalah...
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

      {/* Soal 7: Abstraksi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 7
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Apa yang dimaksud dengan abstraksi dalam pengelolaan data?
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

      {/* Soal 8: Filtering Ekstrakurikuler Basket */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 8
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Kegiatan Ekstrakurikuler
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
                ["1", "Nama Siswa", "Kelas", "Ekstrakurikuler"],
                ["2", "Bima", "8A", "Basket"],
                ["3", "Lusi", "8B", "Pramuka"],
                ["4", "Tono", "8A", "Basket"],
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Dalam studi kasus ekstrakurikuler, jika Sari ingin menampilkan hanya siswa yang mengikuti Basket, langkah yang tepat adalah...
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

      {/* Soal 9: Pengenalan Pola */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 9
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Apa manfaat utama dari pengenalan pola setelah melakukan sorting?
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

      {/* Soal 10: Filtering Penjualan */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 10
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Penjualan Toko
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
                ["1", "Nama Produk", "Kategori", "Harga (Rp)"],
                ["2", "Televisi", "Elektronik", "5.000.000"],
                ["3", "Nasi Goreng", "Makanan", "15.000"],
                ["4", "Laptop", "Elektronik", "8.000.000"],
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Jika kamu memiliki data penjualan dan ingin menampilkan hanya produk dengan kategori "Elektronik", teknik yang digunakan adalah...
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

export default QuizPengelolaanData;