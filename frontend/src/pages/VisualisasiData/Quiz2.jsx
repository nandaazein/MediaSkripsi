import Layout from "../../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizVisualisasiData = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const correctAnswers = {
    q1: "a",
    q2: "c",
    q3: "b",
    q4: "b",
    q5: "c",
    q6: "a",
    q7: "a",
    q8: "b",
    q9: "c",
    q10: "b", // Diperbaiki
  };

  const answerOptions = {
    q1: {
      a: "Line Chart",
      b: "Pie Chart",
      c: "Bar Chart",
      d: "Column Chart",
    },
    q2: {
      a: "Area Chart",
      b: "Line Chart",
      c: "Pie Chart",
      d: "Bar Chart",
    },
    q3: {
      a: "Line Chart",
      b: "Bar Chart",
      c: "Area Chart",
      d: "Pie Chart",
    },
    q4: {
      a: "Line Chart",
      b: "Column Chart",
      c: "Pie Chart",
      d: "Area Chart",
    },
    q5: {
      a: "Line Chart",
      b: "Bar Chart",
      c: "Pie Chart",
      d: "Column Chart",
    },
    q6: {
      a: "Line Chart",
      b: "Bar Chart",
      c: "Pie Chart",
      d: "Column Chart",
    },
    q7: {
      a: "It becomes hard to read with too many segments",
      b: "It cannot compare categories",
      c: "It does not show trends over time",
      d: "It requires numerical data only",
    },
    q8: {
      a: "Area Chart",
      b: "Bar Chart",
      c: "Pie Chart",
      d: "Line Chart",
    },
    q9: {
      a: "Line Chart",
      b: "Bar Chart",
      c: "Pie Chart",
      d: "Column Chart",
    },
    q10: {
      a: "Line Chart",
      b: "Area Chart",
      c: "Column Chart",
      d: "Pie Chart",
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
      navigate("/feedback2", { state: { answers, correctCount, score, correctAnswers, answerOptions } });
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      alert("Terjadi kesalahan saat menyelesaikan kuis. Silakan coba lagi.");
    }
  };

  return (
    <Layout>
      <div>
        <h1 className="mt-5 text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white">
          Kuis Visualisasi Data
        </h1>
      </div>

      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-8">
          Selamat datang di kuis tentang visualisasi data! Kuis ini berisi 10 soal pilihan ganda untuk melatih pemahamanmu dalam memilih jenis grafik yang tepat untuk berbagai jenis data. Beberapa soal akan menyertakan tabel data yang perlu kamu analisis untuk menentukan grafik yang sesuai. Pilih jawaban yang benar untuk setiap soal. Skor minimal 70 diperlukan untuk lanjut ke materi berikutnya. Selamat mengerjakan!
        </p>
      </div>

      {/* Soal 1 */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 1
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Grafik apa yang paling tepat untuk menunjukkan tren nilai ulangan siswa selama satu semester?
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Kamu ingin menampilkan persentase pengeluaran bulanan untuk makanan, transportasi, dan hiburan. Grafik apa yang paling sesuai?
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Kamu ingin membandingkan jumlah siswa yang memilih berbagai ekstrakurikuler seperti Pramuka, Bola Voli, dan Seni Tari. Grafik apa yang paling tepat?
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
          <strong>Tabel: Nilai Ujian Rata-rata</strong>
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
                ["1", "Mata Pelajaran", "Nilai Rata-rata"],
                ["2", "Matematika", "85"],
                ["3", "IPA", "78"],
                ["4", "Bahasa Inggris", "90"],
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
          Grafik apa yang paling tepat untuk membandingkan nilai rata-rata ujian berdasarkan tabel di atas?
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
        <p className="text-gray-700 text-sm md:text-base mt-6">
          <strong>Tabel: Pengeluaran Bulanan</strong>
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
                ["1", "Kategori", "Persentase"],
                ["2", "Makanan", "40%"],
                ["3", "Transportasi", "30%"],
                ["4", "Hiburan", "20%"],
                ["5", "Lainnya", "10%"],
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
          Grafik apa yang paling tepat untuk menunjukkan proporsi pengeluaran bulanan berdasarkan tabel di atas?
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
          <strong>Tabel: Jumlah Siswa yang Mengumpulkan Tugas</strong>
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
                ["1", "Minggu", "Jumlah Siswa"],
                ["2", "Minggu 1", "20"],
                ["3", "Minggu 2", "25"],
                ["4", "Minggu 3", "30"],
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
          Grafik apa yang paling tepat untuk menunjukkan tren jumlah siswa yang mengumpulkan tugas dari minggu ke minggu berdasarkan tabel di atas?
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Apa kelemahan utama dari Pie Chart jika digunakan untuk menampilkan terlalu banyak kategori?
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Kamu ingin membandingkan jumlah siswa laki-laki dan perempuan di tiga kelas berbeda. Grafik apa yang paling tepat?
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Kamu memiliki data tentang preferensi makanan di kalangan siswa (misalnya, pizza, burger, sushi). Grafik apa yang paling tepat untuk menunjukkan persentase masing-masing preferensi?
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
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Kamu ingin menunjukkan akumulasi jumlah siswa yang hadir di perpustakaan setiap minggu selama satu bulan. Grafik apa yang paling tepat?
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

export default QuizVisualisasiData;