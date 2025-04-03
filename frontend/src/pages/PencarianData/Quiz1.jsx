import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Quiz/Quiz1.json")
      .then((res) => res.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  function submitAnswer() {
    if (selectedAnswer === quizData[currentQuestion]?.answer) {
      setCorrectAnswers((prevCorrect) => prevCorrect + 1);
    }
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setIsQuizFinished(true);
    }
  }

  function handleSubmitQuiz() {
    const score = (correctAnswers / quizData.length) * 100;
    navigate("/feedback1", { state: { correctAnswers, total: quizData.length, score } });
  }

  if (quizData.length === 0)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );

  if (isQuizFinished) {
    return (
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center mt-40">
        <h2 className="text-xl font-bold text-green-700">🎉 Kuis Selesai!</h2>
        <p className="text-sm text-gray-700 mt-4">Klik tombol di bawah untuk melihat hasil kuis.</p>
        <button 
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl w-full text-md transition duration-300 shadow-md"
          onClick={handleSubmitQuiz}>
          ✅ Lihat Hasil
        </button>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sidebar Progres */}
      <div className="md:col-span-1 bg-green-100 p-4 rounded-xl shadow-md text-center border border-green-300">
        <h3 className="text-md font-bold text-green-700">Soal {currentQuestion + 1} / {quizData.length}</h3>
        <div className="w-full mx-auto bg-gray-300 rounded-full h-3 mt-2 overflow-hidden">
          <div 
            className="bg-green-500 h-3 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Konten Soal */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-300 text-center">
        <h4 className="text-xl font-bold text-gray-700 mb-3">Kuis 1 Pencarian dengan Fungsi Lookup</h4>
        <h2 className="text-md font-semibold text-gray-700 mb-3">{question?.question || "Pertanyaan tidak tersedia"}</h2>
        <div className="mt-3 space-y-2">
          {question?.options?.map((option, index) => (
            <button
              key={index}
              className={`block w-full text-md px-4 py-2 text-left rounded-xl border transition duration-300 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                selectedAnswer === option
                  ? "bg-green-600 text-white border-green-700"
                  : "bg-gray-100 hover:bg-gray-200 border-gray-400"
              }`}
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-xl text-md transition duration-300 font-bold shadow-md"
          onClick={submitAnswer}
          disabled={!selectedAnswer}
        >
          Jawab
        </button>
      </div>
    </div>
  );
}