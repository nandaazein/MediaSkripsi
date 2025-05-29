import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";

export default function SummaryLesson() {
  const correctAnswers = {
    sorting: "skor",
    customSort: ["Adi dan Eka", "Adi", "Eka", "Adi Eka", "Adi,Eka", "Adi, Eka"],
    filtering: "kelas",
    filterCriteria: ["Sorting", "Sort", "Sort Z to A", "Descending"]
  };

  const [answers, setAnswers] = useState({
    sorting: "",
    customSort: "",
    filtering: "",
    filterCriteria: "",
  });

  useEffect(() => {
    if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
      document.head.appendChild(link);
    }

    if (!document.querySelector('script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
      script.async = true;
      script.onload = () => {
        if (window.ej && window.ej.spreadsheet && document.getElementById("spreadsheet1") && !document.querySelector("#spreadsheet1 .e-spreadsheet")) {
          new window.ej.spreadsheet.Spreadsheet({
            sheets: [
              {
                name: "Sheet1",
                columns: [{ width: 120 }, { width: 120 }, { width: 120 }],
                rows: [
                  {
                    cells: [
                      { value: "Nama Siswa", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
                      { value: "Kelas", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
                      { value: "Skor", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
                    ],
                  },
                  { cells: [{ value: "Rani", style: { textAlign: "center" } }, { value: "8A", style: { textAlign: "center" } }, { value: 92, format: "#,##0", style: { textAlign: "center" } }] },
                  { cells: [{ value: "Adi", style: { textAlign: "center" } }, { value: "8B", style: { textAlign: "center" } }, { value: 78, format: "#,##0", style: { textAlign: "center" } }] },
                  { cells: [{ value: "Siti", style: { textAlign: "center" } }, { value: "8C", style: { textAlign: "center" } }, { value: 85, format: "#,##0", style: { textAlign: "center" } }] },
                  { cells: [{ value: "Dedi", style: { textAlign: "center" } }, { value: "8A", style: { textAlign: "center" } }, { value: 88, format: "#,##0", style: { textAlign: "center" } }] },
                  { cells: [{ value: "Eka", style: { textAlign: "center" } }, { value: "8B", style: { textAlign: "center" } }, { value: 75, format: "#,##0", style: { textAlign: "center" } }] },
                  { cells: [{ value: "Fani", style: { textAlign: "center" } }, { value: "8C", style: { textAlign: "center" } }, { value: 90, format: "#,##0", style: { textAlign: "center" } }] },
                ],
              },
            ],
          }).appendTo("#spreadsheet1");
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const submitLatihan = async () => {
    const allAnswered = Object.values(answers).every((answer) => answer.trim() !== "");
    if (!allAnswered) {
      alert("Semua soal harus dijawab!");
      return;
    }

    try {
      let correctCount = 0;
      Object.keys(correctAnswers).forEach((field) => {
        let isCorrect = false;
        if (Array.isArray(correctAnswers[field])) {
          isCorrect = correctAnswers[field].some(
            (correct) => answers[field].trim().toLowerCase() === correct.trim().toLowerCase()
          );
        } else {
          isCorrect = answers[field].trim().toLowerCase() === correctAnswers[field].trim().toLowerCase();
        }
        if (isCorrect) correctCount++;
      });
      const score = (correctCount / 4) * 100;

      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      if (!token || !user) {
        alert("Silakan login kembali!");
        return;
      }
      const nis = JSON.parse(user).nis;
      if (!nis) {
        alert("NIS tidak ditemukan!");
        return;
      }

      await axios.post(
        `http://localhost:5000/api/students/scores/${nis}`,
        {
          latihan1: null,
          latihan2: null,
          latihan3: null,
          latihan4: score,
          kuis1: null,
          kuis2: null,
          kuis3: null,
          kuis4: null,
          evaluasi_akhir: null,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Latihan selesai!");
      window.location.href = "/rangkuman-peringkasan";
    } catch (error) {
      console.error("Error saat mengirim latihan:", error);
      if (error.response) {
        alert(`Gagal mengirim skor: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        alert("Server tidak merespons!");
      } else {
        alert(`Kesalahan: ${error.message}`);
      }
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-[darkgreen] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        BERLATIH PENGELOLAAN DATA
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-6">
        <strong>Petunjuk:</strong> Baca kasus di bawah, lalu jawab soal-soal. Lihat data di tabel untuk menjawab dengan teknik sorting dan filtering. Klik <em>“Selesai Latihan”</em> setelah selesai.
      </p>

      <div className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">
          Kasus: Kelola Data Lomba Pidato
        </h3>
        <p className="text-gray-700 mt-3 leading-relaxed text-justify">
          Kamu membantu Budi mengelola data lomba pidato. Gunakan <strong>sorting</strong> untuk mengurutkan skor dan <strong>filtering</strong> untuk menampilkan siswa kelas 8A.
        </p>

        <div className="w-full flex justify-center px-4">
          <div id="spreadsheet1" className="w-full max-w-full md:max-w-screen-md" style={{ height: "400px" }}></div>
        </div>
      </div>

      {[
        {
          key: "sorting",
          title: "1. Memecah Masalah (Dekomposisi)",
          question: "Kolom apa yang bisa diurutkan dari tertinggi ke terendah?",
          points: [
            "Lihat kolom yang dapat diurutkan.",
            "Gunakan sorting descending (Z-A) untuk urutan tertinggi ke terendah.",
          ],
        },
        {
          key: "customSort",
          title: "2. Mencari Pola (Pengenalan Pola)",
          question: "Setelah diterapkan filter untuk kelas 8B, siapa saja yang muncul di tabel?",
          points: [
            "Lihat data yang muncul setelah filter kelas diubah menjadi 8B.",
            "Perhatikan kolom nama dan skor.",
            "Tulis nama-nama siswa yang tampil setelah filtering",
          ],
        },
        {
          key: "filtering",
          title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
          question: "Kolom apa yang bisa diterapkan filtering jika ingin menampilkan siswa berdasarkan kelasnya?",
          points: [
            "Pilih kolom yang dapat diterapkan filtering.",
            "Abaikan kolom yang tidak relevan.",
          ],
        },
        {
          key: "filterCriteria",
          title: "4. Membuat Langkah-langkah (Algoritma)",
          question: "Jika ingin menampilkan siswa dari yang skor tertinggi ke terendah, apa yang harus digunakan?",
          points: [
            "Lihat kolom skor dan perhatikan apakah data perlu diurutkan atau disaring.",
            "Data tidak dihilangkan, hanya diubah urutannya.",
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