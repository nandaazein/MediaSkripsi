// import Layout from "../../components/Layout";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const QuizPeringkasanData = () => {
//   const navigate = useNavigate();
//   const [answers, setAnswers] = useState({});

//   const correctAnswers = {
//     q1: "c", // COUNTIF
//     q2: "a", // SUMIF
//     q3: "d", // COUNTIFS
//     q4: "b", // SUMIFS
//     q5: "c", // COUNTIF
//     q6: "a", // SUMIF
//     q7: "d", // COUNTIFS
//     q8: "b", // SUMIFS
//     q9: "c", // COUNTIF
//     q10: "a", // SUMIF
//   };

//   const answerOptions = {
//     q1: {
//       a: "=SUMIF(B2:B5, \">75\", C2:C6)",
//       b: "=SUMIFS(B2:B5, \">75\")",
//       c: "=COUNTIF(B2:B5, \">75\")",
//       d: "=COUNTIFS(B2:B5, \">75\", C2:C6, \"Lulus\")",
//     },
//     q2: {
//       a: "=SUMIF(C2:C4, \"Makanan\", D2:D5)",
//       b: "=COUNTIF(C2:C4, \"Makanan\")",
//       c: "=SUMIFS(C2:C4, \"Makanan\", D2:D5)",
//       d: "=COUNTIFS(C2:C4, \"Makanan\", D2:D5, \">0\")",
//     },
//     q3: {
//       a: "=SUMIF(C2:C5, \"8A\", D2:D6)",
//       b: "=COUNTIF(C2:C5, \"8A\")",
//       c: "=SUMIFS(D2:D5, C2:C6, \"8A\", D2:D6, \">75\")",
//       d: "=COUNTIFS(C2:C6, \"8A\", D2:D6, \">75\")",
//     },
//     q4: {
//       a: "=SUMIF(C2:C7, \"Elektronik\", D2:D7)",
//       b: "=SUMIFS(D2:D7, C2:C7, \"Elektronik\", B2:B7, \"Januari\")",
//       c: "=COUNTIF(C2:C7, \"Elektronik\")",
//       d: "=COUNTIFS(C2:C7, \"Elektronik\", B2:B7, \"Januari\")",
//     },
//     q5: {
//       a: "=SUMIF(D2:D9, \"Petualangan\", E2:E9)",
//       b: "=SUMIFS(D2:D9, \"Petualangan\", E2:E9, \">4\")",
//       c: "=COUNTIF(D2:D9, \"Petualangan\")",
//       d: "=COUNTIFS(D2:D9, \"Petualangan\", E2:E9, \">4\")",
//     },
//     q6: {
//       a: "=SUMIF(D2:D9, \"Kebersihan\", E2:E9)",
//       b: "=COUNTIF(D2:D9, \"Kebersihan\")",
//       c: "=SUMIFS(D2:D9, \"Kebersihan\", E2:E9, \">5000\")",
//       d: "=COUNTIFS(D2:D9, \"Kebersihan\", E2:E9, \">5000\")",
//     },
//     q7: {
//       a: "=SUMIF(D2:D11, \"8A\", E2:E11)",
//       b: "=COUNTIF(D2:D11, \"8A\")",
//       c: "=SUMIFS(F2:F11, D2:D11, \"8A\", E2:E11, \"Perempuan\")",
//       d: "=COUNTIFS(D2:D11, \"8A\", E2:E11, \"Perempuan\", F2:F11, \"Hadir\")",
//     },
//     q8: {
//       a: "=SUMIF(C2:C9, \"Alat Kebersihan\", D2:D9)",
//       b: "=SUMIFS(D2:D9, B2:B9, \"Maret\", C2:C9, \"Alat Kebersihan\")",
//       c: "=COUNTIF(C2:C9, \"Alat Kebersihan\")",
//       d: "=COUNTIFS(B2:B9, \"Maret\", C2:C9, \"Alat Kebersihan\")",
//     },
//     q9: {
//       a: "=SUMIF(C2:C6, \">80\", D2:D6)",
//       b: "=SUMIFS(C2:C6, \">80\", D2:D6, \"Lulus\")",
//       c: "=COUNTIF(C2:C6, \">80\")",
//       d: "=COUNTIFS(C2:C6, \">80\", D2:D6, \"Lulus\")",
//     },
//     q10: {
//       a: "=SUMIF(C2:C6, \"Transportasi\", D2:D6)",
//       b: "=COUNTIF(C2:C6, \"Transportasi\")",
//       c: "=SUMIFS(C2:C6, \"Transportasi\", D2:D6, \">10000\")",
//       d: "=COUNTIFS(C2:C6, \"Transportasi\", D2:D6, \">10000\")",
//     },
//   };

