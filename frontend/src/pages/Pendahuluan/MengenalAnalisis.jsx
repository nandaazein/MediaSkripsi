import Layout from "../../components/Layout";
import "remixicon/fonts/remixicon.css";
import { BarChart, Search, Table, Filter, CheckCircle, BookOpen, Lightbulb } from "lucide-react";
import { useState } from "react";

const MengenalAnalisisData = () => {
  // State for interactive quiz
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");
  const correctQuizAnswer = "membantu keputusan";

  const handleQuizChange = (e) => {
    setQuizAnswer(e.target.value);
    setQuizFeedback("");
  };

  const checkQuizAnswer = () => {
    setQuizFeedback(
      quizAnswer === correctQuizAnswer
        ? "✅ Benar! Analisis data membantu kita membuat keputusan yang lebih baik, seperti memilih strategi terbaik dalam permainan."
        : "❌ Belum tepat. Coba pikir, apa yang membuat analisis data begitu penting?"
    );
  };

  const resetQuiz = () => {
    setQuizAnswer("");
    setQuizFeedback("");
  };


  return (
    <Layout>
      {/* Header */}
      <h1 className="text-xl md:text-2xl sm:text-lg text-center font-bold mb-12 p-4 bg-[#255F38] text-white rounded-lg shadow-lg">
        Mengenal Analisis Data
      </h1>

      {/* Learning Objectives */}
      <section className="bg-green-100 rounded shadow-md p-4 mt-4">
        <h2 className="font-bold text-[#255F38] flex items-center">
          Tujuan Pembelajaran
        </h2>
        <p className="text-sm md:text-base text-gray-700 text-justify leading-relaxed">
          Memperkenalkan konsep dasar dari analisis data.
        </p>
      </section>

      {/* Introduction */}
      <div className="bg-white p-5 border-gray-300 mt-4 space-y-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2" /> Apa Itu Analisis Data?
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
          Bayangkan analisis data seperti memecahkan teka-teki! Ini adalah cara kita mengolah angka, kata, atau informasi lain untuk menemukan pola atau jawaban. Misalnya, kamu bisa tahu siapa yang paling sering menang dalam permainan favoritmu atau camilan apa yang paling disukai temen-temen!
        </p>
      </div>

      {/* Why Data Analysis Matters */}
      <div className="bg-white p-5 border-gray-300 mt-4 space-y-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <BarChart className="w-5 h-5 mr-2" /> Mengapa Analisis Data Penting?
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
          Analisis data membantu kita membuat keputusan cerdas, seperti memilih camilan favorit berdasarkan suara teman atau menentukan waktu terbaik untuk belajar. Ini dia beberapa kelebihannya:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-sm md:text-base text-gray-700">
          <li>Membantu memilih keputusan terbaik.</li>
          <li>Menemukan pola, seperti nilai ujian yang terus naik.</li>
          <li>Menyelesaikan masalah dengan cepat, seperti mencari tahu mengapa timmu kalah dalam lomba.</li>
        </ul>
      </div>

      {/* Interactive Quiz */}
      <div className="bg-green-100 p-4 border-l-4 border-green-800 rounded-lg shadow-md mt-4 space-y-3">
        <h3 className="text-green-800 font-bold flex items-center">
          <Search className="w-5 h-5 mr-2" /> Mengapa Analisis Data Penting?
        </h3>
        <p className="text-sm md:text-base text-gray-700">
          Pilih alasan utama mengapa kita menggunakan analisis data:
        </p>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="quiz"
              value="membantu keputusan"
              checked={quizAnswer === "membantu keputusan"}
              onChange={handleQuizChange}
              className="form-radio text-yellow-500"
            />
            <span>Membantu membuat keputusan yang lebih baik</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="quiz"
              value="menggambar grafik"
              checked={quizAnswer === "menggambar grafik"}
              onChange={handleQuizChange}
              className="form-radio text-yellow-500"
            />
            <span>Menggambar grafik yang keren</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="quiz"
              value="menyimpan data"
              checked={quizAnswer === "menyimpan data"}
              onChange={handleQuizChange}
              className="form-radio text-yellow-500"
            />
            <span>Menyimpan data di komputer</span>
          </label>
        </div>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={checkQuizAnswer}
            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Periksa Jawaban
          </button>
          <button
            onClick={resetQuiz}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Hapus
          </button>
        </div>
        {quizFeedback && (
          <p
            className={`text-sm mt-2 font-bold ${
              quizFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
            }`}
          >
            {quizFeedback}
          </p>
        )}
      </div>

      {/* Steps of Data Analysis */}
      <div className="bg-white p-5 border-gray-300 mt-4 space-y-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <Table className="w-5 h-5 mr-2" /> Langkah-Langkah Analisis Data
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
          Analisis data punya beberapa langkah seru yang bisa kamu pelajari:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-sm md:text-base text-gray-700">
          <li>
            <span className="font-semibold">Pencarian Data (Lookup dan Reference)</span>: Seperti mencari nama temanmu di daftar nilai kelas. Cepat dan mudah, seperti menemukan skor tertinggi di game!
          </li>
          <li>
            <span className="font-semibold">Visualisasi Data</span>: Membuat grafik keren, seperti diagram batang untuk melihat siapa yang paling banyak menang lomba atau nilai rata-rata kelas.
          </li>
          <li>
            <span className="font-semibold">Peringkasan Data (SUMIF, SUMIFS, COUNTIF, COUNTIFS)</span>: Menghitung sesuatu, seperti jumlah teman yang nilai matematikanya di atas 80 atau total poin timmu.
          </li>
          <li>
            <span className="font-semibold">Pengelolaan Data (Sorting dan Filtering)</span>: Mengurutkan daftar nama atau menyaring hanya nilai terbaik, biar rapi, seperti menyusun daftar pemain berdasarkan skor!
          </li>
        </ul>
      </div>


      {/* What You Can Do */}
      <div className="bg-white p-5 border-gray-300 mt-4 space-y-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" /> Apa yang Bisa Kamu Lakukan?
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
          Dengan analisis data, kamu bisa:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-sm md:text-base text-gray-700">
          <li>Cepat menemukan informasi, seperti nilai temanmu menggunakan fungsi pencarian data.</li>
          <li>Menganalisis tren, seperti apakah nilai kelas semakin bagus atau kehadiran siswa.</li>
          <li>Menghitung data, seperti berapa banyak teman yang suka es krim atau total pengeluaran bulanan.</li>
          <li>Mengatur data agar rapi, seperti daftar nama berdasarkan abjad atau menyaring nilai tertinggi.</li>
        </ul>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
          Analisis data seperti alat ajaib yang membuat informasi lebih mudah dipahami dan masalah lebih gampang diselesaikan!
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 px-4">
        <a
          href="/pendahuluan"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
          aria-label="Halaman sebelumnya"
        >
          ← Sebelumnya
        </a>
        <a
          href="/pengenalan-ct"
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]"
          aria-label="Halaman selanjutnya"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default MengenalAnalisisData;