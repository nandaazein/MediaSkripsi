import { useState } from "react";
import Layout from "../../components/Layout";
import axios from 'axios';

export default function BerlatihPencarian() {
  const correctAnswers = {
    tableReference: ["daftar kategori prestasi", "kategori prestasi"],
    studentCategory: "cukup",
    unnecessaryInfo: "nama siswa",
    searchVlookup: "=VLOOKUP(C4;$A$9:$B$13;2;TRUE)",
    searchChoose: "=CHOOSE(E4;\"Piala\";\"Medali\";\"Buku Tulis\";\"Pensil Warna\")"
  };

  const [answers, setAnswers] = useState({
    tableReference: "",
    studentCategory: "",
    unnecessaryInfo: "",
    searchVlookup: "",
    searchChoose: ""
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const submitLatihan = async () => {
    // Periksa apakah semua kolom jawaban sudah terisi
    const allAnswered = Object.values(answers).every(answer => answer.trim() !== "");
    
    if (!allAnswered) {
      alert("Anda belum menyelesaikan semua soal yang ada");
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      const nis = user?.nis;

      if (!token || !nis) {
        alert("Autentikasi gagal. Silakan login kembali.");
        return;
      }

      let correctCount = 0;
      Object.keys(correctAnswers).forEach((field) => {
        const userAnswer = answers[field].trim().toLowerCase();
        const correctAnswer = correctAnswers[field];
        const isCorrect = Array.isArray(correctAnswer)
          ? correctAnswer.some(ans => ans.trim().toLowerCase() === userAnswer)
          : correctAnswer.trim().toLowerCase() === userAnswer;
        if (isCorrect) correctCount++;
        console.log(`Field: ${field}, User Answer: ${userAnswer}, Correct Answer: ${JSON.stringify(correctAnswer)}, Is Correct: ${isCorrect}`);
      });

      const score = (correctCount / 5) * 100;
      console.log(`Calculated Score: ${score}, Correct Count: ${correctCount}`);

      // Kirim hanya skor numerik ke database
      await axios.post(
        `http://localhost:5000/api/students/scores/${nis}`,
        {
          latihan1: score,
          latihan2: null,
          latihan3: null,
          latihan4: null,
          kuis1: null,
          kuis2: null,
          kuis3: null,
          kuis4: null,
          evaluasi_akhir: null
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Score sent to database successfully");
      // Tampilkan alert dan arahkan ke halaman rangkuman setelah klik OK
      alert("Sudah selesai mengerjakan Mari Berlatih");
      window.location.href = "/rangkuman-pencarian";
    } catch (error) {
      console.error("Error saat mengirim latihan:", error.response?.data || error.message);
      alert("Terjadi kesalahan saat mengirim skor latihan: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        MARI BERLATIH MENCARI DATA
      </div>

      {/* Petunjuk Umum */}
      <section className="p-4 bg-green-100 rounded shadow-md mb-6">
        <h3 className="text-lg font-semibold text-[#255F38] mb-2">Petunjuk Umum</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm md:text-base">
          <li>Bacalah studi kasus di bawah ini dengan saksama.</li>
          <li>Jawab setiap pertanyaan pada bagian yang yang telah disediakan.</li>
          <li>Setelah selesai menjawab semua pertanyaan, klik tombol <em>“Selesai Latihan”</em> untuk mengumpulkan jawabanmu.</li>
        </ol>
      </section>

      {/* Studi Kasus */}
      <section className="p-6 bg-white rounded shadow-lg mb-6">
        <h3 className="text-lg font-semibold text-green-700 mb-3">Studi Kasus: Berlatih Pencarian Data</h3>
        <p className="px-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
          SMP Bintang Jaya mengadakan lomba mewarnai untuk siswa kelas 8. Setiap siswa mendapatkan poin berdasarkan hasil karya mereka, dan poin ini digunakan untuk menentukan kategori prestasi (misalnya, Cukup, Baik, atau Sangat Baik). Selain itu, panitia memberikan hadiah berdasarkan urutan pemenang (peringkat). Kamu diminta membantu panitia untuk menentukan kategori prestasi dan hadiah menggunakan fungsi VLOOKUP dan CHOOSE.
        </p>
        <div className="w-full flex justify-center px-4 mt-5">
          <iframe
            width="800"
            height="394"
            style={{ border: "1px solid #ccc" }} 
            frameBorder="0"                      
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/jtwahc2a855af8e2a49cca0946a4458597bb2?mode=embed"
          />
        </div>
      </section>

      {/* Soal Latihan */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-[#255F38] mb-4">Soal Latihan</h3>
        {[
          {
            key: "tableReference",
            title: "1. Memecah Masalah (Dekomposisi)",
            question: "Daftar apa yang digunakan untuk mencari kategori prestasi berdasarkan poin lomba?",
            points: ["Lihat tabel yang berisi informasi tentang poin dan kategori.", "Pilih tabel yang akan digunakan untuk VLOOKUP."]
          },
          {
            key: "studentCategory",
            title: "2. Mencari Pola (Pengenalan Pola)",
            question: "Apa kategori prestasi siswa Budi dengan poin lomba 65?",
            points: ["Cari poin lomba Budi di Tabel 1.", "Cocokkan poin tersebut dengan poin minimal di Tabel 2."]
          },
          {
            key: "unnecessaryInfo",
            title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
            question: "Informasi apa yang tidak perlu saat mencari kategori prestasi?",
            points: ["Fokus hanya pada poin lomba dan kategori.", "Pikirkan apakah nama siswa diperlukan."]
          },
          {
            key: "searchVlookup",
            title: "4a. Membuat Langkah-langkah (Algoritma - VLOOKUP)",
            question: "Tulis rumus VLOOKUP untuk mencari kategori prestasi siswa Budi jika poin lomba ada di kolom C dan tabel kategori ada di sel A9:B13.",
            points: ["Gunakan =VLOOKUP(poin_lomba, rentang_tabel_referensi, posisi_kolom, TRUE).", "Pilih kolom kedua untuk kategori."]
          },
          {
            key: "searchChoose",
            title: "4b. Membuat Langkah-langkah (Algoritma - CHOOSE)",
            question: "Tulis rumus CHOOSE untuk menampilkan hadiah siswa Budi berdasarkan peringkat di kolom E dan tabel hadiah ada di sel E10:E13.",
            points: ["Gunakan =CHOOSE(kolom_peringkat, hadiah1, hadiah2, ...).", "Urutkan hadiah sesuai peringkat: Piala, Medali, Buku Tulis, Pensil Warna."]
          }
        ].map(({ key, title, question, points }) => (
          <div key={key} className="p-6 bg-white rounded shadow-lg mb-6">
            <h4 className="text-md font-semibold text-green-700 mb-3">{title}</h4>
            <p className="text-gray-700 leading-relaxed">
              <strong>Pertanyaan:</strong> {question}
            </p>
            <p className="text-gray-700 mt-2 leading-relaxed">
              <strong>Petunjuk:</strong>
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-1 text-sm md:text-base">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="text-gray-700 mt-3 leading-relaxed">
              <strong>Jawaban Anda:</strong>
            </p>
            <input
              className="border p-2 rounded w-full mt-2"
              placeholder="Tulis jawabanmu di sini"
              value={answers[key]}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        ))}
      </section>

      {/* Catatan Penting */}
      <section className="p-4 bg-yellow-50 rounded shadow-md mb-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Catatan Penting</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
          <li>Pastikan jawabanmu sesuai dengan langkah-langkah Computational Thinking (Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma).</li>
          <li>Gunakan data yang relevan dari studi kasus untuk mendukung jawabanmu.</li>
          <li>Setelah selesai, jangan lupa klik tombol <em>“Selesai Latihan”</em> untuk mengumpulkan hasil latihanmu.</li>
        </ul>
      </section>

      {/* Tombol untuk submit latihan */}
      <div className="flex justify-center mt-8">
        <button
          onClick={submitLatihan}
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
        >
          Selesai Latihan
        </button>
      </div>
    </Layout>
  );
}