//   const handleAnswer = (question, answer) => {
//     console.log("Selected:", question, answer);
//     setAnswers({ ...answers, [question]: answer });
//   };

//   const handleSubmit = () => {
//     try {
//       if (Object.keys(answers).length < 10) {
//         alert("Harap jawab semua soal sebelum menyelesaikan kuis!");
//         return;
//       }
//       let correctCount = 0;
//       Object.keys(correctAnswers).forEach((question) => {
//         if (answers[question] === correctAnswers[question]) {
//           correctCount++;
//         }
//       });
//       const score = (correctCount / 10) * 100;
//       console.log("Submitting:", { answers, correctCount, score, correctAnswers, answerOptions });
//       navigate("/feedback3", { state: { answers, correctCount, score, correctAnswers, answerOptions } });
//     } catch (error) {
//       console.error("Error in handleSubmit:", error);
//       alert("Terjadi kesalahan saat menyelesaikan kuis. Silakan coba lagi.");
//     }
//   };

//   return (
//     <Layout>
//       <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         KUIS PERINGKASAN DATA
//       </div>

//       <div>
//         <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-8">
//           Selamat datang di kuis tentang peringkasan data! Kuis ini berisi 10 soal pilihan ganda untuk melatih pemahamanmu dalam menggunakan fungsi SUMIF, COUNTIF, SUMIFS, dan COUNTIFS dalam spreadsheet. Setiap soal akan menyertakan tabel data yang perlu kamu analisis untuk memilih formula yang tepat. Pilih jawaban yang benar untuk setiap soal. Skor minimal 70 diperlukan untuk lanjut ke materi berikutnya. Selamat mengerjakan!
//         </p>
//       </div>

