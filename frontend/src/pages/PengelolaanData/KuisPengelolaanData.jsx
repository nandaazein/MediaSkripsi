import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KuisPengelolaanData = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(1200);
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        if (!token || !user || user.role !== "student") {
          window.location.href = "/masuk";
          return;
        }
        const response = await axios.get(
          "http://localhost:5000/api/quizzes/questions?quizNumber=4",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const filteredQuestions = response.data.filter(
          (q) => q.quiz_number === 4
        );
        setQuestions(filteredQuestions || []);
        if (filteredQuestions.length === 0) {
          setError("Tidak ada soal untuk Kuis 4.");
        }
      } catch (err) {
        setError(err.response?.data?.message || "Gagal mengambil soal");
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      if (!areAllQuestionsAnswered()) {
        alert(
          "Waktu habis! Masih ada soal yang belum dijawab. Silakan lengkapi semua jawaban."
        );
        return;
      }
      handleFinish();
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] || "");
    }
  };

  const areAllQuestionsAnswered = () => {
    return questions.every(
      (_, index) => answers[index] !== undefined && answers[index] !== ""
    );
  };

  const handleNextOrFinish = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] || "");
    } else {
      if (!areAllQuestionsAnswered()) {
        alert(
          "Masih ada soal yang belum dijawab. Silakan lengkapi semua jawaban sebelum menyelesaikan kuis."
        );
        return;
      }
      handleFinish();
    }
  };

  const handleFinish = async () => {
    if (!areAllQuestionsAnswered()) {
      alert(
        "Masih ada soal yang belum dijawab. Silakan lengkapi semua jawaban sebelum menyelesaikan kuis."
      );
      return;
    }

    let score = 0;
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (!token || !user) throw new Error("Pengguna tidak terautentikasi");

      let correctCount = 0;
      questions.forEach((question, index) => {
        if (answers[index] === question.correct_answer) correctCount++;
      });
      score =
        questions.length > 0 ? (correctCount / questions.length) * 100 : 0;

      await axios.post(
        `http://localhost:5000/api/students/scores/${user.nis}`,
        { kuis4: score },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      alert(
        "Terjadi kesalahan: " + (err.response?.data?.message || err.message)
      );
    } finally {
      navigate("/feedback4", {
        state: { score, answers, questions, totalQuestions: questions.length },
      });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 font-open-sans flex items-center justify-center p-6">
      <div className="max-w-screen-xl w-full mx-auto">
        {/* Judul */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-green-800 text-center">
            Kuis 4 - Pengelolaan Data
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Bagian Soal (Kiri) */}
          <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg p-6 flex flex-col min-h-[600px] overflow-x-hidden">
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : currentQuestion ? (
              <div className="flex-1 flex flex-col">
                <h3 className="mb-2 text-lg font-semibold text-green-800">
                  Soal {currentQuestionIndex + 1}:
                </h3>
                <p className="mb-4 text-gray-700 break-words">
                  {currentQuestion.question_text || "Pilih jawaban yang benar,"}
                </p>
                {currentQuestion.image_url && (
                  <div className="w-full max-w-[512px] mx-auto mb-4 overflow-hidden">
                    <img
                      src={currentQuestion.image_url}
                      alt="Gambar Soal"
                      className="w-full h-auto max-h-[300px] object-contain rounded-lg"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="mb-4 space-y-2 max-w-full">
                  {Array.isArray(currentQuestion.options) &&
                    currentQuestion.options.map((option, idx) => (
                      <div
                        key={idx}
                        className="p-2 mb-2 border border-gray-300 rounded flex items-center max-w-full overflow-hidden"
                      >
                        <input
                          type="radio"
                          name="answer"
                          value={String.fromCharCode(97 + idx)}
                          checked={selectedAnswer === String.fromCharCode(97 + idx)}
                          onChange={(e) => handleAnswerChange(e.target.value)}
                          className="mr-2"
                        />
                        <label className="text-gray-700 break-words">
                          {String.fromCharCode(97 + idx)}. {option || "-"}
                        </label>
                      </div>
                    ))}
                </div>
                <div className="flex justify-end gap-2 mt-auto">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 text-gray-700 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400"
                  >
                    Sebelumnya
                  </button>
                  {currentQuestionIndex === questions.length - 1 ? (
                    <button
                      onClick={handleFinish}
                      disabled={!areAllQuestionsAnswered()}
                      className={`px-4 py-2 text-white rounded ${
                        areAllQuestionsAnswered()
                          ? "bg-[#255F38] hover:bg-[#1E4D2E]"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Selesai
                    </button>
                  ) : (
                    <button
                      onClick={handleNextOrFinish}
                      className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-[#1E4D2E]"
                    >
                      Selanjutnya
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">
                Tidak ada soal yang tersedia untuk Kuis 4.
              </p>
            )}
          </div>

          {/* Bagian Kanan */}
          <div className="w-full md:w-1/4 flex flex-col gap-4 min-h-[600px]">
            {/* Div Waktu dan Daftar Soal */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-3 flex flex-col">
              <div className="mb-3 p-2 text-gray-700 bg-gray-200 rounded text-center">
                Waktu Tersisa: {formatTime(timeLeft)}
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Daftar Soal
              </h3>
              <div className="grid grid-cols-5 gap-2 flex-grow">
                {[...Array(10)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestionIndex(index);
                      setSelectedAnswer(answers[index] || "");
                    }}
                    disabled={index >= questions.length}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg ${
                      index >= questions.length
                        ? "bg-gray-300 cursor-not-allowed"
                        : currentQuestionIndex === index
                        ? "bg-green-200"
                        : answers[index]
                        ? "bg-blue-200"
                        : "bg-red-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Div Keterangan */}
            <div className="bg-white rounded-lg shadow-lg p-3">
              <h4 className="text-sm font-semibold text-green-800 mb-2">
                Keterangan
              </h4>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 rounded-full bg-green-200"></div>
                <span className="text-sm text-gray-700">
                  Nomor soal saat ini
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 rounded-full bg-blue-200"></div>
                <span className="text-sm text-gray-700">Soal sudah dijawab</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-200"></div>
                <span className="text-sm text-gray-700">Soal belum dijawab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KuisPengelolaanData;