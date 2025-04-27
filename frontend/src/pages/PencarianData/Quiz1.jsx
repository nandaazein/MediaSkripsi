
import Layout from "../../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizPencarianData = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "a",
    q4: "c",
    q5: "d",
    q6: "b",
    q7: "c",
    q8: "d",
    q9: "a",
    q10: "b",
  };

  const answerOptions = {
    q1: {
      a: '=VLOOKUP(A2; D1:E4; 2; FALSE)',
      b: '=VLOOKUP("A2"; D1:E4; 2; TRUE)',
      c: '=VLOOKUP(A2; D1:E4; 1; FALSE)',
      d: '=VLOOKUP("A2"; D1:E4; 1 ; TRUE)',
    },
    q2: {
      a: '=VLOOKUP("A2"; D1:E4; 2; TRUE)',
      b: '=VLOOKUP(A2; D1:E4; 2; FALSE)',
      c: '=VLOOKUP(B03; D1:E4; 1; FALSE)',
      d: '=VLOOKUP("B03"; D1:E4; 1; TRUE)',
    },
    q3: {
      a: '=VLOOKUP(A4; C1:D4; 2; FALSE)',
      b: '=VLOOKUP("A4"; C1:D4; 2; TRUE)',
      c: '=VLOOKUP(A4; C1:D4; 1; FALSE)',
      d: '=VLOOKUP("A4"; C1:D4; 2; TRUE)',
    },
    q4: {
      a: '=HLOOKUP(A3; C1:F2; 1; FALSE)',
      b: '=HLOOKUP("A3"; C1:F2; 1; TRUE)',
      c: '=HLOOKUP(A3; C1:F2; 2; FALSE)',
      d: '=HLOOKUP("A3"; C1:F2; 2; TRUE)',
    },
    q5: {
      a: '=HLOOKUP("A4" ; C1:F2; 1; FALSE)',
      b: '=HLOOKUP(A4; C1:F2; 1; FALSE)',
      c: '=HLOOKUP("A4"; C1:F2; 2; TRUE)',
      d: '=HLOOKUP(A4; C1:F2; 2; FALSE)',
    },
    q6: {
      a: '=INDEX(B2:B4; 2)',
      b: '=INDEX(B2:B4; 3)',
      c: '=INDEX(B2:B4; "2")',
      d: '=INDEX(B2:B4; "3")',
    },
    q7: {
      a: '=MATCH("Vina"; B2:B4; 0)',
      b: '=MATCH(Vina; B2:A4; 1)',
      c: '=MATCH("Vina"; A2:A4; 0)',
      d: '=MATCH(Vina; A2:A4; 1)',
    },
    q8: {
      a: '=INDEX(B1:B4; 3)',
      b: '=INDEX(A1:A4; 3)',
      c: '=INDEX(A1:B4; "3"; "3")',
      d: '=INDEX(A1:B4; 3; 3)',
    },
    q9: {
      a: '=MATCH("K01"; A1:A4; 0)',
      b: '=MATCH(K01; A1:A4; 1)',
      c: '=MATCH("K01"; B1:B4; 1)',
      d: '=MATCH(K01; B1:B4; 0)',
    },
    q10: {
      a: '=CHOOSE("2"; "Pramuka"; "Bola Voli"; "Seni Tari"; "Renang")',
      b: '=CHOOSE(3 "Pramuka"; "Bola Voli"; "Seni Tari"; "Renang")',
      c: '=CHOOSE(2; "Seni Tari"; "Bola Voli"; "Pramuka")',
      d: '=CHOOSE("3"; "Pramuka"; "Bola Voli"; "Seni Tari")',
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
          Kuis Fungsi Lookup dan Reference
        </h1>
      </div>

      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-8">
          Selamat datang di kuis tentang fungsi VLOOKUP, HLOOKUP, INDEX, MATCH, dan CHOOSE! Kuis ini berisi 10 soal pilihan ganda untuk melatih pemahamanmu dalam mencari data. Soal 1-5 menggunakan tabel utama dan tabel referensi, sedangkan soal 6-10 hanya menggunakan satu tabel utama. Pilih rumus yang benar untuk setiap soal. Skor minimal 70 diperlukan untuk lanjut ke materi berikutnya. Selamat mengerjakan!
        </p>
      </div>

      {/* Soal 1: VLOOKUP - Nilai Matematika */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 1
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Utama: Daftar Nilai Siswa</strong>
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
                    ["1", "Kode Siswa", "Nama Siswa", "Nilai Matematika"],
                    ["2", "S01", "Ani", "[Kosong]"],
                    ["3", "S02", "Budi", "[Kosong]"],
                    ["4", "S03", "Cici", "[Kosong]"],
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
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Referensi: Data Nilai Matematika</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">D</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">E</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Kode Siswa", "Nilai Matematika"],
                    ["2", "S01", "85"],
                    ["3", "S02", "90"],
                    ["4", "S03", "78"],
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
          Kamu ingin mengisi kolom <strong>Nilai Matematika</strong> untuk kode <code>S01</code> di Tabel Utama menggunakan <strong>VLOOKUP</strong>. Rumus yang benar adalah:
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q1).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q1" onChange={() => handleAnswer("q1", key)} className="mr-2" />
                {key}. <code>{value}</code>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 2: VLOOKUP - Nama Barang */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 2
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Utama: Daftar Belanja Sekolah</strong>
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
                    ["1", "Kode Barang", "Nama Barang", "Harga (Rp)"],
                    ["2", "B01", "[Kosong]", "2000"],
                    ["3", "B02", "[Kosong]", "5000"],
                    ["4", "B03", "[Kosong]", "3000"],
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
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Referensi: Data Barang</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">D</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">E</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Kode Barang", "Nama Barang"],
                    ["2", "B01", "Pensil"],
                    ["3", "B02", "Buku Tulis"],
                    ["4", "B03", "Penghapus"],
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
          Kamu ingin mengisi kolom <strong>Nama Barang</strong> untuk kode <code>B01</code> di Tabel Utama menggunakan <strong>VLOOKUP</strong>. Rumus yang benar adalah:
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q2).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q2" onChange={() => handleAnswer("q2", key)} className="mr-2" />
                {key}. <code>{value}</code>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 3: VLOOKUP - Harga Barang */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 3
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Utama: Daftar Harga Jual</strong>
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
                    ["1", "Kode Barang", "Harga Barang (Rp)"],
                    ["2", "I01", "[Kosong]"],
                    ["3", "I02", "[Kosong]"],
                    ["4", "I03", "[Kosong]"],
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
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Referensi: Data Harga Barang</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">D</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Kode Barang", "Harga Barang (Rp)"],
                    ["2", "I01", "5000"],
                    ["3", "I02", "6000"],
                    ["4", "I03", "7000"],
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
          Kamu ingin mengisi kolom <strong>Harga Barang</strong> untuk kode <code>I03</code> di Tabel Utama menggunakan <strong>VLOOKUP</strong>. Rumus yang benar adalah:
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q3).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q3" onChange={() => handleAnswer("q3", key)} className="mr-2" />
                {key}. <code>{value}</code>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 4: HLOOKUP - Tugas Piket */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 4
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Utama: Jadwal Piket Harian</strong>
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
                    ["1", "Hari", "Tugas Piket"],
                    ["2", "Hari 1", "[Kosong]"],
                    ["3", "Hari 2", "[Kosong]"],
                    ["4", "Hari 3", "[Kosong]"],
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
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Referensi: Data Piket</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">D</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">E</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">F</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Hari", "Hari 1", "Hari 2", "Hari 3"],
                    ["2", "Tugas", "Menyapu", "Membersihkan Papan", "Mengosongkan Sampah"],
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 1 ? "bg-green-50" : "bg-white"}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`border border-gray-300 px-4 py-2 ${
                            i === 0
                              ? "bg-gray-200 font-bold w-10 text-black"
                              : i === 1 && index < 2
                              ? "bg-[#255F38] text-white"
                              : ""
                          }`}
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
          Kamu ingin mengisi kolom <strong>Tugas Piket</strong> untuk Hari 2 di Tabel Utama menggunakan <strong>HLOOKUP</strong>. Rumus yang benar adalah:
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q4).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q4" onChange={() => handleAnswer("q4", key)} className="mr-2" />
                {key}. <code>{value}</code>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 5: HLOOKUP - Kelompok Piket */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 5
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-4 mt-6">
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Utama: Jadwal Kelompok Piket</strong>
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
                    ["1", "Hari", "Kelompok Piket"],
                    ["2", "Hari 1", "[Kosong]"],
                    ["3", "Hari 2", "[Kosong]"],
                    ["4", "Hari 3", "[Kosong]"],
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
          <div>
            <p className="text-gray-700 text-sm md:text-base mb-2">
              <strong>Tabel Referensi: Data Kelompok Piket</strong>
            </p>
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">D</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">E</th>
                    <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">F</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Hari", "Hari 1", "Hari 2", "Hari 3"],
                    ["2", "Kelompok", "Kelompok A", "Kelompok B", "Kelompok C"],
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 1 ? "bg-green-50" : "bg-white"}>
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`border border-gray-300 px-4 py-2 ${
                            i === 0
                              ? "bg-gray-200 font-bold w-10 text-black"
                              : i === 1 && index < 2
                              ? "bg-[#255F38] text-white"
                              : ""
                          }`}
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
          Kamu ingin mengisi kolom <strong>Kelompok Piket</strong> untuk Hari 3 di Tabel Utama menggunakan <strong>HLOOKUP</strong>. Rumus yang benar adalah:
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q5).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q5" onChange={() => handleAnswer("q5", key)} className="mr-2" />
                {key}. <code>{value}</code>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 6: INDEX - Nilai Ujian */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 6
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          <strong>Tabel: Daftar Nilai IPA</strong>
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
                ["1", "Nama", "Nilai"],
                ["2", "Delphia", "88"],
                ["3", "Iif", "92"],
                ["4", "May", "85"],
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
          Kamu ingin mengambil nilai pada posisi ke-2 (baris 2, kolom Nilai) menggunakan <strong>INDEX</strong>. Rumus yang benar adalah:
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q6).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q6" onChange={() => handleAnswer("q6", key)} className="mr-2" />
                {key}. <code>{value}</code>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 7: MATCH - Posisi Nama Peserta */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 7
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          <strong>Tabel: Daftar Peserta Lomba</strong>
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
                ["1", "Nama", "No Peserta"],
                ["2", "Rina", "P01"],
                ["3", "Tono", "P02"],
                ["4", "Vina", "P03"],
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
          Kamu ingin mencari posisi <code>Vina</code> di kolom Nama menggunakan <strong>MATCH</strong>. Rumus yang benar adalah:
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q7).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q7" onChange={() => handleAnswer("q7", key)} className="mr-2" />
                {key}. <code>{value}</code>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 8: INDEX - Harga Barang */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 8
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          <strong>Tabel: Daftar Harga Alat Tulis</strong>
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
                ["1", "No", "Harga (Rp)"],
                ["2", "1", "3000"],
                ["3", "2", "7000"],
                ["4", "3", "5000"],
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
          Kamu ingin mengambil harga pada posisi baris ke-3 dan kolom ke-3 pada tabel menggunakan <strong>INDEX</strong>. Rumus yang benar adalah:
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q8).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q8" onChange={() => handleAnswer("q8", key)} className="mr-2" />
                {key}. <code>{value}</code>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 9: MATCH - Posisi Kode Siswa */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 9
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          <strong>Tabel: Daftar Kode Siswa</strong>
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
                ["1", "Kode Siswa", "Nama Siswa"],
                ["2", "K01", "Andi"],
                ["3", "K02", "Budi"],
                ["4", "K03", "Cici"],
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
          Kamu ingin mencari posisi <code>K01</code> di kolom Kode Siswa menggunakan <strong>MATCH</strong>. Rumus yang benar adalah:
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q9).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q9" onChange={() => handleAnswer("q9", key)} className="mr-2" />
                {key}. <code>{value}</code>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Soal 10: CHOOSE - Tugas Ekstrakurikuler */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 10
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          <strong>Jadwal Ekstrakurikuler</strong>
        </p>
        <ul className="text-gray-700 text-sm md:text-base mt-2 list-disc list-inside">
          <li>Pramuka</li>
          <li>Bola Voli</li>
          <li>Seni Tari</li>
          <li>Renang</li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Kamu ingin memilih kegiatan ekstrakurikuler berdasarkan urutan ke-3 menggunakan <strong>CHOOSE</strong>. Rumus yang benar adalah....
        </p>
        <ul className="list-none space-y-2">
          {Object.entries(answerOptions.q10).map(([key, value]) => (
            <li key={key}>
              <label>
                <input type="radio" name="q10" onChange={() => handleAnswer("q10", key)} className="mr-2" />
                {key}. <code>{value}</code>
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

export default QuizPencarianData;