//       {/* Soal 1: 2 kolom data (A: Nama Siswa, B: Nilai Ujian) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 1
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Nilai Ujian Siswa
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Nama Siswa", "Nilai Ujian"],
//                 ["2", "Aisyah", "80"],
//                 ["3", "Budi", "65"],
//                 ["4", "Citra", "90"],
//                 ["5", "Dani", "70"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung jumlah siswa yang mendapatkan nilai di atas 75 berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q1).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q1" onChange={() => handleAnswer("q1", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Soal 2: 3 kolom data (A: Tanggal, B: Kategori, C: Jumlah) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 2
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Pengeluaran Harian
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Tanggal", "Kategori", "Jumlah (Rp)"],
//                 ["2", "1 Jan", "Makanan", "15.000"],
//                 ["3", "2 Jan", "Transportasi", "10.000"],
//                 ["4", "3 Jan", "Makanan", "20.000"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung total pengeluaran untuk kategori Makanan berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q2).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q2" onChange={() => handleAnswer("q2", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Soal 3: 3 kolom data (A: Nama Siswa, B: Kelas, C: Nilai Ujian) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 3
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Nilai Siswa per Kelas
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Nama Siswa", "Kelas", "Nilai Ujian"],
//                 ["2", "Aisyah", "8A", "80"],
//                 ["3", "Budi", "8B", "65"],
//                 ["4", "Citra", "8A", "90"],
//                 ["5", "Dani", "8A", "70"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung jumlah siswa dari kelas 8A yang mendapatkan nilai di atas 75 berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q3).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q3" onChange={() => handleAnswer("q3", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Soal 4: 3 kolom data (A: Bulan, B: Kategori, C: Pendapatan) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 4
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Penjualan Produk
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Bulan", "Kategori", "Pendapatan (Rp)"],
//                 ["2", "Januari", "Elektronik", "8.500.000"],
//                 ["3", "Januari", "Makanan", "500.000"],
//                 ["4", "Februari", "Elektronik", "2.000.000"],
//                 ["5", "Februari", "Konsumsi", "15.000"],
//                 ["6", "Januari", "Elektronik", "150.000"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung total pendapatan kategori Elektronik pada bulan Januari berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q4).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q4" onChange={() => handleAnswer("q4", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Soal 5: 3 kolom data (A: Judul Film, B: Genre, C: Rating) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 5
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Daftar Film yang Ditonton
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Judul Film", "Genre", "Rating"],
//                 ["2", "Jungle Adventure", "Petualangan", "5"],
//                 ["3", "Galaxy Wars", "Fiksi Ilmiah", "4"],
//                 ["4", "Treasure Island", "Petualangan", "5"],
//                 ["5", "Funny Days", "Komedi", "3"],
//                 ["6", "Mount Quest", "Petualangan", "4"],
//                 ["7", "Love in Summer", "Romantis", "2"],
//                 ["8", "Spy Mission", "Aksi", "4"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung jumlah film bergenre Petualangan berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q5).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q5" onChange={() => handleAnswer("q5", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Soal 6: 3 kolom data (A: Nama Siswa, B: Kategori, C: Jumlah) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 6
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Daftar Pembayaran Iuran
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Nama Siswa", "Kategori", "Jumlah (Rp)"],
//                 ["2", "Andi", "Kebersihan", "5.000"],
//                 ["3", "Budi", "Kas", "10.000"],
//                 ["4", "Citra", "Kebersihan", "5.000"],
//                 ["5", "Dina", "Kas", "10.000"],
//                 ["6", "Eko", "Kebersihan", "5.000"],
//                 ["7", "Fira", "Kas", "10.000"],
//                 ["8", "Gita", "Kebersihan", "5.000"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung total iuran untuk kategori Kebersihan berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q6).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q6" onChange={() => handleAnswer("q6", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Soal 7: 4 kolom data (A: Nama, B: Kelas, C: Jenis Kelamin, D: Kehadiran) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 7
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Kehadiran Peserta Senam Pagi
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">D</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Nama", "Kelas", "Jenis Kelamin", "Kehadiran"],
//                 ["2", "Alya", "8A", "Perempuan", "Hadir"],
//                 ["3", "Raka", "8A", "Laki-laki", "Hadir"],
//                 ["4", "Salsa", "8A", "Perempuan", "Hadir"],
//                 ["5", "Bima", "8A", "Laki-laki", "Tidak Hadir"],
//                 ["6", "Nadia", "8B", "Perempuan", "Hadir"],
//                 ["7", "Farhan", "8B", "Laki-laki", "Hadir"],
//                 ["8", "Nisa", "8A", "Perempuan", "Hadir"],
//                 ["9", "Iqbal", "8C", "Laki-laki", "Tidak Hadir"],
//                 ["10", "Zahra", "8A", "Perempuan", "Tidak Hadir"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung jumlah siswa perempuan dari kelas 8A yang hadir berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q7).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q7" onChange={() => handleAnswer("q7", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Soal 8: 3 kolom data (A: Bulan, B: Jenis, C: Jumlah) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 8
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Pengeluaran Kelas
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Bulan", "Jenis", "Jumlah (Rp)"],
//                 ["2", "Januari", "Alat Kebersihan", "30.000"],
//                 ["3", "Januari", "Dekorasi", "25.000"],
//                 ["4", "Februari", "Alat Kebersihan", "20.000"],
//                 ["5", "Februari", "Konsumsi", "15.000"],
//                 ["6", "Maret", "Alat Kebersihan", "40.000"],
//                 ["7", "Maret", "Dekorasi", "30.000"],
//                 ["8", "Maret", "Alat Kebersihan", "35.000"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung total pengeluaran untuk Alat Kebersihan pada bulan Maret berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q8).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q8" onChange={() => handleAnswer("q8", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Soal 9: 2 kolom data (A: Nama Siswa, B: Nilai Ujian) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 9
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Nilai Ujian Siswa
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Nama Siswa", "Nilai Ujian"],
//                 ["2", "Aisyah", "80"],
//                 ["3", "Budi", "65"],
//                 ["4", "Citra", "90"],
//                 ["5", "Dani", "70"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung jumlah siswa yang mendapatkan nilai di atas 80 berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q9).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q9" onChange={() => handleAnswer("q9", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Soal 10: 3 kolom data (A: Tanggal, B: Kategori, C: Jumlah) */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Soal 10
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Tabel: Pengeluaran Bulanan
//         </p>
//         <div className="overflow-x-auto">
//           <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
//                 <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ["1", "Tanggal", "Kategori", "Jumlah (Rp)"],
//                 ["2", "1 Feb", "Transportasi", "20.000"],
//                 ["3", "2 Feb", "Makanan", "15.000"],
//                 ["4", "3 Feb", "Transportasi", "25.000"],
//                 ["5", "4 Feb", "Hiburan", "10.000"],
//               ].map((row, index) => (
//                 <tr key={index} className={index === 0 ? "bg-[#255F38] text-white" : index % 2 === 1 ? "bg-green-50" : "bg-white"}>
//                   {row.map((cell, i) => (
//                     <td
//                       key={i}
//                       className={`border border-gray-300 px-4 py-2 ${i === 0 ? "bg-gray-200 font-bold w-10 text-black" : ""}`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4">
//           Formula apa yang paling tepat untuk menghitung total pengeluaran untuk kategori Transportasi berdasarkan tabel di atas?
//         </p>
//         <ul className="list-none space-y-2">
//           {Object.entries(answerOptions.q10).map(([key, value]) => (
//             <li key={key}>
//               <label>
//                 <input type="radio" name="q10" onChange={() => handleAnswer("q10", key)} className="mr-2" />
//                 {key}. {value}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex justify-center mt-8">
//         <button
//           onClick={handleSubmit}
//           className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
//         >
//           Selesai
//         </button>
//       </div>
//     </Layout>
//   );
// };

