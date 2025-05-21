import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";

const FeedbackPeringkasanData = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Default state jika data tidak tersedia
  const { score, answers, questions, totalQuestions } = state || {
    score: 0,
    answers: {},
    questions: [],
    totalQuestions: 0,
  };

  // Hitung correctCount berdasarkan answers dan questions
  const correctCount = questions.reduce((count, question, index) => {
    const answerKey = String.fromCharCode(97 + (answers[index] || '').charCodeAt(0) - 97);
    return answers[index] && answerKey === question.correct_answer ? count + 1 : count;
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

  const KKM = 70;
  const incorrectCount = totalQuestions - correctCount;

  const feedbackMessage =
    score >= KKM
      ? "Selamat, skor kamu memenuhi untuk lanjut ke materi berikutnya!"
      : "Skor kamu belum memenuhi KKM. Ayo ulang kuis untuk belajar lagi!";

  console.log("FeedbackPeringkasanData state:", state); // Debugging

  // Jika data tidak lengkap, tampilkan pesan error
  if (!state || !questions.length) {
    return (
      <Layout>
        <div className="p-6 text-center">
          <p className="text-red-500 text-lg">Data feedback tidak ditemukan. Silakan coba lagi.</p>
          <button
            onClick={() => navigate("/kuis-peringkasan")}
            className="mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Kembali ke Kuis
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header Judul */}
      <div>
        <h1 className="mt-5 text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white">
          Hasil Kuis 3
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
            {questions.map((question, index) => {
              const answerKey = answers[index] || '';
              const isCorrect = answerKey === question.correct_answer;
              return (
                <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                  <td className="border border-green-600 px-4 py-2">{index + 1}</td>
                  <td className="border border-green-600 px-4 py-2">
                    {answerOptions[`q${index + 1}`][answerKey] || "Tidak dijawab"}
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

      {/* Tombol Navigasi */}
      <div className="flex justify-center mt-8 space-x-4">
        {score >= KKM ? (
          <button
            onClick={() => navigate("/materi-berikutnya")} // Ganti dengan path materi berikutnya
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

