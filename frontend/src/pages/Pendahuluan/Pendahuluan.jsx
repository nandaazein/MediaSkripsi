import Layout from "../../components/Layout";
import "remixicon/fonts/remixicon.css";
import pustakawan from "../../assets/Pendahuluan/pustakawan.jpg";
import { useState } from "react";

const Pendahuluan = () => {
  const [answers, setAnswers] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  const [feedback, setFeedback] = useState("");

  // Fungsi untuk menangani perubahan checkbox
  const handleChange = (step) => {
    setAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  // Fungsi untuk memeriksa jawaban
  const checkAnswers = () => {
    const correctAnswers = ["Membandingkan nilai ulangan dengan teman", "Menghitung jumlah tugas yang sudah selesai"];
    const selectedAnswers = [
      answers.step1 ? "Membandingkan nilai ulangan dengan teman" : "",
      answers.step2 ? "Menghitung jumlah tugas yang sudah selesai" : "",
      answers.step3 ? "Mencatat jadwal harian" : "",
    ].filter(Boolean);

    const isCorrect = selectedAnswers.length === correctAnswers.length && selectedAnswers.every((ans) => correctAnswers.includes(ans));
    setFeedback(isCorrect ? "Benar! Kamu sudah melakukan analisis data dalam kegiatan sehari-hari." : "Salah. Pilih aktivitas yang berhubungan dengan analisis data. Coba lagi!");
  };

  // Fungsi untuk mereset jawaban
  const resetAnswers = () => {
    setAnswers({ step1: false, step2: false, step3: false });
    setFeedback("");
  };

  return (
    <Layout>
      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-8 p-4 bg-[#255F38] text-white rounded-lg shadow-lg">
        Pendahuluan
      </h1>
      
      {/* Paragraf Pengantar */}
      <div className="bg-gray-100 p-4 mt-4">
        <p className="text-gray-700 leading-relaxed text-justify">
          Di kelas VII, kalian telah belajar dasar-dasar pengolahan data. Sekarang, coba bayangkan saat mencari 
          nama teman di daftar panjang atau tugas lama di tumpukan file. Akan lebih mudah jika data bisa diurutkan 
          atau difilter sesuai kebutuhan, bukan?
        </p>
        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Di kelas VIII ini, kalian akan mendalami <strong>pencarian data</strong>, <strong>peringkasan data</strong>, 
          <strong> visualisasi data</strong>, dan <strong>pengelolaan data</strong> (sorting & filtering) untuk mengolah 
          informasi lebih efisien. Dengan keterampilan ini, kalian dapat mengelola data secara sistematis dan membuat keputusan lebih baik.
        </p>
      </div>

      {/* Bagian "Tahukah Kamu?" dengan Interaktivitas */}
      <div className="bg-white p-4 shadow-md rounded mt-4">
        <h2 className="font-bold text-lg flex items-center text-[#255F38]">
          <i className="ri-lightbulb-line text-[#255F38] text-xl mr-2"></i> Tahukah Kamu?
        </h2>

        {/* Gambar */}
        <div className="flex justify-center mt-4">
          <img 
            src={pustakawan} 
            alt="Siswa Mengelola Data" 
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-sm italic text-gray-500 mt-2">Gambar 1. Mengelola Data sebagai Siswa</p>

        {/* Paragraf Informasi */}
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          Sebagai siswa, kalian tentu pernah mengalami situasi seperti mencari nilai ulangan tertentu, 
          menyusun jadwal piket kelas, atau memeriksa siapa saja yang belum mengumpulkan tugas. Semua kegiatan 
          tersebut melibatkan data dan memerlukan keterampilan untuk mengelolanya dengan baik.
        </p>

        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Dengan bantuan fitur <strong>pencarian data</strong>, kalian dapat menemukan informasi yang dibutuhkan 
          dengan lebih cepat, seperti mengetahui siapa yang memperoleh nilai tertinggi dalam suatu mata pelajaran. 
          Fitur <strong>filter</strong> juga memudahkan dalam menyaring data, misalnya hanya menampilkan siswa 
          yang belum mengumpulkan tugas.
        </p>

        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Selain itu, kalian dapat membuat <strong>peringkasan data</strong> menggunakan fungsi seperti 
          <strong> SUMIF</strong> atau <strong>COUNTIF</strong>, contohnya untuk menghitung jumlah tugas yang telah 
          dikumpulkan setiap minggu. Dengan <strong>visualisasi data</strong> seperti grafik batang, kalian juga 
          dapat melihat perkembangan nilai dari waktu ke waktu secara lebih jelas.
        </p>

        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Melalui kegiatan tersebut, kalian sebenarnya telah menerapkan prinsip <strong> analisis data </strong> 
          dalam kehidupan sehari-hari. Kemampuan ini sangat berguna untuk memahami informasi, mengambil keputusan, 
          serta menjadi lebih teratur dan sistematis dalam belajar maupun beraktivitas di sekolah.
        </p>

        {/* Interaktivitas: Apersepsi Analisis Data */}
        <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-1 sm:mt-2 relative">
          <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
            <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
             Apa yang Pernah Kamu Lakukan?
            </h3>
            <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">
            Sebelum belajar lebih dalam tentang analisis data, mari kita ingat pengalamanmu. Sebagai siswa, kamu pasti pernah melakukan kegiatan yang melibatkan analisis data, seperti membandingkan nilai atau menghitung sesuatu untuk membuat keputusan. Coba pikirkan kegiatan berikut yang pernah kamu lakukan:
            </p>
            <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
              Pilih kegiatan yang pernah kamu lakukan yang berhubungan dengan analisis data:
            </p>
            <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={answers.step1}
                    onChange={() => handleChange("step1")}
                    className="mr-2"
                  />
                  1. Membandingkan nilai ulangan dengan teman
                </label>
              </div>
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={answers.step2}
                    onChange={() => handleChange("step2")}
                    className="mr-2"
                  />
                  2. Menghitung jumlah tugas yang sudah selesai
                </label>
              </div>
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={answers.step3}
                    onChange={() => handleChange("step3")}
                    className="mr-2"
                  />
                  3. Mencatat jadwal harian
                </label>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={checkAnswers}
                className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
              >
                Periksa 
              </button>
              <button
                onClick={resetAnswers}
                className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300"
              >
                Hapus
              </button>
            </div>
            {feedback && (
              <p
                className={`text-sm mt-2 font-bold ${
                  feedback.includes("Benar") ? "text-green-700" : "text-red-700"
                }`}
              >
                {feedback}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a href="/pengantar-bab" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
          ← Sebelumnya
        </a>
        <a href="/mengenal-analisis" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default Pendahuluan;
