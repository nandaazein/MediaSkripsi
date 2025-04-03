import { useState } from "react";
import Layout from "../../components/Layout";
import { CheckCircle, XCircle } from "lucide-react";

export default function VlookupLesson() {
  const correctAnswers = {
    tableReference: "nilai",
    scoreStatus: "lulus",
    unnecessaryColumn: "nama",
    lookupFormula: "=VLOOKUP(B3;$E$3:$F$6;2;TRUE)"
  };

  const [answers, setAnswers] = useState({
    tableReference: "",
    scoreStatus: "",
    unnecessaryColumn: "",
    lookupFormula: ""
  });

  const [feedback, setFeedback] = useState({
    tableReference: null,
    scoreStatus: null,
    unnecessaryColumn: null,
    lookupFormula: null
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const checkAnswer = (field) => {
    const isCorrect =
      answers[field].trim().toLowerCase() === correctAnswers[field].trim().toLowerCase();
    setFeedback((prev) => ({ ...prev, [field]: isCorrect }));
  };

  const renderFeedback = (field) => {
    if (feedback[field] === null) return null;
    return (
      <div className={`flex items-center gap-2 mt-2 text-lg font-semibold ${feedback[field] ? "text-green-700" : "text-red-700"}`}>
        {feedback[field] ? <CheckCircle className="h-6 w-6 text-green-600" /> : <XCircle className="h-6 w-6 text-red-600" />}
        <span>{feedback[field] ? "Benar" : "Salah"}</span>
      </div>
    );
  };

  return (
    <Layout>
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-8 p-4 bg-[#255F38] text-white rounded">
        Mari Berlatih
      </h1>

      <section className="p-6 bg-white rounded shadow-lg">
        <h2 className="text-lg font-semibold text-green-700">Studi Kasus</h2>
        <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">
          Sebuah sekolah ingin menentukan status <strong>kelulusan siswa</strong> berdasarkan nilai ujian mereka.
          Guru telah menetapkan aturan kelulusan berdasarkan rentang nilai yang sudah ditentukan dalam <strong>Tabel Referensi</strong>.
          Kamu diminta membantu guru mengisi kolom <strong>Status</strong> secara otomatis menggunakan fungsi <strong>VLOOKUP</strong>.
        </p>
        <div className="flex justify-center mt-6">
          <iframe 
              width="80%" 
              height="400" 
              style={{ border: '1px solid #e7e7e7' }} 
              frameBorder="0" 
              scrolling="no" 
              src="https://sheet.zohopublic.com/sheet/published/190uf9b625cb387f54e89be6b3df5fe95c4d7?mode=embed">
          </iframe>
        </div>
      </section>

      <section className="p-6 bg-white rounded shadow-lg mt-6">
        <h2 className="text-lg font-semibold text-green-700">Penyelesaian dengan Computational Thinking</h2>

        {/* Dekomposisi */}
        <div className="mt-6 p-4 border-l-4 border-green-400 bg-green-50 rounded">
          <h3 className="text-md font-semibold text-green-600">1. Dekomposisi</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Mengidentifikasi tabel referensi.</li>
            <li>Menentukan nilai yang akan dicari.</li>
            <li>Menemukan hasil berdasarkan tabel referensi.</li>
          </ul>
          <p className="text-gray-700 mt-3">Apa yang dicari dalam tabel referensi?</p>
          <div className="flex gap-3 mt-2 items-center">
            <input
              className="border border-green-400 p-2 rounded w-full"
              placeholder="Jawaban Anda"
              value={answers.tableReference}
              onChange={(e) => handleChange("tableReference", e.target.value)}
            />
            <button
              className="p-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => checkAnswer("tableReference")}
            >
              Cek
            </button>
          </div>
          {renderFeedback("tableReference")}
        </div>

        {/* Pengenalan Pola */}
        <div className="mt-6 p-4 border-l-4 border-green-400 bg-green-50 rounded">
          <h3 className="text-md font-semibold text-green-600">2. Pengenalan Pola</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Nilai tertentu memiliki status tertentu.</li>
            <li>Rentang nilai yang sama akan menghasilkan nilai yang sama.</li>
          </ul>
          <p className="text-gray-700 mt-3">Status untuk nilai 85 adalah?</p>
          <div className="flex gap-3 mt-2 items-center">
            <input
              className="border border-green-400 p-2 rounded w-full"
              placeholder="Jawaban Anda"
              value={answers.scoreStatus}
              onChange={(e) => handleChange("scoreStatus", e.target.value)}
            />
            <button className="p-2 px-4 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => checkAnswer("scoreStatus")}>
              Cek
            </button>
          </div>
          {renderFeedback("scoreStatus")}
        </div>

        {/* Abstraksi */}
        <div className="mt-6 p-4 border-l-4 border-green-400 bg-green-50 rounded">
          <h3 className="text-md font-semibold text-green-600">3. Abstraksi</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Fokus hanya pada kolom yang diperlukan.</li>
            <li>Mengabaikan data yang tidak relevan.</li>
          </ul>
          <p className="text-gray-700 mt-3">Kolom yang tidak diperlukan dalam pencocokan?</p>
          <div className="flex gap-3 mt-2 items-center">
            <input
              className="border border-green-400 p-2 rounded w-full"
              placeholder="Jawaban Anda"
              value={answers.unnecessaryColumn}
              onChange={(e) => handleChange("unnecessaryColumn", e.target.value)}
            />
            <button className="p-2 px-4 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => checkAnswer("unnecessaryColumn")}>
              Cek
            </button>
          </div>
          {renderFeedback("unnecessaryColumn")}
        </div>

        {/* Algoritma */}
        <div className="mt-6 p-4 border-l-4 border-green-400 bg-green-50 rounded">
          <h3 className="text-md font-semibold text-green-600">4. Algoritma</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Menuliskan rumus VLOOKUP.</li>
            <li>Menentukan parameter/rentang yang akan digunakan dalam fungsi.</li>
            <li>Menggunakan nomor kolom yang sesuai.</li>
          </ul>
          <p className="text-gray-700 mt-3">Masukkan rumus VLOOKUP yang benar:</p>
          <div className="flex gap-3 mt-2 items-center">
            <input
              className="border border-green-400 p-2 rounded w-full"
              placeholder="Jawaban Anda"
              value={answers.lookupFormula}
              onChange={(e) => handleChange("lookupFormula", e.target.value)}
            />
            <button className="p-2 px-4 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => checkAnswer("lookupFormula")}>
              Cek
            </button>
          </div>
          {renderFeedback("lookupFormula")}
        </div>
      </section>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a href="/aktivitas-lookup" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
          ← Sebelumnya
        </a>
        <a href="/petunjuk-kuis1" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]">
          Mulai Kuis →
        </a>
      </div>

    </Layout>
  );
}