// export default QuizPeringkasanData;

import Layout from "../../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizPeringkasanData = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const correctAnswers = {
    q1: "c", // COUNTIF
    q2: "a", // SUMIF
    q3: "d", // COUNTIFS
    q4: "b", // SUMIFS
    q5: "c", // COUNTIF
    q6: "a", // SUMIF
    q7: "d", // COUNTIFS
    q8: "b", // SUMIFS
    q9: "c", // COUNTIF
    q10: "a", // SUMIF
  };

  const answerOptions = {
    q1: {
      a: "=SUMIF(B2:B5, \">75\")",
      b: "=SUMIFS(B2:B5, \">75\")",
      c: "=COUNTIF(B2:B5, \">75\")",
      d: "=COUNTIFS(B2:B5, \">75\")",
    },
    q2: {
      a: "=SUMIF(B2:B4, \"Makanan\", C2:C4)",
      b: "=COUNTIF(B2:B4, \"Makanan\")",
      c: "=SUMIFS(B2:B4, \"Makanan\", C2:C4)",
      d: "=COUNTIFS(B2:B4, \"Makanan\", C2:C4, \">0\")",
    },
    q3: {
      a: "=SUMIF(B2:B5, \"8A\", C2:C5)",
      b: "=COUNTIF(B2:B5, \"8A\")",
      c: "=SUMIFS(C2:C5, B2:B5, \"8A\", C2:C5, \">75\")",
      d: "=COUNTIFS(B2:B5, \"8A\", C2:C5, \">75\")",
    },
    q4: {
      a: "=SUMIF(B2:B6, \"Elektronik\", C2:C6)",
      b: "=SUMIFS(C2:C6, B2:B6, \"Elektronik\", A2:A6, \"Januari\")",
      c: "=COUNTIF(B2:B6, \"Elektronik\")",
      d: "=COUNTIFS(B2:B6, \"Elektronik\", A2:A6, \"Januari\")",
    },
    q5: {
      a: "=SUMIF(B2:B8, \"Petualangan\", C2:C8)",
      b: "=SUMIFS(B2:B8, \"Petualangan\", C2:C8, \">4\")",
      c: "=COUNTIF(B2:B8, \"Petualangan\")",
      d: "=COUNTIFS(B2:B8, \"Petualangan\", C2:C8, \">4\")",
    },
    q6: {
      a: "=SUMIF(B2:B8, \"Kebersihan\", C2:C8)",
      b: "=COUNTIF(B2:B8, \"Kebersihan\")",
      c: "=SUMIFS(B2:B8, \"Kebersihan\", C2:C8, \">5000\")",
      d: "=COUNTIFS(B2:B8, \"Kebersihan\", C2:C8, \">5000\")",
    },
    q7: {
      a: "=SUMIF(B2:B10, \"8A\", C2:C10)",
      b: "=COUNTIF(B2:B10, \"8A\")",
      c: "=SUMIFS(D2:D10, B2:B10, \"8A\", C2:C10, \"Perempuan\")",
      d: "=COUNTIFS(B2:B10, \"8A\", C2:C10, \"Perempuan\", D2:D10, \"Hadir\")",
    },
    q8: {
      a: "=SUMIF(B2:B8, \"Alat Kebersihan\", C2:C8)",
      b: "=SUMIFS(C2:C8, A2:A8, \"Maret\", B2:B8, \"Alat Kebersihan\")",
      c: "=COUNTIF(B2:B8, \"Alat Kebersihan\")",
      d: "=COUNTIFS(A2:A8, \"Maret\", B2:B8, \"Alat Kebersihan\")",
    },
    q9: {
      a: "=SUMIF(B2:B5, \">80\")",
      b: "=SUMIFS(B2:B5, \">80\")",
      c: "=COUNTIF(B2:B5, \">80\")",
      d: "=COUNTIFS(B2:B5, \">80\")",
    },
    q10: {
      a: "=SUMIF(B2:B5, \"Transportasi\", C2:C5)",
      b: "=COUNTIF(B2:B5, \"Transportasi\")",
      c: "=SUMIFS(B2:B5, \"Transportasi\", C2:C5, \">10000\")",
      d: "=COUNTIFS(B2:B5, \"Transportasi\", C2:C5, \">10000\")",
    },
  };

  const handleAnswer = (question, answer) => {
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
      navigate("/feedback3", { state: { answers, correctCount, score, correctAnswers, answerOptions } });
    } catch (error) {
      alert("Terjadi kesalahan saat menyelesaikan kuis. Silakan coba lagi.");
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        KUIS PERINGKASAN DATA
      </div>

      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-8">
          Selamat datang di kuis tentang peringkasan data! Kuis ini berisi 10 soal pilihan ganda untuk melatih pemahamanmu dalam menggunakan fungsi SUMIF, COUNTIF, SUMIFS, dan COUNTIFS dalam spreadsheet. Setiap soal akan menyertakan tabel data yang perlu kamu analisis untuk memilih formula yang tepat. Pilih jawaban yang benar untuk setiap soal. Skor minimal 70 diperlukan untuk lanjut ke materi berikutnya. Selamat mengerjakan!
        </p>
      </div>

      {/* Soal 1: 2 kolom data (A: Nama Siswa, B: Nilai Ujian) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 1
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Nilai Ujian Siswa
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
                ["2", "Aisyah", "80"],
                ["3", "Budi", "65"],
                ["4", "Citra", "90"],
                ["5", "Dani", "70"],
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
          Formula apa yang paling tepat untuk menghitung jumlah siswa yang mendapatkan nilai di atas 75 berdasarkan tabel di atas?
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

      {/* Soal 2: 3 kolom data (A: Tanggal, B: Kategori, C: Jumlah) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 2
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Pengeluaran Harian
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
                ["1", "Tanggal", "Kategori", "Jumlah (Rp)"],
                ["2", "1 Jan", "Makanan", "15.000"],
                ["3", "2 Jan", "Transportasi", "10.000"],
                ["4", "3 Jan", "Makanan", "20.000"],
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
          Formula apa yang paling tepat untuk menghitung total pengeluaran untuk kategori Makanan berdasarkan tabel di atas?
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

      {/* Soal 3: 3 kolom data (A: Nama Siswa, B: Kelas, C: Nilai Ujian) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 3
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Nilai Siswa per Kelas
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
                ["1", "Nama Siswa", "Kelas", "Nilai Ujian"],
                ["2", "Aisyah", "8A", "80"],
                ["3", "Budi", "8B", "65"],
                ["4", "Citra", "8A", "90"],
                ["5", "Dani", "8A", "70"],
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
          Formula apa yang paling tepat untuk menghitung jumlah siswa dari kelas 8A yang mendapatkan nilai di atas 75 berdasarkan tabel di atas?
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

      {/* Soal 4: 3 kolom data (A: Bulan, B: Kategori, C: Pendapatan) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 4
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Penjualan Produk
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
                ["1", "Bulan", "Kategori", "Pendapatan (Rp)"],
                ["2", "Januari", "Elektronik", "8.500.000"],
                ["3", "Januari", "Makanan", "500.000"],
                ["4", "Februari", "Elektronik", "2.000.000"],
                ["5", "Februari", "Konsumsi", "15.000"],
                ["6", "Januari", "Elektronik", "150.000"],
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
          Formula apa yang paling tepat untuk menghitung total pendapatan kategori Elektronik pada bulan Januari berdasarkan tabel di atas?
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

      {/* Soal 5: 3 kolom data (A: Judul Film, B: Genre, C: Rating) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 5
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Daftar Film yang Ditonton
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
                ["1", "Judul Film", "Genre", "Rating"],
                ["2", "Jungle Adventure", "Petualangan", "5"],
                ["3", "Galaxy Wars", "Fiksi Ilmiah", "4"],
                ["4", "Treasure Island", "Petualangan", "5"],
                ["5", "Funny Days", "Komedi", "3"],
                ["6", "Mount Quest", "Petualangan", "4"],
                ["7", "Love in Summer", "Romantis", "2"],
                ["8", "Spy Mission", "Aksi", "4"],
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
          Formula apa yang paling tepat untuk menghitung jumlah film bergenre Petualangan berdasarkan tabel di atas?
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

      {/* Soal 6: 3 kolom data (A: Nama Siswa, B: Kategori, C: Jumlah) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 6
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Daftar Pembayaran Iuran
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
                ["1", "Nama Siswa", "Kategori", "Jumlah (Rp)"],
                ["2", "Andi", "Kebersihan", "5.000"],
                ["3", "Budi", "Kas", "10.000"],
                ["4", "Citra", "Kebersihan", "5.000"],
                ["5", "Dina", "Kas", "10.000"],
                ["6", "Eko", "Kebersihan", "5.000"],
                ["7", "Fira", "Kas", "10.000"],
                ["8", "Gita", "Kebersihan", "5.000"],
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
          Formula apa yang paling tepat untuk menghitung total iuran untuk kategori Kebersihan berdasarkan tabel di atas?
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

      {/* Soal 7: 4 kolom data (A: Nama, B: Kelas, C: Jenis Kelamin, D: Kehadiran) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 7
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Kehadiran Peserta Senam Pagi
        </p>
        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300 text-center text-sm mx-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-2 py-1 text-xs font-bold w-10 text-black"></th>
                <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">A</th>
                <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">B</th>
                <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">C</th>
                <th className="border border-gray-300 px-4 py-1 text-xs font-bold w-28 text-black">D</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Nama", "Kelas", "Jenis Kelamin", "Kehadiran"],
                ["2", "Alya", "8A", "Perempuan", "Hadir"],
                ["3", "Raka", "8A", "Laki-laki", "Hadir"],
                ["4", "Salsa", "8A", "Perempuan", "Hadir"],
                ["5", "Bima", "8A", "Laki-laki", "Tidak Hadir"],
                ["6", "Nadia", "8B", "Perempuan", "Hadir"],
                ["7", "Farhan", "8B", "Laki-laki", "Hadir"],
                ["8", "Nisa", "8A", "Perempuan", "Hadir"],
                ["9", "Iqbal", "8C", "Laki-laki", "Tidak Hadir"],
                ["10", "Zahra", "8A", "Perempuan", "Tidak Hadir"],
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
          Formula apa yang paling tepat untuk menghitung jumlah siswa perempuan dari kelas 8A yang hadir berdasarkan tabel di atas?
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

      {/* Soal 8: 3 kolom data (A: Bulan, B: Jenis, C: Jumlah) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 8
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Pengeluaran Kelas
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
                ["1", "Bulan", "Jenis", "Jumlah (Rp)"],
                ["2", "Januari", "Alat Kebersihan", "30.000"],
                ["3", "Januari", "Dekorasi", "25.000"],
                ["4", "Februari", "Alat Kebersihan", "20.000"],
                ["5", "Februari", "Konsumsi", "15.000"],
                ["6", "Maret", "Alat Kebersihan", "40.000"],
                ["7", "Maret", "Dekorasi", "30.000"],
                ["8", "Maret", "Alat Kebersihan", "35.000"],
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
          Formula apa yang paling tepat untuk menghitung total pengeluaran untuk Alat Kebersihan pada bulan Maret berdasarkan tabel di atas?
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

      {/* Soal 9: 2 kolom data (A: Nama Siswa, B: Nilai Ujian) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 9
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Nilai Ujian Siswa
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
                ["2", "Aisyah", "80"],
                ["3", "Budi", "65"],
                ["4", "Citra", "90"],
                ["5", "Dani", "70"],
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
          Formula apa yang paling tepat untuk menghitung jumlah siswa yang mendapatkan nilai di atas 80 berdasarkan tabel di atas?
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

      {/* Soal 10: 3 kolom data (A: Tanggal, B: Kategori, C: Jumlah) */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Soal 10
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Tabel: Pengeluaran Bulanan
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
                ["1", "Tanggal", "Kategori", "Jumlah (Rp)"],
                ["2", "1 Feb", "Transportasi", "20.000"],
                ["3", "2 Feb", "Makanan", "15.000"],
                ["4", "3 Feb", "Transportasi", "25.000"],
                ["5", "4 Feb", "Hiburan", "10.000"],
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
          Formula apa yang paling tepat untuk menghitung total pengeluaran untuk kategori Transportasi berdasarkan tabel di atas?
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

export default QuizPeringkasanData;