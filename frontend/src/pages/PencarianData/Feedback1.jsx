import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/QuizLayout";

export default function Feedback() {
  const location = useLocation();
  const navigate = useNavigate();

  // Gunakan nilai default agar tidak undefined
  const correctAnswers = location.state?.correctAnswers ?? 0;
  const totalQuestions = location.state?.totalQuestions ?? 10;

  const score = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
  const wrongAnswers = totalQuestions > 0 ? totalQuestions - correctAnswers : 0;

  return (
    <Layout>
      <h2 className="text-lg font-bold text-center text-green-600">KUIS 1</h2>
      <p className="text-center">Pencarian dengan Fungsi Lookup</p>

      <div className="border p-6 rounded-lg mt-6 shadow-lg">
        <h3 className="text-center font-semibold">HASIL KUIS</h3>

        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">NILAI</h3>
          <p className="text-4xl font-bold text-green-600">{score}</p>
          <p>Jawaban benar: {correctAnswers}</p>
          <p>Jawaban salah: {wrongAnswers}</p>
        </div>

        {score >= 70 ? (
          <div className="mt-6 bg-green-100 text-green-700 p-3 rounded-lg text-center">
            Selamat, skor kamu memenuhi untuk lanjut ke materi berikutnya
          </div>
        ) : (
          <div className="mt-6 bg-red-100 text-red-700 p-3 rounded-lg text-center">
            Maaf, skor kamu belum cukup. Silakan ulangi kuis ini.
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        {score >= 70 ? (
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg" onClick={() => navigate("/visualisasi-data")}>
            Lanjut ke Materi Berikutnya
          </button>
        ) : (
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg" onClick={() => navigate("/quiz1")}>
            Ulangi Kuis
          </button>
        )}
      </div>
    </Layout>
  );
}
