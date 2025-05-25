import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LayoutSiswa from '../../components/Layout';

const FeedbackPengelolaanData = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [kkm, setKKM] = useState(70); // Default KKM
  const [error, setError] = useState('');

  // Default state if data is not available
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
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/kkm/4', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setKKM(response.data.kkm);
      } catch (err) {
        console.error('Fetch KKM error:', err);
        setError('Gagal mengambil KKM, menggunakan default (70)');
      }
    };
    fetchKKM();
  }, []);

  // Calculate correctCount based on answers and questions
  const correctCount = questions.reduce((count, question, index) => {
    const answerKey = String.fromCharCode(97 + (answers[index] || '').charCodeAt(0) - 97);
    return answers[index] && answerKey === question.correct_answer ? count + 1 : count;
  }, 0);

  // Prepare correctAnswers and answerOptions
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
      ? 'Selamat, skor kamu memenuhi untuk lanjut ke materi berikutnya!'
      : 'Skor kamu belum memenuhi KKM. Ayo ulang kuis untuk belajar lagi!';

  console.log('FeedbackPengelolaanData state:', state);

  // If data is incomplete, show error message
  if (!state || !questions.length) {
    return (
      <LayoutSiswa>
        <div className="p-6 text-center">
          <p className="text-red-500 text-lg">Data feedback tidak ditemukan. Silakan coba lagi.</p>
          <button
            onClick={() => navigate('/kuis-pengelolaan')}
            className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
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
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
          <strong>KKM:</strong> {kkm}
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          <strong>Feedback:</strong> {feedbackMessage}
        </p>
      </div>
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
            {questions.map((question, index) => {
              const answerKey = answers[index] || '';
              const isCorrect = answerKey === question.correct_answer;
              return (
                <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                  <td className="border border-green-600 px-4 py-2">{index + 1}</td>
                  <td className="border border-green-600 px-4 py-2">
                    {answerOptions[`q${index + 1}`][answerKey] || 'Tidak dijawab'}
                  </td>
                  <td className="border border-green-600 px-4 py-2">
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
          <button
            onClick={() => navigate('/pengelolaan-data')}
            className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
          >
            Lanjut Evaluasi Akhir
          </button>
        ) : (
          <button
            onClick={() => navigate('/kuis-pengelolaan')}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300 text-base shadow-md"
          >
            Ulang Kuis
          </button>
        )}
      </div>
    </LayoutSiswa>
  );
};

export default FeedbackPengelolaanData;