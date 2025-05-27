
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from 'axios';

export default function ChartLesson() {
  useEffect(() => {
    if (
      !document.querySelector(
        'link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]'
      )
    ) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
      document.head.appendChild(link);
    }

    if (
      !document.querySelector(
        'script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
      script.async = true;
      script.onload = () => {
        if (
          window.ej &&
          window.ej.spreadsheet &&
          !document.querySelector("#spreadsheet .e-spreadsheet")
        ) {
          const borderStyle = {
            border: "1px solid #ccc",
            textAlign: "center",
          };

          new window.ej.spreadsheet.Spreadsheet({
            sheets: [
              {
                name: "Data Ekstrakurikuler",
                columns: [{ width: 60 }, { width: 200 }, { width: 160 }],
                rows: [
                  {
                    cells: [
                      {
                        value: "Nomor",
                        style: {
                          ...borderStyle,
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                        },
                      },
                      {
                        value: "Nama Ekstrakurikuler",
                        style: {
                          ...borderStyle,
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                        },
                      },
                      {
                        value: "Jumlah Anggota",
                        style: {
                          ...borderStyle,
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                        },
                      },
                    ],
                  },
                  ...[
                    ["1", "Pramuka", "45"],
                    ["2", "Paskibra", "30"],
                    ["3", "Futsal", "38"],
                    ["4", "PMR", "25"],
                    ["5", "Bahasa Inggris Club", "20"],
                    ["6", "Karya Ilmiah Remaja", "15"],
                  ].map(([no, nama, jumlah]) => ({
                    cells: [
                      { value: no, style: borderStyle },
                      { value: nama, style: borderStyle },
                      { value: jumlah, style: borderStyle },
                    ],
                  })),
                ],
              },
            ],
          }).appendTo("#spreadsheet");
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const correctAnswers = {
    decomposition: "jumlah anggota",
    pattern: "pramuka",
    abstraction: "nomor",
    algorithm: ["kolom", "batang", "bar", "column", "bar chart", "column chart"],
  };

  const [answers, setAnswers] = useState({
    decomposition: "",
    pattern: "",
    abstraction: "",
    algorithm: "",
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const submitLatihan = async () => {
    const allAnswered = Object.values(answers).every(answer => answer.trim() !== "");
    
    if (!allAnswered) {
      alert("Anda belum menyelesaikan semua soal yang ada");
      return;
    }

    try {
      let correctCount = 0;
      Object.keys(correctAnswers).forEach((field) => {
        let isCorrect = false;
        if (Array.isArray(correctAnswers[field])) {
          isCorrect = correctAnswers[field].some(answer =>
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

      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
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
          latihan2: score, // Pastikan nama field sesuai dengan backend
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

      alert("Sudah selesai mengerjakan Mari Berlatih");
      window.location.href = "/rangkuman-visualisasi";
    } catch (error) {
      console.error("Error saat mengirim latihan:", error);
      if (error.response) {
        alert(`Gagal mengirim skor: ${error.response.data.message || error.response.statusText}`);
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
        MARI BERLATIH VISUALISASI DATA
      </div>

      <p className="px-4 mb-6 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
        <strong>Petunjuk:</strong> Baca studi kasus di bawah ini, lalu cobalah menjawab pertanyaan di setiap bagian pada sheet yang tersedia. Setelah selesai, klik tombol <em>“Selesai Latihan”</em> untuk mengumpulkan jawabanmu.
      </p>

      <div className="p-6 bg-white rounded shadow-lg mt-6">
        <h3 className="text-md font-semibold text-green-700">Studi Kasus Berlatih Visualisasi Data</h3>
        <p className="px-4 mt-2 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
          Sebagai pengurus OSIS, kamu diminta membuat laporan untuk kepala sekolah mengenai minat siswa terhadap kegiatan ekstrakurikuler. Data jumlah anggota tiap ekstrakurikuler sudah dicatat, namun sulit dipahami hanya dari tabel. Untuk membantu analisis, kamu ingin menampilkan data ini dalam bentuk diagram agar lebih mudah dibaca dan dipresentasikan.
        </p>
        <div className="flex justify-center w-full px-4 mt-5">
          <div
            id="spreadsheet"
            className="w-full max-w-full md:max-w-screen-md"
            style={{ height: "600px" }}
          ></div>
        </div>
      </div>

      {[
        {
          key: "decomposition",
          title: "1. Memecah Masalah (Dekomposisi)",
          question: "Data utama apa yang diperlukan untuk membuat grafik perbandingan ekstrakurikuler?",
          points: [
            "Identifikasi elemen penting dari data untuk grafik.",
            "Fokus pada data numerik yang akan divisualisasikan."
          ],
        },
        {
          key: "pattern",
          title: "2. Mencari Pola (Pengenalan Pola)",
          question: "Ekstrakurikuler apa yang memiliki anggota paling banyak?",
          points: [
            "Bandingkan jumlah anggota tiap ekstrakurikuler.",
            "Cari nilai tertinggi dalam data."
          ],
        },
        {
          key: "abstraction",
          title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
          question: "Kolom apa yang tidak diperlukan dalam grafik perbandingan?",
          points: [
            "Tentukan informasi yang tidak relevan untuk visualisasi.",
            "Fokus pada data yang mendukung tujuan grafik."
          ],
        },
        {
          key: "algorithm",
          title: "4. Membuat Langkah-langkah (Algoritma)",
          question: "Jenis grafik apa yang cocok untuk membandingkan jumlah anggota ekstrakurikuler?",
          points: [
            "Pilih jenis grafik yang tepat untuk data kategori.",
            "Pastikan grafik memudahkan perbandingan.",
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
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md cursor-pointer"
        >
          Selesai Latihan
        </button>
      </div>
    </Layout>
  );
}