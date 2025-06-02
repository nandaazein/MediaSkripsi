import React, { useState, useEffect } from "react";
import LayoutSiswa from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FeedbackPengelolaanData = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [kkm, setKKM] = useState(70); // Default KKM
  const [error, setError] = useState("");

  // Default state jika data tidak tersedia
  const { score, answers, questions, totalQuestions } = state || {
    score: 0,
    answers: {},
    questions: [],
    totalQuestions: 0,
  };

  // Fetch KKM for Kuis 4
  useEffect(() => {
    const fetchKKM = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/kkm/4", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setKKM(response.data.kkm);
      } catch (err) {
        console.error("Fetch KKM error:", err);
        setError("Gagal mengambil KKM, menggunakan default (70)");
      }
    };
    fetchKKM();
  }, []);

  // Hitung correctCount berdasarkan answers dan questions
  const correctCount = questions.reduce((count, question, index) => {
    const answerKey = String.fromCharCode(
      97 + (answers[index] || "").charCodeAt(0) - 97
    );
    return answers[index] && answerKey === question.correct_answer
      ? count + 1
      : count;
  }, 0);

  // Siapkan correctAnswers dan answerOptions
  const correctAnswers = questions.reduce((acc, question, index) => {
    acc[`q${index + 1}`] = question.correct_answer;
    return acc;
  }, {});
  const answerOptions = questions.reduce((acc, question, index) => {
    acc[`q${index + 1}`] = question.options.reduce((opts, opt, idx) => {
      opts[String.fromCharCode(97 + idx)] = opt;
      return opts;
    }, {});
    return acc;
  }, {});

  const incorrectCount = totalQuestions - correctCount;

  const feedbackMessage =
    score >= kkm
      ? "Selamat, skor kamu sudah mencapai KKM!"
      : "Skor kamu belum memenuhi KKM. Ayo ulang kuis atau belajar lagi!";

  console.log("FeedbackPengelolaanData state:", state);

  // Jika data tidak lengkap, tampilkan pesan error
  if (!state || !questions.length) {
    return (
      <LayoutSiswa>
        <div className="p-6 text-center">
          <p className="text-lg text-red-500">
            Data feedback tidak ditemukan. Silakan coba lagi.
          </p>
          <button
            onClick={() => navigate("/kuis-pengelolaan")}
            className="px-4 py-2 mt-4 text-white bg-green-800 rounded hover:bg-green-700"
          >
            Kembali ke Kuis
          </button>
        </div>
      </LayoutSiswa>
    );
  }

  return (
    <LayoutSiswa>
      <div>
        <h1 className="mt-5 text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white">
          Hasil Kuis 4 - Pengelolaan Data
        </h1>
      </div>
      {error && <p className="mb-4 text-center text-red-500">{error}</p>}
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
          Ringkasan
        </div>
        <p className="mt-6 text-sm text-gray-700 md:text-base">
          <strong>Skor:</strong> {score.toFixed(2)}/100
        </p>
        <p className="text-sm text-gray-700 md:text-base">
          <strong>Jawaban Benar:</strong> {correctCount} soal
        </p>
        <p className="text-sm text-gray-700 md:text-base">
          <strong>Jawaban Salah:</strong> {incorrectCount} soal
        </p>
        <p className="text-sm text-gray-700 md:text-base">
          <strong>KKM:</strong> {kkm}
        </p>
        <p className="text-sm text-gray-700 md:text-base">
          <strong>Feedback:</strong> {feedbackMessage}
        </p>
      </div>
      <div className="relative p-5 mt-10 space-y-4 bg-white border-gray-300">
        <div className="absolute px-5 py-2 text-lg font-bold text-white bg-green-800 rounded-t-lg shadow-lg -top-6 left-4">
          Detail Jawaban
        </div>
        <table className="w-full mx-auto mt-6 text-sm text-center border border-collapse border-green-800 md:w-2/3">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="px-4 py-2 border border-green-600">Soal</th>
              <th className="px-4 py-2 border border-green-600">
                Jawaban Anda
              </th>
              <th className="px-4 py-2 border border-green-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => {
              const answerKey = answers[index] || "";
              const isCorrect = answerKey === question.correct_answer;
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                >
                  <td className="px-4 py-2 border border-green-600">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-green-600">
                    {answerOptions[`q${index + 1}`][answerKey] ||
                      "Tidak dijawab"}
                  </td>
                  <td className="px-4 py-2 border border-green-600">
                    {isCorrect ? (
                      <span className="text-green-600">Benar</span>
                    ) : (
                      <span className="text-red-600">Salah</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        {score >= kkm ? (
          <>
            <button
              onClick={() => navigate("/rangkuman-pengelolaan")}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px] cursor-pointer"
            >
              Kembali ke Materi
            </button>
            <button
              onClick={() => navigate("/kuis-evaluasi")}
              className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px] cursor-pointer"
            >
              Lanjut Evaluasi Akhir
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/rangkuman-pengelolaan")}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px] cursor-pointer"
            >
              Kembali ke Materi
            </button>
            <button
              onClick={() => navigate("/kuis-pengelolaan")}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300 text-base shadow-md cursor-pointer"
            >
              Ulang Kuis
            </button>
          </>
        )}
      </div>
    </LayoutSiswa>
  );
};

export default FeedbackPengelolaanData;