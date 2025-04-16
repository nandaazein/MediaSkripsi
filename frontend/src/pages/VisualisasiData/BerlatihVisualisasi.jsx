import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

export default function ChartLesson() {
  useEffect(() => {
    // Tambah stylesheet jika belum ada
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

    // Tambah script jika belum ada
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
                        value: "No",
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

  const [answers, setAnswers] = useState({
    decomposition: "",
    pattern: "",
    abstraction: "",
    algorithm: "",
  });

  const [feedback, setFeedback] = useState({
    decomposition: "",
    pattern: "",
    abstraction: "",
    algorithm: "",
  });

  const correctAnswers = {
    decomposition: "nama ekstrakurikuler dan jumlah anggota",
    pattern: "pramuka dan karya ilmiah remaja",
    abstraction: "kolom nomor",
    algorithm: "diagram kolom",
  };

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setFeedback((prev) => ({ ...prev, [field]: "" }));
  };

  const checkAnswer = (field) => {
    const userInput = answers[field].toLowerCase().replace(/\s+/g, "");
    const correctInput = correctAnswers[field]
      .toLowerCase()
      .replace(/\s+/g, "");
    const isCorrect = userInput.includes(correctInput);
    setFeedback((prev) => ({
      ...prev,
      [field]: isCorrect ? "✅ Jawaban benar!" : "❌ Coba lagi, ya!",
    }));
  };

  const clearAnswer = (field) => {
    setAnswers((prev) => ({ ...prev, [field]: "" }));
    setFeedback((prev) => ({ ...prev, [field]: "" }));
  };

  const allCorrect = Object.values(feedback).every((val) => val.includes("✅"));

  return (
    <Layout>
      <h1 className="text-xl md:text-2xl text-center font-bold mb-4 p-4 bg-[#255F38] text-white rounded">
        Mari Berlatih: Visualisasi Data
      </h1>

      <p className="px-4 mb-6 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
        <strong>Petunjuk:</strong> Baca studi kasus di bawah ini, lalu jawab
        pertanyaan pada setiap bagian yang mewakili langkah-langkah berpikir
        komputasional. Klik tombol <em>“Periksa”</em> untuk mengetahui apakah
        jawabanmu sudah tepat. Jangan khawatir, kamu bisa mencoba lagi jika
        belum benar!
      </p>

      {/* Studi Kasus */}
      <section className="p-6 bg-white rounded shadow-lg">
        <h2 className="text-lg font-semibold text-green-700">Studi Kasus</h2>
        <p className="px-4 mt-2 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
          Sebagai pengurus OSIS, kamu diminta membuat laporan untuk kepala
          sekolah mengenai minat siswa terhadap kegiatan ekstrakurikuler. Data
          jumlah anggota tiap ekstrakurikuler sudah dicatat, namun sulit
          dipahami hanya dari tabel. Untuk membantu analisis, kamu ingin
          menampilkan data ini dalam bentuk diagram agar lebih mudah dibaca dan
          dipresentasikan.
        </p>

        <div className="flex justify-center w-full px-4 mt-5">
          <div
            id="spreadsheet"
            className="w-full max-w-full md:max-w-screen-md"
            style={{ height: "600px" }}
          ></div>
        </div>
      </section>

      {/* Fungsi membuat section */}
      {[
        {
          key: "decomposition",
          title: "1. Dekomposisi",
          question:
            "Apa saja informasi penting yang kamu butuhkan dari tabel untuk membuat grafik?",
          points: [
            "Identifikasi elemen-elemen penting dari data (misalnya nama kegiatan dan jumlah peserta)",
            "Tentukan bagian mana dari data yang akan digunakan dalam grafik",
          ],
        },
        {
          key: "pattern",
          title: "2. Pengenalan Pola",
          question:
            "Ekstrakurikuler mana yang paling banyak peminatnya? Dan mana yang paling sedikit?",
          points: [
            "Bandingkan jumlah anggota tiap ekstrakurikuler",
            "Temukan pola yang menonjol (tertinggi dan terendah)",
          ],
        },
        {
          key: "abstraction",
          title: "3. Abstraksi",
          question:
            "Kolom atau informasi apa yang bisa diabaikan karena tidak dibutuhkan dalam grafik?",
          points: [
            "Tentukan mana informasi yang tidak relevan untuk visualisasi",
            "Hilangkan data yang tidak diperlukan agar grafik lebih fokus",
          ],
        },
        {
          key: "algorithm",
          title: "4. Algoritma",
          question:
            "Jenis grafik apa yang paling cocok untuk menampilkan data di atas?",
          points: [
            "Tentukan jenis grafik yang paling tepat untuk membandingkan data kategori",
            "Alasan pemilihan jenis grafik harus sesuai dengan tujuan penyajian",
          ],
        },
      ].map(({ key, title, question, points }) => (
        <section key={key} className="p-6 mt-6 bg-white rounded shadow-lg">
          <h3 className="font-semibold text-green-700 text-md">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-700">
            <strong>Pertanyaan:</strong> {question}
          </p>
          <ul className="mt-2 ml-6 text-sm text-gray-700 list-disc md:text-base">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <input
            className="w-full p-2 mt-3 border rounded"
            placeholder="Jawaban Anda"
            value={answers[key]}
            onChange={(e) => handleChange(key, e.target.value)}
          />
          <button
            className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B]"
            onClick={() => checkAnswer(key)}
          >
            Periksa
          </button>
          <button
            className="px-4 py-1 mt-2 ml-2 text-white bg-red-500 rounded hover:bg-red-600"
            onClick={() => clearAnswer(key)}
          >
            Hapus
          </button>
          {feedback[key] && (
            <p
              className={`mt-2 ${
                feedback[key].includes("✅") ? "text-green-600" : "text-red-500"
              }`}
            >
              {feedback[key]}
            </p>
          )}
        </section>
      ))}

      {/* Navigasi */}
      <div className="flex justify-between px-4 mt-10">
        <a
          href="/aktivitas-visualisasi"
          className="px-5 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
        >
          ← Sebelumnya
        </a>
        <a
          href={allCorrect ? "/petunjuk-kuis-visualisasi" : "#"}
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
