// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Layout from "../../components/Layout";

// export default function Feedback() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Gunakan nilai default agar tidak undefined
//   const correctAnswers = location.state?.correctAnswers ?? 0;
//   const totalQuestions = location.state?.totalQuestions ?? 10;

//   const score = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
//   const wrongAnswers = totalQuestions > 0 ? totalQuestions - correctAnswers : 0;

//   return (
//     <Layout>
//       <h2 className="text-lg font-bold text-center text-green-600">KUIS 1</h2>
//       <p className="text-center">Pencarian dengan Fungsi Lookup</p>

//       <div className="border p-6 rounded-lg mt-6 shadow-lg">
//         <h3 className="text-center font-semibold">HASIL KUIS</h3>

//         <div className="mt-4 text-center">
//           <h3 className="text-xl font-bold">NILAI</h3>
//           <p className="text-4xl font-bold text-green-600">{score}</p>
//           <p>Jawaban benar: {correctAnswers}</p>
//           <p>Jawaban salah: {wrongAnswers}</p>
//         </div>

//         {score >= 70 ? (
//           <div className="mt-6 bg-green-100 text-green-700 p-3 rounded-lg text-center">
//             Selamat, skor kamu memenuhi untuk lanjut ke materi berikutnya
//           </div>
//         ) : (
//           <div className="mt-6 bg-red-100 text-red-700 p-3 rounded-lg text-center">
//             Maaf, skor kamu belum cukup. Silakan ulangi kuis ini.
//           </div>
//         )}
//       </div>

//       <div className="mt-6 text-center">
//         {score >= 70 ? (
//           <button className="bg-green-500 text-white px-6 py-3 rounded-lg" onClick={() => navigate("/visualisasi-data")}>
//             Lanjut ke Materi Berikutnya
//           </button>
//         ) : (
//           <button className="bg-red-500 text-white px-6 py-3 rounded-lg" onClick={() => navigate("/quiz1")}>
//             Ulangi Kuis
//           </button>
//         )}
//       </div>
//     </Layout>
//   );
// }

import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";

const Feedback = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { answers, correctCount, score, correctAnswers, answerOptions } = state || {
    answers: {},
    correctCount: 0,
    score: 0,
    correctAnswers: {},
    answerOptions: {},
  };
  const KKM = 70;
  const incorrectCount = 10 - correctCount;

  const feedbackMessage =
    score >= KKM
      ? "Selamat, skor kamu memenuhi untuk lanjut ke materi berikutnya!"
      : "Skor kamu belum memenuhi KKM. Ayo ulang kuis untuk belajar lagi!";

  console.log("Feedback state:", state); // Debugging

  return (
    <Layout>
      {/* Header Judul */}
      <div>
        <h1 className="mt-5 text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white">
          Hasil Kuis
        </h1>
      </div>

      {/* Ringkasan Hasil */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Ringkasan
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          <strong>Skor:</strong> {score.toFixed(2)}/100
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          <strong>Jawaban Benar:</strong> {correctCount} soal
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          <strong>Jawaban Salah:</strong> {incorrectCount} soal
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          <strong>Feedback:</strong> {feedbackMessage}
        </p>
      </div>

      {/* Detail Jawaban */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Detail Jawaban
        </div>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm mx-auto mt-6">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Soal</th>
              <th className="border border-green-600 px-4 py-2">Jawaban Anda</th>
              <th className="border border-green-600 px-4 py-2">Jawaban Benar</th>
              <th className="border border-green-600 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(correctAnswers).map((question, index) => (
              <tr key={question} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                <td className="border border-green-600 px-4 py-2">{question.replace("q", "")}</td>
                <td className="border border-green-600 px-4 py-2">
                  {answers[question] ? answerOptions[question][answers[question]] : "Tidak dijawab"}
                </td>
                <td className="border border-green-600 px-4 py-2">{answerOptions[question][correctAnswers[question]]}</td>
                <td className="border border-green-600 px-4 py-2">
                  {answers[question] === correctAnswers[question] ? (
                    <span className="text-green-600">Benar</span>
                  ) : (
                    <span className="text-red-600">Salah</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-center mt-8 space-x-4">
        {score >= KKM ? (
          <button
            onClick={() => navigate("/visualisasi-data")}
            className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
          >
            Lanjut Materi
          </button>
        ) : (
          <button
            onClick={() => navigate("quiz1")}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300 text-base shadow-md"
          >
            Ulang Kuis
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Feedback;