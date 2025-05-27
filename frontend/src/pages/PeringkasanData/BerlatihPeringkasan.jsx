import { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";

export default function SummaryLesson() {
  const correctAnswers = {
    sumif: ["nama dan poin", "nama", "poin"],
    sumifs: ["C2:C11 dan D2:D11", "C2:C11", "D2:D11"],
    countif: ["kolom kegiatan", "kegiatan"],
    countifs: '=COUNTIFS(C2:C11;"8A";D2:D11;"Kebersihan")',
  };

  const [answers, setAnswers] = useState({
    sumif: "",
    sumifs: "",
    countif: "",
    countifs: "",
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const submitLatihan = async () => {
    const allAnswered = Object.values(answers).every(
      (answer) => answer.trim() !== ""
    );
    if (!allAnswered) {
      alert("Anda belum menyelesaikan semua soal yang ada");
      return;
    }

    try {
      let correctCount = 0;
      Object.keys(correctAnswers).forEach((field) => {
        let isCorrect = false;
        if (Array.isArray(correctAnswers[field])) {
          isCorrect = correctAnswers[field].some(
            (answer) =>
              answers[field].trim().toLowerCase() === answer.trim().toLowerCase()
          );
        } else {
          isCorrect =
            answers[field].trim().toLowerCase() ===
            correctAnswers[field].trim().toLowerCase();
        }
        if (isCorrect) correctCount++;
      });
      const score = (correctCount / 4) * 100;

      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      if (!token || !user) {
        alert("Token atau data pengguna tidak ditemukan. Silakan login kembali.");
        return;
      }
      const nis = JSON.parse(user).nis;
      if (!nis) {
        alert("NIS tidak ditemukan dalam data pengguna.");
        return;
      }

      await axios.post(
        `http://localhost:5000/api/students/scores/${nis}`,
        {
          latihan1: null,
          latihan2: null,
          latihan3: score,
          latihan4: null,
          kuis1: null,
          kuis2: null,
          kuis3: null,
          kuis4: null,
          evaluasi_akhir: null,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Sudah selesai mengerjakan Mari Berlatih");
      window.location.href = "/rangkuman-peringkasan";
    } catch (error) {
      console.error("Error saat mengirim latihan:", error);
      if (error.response) {
        alert(
          `Gagal mengirim skor: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else if (error.request) {
        alert("Tidak ada respons dari server. Periksa koneksi atau server.");
      } else {
        alert(`Terjadi kesalahan: ${error.message}`);
      }
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        MARI BERLATIH PERINGKASAN DATA
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-6">
        <strong>Petunjuk:</strong> Baca cerita di bawah ini, lalu jawab pertanyaan
        di setiap bagian. Gunakan data di sheet untuk mengisi jawaban sesuai rumus
        yang tepat. Setelah selesai, klik tombol{" "}
        <em>“Selesai Latihan”</em> untuk mengumpulkan jawabanmu.
      </p>

      {/* Studi Kasus */}
      <div className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">
          Studi Kasus Berlatih Peringkasan Data
        </h3>
        <p className="text-gray-700 mt-3 leading-relaxed text-justify">
          Kamu anggota OSIS yang sedang merekap data partisipasi siswa dalam
          kegiatan sekolah. Gunakan fungsi <strong>SUMIF, SUMIFS, COUNTIF,</strong> dan{" "}
          <strong>COUNTIFS</strong> untuk membantu analisis berikut.
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
      </div>

      {/* Sections */}
      {[
        {
          key: "sumif",
          title: "1. Memecah Masalah (Dekomposisi)",
          question:
            "Apa saja nama kolom yang harus digunakan untuk menghitung total poin Naya dengan fungsi SUMIF?",
          points: [
            "Identifikasi kolom yang bisa digunakan sebagai kriteria pencarian.",
            "Tentukan kolom yang berisi data angka yang ingin dijumlahkan.",
          ],
        },
        {
          key: "sumifs",
          title: "2. Mencari Pola (Pengenalan Pola)",
          question:
            "Sebutkan range kolom kriteria yang digunakan untuk menghitung total poin siswa kelas 8A yang mengikuti kegiatan Kebersihan menggunakan fungsi SUMIFS.",
          points: [
            "Identifikasi kolom yang berisi kriteria pertama.",
            "Identifikasi kolom yang berisi kriteria kedua.",
            "Pastikan kamu menemukan kolom-kolom yang menjadi syarat dalam fungsi SUMIFS.",
          ],
        },
        {
          key: "countif",
          title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
          question:
            "Kolom mana yang digunakan untuk menghitung jumlah siswa yang ikut kegiatan Olahraga dengan fungsi COUNTIF?",
          points: [
            "Fokus pada kolom yang berisi jenis kegiatan saja.",
            "Abaikan kolom lain seperti nama siswa atau kelas yang tidak diperlukan.",
          ],
        },
        {
          key: "countifs",
          title: "4. Membuat Langkah-langkah (Algoritma)",
          question:
            "Tulis rumus COUNTIFS yang tepat untuk menghitung jumlah siswa kelas 8A yang ikut kegiatan Kebersihan.",
          points: [
            "Gunakan range kolom kelas sebagai kriteria pertama.",
            "Gunakan range kolom kegiatan sebagai kriteria kedua.",
            "Gunakan fungsi COUNTIFS dengan kriteria \"8A\" dan \"Kebersihan\".",
          ],
        },
      ].map(({ key, title, question, points }) => (
        <section key={key} className="p-6 bg-white rounded shadow-lg mt-6">
          <h3 className="text-md font-semibold text-green-700">{title}</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            <strong>Pertanyaan:</strong> {question}
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <input
            className="border p-2 rounded w-full mt-3"
            placeholder="Jawaban Anda"
            value={answers[key]}
            onChange={(e) => handleChange(key, e.target.value)}
          />
        </section>
      ))}

      {/* Tombol submit */}
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
