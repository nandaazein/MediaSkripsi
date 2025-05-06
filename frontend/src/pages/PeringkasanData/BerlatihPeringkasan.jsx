import { useState } from "react";
import Layout from "../../components/Layout";

export default function SummaryLesson() {
  const correctAnswers = {
    sumif: '=SUMIF(B2:B11;"Naya";E2:E11)',
    sumifs: '=SUMIFS(E2:E11;C2:C11;"8A";D2:D11;"Kebersihan")',
    countif: '=COUNTIF(D2:D11;"Olahraga")',
    countifs: '=COUNTIFS(C2:C11;"8A";D2:D11;"Kebersihan")',
  };

  const [answers, setAnswers] = useState({
    sumif: "",
    sumifs: "",
    countif: "",
    countifs: "",
  });

  const [feedback, setFeedback] = useState({
    sumif: null,
    sumifs: null,
    countif: null,
    countifs: null,
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

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        MARI BERLATIH PERINGKASAN DATA
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-6">
        <strong>Petunjuk:</strong> Baca studi kasus dan tabel data di bawah ini,
        kemudian isilah rumus yang tepat untuk setiap pertanyaan berdasarkan
        fungsi spreadsheet yang sesuai. Klik tombol <em>“Periksa”</em> untuk
        mengetahui apakah jawabanmu sudah tepat. Jangan khawatir, kamu bisa
        mencoba lagi jika belum benar!
      </p>

      <section className="p-6 bg-white rounded shadow-lg">
        <h2 className="text-lg font-semibold text-green-700">Studi Kasus</h2>
        <p className="text-gray-700 text-sm md:text-base mt-2 text-justify leading-relaxed px-4">
          Kamu adalah anggota OSIS yang sedang merekap kegiatan partisipasi
          siswa dalam berbagai kegiatan sekolah. Data ini akan digunakan untuk
          menentukan siapa saja yang paling aktif dan kegiatan apa yang paling
          diminati. Kamu akan menggunakan rumus fungsi{" "}
          <strong>SUMIF, SUMIFS, COUNTIF,</strong> dan <strong>COUNTIFS</strong>{" "}
          untuk membantu analisis ini.
        </p>
        <div className="w-full flex justify-center px-4 mt-5">
          <iframe
            width="80%"
            height="400"
            style={{ border: "1px solid #e7e7e7" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/5ein2bd127829d1bd4a3c85ad2b0af6a05621?mode=embed"
          ></iframe>
        </div>
      </section>

      {/* Soal 1 */}
      <section className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">1. Dekomposisi</h3>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <strong>Pertanyaan:</strong> Berapa total poin yang diperoleh Naya?
        </p>
        <p className="text-gray-600 text-sm mt-3 italic">
          Silakan kerjakan terlebih dahulu pada spreadsheet di atas. Gunakan
          fungsi SUMIF untuk mencari jumlah poin yang diperoleh oleh Naya.
          Setelah menemukan jawabannya, salin rumus lengkapnya (misalnya:{" "}
          <code>=SUMIF(...)</code>) ke dalam kolom di bawah.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
          <li>Mengidentifikasi data nama siswa.</li>
          <li>Menentukan kolom poin yang dijumlahkan.</li>
          <li>Menggunakan fungsi SUMIF berdasarkan nama.</li>
        </ul>
        <input
          className="border p-2 rounded w-full mt-3"
          value={answers.sumif}
          onChange={(e) => handleChange("sumif", e.target.value)}
        />
        <button
          className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B]"
          onClick={() => checkAnswer("sumif")}
        >
          Periksa
        </button>
        <button
          className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => clearAnswer("sumif")}
        >
          Hapus
        </button>
        {renderFeedback("sumif")}
      </section>

      {/* Soal 2 */}
      <section className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">
          2. Pengenalan Pola
        </h3>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <strong>Pertanyaan:</strong> Berapa total poin kelas 8A pada kegiatan
          Kebersihan?
        </p>
        <p className="text-gray-600 text-sm mt-3 italic">
          Silakan kerjakan terlebih dahulu pada spreadsheet di atas. Gunakan
          fungsi SUMIFS dengan dua kriteria: kelas 8A dan kegiatan Kebersihan.
          Setelah mendapatkan jawabannya, salin rumus lengkapnya ke kolom
          berikut.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
          <li>Menemukan pola: dua kriteria digunakan.</li>
          <li>Siswa dari kelas tertentu dan kegiatan tertentu.</li>
          <li>Gunakan fungsi SUMIFS.</li>
        </ul>
        <input
          className="border p-2 rounded w-full mt-3"
          value={answers.sumifs}
          onChange={(e) => handleChange("sumifs", e.target.value)}
        />
        <button
          className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B]"
          onClick={() => checkAnswer("sumifs")}
        >
          Periksa
        </button>
        <button
          className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => clearAnswer("sumifs")}
        >
          Hapus
        </button>
        {renderFeedback("sumifs")}
      </section>

      {/* Soal 3 */}
      <section className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">3. Abstraksi</h3>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <strong>Pertanyaan:</strong> Berapa jumlah siswa yang ikut kegiatan
          Olahraga?
        </p>
        <p className="text-gray-600 text-sm mt-3 italic">
          Silakan kerjakan terlebih dahulu pada spreadsheet di atas. Fokuslah
          hanya pada kolom kegiatan. Gunakan fungsi COUNTIF untuk menghitung
          berapa banyak siswa yang ikut kegiatan Olahraga.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
          <li>Fokus pada kolom kegiatan saja.</li>
          <li>Mengabaikan kolom lain yang tidak diperlukan.</li>
          <li>Gunakan COUNTIF.</li>
        </ul>
        <input
          className="border p-2 rounded w-full mt-3"
          value={answers.countif}
          onChange={(e) => handleChange("countif", e.target.value)}
        />
        <button
          className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B]"
          onClick={() => checkAnswer("countif")}
        >
          Periksa
        </button>
        <button
          className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => clearAnswer("countif")}
        >
          Hapus
        </button>
        {renderFeedback("countif")}
      </section>

      {/* Soal 4 */}
      <section className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">4. Algoritma</h3>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <strong>Pertanyaan:</strong> Berapa jumlah siswa kelas 8A yang ikut
          kegiatan Kebersihan?
        </p>
        <p className="text-gray-600 text-sm mt-3 italic">
          Silakan kerjakan terlebih dahulu pada spreadsheet. Gunakan fungsi
          COUNTIFS dengan dua kriteria: siswa kelas 8A dan kegiatan Kebersihan.
          Setelah berhasil, salin rumus lengkapnya ke kolom berikut.
        </p>
        <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
          <li>Menggunakan dua syarat sekaligus.</li>
          <li>Kelas 8A dan kegiatan Kebersihan.</li>
          <li>Terapkan fungsi COUNTIFS untuk menghitung.</li>
        </ul>
        <input
          className="border p-2 rounded w-full mt-3"
          value={answers.countifs}
          onChange={(e) => handleChange("countifs", e.target.value)}
        />
        <button
          className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B]"
          onClick={() => checkAnswer("countifs")}
        >
          Periksa
        </button>
        <button
          className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => clearAnswer("countifs")}
        >
          Hapus
        </button>
        {renderFeedback("countifs")}
      </section>

      <div className="flex justify-between mt-10 px-4">
        <a
          href="/aktivitas-peringkasan"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
        >
          ← Sebelumnya
        </a>
        <a
          href="/rangkuman-peringkasan"
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}