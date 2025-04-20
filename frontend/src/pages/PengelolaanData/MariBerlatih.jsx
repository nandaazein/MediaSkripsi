import { useState } from "react";
import Layout from "../../components/Layout";

export default function MariBerlatih() {
  const correctAnswers = {
    dekomposisi: "Kegiatan Ekstrakurikuler",
    pengenalanPola: "Partisipasi dalam kegiatan",
    abstraksi: "Nama siswa dan nilai",
    algoritma: "Minimal 6 bulan",
  };

  const [answers, setAnswers] = useState({
    dekomposisi: "",
    pengenalanPola: "",
    abstraksi: "",
    algoritma: "",
  });

  const [feedback, setFeedback] = useState({
    dekomposisi: null,
    pengenalanPola: null,
    abstraksi: null,
    algoritma: null,
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const checkAnswer = (field) => {
    const isCorrect =
      answers[field].trim().toLowerCase() ===
      correctAnswers[field].trim().toLowerCase();
    setFeedback((prev) => ({ ...prev, [field]: isCorrect }));
  };

  const clearAnswer = (field) => {
    setAnswers((prev) => ({ ...prev, [field]: "" }));
    setFeedback((prev) => ({ ...prev, [field]: null }));
  };

  const renderFeedback = (field) => {
    if (feedback[field] === null) return null;
    return (
      <div
        className={`flex items-center gap-2 mt-2 text-base font-semibold ${
          feedback[field] ? "text-green-700" : "text-red-700"
        }`}
      >
        {feedback[field] ? (
          <span>✅ Jawaban benar!</span>
        ) : (
          <span>❌ Jawaban salah. Coba lagi!</span>
        )}
      </div>
    );
  };

  const allCorrect = Object.values(feedback).every((val) => val === true);

  return (
    <Layout>
      <h1 className="text-xl md:text-2xl text-center font-bold mb-4 p-4 bg-[#255F38] text-white rounded">
        Mari Berlatih Pengelolaan Data
      </h1>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-6">
        <strong>Petunjuk:</strong> Baca setiap pertanyaan di bawah ini, kemudian
        isilah jawaban yang tepat. Klik tombol <em>“Periksa”</em> untuk
        mengetahui apakah jawabanmu sudah tepat. Jangan khawatir, kamu bisa
        mencoba lagi jika belum benar!
      </p>

      <section className="p-6 bg-white rounded shadow-lg">
        <h2 className="text-lg font-semibold text-green-700">Studi Kasus</h2>
        <p className="text-gray-700 text-sm md:text-base mt-2 text-justify leading-relaxed px-4">
          Sebagai anggota OSIS, kamu bertugas untuk merekap data partisipasi
          siswa dalam kegiatan ekstrakurikuler. Data ini akan digunakan untuk
          menentukan siswa yang paling aktif dan mendapatkan penghargaan. Kamu
          perlu menganalisis data untuk melihat siapa saja yang berpartisipasi
          dalam kegiatan tersebut.
        </p>
      </section>

      {/* Soal 1 */}
      <section className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">1. Dekomposisi</h3>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <strong>Pertanyaan:</strong> Apa yang perlu diidentifikasi dalam
          filtering?
        </p>
        <p className="text-gray-600 text-sm mt-3 italic">
          Sebelum menentukan siswa yang memenuhi syarat untuk penghargaan, kita
          perlu memecah masalah menjadi langkah-langkah kecil:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
          <li>Mengidentifikasi siswa yang berpartisipasi dalam kegiatan.</li>
          <li>Menyaring siswa yang aktif dalam lebih dari satu kegiatan.</li>
          <li>Menampilkan daftar siswa yang memenuhi kriteria tersebut.</li>
        </ul>
        <input
          className="border p-2 rounded w-full mt-3"
          value={answers.dekomposisi}
          onChange={(e) => handleChange("dekompos isi", e.target.value)}
        />
        <button
          className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B]"
          onClick={() => checkAnswer("dekomposisi")}
        >
          Periksa
        </button>
        <button
          className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => clearAnswer("dekomposisi")}
        >
          Hapus
        </button>
        {renderFeedback("dekomposisi")}
      </section>

      {/* Soal 2 */}
      <section className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">
          2. Pengenalan Pola
        </h3>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <strong>Pertanyaan:</strong> Apa yang memengaruhi kelayakan siswa
          untuk mendapatkan penghargaan?
        </p>

        <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
          <li>
            Semakin banyak kegiatan yang diikuti, semakin besar peluangnya.
          </li>
          <li>
            Hanya siswa yang aktif dalam kegiatan tertentu yang memenuhi syarat.
          </li>
        </ul>
        <input
          className="border p-2 rounded w-full mt-3"
          value={answers.pengenalanPola}
          onChange={(e) => handleChange("pengenalanPola", e.target.value)}
        />
        <button
          className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B]"
          onClick={() => checkAnswer("pengenalanPola")}
        >
          Periksa
        </button>
        <button
          className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => clearAnswer("pengenalanPola")}
        >
          Hapus
        </button>
        {renderFeedback("pengenalanPola")}
      </section>

      {/* Soal 3 */}
      <section className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">3. Abstraksi</h3>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <strong>Pertanyaan:</strong> Data apa yang tidak digunakan dalam
          filtering?
        </p>
        <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
          <li>
            Fokus hanya pada{" "}
            <strong>Nama Siswa dan Kegiatan yang Diikuti,</strong>
            tanpa mempertimbangkan <strong>Nilai Akademik</strong> atau{" "}
            <strong>Usia</strong>.
          </li>
          <li>Mengabaikan data yang tidak relevan.</li>
        </ul>
        <input
          className="border p-2 rounded w-full mt-3"
          value={answers.abstraksi}
          onChange={(e) => handleChange("abstraksi", e.target.value)}
        />
        <button
          className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B]"
          onClick={() => checkAnswer("abstraksi")}
        >
          Periksa
        </button>
        <button
          className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => clearAnswer("abstraksi")}
        >
          Hapus
        </button>
        {renderFeedback("abstraksi")}
      </section>

      {/* Soal 4 */}
      <section className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">4. Algoritma</h3>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <strong>Pertanyaan:</strong> Berapa minimal waktu partisipasi untuk
          mendapatkan penghargaan?
        </p>
        <div className="text-gray-700 mt-3 leading-relaxed">
          <p>
            <strong>a)</strong> Pilih kolom yang ingin diterapkan filter:
          </p>
          <p>Klik judul kolom yang ingin diterapkan filter.</p>
          <p>
            <strong>b)</strong> Buka menu Filter:
          </p>
          <ul className="list-disc ml-6">
            <li>Klik kanan pada judul kolom yang dipilih.</li>
            <li>
              Pilih "Filter", lalu klik "Filter by Value of Selected Cell",
              kemudian klik kolom yang ingin diberi filter dan "Clear Filter".
            </li>
            <li>Pilih kriteria filter yang diinginkan.</li>
          </ul>
          <p>
            <strong>c)</strong> Lihat hasil pengurutan.
          </p>
          <p>
            <strong>d)</strong> Periksa kembali data.
          </p>
        </div>
        <input
          className="border p-2 rounded w-full mt-3"
          value={answers.algoritma}
          onChange={(e) => handleChange("algoritma", e.target.value)}
        />
        <button
          className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B]"
          onClick={() => checkAnswer("algoritma")}
        >
          Periksa
        </button>
        <button
          className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => clearAnswer("algoritma")}
        >
          Hapus
        </button>
        {renderFeedback("algoritma")}
      </section>

      <div className="flex justify-between mt-10 px-4">
        <a
          href="/aktivitas-peringkasan"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
        >
          ← Sebelumnya
        </a>
        <a
          href={allCorrect ? "/petunjuk-kuis1" : "#"}
          className={`px-5 py-2 rounded-lg text-white ${
            allCorrect
              ? "bg-[#255F38] hover:bg-[#1E4D2E]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!allCorrect) e.preventDefault();
          }}
        >
          Mulai Kuis →
        </a>
      </div>
    </Layout>
  );
}
