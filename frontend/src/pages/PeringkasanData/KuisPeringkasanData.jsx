import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const KuisPeringkasanData = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(1200); // 20 menit dalam detik
  const [error, setError] = useState('');
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  // Ambil data soal dari backend (hanya quiz_number: 3)
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (!token || !user || user.role !== 'student') {
          console.log('Redirecting to /masuk due to missing token or user');
          window.location.href = '/masuk';
          return;
        }
        const response = await axios.get('http://localhost:5000/api/quizzes/questions?quizNumber=3', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const filteredQuestions = response.data.filter(q => q.quiz_number === 3);
        setQuestions(filteredQuestions || []);
        if (filteredQuestions.length === 0) {
          setError('Tidak ada soal untuk Kuis 3.');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Gagal mengambil soal');
        console.error('Fetch questions error:', err);
      }
    };
    fetchQuestions();
  }, []);

  // Timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleFinish(); // Selesai otomatis jika waktu habis
    }
  }, [timeLeft]);

  // Format waktu (menit:detik)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Simpan jawaban siswa
  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  // Pindah ke soal sebelumnya
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] || '');
    }
  };

  // Pindah ke soal berikutnya atau selesai
  const handleNextOrFinish = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] || '');
    } else {
      handleFinish();
    }
  };

  // Selesai dan arahkan ke halaman feedback
  const handleFinish = async () => {
    console.log('Starting handleFinish...');
    let score = 0;
    try {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      if (!token || !user) {
        console.log('Authentication failed: Token or user missing');
        throw new Error('Pengguna tidak terautentikasi');
      }

      console.log('User authenticated:', user);

      // Hitung skor
      let correctCount = 0;
      questions.forEach((question, index) => {
        if (answers[index] === question.correct_answer) {
          correctCount++;
        }
      });
      score = questions.length > 0 ? (correctCount / questions.length) * 100 : 0;
      console.log('Score calculated:', score);
      console.log('Total questions:', questions.length);
      console.log('Answers:', answers);

      // Simpan progres
      try {
        console.log('Saving progress...');
        const progressResponse = await axios.post(
          'http://localhost:5000/api/students/progress',
          { nis: user.nis, progress: 20 },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Progress saved:', progressResponse.data);
      } catch (progressError) {
        console.error('Failed to save progress:', progressError);
        alert('Gagal menyimpan progres: ' + (progressError.response?.data?.message || progressError.message));
      }

      // Simpan skor ke tabel scores
      try {
        const currentQuizNumber = 3;
        const scoreField = `kuis${currentQuizNumber}`;
        console.log('Saving score with data:', { [scoreField]: score });
        const scoreResponse = await axios.post(
          `http://localhost:5000/api/students/scores/${user.nis}`,
          { [scoreField]: score },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Score saved:', scoreResponse.data);
      } catch (scoreError) {
        console.error('Failed to save score:', scoreError);
        alert('Gagal menyimpan skor: ' + (scoreError.response?.data?.message || scoreError.message));
      }
    } catch (err) {
      console.error('Unexpected error in handleFinish:', err);
      alert('Terjadi kesalahan: ' + (err.response?.data?.message || err.message));
    } finally {
      // Arahkan ke halaman feedback meskipun API gagal
      console.log('Navigating to /feedback3 with state:', { score, answers, questions, totalQuestions: questions.length });
      navigate('/feedback3', {
        state: {
          score,
          answers,
          questions,
          totalQuestions: questions.length
        }
      });
      console.log('Navigation to /feedback3 completed');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-green-800">Kuis 3 - Peringkasan Data</h2>
          <div className="bg-red-100 p-2 rounded text-red-700">
            Waktu Tersisa: {formatTime(timeLeft)}
          </div>
        </div>
        {/* Navigasi Soal dan Konten Soal */}
        <div className="flex h-full">
          <div className="w-1/4 pr-4">
            <div className="bg-gray-100 p-4 rounded shadow-lg h-full">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentQuestionIndex(index); setSelectedAnswer(answers[index] || ''); }}
                  className={`block w-full text-left p-2 mb-2 ${currentQuestionIndex === index ? 'bg-green-200' : 'bg-gray-200'} rounded`}
                >
                  Soal {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="w-3/4">
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : currentQuestion ? (
              <div className="bg-white p-3 rounded shadow-lg" style={{ maxHeight: '100%', overflowY: 'auto' }}>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Soal {currentQuestionIndex + 1}
                </h3>
                <p className="text-gray-700 mb-2">{currentQuestion.question_text || 'Pilih jawaban yang benar,'}</p>
                {currentQuestion.image_url && (
                  <img src={currentQuestion.image_url} alt="Question Image" className="w-[512px] h-auto max-w-full object-contain mx-auto mb-2 rounded-lg" onError={(e) => { e.target.style.display = 'none'; }} />
                )}
                <div className="mb-3">
                  {Array.isArray(currentQuestion.options) && currentQuestion.options.map((option, idx) => (
                    <div key={idx} className="border border-gray-300 p-2 mb-2 rounded">
                      <input
                        type="radio"
                        name="answer"
                        value={String.fromCharCode(97 + idx)}
                        checked={selectedAnswer === String.fromCharCode(97 + idx)}
                        onChange={(e) => handleAnswerChange(e.target.value)}
                        className="mr-2"
                      />
                      <label className="text-gray-700">
                        {String.fromCharCode(97 + idx)}. {option || '-'}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-3">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 disabled:opacity-50"
                  >
                    Sebelumnya
                  </button>
                  {currentQuestionIndex === questions.length - 1 ? (
                    <button
                      onClick={handleNextOrFinish}
                      className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                    >
                      Selesai
                    </button>
                  ) : (
                    <button
                      onClick={handleNextOrFinish}
                      className="bg-[#255F38] hover:bg-[#1E4D2E] text-white px-4 py-2 rounded"
                    >
                      Selanjutnya
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Tidak ada soal yang tersedia untuk Kuis 3.</p>
            )}
          </div>
        </div>
      </div>
  );
};

export default KuisPeringkasanData;