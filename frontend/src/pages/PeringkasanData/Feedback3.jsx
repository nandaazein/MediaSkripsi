// import Layout from "../../components/Layout";
// import { useLocation, useNavigate } from "react-router-dom";

// const FeedbackPeringkasanData = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { answers, correctCount, score, correctAnswers, answerOptions } = state || {
//     answers: {},
//     correctCount: 0,
//     score: 0,
//     correctAnswers: {},
//     answerOptions: {},
//   };
//   const KKM = 70;
//   const incorrectCount = 10 - correctCount;

//   const feedbackMessage = score >= KKM
//     ? "Selamat, skor kamu memenuhi syarat untuk lanjut ke materi berikutnya!"
//     : "Skor kamu belum memenuhi KKM. Ayo pelajari lagi materi tentang fungsi SUMIF, COUNTIF, SUMIFS, dan COUNTIFS, lalu ulang kuis!";

//   const getWeaknessSuggestion = () => {
//     const incorrectQuestions = Object.keys(correctAnswers).filter(
//       (question) => answers[question] !== correctAnswers[question]
//     );
//     const incorrectFunctions = incorrectQuestions.map((question) => {
//       const correctAnswer = correctAnswers[question];
//       const correctOption = answerOptions[question][correctAnswer];
//       if (correctOption.includes("SUMIF")) return "SUMIF";
//       if (correctOption.includes("COUNTIF")) return "COUNTIF";
//       if (correctOption.includes("SUMIFS")) return "SUMIFS";
//       if (correctOption.includes("COUNTIFS")) return "COUNTIFS";
//       return "";
//     });
//     const commonMistake = incorrectFunctions.sort((a, b) =>
//       incorrectFunctions.filter((v) => v === a).length -
//       incorrectFunctions.filter((v) => v === b).length
//     ).pop();
//     if (commonMistake) {
//       return `Kamu tampaknya sering salah memilih fungsi "${commonMistake}". Coba pelajari lagi cara penggunaan fungsi ini dalam spreadsheet.`;
//     }
//     return "";
//   };

//   return (
//     <Layout>
//       {/* Header Judul */}
//       <div>
//         <h1 className="mt-5 text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white">
//           Hasil Kuis Peringkasan Data
//         </h1>
//       </div>

//       {/* Ringkasan Hasil */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Ringkasan
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           <strong>Skor:</strong> {score.toFixed(2)}/100
//         </p>
//         <p className="text-gray-700 text-sm md:text-base">
//           <strong>Jawaban Benar:</strong> {correctCount} soal
//         </p>
//         <p className="text-gray-700 text-sm md:text-base">
//           <strong>Jawaban Salah:</strong> {incorrectCount} soal
//         </p>
//         <p className="text-gray-700 text-sm md:text-base">
//           <strong>Feedback:</strong> {feedbackMessage}
//         </p>
//         {incorrectCount > 0 && (
//           <p className="text-gray-700 text-sm md:text-base">
//             <strong>Saran:</strong> {getWeaknessSuggestion()}
//           </p>
//         )}
//       </div>

//       {/* Detail Jawaban */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
//           Detail Jawaban
//         </div>
//         <table className="border-collapse border border-green-800 w-full md:w-3/4 text-center text-sm mx-auto mt-6">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="border border-green-600 px-4 py-2">Soal</th>
//               <th className="border border-green-600 px-4 py-2">Jawaban Anda</th>
//               <th className="border border-green-600 px-4 py-2">Jawaban Benar</th>
//               <th className="border border-green-600 px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(correctAnswers).map((question, index) => (
//               <tr key={question} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 <td className="border border-green-600 px-4 py-2">{question.replace("q", "")}</td>
//                 <td className="border border-green-600 px-4 py-2">
//                   {answers[question] ? answerOptions[question][answers[question]] : "Tidak dijawab"}
//                 </td>
//                 <td className="border border-green-600 px-4 py-2">
//                   {answerOptions[question][correctAnswers[question]]}
//                 </td>
//                 <td className="border border-green-600 px-4 py-2">
//                   {answers[question] === correctAnswers[question] ? (
//                     <span className="text-green-600">Benar</span>
//                   ) : (
//                     <span className="text-red-600">Salah</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Tombol Navigasi */}
//       <div className="flex justify-center mt-8 space-x-4">
//         {score >= KKM ? (
//           <button
//             onClick={() => navigate("/peringkasan-data")}
//             className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
//           >
//             Lanjut Materi
//           </button>
//         ) : (
//           <>
//             <button
//               onClick={() => navigate("/peringkasan-data")}
//               className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md"
//             >
//               Kembali ke Materi
//             </button>
//             <button
//               onClick={() => navigate("/kuis-peringkasan")}
//               className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300 text-base shadow-md"
//             >
//               Ulang Kuis
//             </button>
//           </>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default FeedbackPeringkasanData;

import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";

const FeedbackPeringkasanData = () => {
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
      ? "Selamat, skor kamu memenuhi untuk lanjut ke materi peringkasan data berikutnya!"
      : "Skor kamu belum memenuhi KKM. Ayo ulang kuis untuk belajar lagi!";

  console.log("FeedbackPeringkasanData state:", state); // Debugging

  return (
    <Layout>
      {/* Header Judul */}
      <div>
        <h1 className="mt-5 text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white">
          Hasil Kuis Peringkasan Data
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
            onClick={() => navigate("/peringkasan-data")}
            className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
          >
            Lanjut Materi
          </button>
        ) : (
          <button
            onClick={() => navigate("/kuis-peringkasan")}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300 text-base shadow-md"
          >
            Ulang Kuis
          </button>
        )}
      </div>
    </Layout>
  );
};

export default FeedbackPeringkasanData;