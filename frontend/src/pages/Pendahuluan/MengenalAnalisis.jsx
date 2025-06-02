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
        ? "Benar! Analisis data membantu kita membuat keputusan yang lebih baik, seperti memilih strategi terbaik dalam permainan."
        : "Belum tepat. Coba pikir, apa yang membuat analisis data begitu penting?"
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
          Peserta didik mampu memahami konsep dasar analisis data dan pentingnya dalam kehidupan sehari-hari.
        </p>
      </section>

      {/* Introduction */}
      <div className="bg-white p-5 border-gray-300 mt-4 space-y-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2" /> Apa Itu Analisis Data?
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
          Analisis data adalah proses mengolah dan memahami informasi dalam bentuk angka, teks, atau kategori tertentu untuk menemukan pola, mengambil keputusan, atau menyelesaikan masalah.
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
        <div className="space-y-2 text-sm md:text-base text-gray-700">
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
            Periksa
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
              quizFeedback.includes("Benar") ? "text-[#255F38]" : "text-red-700"
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
          Analisis data dilakukan dengan beberapa langkah utama yang sesuai dengan materi yang akan dipelajari dalam bab ini:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-sm md:text-base text-gray-700">
          <li>
            <span className="font-semibold">Pencarian Data (Lookup dan Reference)</span> – Menemukan informasi dalam sekumpulan data besar dengan cara yang lebih efisien. Misalnya, mencari nilai seorang siswa dalam daftar nilai menggunakan tabel referensi.
          </li>
          <li>
            <span className="font-semibold">Visualisasi Data</span> – Mengubah data mentah menjadi grafik atau diagram agar lebih mudah dipahami. Contohnya, menyajikan nilai rata-rata kelas dalam bentuk diagram batang.
          </li>
          <li>
            <span className="font-semibold">Peringkasan Data (SUMIF, SUMIFS, COUNTIF, COUNTIFS)</span> – Menghitung dan menganalisis data berdasarkan kategori tertentu, seperti menghitung jumlah siswa yang mendapatkan nilai di atas KKM.
          </li>
          <li>
            <span className="font-semibold">Pengelolaan Data (Sorting dan Filtering)</span> – Mengurutkan dan menyaring data agar lebih rapi dan mudah dianalisis, seperti mengurutkan daftar siswa berdasarkan nilai tertinggi ke terendah.
          </li>
        </ul>
      </div>


      {/* What You Can Do */}
      <div className="bg-white p-5 border-gray-300 mt-4 space-y-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" /> Apa yang Bisa Kamu Lakukan?
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
          Dalam bab ini, kalian akan belajar bagaimana menerapkan analisis data untuk berbagai keperluan, seperti:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-sm md:text-base text-gray-700">
          <li>Mencari informasi dengan lebih cepat menggunakan fungsi pencarian data.</li>
          <li>Menganalisis tren nilai ujian atau kehadiran siswa melalui visualisasi data.</li>
          <li>Mengolah data keuangan atau statistik lainnya dengan teknik peringkasan data.</li>
          <li>Mengorganisasi data dalam tabel agar lebih terstruktur menggunakan sorting dan filtering.</li>
        </ul>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
          Dengan memahami analisis data dan cara menggunakannya, kita dapat mengelola informasi dengan lebih baik, membuat keputusan yang lebih tepat, dan menyelesaikan masalah secara efektif.
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